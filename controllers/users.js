import { addUser, verifyUser } from '../models/usersModel'

// create new user
export const createUser = (req, res) => {
  const data = req.body
  addUser(data, (err, results) => {
    if (err) {
      res.send(err)
    } else {
      res.json(results)
    }
  })
}

export const loginUser = (req, res) => {
  const username = req.params.username
  const password = req.params.password
  verifyUser(username, password, (err, results) => {
    if (err) {
      res.send(err)
    } else {
      res.json(results)
    }
  })
}
