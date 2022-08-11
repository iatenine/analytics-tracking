CREATE DATABASE IF NOT EXISTS anayltics_db;
TRUNCATE DATABASE analytics_db;

USE analytics_db;

CREATE TABLE Impressions (
    impressionId int NOT NULL AUTO_INCREMENT,
    target_url varchar(255) NOT NULL,
    source_url varchar(255),
    isClick BOOLEAN,
    timestamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (impressionId)
); 

DESCRIBE Impressions;
SELECT * FROM Impressions;
