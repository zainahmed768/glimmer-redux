import React, { useEffect, useMemo, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import PageHeader from "../../components/PageHeader/PageHeader";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Select from "react-select";
import countryList from "react-select-country-list";
import "../../assets/css/membership.css";
import { BsArrowDownRightCircle } from "react-icons/bs";

const MembershipCheckout = () => {
	const pagename = {
		name: "Checkout",
	};
	const [value, setValue] = useState("");
	const options = useMemo(() => countryList().getData(), []);
	const changeHandler = (value) => {
		setValue(value);
	};
	let months = [];
	// expiration date
	for (var i = 1; i < 13; i++) {
		months.push({ month: i++ });
		console.log(i);
	}

	return (
		<>
			<Header />
			<PageHeader {...pagename} />
			{/* Membership checkout starts here */}
			<section className="membership-checkout">
				<Container>
					<Row>
						<Col lg={7}>
							<div className="membsrship-checkout-wrapper">
								<div className="membership-checkout-heading-wrapper d-flex">
									<h4>Enter Billing Details</h4>
									<span>
										Already have an account?{" "}
										<Link to="/login" className="text-info">
											Log in here
										</Link>
									</span>
								</div>
								<div className="membership-checkout-form-wrapper">
									<Form>
										<Form.Group className="mb-3">
											<Form.Label>User Name</Form.Label>
											<Form.Control placeholder="User Name" type="text" />
										</Form.Group>
										<Form.Group className="mb-3">
											<Form.Label>Password</Form.Label>
											<Form.Control placeholder="Password" type="password" />
										</Form.Group>
										<Form.Group className="mb-3">
											<Form.Label>Confirm Password</Form.Label>
											<Form.Control
												placeholder="Confirm Password"
												type="password"
											/>
										</Form.Group>
										<Form.Group className="mb-3">
											<Form.Label>Email Address</Form.Label>
											<Form.Control placeholder="Email Address" type="email" />
										</Form.Group>
										<Form.Group className="mb-3">
											<Form.Label>Confirm Email Address</Form.Label>
											<Form.Control
												placeholder="Confirm Email Address"
												type="text"
											/>
										</Form.Group>
										<Form.Group className="mb-3">
											<div className="biling-heading-wrapper">
												<h4>Billing Address</h4>
											</div>
										</Form.Group>
										<Form.Group className="mb-3">
											<Form.Label>First Name</Form.Label>
											<Form.Control placeholder="First Name" type="text" />
										</Form.Group>
										<Form.Group className="mb-3">
											<Form.Label>Last Name</Form.Label>
											<Form.Control placeholder="Password" type="text" />
										</Form.Group>
										<Form.Group className="mb-3">
											<Form.Label>Address 1</Form.Label>
											<Form.Control placeholder="Address 1" type="text" />
										</Form.Group>
										<Form.Group className="mb-3">
											<Form.Label>Address 2</Form.Label>
											<Form.Control placeholder="Address 2" type="text" />
										</Form.Group>
										<Form.Group className="mb-3">
											<Form.Label>City</Form.Label>
											<Form.Control placeholder="City" type="text" />
										</Form.Group>
										<Form.Group className="mb-3">
											<Form.Label>State</Form.Label>
											<Form.Control placeholder="State" type="text" />
										</Form.Group>
										<Form.Group className="mb-3">
											<Form.Label>Postal Code</Form.Label>
											<Form.Control placeholder="Postal Code" type="text" />
										</Form.Group>
										<Form.Group className="mb-3">
											<Form.Label>Country</Form.Label>
											<Select
												className="form-selects"
												options={options}
												value={value}
												onChange={changeHandler}
											/>
										</Form.Group>
										<Form.Group className="mb-3">
											<Form.Label>Phone</Form.Label>
											<Form.Control type="phone" placeholder="Phone" />
										</Form.Group>
										<Form.Group className="mb-3">
											<div className="membership-checkout-heading-wrapper py-4 d-flex">
												<h4>Payment Information</h4>
												<span>
													We Accept Visa, Mastercard, American Express, and
													Discover
												</span>
											</div>
										</Form.Group>
										<Form.Group className="mb-3">
											<Form.Label>Card Number</Form.Label>
											<Form.Control type="number" />
										</Form.Group>
										<Form.Group className="mb-3">
											<Row>
												<Col lg={6}>
													<Form.Label>Card Number</Form.Label>
													<Form.Control type="number" />
												</Col>
												<Col lg={6}>
													<Form.Label>Card Number</Form.Label>
													<Form.Select>
														{months.map((item) => {
															return (
																<option value={item?.month}>
																	{item?.month}
																</option>
															);
														})}
													</Form.Select>
												</Col>
											</Row>
										</Form.Group>
										<Form.Group className="mb-3">
											<Row className="align-items-end">
												<Col lg={6}>
													<Form.Label>Security Code (CVC)</Form.Label>
													<Form.Control type="number" />
												</Col>
												<Col lg={6}>
													<span>
														(<Link className="text-info">what's this?</Link>)
													</span>
												</Col>
											</Row>
										</Form.Group>
									</Form>
								</div>
							</div>
						</Col>
						<Col lg={5}>
							<Card className="p-4 border-info order-summary">
								<Card.Body className="p-0">
									<Card.Title className="text-dark">
										Order Summary <Link className="text-info">change</Link>{" "}
									</Card.Title>
									<p>
										My Membership <b>Premium</b> membership level.
									</p>
									<p>
										Lorem Ipsum is dummy text of the typesetting industry. Lorem
										Ipsum has been the industry’s text.
									</p>
									<p className="mb-0">
										The price for membership is <b>$4.99 per Month.</b>
									</p>
								</Card.Body>
							</Card>
						</Col>
					</Row>
					<Row>
						<Col lg={12}>
							<div className="btn-wrapper text-end">
								<Button className="btn-gradient">
									<BsArrowDownRightCircle size={36} color="#fff" />
									<span>Checkout</span>
								</Button>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
			{/* Membership checkout ends here */}
			<Footer />
		</>
	);
};

export default MembershipCheckout;
