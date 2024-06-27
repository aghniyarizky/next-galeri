//import Link
import Link from 'next/link';
import Image from 'next/image';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import Search from '../search/search';

import { posts } from '../../pages/posts/mockdata/searchdata';

import styles from '../../styles/Home.module.css';

function Navbar() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const router    = useRouter();
    const isHome    = router.pathname === '/posts/logged_in';

    const isDetail  = router.pathname === '/posts/detail';
    const isCreate  = router.pathname === '/posts/create';

    const isLogin   = router.pathname === '/posts/login';
    const isSignup  = router.pathname === '/posts/signup';
    
    
    //login logout
        const handleLogin = () => {
            setIsAuthenticated(true);
            router.push('../posts/login'); // Alihkan ke halaman Home setelah login
            };
    
        const handleLogout = () => {
            setIsAuthenticated(true);
            router.push('/'); // Alihkan ke halaman Home setelah logout
            };

    //signup
        const handleSignup = () => {
            setIsAuthenticated(true);
            router.push('../posts/signup'); // Alihkan ke halaman Signup
        };

    //create
        const handleCreate = () => {
            setIsAuthenticated(true);
            router.push('../posts/create'); // Alihkan ke halaman Home setelah login
        };

    //detail
        const handleDetail = () => {
            setIsAuthenticated(true);
            router.push('../posts/detail'); // Alihkan ke halaman Home setelah login
    };

    //home
        const handleHome = () => {
            setIsAuthenticated(true);
            router.push('../posts/logged_in'); // Alihkan ke halaman Home setelah login
    };

    //back
        const handleBack = () => {
            setIsAuthenticated(true);
            router.push('../posts'); // Alihkan ke halaman Home setelah login
    };
  
    useEffect(() => {
      // Set the initial authentication state if needed
      // For example, checking local storage or a cookie
    }, []);


    return (
        <ul>
            <nav className="navbar navbar-expand-md navbar-light fw-bold fixed-top bg-light fixed-top border-0 shadow-sm">
                <div className="container-xl" ><div>
                    <span className={styles.logo}>
                        <Image src="/main_icon.PNG" width={50} height={50} alt="gallery" style={{ borderRadius: '40%'}} className='me-3' />
                    </span>
                    </div>
                    <Link href="/" className="navbar-brand">
                        Gallery
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        {((!isAuthenticated && isHome) || (!isAuthenticated && isDetail) || (!isAuthenticated && isCreate))  && (
                            <ul className="container navbar-nav me-auto mb-2 mb-md-0 me-2 rounded-pill">
                                {/* <Search posts={posts} /> */}
                                <Search />
                            </ul>
                        )}

                        {(!isAuthenticated && !(isHome || isDetail || isCreate)) && (
                            <ul className="container navbar-nav me-auto mb-2 mb-md-0 me-2 rounded-pill"></ul>
                        )}
                        
                        
                        <form className="d-flex">
                            {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
                            {/* <Modal><Link href="modal" className="nav-link custom-btn custom-btn-aqua me-2" data-bs-toggle="modal" data-bs-target="#exampleModal" type="button">Log in</Link></Modal> */}
                            
   
        {/* semua belum diclick */}
            {!isHome && !isAuthenticated && !isLogin && !isSignup && !isDetail && !isCreate && (
            <>
           
                            <button className="custom-btn custom-btn-aqua me-2" onClick={handleLogin}>Log in</button>
                            <button className="custom-btn custom-btn-secondary" onClick={handleSignup}>Sign up</button>

                            {/* <Link href="/posts/login" className="custom-btn custom-btn-aqua me-2" type="submit">Log in</Link>
                            <Link href="/posts/signup" className="custom-btn custom-btn-secondary" type="submit">Sign up</Link> */}
                        
          </>
        )}


        {(!isAuthenticated && isHome) && (
            <>
                            <button className="custom-btn custom-btn-aqua me-2" onClick={handleCreate}>Create</button>
                            <button className="custom-btn custom-btn-secondary me-2" onClick={handleLogout}>Logout</button>

                            {/* <Link href="/posts/login" className="custom-btn custom-btn-aqua me-2" type="submit">Log in</Link>
                            <Link href="/posts/signup" className="custom-btn custom-btn-secondary" type="submit">Sign up</Link> */}
                        
          </>
        )}


        {(!isAuthenticated && isDetail) && (
            <>
                            <button className="custom-btn custom-btn-aqua me-2" onClick={handleCreate}>Create</button>
                            <button className="custom-btn custom-btn-secondary me-2" onClick={handleLogout}>Logout</button>

                            {/* <Link href="/posts/login" className="custom-btn custom-btn-aqua me-2" type="submit">Log in</Link>
                            <Link href="/posts/signup" className="custom-btn custom-btn-secondary" type="submit">Sign up</Link> */}
                        
          </>
        )}
    

        {(!isAuthenticated && isCreate) && (
            <>
                            <button className="custom-btn custom-btn-secondary me-2" onClick={handleHome}>Home</button>
                            <button className="custom-btn custom-btn-secondary me-2" onClick={handleLogout}>Logout</button>

                            {/* <Link href="/posts/login" className="custom-btn custom-btn-aqua me-2" type="submit">Log in</Link>
                            <Link href="/posts/signup" className="custom-btn custom-btn-secondary" type="submit">Sign up</Link> */}
                        
          </>
        )}
                    
                    
                        </form>
                    </div>
                </div>
            </nav>
        </ul>
    )
    
}

export default Navbar