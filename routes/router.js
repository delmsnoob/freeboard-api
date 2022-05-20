import express from 'express'

import { fetchPosts, fetchPostById, createPost, updatePost, deletePost } from '../controllers/posts'

import { createReply } from '../controllers/comments'

const router = express.Router()

router.get('/posts', fetchPosts)
router.get('/posts/:id', fetchPostById)
router.post('/posts', createPost)
router.put('/posts/:id', updatePost)
router.delete('/posts/:id', deletePost)

router.post('/comments', createReply)

export default router

