import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"

const getBlog = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, `${getBlog.name} - ${(error as Error).message}`)
    }
}

const getBlogs = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, `${getBlogs.name} - ${(error as Error).message}`)
    }   
}

const updateBlog = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, `${updateBlog.name} - ${(error as Error).message}`)
    }
}

const postBlog = (req: Request, res: Response) => {
    try {
        const {body} = req;
        res.send(body)
    } catch (error) {
        handleHttp(res, `${postBlog.name} - ${(error as Error).message}`)
    }
}

const deleteBlog = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, `${deleteBlog.name} - ${(error as Error).message}`)
    }
}

export {
    getBlog,
    getBlogs,
    postBlog,
    updateBlog,
    deleteBlog
}