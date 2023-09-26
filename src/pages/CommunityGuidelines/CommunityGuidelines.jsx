import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import PageHeader from "../../components/PageHeader/PageHeader";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { communityImg } from "../../constant";
import "../../assets/css/community.css";

const CommunityGuidelines = () => {
	const pagename = {
		name: "Guidelines for Our Community",
	};
	return (
		<>
			<Header />
			<PageHeader {...pagename} />
			{/* community starts here */}
			<section className="community-sec">
				<Container>
					<Row className="align-items-center">
						<Col lg={6}>
							<div className="community-content-wrapper">
								<p>
									Welcome to the Glimmer community. You’ll always be welcome
									here if you’re honest, kind and respectful to others. If you
									choose not to be, you may not last. Our goal is to allow users
									to express themselves freely as long as it doesn’t offend
									others. Everyone is held to the same standard on Glimmer.
									We’re asking you to be considerate, think before you act, and
									abide by our community guidelines both on and offline. You
									heard that right: your offline behavior can lead to
									termination of your Glimmer account.
								</p>
								<p>
									Below is a list of our community policies. If you violate any
									of these policies, you might be banned from Glimmer. We
									encourage you to{" "}
									<Link className="link text-info">report</Link> any behavior
									that violates our policies.
								</p>
							</div>
						</Col>
						<Col lg={6}>
							<div className="community-img-wrapper">
								<figure>
									<img src={communityImg} className="img-fluid" alt="" />
								</figure>
							</div>
						</Col>
					</Row>
					<Row>
						<Col lg={12}>
							<div className="community-content-wrapper mb-5">
								<h4 className="text-dark mb-4">Content</h4>
								<p>
									Whether you are looking for a friend or a date, be kind and
									respectful. You want to act your best so that others want to
									be your friend or consider you for a date.
								</p>
							</div>
							<div className="community-content-wrapper mb-5">
								<h4 className="text-dark mb-4">Harassment</h4>
								<p>
									Do not engage, or encourage others to engage, in any targeted
									abuse or harassment against any other user. Reports of
									stalking, threats, bullying, or intimidation, are taken very
									seriously. If you experience stalking, bullying, threats, or
									intimidation, we want to know!
								</p>
							</div>
							<div className="community-content-wrapper mb-5">
								<h4 className="text-dark mb-4">Violence and Physical Harm</h4>
								<p>
									We do not tolerate violent, graphic, or gory content on
									Glimmer, or any actions or content that advocate for or
									threaten violence of any sort, including threatening or
									promoting terrorism. Physical assault, coercion, and any acts
									of violence are strictly prohibited.
								</p>
								<p>
									Content that advocates for or glorifies suicide or self-harm
									is also not allowed. In these situations, we may take a number
									of steps to assist the user, including reaching out with
									crisis resources.
								</p>
							</div>
							<div className="community-content-wrapper mb-5">
								<h4 className="text-dark mb-4">Hate Speech</h4>
								<p>
									Any content that promotes, advocates for, or condones racism,
									bigotry, hatred, or violence against individuals or groups
									based on factors like (but not limited to) race, ethnicity,
									religious affiliation, disability, gender, age, national
									origin, sexual orientation, or gender identity is not allowed.
								</p>
							</div>
							<div className="community-content-wrapper mb-5">
								<h4 className="text-dark mb-4">Private Information</h4>
								<p>
									Don’t publicly broadcast any private information, yours or
									anyone else’s. This includes social security numbers,
									passports, passwords, financial information or unlisted
									contact information, such as phone numbers, email addresses,
									home/work address.
								</p>
							</div>
							<div className="community-content-wrapper mb-5">
								<h4 className="text-dark mb-4">Spam</h4>
								<p>
									Don’t be fake. Don’t use Glimmer to drive people to external
									websites via a link or otherwise.
								</p>
							</div>
							<div className="community-content-wrapper mb-5">
								<h4 className="text-dark mb-4">Promotion or Solicitation</h4>
								<p>
									Soliciting other users is prohibited on Glimmer. It’s fine to
									invite your matches to something that you’re doing, but if the
									purpose of your profile is to advertise your event or
									business, non-profit, political campaign, contest, or to
									conduct research, we may delete your account. If you want to
									advertise an event feel free to send us this information and
									we will post it on the events page.
								</p>
							</div>
							<div className="community-content-wrapper mb-5">
								<h4 className="text-dark mb-4">Prostitution and Trafficking</h4>
								<p>
									Promoting or advocating for commercial sexual services, human
									trafficking or other non-consensual sexual acts is strictly
									prohibited and will result in your account being banned from
									Glimmer.
								</p>
							</div>
							<div className="community-content-wrapper mb-5">
								<h4 className="text-dark mb-4">Scamming</h4>
								<p>
									Glimmer has a zero-tolerance policy on predatory behavior of
									any kind. Anyone attempting to get other users’ private
									information for fraudulent or illegal activity may be banned.
									Any user caught sharing their own financial account
									information (PayPal, Venmo, etc.) for the purpose of receiving
									money from other users may also be banned from Glimmer.
								</p>
							</div>
							<div className="community-content-wrapper mb-5">
								<h4 className="text-dark mb-4">Impersonation</h4>
								<p>Be yourself! Don’t pretend to be someone else.</p>
								<p>
									Do not impersonate, or otherwise misrepresent affiliation,
									connection or association with, any person or entity.
								</p>
							</div>
							<div className="community-content-wrapper mb-5">
								<h4 className="text-dark mb-4">Minors</h4>
								<p>
									You must be 18 years of age or older to use Glimmer. As such,
									we do not allow images of unaccompanied minors. If you want to
									post photos of your children, please make sure that you are in
									the photo as well. If you see a profile that includes an
									unaccompanied minor, encourages harm to a minor, or depicts a
									minor in a sexual or suggestive way, please report it
									immediately.
								</p>
							</div>
							<div className="community-content-wrapper mb-5">
								<h4 className="text-dark mb-4">
									Copyright and Trademark Infringement
								</h4>
								<p>
									If your Glimmer profile includes any work that is copyrighted
									or trademarked by others, don’t display it, unless you are
									allowed to do so. Don’t post anything that is not yours.
								</p>
							</div>
							<div className="community-content-wrapper mb-5">
								<h4 className="text-dark mb-4">Illegal Usage</h4>
								<p>
									Don’t use Glimmer to do anything illegal. If it’s illegal IRL,
									it’s illegal on Glimmer.
								</p>
							</div>
							<div className="community-content-wrapper mb-5">
								<h4 className="text-dark mb-4">One Person, One Account</h4>
								<p>
									Glimmer accounts cannot have multiple owners, so don’t create
									an account with your friend or significant other. Please don’t
									have multiple Glimmer accounts.
								</p>
							</div>
							<div className="community-content-wrapper mb-5">
								<h4 className="text-dark mb-4">Third Party Apps</h4>
								<p>
									The use of any apps created by anyone other than Glimmer that
									claim to offer our service or unlock special Glimmer features
									is not allowed.
								</p>
							</div>
							<div className="community-content-wrapper mb-5">
								<h4 className="text-dark mb-4">Account Dormancy</h4>
								<p>
									If you intend to stop using Glimmer, please let us know so we
									can delete your account
								</p>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
			{/* community starts here */}
			<Footer />
		</>
	);
};

export default CommunityGuidelines;
