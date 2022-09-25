// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card

import { useState } from "react";
import { Button, Card, CardContent, TextField } from "@mui/material";

const ContactForm = ({ onSubmitNewContact }) => {
  // Form berisi name, phone, email, dan photo url
  // Buatlah state newContact berupa objek sesuai dengan data yang ada
  const [newContact, setNewContact] = useState({
    name: "",
    phone: "",
    email: "",
    photo: "",
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setNewContact({
      ...newContact,
      [name]: value,
    });
  };

  return (
    <>
      <Card variant="outlined" sx={{ backgroundColor: "#f5f5f5" }}>
        <CardContent>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
            onSubmit={(event) => {
              event.preventDefault();
              onSubmitNewContact(newContact);
              setNewContact({
                name: "",
                phone: "",
                email: "",
                photo: "",
              });
            }}
          >
            <TextField
              fullWidth
              required
              id="name"
              name="name"
              label="Name"
              type="text"
              variant="filled"
              value={newContact.name}
              onChange={onChangeHandler}
            />
            <TextField
              fullWidth
              required
              id="phone"
              name="phone"
              label="Phone"
              type="tel"
              variant="filled"
              value={newContact.phone}
              onChange={onChangeHandler}
            />
            <TextField
              fullWidth
              required
              id="email"
              name="email"
              label="Email"
              type="email"
              variant="filled"
              value={newContact.email}
              onChange={onChangeHandler}
            />
            <TextField
              fullWidth
              required
              id="photo"
              name="photo"
              label="Photo URL"
              type="text"
              variant="filled"
              value={newContact.photo}
              onChange={onChangeHandler}
            />
            <Button
              type="submit"
              color="success"
              sx={{ marginLeft: 0, marginRight: "auto" }}
            >
              ADD NEW
            </Button>
          </form>
        </CardContent>
      </Card>
    </>
  );
};

export default ContactForm;
