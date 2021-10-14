'use strict'

const Show = require('../models').show
const { QueryTypes } = require('sequelize');


exports.store = async function(req, res) {
    try{
      console.log(req.body)
        const data = {
           show_number: req.body.show_number,
           show_time: req.body.show_time,
           show_place: req.body.show_place,
           show_sits: req.body.show_sits,
           event_id: req.body.event_id,
        }
        const show = new Show(data)
        await show.save()
        res.json({
            error: null,
            data: show
          })

    } catch (error) {
        res.status(400).json({error})
    }
}

exports.get = async function(req, res) {
  try{
    const shows = await Show.findAll({
        where: {
          event_id: req.params.event_id
        }
    })
      res.json({
        error: null,
        data: shows
      })

} catch (error) {
    res.status(400).json({error})
}
}

exports.update = async function(req, res) {
    try {
      const show = await Show.findOne({ 
        where: {
          show_id: req.body.show.show_id
        }
       })
       console.log(req.body)
      await show.update({
        show_number: req.body.show.show_number,
        show_time: req.body.show.show_time,
        show_place: req.body.show.show_place,
        show_sits: req.body.show.show_sits
      })
      res.json({
        error: null,
        data: show
      })
    } catch (error) {
      res.status(400).json({error})
    }
  }

  exports.delete = async function(req, res) {
    try {
      const show = await Show.findOne({ 
        where: {
          show_id: req.body.show_id
        }
       })
       console.log(show)
      await show.destroy()
      res.json({
        error: null,
        data: show
      })
    } catch (error) {
      res.status(400).json({error})
    }
  }