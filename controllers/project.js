const expressAsyncHandler = require("express-async-handler");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getAllProjects = expressAsyncHandler(async (req, res) => {
  const projects = await prisma.project.findMany();
  res.send(projects);
});

const createNewProject = expressAsyncHandler(async (req, res) => {
  const { name, description, link } = req.body;
  await prisma.project.create({
    data: {
      name,
      description,
      link,
    },
  });
  res.sendStatus(200);
});

const deleteProject = expressAsyncHandler(async (req, res) => {
  const id = Number(req.params.id);
  await prisma.project.delete({
    where: {
      id,
    },
  });
  res.sendStatus(200);
});

const updateProject = expressAsyncHandler(async (req, res) => {
  const id = Number(req.params.id);
  const { name, description, link } = req.body;
  await prisma.project.update({
    where: {
      id,
    },
    data: {
      name,
      description,
      link,
    },
  });
  res.sendStatus(200);
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
