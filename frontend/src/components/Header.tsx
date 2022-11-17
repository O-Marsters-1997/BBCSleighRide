import React, { useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Image from "./Image";
import { SantaContext } from "../contexts/SantaContext";
import logo from "../assets/images/logo_star.svg";
import santa from "../assets/images/santa_happy.svg";

const StyledToolbar = styled(Toolbar)`
  height: 11vh;
  display: flex;
  background-color: ${({ theme }) => theme.palette.primary.main};
  justify-content: flex-start;
  align-items: center;
  position: relative;

  .chat-bot {
    height: 7vh;
    width: 10vh;
    margin: 0 5% 0 auto;
    cursor: pointer;
  }
`;

const Header: React.FC = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(SantaContext);

  const navigateBack = (): void => {
    navigate("/");
  };

  const handleClick = () => {
    dispatch({ type: "toggle" });
  };

  return (
    <AppBar position="static">
      <StyledToolbar disableGutters>
        <Image
          logo
          src={logo}
          alt="BBC Sleighrid logo"
          className="logo"
          onClick={navigateBack}
        />

        <Image
          src={santa}
          alt="santa chatbot image"
          className="chat-bot"
          onClick={handleClick}
        />
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;
