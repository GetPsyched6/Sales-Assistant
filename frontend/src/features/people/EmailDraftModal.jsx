import { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { X, Paperclip, Send } from "lucide-react";

const EmailDraftModal = ({ contact, onClose }) => {
	const [emailData, setEmailData] = useState({
		to: contact.email,
		cc: "",
		bcc: "",
		subject:
			"Elevate UnderArmour's shipment protection with InsureShield shipping insurance",
		body: `Hi ${contact.name.split(" ")[0]},

As Under Armour celebrates a decade of trusted operations with UPS, extending that reliability with InsureShield shipping insurance can add multi-carrier, multi-modal protection, porch piracy coverage, and data-driven risk insights for true peace of mind.

InsureShield protects against loss and damage across carriers and modes, with claims paid up to the invoice value of goods plus shipping expenses and convenient 24/7 portal access for management and reporting.

Here are flexible program options that can align to Under Armour's workflows and growth:

- InsureShield Complete: one policy to protect everything from small parcels to freight, including air and ocean, designed around how products are made, moved, and sold.
- InsureShield for UPS Packages: elect coverage conveniently from approved UPS system; with simple, consolidated administration tied to the existing UPS account structure.
- InsureShield Connect: transactional, pay-as-you-go protection across all carriers and modes, built for domestic and international supply chains and seasonality.
- Insurance and claims APIs: automate eligibility, quotes, and elections, offer protection to customers in minutes to streamline operations and CX.
- InsureShield App for Shopify: let customers opt into protection at checkout, set rules by value, SKU, or geography, and benefit from claims typically paid in days.
- InsureShield OnDemand: protect one-time or ad-hoc shipments in a few minutes without standing integration or policy changes.

The claims experience is fast and digital—submit online with guided documentation, track status in the portal 24/7, and benefit from payments in days rather than weeks for covered claims.

InsureShield also leverages enriched delivery data and predictive analytics to help anticipate shipping outcomes, which can inform smarter coverage rules and post-purchase experiences for Under Armour's customers.

If helpful, a brief introduction call can align on lanes, modes, and system connections—whether via APIs, or approved UPS systems—so the program matches Under Armour's SKUs, order values, and destinations from day one.

Warm regards,
Michael Smith
Regional Sales Manager, UPS Capital
michael.smith@upscapital.com
123 456 7890`,
	});
	const [showCc, setShowCc] = useState(false);

	return (
		<>
			{/* Backdrop */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				onClick={onClose}
				className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
			/>

			{/* Modal */}
			<motion.div
				initial={{ opacity: 0, scale: 0.95, y: 20 }}
				animate={{ opacity: 1, scale: 1, y: 0 }}
				exit={{ opacity: 0, scale: 0.95, y: 20 }}
				className="fixed inset-4 md:inset-10 bg-white rounded-xl shadow-2xl z-50 flex flex-col overflow-hidden"
			>
				{/* Header */}
				<div className="flex items-center justify-between p-4 border-b">
					<h2 className="text-lg font-semibold text-gray-900">Draft*</h2>
					<button
						onClick={onClose}
						className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
					>
						<X size={20} />
					</button>
				</div>

				{/* Email Fields */}
				<div className="border-b bg-gray-50">
					<div className="flex items-center px-4 py-3 border-b">
						<label className="text-sm font-medium text-gray-600 w-12">To</label>
						<input
							type="email"
							value={emailData.to}
							onChange={(e) =>
								setEmailData({ ...emailData, to: e.target.value })
							}
							className="flex-1 bg-transparent outline-none text-sm text-gray-900"
						/>
						<button
							onClick={() => setShowCc(!showCc)}
							className="text-sm text-gray-500 hover:text-gray-700 ml-4"
						>
							Bcc
						</button>
					</div>

					{showCc && (
						<div className="flex items-center px-4 py-3 border-b">
							<label className="text-sm font-medium text-gray-600 w-12">
								Cc
							</label>
							<input
								type="email"
								value={emailData.cc}
								onChange={(e) =>
									setEmailData({ ...emailData, cc: e.target.value })
								}
								placeholder=""
								className="flex-1 bg-transparent outline-none text-sm text-gray-900"
							/>
						</div>
					)}

					<div className="flex items-center px-4 py-3">
						<input
							type="text"
							value={emailData.subject}
							onChange={(e) =>
								setEmailData({ ...emailData, subject: e.target.value })
							}
							placeholder="Subject"
							className="flex-1 bg-transparent outline-none text-sm font-medium text-gray-900"
						/>
					</div>
				</div>

				{/* Attachment Indicator */}
				<div className="px-4 py-2 bg-blue-50 border-b flex items-center gap-2 text-sm text-blue-700">
					<Paperclip size={16} />
					<span>Attached File</span>
				</div>

				{/* Email Body */}
				<div className="flex-1 overflow-y-auto p-6">
					<textarea
						value={emailData.body}
						onChange={(e) =>
							setEmailData({ ...emailData, body: e.target.value })
						}
						className="w-full h-full resize-none outline-none text-sm text-gray-900 leading-relaxed font-mono"
						style={{ minHeight: "400px" }}
					/>
				</div>

				{/* QR Code Section */}
				<div className="px-6 pb-4 flex items-end justify-between">
					<div>
						<p className="text-sm text-gray-700 mb-1">Warm regards,</p>
						<p className="text-sm font-semibold text-gray-900">Michael Smith</p>
						<p className="text-sm text-gray-600">
							Regional Sales Manager, UPS Capital
						</p>
						<p className="text-sm text-gray-600">
							michael.smith@upscapital.com
						</p>
						<p className="text-sm text-gray-600">123 456 7890</p>
					</div>
					<div className="flex flex-col items-center">
						<div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center mb-1">
							<img
								src="/images/qr-code.png"
								alt="QR Code"
								className="w-full h-full object-contain"
								onError={(e) => {
									e.target.outerHTML =
										'<div class="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg flex items-center justify-center text-xs text-gray-600">QR</div>';
								}}
							/>
						</div>
						<p className="text-xs text-gray-500 font-semibold">SCAN ME</p>
					</div>
				</div>

				{/* Footer Actions */}
				<div className="flex items-center justify-between p-4 border-t bg-gray-50">
					<button
						onClick={onClose}
						className="px-6 py-2 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
					>
						Save Draft
					</button>
					<button
						onClick={() => {
							// Mock send action
							alert("Email would be sent in production");
							onClose();
						}}
						className="flex items-center gap-2 bg-ups-gold hover:bg-ups-gold-dark text-ups-brown font-semibold px-8 py-2 rounded-lg transition-colors shadow-md"
					>
						Send Email
						<Send size={18} />
					</button>
				</div>
			</motion.div>
		</>
	);
};

EmailDraftModal.propTypes = {
	contact: PropTypes.shape({
		email: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
	}).isRequired,
	onClose: PropTypes.func.isRequired,
};

export default EmailDraftModal;
