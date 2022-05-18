import db from '../config/database'

// get all post
export const getPosts = (result) => {
  db.query('SELECT * FROM posts', (err, results) => {
    if (err) {
      console.log(err)
      result(err, null)
    } else {
      result(null, results)
    }
  })
}

// get single post
export const getPostById = (id, result) => {
  db.query('SELECT * FROM posts WHERE id = ?', [id], (err, results) => {
    if (err) {
      console.log(err)
      result(err, null)
    } else {
      result(null, results[0])
    }
  })
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