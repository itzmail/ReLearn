CREATE KEYSPACE latihan WITH REPLICATION = { 'class' : 'SimpleStrategy', 'replication_factor' : 2 };

DESC keyspace;

USE latihan;

CREATE TABLE users (
    user_id int PRIMARY KEY,
    username text,
    email text
);

-- Create
INSERT INTO users (user_id, username, email)
VALUES (1, 'johndoe', 'jhondoe@jhondoe.com');

INSERT INTO users (user_id, username, email)
VALUES (2, 'japanned', 'janedoe@janedoe.com');

INSERT INTO users (user_id, username, email)
VALUES (3, 'bob', 'bob@bob.com');

-- Read
SELECT * FROM users WHERE user_id = 3;

-- Update
UPDATE users
SET email = 'bob@imaco.com'
WHERE user_id = 3;

-- Delete
DELETE FROM users WHERE user_id = 2;

SELECT * FROM users;

-- Done for CRUD

-- Info Cassandra Keyspace
desc keyspace latihan;

desc cluster;

