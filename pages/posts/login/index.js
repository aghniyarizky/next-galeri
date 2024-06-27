import { useState } from 'react';

//import router
import Router from 'next/router';

//import axios
import axios from "axios";

import Image from 'next/image';

import styles from '../../../styles/Home.module.css';


//import Link
import Link from 'next/link';

//layout
import Layout from "../../../components/layouts/layout";

//import Head
import Head from 'next/head';

import { handleLogin } from '../../../components/navbars/navbar';


function Login() {

    //state
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    //state validation
    const [validation, setValidation] = useState({});


    const storePost = async (e) => {
        e.preventDefault();

        //define formData
        const formData = new FormData();

        //append data to "formData"
        formData.append('username', username);
        formData.append('password', password);
        
        //send data to server
        await axios.post(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/v1/auth/login`, formData)
        .then((response) => {
            
            sessionStorage.setItem('username', username);
            // console.log(sessionStorage.getItem('username'));

            console.log(JSON.stringify(response.data));
            
            // Ekstrak access_token dari respons
            const { access_token } = response.data;

            // Simpan access_token ke localStorage atau sessionStorage
            sessionStorage.setItem('accessToken', access_token);
            console.log(sessionStorage.getItem('accessToken'));
            
            if (access_token) {
                // Redirect ke halaman login jika token tidak ada
                Router.push('./logged_in');
              }
            else{
                Router.push('./');
            }
        })
        .catch((error) => {
            console.error('Login error:', error);
            //assign validation on state
            //setValidation(error.response.data);
        })
        
    };



    return (
        <Layout>
            <Head>
                <title>Log in</title>
            </Head>
                        
            <div>
                <div className="modal-dialog shadow p-3 mb-5 bg-body rounded"  style={{ marginTop: '100px' }}>
                    <div className="modal-content">
                    <div className="modal-header-custom mt-4">
                    <div>
                        <span className={styles.logo}>
                            <Image src="/main_icon.PNG" width={50} height={50} style={{ borderRadius: '40%'}} />
                        </span>
                    </div>
                        <h4 className="text-center" id="exampleModalLabel">Welcome Back to Gallery</h4>
                        {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
                    </div>
                    <div className="modal-body">
                        <form onSubmit={ storePost }>
                        Username
                        <input type="text" className="form-group form-control mb-3 rounded-pill" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Masukkan Username"></input>
                        {
                            validation.username &&
                                <div className="alert alert-danger">
                                    {validation.username}
                                </div>
                        }

                        Password
                        <input type="password" className="form-group form-control mb-3 rounded-pill" value={password} onChange={(e) => setPassword(e.target.value)}  placeholder="Masukkan Password"></input>
                        {
                            validation.password &&
                                <div className="alert alert-danger">
                                    {validation.password}
                                </div>
                        }
                            <button type="submit" class="container custom-btn custom-btn-aqua" onClick={handleLogin}>Login</button>
                        </form>
                    </div>

                    <div class="mb-3 mt-4">
                        <h6 className='text-center'>Don't have an account? <Link href="./signup">Sign Up</Link></h6>
                    </div>

                    <div className="modal-footer">
                        
                        {/* <Link href="./logged_in" type="button" className="container custom-btn custom-btn-aqua">Log In</Link> */}
                        {/* <Link href="/posts/logged_in" type="submit" className="container custom-btn custom-btn-aqua" >Log In</Link> */}
                    </div>
                    </div>
                </div>
            </div>


        </Layout>
    )
}

export default Login