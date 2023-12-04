import PropTypes from 'prop-types'
export const GenreItem = ({title}) => {
    return (
        <div className="col-lg-6 mb-4">
            <div className="card bg-dark text-white shadow">
                <div className="card-body">
                    {title}
                </div>
            </div>
        </div>
    )
}

GenreItem.propTypes = {
    title : PropTypes.string
}
