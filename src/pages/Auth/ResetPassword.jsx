import React from "react";
import Header from "../../components/Header/Header";
import { Button, Col, Container, Figure, Form, Row } from "react-bootstrap";
import { connectArrow, loginImg } from "../../constant";
import { Link } from "react-router-dom";
import { BsArrowDownRightCircle } from "react-icons/bs";

const ResetPassword = () => {
	return (
		<>
			<Header />
			{/* Reset starts here */}
			<section className="login-sec">
				<Container>
					<Row>
						<Col lg={4}>
							<div className="login-heading-wrapper">
								<h5>LOGIN NOW</h5>
								<h3>Login User</h3>
								<h6>
									Don't have an Account?{" "}
									<Link className="text-decoration-none text-white" to="/">
										Sign up
									</Link>
								</h6>
								<p className="text-white" style={{ fontSize: "13px" }}>
									Please enter your username or email address. You will receive
									a link to create a new password via email.
								</p>
							</div>
							<div className="login-form-wrapper mt-4	">
								<Form action="/login/">
									<Form.Group className="mb-4 position-relative form-group-email">
										<Form.Control
											type="email"
											placeholder="Username or Email Address"
										/>
									</Form.Group>
									<Form.Group>
										<Button
											type="submit"
											className="p-0 btn-gradient w-100 py-2"
										>
											<BsArrowDownRightCircle size={36} color="#fff" />
											<span>Get New Password</span>
										</Button>
									</Form.Group>
									<Form.Group className="mt-4">
										<p className="text-white fw-normal text-center">
											<Link
												className="text-decoration-none text-white"
												to="/login"
											>
												Log In
											</Link>{" "}
											|{" "}
											<Link
												className="text-decoration-none text-white"
												to="/register"
											>
												Join Now
											</Link>
										</p>
									</Form.Group>
								</Form>
							</div>
						</Col>
						<Col lg={2}>
							<Figure>
								<Figure.Image src={connectArrow} />
							</Figure>
						</Col>
						<Col lg={6}>
							<Figure className="mb-0">
								<Figure.Image src={loginImg} fluid className="mb-0" />
							</Figure>
						</Col>
					</Row>
				</Container>
			</section>
			{/* Reset ends here */}
		</>
	);
};

export default ResetPassword;
