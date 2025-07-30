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