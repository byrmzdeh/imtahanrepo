import express from 'express'
import mongoose, { Schema } from 'mongoose'
import cors from 'cors'
const app = express()
const port = 7000
app.use(express.json())
app.use(cors())


const eduSchema = new Schema({
    img: String,
    name: String,
    desc: String,
    price:Number
  });

  const eduModel = mongoose.model('edu', eduSchema);

app.get('/', async (req, res) => {
 try {
    const edu= await eduModel.find({})
    res.send(edu)
 } catch (error) {
    res.send(error.message)
 }
})

app.get('/:id', async (req, res) => {
    try {
        const {id} = req.params
       const edu= await eduModel.findById(id)
       res.send(edu)
    } catch (error) {
       res.send(error.message)
    }
   })

   app.post('/', async (req, res) => {
    try {
        const {img, name , desc , price} = req.body
       const edu= new eduModel({img, name , desc , price})
       await edu.save()
       res.send(edu)
    } catch (error) {
       res.send(error.message)
    }
   })

   app.put('/:id', async (req, res) => {
    try {
        const {id} = req.params
        const {img, name , desc , price} = req.body
       const edu= await eduModel.findByIdAndUpdate(id,{img, name , desc , price})
       res.send(edu)
    } catch (error) {
       res.send(error.message)
    }
   })


   app.delete('/:id', async (req, res) => {
    try {
        const {id} = req.params
       const edu= await eduModel.findByIdAndDelete(id)
       res.send(edu)
    } catch (error) {
       res.send(error.message)
    }
   })

mongoose.connect('mongodb+srv://aydan:aydan@cluster0.ccton5y.mongodb.net/')
.then(()=>console.log('Connected !'))
.catch(()=>console.log('Not Connected !'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})