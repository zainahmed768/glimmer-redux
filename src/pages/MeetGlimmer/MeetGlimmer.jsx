import React, { Fragment, useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Col, Container, Figure, Row } from "react-bootstrap";
import { meet1Img, meet2Img, meet3Img } from "../../constant";
import "../../assets/css/meet-sec.css";
import { useGetProductQuery } from "../../redux/services/productService";

const MeetGlimmer = () => {
	const { data, isLoading, isError } = useGetProductQuery();
	const [product, setProduct] = useState([]);
	useEffect(() => {
		if (data) {
			setProduct(data);
		}

		console.log(product);
	}, []);

	const meet = [
		{
			id: 1,
			name: "Geoff Anderson",
			img: meet1Img,
		},
		{
			id: 2,
			name: "Christine Anderson",
			img: meet2Img,
		},
		{
			id: 3,
			name: "Steve Anderson",
			img: meet3Img,
		},
	];
	if (isLoading) {
		return (
			<>
				<div>
					<h1 className="text-dark">Loading.....</h1>
				</div>
			</>
		);
	}
	return (
		<>
			<Fragment>
				<Header />
				{/* meet glimer starts here */}
				<section className="meet-sec">
					<Container>
						<Row>
							<Col>
								<div className="text-wrapper mb-4">
									<h2 className="text-dark display-2 fw-normal text-center">
										Meet
										<span className="text-primary">Glimmer</span>
									</h2>
								</div>
							</Col>
						</Row>
						<Row className="mt-4">
							{isLoading ? (
								<>
									<h1 className="text-dark">Loading...</h1>
								</>
							) : (
								data.map((item) => {
									return (
										<>
											<Col key={item?.id} lg={4}>
												<div className="meet-card-wrapper">
													<Figure className="w-100">
														<Figure.Image
															src={item?.images[0]}
															fluid
															className="w-100"
														/>
													</Figure>
													<div className="meet-content-wrapper">
														<h4 className="text-info fw-normal text-center">
															{item?.title}
														</h4>
													</div>
												</div>
											</Col>
										</>
									);
								})
							)}
						</Row>
						<Row className="pt-5 mt-5">
							<Col lg={6}>
								<div className="why-us-wrapper bg-info px-5 py-4">
									<div className="why-us-content-wrapper">
										<h6 className="pt-lg-4 pb-3">Why Us</h6>
										<h3 className="pb-3">Glimmer Vision Statement</h3>
										<p className="text-light pb-lg-5">
											Our vision is to be the number one community for people
											with disabilities and families to safely offer
											opportunities for social relationships and support. We
											will continue to evolve to meet the needs of the
											community.
										</p>
									</div>
								</div>
							</Col>
							<Col lg={6}>
								<div className="why-us-wrapper bg-primary px-5 py-4">
									<div className="why-us-content-wrapper">
										<h6 className="pt-lg-4 pb-3">Why Us</h6>
										<h3 className="pb-3">Glimmer Vision Statement</h3>
										<p className="text-light pb-lg-5">
											Our vision is to be the number one community for people
											with disabilities and families to safely offer
											opportunities for social relationships and support. We
											will continue to evolve to meet the needs of the
											community.
										</p>
									</div>
								</div>
							</Col>
						</Row>
					</Container>
				</section>
				{/* meet glimer ends here */}
				<Footer />
			</Fragment>
		</>
	);
};

export default MeetGlimmer;
