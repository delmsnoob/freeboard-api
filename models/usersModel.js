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
      const token = {
        id: results[0].id,
        username: results[0].username
      }
      console.log('login success')
      result(null, token)
    } else {
      console.log('login error')
      result(err, null)      
    }
  })
}
