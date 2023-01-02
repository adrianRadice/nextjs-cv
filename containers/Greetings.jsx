import React, { useEffect, useRef } from "react";
import { greetings } from "../constants/portfolio-info";

import { Button, Col, Container, Row } from "reactstrap";

import { Icon } from "@iconify/react";
import GreetingLottie from "../components/DisplayLottie";
import SocialLinks from "../components/SocialLinks";

const Greetings = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  });

  const spanHand = useRef();
  const moveHand = (e) => {
    debugger;
    e.target.classList.add("active");
    e.target.addEventListener("animationend", (e) => {
      e.target.classList.remove("active");
    });
    console.log(spanHand);
  };

  return (
    <main>
      <div className="position-relative">
        <section className="section section-lg section-shaped pb-250">
          <div className="shape shape-style-1 bg-gradient-info">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <main class="title-container">
            <div class="greeting-title">
              <span class="word">
                <span onClick={(e) => moveHand(e)} ref={spanHand}>
                  👋
                </span>
              </span>
              I'm
            </div>

            <section class="animation">
              <div class="first greeting-title  ">
                <div>Adrian</div>
              </div>
              <div class="second greeting-title  ">
                <div>Full Stack</div>
              </div>
              <div class="third greeting-title ">
                <div>Enginier</div>
              </div>
            </section>
          </main>
          <Container className="py-lg-md d-flex">
            <div className="col px-0">
              <Row>
                <Col lg="6">
                  <p className="lead text-white">{greetings.description}</p>
                  <SocialLinks />
                  <div className="btn-wrapper my-4">
                    <Button
                      className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                      color="default"
                      href={greetings.resumeLink}
                    >
                      <span className="btn-inner--icon mr-1">
                        <i className="fa fa-file" />
                      </span>
                      <span className="btn-inner--text">See My Resume</span>
                    </Button>
                  </div>
                </Col>
                <Col lg="6  main-animation">
                  <GreetingLottie
                    animationPath={`${process.env.NEXT_PUBLIC_BASE_PATH}/lottie/greeting.json`}
                  />
                </Col>
              </Row>
            </div>
          </Container>
          <div class="scroll-indicator">
            <div>Scroll down</div>
            <div>
              <Icon icon={"fa-arrow-down"} data-inline="false"></Icon>
            </div>
          </div>
          {/* SVG separator */}
          <div className="separator separator-bottom separator-skew">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </section>
        {/* 1st Hero Variation */}
      </div>
    </main>
  );
};

export default Greetings;
