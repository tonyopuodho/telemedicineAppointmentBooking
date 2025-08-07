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

exports.getAppointment = (request,response) => {
    try {
        const sqlQuery = "select dfirstName,firstName,date,time,status from appointment inner join doctor on doctor.doctorId = appointment.doctor_id inner join patient on patient.patientId = appointment.patient_id"
        conn.query(sqlQuery, (error, result) => {
            if (error) return response.json({status: false, message:"Querry error"})            
            return response.status(200).json({status:true, Result:result})
        })
    } catch (error) {
        console.log("An error occured")
    }
}

exports.doctorAppointment = (request,response) => {
    const { id } = request.params
    try {
        const sqlQuery = "select dfirstName,firstName,date,time,status from appointment inner join doctor on doctor.doctorId = appointment.doctor_id inner join patient on patient.patientId = appointment.patient_id WHERE doctor_id = ? AND status = 'pending'"
        conn.query(sqlQuery,[id], (error,result) => {
            if (error) return response.json({status: false, message:"Query error"})
            
            return response.status(200).json({status:true, Result: result})
        })
    } catch (error) {
        console.log(error)        
    }
}

exports.patientAppointment = (request,response) => {
    const { id } = request.params
    try {
        const sqlQuery = "select dfirstName,firstName,date,time,status from appointment inner join doctor on doctor.doctorId = appointment.doctor_id inner join patient on patient.patientId = appointment.patient_id WHERE patient_id = ?"
        conn.query(sqlQuery,[id], (error,result) => {
            if (error) return response.json({status: false, message:"Query error"})
            
            return response.status(200).json({status:true, Result: result})
        })
    } catch (error) {
        console.log(error)        
    }
}

exports.doctorsAppointment = (request,response) => {
       const { id } = request.params
    try {
        const sqlQuery = "select dfirstName,firstName,date,time,status from appointment inner join doctor on doctor.doctorId = appointment.doctor_id inner join patient on patient.patientId = appointment.patient_id WHERE doctor_id = ? AND status = 'completed' OR status = 'canceled'"
        conn.query(sqlQuery,[id], (error,result) => {
            if (error) return response.json({status: false, message:"Query error"})
            
            return response.status(200).json({status:true, Result: result})
        })
    } catch (error) {
        console.log(error)        
    }
}

exports.completeAppointment = (request,response) => {
    const { id } = request.params
    try {
        const sqlQuery = "UPDATE appointment SET status = 'completed' WHERE time = ?"
        conn.query(sqlQuery,[id], (error, result) => {
            if (error) return response.json({status:false, message:"Querry error"})
            return response.status(200).json({status:true, message:"appointment completed successfully"})
        })
        
    } catch (error) {
        console.log(error)
    }
}

exports.cancelAppointment = (request,response) => {
    const { id } = request.params
    try {
        const sqlQuery = "UPDATE appointment SET status = 'canceled' WHERE time = ?"
        conn.query(sqlQuery,[id], (error, result) => {
            if (error) return response.json({status:false, message:"Querry error"})
            return response.status(200).json({status:true, message:"appointment canceled successfully"})
        })
        
    } catch (error) {
        console.log(error)
    }
}

exports.countCancel = (request,response) => {
    try {
        const sqlQuery = "SELECT COUNT(status) AS cancel FROM appointment WHERE status = 'canceled'"
        conn.query(sqlQuery,(error, result) => {
            if (error) return response.json({status: false, message:"Querry error"})
            return response.status(200).json({status:true, Result:result})
        })
    } catch (error) {
        console.log(error)
    }
}

exports.countComplete = (request,response) => {
    try {
        const sqlQuery = "SELECT COUNT(status) AS complete FROM appointment WHERE status = 'completed'"
        conn.query(sqlQuery,(error, result) => {
            if (error) return response.json({status: false, message:"Querry error"})
            return response.status(200).json({status:true, Result:result})
        })
    } catch (error) {
        console.log(error)
    }
}

exports.countPending = (request,response) => {
    try {
        const sqlQuery = "SELECT COUNT(status) AS pending FROM appointment WHERE status = 'pending'"
        conn.query(sqlQuery,(error, result) => {
            if (error) return response.json({status: false, message:"Querry error"})
            return response.status(200).json({status:true, Result:result})
        })
    } catch (error) {
        console.log(error)
    }
}

exports.countDoctor = (request,response) => {
    try {
        const sqlQuery = " select count( dfirstName) AS doctor from appointment inner join doctor on doctor.doctorId = appointment.doctor_id inner join patient on patient.patientId = appointment.patient_id where status = 'pending'"
        conn.query(sqlQuery,(error, result) => {
            if (error) return response.json({status: false, message:"Querry error"})
            return response.status(200).json({status:true, Result:result})
        })
    } catch (error) {
        console.log(error)
    }
}