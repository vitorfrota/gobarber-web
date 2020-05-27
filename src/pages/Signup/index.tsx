import React from 'react';
import { Form } from '@unform/web';
import {
  FiArrowLeft, FiMail, FiLock, FiUser,
} from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => {
  function handleSubmit(data: object): void {
    console.log(data);
  }

  return (
    <Container>
      <Background />
      <Content>
        <img src={logoImg} alt="logo gobarber web" />
        <Form onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>
          <Input
            name="name"
            icon={FiUser}
            placeholder="Nome"
          />
          <Input
            name="email"
            icon={FiMail}
            placeholder="E-mail"
          />
          <Input
            type="password"
            name="password"
            icon={FiLock}
            placeholder="Senha"
          />
          <Button type="submit">Cadastrar</Button>
        </Form>
        <a href="#">
          <FiArrowLeft />
          Voltar para Logon
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
