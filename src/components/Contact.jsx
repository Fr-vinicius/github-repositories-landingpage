import React from "react";
import { Box, Container, Typography, useTheme, Button } from "@mui/material";
import { motion } from "framer-motion";
import { LinkedIn, GitHub, Email, WhatsApp } from "@mui/icons-material";

const About = () => {
  const theme = useTheme();

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false }}

    >
      <Box sx={{
        py: 6,
        px: 3,
        backgroundColor: theme.palette.mode === "dark" ? theme.palette.grey[900] : theme.palette.background.default,
        color: theme.palette.text.primary,
        textAlign: "center",
      }}>
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 4, delay: 2 }}
          >
            <Typography variant="h4" gutterBottom>
              Contato
            </Typography>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 4, delay: 2 }}
          >
            <Typography variant="body1" sx={{ whiteSpace: "pre-line", wordWrap: "break-word" }}>
              
              Caso tenha interesse em conhecer mais, baixe meu currículo ou entre em contato pelos canais disponibilizados =)
            </Typography>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 4, delay: 2 }}
          >
            <Box sx={{ mt: 4, display: "flex", justifyContent: "center", gap: 2 }}>
              <Button variant="contained" color="primary" startIcon={<LinkedIn />} href="https://www.linkedin.com/in/ederson-vinicius-ferreira-rosa-b97550239/" target="_blank">
                LinkedIn
              </Button>
              <Button variant="contained" color="secondary" startIcon={<GitHub />} href="https://github.com/Fr-vinicius?tab=repositories" target="_blank">
                GitHub
              </Button>
              <Button variant="contained" color="success" startIcon={<Email />} href="mailto:evfr.trabalho@gmail.com">
                Email
              </Button>
              <Button variant="contained" sx={{ backgroundColor: "#25D366", color: "white" }} startIcon={<WhatsApp />} href="https://wa.me/12991725478">
                WhatsApp
              </Button>
            </Box>
          </motion.div>
        </Container>
      </Box>
    </motion.section>
  );
};

export default About;
