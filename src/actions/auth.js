import { fetchSinToken } from "../helpers/fetch"
import { types } from '../types/types';
import Swal from 'sweetalert2';

export const startLogin = (mail,password)=>{
       return async(dispatch)=>{

              const resp=await fetchSinToken('auth/login',{mail,password},'POST')
              const body=await resp.json()

              if(body.ok){
                     console.log('aaaa')
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

const login=(user)=>({
       type:types.authLogin,
       payload:user
})