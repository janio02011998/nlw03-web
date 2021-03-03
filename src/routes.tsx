import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Orphanage from './pages/Orphanage';
import OrphanagesMap from './pages/OrphanagesMap';
import CreateOrphanage from './pages/CreateOrphanage';


function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/orphanages/:id" component={Orphanage} />
                <Route path="/app" component={OrphanagesMap} />
                <Route path="/orphanage/create" component={CreateOrphanage} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;