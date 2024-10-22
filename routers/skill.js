const router = require("express").Router();
const {
  getAllSkills,
  createNewSkill,
  deleteSkill,
  updateSkill,
} = require("../controllers/skill");

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
router.post("/skills", createNewSkill);

// Delete skill
router.delete("/skills/:id", deleteSkill);

// Update skill
router.put("/skills/:id", updateSkill);

module.exports = router;
