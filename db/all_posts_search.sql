SELECT users.username, users.profilepic,posts.id, posts.author_id, posts.title, posts.img, posts.content
FROM posts JOIN users ON users.id = posts.author_id  AND posts.content LIKE $1