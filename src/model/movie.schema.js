import sequelize from './../db/connection.js';
import { DataTypes } from 'sequelize';

// Define what a movie table/object looks like
const schema = sequelize.define("movies", {
    moviesId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1, 70]
        }
    },
    yearReleased: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 1900,
            max: 2030
        }
    },
    filmLength: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 1
        }
    },
    shortSynopsis: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    genre: {
        type: DataTypes.STRING,
        validate: {
            isAlpha: true
        }
    }
});

// Create the table
// await schema.sync(); // Create table if it's not there
// await schema.sync({ force: true }); // Drop the table (every time) and recreate it
 await schema.sync({ alter: true }); // Update the table (if it changes)

export default schema;