import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { startChecking } from '../actions/auth';
import { LoginScreen } from '../components/auth/LoginScreen';
import { PhotosScreen } from '../components/photos/PhotosScreen';
import { HomeScreen } from '../components/home/Home';
import { PhrasesScreen } from '../components/phrases/PhrasesScreen';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';


export const AppRouter = () => {

       const dispatch = useDispatch();
       const { checking, uid } = useSelector( state => state.auth);
       useEffect(() => {

           dispatch( startChecking() );

       }, [dispatch])

       if ( checking ) {
           return (<h5>Wait...</h5>);
       }
       console.log(!!uid)

       return (
              <Router>
                     <div>
                   <Switch>

                            <PublicRoute
                                exact 
                                path="/login" 
                                component={ LoginScreen }
                                isAuthenticated={ !!uid }
                            />

                            <PrivateRoute 
                                   exact 
                                   path="/phrases" 
                                   component={PhrasesScreen}
                                   isAuthenticated={!!uid}
                                   />

                            <PrivateRoute 
                                   exact 
                                   path="/photos" 
                                   component={PhotosScreen}
                                   isAuthenticated={!!uid}
                            />
       
                            <PrivateRoute 
                                   exact 
                                   path="/home" 
                                   component={HomeScreen}
                                   isAuthenticated={!!uid}
                            />


                            <Redirect to="/home"/>
                   </Switch>
                 </div>
               </Router>
       )
}
