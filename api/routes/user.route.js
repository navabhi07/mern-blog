import express from 'express';
import { test } from '../controllers/user.controller.js';

const router=express.Router();

//req=we sent to the API
//res=receive from the API
router.get('/test',test);

export default router;