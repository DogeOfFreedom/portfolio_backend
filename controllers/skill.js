const expressAsyncHandler = require("express-async-handler");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getAllSkills = expressAsyncHandler(async (req, res) => {
  const skills = await prisma.skill.findMany();
  res.send(skills);
});

const createNewSkill = expressAsyncHandler(async (req, res) => {
  await prisma.skill.create({
    data: req.body,
  });
  res.sendStatus(200);
});

const deleteSkill = expressAsyncHandler(async (req, res) => {
  const id = Number(req.params.id);
  await prisma.skill.delete({
    where: {
      id,
    },
  });
  res.sendStatus(200);
});

const updateSkill = expressAsyncHandler(async (req, res) => {
  const id = Number(req.params.id);
  const { name } = req.body;
  await prisma.skill.update({
    where: {
      id,
    },
    data: {
      name,
    },
  });
  res.sendStatus(200);
});

const doesSkillExist = expressAsyncHandler(async (skill) => {
  const data = await prisma.skill.findFirst({
    where: {
      name: skill,
    },
  });
  if (!data) {
    return false;
  }
  return true;
});

module.exports = {
  getAllSkills,
  createNewSkill,
  deleteSkill,
  updateSkill,
  doesSkillExist,
};
