export const ADD_AGENDAMENTO = 'ADD_AGENDAMENTO';

export function addAgendamento(agendamento) {
  return {
    type: ADD_AGENDAMENTO,
    payload: {
      agendamento,
    },
  };
}
