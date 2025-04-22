import express from "express";

import { changePassword, updateUser } from "../controllers/userController.js";
import { deleteUser } from "../controllers/userController.js";


const router = express.Router();

router.post("/reset-password", changePassword);
router.put("/update-user", updateUser);
router.put("/delete-user", deleteUser);

export default router;
