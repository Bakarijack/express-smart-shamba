const con = require('../config/db_connection')
const db_creation = require('./db_creation')



exports.getPostedLands = async () => {
    const rows = await con.promise().query(`SELECT * FROM title_deed WHERE 1`)
    console.log(rows[0][0])

    return rows[0][0]
}


exports.registerLand = async (owner_name,added_by, id_num, land_num, title_num,doc_file, date_of_issue, map_num, land_size, location_id) => {
    const row = await con.promise().query(`INSERT INTO title_deed (owner,added_by,id,land_num,date_of_issue,title_num,legal_doc,map_num,land_size,location_id) 
    VALUES ('${owner_name}', '${added_by}', '${id_num}','${land_num}', '${date_of_issue}','${title_num}','${doc_file}','${map_num}','${land_size}','${location_id}')`)
    console.log(row)
    
    return row
}

exports.getLocation = async (country,city,street) => {
    const rows = await con.promise().query(`SELECT * FROM location WHERE country='${country}' AND city='${city}' AND street='${street}'`)
    // let total = rows[0][0].total

    if (rows[0].length === 0){
        const result = await con.promise().query(`INSERT INTO location (country,city,street) VALUES ('${country}','${city}','${street}')`)

        const data = await con.promise().query(`SELECT location_id FROM location WHERE country ='${country}' AND city ='${city}' AND street='${street}'`)

        return data[0][0].location_id
    }else if (rows[0].length > 0){
        return rows[0][0].location_id
    }

}