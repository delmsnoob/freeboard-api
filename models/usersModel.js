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
  db.query('SELECT id, username, password FROM users WHERE username = ? AND password = ?', [username, password], (err, results) => {
    if (results.length > 0) {
      console.log('login success')
      // console.log(results.length, 'results')
      result(err, results)
    } else {
      console.log('login error')
      console.log(err, 'err')
      console.log(results, 'results')
      result(err, results)
    }
  })
}