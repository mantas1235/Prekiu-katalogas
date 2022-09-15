import  express  from "express";
import mongoose from "mongoose";
import  {engine}  from "express-handlebars";
import handlebars from 'handlebars'
import Pirkiniai from "./adminas/pirkiniai.js";



const app = express()

app.use(express.urlencoded({extended: true}))
await mongoose.connect('mongodb://localhost:27017/adminas')

app.use('/style',express.static('style'))


app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');



app.get('/', async (req, res)=>{
const pirkiniai = await Pirkiniai.find().lean()
res.render('shop', { pirkiniai})
})


app.get('/shop', (req, res)=>{
res.render('shop')

})



app.post('/submit', async (req, res)=> {
    if(JSON.stringify(req.body)!= '{}'&& 
    req.body.name !== '' &&
    req.body.surname !== '' &&
    req.body.address !== '' &&
    req.body.phone !== '' &&
    req.body.password !== ''
    )
{
    const preke = new Pirkiniai(req.body)
    preke.save()
    res.redirect('/admin')
}

else {
    return res.send ( 'truksta dumenu')
}

})

app.get('/admin' , async (req, res)=> {
    const pirkiniai = await Pirkiniai.find().lean()
    res.render('admin', { pirkiniai})
    console.log(pirkiniai);

})




app.listen(3000)














