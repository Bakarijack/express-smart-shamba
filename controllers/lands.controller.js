const path = require('path')
const bcrypt = require('bcryptjs')
const userModal = require('../models/user.models')
const db_creation = require('../models/db_creation')
const con = require('../config/db_connection')
const jwt = require('jsonwebtoken')
const JWT_SECRET = 'sbvidsvuibdsbvdsibvuidksvjdksuciv@423sbdbvodsb'
const landModal = require('../models/lands.model')



exports.register_landProcess =async (req, res, next) => {
    const {owner_name,id_num,land_num,title_num,doc_file,date_of_issue,map_num,land_size, token, country,city,street} = req.body


    try{
        const data = jwt.verify(token, JWT_SECRET)
        console.log(data)

        const location_id = await landModal.getLocation(country,city,street)
        console.log(location_id)

        const result = await landModal.registerLand(owner_name,data.user_id,id_num,land_num,title_num,doc_file,date_of_issue,map_num,land_size,location_id)
        console.log(result)
        return res.json({ 'status': 'ok', 'message': 'Land successfully registered'})

    }catch(e){
        console.log(e)
        return res.json({ 'status': 'error', 'message':'Something went wrong. Try again', 'e': '1'})
    }
}


exports.update_td_verification = async (req, res, next) => {
    const { tId, token} = req.body

    console.log(tId)
    console.log(token)

    try{
        const data = jwt.verify(token, JWT_SECRET)
        console.log(data)

        // add to smart contract

        // update database
    }catch(e){
        console.log(e)
        return res.json({ 'status': 'ok', 'message': 'Something went wrong. Try again'})
    }

    res.json({'status': 'ok', 'message': 'data received'})
}