export type TypesInitalProps =
  | 'Nome'
  | 'Email'
  | 'Telefone'
  | 'Mensagem';

const initialValues = {
  Nome: '',
  Email: '',
  Telefone: '',
  Mensagem:
    '.',
  forma_de_contato: 'Email',
};

export default initialValues;
