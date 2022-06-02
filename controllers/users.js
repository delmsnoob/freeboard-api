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
  const username = req.body.username
  const password = req.body.password

  verifyUser(username, password, (err, results) => {
    if (results) {
      console.log(results, 'results users.js')
      // res.json(results)
      res.json(results)
    } else {
      console.log(err, 'error')
      res.json(err)
    }
  })
}
