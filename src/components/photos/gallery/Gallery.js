import React from 'react';
import PropTypes from 'prop-types'

export const Gallery=({data})=>{
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
                     {
                            data.page.map(e=>{
                                   return    (                  
                                          <div class="item">
                                                 <img src={e.url}/>
                                          </div>)
                            })
                     }
                  </div>
              </body>
              </html>
              </div>
                     )

}

Gallery.propTypes = {
    data: PropTypes.object
}