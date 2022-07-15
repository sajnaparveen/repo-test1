const express = require('express')
const cors =  require('cors')
const multer = require('multer')
const app = express();
app.use(cors())
 
app.use(express.static('uploads'))

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'uploads')
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+'-'+file.originalname)
    }
})

app.post('/imageupload', async(req,res)=>{
    try{

const upload = await multer({storage:storage}).single('file')
upload(req,res,(err)=>{

if(!req.file){
    res.send('please select a file')
}else if(err instanceof multer.MulterError){
    res.send(err)
}else{
    res.send(req.file.filename)
}

})
    }catch(err){
        console.log(err)
    }
})


app.listen(2000,()=>{
    console.log("server started")
})