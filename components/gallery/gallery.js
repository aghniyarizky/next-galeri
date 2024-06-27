// components/Gallery.js

import Image from 'next/image';
import { posts } from '../../pages/posts/mockdata/searchdata';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';


const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const Gallery = () => {
    const router = useRouter();
    const handleClick = () => {
      router.push('/posts/detail');
    };
 const [shuffledPosts, setShuffledPosts] = useState([]);

  useEffect(() => {
    setShuffledPosts(shuffleArray([...posts]));
  }, []);

  return (
    <div className="container_cst">
      {shuffledPosts.map((post) => (
        <div key={post.id} className="card card_small">
          <Image
            src={post.image}
            alt={post.title}
            width={post.width}
            height={post.height}
            className="gallery-image"
            onClick={handleClick}
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
