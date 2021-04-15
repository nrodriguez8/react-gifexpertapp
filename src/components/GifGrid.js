import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
//import { getGifs } from '../helpers/getGif';
import { GifGridItem  } from './GifGridItem';

export const GifGrid = ({category}) => {

    // const [images, setImages] = useState([]);
    const {data:images, loading} = useFetchGifs();

    

    return (
        <>
            <h3>{category} </h3>
            {loading && <p>Loading</p>}
            
            <div className="card-grid">
                            
                {images.map( img => (
                    <GifGridItem  
                        key={img.id}
                        {...img}
                    />
                ))
                }
            
        
            </div>
        </>
    )
}
