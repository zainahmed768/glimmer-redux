import React from "react";
import {
	Button,
	Col,
	Container,
	Image,
	Nav,
	NavDropdown,
	Navbar,
	Row,
	Stack,
} from "react-bootstrap";
import { headerlogo } from "../../constant";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<>
			<header id="header" className="py-3">
				<Container>
					<Row>
						<Col lg={2}>
							<Stack className="logo-wrapper">
								<Link to="/">
									<Image fluid src={headerlogo} />
								</Link>
							</Stack>
						</Col>
						<Col lg={10}>
							<Navbar>
								<Navbar.Collapse>
									<Nav className="me-auto gap-3">
										<Nav.Link className="text-dark" href="/meet-glimmer">
											Meet Glimmer
										</Nav.Link>
										<NavDropdown
											title="Most Recent"
											className="text-dark"
											id="collapsible-nav-dropdown"
										>
											<NavDropdown.Item className="text-dark" href="/blogs">
												Blogs
											</NavDropdown.Item>
											<NavDropdown.Item
												className="text-dark"
												href="/disability-news-and-views"
											>
												Disability News and Views
											</NavDropdown.Item>
										</NavDropdown>
										<Nav.Link className="text-dark" href="">
											Membership Plans
										</Nav.Link>
										<Nav.Link className="text-dark" href="">
											Members
										</Nav.Link>
										<Nav.Link className="text-dark" href="/groups">
											Groups
										</Nav.Link>
										<Nav.Link className="text-dark" href="/contact-us">
											Contact Us
										</Nav.Link>
									</Nav>
									<Nav className="gap-2">
										<Button
											className="header-btn"
											rounded={false}
											variant="outline-dark"
											href="/login"
										>
											Login
										</Button>
										<Button
											rounded={false}
											className="header-btn"
											variant="outline-dark"
											href="/register"
										>
											Register
										</Button>
									</Nav>
								</Navbar.Collapse>
							</Navbar>
						</Col>
					</Row>
				</Container>
			</header>
		</>
	);
};

export default Header;
