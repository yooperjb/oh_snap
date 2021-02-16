import React from 'react';
import PhotoList from '../PhotoList';
import { capitalizeFirstLetter } from '../../utils/helpers';


const Gallery = ({ currentCategory }) => {
    // destructure from currentCategory
    const {name, description} = currentCategory;
    
    return (
        <section>
            <h1 data-testid="h1tag">{capitalizeFirstLetter(name)}</h1>
            <p>{description}</p>
            
           {/* <PhotoList /> */}
           <PhotoList category={currentCategory.name} />
            
        </section>
    );
}

export default Gallery;