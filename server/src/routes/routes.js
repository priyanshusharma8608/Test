const express = require ('express')


const router = express.Router();

router.all('/*',(_,res)=>{
    return res.status(404).send({status:false,msg:'url Invalid'})
})


module.exports = router 