import { Table, Card } from 'react-bootstrap';
import { TableItemMovie } from './TableItemMovie';

const movies = [
    {
        title: "Tarzan",
        length: 120,
        awards: 10,
        rating: 10,
        genres: ["aventuras", "drama"]
    },
    {
        title: "Dracula",
        length: 120,
        awards: 10,
        rating: 10,
        genres: ["terror", "drama"]
    },
    {
        title: "Caza fantasma",
        length: 130,
        awards: 10,
        rating: 10,
        genres: ["aventuras", "ciencia ficcion"]
    },
    {
        title: "Degenerada",
        length: 100,
        awards: 1,
        rating: 2,
        genres: []
    },

]

export const TablesMovies = () => {
    return (

        <Card>
            <Card.Body>
                <Table striped>
                    <thead>
                        <tr>
                            <th>Titulo</th>
                            <th>Duracion</th>
                            <th>Rating</th>
                            <th>Generos</th>
                            <th>Premios</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            movies.map(({ title, length, genres, awards, rating }, index) =>
                             <TableItemMovie 
                                key={index + title}
                                title={title} length={length} 
                                genres={genres} 
                                awards={awards} 
                                rating={rating} />)
                        }

                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    )
}
