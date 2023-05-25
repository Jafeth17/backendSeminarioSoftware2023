import express from 'express';
import projectsRouter from "./projects";
import securityRouter from "./security";
import teamsRouter from "./teams";

const router = express.Router();

router.use('/projects', projectsRouter);
router.use('/security', securityRouter);
router.use('/teams', teamsRouter);

export default router;