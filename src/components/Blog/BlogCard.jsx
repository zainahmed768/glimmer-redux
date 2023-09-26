import React from "react";
import { Button, Card } from "react-bootstrap";
import { BsArrowDownRightCircle } from "react-icons/bs";

const BlogCard = (blogData) => {
	const { title, img, des } = blogData;
	console.log(des.length);
	return (
		<Card className="border-info">
			<Card.Img variant="top" src={img} fluid />
			<Card.Body>
				<Card.Title className="text-dark">
					{title.length > 25 ? `${title.substring(0, 25)}...` : title}
				</Card.Title>
				<p className="text-dark mb-0">
					{des.length > 150 ? `${des.substring(0, 50)}...` : des}
				</p>
				<Button href="/blog-detail" className="btn-gradient pe-4">
					<BsArrowDownRightCircle size={27} color="#fff" />
					<span>View All</span>
				</Button>
			</Card.Body>
		</Card>
	);
};

export default BlogCard;
