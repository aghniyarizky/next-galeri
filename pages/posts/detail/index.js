//layout
import Layout from "../../../components/layouts/layout";

//import Link
import Link from 'next/link';

import Image from 'next/image';

import Head from 'next/head';

//import axios
import axios from "axios";

    function detail() {

        return(
        <Layout>
                <Head>
                    <title>Detail</title>
                </Head>

                <div className="container" style={{ marginTop: '100px' }}>
                    <div className="row justify-content-center">
                        <div className="col-lg-10 mt-2">
                            <div className="p-5 mb-4 bg-light rounded-3 shadow-sm border-0">
                                <div className="container-fluid py-2">
                                    <div className=" d-flex">
                                        <div className="image-area me-4">
                                            <Image src="https://i.pinimg.com/236x/2f/ff/fa/2ffffa05fc292749bdd5a51be8de22c0.jpg" width="400" height="400" alt="Detail Foto" />
                                        </div>
                                        <div className="info mt-2">
                                            <h2 className="mb-3">Title</h2>
                                            <p>Description</p>
                                        </div>
                                        </div>
                                    <div className="info mt-5">
                                        <h3>Comments</h3>
                                        <p>komentar</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </Layout>
        )
    }

export default detail