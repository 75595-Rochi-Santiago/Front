import { fetchSinToken,fetchConToken } from "../helpers/fetch"
import { types } from '../types/types';
import Swal from 'sweetalert2';

export const startLogin = (mail,password)=>{

       return async(dispatch)=>{

              const resp=await fetchSinToken('auth/login',{mail,password},'POST')
              const body=await resp.json()

              if(body.ok){
                     localStorage.setItem('token',body.token)
                     localStorage.setItem('token-init-date', new Date().getTime())

                     dispatch(login({
                            uid:body.user.uid,
                            name:body.user.name
                     }))
              }else{
                     Swal.fire('Error', body.msg,'error')
              }
       }
}

export const startChecking = () => {
    return async(dispatch) => {

        const resp = await fetchConToken( 'auth/renew' );
        const body = await resp.json();
        console.log(body)

        if( body.ok ) {
            localStorage.setItem('token', body.token );
            localStorage.setItem('token-init-date', new Date().getTime() );

            dispatch( login({
                uid:body.uid,
                name:body.name
            }) )
        } else {
            dispatch( checkingFinish() );
        }
    }
}

const checkingFinish = () => ({ type: types.authCheckingFinish });



const login=(user)=>({
       type:types.authLogin,
       payload:user
})

export const startLogout=()=>{
       return (dispatch)=>{
              localStorage.clear()
              dispatch(logout())
       }
}

const logout=()=>({
       type:types.authLogout,
})