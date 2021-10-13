'use strict'

const Event = require('../models').event
const { QueryTypes } = require('sequelize');


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
        let events = []
        const eventsReq = await Event.findAll()
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
        let events = []
        const eventsReq = await Event.findAll({
            where: {
              event_date: req.params.event_date
            }
        })
          res.json({
            error: null,
            data: eventsReq
          })

    } catch (error) {
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
       console.log(req.body)
      await event.save({
        event_name: req.body.event.event_name,
        event_date: req.body.event.event_date,
        event_description: req.body.event.event_description,
        event_price: req.body.event.event_price,
        event_img: req.body.event.event_img
      })
      res.json({
        error: null,
        data: playlist
      })
    } catch (error) {
      res.status(400).json({error})
    }
  }