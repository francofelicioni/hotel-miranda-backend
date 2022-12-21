import { Request, Response } from "express";

export const getUsers = (req: Request, res: Response) => {
  res.send({ data: "Users list" });
};

export const getUser = (req: Request, res: Response) => {
  const {id} = req.params;
  res.send ({data: `User nª ${id}`})
}

export const addUser = (req:Request, res: Response) => {
  const {data} = req.body;
  console.log(data);
  res.send ({data: `New user added`})
}

export const updateUser = (req: Request, res: Response) => {
  const {id} = req.params;
  const {data} = req.body;
  console.log(data);
  res.send ({data: `User nº${id} updated`})
}

export const deleteUser = (req: Request, res: Response) => {
  const {id} = req.params;
  res.send ({data: `User nº${id} deleted`})
}


