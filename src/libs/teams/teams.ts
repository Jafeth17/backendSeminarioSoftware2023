export  interface ITeam {
    _id?: string;
    name: string;
    description: string;
    members?: string[];
    owner?: string;
    status?: string;
    createdAt?: Date;
    updatedAt?: Date;
  }

  const memoryTeams: ITeam[] = [];
  let createTeams: number = 0;

export const createTeam = async (team: ITeam) => { 
  const newTeam = {...team};
  newTeam._id = (++createTeams).toString();
  newTeam.createdAt = new Date();
  newTeam.updatedAt = newTeam.createdAt;
  memoryTeams.push(newTeam);
  return newTeam;
};

export const getTeams = async () => {
  return memoryTeams;
}

export const getTeamById = async (id: string) => {
  const team = memoryTeams.find(team => team._id === id);
  if (!team) throw new Error('Team not found');
  return team;
}

export const updateTeam =  (id:string, team:Partial<ITeam>) => {
  const index = memoryTeams.findIndex(team => team._id === id);
  if (index === -1) throw new Error('Team not found');
  memoryTeams[index] = {...memoryTeams[index],...team, updatedAt: new Date()};
  return memoryTeams[index];
}

export const deleteTeam = (id: string) => {
  const index = memoryTeams.findIndex(team => team._id === id);
  if (index === -1) throw new Error('Team not found');
  memoryTeams.splice(index, 1);
  return true;
}