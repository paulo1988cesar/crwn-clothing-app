import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButtom from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import './sign-in.styles.scss';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 

class SignIn extends Component{
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        if(email === '')
        {
            toast.info('Invalid email. Please type a valid email!');
            return;
        }

        if (password === '') {
            toast.info('The password is required!');
            return;
            }

        try
        {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' })
        } catch (error) {
            toast.info('Error: ', error);
        }
    }

    render() {
        return (
            <div className='sign-in'>
                <ToastContainer />
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" value={this.state.email} label='email' handleChange={this.handleChange} required />
                    <FormInput name="password" type="password" value={this.state.password} label='password' handleChange={this.handleChange} required />
                    <div className='buttons'>
                        <CustomButtom type="submit" onClick={this.handleSubmit}> Sign In</CustomButtom>
                        <CustomButtom onClick={signInWithGoogle} isGoogleSignIn>{' '} Sign In with google{' '}</CustomButtom>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;