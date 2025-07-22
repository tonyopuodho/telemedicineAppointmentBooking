import mysql from 'mysql2'
import dotenv from 'dotenv'

dotenv.config()
const conn = mysql.createConnection({
    host:process.env.MYSQL_HOST,
    user:process.env.MYSQL_USER,
    password:process.env.MYSQL_PASSWORD,
    database:process.env.MYSQL_DATABASE,
    dateStrings:['DATE','DATETIME']
})

conn.connect((error) => {
    if (error) {
        console.log(error)
    } else {
        console.log("database connected successfully")
    }
})

export default conn