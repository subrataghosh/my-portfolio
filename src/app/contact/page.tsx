"use client";

import { useState } from 'react';
import type { NextPage } from "next";

// interface UserContactMe {
//     id: string;
//     email: string;
//     name: string | null;
//     subject: string | null;
//     message: string | null;
//   }

const Contact: NextPage = () => {
    // const [users, setUsers] = useState<User[]>([]);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

//   useEffect(() => {
//     fetch('/api/users')
//       .then((res) => res.json())
//       .then((data) => setUsers(data));
//   }, []);

  const sendMessage = async () => {
    const response = await fetch('/api/userContactMe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, name, message }),
    });

    if (response.ok) {
        setEmail('');
        setName('');
        setMessage('');
    }
  };

  return (
    <>
      <section className="contact section" id="contact">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Contact Me</h2>
            </div>
          </div>
          <div className="row">
            {/* contact-info-item */}
            <div className="contact-info-item padd-15">
              <div className="icon">
                <i className="fa fa-map-marker" />
              </div>
              <h4>Address</h4>
              <p>Kolkata, India</p>
            </div>
            {/* contact-info-item Ended */}
            {/* contact-info-item */}
            <div className="contact-info-item padd-15">
              <div className="icon">
                <i className="fa fa-phone" />
              </div>
              <h4>Call me On</h4>
              <p>+91 8420982123</p>
            </div>
            {/* contact-info-item Ended */}
            {/* contact-info-item */}
            <div className="contact-info-item padd-15">
              <div className="icon">
                <i className="fa fa-envelope" />
              </div>
              <h4>Email</h4>
              <p>subrata.ghosh.ece@gmail.com</p>
            </div>
            {/* contact-info-item Ended */}
          </div>
          {/* Contact Form */}
          <div className="row">
            <form className="contact-form padd-15">
            {/* <h2 className="title pb-5">Contact Me</h2> */}
              <div className="row">
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name*"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email*"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              {/* <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject*"
                    />
                  </div>
                </div>
              </div> */}
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      placeholder="Your Message*"
                      defaultValue={""}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 padd-15">
                  <button type="submit" className="btn" onClick={sendMessage}>
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
          {/* Contact Form Ended */}
        </div>
      </section>
    </>
  );
};

export default Contact;
