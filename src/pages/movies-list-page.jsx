import { Table, Card } from 'react-bootstrap';
import { TableItemMovie } from '../components/TableItemMovie';
import { useEffect, useState } from 'react';
import { Loading } from '../components/Loading';
import { Paginator } from '../components/paginator';
import { FormSearchMovies } from '../components/FormSearchMovies';


export const MoviesListPage = () => {


    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)
    const [pagination, setPagination] = useState({})

    const apiCall = async (endpoint = '/api/v1/movies') => {
        const response = await fetch(`http://localhost:3001${endpoint}`);
        const result = await response.json();

        setLoading(false)
        setMovies(result.data)
        setPagination(result.meta)

        console.log(result);
    }

    useEffect(() => {

        apiCall()

    }, [])

    return (

        <>
            <div className='d-sm-flex align-items-center justify-content-between mb-4'>
                <h1 className='h3 mb-0 text-gray-800'>Lista de peliculas</h1>
            </div>
            {
                loading ?
                    <Loading />
                    :
                    <Card>

                        <Card.Body>
                            <div className="d-flex justify-content-between">
                                <FormSearchMovies apiCall={apiCall}/>
                                <Paginator pagination={pagination} apiCall={apiCall} />
                            </div>

                            <Table striped>
                                <thead>
                                    <tr>
                                        <th>Titulo</th>
                                        <th>Duracion</th>
                                        <th>Rating</th>
                                        <th>Generos</th>
                                        <th>Premios</th>
                                        <th>Acciones</th>

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
                            <Paginator pagination={pagination} apiCall={apiCall} />
                        </Card.Body>
                    </Card>

            }

        </>



    )
}
