import Layout from "../../../components/layouts/layout";
import Head from 'next/head';
import axios from "axios";
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { useState } from 'react';

function Home({ posts }) {
    let token = Cookies.get('accessToken');
    const [images_shown, setImages_Shown] = useState("");
  
    const router = useRouter();
  
    const refreshData = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BACKEND}/images`);
        const updatedPosts = response.data.data;
        setImages_Shown(""); // Reset nilai images_shown setelah berhasil mengirim data
        // Update state posts dengan data yang baru
        // posts seharusnya sudah didefinisikan sebagai state atau prop
        // Anda dapat mengupdate posts sesuai dengan data baru yang didapat dari server
        // Contoh: setPosts(updatedPosts);
      } catch (error) {
        console.error('Error fetching updated data:', error);
        // Tangani kesalahan pengambilan data terbaru, jika diperlukan
      }
    };
  
    const storePost = async (e) => {
        e.preventDefault();
      
        const formData = new FormData();
        formData.append('token', token);
        formData.append('images_shown', images_shown);
      
        try {
          const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/v1/gallery`, formData);
          console.log('Successfully sent data:', response.data);
      
          // Lakukan sesuatu setelah berhasil mengirim data, misalnya:
          // - Memperbarui data yang ditampilkan di halaman
          // - Memanggil refreshData() untuk memperbarui data dari server
          // - Menampilkan pesan sukses ke pengguna
      
          // Misalnya, jika Anda ingin memperbarui data yang ditampilkan, Anda bisa mengambil data terbaru dari server:
          refreshData();
      
        } catch (error) {
          console.error('Error sending data:', error.response.data);
          // Tangani kesalahan pengiriman data, misalnya menampilkan pesan error ke pengguna
        }
      };
      
  
    return (
      <Layout>
        <Head>
          <title>Home</title>
        </Head>
        
        <div className="container_cst" style={{ marginTop: '80px' }}>
          <form onSubmit={storePost}>
            <div className="mb-3">
              <label htmlFor="images_shown" className="form-label mb-2">Images Shown</label>
              <input type="number" className="form-control rounded-pill" id="images_shown" value={images_shown} onChange={(e) => setImages_Shown(e.target.value)} placeholder="Input number of images" required />
            </div>
  
            {posts.map((post) => (
              <div key={post.id_image} className="text-center mb-3">
                <img src={`${updatedPosts}/${post.image_path}`} width="150" className="rounded-3" alt={`Image ${post.title}`} />
              </div>
            ))}
  
            <button type="submit" className="btn btn-primary rounded-pill">Send</button>
          </form>
        </div>
      </Layout>
    );
  }
  

export async function getServerSideProps() {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BACKEND}/images`);
    const posts = response.data.data; // Adjust this line to match your API response structure

    return {
      props: {
        posts
      }
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        posts: []
      }
    };
  }
}

export default Home;
