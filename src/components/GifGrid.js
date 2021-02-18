import React from 'react'
import PropTypes from 'prop-types'
import GifGridItem from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifs(category);

    return (
        <>
            <h3 className='animate__animated animate__fadeIn animate__slower'>{category}</h3>

            { loading &&
                <h3 className='card animate__animated animate__flash'>Loading ...</h3>
            }

            <div className='card-grid'>
                {
                    images.map(img =>
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    )
                }
            </div>
        </>
    )
}

GifGrid.propTypes = {

}

export default GifGrid
