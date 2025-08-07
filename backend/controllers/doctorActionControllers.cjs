const { default: conn } = require("../configs/db")
const { hashPassword, comparePassword } = require("../configs/hashpassword")

exports.registerDoctor = (request,response) => {
    const data = {
        dfirstName:request.body.dfirstName,
        dlastName: request.body.dlastName,
        email: request.body.email,
        phone: request.body.phone,
        specialization: request.body.specialization,
        schedule: request.body.schedule,
        password: request.body.password,
        image: request.file.filename
    }

    const password = hashPassword(data.password)
    try {
        const sqlQuery = "INSERT INTO doctor(dfirstName,dlastName,email,phone,specialization,schedule,password,image) VALUE(?,?,?,?,?,?,?,?)"
        conn.query(sqlQuery,[data.firstName,data.lastName,data.email,data.phone,data.specialization,data.schedule,password,data.image], (error,result) => {
            if (error) return response.json({status: false, message:"Query error"})            
            return response.status(201).json({status: true, message:"Doctor added successfully"})
        })
        
    } catch (error) {
        console.log(error)
    }
}

exports.loginDoctor = (request,response) => {
    const { username, password } = request.body
    try {
        const sqlQuerry = "SELECT * FROM doctor WHERE dlastName = ?"
        conn.query(sqlQuerry,[username], (error,result) => {
            if (error) return response.json({status: false, message:"Query error"})
            if (result.length > 0) {
                const pass = comparePassword(password,result[0].password)

                if (pass) {
                    request.session.user = result[0].dlastName
                    request.session.doctorId = result[0].doctorId
                    return response.status(201).json({status:true, message:'Login successfully'})
                } else {
                    return response.json({status: false, message:"wrong password"})
                }
            } else {
                return response.json({status: false, message: "wrong email or password"})
            }
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
       console.log(error) 
    }
}

exports.deleteDoctor = (request,response) => {
    const { id } = request.params
    try {
        const sqlQuerry = "DELETE FROM doctor WHERE doctorId = ?"
        conn.query(sqlQuerry,[id], (error,result) => {
            if (error) return response.json({status: false, message:"Query error"})
            return response.status(200).json({status:true,message:"Doctor deleted successfully"})
        })
    } catch (error) {
        console.log(error)        
    }
}


exports.username = (request,response) => {
    request.session.visited = true

    if (request.session.user && request.session.doctorId) {
        return response.status(200).json({valid: true, username: request.session.user, doctorId: request.session.doctorId})
    } else {
        return response.json({valid: false})
    }
}

exports.countDoctor = (request,response) => {
    const sqlQuery = "SElECT COUNT(doctorId) AS total from doctor"
    conn.query(sqlQuery, (error,result) => {
        if (error) return response.json({status: false, message:"Query error"})        
        return response.status(200).json({status:true, Result:result})
    })
}

exports.countSunday = (request,response) => {
    const sqlQuery = "SElECT COUNT(schedule) AS day from doctor where schedule = 'sunday'"
    conn.query(sqlQuery, (error,result) => {
        if (error) return response.json({status: false, message:"Query error"})        
        return response.status(200).json({status:true, Result:result})
    })
}

exports.countMonday = (request,response) => {
    const sqlQuery = "SElECT COUNT(schedule) AS day from doctor where schedule = 'monday'"
    conn.query(sqlQuery, (error,result) => {
        if (error) return response.json({status: false, message:"Query error"})        
        return response.status(200).json({status:true, Result:result})
    })
}

exports.countTuesday = (request,response) => {
    const sqlQuery = "SElECT COUNT(schedule) AS day from doctor where schedule = 'tuesday'"
    conn.query(sqlQuery, (error,result) => {
        if (error) return response.json({status: false, message:"Query error"})        
        return response.status(200).json({status:true, Result:result})
    })
}

exports.countWednesday = (request,response) => {
    const sqlQuery = "SElECT COUNT(schedule) AS day from doctor where schedule = 'wednesday'"
    conn.query(sqlQuery, (error,result) => {
        if (error) return response.json({status: false, message:"Query error"})        
        return response.status(200).json({status:true, Result:result})
    })
}

exports.countThursday = (request,response) => {
    const sqlQuery = "SElECT COUNT(schedule) AS day from doctor where schedule = 'thursday'"
    conn.query(sqlQuery, (error,result) => {
        if (error) return response.json({status: false, message:"Query error"})        
        return response.status(200).json({status:true, Result:result})
    })
}

exports.countFriday = (request,response) => {
    const sqlQuery = "SElECT COUNT(schedule) AS day from doctor where schedule = 'friday'"
    conn.query(sqlQuery, (error,result) => {
        if (error) return response.json({status: false, message:"Query error"})        
        return response.status(200).json({status:true, Result:result})
    })
}

exports.countSaturday = (request,response) => {
    const sqlQuery = "SElECT COUNT(schedule) AS day from doctor where schedule = 'saturday'"
    conn.query(sqlQuery, (error,result) => {
        if (error) return response.json({status: false, message:"Query error"})        
        return response.status(200).json({status:true, Result:result})
    })
}
exports.updateDoctor = (request,response) => {
    const {dfirstName,dlastName,email,phone,specialty,schedule,id} = request.body
    try {
        const sqlQuerry = "UPDATE doctor SET dfirstName = ?, dlastName = ?, email = ?, phone = ?, specialization = ?, schedule = ? WHERE doctorId =?"
        conn.query(sqlQuerry,[dfirstName,dlastName,email,phone,specialty,schedule,id], (error, result) => {
            if (error) return response.json({status: false, message:" Querry error"})
            return response.status(200).json({status: true, message:"updated successfully"})
        })
    } catch (error) {
        console.log(error)
    }
}

exports.logoutDoctor = (request,response) => {
    if (request.session.user !== undefined) {
        request.session = null
        response.clearCookie('connect.sid')
    }
    
    response.json({status:true,message: "logout successfully"})
}