import React from 'react';
import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import POP from '../../assets/img/POP.png';

const Home = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ['Web Developer', 'Web Designer','Python Developer','Data Analyst'];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div>
      <Container className=' mt-3'>
        <Row className="align-items-center flex gap-6 items-center mx-4">
          {/* Writing Section */}
          <Col xs={12} md={6} xl={7}>
            <span
              className="tagline text-white font-bold tracking-wider px-2.5 py-2 bg-gradient-to-r from-[rgba(170,54,124,0.5)] to-[rgba(74,47,189,0.5)] border border-[rgba(160,80,182,0.5)] text-lg mb-4 inline-block"
            >
              Welcome to my portfolio
            </span>
            <h1 className=' text-white text-2xl font-semibold'>
              {`Hi I am Abhishek ,I am a `}
              <span
                className="txt-rotate"
                dataPeriod="1000"
                data-rotate='[ "Web Developer", "Web Designer" ,"Python developer","Data Analyst"]'
              />
              <span className="wrap text-white text-2xl font-semibold">{text}</span>
            </h1>
            <br/>
            <p className='text-[#B8B8B8] text-[18px] tracking-[0.8px] leading-[1.5em] w-[96%]'>
            Passionate web developer, designer, Python developer, and data analyst skilled in creating 
              <br/> responsive. visually appealing websites and deriving insights from data. 
              <p>Combining creativity with technical expertise to deliver seamless user experiences and innovative digital solutions.</p>
            </p>
          </Col>

          {/* Image Section */}
          <Col xs={12} md={6} xl={5} className="d-none d-md-block">
            <img src={POP} alt="POP" className="img-fluid " />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
