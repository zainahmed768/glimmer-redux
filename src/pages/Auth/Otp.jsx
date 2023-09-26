import React from "react";
import { Button, Col, Container, Figure, Form, Row } from "react-bootstrap";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import { BsArrowDownRightCircle } from "react-icons/bs";
import { connectArrow, loginImg } from "../../constant";

const Otp = () => {
	return (
		<>
			<Header />
			{/* Login starts here */}
			<section className="login-sec">
				<Container>
					<Row>
						<Col lg={4}>
							<div className="login-heading-wrapper">
								<h3>Enter Otp</h3>
								<h6>Please Enter your Otp</h6>
							</div>
							<div className="login-form-wrapper mt-4	">
								<Form>
									<Form.Group className="mb-4 position-relative d-flex gap-3">
										<Form.Control
											type="number"
											max={1}
											className="px-2 text-center"
										/>
										<Form.Control
											type="number"
											max={1}
											className="px-2 text-center"
										/>
										<Form.Control
											type="number"
											max={1}
											className="px-2 text-center"
										/>
										<Form.Control
											type="number"
											max={1}
											className="px-2 text-center"
										/>
									</Form.Group>

									<Form.Group>
										<Button
											type="submit"
											className="p-0 btn-gradient w-100 py-2"
										>
											<BsArrowDownRightCircle size={36} color="#fff" />
											<span>Submit</span>
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

export default Otp;
