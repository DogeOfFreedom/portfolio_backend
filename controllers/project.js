const expressAsyncHandler = require("express-async-handler");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getAllProjects = expressAsyncHandler(async (req, res) => {
  const projects = await prisma.project.findMany();
  res.send(projects);
});

const createNewProject = expressAsyncHandler(async (req, res) => {
  res.send("NEW Project stub");
});

const deleteProject = expressAsyncHandler(async (req, res) => {
  res.send("DELETE Project stub");
});

const updateProject = expressAsyncHandler(async (req, res) => {
  res.send("UPDATE Project stub");
});

const doesProjectExist = expressAsyncHandler(async (project) => {
  const data = await prisma.project.findFirst({
    where: {
      name: project,
    },
  });
  if (!data) {
    return true;
  }
  return false;
});

module.exports = {
  getAllProjects,
  createNewProject,
  deleteProject,
  updateProject,
  doesProjectExist,
};
