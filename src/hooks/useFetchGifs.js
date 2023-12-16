import { useState, useEffect } from 'react';
import { getGifs } from "../helpers/getGifts";

export const useFetchGifs = ( categoria ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // opcio 2
    const getImatges = async() => {
        const newImatges = await getGifs( categoria );
        setImages( newImatges );
        setIsLoading(false);
    }

    useEffect( () => {
        //opcio 1 més curt
        // getGifs(categoria)
        //   .then( neewImages => setImages(neewImages));

        //opcio 2
        getImatges(); 
    }, [ ]) 


  return {
        images,
        isLoading,
  }
}
