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