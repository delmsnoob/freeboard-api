import { getPosts, addPost, updatePostById, deletePostById, searchPost } from '../models/postModel'

// get all post
export const fetchPosts = (req, res) => {
  getPosts((err, results) => {
    if (err) {
      res.send(err)
    } else {
      res.json(results)
    }
  })
}

// search by post
export const filterPostsByPost = (req, res) => {
  const searchBy = req.params.searchBy
  const keyword = req.params.keyword

  searchPost(searchBy, keyword, (err, results) => {
    if (err) {
      res.send(err)
    } else {
      res.json(results)
    }
  })
}

// get single post
export const fetchPostById = (req, res) => {
  getPostById(req.params.id, (err, results) => {
    if (err) {
      res.send(err)
    } else {
      res.json(results)
    }
  })
}

// create new post
export const createPost = (req, res) => {
  const data = req.body
  addPost(data, (err, results) => {
    if (err) {
      res.send(err)
    } else {
      res.json(results)
    }
  })
}

// update post by id
export const updatePost = (req, res) => {
  const data = req.body
  const id = req.params.id
  updatePostById(data, id, (err, results) => {
    if (err) {
      res.send(err)
    } else {
      res.json(results)
    }
  })
}

// delete post by id
export const deletePost = (req, res) => {
  const id = req.params.id
  deletePostById(id, (err, results) => {
    if (err) {
      res.send(err)
    } else {
      res.json(results)
    }
  })
}
