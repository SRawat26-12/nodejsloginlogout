const stuModel=require("../model/studentModel")
const userRegistration=async(req, res)=>{
    const {name, email, password} = req.body;
    const data=await stuModel.create({
        name:name,
        email:email,
        password:password
    })

    res.send("succesfully registered!");
}
const userLogin=async(req, res)=>{
    const {email, password} = req.body;
    const data= await stuModel.find({email:email});
      if (data.length<1)
      {
        res.status(401).send("Invalid Email!")
      }
      else
      {
        if (data[0].password!=password)
        {
            res.status(401).send("Invalid Credentials!");
        }
        else
        {
            res.status(200).send(data);
        }
      }
}



module.exports={
    userRegistration,
    userLogin
}