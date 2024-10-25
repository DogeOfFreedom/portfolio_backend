const { body } = require("express-validator");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const validateSkill = [
  body("name")
    .isLength({ min: 1 })
    .withMessage("Skill name cannot be empty")
    .isLength({ max: 30 })
    .withMessage("Skill name cannot exceed 30 characters")
    .custom(async (value, { req }) => {
      const existingSkill = await prisma.skill.findFirst({
        where: {
          name: value,
          id: {
            not: Number(req.body.id),
          },
        },
      });
      if (existingSkill) {
        throw new Error("Skill already exists");
      }
      return true;
    }),
];

const validateProject = [
  body("name")
    .isLength({ min: 1 })
    .withMessage("Project name cannot be empty")
    .isLength({ max: 50 })
    .withMessage("Project name cannot exceed 50 characters")
    .custom(async (value, { req }) => {
      const options = req.body.id
        ? {
            where: {
              name: value,
              id: {
                not: Number(req.body.id),
              },
            },
          }
        : {
            where: {
              name: value,
            },
          };

      const existingProject = await prisma.project.findFirst(options);
      if (existingProject) {
        throw new Error("Project already exists");
      }
      return true;
    }),
  body("description")
    .isLength({ min: 1 })
    .withMessage("Description cannot be empty")
    .isLength({ max: 500 })
    .withMessage("Maximum description length is 500 characters"),
  body("link")
    .not()
    .isEmpty()
    .withMessage("Link cannot be empty")
    .custom(async (value, { req }) => {
      const options = req.body.id
        ? {
            where: {
              name: value,
              id: {
                not: Number(req.body.id),
              },
            },
          }
        : {
            where: {
              name: value,
            },
          };
      const existingLink = await prisma.project.findFirst(options);
      if (existingLink) {
        throw new Error("Link already in use");
      }
      return true;
    }),
];

module.exports = { validateSkill, validateProject };
