import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Nav from './Nav';

const Header = () => {
  return (
    <MainHeader>
        <NavLink to="/">
            <img src="./images/logo.png" alt="logo"/>
        </NavLink>
        <Nav />
    </MainHeader>
  )
}

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 8rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  img{
    width:20rem;
    height:5rem;
  }
  .logo {
    height: 1rem;
  }
`;

export default Header