const expressAsyncHandler = require("express-async-handler");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getAllSkills = expressAsyncHandler(async (req, res) => {
  const skills = await prisma.skill.findMany();
  res.send(skills);
});

const createNewSkill = expressAsyncHandler(async (req, res) => {
  res.send("NEW SKILL stub");
});

const deleteSkill = expressAsyncHandler(async (req, res) => {
  res.send("DELETE SKILL stub");
});

const updateSkill = expressAsyncHandler(async (req, res) => {
  res.send("UPDATE SKILL stub");
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
