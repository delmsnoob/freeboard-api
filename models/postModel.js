import db from '../config/database'


// get all post
export const getPosts = (result) => {
  db.query('SELECT * FROM posts ORDER BY created_at DESC', (err, results) => {
    if (err) {
      console.log(err)
      result(err, null)
    } else {
      result(null, results)
    }
  })
}

// search posts
export const searchPost = (search, data, result) => {
  if (data === null) {
    db.query('SELECT * FROM posts ORDER BY created_at desc', (err, results) => {
      if (err) {
        console.log(err)
        result(err, null)
      } else {
        result(null, results)
      }
    })
  } else if (search === 'created_at') {
    db.query(`SELECT * FROM posts WHERE created_at LIKE '%${data}%' ORDER BY created_at DESC`, (err, results) => {
      if (err) {
        console.log(err)
        result(err, null)
      } else {
        result(null, results)
      }
    })
  } else {
    db.query(`SELECT * FROM posts WHERE ${search} LIKE '%${data}%' ORDER BY created_at DESC` , (err, results) => {
      if (err) {
        console.log(err)
        result(err, null)
      } else {
        result(null, results)
      }
    })
  }
}

// add post
export const addPost = (data, result) => {
  db.query('INSERT INTO posts SET ?', [data], (err, results) => {
    if (err) {
      console.log(err)
      result(err, null)
    } else {
      result(null, results)
    }
  })
}

// update post
export const updatePostById = (data, id, result) => {
  db.query('UPDATE posts SET author_name = ?, author_email = ?, author_post = ? WHERE id = ?', [data.author_name, data.author_email, data.author_post, id], (err, results) => {
    if (err) {
      console.log(err)
      result(err, null)
    } else {
      result(null, results)
    }
  })
}

// delete post
export const deletePostById = (id, result) => {
  db.query('DELETE FROM posts WHERE id = ?', [id], (err, results) => {
    if (err) {
      console.log(err)
      result(err, null)
    } else {
      result(null, results)
    }
  })
}