import { Table, Card } from 'react-bootstrap';
import { TableItemMovie } from '../components/TableItemMovie';
import { useEffect, useState } from 'react';


export const MoviesListPage = () => {


    const [movies, setMovies] = useState([])

    useEffect(() => {

        const apiCall = async () => {
            const response = await fetch('http://localhost:3001/api/v1/movies');
            const result = await response.json();
            setMovies(result.data)
        }
        apiCall()

    }, [])

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
                            movies.map(({ title, length, genre, awards, rating }, index) =>
                                <TableItemMovie
                                    key={index + title}
                                    title={title} length={length}
                                    genre={genre}
                                    awards={awards}
                                    rating={rating} />)
                        }

                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    )
}
