DROP DATABASE IF EXISTS spacex;
CREATE DATABASE spacex;
USE spacex;

CREATE TABLE passenger (
  `passenger_id` INT AUTO_INCREMENT PRIMARY KEY,
  `first_name` VARCHAR(255),
  `last_name` VARCHAR(255),
  `email` VARCHAR(255) UNIQUE,
  `address` VARCHAR(255),
  `health_check` BOOLEAN
);

CREATE TABLE destination (
  `destination_id` INT AUTO_INCREMENT PRIMARY KEY,
  `location` VARCHAR(255),
  `date` DATE,
  `time` TIME,
  `weather` VARCHAR(255),
  `img_url` VARCHAR(255),
  `samenvatting` VARCHAR(255),
  `afbeelding1` VARCHAR(255),
  `informatie1` VARCHAR(255),
  `afbeelding2` VARCHAR(255),
  `informatie2` VARCHAR(255),
  `vervoersmiddelen` VARCHAR(255)
);

CREATE TABLE flight (
  `flight_id` INT AUTO_INCREMENT PRIMARY KEY,
  `duration` INT,
  `CO2_emissions` DECIMAL(10,2),
  `fuel_consumption` DECIMAL(10,2),
  `destination_id` INT,
  FOREIGN KEY (`destination_id`) REFERENCES `destination`(`destination_id`)
);

CREATE TABLE ticket (
  `ticket_id` INT AUTO_INCREMENT PRIMARY KEY,
  `price` DECIMAL(10,2),
  `flight_id` INT,
  `CO2_emissions` DECIMAL(10,2),
  `current_destination` VARCHAR(255),
  FOREIGN KEY (`flight_id`) REFERENCES `flight`(`flight_id`)
);

CREATE TABLE ticket_passenger (
  `ticket_id` INT,
  `passenger_id` INT,
  PRIMARY KEY (`ticket_id`, `passenger_id`),
  FOREIGN KEY (`ticket_id`) REFERENCES `ticket`(`ticket_id`),
  FOREIGN KEY (`passenger_id`) REFERENCES `passenger`(`passenger_id`)
);

CREATE TABLE payment (
  `payment_id` INT AUTO_INCREMENT PRIMARY KEY,
  `ticket_id` INT,
  `amount` DECIMAL(10,2),
  `payment_date` DATETIME,
  FOREIGN KEY (`ticket_id`) REFERENCES `ticket`(`ticket_id`)
);

CREATE TABLE baggage (
  `baggage_id` INT AUTO_INCREMENT PRIMARY KEY,
  `passenger_id` INT,
  weight DECIMAL(10,2),
  FOREIGN KEY (`passenger_id`) REFERENCES `passenger`(`passenger_id`)
);

CREATE TABLE flight_schedule (
  `flight_schedule_id` INT AUTO_INCREMENT PRIMARY KEY,
  `flight_id` INT,
  `departure_date` DATE,
  `departure_time` TIME,
  `arrival_date` DATE,
  `arrival_time` TIME,
  FOREIGN KEY (`flight_id`) REFERENCES `flight`(`flight_id`)
);

CREATE TABLE rocket (
  `rocket_id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(255),
  `model` VARCHAR(255),
  `img_url` VARCHAR(255)

);

CREATE TABLE airline (
  `airline_id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(255),
  `country` VARCHAR(255)
);

CREATE TABLE airline_flight (
  `airline_id` INT,
  `flight_id` INT,
  PRIMARY KEY (`airline_id`, `flight_id`),
  FOREIGN KEY (`airline_id`) REFERENCES `airline`(`airline_id`),
  FOREIGN KEY (`flight_id`) REFERENCES `flight`(`flight_id`)
);

INSERT INTO passenger (passenger_id, first_name, last_name, email, address, health_check)
VALUES
  ('1', 'John', 'Doe', 'john.doe@example.com', '123 Main St', 1),
  ('2', 'Jane', 'Smith', 'jane.smith@example.com', '456 Elm St', 0),
  ('3', 'Michael', 'Johnson', 'michael.johnson@example.com', '789 Oak St', 1);

INSERT INTO destination (destination_id, location, date, time, weather, img_url, samenvatting, afbeelding1, informatie1, afbeelding2, informatie2, vervoersmiddelen)
VALUES ('1', 'New York', '2023-05-10', '10:00:00', 'Sunny', 'image_url_1', 'New York is one of the worlds most visited places and a great place if you want to go shopping or just admire the city', 'new-york.png', 'Our New York spaceport is located in the ocean close to the city with access by boat and helicopter.', 'location.png', 'Info 2', 'Transport 1'),
       ('2', 'Tokyo', '2023-05-11', '14:30:00', 'Cloudy', 'image_url_4', 'Tokyo is a great place for bussiness owners to branch out and explore the corporate life.', 'hong-kong.png', 'The Tokyo spaceport is located on an island close to japan with a quick access route by train. The train takes a short scenic route trough the mountains and stops close to the center of Tokyo where our clients can rent a tesla model S or X.', 'booking-bg.png', 'Info 4', 'Transport 2');

INSERT INTO flight (flight_id, duration, CO2_emissions, fuel_consumption, destination_id)
VALUES
  (1, 180, 250.5, 1500.75, 1),
  (2, 360, 500.25, 3000.50, 2),
  (3, 600, 800.75, 5000.25, 1);

INSERT INTO ticket (ticket_id, price, flight_id, CO2_emissions, current_destination)
VALUES
  (1, 250.00, 1, 200.50, 'New York'),
  (2, 500.00, 2, 400.25, 'London'),
  (3, 800.00, 3, 600.75, 'Tokyo');

INSERT INTO ticket_passenger (ticket_id, passenger_id)
VALUES
  (1, 1),
  (1, 2),
  (2, 3);

INSERT INTO payment (ticket_id, amount, payment_date)
VALUES
  (1, 250.00, '2023-05-10 10:30:00'),
  (2, 500.00, '2023-05-10 11:45:00'),
  (3, 800.00, '2023-05-10 13:15:00');

INSERT INTO baggage (baggage_id, passenger_id, weight)
VALUES
  (1, 1, 20.5),
  (2, 2, 15.75),
  (3, 3, 18.0);

INSERT INTO flight_schedule (flight_id, departure_date, departure_time, arrival_date, arrival_time)
VALUES
  (1, '2023-05-11', '09:00:00', '2023-05-11', '12:00:00'),
  (2, '2023-05-12', '12:30:00', '2023-05-12', '18:30:00'),
  (3, '2023-05-15', '16:45:00', '2023-05-16', '01:00:00');

INSERT INTO airline (airline_id, name, country)
VALUES
  (1, 'Delta Air Lines', 'United States'),
  (2, 'British Airways', 'United Kingdom'),
  (3, 'Japan Airlines', 'Japan');

INSERT INTO rocket (rocket_id, name, model, img_url)
VALUES
  (1, 'Falcon 9', 'Block 5', 'https://example.com/falcon9.jpg'),
  (2, 'Starship', 'SN15', 'https://example.com/starship.jpg'),
  (3, 'Dragon', '2', 'https://example.com/dragon.jpg'); 