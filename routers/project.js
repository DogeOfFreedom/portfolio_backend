const router = require("express").Router();
const {
  getAllProjects,
  createNewProject,
  deleteProject,
  updateProject,
} = require("../controllers/project");

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
router.post("/projects", createNewProject);

// Delete project
router.delete("/projects/:id", deleteProject);

// Update project
router.put("/projects/:id", updateProject);

module.exports = router;
