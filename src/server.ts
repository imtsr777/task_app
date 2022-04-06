import expres,{Application,Request,Response,NextFunction} from 'express' 
import users from './routes/users'
import adress from './routes/adress'

const app:Application = expres()
let PORT = process.env.PORT || 3200

app.use(expres.json())
app.use("/users",users.router)
app.use("/adress",adress.router)

// app.post("/users",(req:Request,res:Response,next:NextFunction)=>{
//     mongoose()
//     const {text}:{ text:String } = req.body
// })

// app.post("/adduser",(req:Request,res:Response,next:NextFunction)=>{
//     mongoose()
//     const {text}:{ text:String } = req.body
// })


app.listen(PORT,()=>{console.log("server is runing.."+PORT)})
