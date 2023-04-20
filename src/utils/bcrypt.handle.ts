import {hash, compare} from 'bcryptjs';

const encrypt = async (password: string): Promise<string> => {
    const passwordHash = await hash(password, 10);
    return passwordHash;
}

const verified = async (password: string, passwordHash: string): Promise<boolean> => {
    const isCorrect = await compare(password, passwordHash)
    return isCorrect;
}

export {
    encrypt,
    verified
}