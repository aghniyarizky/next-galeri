//layout
import Layout from "../../../components/layouts/layout";

import Image from 'next/image';

//import Head
import Head from 'next/head';

import { useRouter } from 'next/router';

import { useState } from 'react';

import React from 'react';
import { useSearch } from '../../../components/contexts/searchContext';

import { posts } from '../mockdata/searchdata';

import Gallery from '../../../components/gallery/gallery';

const Home = () => {
    const { searchResults } = useSearch();
    
    const router = useRouter();
    const handleClick = () => {
      router.push('/posts/detail');
    };


    return (
        <Layout>
            <Head>
                <title>Home</title>
            </Head>
                
            <div className="container_cst"  style={{ marginTop: '80px' }}>
                        <div className="container_cst"> 
                            <Gallery posts={posts} />
                        </div>

                    {/* <h1>Search Results</h1> */}
                    {searchResults.map(post => {
                        let imageSizeClass = ''; // Variabel imageSizeClass didefinisikan di sini

                        function getImageSizeClass(width, height) {
                            if (post.image) { // Memeriksa apakah post.image ada
                                if (post.image.height >= 300) {
                                    imageSizeClass = 'card_large';
                                } else if (post.image.height >= 200) {
                                    imageSizeClass = 'card_medium';
                                } else {
                                    imageSizeClass = 'card_small';
                                }
                            } else {
                                // Handle case when post.image doesn't exist, if needed
                            }
                        }

                        return (
                            <div className={`card ${getImageSizeClass(post.width, post.height)}`}>                        
                                <Image 
                                    key={post.id}
                                    src={post.image} // Pastikan Anda mengakses properti yang sesuai dari post.image
                                    width={post.width}
                                    height={post.height}
                                    alt={post.title} 
                                    onClick={handleClick}
                                    // Menggunakan className yang sudah ditentukan
                                />
                            </div>
                        );
                    })}

                        
                        
                <div className="card card_small">
                    <Image src="https://i.pinimg.com/236x/2f/ff/fa/2ffffa05fc292749bdd5a51be8de22c0.jpg" onClick={handleClick} width="100" height="100" alt=""/>
                </div> 

                <div className="card card_large">
                    <Image src="https://i.pinimg.com/236x/3f/b6/6b/3fb66ba5e03b3b0ae93b5e09df5b972a.jpg"  width="100" height="100" alt=""/>
                </div>
                <div className="card card_small">
                    <Image src="https://i.pinimg.com/236x/69/97/11/69971190edaeb579eddc01b1e533028c.jpg"  width="100" height="100" alt=""/>
                </div>
                
                <div className="card card_midium">
                    <Image src="https://i.pinimg.com/236x/6e/54/35/6e543528b981b2754f24ec6351a73447.jpg"  width="100" height="100"alt=""/>
                </div>
                <div className="card card_small">
                    <Image src="https://i.pinimg.com/236x/6a/8d/15/6a8d1557432b61937e5ec5ad795423f8.jpg"  width="100" height="100"alt=""/>
                </div>
                <div className="card card_midium">
                    <Image src="https://i.pinimg.com/236x/76/c8/81/76c8813ccc1779113a8db8d01b58a7f5.jpg"  width="100" height="100"alt=""/>
                </div>
                <div className="card card_large">
                    <Image src="https://i.pinimg.com/236x/36/19/ba/3619ba2383cc71a1ff8badd881d8375b.jpg"  width="100" height="100" alt=""/>
                </div>

                <div className="card card_small">
                    <Image src="https://i.pinimg.com/236x/11/fb/24/11fb24ae9a49b0410d6b7d914db95921.jpg" width="100" height="100" alt=""/>
                </div>
                <div className="card card_midium">
                    <Image src="https://i.pinimg.com/236x/06/8c/df/068cdf34cfc34b6ad1712bd5df0fba4a.jpg" width="100" height="100" alt=""/>
                </div>

                <div className="card card_small">
                    <Image src="https://i.pinimg.com/236x/2f/ff/fa/2ffffa05fc292749bdd5a51be8de22c0.jpg" width="100" height="100" alt=""/>
                </div>
                <div className="card card_midium">
                    <Image src="https://i.pinimg.com/236x/76/c8/81/76c8813ccc1779113a8db8d01b58a7f5.jpg" width="100" height="100" alt=""/>
                </div>
                <div className="card card_small">
                    <Image src="https://i.pinimg.com/236x/2f/ff/fa/2ffffa05fc292749bdd5a51be8de22c0.jpg" width="100" height="100" alt=""/>
                </div>
                <div className="card card_midium">
                    <Image src="https://i.pinimg.com/236x/76/c8/81/76c8813ccc1779113a8db8d01b58a7f5.jpg" width="100" height="100" alt=""/>
                </div>
                <div className="card card_large">
                    <Image src="https://i.pinimg.com/236x/3a/f7/a8/3af7a84ae21f9dc9dd19e7308a2c2314.jpg" width="100" height="100" alt=""/>
                </div>
                <div className="card card_large">
                    <Image src="https://i.pinimg.com/236x/75/3f/99/753f993312949b5a208c8d55b18092d4.jpg" width="100" height="100" alt=""/>
                </div>

                <div className="card card_large">
                    <Image src="https://i.pinimg.com/236x/7f/96/a6/7f96a6dbbe2328cb50f5a1be6acf301d.jpg" width="100" height="100" alt=""/>
                </div>

                <div className="card card_small">
                    <Image src="https://i.pinimg.com/236x/64/61/5f/64615fc76f64fb5f63c7c89d7e322b49.jpg" width="100" height="100" alt=""/>
                </div>
                <div className="card card_midium">
                    <Image src="https://i.pinimg.com/236x/58/54/37/585437b83df3027c4d2aaf5364059b4e.jpg" width="100" height="100" alt=""/>
                </div>
                <div className="card card_small">
                    <Image src="https://i.pinimg.com/236x/b8/07/2c/b8072c70d7e50b3eaddcf48da9715c71.jpg" width="100" height="100" alt=""/>
                </div>
                <div className="card card_midium">
                    <Image src="https://i.pinimg.com/236x/76/c8/81/76c8813ccc1779113a8db8d01b58a7f5.jpg" width="100" height="100" alt=""/>
                </div>
                <div className="card card_large">
                    <Image src="https://i.pinimg.com/236x/3a/f7/a8/3af7a84ae21f9dc9dd19e7308a2c2314.jpg" width="100" height="100" alt=""/>
                </div>
                <div className="card card_large">
                    <Image src="https://i.pinimg.com/236x/7f/96/a6/7f96a6dbbe2328cb50f5a1be6acf301d.jpg" width="100" height="100" alt=""/>
                </div>
                <div className="card card_small">
                    <Image src="https://i.pinimg.com/236x/1b/6b/aa/1b6baa519e6f59c9a4df42609e7ca6fb.jpg" width="100" height="100" alt=""/>
                </div>
                <div className="card card_midium">
                    <Image src="https://i.pinimg.com/236x/76/c8/81/76c8813ccc1779113a8db8d01b58a7f5.jpg" width="100" height="100" alt=""/>
                </div>
                <div className="card card_small">
                    <Image src="https://i.pinimg.com/236x/2f/ff/fa/2ffffa05fc292749bdd5a51be8de22c0.jpg" width="100" height="100" alt=""/>
                </div>
                </div>


        </Layout>
    );
};

export default Home;

