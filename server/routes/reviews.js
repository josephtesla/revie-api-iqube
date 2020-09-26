import {
  createReview,
  markAsHelpful,
  getReviews
} from "../controllers/reviews";
import { upload } from "../utils/upload";
import { requireSignIn } from "../../server-build/controllers/auth";

const reviewsRouter = (router) => {

  //authenticated users endpoint
  router.post("/:apartmentId", requireSignIn, upload.any(), createReview);

  //random users endpoints
  router.put("/mark/:reviewId", markAsHelpful);
  router.get("/:apartmentId/recent", getReviews("recent"));
  router.get("/:apartmentId/mosthelpful", getReviews("helpful"))

  return router;
}


export default reviewsRouter;