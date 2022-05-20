import { addReply } from '../models/commentModel'

// get all post
export const createReply = (req, res) => {
  const data = req.body
  addReply(data, (err, results) => {
    if (err) {
      res.send(err)
    } else {
      res.json(results)
    }
  })
}
