"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var users_1 = __importDefault(require("./routes/users"));
var adress_1 = __importDefault(require("./routes/adress"));
var app = express_1.default();
var PORT = process.env.PORT || 3200;
app.use(express_1.default.json());
app.use("/users", users_1.default.router);
app.use("/adress", adress_1.default.router);
// app.post("/users",(req:Request,res:Response,next:NextFunction)=>{
//     mongoose()
//     const {text}:{ text:String } = req.body
// })
// app.post("/adduser",(req:Request,res:Response,next:NextFunction)=>{
//     mongoose()
//     const {text}:{ text:String } = req.body
// })
app.listen(PORT, function () { console.log("server is runing.." + PORT); });
