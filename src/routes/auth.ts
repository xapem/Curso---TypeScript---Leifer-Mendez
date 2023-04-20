import { Request, Response, Router } from "express";
import {register, login} from '../controllers/auth'

const router: Router = Router();

router.post('/register', register);
router.post('/login', login);

export {router};