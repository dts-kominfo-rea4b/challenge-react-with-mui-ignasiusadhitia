// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import {
  Avatar,
  Card,
  CardContent,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
  // Contact berisi foto, nama, telepon, dan email
  const { name, phone, email, photo } = data;
  return (
    <>
      <ListItem sx={{ display: "flex", gap: 4 }}>
        <ListItemAvatar>
          <Avatar alt={name} src={photo} sx={{ width: 56, height: 56 }} />
        </ListItemAvatar>
        <ListItemText
          primary={name}
          secondary={
            <>
              <Typography
                component="span"
                variant="body2"
                sx={{ display: "block" }}
              >
                {phone}
              </Typography>
              <Typography
                component="span"
                variant="body2"
                sx={{ display: "block" }}
              >
                {email}
              </Typography>
            </>
          }
        />
      </ListItem>
      <Divider />
    </>
  );
};

export default Contact;
