import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import MeetGlimmer from "../pages/MeetGlimmer/MeetGlimmer";
import Groups from "../pages/Groups/Groups";
import GroupDetail from "../pages/Groups/GroupDetail";
import GroupDetailMember from "../pages/Groups/GroupDetailMember";
import ContactUs from "../pages/ContactUs/ContactUs";
import CommunityGuidelines from "../pages/CommunityGuidelines/CommunityGuidelines";
import TermsOfUse from "../pages/Policy/TermsOfUse";
import GlimmerBillRights from "../pages/GlimmerBillRights/GlimmerBillRights";
import Blogs from "../pages/Blogs/Blogs";
import BlogDetail from "../pages/Blogs/BlogDetail";
import DisablityNews from "../pages/Blogs/DisablityNews";
import Faqs from "../pages/Faqs/Faqs";
import DatingTips from "../pages/DatingTips/DatingTips";
import MembershipPlans from "../pages/Memnership/MembershipPlans";
import MembershipCheckout from "../pages/checkout/MembershipCheckout";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import ResetPassword from "../pages/Auth/ResetPassword";
import Otp from "../pages/Auth/Otp";

const PublicRoutes = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/meet-glimmer" element={<MeetGlimmer />} />
					<Route path="/groups" element={<Groups />} />
					<Route path="/group-detail" element={<GroupDetail />} />
					<Route path="/group-detail-member" element={<GroupDetailMember />} />
					<Route path="/contact-us" element={<ContactUs />} />
					<Route
						path="/community-guidelines"
						element={<CommunityGuidelines />}
					/>
					<Route
						path="/glimmer-bill-of-rights"
						element={<GlimmerBillRights />}
					/>
					<Route path="/terms-of-use" element={<TermsOfUse />} />
					<Route path="/blogs" element={<Blogs />} />
					<Route path="/blog-detail" element={<BlogDetail />} />
					<Route
						path="/disability-news-and-views"
						element={<DisablityNews />}
					/>
					<Route path="/faqs" element={<Faqs />} />
					<Route path="/dating-tips" element={<DatingTips />} />
					<Route path="/membership-plans" element={<MembershipPlans />} />
					<Route path="/membership-checkout" element={<MembershipCheckout />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/reset-pass" element={<ResetPassword />} />
					<Route path="/otp" element={<Otp />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default PublicRoutes;
