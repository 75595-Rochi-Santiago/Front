import React, { useEffect, useState } from 'react';
import { Navbar } from '../ui/Navbar';
import { Gallery } from './gallery/Gallery';
import {fetchConTokenSN} from '../../helpers/fetch'


export const PhotosScreen=()=>{

       useEffect(()=>{
              getPhotos();

       },[])

       const [counter,setCounter]=useState(0);
       const [images, setImages] = useState({})

       const handleAdd=()=>{
              console.log('images.next',images.next)
              getPhotos(images.next)
              if(counter>=0){
                     setCounter(counter+10)
              }
       }
       const handleSubtract = () =>{
              console.log('images.previous',images.previous)
              getPhotos(images.previous)
              if(counter>=10){
                     setCounter( counter - 10)
              }
       }

       const getPhotos=async(url='http://localhost:8080/api/photos?offset=0&limit=10')=>{
              const resp = await fetchConTokenSN(url);
              const {data} = await resp.json();
              setImages(data)
       }

       console.log('aaaa',images)
       console.log(isObjEmpty({images}))
       if(!isObjEmpty({images})){

       
       return(
              <div>
                     <Navbar/>
                     <button onClick={ handleSubtract }>Previous</button>
                     <button onClick={ handleAdd }>Next</button>
                     <Gallery data={images}/>
              </div>
       )
       }else{
                     <div>
                            <Navbar/>
                     <div class="loader">
                       <div class="inner one"></div>
                       <div class="inner two"></div>
                       <div class="inner three"></div>
                     </div>
                     </div>
       }
}


function isObjEmpty(obj) {
  return Object.keys(obj).length === 0;
}
