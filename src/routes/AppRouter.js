import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { LoginScreen } from '../components/auth/LoginScreen';
import { PhotosScreen } from '../components/photos/PhotosScreen';
import { PhrasesScreen } from '../components/phrases/PhrasesScreen';

export const AppRouter = () => {
       return (
              <Router>
                     <div>
                   <Switch>
                            <Route exact path="/login" component={LoginScreen}/>
                            <Route exact path="/phrases" component={PhrasesScreen}/>
                            <Route exact path="/photos" component={PhotosScreen}/>

                            <Redirect to="/login"/>
                   </Switch>
                 </div>
               </Router>
       )
}
