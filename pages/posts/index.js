//layout
import Layout from "../../components/layouts/layout";

//import Link
import Link from 'next/link';

import Head from 'next/head';

//import axios
import axios from "axios";

//data sementara
const mockPosts = [];

//fetch with "getServerSideProps"
export async function getServerSideProps() {

    return {
      props: {
          posts: mockPosts // <-- assign response
      },
    }
  }

function PostIndex(props) {

    //destruct
    const { posts } = props;

    return(
<Layout>
            <Head>
                <title>Gallery</title>
            </Head>
            <div className="container" style={{ marginTop: '100px' }}>
                <div className="row justify-content-center">
                    <div className="col-md-6 mt-2">
                      <div className="p-5 mb-4 bg-light rounded-3 shadow-sm border-0">
                          <div className="container-fluid py-5">
                              <h2 className="display-6 fw-bold text-center">Looking for new</h2>
                              <h2 className="display-6 fw-bold text-center aqua">ideas?</h2>
                              {/* <p className="col-md-12 fs-4 text-center">Get many ideas in here</p> */}
                              <center><button className="custom-btn-green-pastel" type="button">Get many ideas in here</button></center>
                          </div>
                      </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default PostIndex