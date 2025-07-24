const { default: conn } = require("../configs/db")
const { hashPassword } = require("../configs/hashpassword")

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
        
    }
}