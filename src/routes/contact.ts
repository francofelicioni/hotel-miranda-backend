import express from 'express';
const contactRouter = express.Router();

import { getMessages, getMessage, addMessage, updateMessage, deleteMessage  } from '../controllers/contact';

const path:string = 'contact';

contactRouter.get(`/${path}`, getMessages)
contactRouter.get(`/${path}/:id`, getMessage)
contactRouter.get(`/${path}`, addMessage)
contactRouter.get(`/${path}/:id`, updateMessage)
contactRouter.get(`/${path}/:id`, deleteMessage)


export default contactRouter;