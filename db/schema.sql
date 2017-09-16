CREATE DATABASE valetliving;
USE valetliving;
CREATE TABLE services (
id INTEGER (11) AUTO_INCREMENT NOT NULL,
service_name VARCHAR (255) NOT NULL,
request_details VARCHAR (255) NOT NULL,
request_number VARCHAR (11),
apartment_number VARCHAR (50),
assigned_to VARCHAR (255) NOT NULL,
status BOOLEAN DEFAULT true,
PRIMARY KEY (id)
);

CREATE TABLE checkout (
id INTEGER (11) AUTO_INCREMENT NOT NULL,
name VARCHAR (255) NOT NULL,
email VARCHAR (255) NOT NULL,
netID VARCHAR (50) NOT NULL,
service_id INTEGER (11) NOT NULL,
request_date VARCHAR (11),
due_date VARCHAR (11),
PRIMARY KEY (id),
FOREIGN KEY (service_id) REFERENCES services(id)
ON DELETE CASCADE
);


# pulling the book into a scroll to pick -------k------- that way it would match the book id
-- CREATE TABLE checkout (
--     id INTEGER (11) AUTO_INCREMENT NOT NULL,
--     book_id INTEGER (11) NOT NULL,
--     netID VARCHAR (50) NOT NULL,
--     checkout_date VARCHAR,
--     due_date VARCHAR,
--     PRIMARY KEY (id),
--     FOREIGN KEY (user_id) REFERENCES users(id),
--     FOREIGN KEY (book_id) REFERENCES books(id)
--     );
/*CREATE TABLE requests (
id INTEGER (11) AUTO_INCREMENT NOT NULL,
user_id INTEGER (11)
)