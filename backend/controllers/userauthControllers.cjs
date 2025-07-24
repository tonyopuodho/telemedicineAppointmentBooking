const { default: conn } = require("../configs/db")


exports.registerUser = (request,response) => {
    const {firstName,lastName,email,phone,dateOfbirth,gendar,address,password} = request.body
    console.log(firstName,lastName,email,phone,dateOfbirth,gendar,address,password)

    try {
         const sqlQuerry = "INSERT INTO patient(firstName,lastName,email,phone,dateOfbirth,gendar,address,password) VAlUES(?,?,?,?,?,?,?,?)"
         conn.query(sqlQuerry,[firstName,lastName,email,phone,dateOfbirth,gendar,address,password], (error,result) => {
            if (error) return response.json({status:false, message:"Querry error"})
            return response.status(201).json({status:true,message:"Account created successfully"})
         })
    } catch (error) {
        
    }
}