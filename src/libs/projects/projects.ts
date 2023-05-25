export interface IProject {
    _id?: string;
    name: string;
    description: string;
    isActive: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}



//const newProject2: Required<IProject> = {}; // Si usamos Required todos los datos de los project 

//Mecanismo en memoria
const memoryProjects: IProject[] = [];
let createProjects: number = 0;

export const createProject = async (project: IProject) => {
    const newProject = {...project}; //shallow copy
    newProject._id = (++createProjects).toString();//variable de control en memoria
    newProject.createdAt = new Date();
    newProject.updatedAt = newProject.createdAt;
    memoryProjects.push(newProject);
    return newProject;    
};

export const getProjects = async () => {
    return memoryProjects;
};