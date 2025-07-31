const { default: conn } = require("../configs/db")


exports.createFeedback = (request,response) => {
    const { firstName,lastName,email,feedback} = request.body
    
    try {
        const sqlQuerry = "INSERT INTO feedback(firstName,lastName,email,feedback) VALUES(?,?,?,?)"
        conn.query(sqlQuerry,[firstName,lastName,email,feedback], (error,result) => {
            if (error) return response.json({status: false, message:"Querry error"})
            
            return response.status(201).json({status:true,message: "Thankyou for sharing with us"})
        })
    } catch (error) {
        return response.json({status:false, message:error})
    }
}

exports.getAllfeedback = (request,response) => {
    try {
        const sqlQuerry = "SELECT * FROM feedback"
        conn.query(sqlQuerry,(error,result) => {
            if (error) return response.json({status:false,message:"Querry error"})
            
            return response.status(200).json({status:true, Result:result})
        })
    } catch (error) {
        console.log(error)
        return response.json({status: false, message:"An error occured"})
        
    }
}


exports.countFeedback = (request,response) => {
    const sqlQuery = "SElECT COUNT(id) AS total from feedback"
    conn.query(sqlQuery, (error,result) => {
        if (error) return response.json({status: false, message:"Query error"})        
        return response.status(200).json({status:true, Result:result})
    })
}