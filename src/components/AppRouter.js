import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Home from './Home';
import Menu from './Menu';
import Navbar from './Navbar';
import Traduction from './Traduction';
import Beaute from './Beaute';
import Templates from './Templates';
import Photographe from './Photographe';
import Parfum from './Parfum';
import Cosmetique from './Cosmetique';
import Cooking from './Cooking';
import Gallery from './Gallery';
import Food from './Food';
import Pets from './Pets';
import Ecology from './Ecology';
import Coffee from './Coffee';
import Book from './Book';
import Standing from './Standing';
import Honey from './Honey';
import PortfolioOne from './PortfolioOne';
import PortfolioTwo from './PortfolioTwo';
import PortfolioThree from './PortfolioThree';
import Projets from './Projets';
import Visigo from './Visigo';
import Spp from './Spp';

class AppRouter extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/Menu" component={Menu} />
                <Route exact path="/Navbar" component={Navbar} />
                <Route exact path="/Traduction" component={Traduction} />
                <Route exact path="/Beaute" component={Beaute} />
                <Route exact path="/Templates" component={Templates} />
                <Route exact path="/Photographe" component={Photographe} />
                <Route exact path="/Parfum" component={Parfum} />
                <Route exact path="/Cosmetique" component={Cosmetique} />
                <Route exact path="/Cooking" component={Cooking} />
                <Route exact path="/Gallery" component={Gallery} />
                <Route exact path="/Food" component={Food} />
                <Route exact path="/Pets" component={Pets} />
                <Route exact path="/Ecology" component={Ecology} />
                <Route exact path="/Coffee" component={Coffee} />
                <Route exact path="/Book" component={Book} />
                <Route exact path="/Standing" component={Standing} />
                <Route exact path="/Honey" component={Honey} />
                <Route exact path="/PortfolioOne" component={PortfolioOne} />
                <Route exact path="/PortfolioTwo" component={PortfolioTwo} />
                <Route exact path="/PortfolioThree" component={PortfolioThree} />
                <Route exact path="/Projets" component={Projets} />
                <Route exact path="/Visigo" component={Visigo} />
                <Route exact path="/Spp" component={Spp} />
            </Switch>
        )
    }

}

export default AppRouter