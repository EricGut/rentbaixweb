import React from 'react'
import { ButtonWrapper, Form, FormInputText, FormInputTextArea, FormInputWarpper, FormSubmit, InputLabel, MailMainMessage } from './FormComponent.styled'
// import emailjs from 'emailjs-com'

const FormComponent = () => {
    // const [name, setName] = React.useState()
    // const [email, setEmail] = React.useState()
    // const [message, setMessage] = React.useState()
    // const [loading, setLoading] = React.useState(false)
    // const [mailMessage, setMailMessage] = React.useState()

    // let templateParams = {
    //     name: name,
    //     email: email,
    //     message: message,
    // }

    // function sendEmail(e) {
    //     setLoading(true)
    //     e.preventDefault();
    //     emailjs.send('service_onmyups', 'template_t53kwrl', templateParams, 'user_q0Pt8LJnItV3x0fbBg3BJ')
    //         .then((result) => {
    //             setMailMessage('Mensaje enviado correctamente')
    //             setLoading(false)
    //             console.log(result.text);
    //         }, (error) => {
    //             setMailMessage('No se ha podido enviar el mensaje')
    //             setLoading(false)
    //             console.log(error.text);
    //         });
    //     e.target.reset();
    // }

    return (
        <Form>
            <FormInputWarpper>
                <InputLabel htmlFor='name'>Nombre</InputLabel>
                <FormInputText type="text" name='name' required placeholder="NOMBRE" />
            </FormInputWarpper>
            <FormInputWarpper>
                <InputLabel htmlFor='email'>Correo</InputLabel>
                <FormInputText type="email" name='email' placeholder="CORREO" required />
            </FormInputWarpper>
            <FormInputWarpper>
                <InputLabel htmlFor='phone'>Teléfono</InputLabel>
                <FormInputText type="phone" name='phone' placeholder="TELÉFONO" required />
            </FormInputWarpper>
            <FormInputWarpper>
                <InputLabel htmlFor='message' >Escribe Tu mensaje</InputLabel>
                <FormInputTextArea name='message' placeholder="MENSAJE..." required ></FormInputTextArea>
            </FormInputWarpper>
            <ButtonWrapper>
                <FormSubmit type="submit">Enviar mesnaje</FormSubmit>
                <MailMainMessage></MailMainMessage>
            </ButtonWrapper>
        </Form>
    )
}

export default FormComponent