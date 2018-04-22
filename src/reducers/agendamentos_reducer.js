import { ADD_AGENDAMENTO } from '../actions/agendamentos';

// This reducer is responsible for the posts state
export default function (agendamentos = [], action) {
  switch (action.type) {
    case ADD_AGENDAMENTO:
      if (action.payload) {
        const { agendamento: agendamentoPayload } = action.payload;
        const hoje = new Date();
        const novoAgendamento = { ...agendamentoPayload, agendamento: `${hoje.getDay()}-${hoje.getMonth()}-${hoje.getFullYear()}` };
        const novosAgendamentos = [
          ...agendamentos,
          novoAgendamento,
        ];
        return novosAgendamentos;
      }
      return agendamentos;
    default:
      return agendamentos;
  }
}
