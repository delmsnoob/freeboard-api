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
    /* const user = db.query('SELECT id, username, password WHERE username = ', [username], (err, results) => {
      if (!user) {
        result(err, null)
        console.log(err)
        console.log('LOGIN ERROR: INVALID USERNAME OR PASSWORD');
      } else {
        result(null, results)
        console.log(results, 'results else usersModel')
      }
    }) */
  db.query('SELECT id, username, password FROM users WHERE username = ? AND password = ?', [username, password], (err, results) => {
    if (!err) {
      console.log('login error');
      console.log(err)
      result(err, null)
    } else {
      console.log('login success');
      console.log(results)
      result(null, results)
    }
  })
}