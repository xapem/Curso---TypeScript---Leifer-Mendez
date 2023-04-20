import {JwtPayload, sign, verify} from 'jsonwebtoken';
const JWT_SECRET = process.env.JWT_SECRET || 'token.123r23432';

const generateToken = async (id: string) => {
    const jwt = await sign({id}, JWT_SECRET, {
        expiresIn: "2h"
    });
    return jwt;
}

const verifyToken = async (jwt: string): Promise<string | JwtPayload> => {
    const isOk = await verify(jwt, JWT_SECRET);
    return isOk;
}

export {
    generateToken,
    verifyToken
}