import styled from "styled-components";

function Hero() {
  return (
    <HeroSection className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-shade" />
      <div className="hero-content">
        <h1 id="hero-title">BUCSSA</h1>
        <p>波士顿大学中国学生学者联合会</p>
      </div>
      <span className="scroll-cue">
        SCROLL TO EXPLORE
        <span aria-hidden="true">↓</span>
      </span>
    </HeroSection>
  );
}

const HeroSection = styled.section`
  && {
    height: min(100svh, 970px);
    min-height: 650px;
    background-image: linear-gradient(180deg, rgba(8, 12, 18, 0.3), rgba(8, 12, 18, 0.12) 42%, rgba(8, 12, 18, 0.48)), url("/assets/home/hero-boston.png");
    background-position: center;
    background-size: cover;
  }

  .hero-shade { display: none; }
  .hero-content { margin-left: clamp(28px, 5.5vw, 94px); padding-top: 124px; }
  .hero-content h1 { margin: 0; font-size: clamp(72px, 8vw, 120px); letter-spacing: 0.19em; }
  .hero-content p { margin: 4px 0 0; font-size: clamp(24px, 2.7vw, 45px); letter-spacing: 0.16em; }

  @media (max-width: 740px) {
    && { min-height: 610px; }
    .hero-content { margin-left: 26px; padding-top: 74px; }
    .hero-content h1 { letter-spacing: 0.12em; }
    .hero-content p { max-width: 310px; line-height: 1.45; }
  }
`;

export default Hero;
