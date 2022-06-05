import express from 'express'

import { fetchPosts, createPost, updatePost, deletePost, filterPostsByPost } from '../controllers/posts'

import { createComment, getComments } from '../controllers/comments'

import { createUser, loginUser } from '../controllers/users'

const router = express.Router()

router.get('/posts', fetchPosts)
router.get('/posts/:searchBy/:keyword', filterPostsByPost)
// router.get('/posts/:searchBy', fetchPosts)
router.post('/posts', createPost)
router.put('/posts/:id', updatePost)
router.delete('/posts/:id', deletePost)

router.post('/comments', createComment)
router.post('/comments/:id', createComment)
router.get('/comments/:id', getComments)

router.post('/users/register', createUser)
router.post('/users/login', loginUser)

export default router

