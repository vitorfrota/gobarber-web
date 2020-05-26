import styled from 'styled-components';
import { shade } from 'polished';

import signUpBackgroundImg from '../../assets/sign-up-background.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch; /* estica o height */
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  place-content: center;

  width: 100%;
  max-width: 700px;

  form{
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1{
      margin-bottom: 24px;
    }


    a{
      color: #f4edf8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: linear 150ms all 0s;

      &:hover{
        color: ${shade(0.2, '#f4edf8')};
      }
    }
  }

  > a {
      color: #f4edf8;
      display: flex;
      align-items: center;
      margin-top: 24px;
      text-decoration: none;
      transition: linear 150ms all 0s;

      &:hover{
        color: ${shade(0.2, '#f4edf8')};
      }

      svg{
        margin-right: 16px;
      }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signUpBackgroundImg}) no-repeat center;
  background-size: cover;
`;
