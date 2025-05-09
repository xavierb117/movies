import schema from './../model/movie.schema.js';
import { Op } from 'sequelize';

const movies = await schema.findAll();
// console.log(movies);

// Print out all the movie titles
const titles = movies.map(el => el.dataValues.title);
// console.log(titles);

// Select title, year from movies
const projected = await schema.findAll({
    attributes: ['title', 'yearReleased', 'genre']
});
// console.log(projected.map(row => row.toJSON()));

const movieObjs = projected.map(row => row.get({ plain: true }));

for (const movie of movieObjs) {
    // console.log(movie.title);
}

// Select title, year from movies where genre = "comedy"
const comedyMovies = await schema.findAll({
    attributes: ['title', 'yearReleased', 'genre'],
    where: {
        genre: "sci-fi",
        yearReleased: {
            [Op.gte]: 2020
        }
    }
});
console.log(comedyMovies.map(row => row.toJSON()));

const badMovie = {
    title: "",
    yearReleased: 100,
    filmLength: 0,
    genre: "action123"
}

// this should give us an error
await schema.create(badMovie);