import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { startChecking } from '../actions/auth';
import { LoginScreen } from '../components/auth/LoginScreen';
import { PhotosScreen } from '../components/photos/PhotosScreen';
import { PhrasesScreen } from '../components/phrases/PhrasesScreen';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter = () => {

       const dispatch = useDispatch();
       const { checking, uid } = useSelector( state => state.auth);
       useEffect(() => {

           dispatch( startChecking() );

       }, [dispatch])

       if ( checking ) {
           return (<h5>Wait...</h5>);
       }
       console.log(checking,uid)
       console.log(!!uid)
       const bool=(!!uid)
       console.log(bool)
       

       return (
              <Router>
                     <div>
                   <Switch>

                            <PublicRoute 
                                   exact 
                                   path="/login" 
                                   component={LoginScreen}
                                   isAutenticated={ bool}
                                   />

                            <PrivateRoute 
                                   exact 
                                   path="/phrases" 
                                   component={PhrasesScreen}
                                   isAutenticated={bool}
                                   />

                            <PrivateRoute 
                                   exact 
                                   path="/photos" 
                                   component={PhotosScreen}
                                   isAutenticated={bool}
                            />


                            <Redirect to="/login"/>
                   </Switch>
                 </div>
               </Router>
       )
}
