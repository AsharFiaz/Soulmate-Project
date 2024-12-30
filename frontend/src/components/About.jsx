import React from 'react';
import Navbar from './Navbar';
import './About.css'; // Ensure this path is correct

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about-container mt-4">
        <header className="about-header">
          <h1>About Us</h1>
        </header>
        <section className="about-section">
          <div className="about-content">
            <h2>Pakistan’s Most Trusted Matchmakers At Your Service</h2>
            <p className='para'>
              In truth, this precious bond between two individuals is what brings the peace and happiness in human kind. The ultimate happiness of finding and living with the right person is almost divine. To share every thought without words, to feel every emotion mutually, to celebrate mental and spiritual connection is a thing of rarity. In our society, young men and women are not allowed to choose their own life partners and matchmaking for marriages is initiated by the elders of the family. It is considered close to almost indecent for wishing to even take a look at the bride/groom before marriage. And thus, we witness an element of frustration building in couples nowadays.
            </p>
          </div>
          <div className="about-content">
            <h2>Soulmate Seekers</h2>
            <p className='para'>
              Soulmate Seekers is designed to bring to you a number of choices in selecting a life partner. We have put the power to choose back in the hands of the individuals who want to marry. Whether it is for you or you are registering on behalf of your children/siblings, we invite you to browse through the largest directory of candidates seeking Pakistani match for marriages.
            </p>
            <p className='para'>
              Find your fairy tale ending by selecting the perfect partner from Pakistan and abroad. Simply create an account on SoulmateSeekers.pk to get online rishtey where your potential ideal life partner is just a few clicks away. Once you are registered with us, you just need to log on to the website, create your own profile and specify your required qualities in the prospect bride or groom.
            </p>
            <p className='para'>
              Let our matchmakers assist you in finding the matching candidates and arranging meetings between you and them. We work 24/7 in collaborating with different families who can prove to be your Pakistani match!
            </p>
          </div>
        </section>
        <section className="about-cta">
          <h3>Ready to Find Your Perfect Match?</h3>
          <div className="cta-buttons">
            <a href="/register" className="btn btn-primary">Register Now</a>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
