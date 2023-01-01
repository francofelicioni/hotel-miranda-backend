import express from 'express';
import { getMessages, getMessage, addMessage, updateMessage, deleteMessage  } from '../controllers/contact';

const contactRouter = express.Router();

//Contacts Route

contactRouter.get('/', getMessages)
contactRouter.get('/:id', getMessage)
contactRouter.get('/', addMessage)
contactRouter.get('/', updateMessage)
contactRouter.get('/', deleteMessage)

export default contactRouter;