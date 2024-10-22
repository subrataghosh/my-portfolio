import type { NextPage } from "next";

const About: NextPage = () => {
  return (
    <main>
      <section className="about section" id="about">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>About Me</h2>
            </div>
          </div>
          <div className="row">
            <div className="about-content padd-15">
              <div className="row">
                <div className="about-text padd-15">
                  <h2>
                    Hi! I am Subrata Ghosh a <span>Your Expertise</span>
                  </h2>
                  <p>
                    Experienced Full-Stack Web Developer with over 9 years of expertise in building and maintaining high-performance web applications. Proficient in both front-end and back-end development, with a strong focus on scalable, secure solutions. Adept at working within Agile methodologies, delivering high-quality software in collaborative, fast-paced environments. Skilled in designing RESTful services, integrating databases, and implementing real-time data streaming. Passionate about clean code, user-friendly design, and continuously improving software performance to meet business and technical needs.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="personal-info padd-15">
                  <div className="row">
                    <div className="info-item padd-15">
                      <p>
                        Website : <span>www.urfolio.vercel.app</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Degree : <span>B.Tech.</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Email : <span>subrata.ghosh.ece@gmail.com</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Location : <span>Kolkata, India</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Phone : <span>+91 8420982123</span>
                      </p>
                    </div>
                    {/* <div className="info-item padd-15">
                      <p>
                        Freelance : <span>Available</span>
                      </p>
                    </div> */}
                  </div>
                  <div className="row">
                    <div className="buttons padd-15">
                      <a
                        href="/docs/Subrata_Ghosh_CV.pdf"
                        target="_target"
                        className="btn"
                      >
                        Download CV
                      </a>
                      {/* <a
                        href="#contact"
                        data-section-index={0}
                        className="btn hire-me"
                      >
                        Hire Me
                      </a> */}
                    </div>
                  </div>
                </div>
                {/* <div className="skills padd-15">
                  <div className="row">
                    <div className="skill-item padd-15">
                      <h5>Html5</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "80%" }} />
                        <div className="skill-percent">80%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Css3</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "60%" }} />
                        <div className="skill-percent">60%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Javascript</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "50%" }} />
                        <div className="skill-percent">50%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Bootstrap</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "70%" }} />
                        <div className="skill-percent">70%</div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>

              <div className="row">
                 <div className="experience padd-15">
                  <h3 className="title">Skills</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                            <div className="row justify-content-center">
                                <div className="col-4 txt-center"> 
                                    <img src="/imgs/teck/java.png" className="adj-img"/> 
                                    <p className="pt-5 skills-txt">Java</p> 
                                </div>
                                <div className="col-4 txt-center"> 
                                    <img src="/imgs/teck/node.png" className="adj-img"/> 
                                    <p className="pt-5 skills-txt">NodeJS</p> 
                                </div>
                                <div className="col-4 txt-center"> 
                                    <img src="/imgs/teck/react-js.png" className="adj-img"/> 
                                    <p className="pt-5 skills-txt">React</p> 
                                </div>
                                <div className="col-4 txt-center"> 
                                    <img src="/imgs/teck/javascript-logo.png" className="adj-img"/> 
                                    <p className="pt-5 skills-txt">JavaScript</p> 
                                </div>
                                <div className="col-4 txt-center"> 
                                    <img src="/imgs/teck/jquery-logo.png" className="adj-img"/> 
                                    <p className="pt-5 skills-txt">jQuery</p> 
                                </div>
                                <div className="col-4 txt-center"> 
                                    <img src="/imgs/teck/html5-logo.png" className="adj-img"/> 
                                    <p className="pt-5 skills-txt">HTML5</p> 
                                </div>
                                <div className="col-4 txt-center"> 
                                    <img src="/imgs/teck/css3-logo.png" className="adj-img"/> 
                                    <p className="pt-5 skills-txt">CSS3</p> 
                                </div>
                                <div className="col-4 txt-center"> 
                                    <img src="/imgs/teck/bootstrap-logo.png" className="adj-img"/> 
                                    <p className="pt-5 skills-txt">Bootstrap</p> 
                                </div>
                                <div className="col-4 txt-center"> 
                                    <img src="/imgs/teck/kafka.png" className="adj-img"/> 
                                    <p className="pt-5 skills-txt">Kafka</p> 
                                </div>
                                <div className="col-4 txt-center"> 
                                    <img src="/imgs/teck/snaplogic.png" className="adj-img"/> 
                                    <p className="pt-5 skills-txt">Snaplogic</p> 
                                </div>
                                <div className="col-4 txt-center"> 
                                    <img src="/imgs/teck/sql.png" className="adj-img"/> 
                                    <p className="pt-5 skills-txt">SQL</p> 
                                </div>
                                <div className="col-4 txt-center"> 
                                    <img src="/imgs/teck/mongo-db.png" className="adj-img"/> 
                                    <p className="pt-5 skills-txt">NoSQL</p> 
                                </div>
                                <div className="col-4 txt-center"> 
                                    <img src="/imgs/teck/office-logo.png" className="adj-img"/> 
                                    <p className="pt-5 skills-txt">Office Utilities</p> 
                                </div>
                                <div className="col-4 txt-center"> 
                                    <img src="/imgs/teck/tomcat.png" className="adj-img"/> 
                                    <p className="pt-5 skills-txt">Apache Tomcat</p> 
                                </div>
                                <div className="col-4 txt-center"> 
                                    <img src="/imgs/teck/aws.png" className="adj-img"/> 
                                    <p className="pt-5 skills-txt">AWS</p> 
                                </div>
                                <div className="col-4 txt-center"> 
                                    <img src="/imgs/teck/gc.png" className="adj-img"/> 
                                    <p className="pt-5 skills-txt">GCP</p> 
                                </div>
                                <div className="col-4 txt-center"> 
                                    <img src="/imgs/teck/docker.png" className="adj-img"/> 
                                    <p className="pt-5 skills-txt">Docker</p> 
                                </div>
                                <div className="col-4 txt-center"> 
                                    <img src="/imgs/teck/github-logo.png" className="adj-img"/> 
                                    <p className="pt-5 skills-txt">Git</p> 
                                </div>
                                <div className="col-4 txt-center"> 
                                    <img src="/imgs/teck/ubuntu.png" className="adj-img"/> 
                                    <p className="pt-5 skills-txt">Ubuntu</p> 
                                </div>
                            </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="row">
                <div className="experience padd-15">
                  <h3 className="title">Work Experience</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" />Dec, 2016 to Present
                          </h6>
                          <h4 className="timeline-title"><a href="https://2pirad.com/" target="_target">TwoPiRadian Infotech Pvt Ltd</a></h4>
                          <h5 className="timeline-desc">Senior Software Engineer</h5>
                          <ul className="timeline-text" style={{'padding':'12px'}} >
                                <li>Developed full-stack enterprise web applications using Java, JavaScript, and TypeScript, leveraging Spring MVC and Spring Boot to create high-performance, secure, and scalable back-end architectures.</li>
                                <li>Developed RESTful APIs and microservices for distributed systems using Node.js, Express, and Apache Kafka for real-time data streaming and inter-service communication.</li>
                                <li>Engineered front-end solutions with React and AngularJS, creating dynamic, responsive user interfaces and enhancing client-side performance with HTML5, CSS3, and JavaScript.</li>
                                <li>Built customizable widgets to enhance user interface flexibility and improve the user experience, enabling personalized data views and interactions.</li>
                                <li>Implemented interactive graphs using JavaScript libraries to visualize complex data sets, improving decision-making and data analysis capabilities for end-users.</li>
                                <li>Integrated Snaplogic for ETL development, automating data pipelines and orchestrating seamless data flow between systems, including SQL databases and MongoDB.</li>
                                <li>Designed and optimized complex queries for SQL and MongoDB, ensuring efficient data storage, retrieval, and manipulation to support high-traffic web applications.</li>
                                <li>Implemented stream processing and real-time analytics using Apache Kafka, improving data consistency and scalability for critical business operations.</li>
                                <li>Collaborated with cross-functional teams including QA, DevOps, and product management to ensure seamless integration and deployment of software components.</li>
                                <li>Mentored junior developers, leading code reviews and fostering a collaborative development environment focused on high-quality, efficient coding standards.</li>
                          </ul>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" />Feb, 2015 to Nov, 2016
                          </h6>
                          <h4 className="timeline-title"><a href="https://www.keevestechnologies.com/" target="_target">Keeves Technologies Private Limited</a></h4>
                          <h5 className="timeline-desc">Software Engineer</h5>
                          <ul className="timeline-text" style={{'padding':'12px'}} >
                                <li>Developed and maintained web applications using Java and JavaScript to optimize logistics operations and improve user experience.</li>
                                <li>Implemented dynamic and interactive features using jQuery, enhancing responsiveness and usability of the web interfaces.</li>
                                <li>Collaborated with UI/UX designers to create mobile-responsive and cross-browser compatible layouts using HTML5 and CSS3.</li>
                                <li>Integrated third-party APIs to streamline real-time data exchange between the logistics platform and external systems.</li>
                                <li>Wrote JUnit Test Cases and performed Sanity Testing.</li>
                                <li>Optimized performance by refactoring front-end code, reducing page load times, and improving overall application speed.</li>
                                <li>Worked closely with the QA team to troubleshoot and resolve issues, ensuring smooth deployment and stable production releases.</li>
                          </ul>
                        </div>
                        {/* Timeline Item end */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="education padd-15">
                  <h3 className="title">Education</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2011 to 2015
                          </h6>
                          <h4 className="timeline-title">
                            Bachelor of Technology in Electronics & Communication Engineering
                          </h4>
                          <p className="timeline-text">
                            In 2015, I graduated from <a href="https://svist.org/" target="_target"><strong>Swami Vivekananda Institute of Science and Technology</strong></a> with a degree in Electronics & Communication Engineering.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2004 to 2011
                          </h6>
                          <h4 className="timeline-title">
                            Higher Secondary & Secondary School Certificate
                          </h4>
                          <p className="timeline-text">
                            In 2011 I passed Higher Secondary Exam from Science Group. My school name was <strong>Jadavpur Baghajatin High School</strong>.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
