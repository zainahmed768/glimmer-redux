import React, { Fragment } from "react";
import {
	Button,
	Col,
	Container,
	Form,
	Image,
	Row,
	Stack,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { footerLogo } from "../../constant";
import {
	BsArrowDownRightCircle,
	BsFacebook,
	BsInstagram,
	BsTiktok,
	BsTwitter,
} from "react-icons/bs";

const Footer = () => {
	return (
		<Fragment>
			<footer id="footer">
				<Container>
					<Row>
						<Col lg={2}>
							<div className="footer-widget-wrapper">
								<div className="footer-logo-wrapper">
									<Link to="/">
										<Image
											src={footerLogo}
											className="border-bottom border-white pb-4"
											fluid
										/>
									</Link>
								</div>
								<div className="footer-social-icons-wrapper mt-4">
									<ul className="list-unstyled gap-2 d-flex">
										<li>
											<Link to="#">
												<BsTiktok color="#0c71b9" />
											</Link>
										</li>
										<li>
											<Link to="#">
												<BsInstagram color="#0c71b9" />
											</Link>
										</li>
										<li>
											<Link to="#">
												<BsFacebook color="#0c71b9" />
											</Link>
										</li>
										<li>
											<Link to="#">
												<BsTwitter color="#0c71b9" />
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</Col>
						<Col lg={8}>
							<Stack
								direction="horizontal"
								className="justify-content-around align-items-start"
								gap={3}
							>
								<div className="footer-links-wrapper">
									<div className="footer-heading-wrapper mb-5">
										<h6>Legal</h6>
									</div>
									<div className="footer-link-wrapper">
										<ul className="list-unstyled">
											<li className="mb-1">
												<Link
													className="text-decoration-none text-white fw-light "
													to="/glimmer-bill-of-rights"
												>
													Glimmer Bill of Rights
												</Link>
											</li>
											<li className="mb-1">
												<Link
													className="text-decoration-none text-white fw-light"
													to="/community-guidelines"
												>
													Community Guidelines
												</Link>
											</li>
											<li className="mb-1">
												<Link
													className="text-decoration-none text-white fw-light"
													to="/terms-of-use"
												>
													Terms of Use
												</Link>
											</li>
										</ul>
									</div>
								</div>
								<div className="footer-links-wrapper">
									<div className="footer-heading-wrapper mb-5">
										<h6>Quick links</h6>
									</div>
									<div className="footer-link-wrapper">
										<ul className="list-unstyled">
											<li className="mb-1">
												<Link
													className="text-decoration-none text-white fw-light "
													to="/"
												>
													Our Story
												</Link>
											</li>
											<li className="mb-1">
												<Link
													className="text-decoration-none text-white fw-light"
													to="/"
												>
													Cancel membership
												</Link>
											</li>
										</ul>
									</div>
								</div>
								<div className="footer-links-wrapper">
									<div className="footer-heading-wrapper mb-5">
										<h6>Services</h6>
									</div>
									<div className="footer-link-wrapper">
										<ul className="list-unstyled">
											<li className="mb-1">
												<Link
													className="text-decoration-none text-white fw-light "
													to="/faqs"
												>
													Frequently Asked Questions
												</Link>
											</li>
											<li className="mb-1">
												<Link
													className="text-decoration-none text-white fw-light"
													to="/dating-tips"
												>
													Meeting and Dating Safety
												</Link>
											</li>
										</ul>
									</div>
								</div>
							</Stack>
						</Col>
						<Col lg={2}>
							<div className="news-letter-wrapper">
								<div className="newsletter-heading-wrapper">
									<h6 className="text-center text-white mb-5">
										Subscribe to Newsletter
									</h6>
									<div className="newsletter-form-wrapper border-bottom border-white pb-4">
										<Form>
											<Form.Group>
												<Form.Control
													type="email"
													id="inputPassword5"
													className="border-white"
													placeholder="Enter Email"
													aria-describedby="passwordHelpBlock"
												/>
												<Button
													rounded={true}
													className="ps-3 py-2 mt-3 w-100 btn-gradient"
												>
													<BsArrowDownRightCircle size={26} color="#fff" />
													<span className="pe-4 fw-bold">Subscribe</span>
												</Button>
											</Form.Group>
										</Form>
									</div>
									<div className="copyright-wrapper mt-3">
										<p className="text-white">
											Copyright. All Rights Reserved.
										</p>
									</div>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</footer>
		</Fragment>
	);
};

export default Footer;
