import React, { useEffect, useState } from 'react';
import { Navbar } from '../ui/Navbar';
import { Pagination } from '../ui/Pagination';
import { Gallery } from './gallery/Gallery';
import {fetchConToken} from '../../helpers/fetch'


export const PhotosScreen=()=>{

       const [counter,setCounter]=useState(0);
       const [images, setImages] = useState([])

       console.log('counter->>>>',counter)
       useEffect(()=>{
              getPhotos();

       },[])

       const handleAdd=()=>{
              setCounter(counter+1)
       }
       const handleSubtract = () => setCounter( counter - 1);

       const getPhotos=async()=>{
              const resp = await fetchConToken( `photos?offset=0&limit=10`);
              const body = await resp.json();
              console.log('body pa', body)
              setImages(body)
       }
       console.log('img',images)
       const data={
              counter
       }
       

       return(
              <div>
                     <Navbar/>
                     <button onClick={ handleSubtract }>Previous</button>
                     <button onClick={ handleAdd }>Next</button>
                      <h2> { counter } </h2>
                     <Pagination/>
                     <Gallery data={images.data}/>
                     <Pagination/>
              </div>
       )
}