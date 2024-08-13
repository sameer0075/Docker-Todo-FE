import * as Yup from "yup";

const authSchema = Yup.object({
    email: Yup.string().required('Email is required'),
    password: Yup.string().required('Password is required'),
});

const registerSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    password: Yup.string().required('Password is required'),
    email: Yup.string().required('Email is required'),
    phone: Yup.string().required('Phone is required'),
});

export { authSchema, registerSchema }