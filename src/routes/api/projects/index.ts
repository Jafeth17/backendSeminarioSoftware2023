import  express from "express";

const router = express.Router();

import { createProject, getProjects } from '@libs/projects/projects';
import { json } from "stream/consumers";

router.get('/', (_req, res) => {
    res.json({version: 1, scope: 'projects'});
});

router.get('/echo/:msg', (req, res) => {
    const { msg } = req.params;
    const { variable1="Hola", variable2="BB" } = req.query;
    
    res.json({msg, variable1, variable2});
});

router.post('/echo2', (req, res) => {
    const { variable1="Hola", variable2="BB" } = req.query;
    res.json({variable1, variable2});
});

router.get('/all', async(_req,res)=>{
    const projects = await getProjects();
    res.json(projects);
});

router.post('/new', async (req, res) => {
    const { name, description, isActive } = req.body;
    const mewProject = { name, description, isActive: (isActive && true) };
    const CreatedProject = await createProject(mewProject);
    res.json({mewProject});
});

router.put('/upd/:id', async (req, res) => {
    const { id= ''} = req.params;
    const { name= '', description='',isActive = false} =req.body;
    const updatedProject = await updateProject(id, {name,description,isActive: (isActive && true)});
    return res.json(updatedProject);
});

router.delete('/del/:id', async(req, res))=> {
    const { id ='' } = req.params;
    const deletedProject = await deleteProject(id);
    return res.json(deleted: deletedProject);
});

export default router;
