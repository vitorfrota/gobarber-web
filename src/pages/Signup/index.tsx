import React from 'react';

import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => (
  <Container>
    <Background />
    <Content>
      <img src={logoImg} alt="logo gobarber web" />
      <form>
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
      </form>
        <a href="#">
          <FiArrowLeft />
          Voltar para Logon</a>
    </Content>
  </Container>
)

export default SignUp;
