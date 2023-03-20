import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './App.css';
import { apiPost } from './componetns/apiPosts';
import Header from './componetns/header/header';

function Home() {
  let {postid} = useParams();

  return (
    <div>
      <Header />
      <div className='posts'>
        <div className='post'>
          {apiPost.map(apiPost =>
         <Link to={`/post/${apiPost.title}`} className='li' key={apiPost.id}>
              <div className='postTitle'>
                <p>{apiPost.id}.</p>
                <p>{apiPost.title}</p>
              </div>
              <div className='postDesc'>
                <span>{apiPost.tabcoins} tabcoins</span>
                <span>{apiPost.comentarios} comentarios</span>
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default Home;
