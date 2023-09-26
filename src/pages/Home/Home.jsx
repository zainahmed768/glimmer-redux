import React from "react";
import Header from "../../components/Header/Header";
import "../../assets/css/style.css";
import {
	Badge,
	Button,
	Col,
	Container,
	Image,
	Figure,
	Form,
	Row,
} from "react-bootstrap";
import {
	approvalImg,
	bannerImg,
	connectArrow,
	connectImg,
	featured1Img,
	featured2Img,
	featured3Img,
	featured4Img,
	featured5Img,
	featured6Img,
	grilsImg,
	registerImg,
	review1Img,
	review2Img,
	review3Img,
	review4Img,
	testimonailsImg,
} from "../../constant";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
	BsArrowDownRightCircle,
	BsFillPlayCircleFill,
	BsFillStarFill,
} from "react-icons/bs";
import Footer from "../../components/Footer/Footer";

const Home = () => {
	const FeaturedSettings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 1,
	};
	const TestimonalsSettings = {
		dots: true,
		arrows: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	const Members = [
		{
			id: 1,
			img: review1Img,
			name: "Michele Storm",
			lastActive: "3 hours",
			minutes: "43",
		},
		{
			id: 2,
			img: review2Img,
			name: "John Doe",
			lastActive: "3 hours",
			minutes: "43",
		},
		{
			id: 3,
			img: review3Img,
			name: "Michele Storm",
			lastActive: "3 hours",
			minutes: "43",
		},
		{
			id: 4,
			img: review4Img,
			name: "Michele Storm",
			lastActive: "3 hours",
			minutes: "43",
		},
	];
	return (
		<>
			<Header />
			<section className="banner">
				<Container>
					<Row>
						<Col lg={6}>
							<div className="banner-text-wrapper">
								<h2 className="text-primary">Find A Companion</h2>
								<p>
									Glimmer is an online community designed to build relationships
									between people with disabilities, their friends and family.
								</p>
							</div>
							<div className="looking-for-form-wrapper mt-4">
								<Form action="/">
									<Row>
										<Col lg={6}>
											<Form.Group controlId="formFile" className="mb-3">
												<Form.Label className="mb-3">I am</Form.Label>
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
												<Form.Label className="mb-3">Looking for</Form.Label>
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
									<Row>
										<Col>
											<Button
												type="submit"
												className="p-0 mt-4 banner-btn"
												variant="link"
											>
												<BsArrowDownRightCircle size={36} color="#0c71b9" />
												<span>Join For Free Today</span>
											</Button>
										</Col>
									</Row>
								</Form>
							</div>
							<a href="/"></a>
						</Col>
						<Col lg={6}>
							<div className="banner-img-wrapper">
								<Figure>
									<Figure.Image src={bannerImg} />
								</Figure>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
			<section className="connect-sec bg-info">
				<Container>
					<Row className="align-items-center">
						<Col lg={6}>
							<div className="connect-content-wrapper">
								<h3 className="text-white">Connect With Other Parents</h3>
								<p className="text-white">
									Our online community makes it easy to connect with other
									parents around the world.
								</p>
								<Button
									rounded={true}
									className="btn-gradient"
									variant="primary"
								>
									<BsFillPlayCircleFill size={36} color="#fff" />
									<span>Join For Free Today As a Family Member</span>
								</Button>
							</div>
						</Col>
						<Col lg={1} content="center">
							<div className="arrow-img-wrapper">
								<Figure>
									<Figure.Image src={connectArrow} fluid />
								</Figure>
							</div>
						</Col>
						<Col lg={5} className="text-center">
							<Figure className="mb-0">
								<Figure.Image src={connectImg} className="mb-0" fluid />
							</Figure>
						</Col>
					</Row>
				</Container>
			</section>
			<section className="online-sec">
				<Container>
					<Row className="align-items-center">
						<Col lg={6}>
							<Figure>
								<Figure.Image rounded={true} src={grilsImg} fluid />
							</Figure>
						</Col>
						<Col lg={5}>
							<div className="online-content-wrapper">
								<h4 className="text-info">
									The first online social platform dedicated to serving people
									with disabilities.
								</h4>
								<p>
									Glimmer is a social and relationship website designed for
									people living with a disability and their families. The
									website provides a simple, safe, fun and judgment-free place
									for those who are proud of who they are and the challenges
									they face.
								</p>
								<Button rounded={true} className="ps-3 btn-gradient">
									<BsArrowDownRightCircle size={26} color="#fff" />
									<span className="pe-4">Join Now</span>
								</Button>
							</div>
						</Col>
						<Col lg={1} />
					</Row>
				</Container>
			</section>
			<section className="how-it-works">
				<Container>
					<Row>
						<Col lg={3} />
						<Col lg={6}>
							<div className="how-it-content-wrapper text-center">
								<h2 className="fw-normal">How it works</h2>
								<p className="text-light">
									Join Glimmer for free today and begin meeting others
									immediately. The process is simple, safe and fun!
								</p>
							</div>
						</Col>
						<Col lg={3} />
					</Row>
					<Row className="pt-5">
						<Col lg={4}>
							<div className="work-card-wrapper mx-auto text-center rounded position-relative border border-light px-lg-3 py-5">
								<div className="work-img-wrapper">
									<Figure>
										<Figure.Image src={registerImg} fluid />
									</Figure>
								</div>
								<div className="work-content-wrapper text-center">
									<h4>Register</h4>
									<p className="text-light opacity-75 fw-light">
										To help us match you with others, tell us about yourself,
										what you are looking for, your likes and dislikes.
									</p>
								</div>
								<Badge
									bg="danger"
									className="translate-middle px-3 py-3 position-absolute rounded-circle fs-3 me-5 start-100 top-0"
								>
									01
								</Badge>
							</div>
						</Col>
						<Col lg={4}>
							<div className="work-card-wrapper mx-auto text-center rounded position-relative border border-light px-lg-3 py-5">
								<div className="work-img-wrapper">
									<Figure>
										<Figure.Image src={approvalImg} fluid />
									</Figure>
								</div>
								<div className="work-content-wrapper text-center">
									<h4>Approval</h4>
									<p className="text-light opacity-75 fw-light">
										To help us match you with others, tell us about yourself,
										what you are looking for, your likes and dislikes.
									</p>
								</div>
								<Badge
									bg="success"
									className="px-3 translate-middle py-3 position-absolute rounded-circle fs-3 me-5 start-100 top-0"
								>
									02
								</Badge>
							</div>
						</Col>
						<Col lg={4}>
							<div className="work-card-wrapper mx-auto text-center rounded position-relative border border-light px-lg-3 py-5">
								<div className="work-img-wrapper">
									<Figure>
										<Figure.Image src={registerImg} fluid />
									</Figure>
								</div>
								<div className="work-content-wrapper text-center">
									<h4>Register</h4>
									<p className="text-light opacity-75 fw-light">
										To help us match you with others, tell us about yourself,
										what you are looking for, your likes and dislikes.
									</p>
								</div>
								<Badge
									bg="info"
									className="px-3 py-3 translate-middle position-absolute rounded-circle fs-3 me-5 start-100 top-0"
								>
									03
								</Badge>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
			<section className="featured-sec">
				<Container>
					<Row>
						<Col lg={12}>
							<h6 className="text-center text-primary">FEATURED IN</h6>
						</Col>
					</Row>
					<Row className="pt-5 border-bottom">
						<Col lg={12}>
							<Slider {...FeaturedSettings}>
								<div className="featued-slider-wrppaer">
									<Image src={featured1Img} fluid />
								</div>
								<div className="featued-slider-wrppaer">
									<Image src={featured2Img} fluid />
								</div>
								<div className="featued-slider-wrppaer">
									<Image src={featured3Img} fluid />
								</div>
								<div className="featued-slider-wrppaer">
									<Image src={featured4Img} fluid />
								</div>
								<div className="featued-slider-wrppaer">
									<Image src={featured5Img} fluid />
								</div>
								<div className="featued-slider-wrppaer">
									<Image src={featured6Img} fluid />
								</div>
							</Slider>
						</Col>
					</Row>
				</Container>
			</section>
			<section className="testimonail-sec py-5">
				<Container>
					<Row>
						<Col lg={6}>
							<div className="testimonails-img-wrapper">
								<Figure>
									<Figure.Image src={testimonailsImg} fluid />
								</Figure>
							</div>
						</Col>
						<Col lg={6}>
							<div className="testimonails-content-wrapper">
								<h6 className="text-primary">TESTIMONIALS</h6>
								<h3 className="text-info">What Customers Say</h3>

								<div className="testimonails-slider-wrapper mt-5">
									<Slider {...TestimonalsSettings}>
										<div className="testimonails-slide-wrapper">
											<h5 className="text-info">Sadie</h5>
											<h6 className="text-primary">USA</h6>
											<div className="rating-wrapper">
												<ul className="list-unstyled d-flex gap-1">
													<li>
														<BsFillStarFill color="#0c71b9" />
													</li>
													<li>
														<BsFillStarFill color="#0c71b9" />
													</li>
													<li>
														<BsFillStarFill color="#0c71b9" />
													</li>
													<li>
														<BsFillStarFill color="#0c71b9" />
													</li>
													<li>
														<BsFillStarFill color="#0c71b9" />
													</li>
												</ul>
											</div>
											<p className="text-dark fw-normal mb-0">
												I greatly appreciate this site, it’s wonderful to
												finally have a place where I can be myself.
											</p>
										</div>
										<div className="testimonails-slide-wrapper">
											<h5 className="text-info">Sadie</h5>
											<h6 className="text-primary">USA</h6>
											<div className="rating-wrapper">
												<ul className="list-unstyled d-flex gap-1">
													<li>
														<BsFillStarFill color="#0c71b9" />
													</li>
													<li>
														<BsFillStarFill color="#0c71b9" />
													</li>
													<li>
														<BsFillStarFill color="#0c71b9" />
													</li>
													<li>
														<BsFillStarFill color="#0c71b9" />
													</li>
													<li>
														<BsFillStarFill color="#0c71b9" />
													</li>
												</ul>
											</div>
											<p className="text-dark fw-normal mb-0">
												I greatly appreciate this site, it’s wonderful to
												finally have a place where I can be myself.
											</p>
										</div>
										<div className="testimonails-slide-wrapper">
											<h5 className="text-info">Sadie</h5>
											<h6 className="text-primary">USA</h6>
											<div className="rating-wrapper">
												<ul className="list-unstyled d-flex gap-1">
													<li>
														<BsFillStarFill color="#0c71b9" />
													</li>
													<li>
														<BsFillStarFill color="#0c71b9" />
													</li>
													<li>
														<BsFillStarFill color="#0c71b9" />
													</li>
													<li>
														<BsFillStarFill color="#0c71b9" />
													</li>
													<li>
														<BsFillStarFill color="#0c71b9" />
													</li>
												</ul>
											</div>
											<p className="text-dark fw-normal mb-0">
												I greatly appreciate this site, it’s wonderful to
												finally have a place where I can be myself.
											</p>
										</div>
									</Slider>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
			<section className="our-members">
				<Container>
					<Row>
						<Col lg={12}>
							<h6 className="text-primary text-center">MEMBERS</h6>
							<h2 className="text-white text-center">Our Top Members</h2>
						</Col>
					</Row>
					<Row className="pt-5">
						{Members.map((item, i) => {
							return (
								<Col key={i} lg={3}>
									<div className="work-card-wrapper w-100 mx-auto text-center rounded position-relative border border-light px-lg-3 py-5">
										<div className="work-img-wrapper">
											<Figure>
												<Figure.Image src={item?.img} fluid />
											</Figure>
										</div>
										<div className="work-content-wrapper text-center">
											<h4 className="fs-5 fw-normal mb-4">{item?.name}</h4>
											<p className="text-light opacity-75 fw-light">
												<span className="d-block">
													Active {item?.lastActive} hours,
												</span>
												<span className="d-block">
													{item?.minutes} minutes ago
												</span>
											</p>
										</div>
									</div>
								</Col>
							);
						})}
					</Row>
					<Row className="text-center mt-4">
						<Col>
							<Button
								rounded={"4"}
								variant="primary"
								className="ps-3 py-2 btn-light"
							>
								<BsArrowDownRightCircle size={30} color="#0c71b9" />
								<span className="pe-4 text-info ps-3">View All</span>
							</Button>
						</Col>
					</Row>
				</Container>
			</section>
			<Footer />
		</>
	);
};

export default Home;
