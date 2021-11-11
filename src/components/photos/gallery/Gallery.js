import React from 'react';
import PropTypes from 'prop-types'

export const Gallery=({data})=>{
       console.log('a',isObjEmpty(data))
       console.log(data)
       if(!isObjEmpty(data)){       
                     return(
                            <div>
                                   <html lang="en">
                     
              <head>
                  <meta charset="utf-8"/>
                  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                  <title>Arcade</title>
                  <link href="https://fonts.googleapis.com/css?family=Roboto&amp;subset=latin-ext" rel="stylesheet"/>
                  <link rel="shortcut icon" href="favicon.ico" type="image/x-icon"/>
                  <link rel="stylesheet" href="reset.css"/>
                  <link rel="stylesheet" href="styles.css"/>
              </head>
                     
              <body>
                     
                  <div class="container">
                     
                     
                     <div class="item">
                          <img src={data.page[0].url}/>
                     </div>

                     <div class="item">
                          <img src={data.page[1].url}/>
                     </div>

                     <div class="item">
                          <img src={data.page[2].url}/>
                     </div>

                     <div class="item">
                          <img src={data.page[3].url}/>
                     </div>

                     <div class="item">
                          <img src={data.page[4].url}/>
                     </div>

                     <div class="item">
                          <img src={data.page[5].url}/>
                     </div>

                     <div class="item">
                          <img src={data.page[6].url}/>
                     </div>

                     <div class="item">
                          <img src={data.page[7].url}/>
                     </div>

                     <div class="item">
                          <img src={data.page[8].url}/>
                     </div>

                     <div class="item">
                          <img src={data.page[9].url}/>
                     </div>
                      

                  </div>
              </body>
              </html>
              </div>
                     )
       }else{
              return(
                     <div class="loader">
                       <div class="inner one"></div>
                       <div class="inner two"></div>
                       <div class="inner three"></div>
                     </div>              
              )
       }
}

function isObjEmpty(obj) {
  return Object.keys(obj).length === 0;
}


Gallery.propTypes = {
    data: PropTypes.object
}