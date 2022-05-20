import db from '../config/database'

// Add reply
export const addReply = (data, result) => {
  db.query('INSERT INTO comments SET ?', [data], (err, results) => {
    if (err) {
      console.log(err)
      result(err, null)
    } else {
      result(null, results)
    }
  })
}
