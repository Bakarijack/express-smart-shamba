const con = require('../config/db_connection')
const db_creation = require('./db_creation')


exports.addUser = async (username, email, password) => {
    const row = await con.promise().query(`INSERT INTO users (username, email, password) VALUES ('${username}', '${email}', '${password}')`)
    console.log(row)
    
    return row
}

exports.is_userExist = async (email) => {
    let count
    
    const rows = await con.promise().query(`SELECT COUNT(*) as total FROM users WHERE email ='${email}'`)
    count = rows[0][0].total
    return count  
}


exports.is_usernameTaken = async username => {
    const rows = await con.promise().query(`SELECT COUNT(*) as total FROM users WHERE username = '${username}'`)
    let total = rows[0][0].total

    return total
}


exports.verify_user = async (email, password) => {
    const rows = await con.promise().query(`SELECT COUNT(*) as total FROM users WHERE email = '${email}' AND password = '${password}`)
    let total = rows[0][0].total

    return total
}

exports.getPassword = async email => {
    const rows = await con.promise().query(`SELECT password FROM users WHERE email ='${email}'`)
    return rows[0][0].password
}