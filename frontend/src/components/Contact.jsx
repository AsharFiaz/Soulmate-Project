import React from "react";
import Navbar from "./Navbar";
import "./Contact.css"; // Ensure this path is correct

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="contact-container mt-4">
        <header className="contact-header">
          <h1 className="aa">Contact Us</h1>
        </header>
        <section className="contact-intro">
          <p>
            If you have any questions or need further assistance, feel free to
            reach out to us...
          </p>
        </section>
        <section className="contact-details">
          <div className="office">
            <h2>Rawalpindi office</h2>
            <p>Address: XYZ Building, Main Road, Rwp.</p>
            <p>Landline: +92-312-1234567</p>
          </div>
          <div className="office">
            <h2>Islamabad Office</h2>
            <p>Address: ABC Plaza, Blue Area, Islamabad.</p>
            <p>Landline: +92-51-1234567</p>
          </div>
        </section>
        <section className="contact-consultants">
          <h2>Hire Personal Matchmaking Consultant</h2>
          <p>
            Please send your complete details & requirements on the following
            WhatsApp numbers.
          </p>
          <ul>
            <li>Ashar Fiaz: 0312-0874969 </li>
            <li>Jazib Waqar: 0334-9807334</li>
            <li>Fawad Sipra: 0333-83737482</li>
            <li>Moiz Islam: 0332-38382727</li>
            <li>Omer Afzal: 0334-28323181</li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default Contact;
