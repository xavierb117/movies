import { getMovies } from './../repo/movies.repo.js';

export const movies = async (req, res) => {
    const movies = await getMovies();
    res.status(200).json(movies);
}