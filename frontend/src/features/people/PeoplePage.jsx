import { useState } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Mail, Linkedin, Phone } from "lucide-react";
import { getCompanyData } from "../../utils/companyData";
import EmailDraftModal from "./EmailDraftModal";

const PeoplePage = () => {
	const { companyName } = useParams();
	const companyData = getCompanyData(companyName);

	// Handle case where company data doesn't exist
	if (!companyData || !companyData.people) {
		return (
			<div className="flex items-center justify-center min-h-screen">
				<div className="text-center">
					<h2 className="text-2xl font-bold text-gray-900 mb-2">
						No People Data
					</h2>
					<p className="text-gray-600">
						Contact information is not available for this company.
					</p>
				</div>
			</div>
		);
	}

	const { people } = companyData;
	const [selectedContact, setSelectedContact] = useState(null);

	const ContactCard = ({ person, isPrimary = false }) => (
		<div className="card transition-transform hover:-translate-y-1">
			<div className="flex items-start gap-3 md:gap-4">
				<div className="relative flex-shrink-0">
					<img
						src={`/images/people/${person.photo}`}
						alt={person.name}
						className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 md:border-4 border-gray-100"
						onError={(e) => {
							// Fallback avatar with initials
							const initials = person.name
								.split(" ")
								.map((n) => n[0])
								.join("");
							e.target.outerHTML = `<div class="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-ups-brown to-ups-gold flex items-center justify-center text-white font-bold text-lg md:text-xl border-2 md:border-4 border-gray-100">${initials}</div>`;
						}}
					/>
					{isPrimary && (
						<div className="absolute -top-1 -right-1 bg-ups-gold text-ups-brown text-xs font-bold px-2 py-1 rounded-full">
							Primary
						</div>
					)}
				</div>

				<div className="flex-1 min-w-0">
					<h3 className="font-bold text-base md:text-lg text-gray-900">
						{person.name}
					</h3>
					<p className="text-gray-600 text-xs md:text-sm mb-2 md:mb-3">
						{person.title}
					</p>
					{person.department && (
						<p className="text-gray-500 text-xs mb-3">{person.department}</p>
					)}

					<div className="flex items-center gap-2">
						<button
							onClick={() => setSelectedContact(person)}
							className="p-2 bg-gray-100 hover:bg-ups-gold/20 rounded-lg transition-colors group"
							title="Send Email"
						>
							<Mail
								size={18}
								className="text-gray-600 group-hover:text-ups-brown"
							/>
						</button>
						<a
							href={`https://${person.linkedin}`}
							target="_blank"
							rel="noopener noreferrer"
							className="p-2 bg-gray-100 hover:bg-blue-50 rounded-lg transition-colors group"
							title="LinkedIn Profile"
						>
							<Linkedin
								size={18}
								className="text-gray-600 group-hover:text-blue-600"
							/>
						</a>
						{person.phone && (
							<a
								href={`tel:${person.phone}`}
								className="p-2 bg-gray-100 hover:bg-green-50 rounded-lg transition-colors group"
								title="Call"
							>
								<Phone
									size={18}
									className="text-gray-600 group-hover:text-green-600"
								/>
							</a>
						)}
					</div>
				</div>
			</div>
		</div>
	);

	ContactCard.propTypes = {
		person: PropTypes.shape({
			photo: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
			department: PropTypes.string,
			linkedin: PropTypes.string.isRequired,
			phone: PropTypes.string,
		}).isRequired,
		isPrimary: PropTypes.bool,
	};

	const LinkedInSuggestionCard = ({ person }) => (
		<div className="bg-white rounded-lg p-4 border border-gray-200 hover:border-ups-teal transition-colors">
			<div className="flex items-center gap-3 mb-3">
				<img
					src={`/images/people/${person.photo}`}
					alt={person.name}
					className="w-12 h-12 rounded-full object-cover"
					onError={(e) => {
						const initials = person.name
							.split(" ")
							.map((n) => n[0])
							.join("");
						e.target.outerHTML = `<div class="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-semibold text-sm">${initials}</div>`;
					}}
				/>
				<div className="flex-1">
					<h4 className="font-semibold text-gray-900">{person.name}</h4>
					<p className="text-xs text-gray-600">{person.title}</p>
					<p className="text-xs text-gray-500">{person.company}</p>
				</div>
			</div>
			<a
				href={`https://${person.linkedin}`}
				target="_blank"
				rel="noopener noreferrer"
				className="block text-center bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2 rounded-lg transition-colors"
			>
				Message on LinkedIn &gt;
			</a>
		</div>
	);

	LinkedInSuggestionCard.propTypes = {
		person: PropTypes.shape({
			photo: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
			company: PropTypes.string.isRequired,
			linkedin: PropTypes.string.isRequired,
		}).isRequired,
	};

	const UPSConnectionCard = ({ person }) => (
		<div className="bg-white rounded-lg p-4 border border-gray-200">
			<div className="flex items-center gap-3 mb-3">
				<img
					src={`/images/people/${person.photo}`}
					alt={person.name}
					className="w-12 h-12 rounded-full object-cover"
					onError={(e) => {
						const initials = person.name
							.split(" ")
							.map((n) => n[0])
							.join("");
						e.target.outerHTML = `<div class="w-12 h-12 rounded-full bg-gradient-to-br from-ups-brown to-ups-gold flex items-center justify-center text-white font-semibold text-sm">${initials}</div>`;
					}}
				/>
				<div className="flex-1">
					<h4 className="font-semibold text-gray-900">{person.name}</h4>
					<p className="text-xs text-gray-600">{person.title}</p>
					<p className="text-xs text-gray-500">{person.department}</p>
				</div>
			</div>
			<button className="w-full text-center bg-ups-gold hover:bg-ups-gold-dark text-ups-brown text-sm font-semibold py-2 rounded-lg transition-colors">
				{person.contact} &gt;
			</button>
		</div>
	);

	UPSConnectionCard.propTypes = {
		person: PropTypes.shape({
			photo: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
			department: PropTypes.string.isRequired,
			contact: PropTypes.string.isRequired,
		}).isRequired,
	};

	return (
		<div className="space-y-6 md:space-y-8">
			{/* Header */}
			<div>
				<h1 className="text-2xl md:text-3xl font-bold text-gray-900">People</h1>
				<p className="text-gray-500 mt-1 text-sm md:text-base">
					Key contacts and decision makers
				</p>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
				{/* Main Content - Left Side */}
				<div className="lg:col-span-2 space-y-4 md:space-y-6">
					{/* Logistics Decision Maker */}
					<div>
						<h2 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">
							Logistics Decision Maker
						</h2>
						<ContactCard
							person={people.logisticsDecisionMaker}
							isPrimary={true}
						/>
					</div>

					{/* Leadership */}
					<div>
						<h2 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">
							Leadership
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
							{people.leadership.map((person, index) => (
								<ContactCard key={index} person={person} />
							))}
						</div>
					</div>
				</div>

				{/* Sidebar - Right Side */}
				<div className="space-y-4 md:space-y-6">
					{/* LinkedIn Suggestions */}
					<div className="bg-gray-50 rounded-xl p-4 md:p-6">
						<h2 className="text-base md:text-lg font-bold text-gray-900 mb-3 md:mb-4">
							LinkedIn
						</h2>
						<div className="space-y-4">
							{people.linkedinConnections.map((person, index) => (
								<LinkedInSuggestionCard key={index} person={person} />
							))}
						</div>
					</div>

					{/* UPS Connections */}
					<div className="bg-gray-50 rounded-xl p-4 md:p-6">
						<h2 className="text-base md:text-lg font-bold text-gray-900 mb-3 md:mb-4">
							Other UPS Connections
						</h2>
						<div className="space-y-4">
							{people.upsConnections.map((person, index) => (
								<UPSConnectionCard key={index} person={person} />
							))}
						</div>
					</div>
				</div>
			</div>

			{/* Email Draft Modal */}
			<AnimatePresence>
				{selectedContact && (
					<EmailDraftModal
						contact={selectedContact}
						companyData={companyData}
						onClose={() => setSelectedContact(null)}
					/>
				)}
			</AnimatePresence>
		</div>
	);
};

export default PeoplePage;
