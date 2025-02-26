import { Router } from "express";

import authorize from "../middlewares/auth.middleware";
import { getUsers, getUser } from "../controllers/user.controller";
const userRouter = Router();

userRouter.get("/", getUsers);

userRouter.get("/:id",getUser);

userRouter.post("/", (req, res) => res.send({ title: "CREATE new user" }));

userRouter.put("/:id", (req, res) => res.send({ title: "UPDATE user" }));

userRouter.delete("/:id", (req, res) => res.send({ title: "DELETE user" }));

export default userRouter;
