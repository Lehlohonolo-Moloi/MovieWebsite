DROP USER IF EXISTS username@'localhost';
DROP DATABASE IF EXISTS MovieDB;

CREATE DATABASE IF NOT EXISTS MovieDB;

USE MovieDB;

CREATE USER IF NOT EXISTS username@'localhost' IDENTIFIED BY 'password';
GRANT ALL ON MovieDB.* TO username@'localhost';

CREATE TABLE `Actor` (
  `actor_id` integer NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `first_name` varchar(255),
  `last_name` varchar(255),
  `date_of_birth` date
);

CREATE TABLE `Movie` (
  `movie_id` integer NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `movie_name` varchar(255),
  `movie_summary` varchar(255),
  `release_date` date,
  `genre_id` integer,
  `prod_id` integer
);

CREATE TABLE `Director` (
  `director_id` integer NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `first_name` varchar(255),
  `last_name` varchar(255)
);

CREATE TABLE `Genre` (
  `genre_id` integer NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `description` varchar(255)
);

CREATE TABLE `Production_Company` (
  `prod_id` integer NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `prod_name` varchar(255)
);

CREATE TABLE `Movie_Actor` (
  `actor_id` integer,
  `movie_id` integer,
  PRIMARY KEY (`actor_id`, `movie_id`)
);

CREATE TABLE `Movie_Director` (
  `director_id` integer,
  `movie_id` integer,
  PRIMARY KEY (`director_id`, `movie_id`)
);

ALTER TABLE `Movie_Actor` ADD FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`actor_id`);

ALTER TABLE `Movie_Actor` ADD FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`movie_id`);

ALTER TABLE `Movie_Director` ADD FOREIGN KEY (`director_id`) REFERENCES `Director` (`director_id`);

ALTER TABLE `Movie_Director` ADD FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`movie_id`);

ALTER TABLE `Movie` ADD FOREIGN KEY (`genre_id`) REFERENCES `Genre` (`genre_id`);

ALTER TABLE `Movie` ADD FOREIGN KEY (`prod_id`) REFERENCES `Production_Company` (`prod_id`);
