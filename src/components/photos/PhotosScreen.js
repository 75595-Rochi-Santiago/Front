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
              getPhotos(images.next)
              if(counter>=0){
                     setCounter(counter+10)
              }
       }
       const handleSubtract = () =>{
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

       if(!isObjEmpty(images)){

       
       return(
              <div>
                     <Navbar/>
                     <div className="prevnext">
                     <button className="btnSlidePage" onClick={ handleSubtract }>Previous</button>
                     <button className="btnSlidePage" onClick={ handleAdd }>Next</button>
                     </div>
                     <Gallery data={images}/>
                     <div className="prevnext">
                     <button className="btnSlidePage" onClick={ handleSubtract }>Previous</button>
                     <button className="btnSlidePage" onClick={ handleAdd }>Next</button>
                     </div>
              </div>
       )
       }else{
              return(
                     <div>
                            <Navbar/>
                     <div class="loader">
                       <div class="inner one"></div>
                       <div class="inner two"></div>
                       <div class="inner three"></div>
                     </div>
                     </div>
              )
       }
}


function isObjEmpty(obj) {
  return Object.keys(obj).length === 0;
}
