

const fetchSinToken=(endpoint, data, method='GET')=>{
       //const baseUrl=process.env.API_URL
       const baseUrl='http://localhost:8080/api'
       console.log(baseUrl)
       console.log(`${baseUrl}/${endpoint}`)
       const url=`${baseUrl}/${endpoint}`;

       if(method==='GET'){
              return fetch(url)
       }else{
              return fetch(url,{
                     method,
                     headers:{
                            'Content-type':'application/json'
                     },
                     body:JSON.stringify(data)
              });
       }
}



export{
       fetchSinToken
}