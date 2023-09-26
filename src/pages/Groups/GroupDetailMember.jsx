import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import PageHeader from "../../components/PageHeader/PageHeader";
import GroupSidebar from "../../components/GroupPost/GroupSidebar";
import { adminImg, avatarImg, groupDetailImg } from "../../constant";
import { Col, Container, Row } from "react-bootstrap";
import GroupButtons from "../../components/GroupPost/GroupButtons";
import Members from "../../components/GroupPost/Members";

const GroupDetailMember = () => {
	const pagename = {
		name: "Employment and volunteer – opportunities",
	};
	const members = [
		{
			id: 1,
			name: "Nola",
			memberImg: avatarImg,
			joined: "joined 1 week ago",
		},
		{
			id: 2,
			name: "Anna Hoc",
			memberImg: adminImg,
			joined: "Joined 7 Months, 4 Weeks Ago",
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
								<div className="groupt-post-heading-wrapper">
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
										<img
											src={adminImg}
											className="img-fluid rounded-circle"
											alt=""
										/>
									</div>
								</div>
								<div className="viewing-members-wrapper pt-4">
									<p>Viewing 1 - 2 of 2 members</p>
								</div>
								{/* detail page post */}
								{members.map((members) => {
									return <Members {...members} />;
								})}

								{/* detail page post */}
								<div className="viewing-members-wrapper pt-4">
									<p>Viewing 1 - 2 of 2 members</p>
								</div>
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

export default GroupDetailMember;
