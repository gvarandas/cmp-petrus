const acompanhamentos = {
  1: {
    pacienteId: 4,
    inicioPreNatal: '02/03/2017',
    dum: '02/03/2017',
    dpp: '07/12/2017',
    status: 'finalizado',
    parto: {
      maternidade: 'Maternidade Brasília',
      data: '08/12/2017',
      tipo: 'normal',
    },
    bebe: {
      sexo: 'F',
      nome: 'Elisa',
    },
    pagamento: {
      tipo: 'transferencia',
      valor: 10000.34,
      isParcelado: false,
      isQuitado: false,
      parcelas: [],
    },
    atendimentos: [],
  },
  2: {
    pacienteId: 4,
    inicioPreNatal: '02/03/2017',
    dum: '02/03/2017',
    dpp: '07/12/2017',
    status: 'pagamento',
    parto: {
      maternidade: 'Maternidade Brasília',
      data: '08/12/2017',
      tipo: 'normal',
    },
    bebe: {
      sexo: 'M',
      nome: 'Matheus',
    },
    pagamento: {
      tipo: 'transferencia',
      valor: 10000.00,
      isParcelado: false,
      isQuitado: false,
      parcelas: [],
    },
    atendimentos: [],
  },
  3: {
    pacienteId: 6,
    inicioPreNatal: '02/03/2017',
    dum: '02/03/2016',
    dpp: '07/12/2016',
    status: 'pagamento',
    parto: {
      maternidade: 'Maternidade Brasília',
      data: '08/12/2016',
      tipo: 'cesariana',
    },
    bebe: {
      sexo: 'F',
      nome: 'Maria Clara',
    },
    pagamento: {
      tipo: 'cheque',
      valor: 10000.00,
      isParcelado: true,
      isQuitado: true,
      parcelas: [
        { valor: 2000.00, isPago: true },
        { valor: 2000.00, isPago: true },
        { valor: 2000.00, isPago: true },
        { valor: 2000.00, isPago: true },
        { valor: 2000.00, isPago: true },
      ],
    },
    atendimentos: [],
  },
  4: {
    pacienteId: 6,
    inicioPreNatal: '02/03/2017',
    dum: '02/03/2017',
    dpp: '07/12/2017',
    status: 'acompanhamento',
    parto: null,
    bebe: null,
    pagamento: null,
    atendimentos: [],
  },
  5: {
    pacienteId: 2,
    inicioPreNatal: '02/03/2017',
    dum: '02/03/2017',
    dpp: '07/12/2017',
    status: 'finalizado',
    parto: {
      maternidade: 'Hospital Santa Luzia',
      data: '08/12/2017',
      tipo: 'normal',
    },
    bebe: {
      sexo: 'M',
      nome: 'Thiago',
    },
    pagamento: {
      tipo: 'cheque',
      valor: 12000.00,
      isParcelado: true,
      isQuitado: true,
      parcelas: [
        { valor: 4000.00, isPago: true },
        { valor: 4000.00, isPago: false },
        { valor: 4000.00, isPago: false },
      ],
    },
    atendimentos: [],
  },
};

export default acompanhamentos;
