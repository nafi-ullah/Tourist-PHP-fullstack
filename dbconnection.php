<?php

// Database credentials
$connection = mysqli_connect('localhost', 'mysqldib', 'nafipass', 'tourist');

// Check connection
if ($connection) {
    // Create users table if not exists
    $create_users_table_query = "CREATE TABLE IF NOT EXISTS users (
        userid INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(50) NOT NULL UNIQUE,
        fullname VARCHAR(100) NOT NULL,
        profilepic VARCHAR(255),
        email VARCHAR(100) NOT NULL UNIQUE,
        password VARCHAR(100) NOT NULL,
        bio TEXT,
        countrylist VARCHAR(255)
    )";

    mysqli_query($connection, $create_users_table_query);

    // Create posts table if not exists
    $create_posts_table_query = "CREATE TABLE IF NOT EXISTS posts (
        postid INT AUTO_INCREMENT PRIMARY KEY,
        userid INT,
        headline VARCHAR(255),
        country VARCHAR(100),
        caption TEXT,
        picture VARCHAR(255),
        timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (userid) REFERENCES users(userid)
    )";

    mysqli_query($connection, $create_posts_table_query);

    // Create comments table if not exists
    $create_comments_table_query = "CREATE TABLE IF NOT EXISTS comments (
        commentid INT AUTO_INCREMENT PRIMARY KEY,
        postid INT,
        userid INT,
        comment TEXT,
        timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (postid) REFERENCES posts(postid),
        FOREIGN KEY (userid) REFERENCES users(userid)
    )";

    mysqli_query($connection, $create_comments_table_query);

    echo "Tables created successfully and connected.";
} else {
    echo "Database connection failed.";
}
?>
