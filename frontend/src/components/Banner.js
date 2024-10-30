import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
              <div className={"animate__animated animate__fadeIn"}>
                <h1>Welcome to the Stargazer Community!</h1>
                  <p>Stargazer is your go-to spot if you're fascinated by the night sky and all its wonders. Whether you're a seasoned stargazer or just starting to explore, this is a space for everyone who loves space! Here, you can meet other enthusiasts, chat about upcoming cosmic events, share your best shots of the stars, and catch up on the latest news from the universe. Join us, and let’s explore the galaxy together—one constellation at a time!</p>
                  <button onClick={() => console.log('connect')}>Get Started <ArrowRightCircle size={25} /></button>
              </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
