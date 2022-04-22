import React from 'react';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from "@mui/material/Button";

export default function ContactForm() {

    const handleSubmit = (e) => {
        e.preventDefault();

        let contact_form = [];
        const from_name = e.target.from_name.value;
        const from_email = e.target.from_email.value;
        const message = e.target.message.value;
        contact_form.push({from_name, from_email, message});
        console.log(contact_form);
    }
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
        backgroundColor: "rgba(248, 249, 252, 0.37)",
      }}
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <OutlinedInput required  name="from_name" type="name" placeholder="Name" />
      <OutlinedInput required  name="from_email" type="email" placeholder="Email" />
      <OutlinedInput required   name="message" type="text" placeholder="Message" />
      <Button type="submit" sx={{backgroundColor: "green"}}>Submit</Button>
    </Box>
  );
}