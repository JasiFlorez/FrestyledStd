import {Router} from "express";
import * as postRegistrar from "../controllers/post.js"

const router = Router()

router.post('/registre',postRegistrar.Create_register);

export default router