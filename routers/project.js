const router = require("express").Router();
const { checkForErrors } = require("../controllers/errors");
const {
  getAllProjects,
  createNewProject,
  deleteProject,
  updateProject,
} = require("../controllers/project");
const { validateProject } = require("../controllers/validation");

/*
Functions Needed:
- Get all projects
- Create new project
- Update project
- Delete project
*/

// Get all projects
router.get("/projects", getAllProjects);

// Create new project
router.post("/projects", validateProject, checkForErrors, createNewProject);

// Delete project
router.delete("/projects/:id", deleteProject);

// Update project
router.put("/projects/:id", validateProject, checkForErrors, updateProject);

module.exports = router;
