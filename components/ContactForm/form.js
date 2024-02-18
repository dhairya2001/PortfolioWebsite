import { Button, Card, Input, Text, Textarea, useMediaQuery, useToast } from "@chakra-ui/react";
import { FormControl,FormLabel,FormErrorMessage } from "@chakra-ui/react";
import axios from 'axios';
import { Field, Form, Formik } from 'formik';
import classes from "./form.module.css";
import { mobileView } from "../../constant";
import { useState,useEffect } from "react";
import { useColorModeContext } from "../../utils/colorModeContext";

const ContactForm=()=>{
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [message,setMessage]=useState("");
    const {colorMode,toggleColorMode}=useColorModeContext();

    useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://smtpjs.com/v3/smtp.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

    function validateName(value) {
        let error
        if (!value) {
          error = 'Name is required'
        } 
        return error
      }
    function validateEmail(value){
        let error
        if (!value) {
          error = 'Email is required'
        } else {
            // Regular expression pattern to validate email format
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                error = 'Invalid email address';
            }
        }
        return error
    }
    const toast=useToast();    
    const [isMobile] = useMediaQuery(`(max-width: ${mobileView})`);
    
    return(
        <div id="contact" style={{minHeight:"60vh",width:isMobile?"100%":"400px",backgroundColor:colorMode==='light'?"#7faec5":"#2d3748",borderColor:colorMode==='light'?"black":"azure"}} className={classes.box}>
            
            <Text textAlign="center"  fontSize="20px">GET IN TOUCH</Text>
            <Text textAlign="center" fontWeight="bold" fontSize="40px">CONTACT</Text>
            <Formik
                initialValues={{ name: '',email:'',message:'' }}
                onSubmit={(values,actions) => {
                    axios.post('https://sheetdb.io/api/v1/vk5t33hw8q8wx',{
                        name:values.name,
                        email:values.email,
                        message:values.message
                    })
                    .then((res)=>{
                        if(res.status==201){
                            actions.setSubmitting(false)
                            setTimeout(()=>{
                                toast({
                                    title:"Success",
                                    description: "Your message is sent",
                                    status: 'success',
                                    duration: 1000,
                                    isClosable: true,
                                })
                        },1000)
                        }
                    })
                    
                    setName('');
                    setEmail('');
                    setMessage('');
                }}
            >
        {(props) => (
            <Form>
            <Field name='name' validate={validateName}>
                {({ field, form }) => (
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                    <FormLabel fontWeight="bold">Name</FormLabel>
                    <Input {...field} placeholder='name' value={name} onChange={(e)=>{form.handleChange(e);setName(e.target.value)}}/>
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
                )}
            </Field>
            <Field name='email' validate={validateEmail}>
                {({ field, form }) => (
                <FormControl isInvalid={form.errors.email && form.touched.email}>
                    <FormLabel>Email</FormLabel>
                    <Input {...field} placeholder='xyz@gmail.com' value={email} onChange={(e)=>{form.handleChange(e);setEmail(e.target.value)}}/>
                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                </FormControl>
                )}
            </Field>
            <Field name='message' >
                {({ field, form }) => (
                <FormControl isInvalid={form.errors.message && form.touched.message}>
                    <FormLabel>Message</FormLabel>
                    <Textarea {...field} placeholder='' value={message} onChange={(e)=>{form.handleChange(e);setMessage(e.target.value)}}/>
                    <FormErrorMessage>{form.errors.message}</FormErrorMessage>
                </FormControl>
                )}
            </Field>
            <Button
                mt={4}
                colorScheme='teal'
                isLoading={props.isSubmitting}
                type='submit'
                isDisabled={name=='' || email==''}
            >
                Submit
            </Button>
            
            </Form>
        )}
        </Formik>
    </div>
    )
}
export default ContactForm;