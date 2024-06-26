import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { HashLink } from "react-router-hash-link";


export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "frontend Developer", "Backend Developer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
      }
    }

  return (
    
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                
                <h1>{`👋 I'm Ansh`} <br /><span className="txt-rotate" dataperiod="1000" data-rotate='[ "Web Developer", "frontend Developer", "Backend Developer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>An Enthusiastic Student and an insistent learner , always striving for knowledge and growth,  constantly seeking new challenges. Committed to deepening understanding and applying knowledge through hands-on projects. Embrace every line of code as an opportunity for continuous improvement, viewing the programming journey as a path of perpetual discovery and skill enhancement.</p>
                 
                  <button onClick={() => console.log('connect')}>Let’s Connect 
                  <ArrowRightCircle size={25} /></button>
                  
                  <div className="social-icon-banner">
              <a href="https://linkedin.com/in/anshhvarma" target='_blank'><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/ANSHHVARMA" target='_blank' ><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/anshhvarma/" target='_blank' ><img src={navIcon3} alt="Icon" /></a>
            </div>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  {/* <img className='header-img' src={headerImg} alt="Header Img"/> */}
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
    
  )
}
