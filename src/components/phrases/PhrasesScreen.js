import React, { useEffect, useState } from 'react';
import { Navbar } from '../ui/Navbar';
import {fetchConToken} from '../../helpers/fetch'

export const PhrasesScreen=()=>{

       const [phrases, setPhrases] = useState({})

              useEffect(()=>{
              getPhrases();

       },[])

       const getPhrases=async()=>{
              const resp = await fetchConToken('phrases');
              const data = await resp.json();
              console.log(data.jsonPhrases[0])

              setPhrases(data)
       }
       console.log('phrases',phrases)
       if(!isObjEmpty(phrases)){
       return(
                            
                     <div>
                            <Navbar/>
                            <table>
                       <thead>
                         <tr>
                           <th>UserID</th>
                           <th>Id</th>
                           <th>Title</th>
                           <th>Body</th>
                         </tr>
                       </thead>
                       <tbody>
                     {
                            phrases.jsonPhrases.map(e=>{
                                   return        <tr>
                              <td data-column="First Name">{e.userId}</td>
                              <td data-column="Last Name">{e.id}</td>
                              <td data-column="Job Title">{e.title}</td>
                              <td data-column="Twitter">{e.body}</td>
                            </tr>
                            })
                     }
                       </tbody>
                     </table>
                     </div>

       )}else{
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