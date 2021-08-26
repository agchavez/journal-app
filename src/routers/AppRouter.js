import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import { JournalScreen } from '../journal/JournalScreen';
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route  path="/auth" component = {AuthRouter}> 
                    </Route>
                    <Route exact path="/"  component = {JournalScreen}>
                    </Route>
                </Switch>

            </Router>
            
        </div>
    )
}
