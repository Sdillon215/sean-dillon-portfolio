import React from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2'
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

        emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, templateParams, process.env.REACT_APP_PUBLIC_KEY)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                Swal.fire({
                    icon: 'success',
                    title: 'Your message was sent! Thanks for reaching out!',
                })
            }, (err) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oof...',
                    text: 'Something went wrong! You can also click the email icon above to send me an email!',
                })
                console.log('FAILED...', err);
            });
        e.target.reset();
    }
    return (
        <div className="contact-cont">
            <Box
                className='email-form'
                component="form"
                sx={{
                    '& > :not(style)': { display: 'flex', m: 1, width: '70vw', maxWidth: 900, alignContent: 'center', justifyContent: 'center' },
                }}
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                <OutlinedInput required fullWidth name="from_name" type="name" placeholder="Name" />
                <OutlinedInput required fullWidth name="from_email" type="email" placeholder="Email" />
                <OutlinedInput sx={{height: '15vh'}}required fullWidth name="message" type="text" placeholder="Message" />
                <Button type="submit" size="medium" sx={{ backgroundColor: "green" }}>Submit</Button>
            </Box>
        </div>
    );
}