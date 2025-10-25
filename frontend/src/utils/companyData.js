// Utility for dynamic company data loading
import { underArmourData } from "../data/underarmour";
import { ingramData } from "../data/ingram";

/**
 * Get company data based on company identifier
 * @param {string} companyName - Company identifier from URL (e.g., "underarmour", "ingram")
 * @returns {Object} Company data object or null if not found
 */
export const getCompanyData = (companyName) => {
	const normalizedName = companyName?.toLowerCase().trim();

	switch (normalizedName) {
		case "underarmour":
		case "under-armour":
		case "under_armour":
			return underArmourData;

		case "ingram":
		case "ingram-micro":
		case "ingram_micro":
		case "ingrammicro":
			return ingramData;

		default:
			console.warn(`Unknown company: ${companyName}`);
			return null;
	}
};

/**
 * Get company display name
 * @param {string} companyName - Company identifier from URL
 * @returns {string} Display name for the company
 */
export const getCompanyDisplayName = (companyName) => {
	const data = getCompanyData(companyName);
	return data?.companyInfo?.displayName || companyName;
};

/**
 * Check if field exists and has data
 * @param {any} field - Field to check
 * @returns {boolean} True if field exists and has data
 */
export const hasData = (field) => {
	if (field === null || field === undefined) return false;
	if (typeof field === "string") return field.trim().length > 0;
	if (Array.isArray(field)) return field.length > 0;
	if (typeof field === "object") return Object.keys(field).length > 0;
	return true;
};

/**
 * Safe accessor for nested data with fallback
 * @param {Object} obj - Object to access
 * @param {string} path - Dot-notation path (e.g., "company.info.name")
 * @param {any} defaultValue - Default value if path doesn't exist
 * @returns {any} Value at path or default
 */
export const safeGet = (obj, path, defaultValue = null) => {
	try {
		const keys = path.split(".");
		let result = obj;
		for (const key of keys) {
			if (result === null || result === undefined) return defaultValue;
			result = result[key];
		}
		return result !== undefined ? result : defaultValue;
	} catch {
		return defaultValue;
	}
};

