import React from 'react';
import emailjs from 'emailjs-com';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from "@mui/material/Button";



export default function ContactForm() {

    const handleSubmit = (e) => {
        e.preventDefault();

        const from_name = e.target.from_name.value;
        const from_email = e.target.from_email.value;
        const message = e.target.message.value;
        let templateParams = { from_name, from_email, message };
        console.log(templateParams);

        emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, templateParams, process.env.REACT_APP_PUBLIC_KEY)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            }, (err) => {
                console.log('FAILED...', err);
            });
            e.target.reset();
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
            <OutlinedInput required name="from_name" type="name" placeholder="Name" />
            <OutlinedInput required name="from_email" type="email" placeholder="Email" />
            <OutlinedInput required name="message" type="text" placeholder="Message" />
            <Button type="submit" sx={{ backgroundColor: "green" }}>Submit</Button>
        </Box>
    );
}