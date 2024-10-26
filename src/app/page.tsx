import CanvasBackground from "@/components/animation/CanvasBackground"

export default async function Home() {

  return (
    <main>
      <section className="home section" id="home">
        <div className="container">
            <CanvasBackground />
          <div className="intro">
            <img
              src="/imgs/subrata-ghosh.png"
              alt="Subrata Ghosh Profile"
              className="shadow-dark"
            />
            <h1>Subrata Ghosh</h1>
            <p>Full Stack Web Application Developer</p>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/subrata-ghosh-90465695/" aria-label="Go to linkedin"  target="_blank">
                <i className="fa fa-linkedin" />
              </a>
              <a href="https://github.com/subrataghosh" aria-label="Go to github" target="_blank">
                <i className="fa fa-github" />
              </a>
              <a href="https://stackoverflow.com/users/7693739/subratag"  aria-label="Go to stack-overflow" target="_blank">
                <i className="fa fa-stack-overflow" />
              </a>
              <a href="https://www.facebook.com/share/127C5VyWhNH/"  aria-label="Go to facebook" target="_blank">
                <i className="fa fa-facebook" />
              </a>
              <a href="https://www.instagram.com/subrata___ghosh/" aria-label="Go to instgram" target="_blank">
                <i className="fa fa-instagram" />
              </a>
            </div>
            <a href="/about" className="show-more-a" >
            <img
              src="/imgs/find-more.png"
              alt="Subrata Ghosh Show more"
              className="show-more"
            />
            <div className="hover-text">Know more about me!</div>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
