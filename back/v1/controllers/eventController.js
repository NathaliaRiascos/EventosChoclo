'use strict'

const Event = require('../models').event
const Show = require('../models').show
const { QueryTypes } = require('sequelize');
const moment = require('moment')
const { Op } = require("sequelize");


exports.store = async function(req, res) {
  try{
      const data = {
          event_name: req.body.event_name,
          event_date: req.body.event_date,
          event_shows: req.body.event_shows,
          event_description: req.body.event_description,
          event_price: req.body.event_price,
          event_img: req.body.event_img
      }
      const event = new Event(data)
      await event.save()
      res.json({
          error: null,
          data: event
        })

  } catch (error) {
      res.status(400).json({error})
  }
}

exports.get = async function(req, res) {
  try{

    const eventsReq = await Event.findAll({
        include: [{
          model: Show
        }]
      })
      res.json({
          error: null,
          data: eventsReq
      })

  } catch (error) {
      res.status(400).json({error})
  }
}

exports.getByDate = async function(req, res) {
  try{
    
      const nums = req.params.event_date.split('-')
      if(nums.length > 1){
        const eventsReq = await Event.findAll({
          where: {
            event_date: new Date(req.params.event_date)
          },
          include: [{
            model: Show
          }]
        })
        res.json({
          error: null,
          data: eventsReq
        })
      }else {
        const param = '2021-'+ req.params.event_date + '-5'
        const eventsReq = await Event.findAll({
          where: {
            event_date: {
              [Op.between]: [moment(new Date(param)).startOf('month').format('YYYY-MM-DD'), moment(new Date(param)).endOf('month').format('YYYY-MM-DD')],
            }
          },
          include: [{
            model: Show
          }]
        })
        res.json({
          error: null,
          data: eventsReq
        })
      }
      

  } catch (error) {
      console.log(error)
      res.status(400).json({error})
  }
}

exports.update = async function(req, res) {
  try {
    const event = await Event.findOne({ 
      where: {
        event_id: req.body.event.event_id
      }
      })
    await event.update({
      event_name: req.body.event.event_name,
      event_date: req.body.event.event_date,
      event_description: req.body.event.event_description,
      event_price: req.body.event.event_price,
      event_img: req.body.event.event_img
    })
    res.json({
      error: null,
      data: event
    })
  } catch (error) {
    res.status(400).json({error})
  }
}

exports.delete = async function(req, res) {
  try {
    const event = await Event.findOne({ 
      where: {
        event_id: req.body.event_id
      }
      })
    await event.destroy()
    res.json({
      error: null,
      data: event
    })
  } catch (error) {
    res.status(400).json({error})
  }
}

exports.getById = async function (req, res) {
  try{
    const param = req.params.id
    const event = await Event.findOne({
      where: {
        event_id: param
      },
      include: [{
        model: Show
      }]
    })
    res.json({
      error: null,
      data: event
    })
  } catch (error) {
    res.status(400).json({error})
  }
}