import { Router } from "express";
import multerMiddleware from "../middlewares/file";
import { getFile } from "../controllers/upload";
import { checkJWT } from "../middlewares/session";

const router = Router()

router.post('/', checkJWT ,multerMiddleware.single('myfile'), getFile);

export { router }