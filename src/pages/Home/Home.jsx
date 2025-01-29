import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import Header from "../../components/Header";
import Contact from "../../components/Contact";
import List from "../../components/RepositoryList";

const theme = createTheme();

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      delay: 100,
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <List />
      <Contact />
    </ThemeProvider>
  );
};

export default App;
