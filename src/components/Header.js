// Kalian bisa menambahkan CSS di src/components/Header.css
// atau langsung tambahkan dengan sx={{}}
import { Box, Divider, Typography } from "@mui/material";
import React from "react";

// Header berisi judul dan subtitle
// Judul: Call a Friend
// Subtitle: Your friendly contact app
const Header = () => {
  return (
    <>
      <Typography variant="h3" sx={{ m: 1 }}>
        Call a Friend
      </Typography>
      <Box
        fullwidth="true"
        sx={{ display: "flex", alignItems: "center", gap: 2 }}
      >
        <Divider sx={{ flexGrow: 1 }} />
        <Typography variant="subtitle1">Your friendly contact app</Typography>
        <Divider sx={{ flexGrow: 1 }} />
      </Box>
    </>
  );
};

export default Header;
