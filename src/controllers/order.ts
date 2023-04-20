import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"
import { JwtPayload } from "jsonwebtoken";


interface RequestExt extends Request {
    user?: string | JwtPayload;
}

const getOrders = (req: RequestExt, res: Response) => {
    try {
        res.send({
            data: 'Esto solo ve con session JWT',
            user: req.user
        })
    } catch (error) {
        handleHttp(res, `${getOrders.name} - ${(error as Error).message}`)
    }
}

export {
    getOrders,
}