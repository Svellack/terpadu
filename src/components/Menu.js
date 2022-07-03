import React from 'react'
import { Link } from 'react-router-dom'
import CloseIcon from '@material-ui/icons/Close';
import styled from 'styled-components'

const Menu = ({handleNavToggle}) => {
  return (
    <div>
        <StyledMenu>
            <StyledLink to="/">Login</StyledLink>
            <StyledLink to="/dashboard">Dashboard</StyledLink>
            <StyledLink to="/dashAdmin">DashAdmin</StyledLink>
            <CloseToggle onClick={handleNavToggle} />
        </StyledMenu>
    </div>
  )
}

export default Menu

const StyledMenu = styled.div`
    display: flex;
    flex-direction: column;
`;

const StyledLink = styled(Link)`
    color: #222;
    text-direction: none;
    font-size: clamp(3rem, 4vw, 6vw);
    font-family: Impact, Haettenscwheiler, 'Arial Narrow Bold', sans-serif;
    transition: .2s all ease-in-out;

    user-select: none;

    &:hover {
        transition: .2s all ease-in-out;
        color: orangered;
    }
`;

const CloseToggle = styled(CloseIcon)`
    position: fixed;
    bottom: 5%;
    right: 4%;
    background: #222;
    color: #fff;
    padding: .75rem;
    display: flex;
    place-items: center;
    font-size: 2rem;
    cursor: pointer;
`;


