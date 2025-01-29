import React from "react";
import { makeStyles } from "@mui/styles";
import ThemeToggle from "./ThemeToggle.jsx";
import DownloadIcon from "@mui/icons-material/Download";

const useStyles = makeStyles((theme) => ({
  "@global": {
    "*": {
      boxSizing: "border-box",
      margin: 0,
      padding: 0,
    },
    html: {
      width: "100%",
      overflowX: "hidden",
    },
    body: {
      width: "100%",
      overflowX: "hidden",
      fontFamily: "Arial, sans-serif",
    },
  },
  header: {
    background: "#333",
    color: "#fff",
    padding: "10px 20px",
    height: "10vh",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  button: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    backgroundColor: "#555",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    textDecoration: "none",
    fontSize: "1rem",
    transition: "background 0.3s ease",
    "&:hover": {
      backgroundColor: "#777",
    },
  },
}));

const Download = () => {
  const classes = useStyles();

  return (
    <a
      href="/Currículo Ederson Vinicius.pdf"
      download="Currículo Ederson Vinicius.pdf"
      className={classes.button}
    >
      <DownloadIcon /> Baixar currículo
    </a>
  );
};

const Header = () => {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <h1>Projetos</h1>
      <ThemeToggle />
      <Download />
    </header>
  );
};

export default Header;
