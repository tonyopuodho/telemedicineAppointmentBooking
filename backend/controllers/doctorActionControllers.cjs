const { default: conn } = require("../configs/db")
const { hashPassword } = require("../configs/hashpassword")

exports.registerDoctor = (request,response) => {
    const data = {
        firstName:request.body.firstName,
        lastName: request.body.lastName,
        email: request.body.email,
        phone: request.body.phone,
        specialization: request.body.specialization,
        schedule: request.body.schedule,
        password: request.body.password,
        image: request.file.filename
    }

    const password = hashPassword(data.password)
    try {
        const sqlQuery = "INSERT INTO doctor(firstName,lastName,email,phone,specialization,schedule,password,image) VALUE(?,?,?,?,?,?,?,?)"
        conn.query(sqlQuery,[data.firstName,data.lastName,data.email,data.phone,data.specialization,data.schedule,password,data.image], (error,result) => {
            if (error) return response.json({status: false, message:"Query error"})            
            return response.status(201).json({status: true, message:"Doctor added successfully"})
        })
        
    } catch (error) {
        console.log(error)
    }
}

exports.getDoctors = (request,response) => {
    try {
        const sqlQuery = "SELECT * FROM doctor"
        conn.query(sqlQuery, (error,result) => {
            if (error) return response.json({status:false, message:"Querry error"})
            
            return response.status(200).json({status:true, Result:result})
        })
    } catch (error) {
        console.log(error)
    }
}

exports.getDoctor = (request,response) => {
    const { id } = request.params
    try {
        const sqlQuerry = "SELECT * FROM doctor WHERE doctorId = ?"
        conn.query(sqlQuerry,[id], (error, result) => {
            if (error) return response.json({status: false, message:"Query error"})
            return response.status(200).json({status: true, Result:result})
        })
    } catch (error) {
        console.log(error)
    }
}

exports.editDoctor = (request,response) => {
    const { id } = request.params
    const { schedule } = request.body
    try {
        const sqlQuerry = "UPDATE doctor SET schedule = ? WHERE doctorId = ?"
        conn.query(sqlQuerry,[schedule,id], (error, result) => {
         if (error) return response.json({status:false, message:"Query error"})
         return response.status(200).json({status: true, message:"schedule updated successfully"})
        })
    } catch (error) {
        
    }
}

exports.countDoctor = (request,response) => {
    const sqlQuery = "SElECT COUNT(doctorId) AS total from doctor"
    conn.query(sqlQuery, (error,result) => {
        if (error) return response.json({status: false, message:"Query error"})        
        return response.status(200).json({status:true, Result:result})
    })
}