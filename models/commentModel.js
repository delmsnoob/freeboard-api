import db from '../config/database'

// Add reply
export const addComment = (data, result) => {
  db.query('INSERT INTO comments SET ?', [data], (err, results) => {
    if (err) {
      console.log(err)
      result(err, null)
    } else {
      result(null, results)
    }
  })
}

// fetch reply by post id
export const fetchComments = (result) => {
  db.query('SELECT * from comments', (err, results) => {
    if (err) {
      console.log(err)
      result(err, null)
    } else {
      result(null, results)
    }
  })
}
