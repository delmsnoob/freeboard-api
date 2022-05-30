import db from '../config/database'

// add user
export const addUser = (data, result) => {
  db.query('INSERT INTO users SET ?', [data], (err, results) => {
    if (err) {
      console.log(err)
      result(err, null)
    } else {
      result(null, results)
    }
  })
}

// login user
export const verifyUser = (username, password, result) => {
  db.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (err, results) => {
    if (err) {
      console.log(err)
      result(err, null)
    } else {
      console.log(results)
      result(null, results)
    }
  })
}