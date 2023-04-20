import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"
import { insertCar, getCars, getCar, updateCar, deleteCar } from "../services/item"

const getItem = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const response = await getCar(id) || 'NOT FOUND';
        res.json(response)
    } catch (error) {
        handleHttp(res, `${getItem.name} - ${(error as Error).message}`)
    }
}

const getItems = async (req: Request, res: Response) => {
    try {
        const response = await getCars()
        res.json(response)
    } catch (error) {
        handleHttp(res, `${getItems.name} - ${(error as Error).message}`)
    }   
}

const updateItem = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const {body} = req;
        const response = await updateCar(id, body);
        res.json(response)
    } catch (error) {
        handleHttp(res, `${updateItem.name} - ${(error as Error).message}`)
    }
}

const postItem = async (req: Request, res: Response) => {
    try {
        const {body} = req;
        const responseItem = await insertCar(body);
        res.json(responseItem)
    } catch (error) {
        handleHttp(res, `${postItem.name.toUpperCase()} - ${(error as Error).message}`)
    }
}

const deleteItem = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const response = await deleteCar(id) || 'NOT FOUND';
        res.json(response)

    } catch (error) {
        handleHttp(res, `${deleteItem.name} - ${(error as Error).message}`)
    }
}

export {
    getItem,
    getItems,
    postItem,
    updateItem,
    deleteItem
}