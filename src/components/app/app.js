import React from 'react';
import {MainPage,OurCoffe,ForYourPleasure} from '../pages';
// import AppHeader from '../app-header/app-header';
import { Route,Switch} from "react-router-dom";
import OurCoffeOne from "../pages/our-coffe-one";


class App extends React.Component  {

    render() {
        return (
            <div  className="app">
                {/* <AppHeader /> */}
               
                <Switch>
                    <Route path="/" exact component={MainPage} />
                    <Route path="/our_coffe" exact component={OurCoffe} />
                    <Route path="/for_your_pleasure" exact component={ForYourPleasure} />
                    {/* <Route path="/coffee"  component={OurCoffeOne} /> */}
                    <Route path='/coffee/:id' exact render = {
                        ({match}) => {
                            return (
                                <OurCoffeOne id = {match.params.id}  />
                            );}
                    }/>
                </Switch>
            </div>
        )};

}

export default App;
