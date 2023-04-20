import { NextFunction, Request, Response } from "express"
import { verifyToken } from "../utils/jwt.handle";
import { JwtPayload } from "jsonwebtoken";

interface RequestExt extends Request {
    user?: string | JwtPayload;
}

const checkJWT = async (req: RequestExt, res: Response, next: NextFunction) => {
    try {
        const jwtByUser = req.headers.authorization || '';
        const jwt = jwtByUser.split(' ').pop();
        const isUser = await verifyToken(`${jwt}`);
        if( !isUser ) {
            res.status(401).send("NO TIENES UN JWT VALIDO")
        } else {
            req.user = isUser;
            next()
        }
    } catch (error) {
        res.status(400).send(`SESSION NOT VALID ${(error as Error).message}`)
    }
}

export { checkJWT }