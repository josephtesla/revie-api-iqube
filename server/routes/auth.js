import { signUp, signIn } from "../controllers/auth";

const authRouter = (router) => {

  router.post("/signup", signUp);
  router.post("/signin", signIn);

  return router;
}


export default authRouter;