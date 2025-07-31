const { default: conn } = require("../configs/db")
const { hashPassword, comparePassword } = require("../configs/hashpassword")

exports.registerUser = (request,response) => {
    const {firstName,lastName,email,phone,dateOfbirth,gendar,address,password} = request.body
    const hashed = hashPassword(password)
    try {
         const sqlQuerry = "INSERT INTO patient(firstName,lastName,email,phone,dateOfbirth,gendar,address,password) VAlUES(?,?,?,?,?,?,?,?)"
         conn.query(sqlQuerry,[firstName,lastName,email,phone,dateOfbirth,gendar,address,hashed], (error,result) => {
            if (error) return response.json({status:false, message:"Querry error"})
            return response.status(201).json({status:true,message:"Account created successfully"})
         })
    } catch (error) {
       console.log(error)       
    }
}

exports.loginpatient = (request,response) => {
    const {username,password,role} = request.body
    try {
        const sqlQuerry = "SELECT * FROM patient WHERE lastName = ? AND role = ?"
        conn.query(sqlQuerry,[username,role], (error,result) => {
            if (error) return response.json({status:false, message:"Querry error"})
            if (result.length > 0) {
                const pass = comparePassword(password,result[0].password)
                if (pass) {
                    request.session.user = result[0].lastName
                    request.session.patientId = result[0].patientId
                    return response.status(201).json({status: true,message:"login successfully"})
                } else {
                    return response.json({status:false, message:"wrong password"})
                }
            } else{
                return response.json({status:false,message:"wrong email or password"})
            }
        })
    } catch (error) {
      return response.json({status:false, message:'An error occured please contact admin'}) 
    }
}

exports.patientName = (request,response) => {
    request.session.visited = true

    if (request.session.user && request.session.patientId) {
        return response.status(200).json({valid:true ,patientId: request.session.patientId, username:request.session.user })
    } else{
        return response.json({valid:false})
    }
}

exports.patientDetail = (request,response) => {
    const { id } = request.params
    try {
        const sqlQuerry = "SELECT * FROM patient WHERE patientId = ?"
        conn.query(sqlQuerry,[id], (error,result) => {
            if (error) return response.json({status: false, message:"Querry error"})
            
            return response.status(200).json({status:true, Result:result})
        })
    } catch (error) {
        
    }
}

exports.update = (request,response) => {
    const {firstName,lastName,email,phone,address,dateOfbirth,id} = request.body

   try {
        const sqlQuerry = "UPDATE patient SET firstName = ?, lastName = ?, email = ?, phone = ?, address = ?, dateOfbirth = ? WHERE patientId = ?"
        conn.query(sqlQuerry,[firstName,lastName,email,phone,address,dateOfbirth,id],(error,result) => {
            if (error) return response.json({status:false, message:"Querry error"})
            return response.status(200).json({status:true, message:"updated successfully"})
        })
    } catch (error) {
        console.log(error)
    }
}

exports.getAllusers = (request,response) => {
    try {
        const sqlQuerry = "SELECT * FROM patient"
        conn.query(sqlQuerry,(error,result) => {
            if (error) return response.json({status: false, message:"Querry error"})
            
            return response.status(200).json({status:true,Result:result})
        })
    } catch (error) {
        console.log(error)
        return response.json({status: false, message:"Error occured"})
    }
}

exports.logout = (request,response) => {
    if (request.session.user !== undefined) {
        request.session = null
        response.clearCookie('connect.sid')
    }
    
    response.json({status:true,message: "logout successfully"})
}

exports.countPatient = (request,response) => {
    const sqlQuery = "SElECT COUNT(patientId) AS total from patient"
    conn.query(sqlQuery, (error,result) => {
        if (error) return response.json({status: false, message:"Query error"})        
        return response.status(200).json({status:true, Result:result})
    })
}