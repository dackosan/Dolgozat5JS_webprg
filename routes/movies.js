import express from 'express'
import * as moviesControllers from '../Controllers/moviesControllers.js'

const router = express.Router();

router.get('/', moviesControllers.getAllMovies);

router.get('/:id', moviesControllers.getMovieById);

router.post('/', moviesControllers.createMovie);

router.put('/:id', moviesControllers.updateMovie);

router.delete('/:id', moviesControllers.deleteMovie);

export default router