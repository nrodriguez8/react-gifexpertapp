//rafc
import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    //const category = ['Dragon Ball', 'One Punch', 'Samurai X',];
    const [category, setCategory] = useState(['goku']);
        //const handleAdd = () => {
       //setCategory([...category, 'Full Metal ALchemy']);
        // setCategory( cats => [...category, 'Full Metal Alchemy']);
    

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategory={setCategory} />
            <hr/>
            
            <ol>
                {
                    category.map( (category) => (
                        <GifGrid 
                            key={category} 
                            category={category}
                         /> 
                         ))
                }
            </ol>
        </>
    )
}


