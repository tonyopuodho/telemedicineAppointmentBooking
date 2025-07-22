const { default: conn } = require("../configs/db")

exports.loginuser = (request,response) => {
    const { username,password,role} = request.body
    try {
        const sqlQuerry = "SELECT * FROM admin WHERE username = ? AND password = ? AND role = ?"
        conn.query(sqlQuerry,[username,password,role], (error,result) => {
            if (error) return response.json({status: false, Error: "Querry error"})
            if (result.length > 0) {
                console.log(result.length)
            } else{
                console.log("user not found")
            } 
        })
    } catch (error) {
        
    }
}