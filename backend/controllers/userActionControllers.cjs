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