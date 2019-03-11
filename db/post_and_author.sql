SELECT users.id, users.username, users.profilepic, posts.title, posts.img, posts.content
FROM posts JOIN users ON users.id = posts.author_id AND users.id = $1