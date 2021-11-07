import React from 'react';
import './login.css';
import { useForm } from '../../hooks/useForm';

export const LoginScreen = () => {

       const [ formLoginValues, handleLoginInputChange ] = useForm({
               lEmail: 'fernando@gmail.com',
               lPassword: '123456'
       });       
       const { lEmail, lPassword } = formLoginValues;

       const handleLogin = ( e ) => {
              e.preventDefault();
              console.log(formLoginValues)
              //dispatch( startLogin( lEmail, lPassword ) );
    }

    return (       
        <div className="container login-container">
            <div className="row">
                <div className="col-md-6 login-form-1">
                    <h3>Ingreso</h3>
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="Correo"
                                name="lEmail"
                                value={lEmail}
                                onChange={handleLoginInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name="lPassword"
                                value={lPassword}
                                onChange={handleLoginInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="submit"
                                className="btnSubmit"
                                value="Login" 
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}