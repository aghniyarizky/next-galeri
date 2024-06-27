//layout
import Layout from "../../../components/layouts/layout";

import Image from 'next/image';
import { useState } from 'react';

//import axios
import axios from "axios";

//import Head
import Head from 'next/head';

console.log(sessionStorage.getItem('accessToken'));
    function Create() {

        const [token, setToken] = useState("");
        const [image, setImage] = useState(null);
        const [title, setTitle] = useState("");
        const [description, setDescription] = useState("");
        const [allow_comments, setAllowComments] = useState("");

        const handleDrop = (e) => {
          e.preventDefault();
          const file = e.dataTransfer.files[0];
          const reader = new FileReader();
      
          reader.onload = () => {
            setImage(reader.result);
          };
      
          reader.readAsDataURL(file);
        };
      
        const handleDragOver = (e) => {
          e.preventDefault();
        };


        const storePost = async (e) => {
            e.preventDefault();
    
            //define formData
            
            const formData = new FormData();
            const username = sessionStorage.getItem('username');
            
            //append data to "formData"
            formData.append('token', token);
            formData.append('image', image);
            formData.append('title', title);
            formData.append('description', description);
            formData.append('allow_comments', allow_comments);
            
            
            await axios.post(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/v1/image/upload`, formData)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                //redirect

                Router.push('./logged_in')
    
            })
            .catch((error) => {
                
                //assign validation on state
                //setValidation(error.response.data);
            })
            
            
        };
      

        return(
            <Layout>
                <Head>
                    <title>Create</title>
                </Head>
                
                
                <div className="container col-md-8" style={{ marginTop: '150px' }}>
                <form onSubmit={storePost}>
                    <input type="text" value={token} onChange={(e) => setToken(e.target.value)} hidden />
                    <div
                        onDrop={handleDrop}
                        onDragOver={handleDragOver}
                        className="img-area"
                        >
                            <i><svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-cloud-arrow-up-fill" viewBox="0 0 16 16">
                            <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2m2.354 5.146a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0z"/>
                            </svg></i>
                        {image ? (
                            <img src={image} alt="Uploaded" style={{ maxWidth: '100%', maxHeight: '5140px' }} />
                        ) : (
                            <p>Drag and drop your image here</p>
                        )}
                    </div>

                        {/* <input type="file" id="file" accept="/" onDrop={handleDrop}
                        onDragOver={handleDragOver}/> */}
                        {/* <div className="img-area active">
                            <i><svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-cloud-arrow-up-fill" viewBox="0 0 16 16">
                            <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2m2.354 5.146a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0z"/>
                            </svg></i>
                            <h3>Upload Image</h3>
                            <p>Image size must be less than <span>2 MB</span></p> */}
                            {/* <Image src="/main_icon.png" width="100" height="100"/> */}
                        {/* </div> */}
                        <button className="container custom-btn-aqua">Select Image</button>

                        <div className="mt-4">
                            <label className="mb-2">Title</label>
                            <input type="text" className="mb-4 form-group form-control mb-3 rounded-pill" value={title} onChange={(e) => setTitle(e.target.value)}  placeholder="Add Title"></input>

                            <label className="mb-2">Description</label>
                            <textarea className="form-group form-control mb-3 rounded-pill" value={description} onChange={(e) => setDescription(e.target.value)}  placeholder="Add description"></textarea>
                        
                            <p className="mb-2">Allow Comments</p>
                            <input type="radio" className="mb-3 me-2" value={allow_comments === "True"} onChange={(e) => setAllowComments(e.target.value)}/> 
                            <label className="mb-2 me-5">Yes</label>
                            <input type="radio" className="mb-3 me-2" value={allow_comments === "False"} onChange={(e) => setAllowComments(e.target.value)}/> 
                            <label className="mb-2">No</label>

                        </div>
                        
                        <button type="submit" className="container custom-btn custom-btn-aqua">Create</button>

                </form>
                    </div>

                    
                
            </Layout>
        )
    }

export default Create