'use strict'

const Sell = require('../models').sell
const User = require('../models').user
const Event = require('../models').event
const nodemailer = require('nodemailer')
const QRCode = require('qrcode')
const transport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'john.alexander.martinez@correounivalle.edu.co',
        pass: 'izbzifhmmljfghnt',
    },
})

exports.store = async function(req, res) {
    try{
        const data = {
           user_id: req.body.user_id,
           event_id: req.body.event_id
        }
        const sell = new Sell(data)
        await sell.save()

        const user = await User.findOne({
          where: {
            user_id: req.body.user_id
          }
        })

        const img = await QRCode.toDataURL(process.env.APP_URL + '/voucher/' + sell.sell_id)

        const html = 'Esta es tu boleta </br> <img src="' + img + '">'

        const mailOptions = {
          from: 'john.alexander.martinez@correounivalle.edu.co',
          to: user.user_email,
          subject: 'Tu boleta',
          attachDataUrls: true,
          html: html
        }

        transport.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.log(error)
          } else {
            console.log('Email sent: ' + info.response)
          }
        })
        res.json({
          error: null,
          data: sell
        })

    } catch (error) {
        res.status(400).json({error})
    }
}

exports.getValues = async function(req, res) {
  try{
    const data = []
    const sells = await Sell.findAll({
        include: [{
            model: Event
        }]
    })

    const events = await Event.findAll()
    const users = await User.findAll()
    const eventsAmount = events.length
    const usersAmount = users.length
    let sellTotal = 0

    for (let index = 0; index < sells.length; index++) {
        const element = sells[index];
        sellTotal+= element.event.event_price
    }
    data[0] = {
        title: 'Ganancias totales',
        number: sellTotal,
        icon: 'fas fa-users',
        color: 'green-icon'
    }

    data[1] ={
        title: 'Total de eventos',
        number: eventsAmount,
        icon: 'fas fa-calendar-day',
        color: 'red-icon' 
    }

    data[2] = {
        title: 'Usuarios totales',
        number: usersAmount,
        icon: 'fas fa-dollar-sign',
        color: 'blue-icon'
    }

    res.json({
        error: null,
        data: data
    })

    } catch (error) {
    res.status(400).json({error})
    }
}