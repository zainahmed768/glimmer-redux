import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import PageHeader from "../../components/PageHeader/PageHeader";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import GroupPost from "../../components/GroupPost/GroupPost";
import {
	groupImg1,
	groupImg2,
	groupImg3,
	groupImg4,
	groupImg5,
	groupImg6,
	groupImg7,
} from "../../constant";

const Groups = () => {
	const pagename = {
		name: "Groups",
	};
	const GroupData = [
		{
			id: 1,
			groupTitle: "Employment and volunteer – opportunities",
			groupImg: groupImg1,
			totalMembers: 2,
			groupName: "Public Group",
		},
		{
			id: 2,
			groupTitle:
				"Let’s talk –how to communicate with friends, significant others, other groups, about your disability",
			groupImg: groupImg2,
			totalMembers: 1,
			groupName: "Public Group",
		},
		{
			id: 3,
			groupTitle: "Parents support group of education – knowledge is power",
			groupImg: groupImg3,
			totalMembers: 1,
			groupName: "Public Group",
		},
		{
			id: 4,
			groupTitle: "Parents of children with autism",
			groupImg: groupImg4,
			totalMembers: 1,
			groupName: "Public Group",
		},
		{
			id: 5,
			groupTitle: "New inventions for people with disabilities",
			groupImg: groupImg5,
			totalMembers: 1,
			groupName: "Public Group",
		},
		{
			id: 6,
			groupTitle: "Hobbies – what you enjoy and ideas for others",
			groupImg: groupImg6,
			totalMembers: 1,
			groupName: "Public Group",
		},
		{
			id: 7,
			groupTitle: "Healthcare issues and suggestions",
			groupImg: groupImg7,
			totalMembers: 1,
			groupName: "Public Group",
		},
	];
	return (
		<>
			<Header />
			<PageHeader {...pagename} />
			{/* groups starts here */}
			<section className="groups-sec py-5">
				<Container>
					<Row>
						<Col lg={3} />
						<Col lg={6}>
							<Form>
								<InputGroup className="mb-3 group-search">
									<Form.Control
										type="search"
										placeholder="Search by name"
										className="rounded-0 py-3 px-4 border-none"
									/>
									<InputGroup.Text id="basic-addon2" className="rounded-0">
										<Button variant="light" className="text-dark">
											<BsSearch className="text-dark" />
										</Button>
									</InputGroup.Text>
								</InputGroup>
							</Form>
						</Col>
						<Col lg={3} />
					</Row>
					<Row>
						{GroupData.map((item) => {
							return (
								<Col lg={4} className="d-flex align-items-stretch">
									<GroupPost {...item} />
								</Col>
							);
						})}
					</Row>
				</Container>
			</section>
			{/* groups ends here */}
			<Footer />
		</>
	);
};

export default Groups;
