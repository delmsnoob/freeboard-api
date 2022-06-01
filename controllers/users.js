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
    if (!results) {
      console.log(results[0].id)
      console.log(results[0].username)
      console.log(results.length, 'results users.js')
      // res.json(results)
      res.send(results)
    } else {
      console.log(err, 'error')
      res.send(results)
      res.send(err)
    }
  })
}
