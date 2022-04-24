const express = require('express');
const testModel = require('../models/test');
const router = express.Router();


router.post('/',function(req,res,next) {
try {  
  const { num1, num2 } = req.body;
  let ansPrime =[];

  for(let i = num1; i <= num2; i++){
    let flag = 0;
    for(let j=2; j < i; j++) {
      if (i % j == 0) {
        flag = 1;
        break;
      }
  }
          
  if (i > 1 && flag == 0) {
    ansPrime.push(i);
}
     
  }

  const today = new Date()+7000
  let date = today.toLocaleString("th-TH", { timeZone: "UTC" })


  let newTest = new testModel({
        num1: num1,
        num2: num2,
        ansPrime: ansPrime,
        date,
 


  })

 
  
 


  let test = newTest.save();
  return res.status(200).send({
    data: test,
    msg: "create success",
    success: true,
  });
} catch (err) {
  return res.status(400).send({
    msg: "create fail",
    success: false,
  });
}
});

/* GET users listing. */
router.get('/',async function(req,res,next) {
    // res.send("SAWADDEE KA")
    try {
        //ดึงข้อมูลทั้งหมดออกมา เหมือนกับ select *
        let test = await testModel.find({
          
        });
        return res.status(200).send(
          test
          
        );
      } catch (err) {
        return res.status(400).send({
          msg: "create fail",
          success: false,
        });
      }
});




module.exports = router