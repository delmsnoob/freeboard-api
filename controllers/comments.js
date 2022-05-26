import { addComment, fetchComments } from '../models/commentModel'

// add comment
export const createComment = (req, res) => {
  const data = req.body
  addComment(data, (err, results) => {
    if (err) {
      res.send(err)
    } else {
      res.json(results)
    }
  })
}

// fetch reply by post id
export const getComments = (req, res) => {
  fetchComments((err, results) => {
    if (err) {
      res.send(err)
    } else {
      res.json(results)
    }
  })
}
