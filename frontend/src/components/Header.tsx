import React from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import Typography from "@mui/icons-material/Menu";
import Image from "./Image";

import logo from "../assets/images/logo_star.svg";
import santa from "../assets/images/santa_happy.svg";

type Props = {
  showSanta: () => void;
};

const Header: React.FC<Props> = ({ showSanta }) => {
  const navigate = useNavigate();

  const navigateBack = (): void => {
    navigate("/");
  };

  const handleSantaToggle = (): void => {
    showSanta();
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Image
          src={logo}
          alt="BBC Sleighrid logo"
          className="logo"
          onClick={navigateBack}
        />
        <Typography component="h6">Hello</Typography>
        <Image
          src={santa}
          alt="santa chatbot image"
          className="chat-bot"
          onClick={handleSantaToggle}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
