/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReduxPromise from 'redux-promise';

import reducers from './reducers';

// Routes
import Home from './pages/home';
import Agenda from './pages/agenda';
import Pacientes from './pages/pacientes';
import DetalhePaciente from './pages/detalhe-paciente';
import DetalheAcompanhamento from './pages/detalhe-acompanhamento';

// Data
import acompanhamentos from './data/acompanhamentos';
import agendamentos from './data/agendamentos';
import atendimentos from './data/atendimentos';
import pacientes from './data/pacientes';

// Components
import NavBar from './components/navbar';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

const initialState = {
  acompanhamentos,
  agendamentos,
  atendimentos,
  pacientes,
};

const store = createStoreWithMiddleware(reducers, initialState);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <NavBar />
        <Switch>
          <Route path="/paciente/:id" component={DetalhePaciente} />
          <Route path="/pacientes" component={Pacientes} />
          <Route path="/acompanhamento/:id" component={DetalheAcompanhamento} />
          <Route path="/agenda" component={Agenda} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('#root'),
);
