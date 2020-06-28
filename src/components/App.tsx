import * as React from "react";
import { NavBar } from './NavBar/NavBar';
import { Main } from "./Main/Main";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { About } from "./About/About";

export const App: React.SFC = () => {
    return <React.Fragment>
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/">
                    <Main />
                </Route>
            </Switch>
        </BrowserRouter>
    </React.Fragment>;
}