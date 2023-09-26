import React from "react";
import Footer from "../../components/Footer/Footer";
import PageHeader from "../../components/PageHeader/PageHeader";
import Header from "../../components/Header/Header";
import { Col, Container, Figure, Row } from "react-bootstrap";
import { headerlogo } from "../../constant";
import { Link } from "react-router-dom";
import "../../assets/css/community.css";

const GlimmerBillRights = () => {
	const pagename = {
		name: "Glimmer Bill of Rights",
	};
	return (
		<>
			<Header />
			<PageHeader {...pagename} />
			{/* bill of rights starts here */}
			<section className="bill-of-rights">
				<Container>
					<Row>
						<Col lg={12}>
							<div className="logo-wrappper text-center">
								<Figure>
									<Figure.Image src={headerlogo} fluid />
								</Figure>
							</div>
							<div className="rights-content-wrapper">
								<h3 className="text-dark">
									GIMMER PRIVACY POLICY – BILL OF RIGHTS
								</h3>
								<h5 className="text-dark">2023</h5>
								<p>
									Glimmer (“Glimmer,” “we,” and “us”) respects the privacy of
									its users (“you”) and has developed this Privacy Policy to
									show its commitment to protecting your privacy. This Privacy
									Policy describes the information we collect, how that
									information may be used, with whom it may be shared, and your
									choices about such uses and disclosures. We encourage you to
									read this Privacy Policy carefully before using our
									application or services or transacting business with us. By
									using our website or application (our “Service”), you are
									accepting the practices described in this Privacy Policy.
								</p>
								<p>
									If you have any questions about our privacy practices, please
									refer to the end of this Privacy Policy for information on how
									to contact us.
								</p>
							</div>
							<div className="rights-content-wrapper">
								<h5 className="text-dark">Information we collect about you</h5>
								<p>
									We may collect information that can identify you such as your
									name and email address (“personal information”) and other
									information that does not identify you. We may collect this
									information through a website or a mobile application. By
									using the Service, you are authorizing us to gather, analyze
									and retain data related to the provision of the Service. When
									you provide personal information through our Service, the
									information may be sent to servers located in the United
									States and countries around the world.
								</p>
								<p>
									In order to register as a user with Glimmer, you will be asked
									to create a personal account. You will also be asked to allow
									Glimmer to collect your location information from your device
									when you download or use the Service. In addition, we may
									collect and store any personal information you provide while
									using our Service or in some other manner. This may include
									identifying information, such as your name, address, email
									address and telephone number, and, if you transact business
									with us, financial information. You may also provide us
									photos, a personal description and information about your
									gender and preferences for recommendations, such as search
									distance, age range and gender. If you chat with other Glimmer
									users, you provide us the content of your chats, and if you
									contact us with a customer service or other inquiry, you
									provide us with the content of that communication.
								</p>
								<p>
									We use various technologies to collect information from your
									device and about your activities on our Service.
								</p>
								<p>
									We automatically collect information from your browser or
									device when you visit our Service. This information could
									include your IP address, device ID and type, your browser type
									and language, the operating system used by your device, access
									times, your mobile device’s geographic location while our
									application is actively running, and the referring website
									address.
								</p>
								<p>
									Cookies and Use of Cookie Data. When you visit our Service, we
									may assign your device one or more cookies to facilitate
									access to our Service and to personalize your experience.
									Through the use of a cookie, we also may automatically collect
									information about your activity on our Service, such as the
									pages you visit, the time and date of your visits and the
									links you click. We or other advertisers may use certain data
									collected on our Service to show you Glimmer advertisements on
									other sites or applications.
								</p>
								<p>
									Pixel tags. We embed pixel tags (also called web beacons or
									clear GIFs) on web pages, ads, and emails. These tiny,
									invisible graphics are used to access cookies and track user
									activities (such as how many times a page is viewed). We use
									pixel tags to measure the popularity of our features and
									services. Ad companies also use pixel tags to measure the
									number of ads displayed and their performance (such as how
									many people clicked on an ad).
								</p>
								<p>
									Mobile Device IDs: If you’re using our app, we use mobile
									device IDs (the unique identifier assigned to a device by the
									manufacturer), or Advertising IDs (for iOS 6 and later),
									instead of cookies, to recognize you. We do this to store your
									preferences and track your use of our app. Unlike cookies,
									device IDs cannot be deleted, but Advertising IDs can be reset
									in “Settings” on your iPhone or Android. Ad companies also use
									device IDs or Advertising IDs to track your use of the app,
									track the number of ads displayed, measure ad performance and
									display ads that are more relevant to you. Analytics companies
									use device IDs to track information about app usage.
								</p>
								<p>
									We may allow service providers, advertising companies and ad
									networks, and other third parties to display advertisements on
									our Service. These companies may use tracking technologies,
									such as cookies or web beacons, to collect information about
									users who view or interact with their advertisements. We do
									not provide any non-anonymized personal information to third
									parties. Some of these third-party advertising companies may
									be advertising networks that are members of the Network
									Advertising Initiative, which offers a single location to opt
									out of ad targeting from member companies
									(www.networkadvertising.org). Opting out will not decrease the
									number of advertisements you see.
								</p>
							</div>
							<div className="rights-content-wrapper">
								<h5 className="text-dark">
									How we use the information we collect
								</h5>
								<p>
									In general, we may use information that we collect about you
									to:
								</p>
								<p>
									Deliver and improve our products and services, and manage our
									business;
								</p>
								<p>
									Manage your account and provide you with customer support;
								</p>
								<p>
									Perform research and analysis about your use of, or interest
									in, our or others’ products, services, or content;
								</p>
								<p>
									Communicate with you by email, postal mail, telephone and/or
									mobile devices about products or services that may be of
									interest to you either from us or other third parties;
								</p>
								<p>
									Develop, display, and track content and advertising tailored
									to your interests on our Service and other sites, including
									providing our advertisements to you when you visit other
									sites;
								</p>
								<p>Website or mobile application analytics;</p>
								<p>
									Verify your eligibility and deliver prizes in connection with
									contests and sweepstakes;
								</p>
								<p>
									Enforce or exercise any rights in our{" "}
									<Link to="/" className="link text-info">
										Terms of Use
									</Link>
									; and
								</p>
								<p>
									Perform functions or services as otherwise described to you at
									the time of collection.
								</p>
								<p>
									Job applicants. If your personal information is submitted
									through our website when applying for a position with our
									company, the information will be used solely in connection
									with considering and acting upon your application. We may
									retain your personal information, but only for the purpose of
									considering your application for current or future available
									positions. This information, which may include your name and
									contact information, prior education and experience, and other
									information you provide to us, may be shared with third-party
									service providers retained by us to collect, maintain and
									analyze candidate submissions for job postings.
								</p>
								<p>
									In all circumstances, we may perform these functions directly
									or use a third party vendor to perform these functions on our
									behalf who will be obligated to use your personal information
									only to perform services for us. Also, if you access our
									Service from a third party social platform, such as Facebook,
									we may share non-personal information with that platform to
									the extent permitted by your agreement with it and its privacy
									settings.
								</p>
							</div>
							<div className="rights-content-wrapper">
								<h5 className="text-dark">
									With whom we share your information
								</h5>
								<p>
									Information Shared with Other Users. When you register as a
									user of Glimmer, your Glimmer profile will be viewable by
									other users of the Service. Other users will be able to view
									information you have provided to us directly or through
									Facebook, such as your Facebook photos, any additional photos
									you upload, your first name, your age, approximate number of
									miles away, your personal description, and information you
									have in common with the person viewing your profile, such as
									common Facebook friends and likes. If you swipe right to say
									“yes” to a person, you will be able to chat with that person
									if they swipe right to you, e.g., when you have a “match.” If
									you chat with your match, of course your match will see the
									content of your chat.
								</p>
								<p>
									Personal information. We do not share your personal
									information with others except as indicated in this Privacy
									Policy or when we inform you and give you an opportunity to
									opt out of having your personal information shared. We may
									share personal information with:
								</p>
								<p>
									Service providers: We may share information, including
									personal and financial information, with third parties that
									perform certain services on our behalf. These services may
									include fulfilling orders, providing customer service and
									marketing assistance, performing business and sales analysis,
									ad tracking and analytics, member screenings, supporting our
									Service functionality, and supporting contests, sweepstakes,
									surveys and other features offered through our Service. These
									service providers may have access to personal information
									needed to perform their functions but are not permitted to
									share or use such information for any other purposes.
								</p>
								<p>
									Other Situations. We may disclose your information, including
									personal information:
								</p>
								<p>
									In response to a subpoena or similar investigative demand, a
									court order, or a request for cooperation from a law
									enforcement or other government agency; to establish or
									exercise our legal rights; to defend against legal claims; or
									as otherwise required by law. In such cases, we may raise or
									waive any legal objection or right available to us.
								</p>
								<p>
									When we believe disclosure is appropriate in connection with
									efforts to investigate, prevent, or take other action
									regarding illegal activity, suspected fraud or other
									wrongdoing; to protect and defend the rights, property or
									safety of our company, our users, our employees, or others; to
									comply with applicable law or cooperate with law enforcement;
									or to enforce our{" "}
									<Link to="/" className="link text-info">
										Terms of Use
									</Link>{" "}
									or other agreements or policies.
								</p>
								<p>
									In connection with a substantial corporate transaction, such
									as the sale of our business, a divestiture, merger,
									consolidation, or asset sale, or in the unlikely event of
									bankruptcy.
								</p>
								<p>
									Aggregated and/or non-personal information. We may use and
									share non-personal information we collect under any of the
									above circumstances. We may also share it with other third
									parties to develop and deliver targeted advertising on our
									Service and on websites or applications of third parties, and
									to analyze and report on advertising you see. We may combine
									non-personal information we collect with additional
									non-personal information collected from other sources. We also
									may share aggregated, non-personal information, or personal
									information in hashed, non-human readable form, with third
									parties, including advisors, advertisers and investors, for
									the purpose of conducting general business analysis or other
									business purposes. For example, we may engage a data provider
									who may collect web log data from you (including IP address
									and information about your browser or operating system), or
									place or recognize a unique cookie on your browser to enable
									you to receive customized ads or content. The cookies may
									reﬂect de-identified demographic or other data linked to data
									you voluntarily have submitted to us (such as your email
									address), that we may share with a data provider solely in
									hashed, non-human readable form. To opt-out of cookies that
									may be set by third party data or advertising partners, please
									go to{" "}
									<Link
										to="http://www.aboutads.info/choices/"
										className="link text-info"
									>
										http://www.aboutads.info/choices/
									</Link>
									.
								</p>
							</div>
							<div className="rights-content-wrapper">
								<h5 className="text-dark">Do Not Track Disclosure</h5>
								<p>
									Do Not Track (“DNT”) is a privacy preference that users can
									set in their web browsers. DNT is a way for users to inform
									websites and services that they do not want certain
									information about their webpage visits collected over time and
									across websites or online services. We are committed to
									providing you with meaningful choices about the information we
									collect and that is why we provide the opt-out links above.
									However, we do not recognize or respond to any DNT signals, as
									the Internet industry works toward defining exactly what DNT
									means, what it means to comply with DNT, and a common approach
									to responding to DNT.
								</p>
							</div>
							<div className="rights-content-wrapper">
								<h5 className="text-dark">Third Party Websites</h5>
								<p>
									There are a number of places on our Service where you may
									click on a link to access other websites that do not operate
									under this Privacy Policy. For example, if you click on an
									advertisement on our Service, you may be taken to a website
									that we do not control. These third- party websites may
									independently solicit and collect information, including
									personal information, from you and, in some instances, provide
									us with information about your activities on those websites.
									We recommend that you consult the privacy statements of all
									third-party websites you visit by clicking on the “privacy”
									link typically located at the bottom of the webpage you are
									visiting.
								</p>
							</div>
							<div className="rights-content-wrapper">
								<h5 className="text-dark">
									How you can access your information
								</h5>
								<p>
									If you have a Glimmer account, you have the ability to review
									and update your personal information within the Service by
									opening your account and going to settings. More information
									about how to contact us is provided below. You also may close
									your account at any time by visiting the “Settings” page for
									your account. If you close your account, we will retain
									certain information associated with your account for
									analytical purposes and recordkeeping integrity, as well as to
									prevent fraud, enforce our{" "}
									<Link to="/" className="link text-info">
										Terms of Use
									</Link>{" "}
									, take actions we deem necessary to protect the integrity of
									our Service or our users, or take other actions otherwise
									permitted by law. In addition, if certain information has
									already been provided to third parties as described in this
									Privacy Policy, retention of that information will be subject
									to those third parties’ policies.
								</p>
							</div>
							<div className="rights-content-wrapper">
								<h5 className="text-dark">
									Your choices about collection and use of your information
								</h5>
								<p>
									You can choose not to provide us with certain information, but
									that may result in you being unable to use certain features of
									our Service because such information may be required in order
									for you to register as user; purchase products or services;
									participate in a contest, promotion, survey, or sweepstakes;
									ask a question; or initiate other transactions.
								</p>
								<p>
									Our Service may also deliver notifications to your phone or
									mobile device. You can disable these notifications by going
									into “App Settings” on the app or by changing the settings on
									your mobile device.
								</p>
								<p>
									You can also control information collected by cookies. You can
									delete or decline cookies by changing your browser settings.
									Click “help” in the toolbar of most browsers for instructions.
								</p>
							</div>
							<div className="rights-content-wrapper">
								<h5 className="text-dark">
									How we protect your personal information
								</h5>
								<p>
									We take security measures to help safeguard your personal
									information from unauthorized access and disclosure. However,
									no system can be completely secure. Therefore, although we
									take steps to secure your information, we do not promise, and
									you should not expect, that your personal information, chats,
									or other communications will always remain secure. Users
									should also take care with how they handle and disclose their
									personal information and should avoid sending personal
									information through insecure email. Please refer to the
									Federal Trade Commission’s website at{" "}
									<Link
										to="http://www.ftc.gov/bcp/menus/consumer/data.shtm"
										className="text-info"
									>
										http://www.ftc.gov/bcp/menus/consumer/data.shtm
									</Link>{" "}
									for information about how to protect yourself against identity
									theft.
								</p>
							</div>
							<div className="rights-content-wrapper">
								<h5 className="text-dark">
									Information you provide about yourself while using our Service
								</h5>
								<p>
									We provide areas on our Service where you can post information
									about yourself and others and communicate with others. Such
									postings are governed by our{" "}
									<Link to="/" className="link text-info">
										Terms of Use
									</Link>
									. Also, whenever you voluntarily disclose personal information
									on publicly-viewable pages, that information will be publicly
									available and can be collected and used by others. For
									example, if you post your email address, you may receive
									unsolicited messages. We cannot control who reads your posting
									or what other users may do with the information you
									voluntarily post, so we encourage you to exercise discretion
									and caution with respect to your personal information.
								</p>
							</div>
							<div className="rights-content-wrapper">
								<h5 className="text-dark">Children’s privacy</h5>
								<p>
									Although our Service is a general audience Service, we
									restrict the use of our service to individuals age 18 and
									above. We do not knowingly collect, maintain, or use personal
									information from children under the age of 18.
								</p>
							</div>
							<div className="rights-content-wrapper">
								<h5 className="text-dark">
									Visiting our Service from outside the United States
								</h5>
								<p>
									If you are visiting our Service from outside the United
									States, please be aware that your information may be
									transferred to, stored, and processed in the United States
									where our servers are located and our central database is
									operated. By using our services, you understand and agree that
									your information may be transferred to our facilities and
									those third parties with whom we share it as described in this
									privacy policy.
								</p>
							</div>
							<div className="rights-content-wrapper">
								<h5 className="text-dark">No Rights of Third Parties</h5>
								<p>
									This Privacy Policy does not create rights enforceable by
									third parties or require disclosure of any personal
									information relating to users of the website.
								</p>
							</div>
							<div className="rights-content-wrapper">
								<h5 className="text-dark">Changes to this Privacy Policy</h5>
								<p>
									We will occasionally update this Privacy Policy. When we post
									changes to this Privacy Policy, we will revise the “last
									updated” date at the top of this Privacy Policy. We recommend
									that you check our Service from time to time to inform
									yourself of any changes in this Privacy Policy or any of our
									other policies.
								</p>
							</div>
							<div className="rights-content-wrapper">
								<h5 className="text-dark">How to contact us</h5>
								<p>
									If you have any questions about this Privacy Policy, please
									contact us by email or postal mail as follows:
								</p>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
			{/* bill of rights ends here */}
			<Footer />
		</>
	);
};

export default GlimmerBillRights;
