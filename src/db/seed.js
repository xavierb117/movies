import sequelize from "./connection.js";
import fs from 'fs/promises';
import schema from './../model/movie.schema.js';

const movies = await fs.readFile("./src/db/movies.json");
const jsonMovies = JSON.parse(movies);

for (const movie of jsonMovies) {
    await schema.create(movie);
}
console.log(`Inserted ${jsonMovies.length} movie records!`);``