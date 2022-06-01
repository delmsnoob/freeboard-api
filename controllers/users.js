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
    console.log(username, 'username')
    console.log(password, 'password')
    if (!err) {
      console.log(results)
      console.log(res)
      console.log('!err users.js')
      res.json(results)
    } else {
      console.log(results)
      console.log(res)
      console.log('err users.js');
      res.send(err)
    }
  })
}
