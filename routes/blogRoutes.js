const express = require("express");
const {
  getAllBlogsController,
  createBlogController,
  updateBlogController,
  getBlogByIdController,
  deleteBlogController,
  userBlogControlller,
} = require("../controlers/blogControlller");

//router object
const router = express.Router();

//routes
//Get||all blogs
router.get("/all-blog", getAllBlogsController);

//Post || create blog
router.post("/create-blog", createBlogController);

//Put|| update blog
router.put("/update-blog/:id", updateBlogController);

//Get// single blog Details
router.get("/get-blog/:id", getBlogByIdController);

//Delete || delete blog
router.delete("/delete-blog/:id", deleteBlogController);

//GET ||user blog
router.get("/user-blog/:id", userBlogControlller);
module.exports = router;
