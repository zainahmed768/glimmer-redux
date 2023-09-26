import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import PageHeader from "../../components/PageHeader/PageHeader";
import { Button, Col, Container, Row } from "react-bootstrap";
import {
	avatarImg,
	groupDetail1Img,
	groupDetail2Img,
	groupDetail3Img,
	groupDetailImg,
	postProfileImg,
} from "../../constant";
import GroupButtons from "../../components/GroupPost/GroupButtons";
import GroupSidebar from "../../components/GroupPost/GroupSidebar";
import { Link } from "react-router-dom";
import { BsHeart } from "react-icons/bs";
import GroupPostDetail from "../../components/GroupPost/GroupPostDetail";

const GroupDetail = () => {
	const pagename = {
		name: "Employment and volunteer – opportunities",
	};
	const detailPost = [
		{
			id: 1,
			postDes: null,
			time: "8 days ago",
			postImg: null,
			authorImg: avatarImg,
			authorName: "Nola",
			totalLike: 0,
		},
		{
			id: 2,
			postDes: "Lorem Ipsum dolor sit amet, consectetur",
			time: "8 months ago",
			postImg: groupDetail1Img,
			authorImg: postProfileImg,
			authorName: "WP_Developer",
			totalLike: 0,
		},
		{
			id: 3,
			postDes: "Lorem Ipsum dolor sit amet, consectetur",
			time: "8 months ago",
			postImg: groupDetail2Img,
			authorImg: postProfileImg,
			authorName: "WP_Developer",
			totalLike: 0,
		},
		{
			id: 4,
			postDes: "Lorem Ipsum dolor sit amet, consectetur",
			time: "8 months ago",
			postImg: groupDetail3Img,
			authorImg: postProfileImg,
			authorName: "WP_Developer",
			totalLike: 0,
		},
	];
	return (
		<>
			<Header />
			<PageHeader {...pagename} />
			{/* group detail starts here */}
			<section className="group-detail-sec">
				<Container className="overflow-x-hidden px-0" fluid>
					<div className="group-detail-img-wrapper">
						<figure className="mb-0">
							<img src={groupDetailImg} className="img-fluid" alt="" />
						</figure>
					</div>
				</Container>
				<GroupButtons />
				<Container>
					<Row>
						<Col lg={8}>
							<div className="group-detail-sec-wrapper">
								<div className="groupt-post-heading-wrapper ">
									<h3 className="text-dark">
										Employment and volunteer – opportunities
									</h3>
								</div>
								<div className="group-member-wrap d-flex align-items-center gap-4">
									<div className="total-member">
										<p className="mb-0">2 Members</p>
									</div>
									<div className="vr"></div>
									<div className="members-img-wrapper">
										<img
											src={avatarImg}
											className="img-fluid rounded-circle"
											alt=""
										/>
									</div>
								</div>

								{/* detail page post */}
								{detailPost.map((detailPost) => {
									return <GroupPostDetail {...detailPost} />;
								})}
								{/* detail page post */}
							</div>
						</Col>
						<Col lg={4}>
							<GroupSidebar />
						</Col>
					</Row>
				</Container>
			</section>
			{/* group detail ends here */}
			<Footer />
		</>
	);
};

export default GroupDetail;
