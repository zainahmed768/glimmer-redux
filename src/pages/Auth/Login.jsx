import React, { useState } from "react";
import Header from "../../components/Header/Header";
import { Button, Col, Container, Figure, Form, Row } from "react-bootstrap";
import "../../assets/css/auth.css";
import { connectArrow, loginImg } from "../../constant";
import { Link } from "react-router-dom";
import { BsArrowDownRightCircle } from "react-icons/bs";
import { useLoginContentMutation } from "../../redux/services/authApi";

const Login = () => {
	const [login, { response }] = useLoginContentMutation();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	function handleSubmit(e) {
		e.preventDefault();
		let loginData = {
			email: email,
			password: password,
		};
		login(loginData);
		console.log(loginData);
	}
	console.log(email, password);
	return (
		<>
			<Header />
			{/* Login starts here */}
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
							</div>
							<div className="login-form-wrapper mt-4	">
								<Form onSubmit={handleSubmit}>
									<Form.Group className="mb-4 position-relative form-group-email">
										<Form.Control
											type="email"
											value={email}
											onChange={(e) => setEmail(e.target.value)}
											placeholder="Username or Email Address"
										/>
									</Form.Group>
									<Form.Group className="mb-4 position-relative form-group-password">
										<Form.Control
											type="password"
											value={password}
											onChange={(e) => setPassword(e.target.value)}
											placeholder="Enter Password"
										/>
									</Form.Group>
									<Form.Group>
										<Button
											type="submit"
											className="p-0 btn-gradient w-100 py-2"
										>
											<BsArrowDownRightCircle size={36} color="#fff" />
											<span>Login</span>
										</Button>
									</Form.Group>
									<Form.Group className="mt-4">
										<p className="text-white fw-normal text-center">
											<Link className="text-decoration-none text-white" to="/">
												Join Now
											</Link>{" "}
											|{" "}
											<Link
												className="text-decoration-none text-white"
												to="/reset-pass"
											>
												Lost Password?
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
			{/* Login ends here */}
		</>
	);
};

export default Login;
