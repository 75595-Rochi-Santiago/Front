const baseUrl='http://localhost:8080/api'


const fetchSinToken=(endpoint, data, method='GET')=>{
       //const baseUrl=process.env.API_URL
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


const fetchConToken = ( endpoint, data, method = 'GET' ) => {

    const url = `${ baseUrl }/${ endpoint }`;
    const token = localStorage.getItem('token') || '';

    if ( method === 'GET' ) {
        return fetch( url, {
            method,
            headers: {
                'x-token': token
            }
        });
    } else {
        return fetch( url, {
            method,
            headers: {
                'Content-type': 'application/json',
                'x-token': token
            },
            body: JSON.stringify( data )
        });
    }
}


const fetchConTokenSN = ( url, data, method = 'GET' ) => {

    const token = localStorage.getItem('token') || '';

    if ( method === 'GET' ) {
        return fetch( url, {
            method,
            headers: {
                'x-token': token
            }
        });
    } else {
        return fetch( url, {
            method,
            headers: {
                'Content-type': 'application/json',
                'x-token': token
            },
            body: JSON.stringify( data )
        });
    }
}


export{
       fetchSinToken,
       fetchConToken,
       fetchConTokenSN
}