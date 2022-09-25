import { Container, Grid, List } from "@mui/material";
import { useState } from "react";
import "./App.css";
import Contact from "./components/Contact";
import ContactForm from "./components/ContactForm";
import Header from "./components/Header";

// Uncomment untuk memuat daftar kontak
import contactsJSON from "./data/contacts.json";
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  const [contacts, setContacts] = useState(contactsJSON);

  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm
  const onSubmitNewContactHandler = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  return (
    <div className="App">
      <Header />
      <Container sx={{ mt: 8 }}>
        <Grid container spacing={12}>
          <Grid item xs={12} md={5}>
            <ContactForm onSubmitNewContact={onSubmitNewContactHandler} />
          </Grid>
          <Grid item xs={12} md={7}>
            <List sx={{ backgroundColor: "#b9f6ca", borderRadius: "4px" }}>
              {contacts.map((contact, index) => {
                return <Contact key={index} data={contact} />;
              })}
            </List>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default App;
