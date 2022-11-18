import React, { useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Image from "./Image";
import { useViewport } from "../hooks/useViewport";
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
`;

const Header: React.FC = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(SantaContext);
  const viewport = useViewport();

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
          alt="BBC Sleighride logo"
          className="logo"
          width={viewport("medium") ? "300px" : "150px"}
          onClick={navigateBack}
        />

        <Image
          src={santa}
          alt="santa chatbot image"
          height={viewport("medium") ? "7vh" : "50px"}
          width={viewport("medium") ? "10vh" : "60px"}
          margin=" 0 5% 0 auto"
          pointer
          onClick={handleClick}
        />
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;
