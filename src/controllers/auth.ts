import { Request, Response } from "express"
import { registerNewUser, loginUser } from '../services/auth'

const register = async (req: Request, res: Response) => {
    const responseUser = await registerNewUser(req.body);
    res.send(responseUser);
}

const login = async (req: Request, res: Response) => {
    const {email, password} = req.body;
    const responseUser = await loginUser({email, password});
    if(responseUser === 'PASSWORD_INCORRECT'){
        return res.status(403).json(responseUser)
    }
    
    res.send(responseUser);
}

export {
    register,
    login
}