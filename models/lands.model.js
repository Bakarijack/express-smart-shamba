const con = require('../config/db_connection')
const db_creation = require('./db_creation')



exports.getPostedLands = async () => {
    const rows = await con.promise().query(`SELECT * FROM title_deed WHERE 1`)
    console.log(rows[0][0])

    return rows[0][0]
}