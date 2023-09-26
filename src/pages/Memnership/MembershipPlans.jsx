import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import PageHeader from "../../components/PageHeader/PageHeader";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "../../assets/css/membership.css";
import { BsArrowDownRightCircle, BsFillCheckCircleFill } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";

const MembershipPlans = () => {
  const pagename = {
    name: "Blogs",
  };
  return (
    <>
      <Header />
      <PageHeader {...pagename} />
      {/* membership plan starts here */}
      <section className="membership-plans">
        <Container>
          <Row>
            <Col lg={4}>
              <div className="membership-content-wrapper">
                <h4 className="text-dark mb-4">Plans to Join Glimmer</h4>
                <h5 className="text-dark">FREE Membership</h5>
                <p className="mb-4">
                  Available to anyone until cancelled by member No credit card
                  required.
                </p>
                <h5 className="text-dark">PREMIUM Membership</h5>
                <p>
                  Monthly charge of $4.99 with fifth week free. You may use the
                  free week one time. After that your membership will auto renew
                  unless cancelled according to Terms of Use. Credit card on
                  file is required.
                </p>
                <p>
                  Annual membership – 12 months with 12<sup>th</sup> month free
                  – $54.89 total charge for one year. Membership will auto renew
                  unless cancelled according to Terms of Use. Credit card on
                  file is required.
                </p>
                <p>Annual membership is for 1 year of service.</p>
                <div className="plan-question-btn-wrapper py-3 d-flex justify-content-between align-items-center">
                  <div className="question-btn-heading-wrapper">
                    <h6 className="text-dark mb-0">Have any Question?</h6>
                  </div>
                  <Button
                    href="/contact-us"
                    className="btn btn-gradient text-light"
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
            </Col>
            <Col lg={4} className="d-flex flex-column align-self-stretch">
              <div className="membership-plans-card-wrapper border border-primary">
                <div className="plan-heading-wrapper">
                  <h4 className="text-dark">Free</h4>
                </div>
                <div className="plan-list-wrapper">
                  <ul className="list-unstyled">
                    <li>
                      <BsFillCheckCircleFill />
                      <span>Join unlimited groups</span>
                    </li>
                    <li>
                      <BsFillCheckCircleFill />
                      <span>View unlimited profiles</span>
                    </li>
                    <li>
                      <BsFillCheckCircleFill />
                      <span>Star (like) 3 profiles a week</span>
                    </li>
                    <li>
                      <BsFillCheckCircleFill />
                      <span>
                        Send one free message a day to a member you've matched
                        with
                      </span>
                    </li>
                    <li>
                      <BsFillCheckCircleFill />
                      <span>See who is viewing your profile</span>
                    </li>
                    <li>
                      <AiOutlineCloseCircle />
                      <span>Unlimited strring (liking) other profiles</span>
                    </li>
                    <li>
                      <AiOutlineCloseCircle />
                      <span>Unlimited matches</span>
                    </li>
                    <li>
                      <AiOutlineCloseCircle />
                      <span>Unlimited messaging</span>
                    </li>
                    <li>
                      <AiOutlineCloseCircle />
                      <span>Weekly profile boost</span>
                    </li>
                    <li>
                      <AiOutlineCloseCircle />
                      <span>Special discounts for Glimmer events</span>
                    </li>
                  </ul>
                </div>
                <div className="plans-btn-wrapper">
                  <Button href="" className="btn-gradient w-100">
                    <BsArrowDownRightCircle size={28} color="#fff" />
                    <span>Start Now</span>
                  </Button>
                </div>
              </div>
            </Col>
            <Col lg={4} className="d-flex flex-column align-self-stretch">
              <div className="membership-plans-card-wrapper border border-info">
                <div className="plan-heading-wrapper d-flex flex-lg-wrap flex-nowrap justify-content-between">
                  <div className="plan-txt-wrapper">
                    <h4 className="text-dark">Premium</h4>
                    <div className="plan-switch-wrapper">
                      <h6>Switch to Yearly</h6>
                      <Form.Check // prettier-ignore
                        type="switch"
                        id="custom-switch"
                      />
                    </div>
                  </div>
                  <div className="plan-price-wrapper">
                    <h4 className="text-dark">$4.99/</h4>
                    <h6>Monthly</h6>
                  </div>
                </div>
                <div className="plan-list-wrapper">
                  <ul className="list-unstyled">
                    <li>
                      <BsFillCheckCircleFill />
                      <span>Join unlimited groups</span>
                    </li>
                    <li>
                      <BsFillCheckCircleFill />
                      <span>View unlimited profiles</span>
                    </li>
                    <li>
                      <BsFillCheckCircleFill />
                      <span>See who is viewing your profile</span>
                    </li>
                    <li>
                      <BsFillCheckCircleFill />
                      <span>Unlimited starring (liking) other profiles</span>
                    </li>
                    <li>
                      <BsFillCheckCircleFill />
                      <span>Unlimited matches</span>
                    </li>
                    <li>
                      <BsFillCheckCircleFill />
                      <span>Unlimited messaging</span>
                    </li>
                    <li>
                      <BsFillCheckCircleFill />
                      <span>Weekly profile boost</span>
                    </li>
                    <li>
                      <BsFillCheckCircleFill size={20} />
                      <span>Special discounts for Glimmer events</span>
                    </li>
                  </ul>
                </div>
                <div className="plans-btn-wrapper">
                  <Button href="" className="btn-gradient w-100">
                    <BsArrowDownRightCircle size={28} color="#fff" />
                    <span>Subscribe Now</span>
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* membership plan ends here */}
      <Footer />
    </>
  );
};

export default MembershipPlans;
