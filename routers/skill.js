const router = require("express").Router();
const { checkForErrors } = require("../controllers/errors");
const {
  getAllSkills,
  createNewSkill,
  deleteSkill,
  updateSkill,
} = require("../controllers/skill");
const { validateSkill } = require("../controllers/validation");

/*
Functions Needed:
- Get all skills
- Create new skill
- Rename Skill
- Delete SKill
*/

// Get skills
router.get("/skills", getAllSkills);

// Create new skill
router.post("/skills", validateSkill, checkForErrors, createNewSkill);

// Delete skill
router.delete("/skills/:id", deleteSkill);

// Update skill
router.put("/skills/:id", validateSkill, checkForErrors, updateSkill);

module.exports = router;
