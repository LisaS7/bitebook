CREATE DATABASE IF NOT EXISTS bitebook;
USE bitebook;

DROP TABLE Foods;
CREATE TABLE Foods (
    ID int NOT NULL AUTO_INCREMENT,
    Name varchar(255),
    Category varchar(255),
    Colour varchar(255),
    Flavour varchar(255),
    Texture varchar(255),
    Notes text
    PRIMARY KEY (ID)
);

DROP TABLE Bites;
CREATE TABLE Bites (
    ID int NOT NULL AUTO_INCREMENT,
    Date date,
    FoodID int,
    Reaction varchar(255),
    Liked int,
    List varchar(255),
    Notes text,
    PRIMARY KEY (ID)
    FOREIGN KEY (FoodID) REFERENCES Foods(ID)
);