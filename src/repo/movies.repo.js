import schema from './../model/movie.schema.js';

export const getMovies =  async() => {
    return await schema.findAll();
}

export const getMoviesById = async moviesId => {
    return await schema.findOne({
        where: {
            moviesId
        }
    });

    // return await schema.findByPk(moviesId);
}

export const addMovies = async movie => {
    return await schema.create(movie);
}

export const updateMovie = async movie => {
    return await schema.update(movie, {
        where: {
            moviesId: movie.moviesId
        }
    });
}

export const deleteMovie = async moviesId => {
    return await schema.destroy({
        where: {
            moviesId
        }
    });
}