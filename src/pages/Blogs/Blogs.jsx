import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import PageHeader from "../../components/PageHeader/PageHeader";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { blog1Img, meet3Img } from "../../constant";
import { BsArrowDownRightCircle } from "react-icons/bs";
import "../../assets/css/blog.css";
import BlogCard from "../../components/Blog/BlogCard";

const Blogs = () => {
	const pagename = {
		name: "Blogs",
	};
	const blogData = [
		{
			id: 1,
			title: "Know Your Rights and Reach for the Stars!",
			img: blog1Img,
			des: "As I am sure you know EHA (Education for all Handicapped Children) was passed in 1975. It was renamed in 1990 -IDEA – Individuals with",
		},
		{
			id: 2,
			title: "About Steve",
			img: meet3Img,
			des: "We were so excited to be adding another member to our family.  Steve was born on a very hot day in August, and I assumed",
		},
	];
	return (
		<>
			<Header />
			<PageHeader {...pagename} />
			{/* blogs starts here */}
			<section className="blogs-sec">
				<Container>
					<Row>
						<Col lg={12}>
							<div className="blog-content-heading-wrapper">
								<h6 className="text-primary">BLOGS</h6>
								<h3 className="text-info">Most Recents</h3>
							</div>
						</Col>
					</Row>
					<Row className="mt-5">
						{blogData.map((item) => {
							return (
								<Col lg={4}>
									<BlogCard {...item} />
								</Col>
							);
						})}
					</Row>
				</Container>
			</section>
			{/* blogs ends here */}
			<Footer />
		</>
	);
};

export default Blogs;
