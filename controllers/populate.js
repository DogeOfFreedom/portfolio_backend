const { PrismaClient } = require("@prisma/client");
const expressAsyncHandler = require("express-async-handler");

const prisma = new PrismaClient();
const skills = [
  {
    id: 1,
    name: "HTML",
  },
  {
    id: 2,
    name: "CSS",
  },
  {
    id: 3,
    name: "JavaScript",
  },
  {
    id: 4,
    name: "React",
  },
  {
    id: 5,
    name: "NodeJS",
  },
  {
    id: 6,
    name: "ExpressJS",
  },
  {
    id: 7,
    name: "MongoDB",
  },
  {
    id: 8,
    name: "Mongoose",
  },
  {
    id: 9,
    name: "PostgreSQL",
  },
  {
    id: 10,
    name: "Prisma",
  },
];
const projects = [
  {
    name: "Full Stack Blog API",
    description:
      "A RESTful blog platform where users can create, read, update, and delete posts. Built with ReactJS for the front-end and NodeJS with Express for the back-end, the API manages user authentication, post management, and comment functionality. Data is stored using PostgreSQL, and Prisma is utilized for database interactions.",
    link: "https://dogeoffreedom-blog-create.netlify.app",
  },
  {
    name: "Mock Shopping Platform",
    description:
      "A mock e-commerce platform featuring user authentication, product browsing, cart management, and checkout processes. The front-end is developed using ReactJS, while the back-end, built with NodeJS and Express, handles product inventory and user data stored in MongoDB.",
    link: "https://silver-cannoli-cde761.netlify.app/shop",
  },
  {
    name: "File Uploader",
    description:
      "A file uploading tool that allows users to upload, store, and manage files. The application is built with a ReactJS front-end, NodeJS/Express back-end, and handles file storage and metadata management using a cloud-based service. The project emphasizes ease of use and secure file handling.",
    link: "https://dogeoffreedom-file-uploader.adaptable.app",
  },
];

const populateDB = expressAsyncHandler(async (req, res) => {
  await prisma.skill.deleteMany();
  await prisma.project.deleteMany();

  await prisma.skill.createMany({
    data: skills,
  });
  await prisma.project.createMany({
    data: projects,
  });
  res.sendStatus(200);
});

module.exports = { populateDB };
