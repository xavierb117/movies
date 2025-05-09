import express from 'express';
import router from './routes/movies.routes.js';

const app = express();

app.use("/movies", router);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});