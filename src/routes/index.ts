import express from 'express';
import apiRoutes from "./api";

const router  = express.Router();

router.get('/', (_req, res) => {
  res.json({msg:'HOLA', 
  msg2: "Este es un segundo msj"});
 });

 router.get('/test', (_req, res) => {
  res.json({msg: "HOLA TEST!"});
 });

 router.use('/api', apiRoutes);

export default router;
