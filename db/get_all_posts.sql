-- SELECT * FROM posts WHERE author_id !=$1
SELECT users.username, users.profilepic,posts.id, posts.author_id,posts.title, posts.img, posts.content
FROM posts JOIN users ON users.id = posts.author_id 