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
export const fetchComments = (id, result) => {
  db.query('SELECT * from comments WHERE post_id = ? ORDER BY created_at desc', [id], (err, results) => {
    if (err) {
      console.log(err)
      result(err, null)
    } else {
      result(null, results)
    }
  })
}
