import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import PageHeader from "../../components/PageHeader/PageHeader";
import { Col, Container, Row } from "react-bootstrap";
import DisablityNewsCard from "../../components/Blog/DisablityNewsCard";

const DisablityNews = () => {
	const pagename = {
		name: "Disability News and Views",
	};
	const disableNewData = [
		{
			id: 1,
			title:
				"How to promote disabled women in academia | THE Campus Learn, Share, Connect",
			p: "How intersectionality compounds barriers. Universities need to do more to acknowledge the intersection of gender and disability to ensure disabled ...",
		},
		{
			id: 2,
			title:
				"'Hoedown at the Barn' for adults with disabilities  - Valley News Live",
			p: "West Central ...",
		},
		{
			id: 3,
			title:
				"Law report: Council unlawfully disallowed disability-related expenditure - The Times",
			p: "King's Bench DivisionSeptember 18, 2023Rex (RW) v Windsor and Maidenhead royal borough councilBefore Dexter Dias KC sitting as a deputy High Court ...",
		},
		{
			id: 4,
			title:
				"Parent advocacy group hosting rally, pushing for inclusion for kids with intellectual  disabilities",
			p: "The group We All Belong focuses on helping kids with intellectual disabilities and will be hosting a rally on Monday night. “We advocate for them ...",
		},
		{
			id: 5,
			title:
				"'Wings for All' event allows families to practice airport experience | WCHS",
			p: "Airport staff and security were trained on disability etiquette, people first language and appropriate interactions for people with disabilities ...",
		},
	];
	return (
		<>
			<Header />
			<PageHeader {...pagename} />
			{/* Disable news starts here */}
			<section className="disable-sec">
				<Container>
					<Row>
						<Col lg={12}>
							<div className="blog-content-heading-wrapper">
								<h6 className="text-primary">BLOGS</h6>
								<h3 className="text-info">Disability News and Views</h3>
							</div>
						</Col>
					</Row>
					<Row>
						<Col lg={9}>
							{disableNewData.map((item) => {
								return <DisablityNewsCard {...item} />;
							})}
						</Col>
					</Row>
				</Container>
			</section>
			{/* Disable news ends here */}
			<Footer />
		</>
	);
};

export default DisablityNews;
