import React from "react";
import Header from "../../components/Header/Header";
import PageHeader from "../../components/PageHeader/PageHeader";
import Footer from "../../components/Footer/Footer";
import {
	Button,
	Col,
	Container,
	FloatingLabel,
	Form,
	Row,
} from "react-bootstrap";
import "../../assets/css/contact-us.css";
import { BsArrowDownRightCircle } from "react-icons/bs";
const ContactUs = () => {
	const pagename = {
		name: "Contact us",
	};
	return (
		<>
			<Header />
			<PageHeader {...pagename} />
			{/* Contact starts here */}
			<section className="contact-sec">
				<Container>
					<Row>
						<Col lg={6}>
							<div className="contact-form-wrapper">
								<Form>
									<Row className="mb-4">
										<Form.Group as={Col}>
											<Form.Label>First Name</Form.Label>
											<Form.Control
												type="text"
												placeholder="Enter First Name"
											/>
										</Form.Group>
										<Form.Group as={Col}>
											<Form.Label>Last Name</Form.Label>
											<Form.Control type="text" placeholder="Enter Last Name" />
										</Form.Group>
									</Row>
									<Row className="mb-4">
										<Form.Group as={Col}>
											<Form.Label>Enter Email</Form.Label>
											<Form.Control type="email" placeholder="Enter Email" />
										</Form.Group>
										<Form.Group as={Col}>
											<Form.Label>Phone</Form.Label>
											<Form.Control type="phone" placeholder="Enter Phone" />
										</Form.Group>
									</Row>
									<Row className="mb-4">
										<Form.Group as={Col}>
											<Form.Label>Subject</Form.Label>
											<Form.Select aria-label="Default select example">
												<option value="Support Issue">Support Issue</option>
												<option value="Ask Glimmer">Ask Glimmer</option>
												<option value="Report a Problem">
													Report a Problem
												</option>
											</Form.Select>
										</Form.Group>
									</Row>
									<Row className="mb-4">
										<Form.Group as={Col}>
											<Form.Label>Message</Form.Label>
											{/* <FloatingLabel
												controlId="floatingTextarea2"
												label="Type Your Message"
											> */}
											<Form.Control rows={4} as="textarea" />
											{/* </FloatingLabel> */}
										</Form.Group>
									</Row>
									<Row>
										<Col lg={12}>
											<Button variant="primary" className="w-100 text-light">
												<BsArrowDownRightCircle size={36} color="#fff" />
												<span className="ms-3">Submit</span>
											</Button>
										</Col>
									</Row>
								</Form>
							</div>
						</Col>
						<Col lg={6}>
							<div className="mapouter">
								<div className="gmap_canvas">
									<iframe
										className="gmap_iframe"
										frameBorder="0"
										scrolling="no"
										marginHeight="0"
										marginWidth="0"
										src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=lastminute.com London Eye&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
									></iframe>
									<a href="https://gachanymph.com/">Gacha Nymph APK</a>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
			{/* Contact ends here */}
			<Footer />
		</>
	);
};

export default ContactUs;
