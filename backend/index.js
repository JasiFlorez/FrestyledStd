import express from "express"
import dotenv from "dotenv"
import router from "./routes/router.js";
import cors from "cors";

dotenv.config();
const PORTSERVER = process.env.PORTSERVER

const app = express();


app.use(cors());
app.use(express.json());
app.use("/api",router)


app.listen(PORTSERVER,()=> {
    console.log(`Servidor corriendo en el puerto ${PORTSERVER}❤️❤️`)
})