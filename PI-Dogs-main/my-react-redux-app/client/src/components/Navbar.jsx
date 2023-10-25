import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './Navigation'; // Asegúrate de que la ruta al componente sea correcta

const App = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/razas">
          {/* Página de Razas de Perro */}
        </Route>
        <Route path="/">
          {/* Página de Inicio */}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
