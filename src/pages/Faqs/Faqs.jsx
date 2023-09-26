import React from "react";
import Header from "../../components/Header/Header";
import PageHeader from "../../components/PageHeader/PageHeader";
import Footer from "../../components/Footer/Footer";
import {
	Accordion,
	Button,
	Col,
	Container,
	Figure,
	Form,
	Row,
} from "react-bootstrap";
import { faqImg } from "../../constant";
import "../../assets/css/faq.css";
import { BsArrowDownRightCircle } from "react-icons/bs";
const Faqs = () => {
	const pagename = {
		name: "FAQs/Customer Support",
	};
	return (
		<>
			<Header />
			<PageHeader {...pagename} />
			{/* faqs starts here */}
			<section className="faq-sec">
				<Container>
					<Row className="align-items-center">
						<Col lg={8}>
							<div className="faq-heading-wrapper mb-5">
								<h3 className="text-dark">Frequently Asked Questions</h3>
							</div>
							<div className="faq-wrapper">
								<Accordion defaultActiveKey="0">
									<Accordion.Item eventKey="0">
										<Accordion.Header>
											What’s included in the free membership?
										</Accordion.Header>
										<Accordion.Body>
											You can join unlimited groups, like up to 3 profiles a
											week, send one free message a day to a member you matched
											with, see who is viewing your profile.
										</Accordion.Body>
									</Accordion.Item>
									<Accordion.Item eventKey="1">
										<Accordion.Header>
											What do I get for a paid membership?
										</Accordion.Header>
										<Accordion.Body>
											You can join unlimited groups, unlimited matches,
											unlimited star likes, unlimited matching, weekly profile
											boost, discounts for Glimmer events.
										</Accordion.Body>
									</Accordion.Item>
									<Accordion.Item eventKey="2">
										<Accordion.Header>
											What are the options of length for memberships?
										</Accordion.Header>
										<Accordion.Body>
											<p>
												Free trial is 7 days <br /> Monthly membership <br />
												Annual membership
											</p>
										</Accordion.Body>
									</Accordion.Item>
									<Accordion.Item eventKey="3">
										<Accordion.Header>
											Will my membership be renewed automatically?
										</Accordion.Header>
										<Accordion.Body>
											Yes, unless you request it to be cancelled. You will be
											notified if your membership is expiring soon.
										</Accordion.Body>
									</Accordion.Item>
									<Accordion.Item eventKey="4">
										<Accordion.Header>
											What disabilities are included for people who join?
										</Accordion.Header>
										<Accordion.Body>
											The list is included in the getting to know you section.
											It is a comprehensive list of disabilities, and we are
											open to adding more to the list at any time.
										</Accordion.Body>
									</Accordion.Item>
									<Accordion.Item eventKey="5">
										<Accordion.Header>
											Will I be able to limit age range, sex, distance and
											disabilities for people I want to meet?
										</Accordion.Header>
										<Accordion.Body>
											Yes, you will have the ability to customize your search
											for friends and significant others.
										</Accordion.Body>
									</Accordion.Item>
									<Accordion.Item eventKey="6">
										<Accordion.Header>
											If I am concerned about someone I meet online, what steps
											should I take?
										</Accordion.Header>
										<Accordion.Body>
											You will have the option to block someone. You should also
											report anything you are uncomfortable about to support
										</Accordion.Body>
									</Accordion.Item>
									<Accordion.Item eventKey="7">
										<Accordion.Header>
											Will the site be secure?
										</Accordion.Header>
										<Accordion.Body>
											Yes, we are using 2-point identification to protect you
											from bots.
										</Accordion.Body>
									</Accordion.Item>
									<Accordion.Item eventKey="8">
										<Accordion.Header>Do you have an app?</Accordion.Header>
										<Accordion.Body>
											Right now, we have the website for the computer and a
											mobile site for your phone. We expect to reintroduce an
											app soon.
										</Accordion.Body>
									</Accordion.Item>
									<Accordion.Item eventKey="9">
										<Accordion.Header>
											Will I only meet people in the United States?
										</Accordion.Header>
										<Accordion.Body>
											No, our site is available to people with disabilities all
											over the world.
										</Accordion.Body>
									</Accordion.Item>
								</Accordion>
							</div>
						</Col>
						<Col lg={4}>
							<div className="faq-img-wrapper">
								<Figure>
									<Figure.Image src={faqImg} fluid />
								</Figure>
							</div>
						</Col>
					</Row>
					<Row className="mt-5 pt-5 question-row">
						<Col lg={3}></Col>
						<Col lg={6}>
							<div className="question-card-wrapper border border-info p-5">
								<div className="question-heading-wrapper">
									<h3 className="text-dark text-center">
										Have any Question? Ask away!
									</h3>
									<p className="text-dark text-center">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit
									</p>
								</div>
								<div className="question-form-wrapper">
									<Form>
										<Form.Group className="mb-4 form-group-email position-relative">
											<Form.Control
												type="email"
												placeholder="Enter Email"
												required
											/>
										</Form.Group>
										<Form.Group className="mb-4 form-group-query position-relative">
											<Form.Control
												type="text"
												placeholder="Write Your Query here"
												required
											/>
										</Form.Group>
										<Form.Group className="mb-4">
											<Button type="submit" className="btn btn-gradient w-100">
												<BsArrowDownRightCircle size={25} color="#fff" />
												<span>Submit</span>
											</Button>
										</Form.Group>
									</Form>
								</div>
							</div>
						</Col>
						<Col lg={3}></Col>
					</Row>
				</Container>
			</section>
			{/* faqs ends here */}
			<Footer />
		</>
	);
};

export default Faqs;
