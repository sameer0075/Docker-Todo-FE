import { useState } from "react";

import { Container, Grid, Box, FormControlLabel, IconButton, InputAdornment } from "@mui/material";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { Formik } from "formik";
import CustomButton from "../../generic-components/Button";
import CustomText from "../../generic-components/Text";
import CustomTextInput from "../../generic-components/TextInput";
import { GradientCheckbox } from "./styled-components";
import { loginText, inputLabel, inputLabelText, inputBorder } from "./styles";
import { authInitialState, registerInitialState } from "../../../schemas/initialStates";
import { authSchema, registerSchema } from "../../../schemas/schemas";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, register } from "../../../redux/slices/auth-slice";
import { AppDispatch } from "../../../redux/store";
/**
 * AuthLayout component is the main layout for the authentication page.
 * It contains the login form and an image on the right side.
 *
 * @returns {JSX.Element} The AuthLayout component.
 */

interface LayoutInterface {
    type: string
}

const AuthLayout = ({ type }: LayoutInterface) => {
    // State to track whether the password is visible or not
    const [showPassword, setShowPassword] = useState(false);
    const error = useSelector((state: any) => state.auth.error)
    const dispatch = useDispatch<AppDispatch>();

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    const handleSubmitData = (data: any) => {
        if (type === 'login') {
            const { email, password } = data
            dispatch(login({ email, password }))
        } else {
            const { email, password, phone,name } = data
            dispatch(register({ name, phone, email, password }))
        }
    }
    return (
        <Container component="main">
            {/* Grid container for the layout */}
            <Grid container spacing={2} justifyContent="center" sx={{ maxHeight: '100vh', mt: 10 }}>
                {/* Login form */}
                <Grid item xs={12} md={3}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <img src="/images/sunflow.png" alt="Logo" width="214" height="55" />
                        <Box sx={{ marginTop: 8, }}>
                            {/* Title */}
                            <CustomText
                                sx={loginText}
                                content={type === 'login' ? "Log in to your account" : "Register your account"}
                            />
                            {/* Login form */}
                            <Formik
                                initialValues={type === 'login' ? authInitialState : registerInitialState}
                                validationSchema={type === 'login' ? authSchema : registerSchema}
                                onSubmit={(values) => handleSubmitData(values)}
                            >
                                {({ errors, touched, handleChange, handleBlur, handleSubmit, values }: any) => (
                                    <Box component="form" noValidate sx={{ mt: 1, width: '100%' }}>
                                        {/* Name input */}
                                        {type === 'login' ? <Box>
                                            <Box sx={{ mb: 0.1 }}>
                                                <CustomTextInput
                                                    margin="normal"
                                                    fullWidth={true}
                                                    id="email"
                                                    name="email"
                                                    size='medium'
                                                    label={
                                                        <Box sx={inputLabel}>
                                                            <PermIdentityOutlinedIcon />
                                                            <CustomText sx={inputLabelText} content="Email" variant="subtitle1" />
                                                        </Box>
                                                    }
                                                    InputProps={{
                                                        style: inputBorder
                                                    }}
                                                    sx={{ width: '274px' }}
                                                    error={Boolean(touched.email && errors.email)}
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    value={values.email}

                                                />
                                                {errors.email && touched.email && <CustomText sx={{ color: 'red' }} content={errors.email} />}
                                            </Box>

                                            {/* Password input */}
                                            <Box sx={{ mb: 0.1 }}>
                                                <CustomTextInput
                                                    margin="normal"
                                                    fullWidth={true}
                                                    name="password"
                                                    type="password"
                                                    id="password"
                                                    sx={{ width: '274px' }}
                                                    label={
                                                        <Box sx={inputLabel}>
                                                            <LockOutlinedIcon />
                                                            <CustomText sx={inputLabelText} content="Password" variant="subtitle1" />
                                                        </Box>
                                                    }
                                                    InputProps={{
                                                        style: inputBorder,
                                                        endAdornment: (
                                                            <InputAdornment position="end">
                                                                <IconButton onClick={togglePasswordVisibility} edge="end">
                                                                    {showPassword ? <VisibilityOutlinedIcon /> : <VisibilityOffOutlinedIcon />}
                                                                </IconButton>
                                                            </InputAdornment>
                                                        ),
                                                    }}
                                                    extraProps={
                                                        {
                                                            showPassword
                                                        }
                                                    }
                                                    error={Boolean(touched.password && errors.password)}
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    value={values.password}
                                                />
                                                {errors.password && touched.password && <CustomText sx={{ color: 'red' }} content={errors.password} />}
                                            </Box>

                                            {error && <CustomText sx={{color: 'red'}} variant='p' content={typeof error === 'string' ? `!${error}` : `!${error?.message[0]}`} />}
                                        </Box> :
                                            <Box>
                                                <Box sx={{ mb: 0.1 }}>
                                                    <CustomTextInput
                                                        margin="normal"
                                                        fullWidth={true}
                                                        id="name"
                                                        name="name"
                                                        size='medium'
                                                        label={
                                                            <Box sx={inputLabel}>
                                                                <PermIdentityOutlinedIcon />
                                                                <CustomText sx={inputLabelText} content="Name" variant="subtitle1" />
                                                            </Box>
                                                        }
                                                        InputProps={{
                                                            style: inputBorder
                                                        }}
                                                        sx={{ width: '274px' }}
                                                        error={Boolean(touched.name && errors.name)}
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        value={values.name}

                                                    />
                                                    {errors.name && touched.name && <CustomText sx={{ color: 'red' }} content={errors.name} />}
                                                </Box>
                                                {/* Email input */}
                                                <Box sx={{ mb: 0.1 }}>
                                                    <CustomTextInput
                                                        margin="normal"
                                                        fullWidth={true}
                                                        id="email"
                                                        name="email"
                                                        size='medium'
                                                        label={
                                                            <Box sx={inputLabel}>
                                                                <EmailOutlinedIcon />
                                                                <CustomText sx={inputLabelText} content="Email" variant="subtitle1" />
                                                            </Box>
                                                        }
                                                        InputProps={{
                                                            style: inputBorder
                                                        }}
                                                        sx={{ width: '274px' }}
                                                        error={Boolean(touched.email && errors.email)}
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        value={values.email}
                                                    />
                                                    {errors.email && touched.email && <CustomText sx={{ color: 'red' }} content={errors.email} />}
                                                </Box>
                                                {/* Phone input */}
                                                <Box sx={{ mb: 0.1 }}>
                                                    <CustomTextInput
                                                        margin="normal"
                                                        fullWidth={true}
                                                        id="phone"
                                                        name="phone"
                                                        size='medium'
                                                        label={
                                                            <Box sx={inputLabel}>
                                                                <LocalPhoneOutlinedIcon />
                                                                <CustomText sx={inputLabelText} content="Phone" variant="subtitle1" />
                                                            </Box>
                                                        }
                                                        InputProps={{
                                                            style: inputBorder
                                                        }}
                                                        sx={{ width: '274px' }}
                                                        error={Boolean(touched.phone && errors.phone)}
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        value={values.phone}
                                                    />

                                                    {errors.phone && touched.phone && <CustomText sx={{ color: 'red' }} content={errors.phone} />}
                                                </Box>

                                                {/* Password input */}
                                                <Box sx={{ mb: 0.1 }}>
                                                    <CustomTextInput
                                                        margin="normal"
                                                        fullWidth={true}
                                                        name="password"
                                                        type="password"
                                                        id="password"
                                                        sx={{ width: '274px' }}
                                                        label={
                                                            <Box sx={inputLabel}>
                                                                <LockOutlinedIcon />
                                                                <CustomText sx={inputLabelText} content="Password" variant="subtitle1" />
                                                            </Box>
                                                        }
                                                        InputProps={{
                                                            style: inputBorder,
                                                            endAdornment: (
                                                                <InputAdornment position="end">
                                                                    <IconButton onClick={togglePasswordVisibility} edge="end">
                                                                        {showPassword ? <VisibilityOutlinedIcon /> : <VisibilityOffOutlinedIcon />}
                                                                    </IconButton>
                                                                </InputAdornment>
                                                            ),
                                                        }}
                                                        extraProps={
                                                            {
                                                                showPassword
                                                            }
                                                        }
                                                        error={Boolean(touched.password && errors.password)}
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        value={values.password}
                                                    />
                                                    {errors.password && touched.password && <CustomText sx={{ color: 'red' }} content={errors.password} />}
                                                </Box>
                                                {error && <CustomText sx={{color: 'red'}} variant='p' content={typeof error === 'string' ? `!${error}` : `!${error?.message[0]}`} />}
                                            </Box>}

                                        {/* Login button */}
                                        <CustomButton
                                            fullWidth
                                            variant="contained"
                                            sx={{
                                                mt: 3,
                                                mb: 2,
                                                borderRadius: 10,
                                                height: 50,
                                                width: 280,
                                                display: 'block',
                                                background: 'linear-gradient(180deg, #E7463F, #EF8439)'
                                            }}
                                            title={type === 'login' ? 'Login' : 'Register'}
                                            onSubmit={handleSubmit}
                                        />

                                        <Link style={{ color: '#E7463F' }} to={type === 'login' ? '/register' : '/'}>{type === 'login' ? 'Don`t have an account?' : 'Already have an account?'}</Link>
                                    </Box>
                                )}
                            </Formik>
                        </Box>
                    </Box>
                </Grid>
                {/* Image on the right side */}
                <Grid item xs={12} md={9}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '100%',
                            padding: 2,
                            marginTop: 10
                        }}
                    >
                        <img
                            src='/images/auth-image.png'
                            alt="Auth"
                            style={{
                                maxWidth: '100%',
                                maxHeight: '100%',
                                objectFit: 'contain',
                            }}
                        />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default AuthLayout;