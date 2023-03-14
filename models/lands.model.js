const con = require('../config/db_connection')
const db_creation = require('./db_creation')



exports.getPostedLands = async () => {
    const rows = await con.promise().query(`SELECT * FROM title_deed WHERE 1`)
    console.log(rows[0][0])

    return rows[0][0]
}


exports.registerLand = async (owner_name,added_by, id_num, land_num, title_num,doc_file, date_of_issue, map_num, land_size) => {
    const row = await con.promise().query(`INSERT INTO title_deed (owner,added_by,id,land_num,date_of_issue,title_num,legal_doc,map_num,land_size) 
    VALUES ('${owner_name}', '${added_by}', '${id_num}','${land_num}', '${date_of_issue}','${title_num}','${doc_file}','${map_num}','${land_size}')`)
    console.log(row)
    
    return row
}