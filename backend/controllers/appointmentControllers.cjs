const { default: conn } = require("../configs/db")

exports.bookAppointment = (request,response) => {
    const { doctor_id, patient_id, date, time} = request.body
    const doctor_Id = parseInt(doctor_id)
    
    try {
        const sqlQuery = "INSERT INTO appointment(doctor_id,patient_id, date,time) VALUES(?,?,?,?)"
        conn.query(sqlQuery,[doctor_Id,patient_id,date,time], (error, result) => {
            if (error) return response.json({status:false, message:"Querry error"})
            return response.status(201).json({status:true, message:"Appointment booked successfully"})
        })
    } catch (error) {
        console.log(error)        
    }
}