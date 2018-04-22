import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import AcompanhamentosReducer from './acompanhamentos_reducer';
import AtendimentosReducer from './atendimentos_reducer';
import AgendamentosReducer from './agendamentos_reducer';
import PacientesReducer from './pacientes_reducer';

const rootReducer = combineReducers({
  agendamentos: AgendamentosReducer,
  atendimentos: AtendimentosReducer,
  acompanhamentos: AcompanhamentosReducer,
  pacientes: PacientesReducer,
  form,
});

export default rootReducer;
