'use strict'

const Event = require('../models').event

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
        const events = await Event.findAll()
        res.json({
            error: null,
            data: events
          })

    } catch (error) {
        res.status(400).json({error})
    }
}

exports.getByDate = async function(req, res) {
    try{
        const events = await Event.findAll({
            where: {
              event_date: req.params.event_date
            }
        })
          res.json({
            error: null,
            data: events
          })

    } catch (error) {
        res.status(400).json({error})
    }
}