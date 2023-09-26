import React, { useState } from "react";
import Header from "../../components/Header/Header";
import {
	Alert,
	Button,
	Col,
	Container,
	Figure,
	Form,
	Row,
} from "react-bootstrap";
import "../../assets/css/auth.css";
import { connectArrow, loginImg } from "../../constant";
import { Link } from "react-router-dom";
import { BsArrowDownRightCircle } from "react-icons/bs";

const Register = () => {
	const [stepform, setStepForm] = useState(1);
	const [age, setAge] = useState(0);
	const [other, setOther] = useState(false);
	const handleStepForm = () => {
		setStepForm(stepform + 1);
	};
	const handleOther = () => {
		setOther(true);
	};
	const handleAge = (e) => {
		setAge(e.target.value);
	};
	const radioStyle = {
		background: "transparent !important",
	};
	return (
		<>
			<Header />
			{/* Login starts here */}
			<section
				className="login-sec pb-5"
				style={{ paddingTop: stepform == 3 ? "100px" : "200px" }}
			>
				<Container>
					<Row style={{ paddingBottom: "200px" }}>
						<Col lg={6}>
							{stepform == 1 && (
								<div className="login-heading-wrapper">
									<h5>Join Now</h5>
									<h3>Start Free Today</h3>
								</div>
							)}

							<div className="login-form-wrapper mt-4	">
								<Form>
									{stepform == 1 && (
										<Row>
											<Col lg={6}>
												<Form.Group controlId="formFile" className="mb-3">
													<Form.Label className="mb-3 text-white">
														I am
													</Form.Label>
													<Form.Check
														inline
														label="a man"
														name="group1"
														className="d-block radio-wrap"
														type="radio"
														id="i-man-1"
													/>
													<Form.Check
														inline
														label="a woman"
														className="d-block radio-wrap"
														name="group1"
														type="radio"
														id="i-man-2"
													/>
												</Form.Group>
											</Col>
											<Col lg={6}>
												<Form.Group controlId="formFile" className="mb-3">
													<Form.Label className="mb-3 text-white">
														Looking for
													</Form.Label>
													<Form.Check
														inline
														label="a woman"
														className="d-block radio-wrap"
														name="group2"
														type="radio"
														id="l-man-1"
													/>
													<Form.Check
														inline
														label="a man"
														name="group2"
														className="d-block radio-wrap"
														type="radio"
														id="l-man-2"
													/>
												</Form.Group>
											</Col>
										</Row>
									)}
									{stepform == 2 && (
										<Row>
											<Col lg={12}>
												<Form.Group className="mb-4 position-relative form-group-password">
													<Form.Control
														type="text"
														placeholder="What is your First Name?"
													/>
												</Form.Group>
												<Form.Group className="mb-4 position-relative form-group-email">
													<Form.Control type="email" placeholder="Your Email" />
												</Form.Group>
												<Form.Group className="mb-4 position-relative">
													<Form.Label className="fw-bold text-white">
														What is Your Age
													</Form.Label>
													<Form.Range value={age} onChange={handleAge} />
													<p className="text-white">Age: {age}</p>
												</Form.Group>
												<Form.Group className="mb-4 position-relative form-group-pass">
													<Form.Control
														type="password"
														placeholder="Create your password"
													/>
												</Form.Group>
												<Form.Group className="mb-4 position-relative ">
													<Form.Label className="text-white">
														Allow Geo Location
													</Form.Label>
													<Form.Check // prettier-ignore
														type="switch"
														id="custom-switch"
													/>
												</Form.Group>
											</Col>
										</Row>
									)}
									{stepform == 3 && (
										<Row id="step-3">
											<Col lg={12}>
												<Form.Group controlId="formFile" className="mb-3">
													<Form.Check
														inline
														label="I have a disability"
														name="disability"
														className="d-block radio-wrap"
														type="radio"
														id="i-man-1"
													/>
													<Form.Check
														inline
														label="I know someone with a disability"
														className="d-block radio-wrap"
														name="disability"
														type="radio"
														id="i-man-2"
													/>
												</Form.Group>
												<Form.Group>
													<p className="text-white">
														Choose from the options below to make it easier to
														connect with other Glimmer Connect users!
													</p>
												</Form.Group>
												<Form.Group controlId="formFile" className="mb-3">
													<Form.Label className="fw-bold text-white">
														Select the disability from the list of options as
														follows:
													</Form.Label>
													<Row>
														<Col lg={6}>
															<Form.Check
																inline
																label="ADD/ADHD"
																name="disability-list"
																className="d-block radio-wrap"
																type="radio"
																id="ADD/ADHD"
															/>
															<Form.Check
																inline
																label="Amputee"
																name="disability-list"
																className="d-block radio-wrap"
																type="radio"
																id="Amputee"
															/>
															<Form.Check
																inline
																label="Anxiety/Panic Disorder"
																name="disability-list"
																className="d-block radio-wrap"
																type="radio"
																id="Anxiety/Panic Disorder"
															/>
															<Form.Check
																inline
																label="Asperger Syndrome"
																name="disability-list"
																className="d-block radio-wrap"
																type="radio"
																id="AspergerSyndrome"
															/>
															<Form.Check
																inline
																label="Autism"
																name="disability-list"
																className="d-block radio-wrap"
																type="radio"
																id="Autism"
															/>
															<Form.Check
																inline
																label="Cerebral Palsy"
																name="disability-list"
																className="d-block radio-wrap"
																type="radio"
																id="CerebralPalsy"
															/>
															<Form.Check
																inline
																label="Disfigurement"
																name="disability-list"
																className="d-block radio-wrap"
																type="radio"
																id="Disfigurement"
															/>
															<Form.Check
																inline
																label="Hearing Impaired"
																name="disability-list"
																className="d-block radio-wrap"
																type="radio"
																id="HearingImpaired"
															/>
															<Form.Check
																inline
																label="Learning Disabilities"
																name="disability-list"
																className="d-block radio-wrap"
																type="radio"
																id="LearningDisabilities"
															/>
															<Form.Check
																inline
																label="Multiple Sclerosis"
																name="disability-list"
																className="d-block radio-wrap"
																type="radio"
																id="MultipleSclerosis"
															/>
															<Form.Check
																inline
																label="Obsessive Compulsive Disorder"
																name="disability-list"
																className="d-block radio-wrap"
																type="radio"
																id="Obsessive"
															/>
															<Form.Check
																inline
																label="Paralysis"
																name="disability-list"
																className="d-block radio-wrap"
																type="radio"
																id="Paralysis"
															/>
															<Form.Check
																inline
																label="Parkinson's Disease"
																name="disability-list"
																className="d-block radio-wrap"
																type="radio"
																id="Parkinson"
															/>
															<Form.Check
																inline
																label="Post-traumatic stress disorder"
																name="disability-list"
																className="d-block radio-wrap"
																type="radio"
																id="Post"
															/>
															<Form.Check
																inline
																label="Schizophrenia"
																name="disability-list"
																className="d-block radio-wrap"
																type="radio"
																id="Schizophrenia"
															/>
															<Form.Check
																inline
																label="Separation Anxiety Disorder"
																name="disability-list"
																className="d-block radio-wrap"
																type="radio"
																id="Separation"
															/>
															<Form.Check
																inline
																label="Sleep Disorders"
																name="disability-list"
																className="d-block radio-wrap"
																type="radio"
																id="Sleep"
															/>
															<Form.Check
																inline
																label="Substance Abuse/Addiction"
																name="disability-list"
																className="d-block radio-wrap"
																type="radio"
																id="Addiction"
															/>
															<Form.Check
																inline
																label="Traumatic Brain Injury"
																name="disability-list"
																className="d-block radio-wrap"
																type="radio"
																id="Traumatic"
															/>
															<Form.Check
																inline
																label="Visually Impaired"
																name="disability-list"
																className="d-block radio-wrap"
																type="radio"
																id="Visually"
															/>

															<Form.Check
																inline
																label="Chronic Illness (Diabetes, AIDS, renal failure, cancer, TB, asthma)"
																name="disability-list"
																className="d-block radio-wrap"
																type="radio"
																id="Chronic"
															/>
														</Col>
														<Col lg={6}>
															<Form.Check
																inline
																label="Alzheimer's/Progressive brain disorder"
																name="disability-list"
																className="d-block radio-wrap"
																type="radio"
																id="Alzheimer"
															/>
															<Form.Check
																inline
																label="Antisocial Personality Disorder"
																name="disability-list"
																className="d-block radio-wrap"
																type="radio"
																id="Antisocial"
															/>
															<Form.Check
																inline
																label="Arthritic"
																name="disability-list"
																className="d-block radio-wrap"
																type="radio"
																id="Arthritic"
															/>
															<Form.Check
																inline
																label="Auditory Processing"
																name="disability-list"
																className="d-block radio-wrap"
																type="radio"
																id="Auditory"
															/>
															<Form.Check
																inline
																label="Bipolar"
																name="disability-list"
																className="d-block radio-wrap"
																type="radio"
																id="Bipolar"
															/>
															<Form.Check
																inline
																label="Depression"
																name="disability-list"
																className="d-block radio-wrap"
																type="radio"
																id="Depression"
															/>
															<Form.Check
																inline
																label="Dyslexia"
																name="disability-list"
																className="d-block radio-wrap"
																type="radio"
																id="Dyslexia"
															/>
															<Form.Check
																inline
																label="Impulse Control Disorder"
																name="disability-list"
																className="d-block radio-wrap"
																type="radio"
																id="Impulse"
															/>
															<Form.Check
																inline
																label="Memory Loss"
																name="disability-list"
																className="d-block radio-wrap"
																type="radio"
																id="Memory"
															/>
															<Form.Check
																inline
																label="Muscular Dystrophy"
																name="disability-list"
																className="d-block radio-wrap"
																type="radio"
																id="Muscular"
															/>
															<Form.Check
																inline
																label="Oppositional defiant disorder"
																name="disability-list"
																className="d-block radio-wrap"
																type="radio"
																id="Oppositional"
															/>
															<Form.Check
																inline
																label="Paraplegic"
																name="disability-list"
																className="d-block radio-wrap"
																type="radio"
																id="Paraplegic"
															/>
															<Form.Check
																inline
																label="Phobia"
																name="disability-list"
																className="d-block radio-wrap"
																type="radio"
																id="Phobia"
															/>
															<Form.Check
																inline
																label="Quadriplegic"
																name="disability-list"
																className="d-block radio-wrap"
																type="radio"
																id="Quadriplegic"
															/>
															<Form.Check
																inline
																label="Selective Mutism"
																name="disability-list"
																className="d-block radio-wrap"
																type="radio"
																id="Selective"
															/>
															<Form.Check
																inline
																label="Sexual and Gender Disorder"
																name="disability-list"
																className="d-block radio-wrap"
																type="radio"
																id="Sexual"
															/>
															<Form.Check
																inline
																label="Spina bifida"
																name="disability-list"
																className="d-block radio-wrap"
																type="radio"
																id="Spina"
															/>
															<Form.Check
																inline
																label="Tourette Syndrome"
																name="disability-list"
																className="d-block radio-wrap"
																type="radio"
																id="Tourette"
															/>
															<Form.Check
																inline
																label="Visual Processing"
																name="disability-list"
																className="d-block radio-wrap"
																type="radio"
																id="Visual"
															/>
															<Form.Check
																inline
																label="Wheel Chair User"
																name="disability-list"
																className="d-block radio-wrap"
																type="radio"
																id="Wheel"
															/>
															<Form.Check
																inline
																label="Other"
																name="disability-list"
																className="d-block radio-wrap"
																type="radio"
																checked={other == true}
																onChange={handleOther}
																id="Other"
															/>
														</Col>
													</Row>
													{other && (
														<Row>
															<Form.Group>
																<Form.Label className="text-white mb-3 mt-4">
																	Type the Disability
																</Form.Label>
																<Form.Control
																	type="textarea"
																	placeholder="Type the Disability"
																/>
															</Form.Group>
														</Row>
													)}
												</Form.Group>
											</Col>
										</Row>
									)}
									{stepform == 4 && (
										<Row id="step-3">
											<Col lg={12}>
												<Form.Group controlId="formFile" className="mb-3">
													<Form.Label className="fw-bold text-white">
														What are interests? (Select Top 5)
													</Form.Label>
													<Row>
														<Col lg={6}>
															<Form.Check
																inline
																label="Sports"
																name="interests"
																className="d-block radio-wrap"
																type="radio"
																id="Sports"
															/>
															<Form.Check
																inline
																label="Movies/TV"
																name="interests"
																className="d-block radio-wrap"
																type="radio"
																id="Movies/TV"
															/>
															<Form.Check
																inline
																label="Outdoors"
																name="interests"
																className="d-block radio-wrap"
																type="radio"
																id="Outdoors"
															/>
															<Form.Check
																inline
																label="My Family"
																name="interests"
																className="d-block radio-wrap"
																type="radio"
																id="Family"
															/>
															<Form.Check
																inline
																label="Fashion"
																name="interests"
																className="d-block radio-wrap"
																type="radio"
																id="Fashion"
															/>
															<Form.Check
																inline
																label="Travel"
																name="interests"
																className="d-block radio-wrap"
																type="radio"
																id="Travel"
															/>
															<Form.Check
																inline
																label="Science and Technology"
																name="interests"
																className="d-block radio-wrap"
																type="radio"
																id="Science"
															/>
															<Form.Check
																inline
																label="Gaming"
																name="interests"
																className="d-block radio-wrap"
																type="radio"
																id="Gaming"
															/>
															<Form.Check
																inline
																label="Education"
																name="interests"
																className="d-block radio-wrap"
																type="radio"
																id="Education"
															/>
															<Form.Check
																inline
																label="Health and Fitness"
																name="interests"
																className="d-block radio-wrap"
																type="radio"
																id="Health"
															/>
															<Form.Check
																inline
																label="Parenting"
																name="interests"
																className="d-block radio-wrap"
																type="radio"
																id="Parenting"
															/>
														</Col>
														<Col lg={6}>
															<Form.Check
																inline
																label="Music"
																name="interests"
																className="d-block radio-wrap"
																type="radio"
																id="Music"
															/>
															<Form.Check
																inline
																label="Animals"
																name="interests"
																className="d-block radio-wrap"
																type="radio"
																id="Animals"
															/>
															<Form.Check
																inline
																label="Staying In"
																name="interests"
																className="d-block radio-wrap"
																type="radio"
																id="Staying"
															/>
															<Form.Check
																inline
																label="Food"
																name="interests"
																className="d-block radio-wrap"
																type="radio"
																id="Food"
															/>
															<Form.Check
																inline
																label="Nature"
																name="interests"
																className="d-block radio-wrap"
																type="radio"
																id="Nature"
															/>
															<Form.Check
																inline
																label="Crafts"
																name="interests"
																className="d-block radio-wrap"
																type="radio"
																id="Crafts"
															/>
															<Form.Check
																inline
																label="Reading"
																name="interests"
																className="d-block radio-wrap"
																type="radio"
																id="Reading"
															/>
															<Form.Check
																inline
																label="Art"
																name="interests"
																className="d-block radio-wrap"
																type="radio"
																id="Art"
															/>
															<Form.Check
																inline
																label="Pop Culture"
																name="interests"
																className="d-block radio-wrap"
																type="radio"
																id="Pop"
															/>
															<Form.Check
																inline
																label="Business"
																name="interests"
																className="d-block radio-wrap"
																type="radio"
																id="Business"
															/>
															<Form.Check
																inline
																label="Comedy"
																name="interests"
																className="d-block radio-wrap"
																type="radio"
																id="Comedy"
															/>
														</Col>
													</Row>
												</Form.Group>
											</Col>
										</Row>
									)}
									{stepform == 5 && (
										<Row>
											<Col lg={12}>
												<Form>
													<Form.Group className="mb-4">
														<Form.Label className="text-white fw-bold">
															Tell Everyone About Yourself
														</Form.Label>
														<Form.Control as="textarea" rows={5} cols={12} />
													</Form.Group>
												</Form>
											</Col>
										</Row>
									)}
									{stepform < 6 && (
										<Form.Group>
											<Button
												type={stepform >= 7 ? "submit" : "button"}
												onClick={handleStepForm}
												className="p-0 btn-gradient w-100 py-2"
											>
												<BsArrowDownRightCircle size={36} color="#fff" />
												<span>Next</span>
											</Button>
										</Form.Group>
									)}
								</Form>
							</div>
							{stepform == 6 && (
								<Alert key="success" variant="success">
									<p className="mb-0">
										Thankyou for Signing up. Please check your email for
										verification
									</p>
								</Alert>
							)}
						</Col>
						<Col lg={2}>
							<Figure>
								<Figure.Image src={connectArrow} />
							</Figure>
						</Col>
						<Col lg={4}>
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

export default Register;
