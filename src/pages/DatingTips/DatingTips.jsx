import React from "react";
import Header from "../../components/Header/Header";
import PageHeader from "../../components/PageHeader/PageHeader";
import Footer from "../../components/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import { dating1Img, dating2Img } from "../../constant";
import "../../assets/css/dating.css";
const DatingTips = () => {
	const pagename = {
		name: "Dating and Safety Tips",
	};
	return (
		<>
			<Header />
			<PageHeader {...pagename} />
			{/* dating starts here */}
			<section className="dating-sec">
				<Container>
					<Row className="align-items-center">
						<Col lg={6}>
							<div className="dating-content-wrapper">
								<p>
									You have an exciting opportunity to make new friends and start
									romantic relationships. It is important to be cautious when
									meeting someone new online and then possibly in person. There
									are things you can do 5o stay safe during your Glimmer
									experience. We are here to support you!
								</p>
							</div>
						</Col>
						<Col lg={6}>
							<div className="dating-img-wrapper">
								<figure>
									<img src={dating1Img} className="img-fluid" alt="" />
								</figure>
							</div>
						</Col>
					</Row>
					<Row className="align-items-center">
						<Col lg={12}>
							<div className="dating-content-wrapper mb-5">
								<h3 className="text-dark">Online Safety</h3>
								<h5 className="text-info">
									NEVER Send Money or Share Financial Information
								</h5>
								<p>
									Do not ever send money to someone you have met online. Never
									use a wire transfer. Do not give out your bank account
									information, credit card account number or debit card number.
									If the person wants this information, please let us know. That
									person is not worth any relationship. We ask for credit card
									information on our secure website for paid memberships only.
								</p>
							</div>
							<div className="dating-content-wrapper mb-5">
								<h5 className="text-info">
									Do NOT Share Your Personal Information
								</h5>
								<p>
									Do not give out your social security number, home or work
									address, or information about your daily routine. If you have
									children do not share their ages, genders, school they attend,
									schedules. We do not ask for that information. Anyone asking
									for this information is intruding on your privacy. Do not give
									this information out.
								</p>
							</div>
							<div className="dating-content-wrapper mb-5">
								<h5 className="text-info">Stay On Our Platform</h5>
								<p>
									Stay on our platform while you are getting to know someone. Do
									not agree with text, messaging apps, email or phone until you
									get to really know someone and feel safe.
								</p>
								<h6 className="text-dark mb-0">Red Flags:</h6>
								<ul>
									<li>
										People from another country who say they are from the US and
										want money.
									</li>
									<li>
										People who will not meet in person or talk on a video/phone
										call.
									</li>
									<li>
										People who are pushing for a serious relationship before
										they get to know you
									</li>
									<li>People who ask for money</li>
									<li>Harassment, threats, or offensive messages</li>
									<li>
										Inappropriate or harmful behavior during or after an
										in-person meeting
									</li>
									<li>Fraudulent profiles</li>
									<li>
										Spam or solicitation with links to commercial websites to
										sell products or services.
									</li>
									<li>Users who are underage but claim to be older.</li>
									<li>
										If you have any concerns, please contact us immediately.
									</li>
								</ul>
							</div>
							<div className="dating-content-wrapper mb-5">
								<h5 className="text-info">Protect Your Account</h5>
								<p>
									Pick a strong password and be careful if you are using a
									public or shared computer. Glimmer will never send you an
									email asking for your username or password, so do not give it
									to anyone. If you get this request, please report it to us
									immediately.
								</p>
							</div>
							<div className="dating-content-wrapper mb-5">
								<h3 className="text-dark mb-5">Meeting in Person</h3>
								<h5 className="text-info">Don’t Rush</h5>
								<p>
									Take your time and get to know the person online first. Use
									the chat function. Also try a video call. Ask questions to be
									sure there are no red flags.
								</p>
							</div>
							<div className="dating-content-wrapper mb-5">
								<h5 className="text-info">Meet in Public and Stay There</h5>
								<p>
									For the first few times always meet in public and stay there.
									Do not meet in your home, the other person’s home, or any
									other private location. Do not accept a meeting where there
									are no other people around until you are sure the person is
									safe.
								</p>
							</div>
							<div className="dating-content-wrapper mb-5">
								<h5 className="text-info">
									Tell Friends and Family About Your Plans
								</h5>
								<p>
									Always tell a friend, family member, and often more than one
									person of your plans for a meeting. This includes the date,
									time and place of the meeting. You can also take someone with
									you for the first few meetings. Also have your phone with you
									and make sure it is fully charged and easy to get to.
								</p>
							</div>
							<div className="dating-content-wrapper mb-5">
								<h5 className="text-info">
									Control Your Transportation To and From the Meeting Place
								</h5>
								<p>
									Do not let the other person drive you or arrange for your
									transportation until you feel comfortable and are safe. Know
									your public transportation options, have a friend ready to
									pick you up, or have a ride share app on your phone and be
									sure you know how to use it.
								</p>
							</div>
							<div className="dating-content-wrapper mb-5">
								<h5 className="text-info">Know Your Limitations</h5>
								<p>
									Do not drink or take any drugs that you are uncomfortable
									with. Drugs and alcohol can affect your judgment and
									alertness. If you are on prescription drugs, be aware drinking
									can interact poorly with your system. Do not accept any drugs
									offered to you. You do not really know what they are, and they
									can be dangerous. Only accept drinks directly from the
									bartender or poured by you.
								</p>
							</div>
							<div className="dating-content-wrapper mb-5">
								<h5 className="text-info">
									Don’t Leave Your Personal Items Unattended
								</h5>
								<p>
									Keep everything with you so no one can snoop. Guys keep your
									wallet in your pants pocket, ladies always keep your purse
									with you.
								</p>
							</div>
							<div className="dating-content-wrapper mb-5">
								<h5 className="text-info">If You Feel Uncomfortable, Leave</h5>
								<p>
									You can always leave early if you are uncomfortable. If you do
									not feel safe, ask a staff member at your meeting place to
									assist you.
								</p>
							</div>
							<div className="dating-content-wrapper mb-5">
								<h5 className="text-info">LGBTQ</h5>
								<p>
									While we recognize and believe it is important to be inclusive
									of all gender identities and sexual orientations, we are fully
									aware there is the potential of risk anywhere. Some countries
									target LGTTQ people. Check out the laws for legal protection
									before you travel anywhere. Use extra caution to be sure you
									are safe.
								</p>
							</div>
						</Col>
					</Row>
					<Row className="align-items-center">
						<Col lg={6}>
							<div className="dating-content-wrapper">
								<h5 className="text-info">Sexual Health and Consent</h5>
								<p>
									Do not participate in sexual contact without first discussing
									what this means with a family member or close friend,
									counselor, etc. Be aware of emotions attached to this
									behavior, possible sexual diseases, pregnancy. Do not allow
									yourself to be forced into any relationship you are not
									comfortable with. If you suspect you may have an STD, make
									sure you get tested for your health and safety. Any sexual
									activity must include the consent of both partners. If you do
									not feel safe, please leave the situation and talk to someone
									you are close with and report it to Glimmer.
								</p>
							</div>
						</Col>
						<Col lg={6}>
							<div className="dating-img-wrapper">
								<figure>
									<img src={dating2Img} className="img-fluid" alt="" />
								</figure>
							</div>
						</Col>
					</Row>
					<Row className="align-items-center mt-5">
						<Col lg={12}>
							<div className="dating-img-wrapper text-center">
								<h4 className="text-dark">
									Call 911 in the US and Canada if you feel you are in immediate
									danger or need emergency help.
								</h4>
								<h5 className="text-dark">
									Glimmer has a list of resources for support if you need
									additional help.
								</h5>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
			{/* dating ends here */}
			<Footer />
		</>
	);
};

export default DatingTips;
