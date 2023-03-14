const con = require('../config/db_connection')
const db_creation = require('./db_creation')


exports.addUser = async (username, email, password) => {
    const row = await con.promise().query(`INSERT INTO users (username, email, password) VALUES ('${username}', '${email}', '${password}')`)
    console.log(row)
    
    return row
}


exports.addAdmin = async (username, email, password,role_id) => {
    const row = await con.promise().query(`INSERT INTO users (username, email, password,role_id) VALUES ('${username}', '${email}', '${password}','${role_id}')`)
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
    const rows = await con.promise().query(`SELECT password,users.role_id,users.user_id FROM users WHERE email ='${email}'`)
    console.log(rows[0][0])
    return rows[0][0]
}

exports.registerLand = async (owner_name,added_by, id_num, land_num, title_num,doc_file, date_of_issue, map_num, land_size) => {
    const row = await con.promise().query(`INSERT INTO title_deed (owner,added_by,id,land_num,date_of_issue,title_num,legal_doc,map_num,land_size) 
    VALUES ('${owner_name}', '${added_by}', '${id_num}','${land_num}', '${date_of_issue}','${title_num}','${doc_file}','${map_num}','${land_size}')`)
    console.log(row)
    
    return row
}

