const expressAsyncHandler = require("express-async-handler");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getAllSkills = expressAsyncHandler(async (req, res) => {
  const skills = await prisma.skill.findMany();
  res.status(200).json(skills);
});

const createNewSkill = expressAsyncHandler(async (req, res) => {
  const { name } = req.body;
  await prisma.skill.create({
    data: {
      name,
    },
  });
  res.status(200).json({ message: "OK" });
});

const deleteSkill = expressAsyncHandler(async (req, res) => {
  const id = Number(req.params.id);
  await prisma.skill.delete({
    where: {
      id,
    },
  });
  res.status(200).json({ message: "OK" });
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
  res.status(200).json({ message: "OK" });
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
