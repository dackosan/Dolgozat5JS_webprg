import express from 'express'
import movies from './data/movies.js'

const app = express();
app.use(express.json());

app.get('/movies', (req, res) =>{
    res.status(200).json(movies);
});

app.get('/movies/:id', (req, res) =>{
    const id = req.params.id;
    if(id < 0 || id >= movies.length){
        return res.status(404).json({message: "No movie on this id!"})
    }

    res.status(200).json(movies[id]);
});

app.post('/movies', (req, res) =>{
    const {title, director, year, oscar} = req.body;
    if(!title || !director || !year){
        return res.status(404).json({message: "Missing data"});
    }

    const newMovie = {title, director, year, oscar}
    movies.push(newMovie);

    res.status(200).json(newMovie);
});

app.put('/movies/:id', (req, res) =>{
    const id = req.params.id;
    if(id < 0 || id >= movies.length){
        res.status(404).json({message: 'No movie on this id!'});
    }

    const {title, director, year, oscar} = req.body;
    if(!title || !director || !year){
        return res.status(404).json({message: 'Missing data!'});
    }    

    movies[id] = {title, director, year, oscar};

    res.status(200).json(newMovie);
});

app.delete('/movies/:id', (req, res) =>{
    const id = req.params.id;
    if(id < 0 || id >= movies.length){
        return res.status(404).json({message: "No movie on this id!"})
    }

    movies.splice(id, 1);

    res.status(200).json({message: "Movie deleted!"});
});

app.listen(3000, () =>{
    console.log('Server runs on port 3000');
});