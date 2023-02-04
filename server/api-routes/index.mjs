import express from 'express';
import todoRouter from './todos.mjs';
const router =express.Router();

router.use('/todos',todoRouter);

export default router;