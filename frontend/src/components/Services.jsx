import React from 'react';
import Navbar from './Navbar';
import './Services.css'; // Ensure this path is correct

const Services = () => {
  return (
    <>
      <Navbar />
      <div className="services-container mt-4">
        <header className="services-header">
          <h1>Our Services</h1>
        </header>
        <section className="services-list">
          <div className="service">
            <h2>Personalized Matchmaking</h2>
            <p className='text'>
              Our dedicated team of matchmakers will work closely with you to understand your preferences and find the perfect match based on your criteria. 
              We take the time to get to know you, ensuring a deep understanding of your needs and desires. Our goal is to provide a personalized and seamless 
              matchmaking experience that leads to meaningful connections.
            </p>
          </div>
          <div className="service">
            <h2>Extensive Profile Database</h2>
            <p className='text'>
              Access a vast directory of profiles to find potential matches. We ensure all profiles are thoroughly verified for authenticity. Our extensive database 
              includes a diverse range of individuals from various backgrounds, ensuring you have a wide array of choices to find your ideal partner. We regularly 
              update our profiles to maintain accuracy and relevance.
            </p>
          </div>
          <div className="service">
            <h2>Confidential and Secure</h2>
            <p className='text'>
              Your privacy is our priority. We offer a confidential and secure platform where your personal information is protected. Our security measures are 
              designed to keep your data safe, allowing you to focus on finding your soulmate without concerns. We are committed to maintaining the highest 
              standards of privacy and confidentiality in all our interactions.
            </p>
          </div>
          <div className="service">
            <h2>Event Planning</h2>
            <p className='text'>
              We organize events and meetups for singles to interact in a relaxed and enjoyable environment, enhancing the matchmaking experience. Our events are 
              designed to foster genuine connections and provide a comfortable setting for meeting new people. From social gatherings to themed parties, we offer 
              a variety of events to suit different preferences and interests.
            </p>
          </div>
          <div className="service">
            <h2>Relationship Counseling</h2>
            <p className='text'>
              Our experienced relationship counselors are available to provide guidance and support to help you build a strong and lasting relationship. Whether 
              you're facing challenges or simply looking for advice, our counselors offer insights and strategies to enhance your relationship. We believe in 
              nurturing healthy, fulfilling relationships and are here to support you every step of the way.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
