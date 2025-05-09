import { Router } from 'express';
import { movies } from './../controllers/movies.controller.js';

const router = Router();

// Routes
router.get("/", movies)

export default router