import { useState } from 'react';

//import router
import Router from 'next/router';

import Image from 'next/image';

import styles from '../../../styles/Home.module.css';

//import axios
import axios from "axios";

//import axiosInstance from '../../../utils/axiosInstance';

//import Link
import Link from 'next/link';

//layout
import Layout from "../../../components/layouts/layout";

//import Head
import Head from 'next/head';


function SignUp() {

    //state
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    //state validation
    const [validation, setValidation] = useState({});


    const storePost = async (e) => {
        e.preventDefault();

        //define formData
        const formData = new FormData();

        //append data to "formData"
        formData.append('username', username);
        formData.append('password', password);
        formData.append('name', name);
        formData.append('email', email);
        
        //send data to server
        await axios.post(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/v1/auth/register`, formData)
        .then(() => {

            //redirect
            Router.push('./login')

        })
        .catch((error) => {

            //assign validation on state
            //setValidation(error.response.data);
        })
        
    };



    return (
        <Layout>
            <Head>
                <title>Sign Up</title>
            </Head>
                        
            <div>
                <div className="modal-dialog shadow p-3 mb-5 bg-body rounded" style={{ marginTop: '100px' }}>
                    <div className="modal-content">
                    <div className="modal-header-custom mt-4">
                    {/* <div>
                        <img className='rounded-lg' src='https://id.pinterest.com/pin/68746854801/'  width={50} 
                        height={30}/>
                    </div> */}
                    {/* <Image
                        src="https://pinterest.com/pin/68746854801/"
                        width={40}
                        height={40}
                    /> */}
                    <div>
                    <span className={styles.logo}>
                        <Image src="/main_icon.PNG" width={50} height={50} style={{ borderRadius: '40%'}} />
                    </span>
                    </div>
                        <h4 className="text-center" id="exampleModalLabel">Welcome to Gallery</h4>
                        {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
                    </div>
                    <div className="modal-body">
                        <form onSubmit={storePost}>
                        Username
                        <input type="text" className="form-group form-control mb-3 rounded-pill" value={username} onChange={(e) => setUsername(e.target.value)}  placeholder="Masukkan Username"></input>
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
                        
                        Name
                        <input type="text" className="form-group form-control mb-3 rounded-pill" value={name} onChange={(e) => setName(e.target.value)}  placeholder="Masukkan Nama"></input>
                         {
                            validation.name &&
                                <div className="alert alert-danger">
                                    {validation.name}
                                </div>
                        }
                        
                        E-mail
                        <input type="email" className="form-group form-control mb-3 rounded-pill" value={email} onChange={(e) => setEmail(e.target.value)}  placeholder="Masukkan E-mail"></input>
                        {
                            validation.email &&
                                <div className="alert alert-danger">
                                    {validation.email}
                                </div>
                        }
                        <button type="submit" className="container custom-btn custom-btn-aqua">Sign Up</button>
                        
                        </form>

                    </div>

                    <div class="mb-3 mt-4">
                        <h6 class='text-center'>Have an account? <Link href="./login">Log In</Link></h6>
                    </div>

                    <div className="modal-footer">
                        
                        {/* <Link href= "./logged_in" className="container custom-btn custom-btn-aqua" type="submit">Sign Up</Link> */}
                        {/* <input type="submit" className="container custom-btn custom-btn-aqua" placeholder='Sign Up' /> */}
                        {/* <Link href="./logged_in" className="container custom-btn custom-btn-aqua" type="submit">Sign Up</Link> */}
                        {validation.message && <p>{validation.message}</p>}

                    </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default SignUp