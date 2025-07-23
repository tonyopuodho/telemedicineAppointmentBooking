const { default: conn } = require("../configs/db")

exports.loginuser = (request,response) => {
    const { username,password,role} = request.body
    try {
        const sqlQuerry = "SELECT * FROM admin WHERE username = ? AND password = ? AND role = ?"
        conn.query(sqlQuerry,[username,password,role], (error,result) => {
            if (error) return response.json({status: false, Error: "Querry error"})
            if (result.length > 0) {
                 request.session.user = result[0].username
                 return response.status(201).json({status: true, message: "login successfully"})
            } else{
                return response.json({status: false, message:"wrong email or password"})
            } 
        })
    } catch (error) {
        console.log(error)
    }
}

exports.username = (request,response) => {
    request.session.visited = true

    if(request.session.user) {
        return response.status(200).json({valid: true, username: request.session.user})
    } else{
        return response.json({valid:false})
    }
}

exports.logout = (request,response) => {
    if (request.session.user !== undefined) {
        request.session = null
        response.clearCookie('connect.sid')
    }
    
    response.json({status:true,message: "logout successfully"})
}