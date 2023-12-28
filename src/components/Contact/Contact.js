import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { TextField,Button,makeStyles } from '@material-ui/core';
import 'animate.css';
import { useSpring,animated } from "react-spring";
import Navbar from "../Navbar/Navbar";

const useStyles = makeStyles((theme)=>({
  form:{ margin:theme.spacing(2),display:'flex',flexDirection:'column',alignItems:'center' },
  inputField:{ margin:theme.spacing(1),width:'80vw' },
  submitButton:{ margin:theme.spacing(2),width:'80vw',padding:'1.2em' },
}));
const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email format').required('Required'),
  message: Yup.string().required('Required')
});

const Contact=()=>{
  const classes = useStyles();
  const fadeIn = useSpring({ from:{opacity:0},opacity:1,config:{duration:1000} });
  const formik = useFormik({
    initialValues:{ name:'',email:'',message:'', },
    validationSchema: validationSchema,
    onSubmit:(values)=>{  console.log(values);  }
  });
  return(
    <div className="contact-us-container">
      <Navbar />
      <animated.form className={`${classes.form} animate_animated animate_fadeIn`} style={fadeIn} onSubmit={formik.handleSubmit}>
        <TextField className={classes.inputField} label="Your Name" name="name" value={formik.values.name} onChange={formik.handleChange} 
                   error={formik.touched.name && Boolean(formik.errors.name)}  helperText={formik.touched.name}
        />
        <TextField className={classes.inputField} label="Your Email" name="email" type="email" value={formik.values.email} onChange={formik.handleChange}
                   error={formik.touched.email && Boolean(formik.errors.email)}  helperText={formik.touched.email && formik.errors.email}                         
        />
        <TextField className={classes.inputField} label="Your Message" name="message" multiline rows={4} value={formik.values.message} 
                   onChange={formik.handleChange} error={formik.touched.message && Boolean(formik.errors.message)} 
                   helperText={formik.touched.message && formik.errors.message}
        />
        <Button className={classes.submitButton} type="submit" color="primary" variant="contained">
          Submit
        </Button>
      </animated.form>
    </div>
  );
};

export default Contact;