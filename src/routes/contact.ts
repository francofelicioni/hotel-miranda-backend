import express from 'express';
import { getMessages, getMessage, addMessage, updateMessage, deleteMessage  } from '../controllers/contact';

const contactRouter = express.Router();

//Contacts Route

contactRouter.get('/', getMessages)
contactRouter.get('/:id', getMessage)
contactRouter.post('/', addMessage)
contactRouter.put('/:id', updateMessage)
contactRouter.delete('/:id', deleteMessage)

export default contactRouter;