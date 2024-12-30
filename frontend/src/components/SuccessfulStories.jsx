import React from 'react';
import Navbar from './Navbar';
import './SuccessfulStories.css'; // Ensure this path is correct
import web from '../image/web.mp4';

const SuccessfulStories = () => {
  return (
    <>
      <Navbar />
      <div className="stories-container mt-4">
        <header className="stories-header">
          <h1>Successful Stories</h1>
        </header>
        <section className="stories-content">
          <div className="video-container">
            <video controls autoPlay loop>
            <source src={web} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="stories-list">
            <div className="story">
              <h2>Ayesha & Ahmed</h2>
              <p className='story_text'>
                Ayesha and Ahmed found each other through our platform and instantly felt a deep connection. They both shared a passion for art and music, which 
                brought them closer together. After dating for a few months, they decided to take the next step and got engaged. Today, they are happily married 
                and continue to support each other's dreams.
              </p>
            </div>
            <div className="story">
              <h2>Sara & Ali</h2>
              <p className='story_text'>
                Sara and Ali's story is one of mutual respect and understanding. They met through a matchmaking event organized by our team and quickly realized 
                they had many common interests. Their relationship blossomed into a beautiful partnership, and they recently celebrated their first wedding anniversary.
              </p>
            </div>
            <div className="story">
              <h2>Fatima & Imran</h2>
              <p className='story_text'>
                Fatima and Imran were initially hesitant about online matchmaking, but they gave it a try and found each other. Their journey from friendship to 
                love was smooth and natural. They are now planning to start a family and are grateful for the platform that brought them together.
              </p>
            </div>
            <div className="story">
              <h2>Zainab & Hassan</h2>
              <p className='story_text'>
                Zainab and Hassan's story is a testament to the power of patience and persistence. After meeting through our platform, they took their time to 
                understand each other and build a strong foundation. Their love grew stronger with time, and they are now happily married, enjoying every moment 
                of their life together.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SuccessfulStories;
