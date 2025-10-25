// Ingram Micro — full data model for UPS Digital Sales Assistant
// Public facts are cited in the chat above; fields marked "mock" are placeholders for UI parity.

export const ingramData = {
    // =========================
    // Company Basic Info
    // =========================
    companyInfo: {
        name: "Ingram Micro Holding Corporation",
        displayName: "Ingram Micro",
        website: "ingrammicro.com",
        headquarters: "Irvine, California, USA",
        established: 1979, // founded as Micro D (public)
        founders: ["Geza Czige", "Lorraine Mecca"],
        ceo: "Paul Bay",
        cfo: "Mike Zilis",
        evpGlobalOps: "Bill Ross",
        industry: "Technology Distribution, Cloud Marketplace & Supply Chain Services",
        isUPSCustomer: true, // mock assumption for demo parity
        customerSince: 2012, // mock
        shipsWorldwide: true,
        hasPodcast: false,
        footprint: {
            countries: 57, // public
            logisticsAndServiceCenters: 134 // public
        }
    },

    // =========================
    // Financials
    // =========================
    financials: {
        fiscalYear2024: {
            netSales: { value: 48000, label: "$48.0B" }, // public (approx)
            internationalSalesShare: "≈66%", // public (10-K)
            grossMargin: { value: 7.18, label: "7.18%" },// public (AR)
            adjEBITDA: { value: 1320, label: "$1.32B" } // public (call/press)
        },
        latestQuarter: {
            period: "Q2 FY2025 (quarter ended Jun 28, 2025)",
            revenue: { value: 12794, label: "$12.794B", change: "+10.9%", trend: "up" },
            grossMargin: { value: 6.56, label: "6.56%", change: "−62 bps", trend: "down" },
            netIncome: { value: 37.8, label: "$37.8M", change: "−30.7%", trend: "down" },
            details: "Growth across all geographic segments; gross profit ~$839.2M"
        },
        // Structured for UI compatibility
        revenue: {
            value: 12794,
            label: "$12.794B",
            period: "Last Quarter (Q2 FY2025)",
            change: "+10.9%",
            trend: "up",
            details: "Q2 FY2025 ended Jun 28, 2025"
        },
        grossMargin: {
            value: 839.2,
            label: "$839.2M",
            period: "Q2 Gross Profit",
            change: "+10.9%",
            trend: "up",
            details: "Gross profit $839.2M"
        },
        adjustedEBITDA: {
            value: 1320,
            label: "$1,320M",
            period: "FY2024",
            change: "+8%",
            trend: "up",
            details: "Adjusted EBITDA strong performance"
        },
        freeCashFlow: {
            value: 443,
            label: "$443M",
            period: "FY2024",
            change: "+12%",
            trend: "up",
            details: "Adjusted Free Cash Flow; debt paydown $483M"
        }
    },

    // =========================
    // Offer Portfolio / Products
    // =========================
    products: [
        "Technology Products Distribution (client & endpoint, advanced solutions)",
        "Cloud Marketplace & Subscriptions (Xvantage, CloudBlue)",
        "Lifecycle Services (ITAD, repair, refurbishment, recommerce)",
        "Commerce & Fulfillment (eCommerce 3PL, omni-channel)",
        "Digital Platform & Data Services (Xvantage™)"
    ],

    // B2B price bands (broad, illustrative)
    priceRanges: {
        hardware: "$50 – $5,000+",
        software: "$1,000 – $500,000+",
        services: "$5,000 – $1,000,000+"
    },

    // =========================
    // Market & Mix
    // =========================
    market: "Worldwide",
    marketDetails: "Operations in 57 countries with 134 logistics & service centers; international operations account for ≈66% of revenue. Connects 1,500+ vendor partners with 161k+ customers and manages 36M+ cloud seats.",

    // =========================
    // Shipping Modes (typical for high-tech distribution)
    // =========================
    shippingModes: {
        freight: [
            { mode: "OCN", routes: ["APAC → North America", "APAC → Europe", "EMEA → Americas"] },
            { mode: "AIR", routes: ["APAC → US/EU (launches, high ASP)"] }
        ],
        standard: [
            { mode: "TRK", routes: ["Within North America", "Within EMEA", "Cross-border MX↔US"] }
        ]
    },

    // =========================
    // Competitors
    // =========================
    competitors: [
        { name: "TD SYNNEX (Tech Data + SYNNEX)", isUPSCustomer: false },
        { name: "Arrow Electronics", isUPSCustomer: false },
        { name: "ALSO Group", isUPSCustomer: false },
        { name: "ScanSource", isUPSCustomer: false }
    ],

    // =========================
    // Summary
    // =========================
    summary: `Ingram Micro is a platform-led global distributor and supply-chain services leader. With operations in 57 countries and 134 logistics & service centers, the company connects 1,500+ vendor partners with 161k+ customers and manages 36M+ cloud seats. Following its 2024 return to public markets, Ingram Micro continues to scale Xvantage (digital platform), expand cloud and lifecycle services, and optimize regional networks. FY2024 net sales were ~$48B; international operations accounted for ~66%. Near-term themes: cloud growth, device cycles (AI PCs/GPUs), duty & tariff complexity, and resilience/cyber posture.`,

    // =========================
    // Sources (public)
    // =========================
    sources: [
        { type: "SEC Prospectus 424B4 (Oct 2024)", url: "www.sec.gov/Archives/edgar/data/1897762/000119312524242843/d126458d424b4.htm" },
        { type: "Annual Report 2024 / 10-K 2025", url: "ir.ingrammicro.com/sec-filings" },
        { type: "Company Site — Leadership & Locations", url: "www.ingrammicro.com/en-us/company/about-us/leadership-team" },
        { type: "Press Release — Q2 FY2025 Results", url: "ir.ingrammicro.com/press-releases" },
        { type: "Reuters — Ransomware (Jul 2025)", url: "www.reuters.com/" }
    ],

    // =========================
    // Supply Chain Data (illustrative, aligned to public sites & typical flows)
    // =========================
    supplyChain: {
        lanes: [
            // APAC → US (electronics, components)
            { id: 1, from: "CN", to: "US", fromCity: "Shenzhen/Shanghai", toCity: "Los Angeles (Ontario)", fromCoords: [114.0579, 22.5431], toCoords: [-117.6509, 34.0633], what: "Notebooks, peripherals, components", mode: "OCN/AIR", volume: 95, facilities: ["DC: Mira Loma/Eastvale, CA"], type: "inbound" },
            { id: 2, from: "TW", to: "US", fromCity: "Taoyuan", toCity: "Los Angeles", fromCoords: [121.2168, 25.0478], toCoords: [-118.2437, 34.0522], what: "Motherboards, GPUs", mode: "AIR", volume: 60, facilities: ["Gateway: LAX", "DC: SoCal"], type: "inbound" },
            { id: 3, from: "KR", to: "US", fromCity: "Incheon/Busan", toCity: "Seattle/LA", fromCoords: [129.0403, 35.1796], toCoords: [-122.3321, 47.6062], what: "Displays, memory", mode: "OCN/AIR", volume: 54, facilities: ["SEA/LAX"], type: "inbound" },
            { id: 4, from: "MY", to: "US", fromCity: "Penang", toCity: "Memphis", fromCoords: [100.3354, 5.4141], toCoords: [-90.0490, 35.1495], what: "EMS builds, semis", mode: "AIR/OCN", volume: 41, facilities: ["DC: Memphis, TN"], type: "inbound" },
            { id: 5, from: "SG", to: "EU", fromCity: "Singapore", toCity: "Rotterdam", fromCoords: [103.8198, 1.3521], toCoords: [4.4777, 51.9244], what: "Networking, storage", mode: "AIR", volume: 32, facilities: ["EU Hub: NL"], type: "inbound" },
            { id: 6, from: "CN", to: "EU", fromCity: "Shanghai", toCity: "Rotterdam", fromCoords: [121.4737, 31.2304], toCoords: [4.4777, 51.9244], what: "Peripherals & accessories", mode: "OCN", volume: 70, facilities: ["EU Hub: NL"], type: "inbound" },
            { id: 7, from: "VN", to: "US", fromCity: "Ho Chi Minh City", toCity: "Los Angeles", fromCoords: [106.6297, 10.8231], toCoords: [-118.2437, 34.0522], what: "Accessories/devices", mode: "OCN", volume: 28, facilities: ["SoCal DC"], type: "inbound" },
            { id: 8, from: "MX", to: "US", fromCity: "Guadalajara", toCity: "Dallas", fromCoords: [-103.3494, 20.6597], toCoords: [-96.7970, 32.7767], what: "Nearshore assemblies", mode: "TRK", volume: 22, facilities: ["DC: Dallas, TX"], type: "inbound" },
            // Regional replenishment
            { id: 9, from: "NL", to: "SE", fromCity: "Rotterdam/Bleiswijk", toCity: "Rosersberg", fromCoords: [4.5225, 51.9244], toCoords: [17.9089, 59.5713], what: "EU regional replenishment", mode: "TRK", volume: 18, facilities: ["Sorter: Rosersberg (case study)"], type: "intra-EU" },
            // US outbound / returns & recommerce
            { id: 10, from: "US", to: "US", fromCity: "Plainfield, IN", toCity: "Nationwide", fromCoords: [-86.3694, 39.7042], toCoords: [-95.7129, 37.0902], what: "ITAD returns/recommerce", mode: "TRK", volume: 40, facilities: ["Lifecycle: Plainfield, IN"], type: "outbound" }
        ],
        facilities: [
            { type: "headquarter", city: "Irvine", country: "US", coords: [-117.8540, 33.6770] },
            { type: "warehouse", city: "Mira Loma/Eastvale", country: "US", coords: [-117.5610, 34.0100] },
            { type: "warehouse", city: "Memphis", country: "US", coords: [-90.0480, 35.1490] },
            { type: "lifecycle", city: "Plainfield (Indianapolis)", country: "US", coords: [-86.3690, 39.7000] },
            { type: "hub", city: "Rotterdam/Bleiswijk", country: "NL", coords: [4.4990, 51.9220] },
            { type: "hub", city: "Waalwijk/Tilburg", country: "NL", coords: [5.0700, 51.6820] },
            { type: "site", city: "Mississauga (Canada HQ)", country: "CA", coords: [-79.6510, 43.6310] },
            { type: "site", city: "Singapore", country: "SG", coords: [103.8198, 1.3521] },
            { type: "site", city: "Penang", country: "MY", coords: [100.3354, 5.4141] }
        ]
    },

    // =========================
    // Critical Insights
    // =========================
    criticalInsights: {
        external: [
            {
                id: 1,
                title: "Return to Public Markets & Platform Focus",
                content: "Ingram Micro relisted on NYSE (INGM) in Oct 2024; strategy emphasizes platform-led distribution via Xvantage and cloud/lifecycle growth.",
                sources: ["SEC 424B4", "Reuters IPO coverage"],
                date: "Oct 2024",
                category: "Capital Markets"
            },
            {
                id: 2,
                title: "International Mix Elevated",
                content: "FY2024: ≈66% of net sales generated outside North America; APAC growth offset EMEA softness.",
                sources: ["10-K/AR 2024–25"],
                date: "FY2024",
                category: "Geography"
            },
            {
                id: 3,
                title: "Q2 FY2025 Acceleration",
                content: "Net sales $12.794B (+10.9% YoY); broad-based growth across all regions; GM 6.56%, NI $37.8M.",
                sources: ["Q2 FY2025 press release"],
                date: "Aug 6, 2025",
                category: "Financial Performance"
            },
            {
                id: 4,
                title: "Cybersecurity Incident",
                content: "Company identified ransomware on certain internal systems (July 2025); engaged forensic experts and law enforcement.",
                sources: ["Reuters (July 2025)"],
                date: "Jul 2025",
                category: "Risk"
            }
        ],

        // UPS-internal style KPIs (mock for UI parity)
        upsInsights: {
            insuranceClaims: { value: 742, label: "~$742K", description: "Insurance claims YTD", trend: "stable" },
            shipmentTrend: { value: 2.1, label: "Approx +2.1%", description: "Volume vs 6 months back", trend: "up" },
            claimsResolved: { value: 88, label: "88%", description: "Resolved on time", trend: "up" },
            claimsRejected: { value: 2.0, label: "2.0%", description: "Rejected for various reasons", trend: "stable" }
        },

        // Charts (mock data shaped for your UI)
        shipmentVolume: [
            { quarter: "Jan–Mar", GND: 220, "2DA": 180, "1DA": 70 },
            { quarter: "Apr–Jun", GND: 260, "2DA": 220, "1DA": 95 },
            { quarter: "Jul–Sep", GND: 230, "2DA": 200, "1DA": 85 },
            { quarter: "Oct–Dec", GND: 280, "2DA": 240, "1DA": 110 }
        ],
        insuredPackagesAndClaims: [
            { month: "Jan", insuredPackages: 220, claims: 14 },
            { month: "Feb", insuredPackages: 250, claims: 16 },
            { month: "Mar", insuredPackages: 280, claims: 18 },
            { month: "Apr", insuredPackages: 340, claims: 26 },
            { month: "May", insuredPackages: 410, claims: 34 },
            { month: "Jun", insuredPackages: 470, claims: 44 },
            { month: "Jul", insuredPackages: 460, claims: 39 },
            { month: "Aug", insuredPackages: 500, claims: 47 },
            { month: "Sep", insuredPackages: 520, claims: 51 },
            { month: "Oct", insuredPackages: 560, claims: 58 },
            { month: "Nov", insuredPackages: 600, claims: 72 },
            { month: "Dec", insuredPackages: 640, claims: 88 }
        ]
    },

    // =========================
    // People / Contacts
    // =========================
    people: {
        logisticsDecisionMaker: {
            name: "Bill Ross",
            title: "EVP – Global Operations & Engineering",
            email: "", // not public
            phone: "", // not public
            linkedin: "https://www.linkedin.com/in/bill-ross-a63abb",
            photo: "",
            department: "Global Operations & Engineering"
        },
        leadership: [
            { name: "Paul Bay", title: "Chief Executive Officer", email: "", phone: "", linkedin: "https://www.linkedin.com/in/pabay", photo: "paul-bay.jpg" },
            { name: "Mike Zilis", title: "EVP & Chief Financial Officer", email: "", phone: "", linkedin: "", photo: "mike-zilis.jpg" },
            { name: "Sanjib Sahoo", title: "EVP & President, Global Platform Group", email: "", phone: "", linkedin: "https://www.linkedin.com/in/sanjibsahoo", photo: "sanjib-sahoo.jpg" }
        ],
        linkedinConnections: [
            // sample cross-company intros (mock) - tech industry connections relevant to Ingram Micro
            { name: "David Park", title: "VP Global Operations", company: "Dell Technologies", linkedin: "linkedin.com/in/davidpark", photo: "dave-bergman.jpg", mutualConnections: 18 },
            { name: "Michelle Torres", title: "Director Channel Partnerships", company: "HP Inc.", linkedin: "linkedin.com/in/michelletorres", photo: "sarah-mitchell.jpg", mutualConnections: 14 }
        ],
        upsConnections: [
            { name: "Robert Thompson", title: "Account Executive", department: "UPS Capital", contact: "Message on Teams", photo: "robert-thompson.jpg" },
            { name: "Lisa Anderson", title: "Solutions Architect", department: "UPS Supply Chain Solutions", contact: "Message on Teams", photo: "lisa-anderson.jpg" }
        ]
    },

    // =========================
    // Sales Opportunities / Talk Track (tailored to Ingram)
    // =========================
    salesOpportunities: [
        {
            id: 1,
            title: "High-Value Electronics Secure Transport",
            description: "Standardize insured, secure-handled corridors (APAC→US/EU) for devices >$1k ASP; ParcelPro® + cockpit-level tracking on key lanes.",
            impact: "High", timeline: "Q3 2025", estimatedValue: "$1.0M–$2.0M (risk mitigation)"
        },
        {
            id: 2,
            title: "Global Trade Compliance & Brokerage",
            description: "Pre-classify top SKUs, enable bonded flows, and optimize duty/VAT across CN/MY/TW→US/EU; fast pre-clearance and landed-cost modeling.",
            impact: "High", timeline: "Q4 2025", estimatedValue: "$0.5M–$1.0M annually"
        },
        {
            id: 3,
            title: "Trans-Pacific & Intra-Asia Consolidation",
            description: "Consolidate APAC origins into EU NL hub and US West Coast; evaluate sea-air and priority uplift for launch windows.",
            impact: "Medium", timeline: "Q1–Q2 2026", estimatedValue: "$2.0M–$3.0M annually"
        },
        {
            id: 4,
            title: "Omni-Channel Fulfillment & Returns",
            description: "Extend 3PL capacity with UPS e-fulfillment & reverse logistics (inspection/repair/refurb) to shrink refund cycle times.",
            impact: "High", timeline: "Ongoing", estimatedValue: "$3.0M–$4.0M annually"
        },
        {
            id: 5,
            title: "Advanced Warehouse Automation & Sortation",
            description: "Upgrade EU sorter (e.g., Rosersberg-like blueprint) with modular throughput to ~6k pph; WMS/TMS integration for uptime.",
            impact: "Medium", timeline: "Q1–Q2 2026", estimatedValue: "$1.0M–$2.0M annually"
        },
        {
            id: 6,
            title: "Resilience Modeling & Risk Mitigation",
            description: "Scenario-plan for tariffs/cyber/port congestion; alt gateways + buffer stock; insure & finance cargo via UPS Capital.",
            impact: "High", timeline: "Q3–Q4 2025", estimatedValue: "$1.0M–$2.0M (risk mitigation)"
        }
    ],

    // =========================
    // AI Sales Intelligence (same UX pattern you asked for)
    // =========================
    aiSalesIntelligence: {
        quickInsights: {
            walletShareGaps: [
                { title: "Parcel/Cargo Insurance Not Standardized", description: "APAC→US/EU high-ASP device lanes", action: "Cross-sell InsureShield® + ParcelPro®", category: "cross-sell" },
                { title: "Returns & ITAD Under-consolidated", description: "Refund cycle time long; fragmented hubs", action: "UPS Returns® + Lifecycle hubs", category: "cross-sell" },
                { title: "Trade Compliance Opportunities", description: "Tariff/duty leakage on select HS codes", action: "UPS Brokerage + Trade Mgmt", category: "up-sell" },
                { title: "Tower/TMS in Xvantage", description: "Milestone ETAs not piped to platform", action: "SCS Control Tower/TMS API", category: "up-sell" },
                { title: "Address Intelligence", description: "B2B→B2C last-mile friction", action: "Address Validation + Delivery Defense™", category: "cross-sell" }
            ],
            urgentActions: [
                { title: "Pilot Insure-at-Order (APAC→US)", goal: "≥60% insured share on >$1k orders in Q4", timeline: "Next 30 days", priority: "high" },
                { title: "Stand Up US & EU Returns Hubs", goal: "Refund <3 biz days; NPS +5", timeline: "Next 45 days", priority: "high" },
                { title: "Brokerage Health-Check", goal: "Pre-classify top 500 SKUs", timeline: "Next 60 days", priority: "medium" }
            ],
            weekOverWeekSignals: [
                { metric: "Insured Share vs Severity", trend: "Insured ↑ but severity ↑ in Q4", insight: "Bundle insurance on key corridors" },
                { metric: "Express Share on Launches", trend: "Creeping up during GPU/AI PC cycles", insight: "Formalize Air-Gating SOP" }
            ]
        },

        executiveAnalysis: {
            summary: "Platform-led distributor with cloud & lifecycle scale; FY2024 ~$48B net sales; international mix ≈66%. Q2 FY2025 growth +10.9% YoY; margin mixed. Offers that win now: insured corridors, trade optimization, tower visibility into Xvantage, and consolidated returns/ITAD.",
            keyFindings: [
                { id: 1, title: "High-ASP Exposure", description: "Device/value mix justifies standardized insurance & secure handling", icon: "shield" },
                { id: 2, title: "International Complexity", description: "Duty/VAT & tariff scenarios need engineered brokerage", icon: "globe" },
                { id: 3, title: "Platform Integration", description: "PO→Door milestones should land in Xvantage", icon: "api" },
                { id: 4, title: "Reverse Logistics ROI", description: "Refund-time and recommerce recovery are material levers", icon: "recycle" }
            ],
            opportunities: [
                "Insure-at-order + secure corridors for high-value devices",
                "Trade mgmt & brokerage across APAC→US/EU",
                "Control Tower-lite with exception center",
                "Returns + ITAD with sustainability KPIs"
            ],
            risks: [
                "Cyber events (continuity/claims readiness)",
                "Tariff volatility & port congestion",
                "Peak launch variability (expedite overuse)"
            ],
            trendCommentary: "Seasonality spikes (Q2, Q4) + launch waves → build Air-Gating blocks; integrate ETA promises."
        },

        aiRecommendations: [
            { id: 1, type: "Competitive Response", title: "InsureShield® + ParcelPro®", currentAdoption: "25%", suggested: "60%", reasoning: "Q4 severity & value mix", impact: "$1.1M–$1.8M", impactDescription: "loss avoidance + CX", crossSell: "UPS Capital", color: "purple" },
            { id: 2, type: "Defensive Move", title: "Returns 2.0 (US & EU)", currentAdoption: "Fragmented", suggested: "2 hubs + label-in-box", reasoning: "Faster refunds reduce churn", impact: "$0.9M–$1.5M", impactDescription: "CX + cost", crossSell: "UPS Returns / Lifecycle", color: "orange" },
            { id: 3, type: "Up-Sell", title: "Trade Management & Brokerage", scope: "CN/MY/TW→US/EU top 500 SKUs", suggested: "Pre-classify + bonded", impact: "$0.7M–$1.2M", impactDescription: "duty/VAT savings", crossSell: "UPS Brokerage", color: "blue" },
            { id: 4, type: "Cross-Sell", title: "Control Tower/TMS → Xvantage API", scope: "CN→US, CN→EU", suggested: "Milestone ETAs + exceptions", impact: "$0.8M–$1.4M", impactDescription: "OTIF + dwell", crossSell: "UPS SCS", color: "teal" },
            { id: 5, type: "Cross-Sell", title: "Address Intelligence + Delivery Defense™", current: "Corrections pockets", suggested: "Pre-ship validation", impact: "$0.3M–$0.6M", impactDescription: "fees & claims ↓", crossSell: "UPS Tech", color: "green" },
            { id: 6, type: "Cross-Sell", title: "Air-Gating SOP for Launches", scope: "APAC→US/EU", suggested: "Pre-book blocks", impact: "$0.9M–$1.6M", impactDescription: "fewer expedites", crossSell: "UPS Air", color: "indigo" }
        ],

        playbooks: [
            { id: 1, name: "Secure Device Corridors", audience: "Ops/Compliance/Finance", offer: "InsureShield® + ParcelPro® + SOP", kpis: ["Insured share ≥60%", "Claim cycle −30%"], timeline: "30 days", proof: "Severity delta vs baseline", icon: "shield" },
            { id: 2, name: "Brokerage Fast-Pass", audience: "Trade/Finance", offer: "Pre-classification + bonded + advance entry", kpis: ["Duty $/unit ↓", "Release times ↓"], timeline: "45–60 days", proof: "Top 500 SKUs before/after", icon: "passport" },
            { id: 3, name: "Tower-Lite in 60 Days", audience: "Ops/IT", offer: "PO→Door milestones + exceptions", kpis: ["OTIF +3–5 pts", "Dwell −10–15%"], timeline: "60 days", proof: "Lane 1 & 6 pilots", icon: "tower" },
            { id: 4, name: "Returns + ITAD Hubs", audience: "CX/Lifecycle", offer: "2 hubs + label-in-box + recommerce", kpis: ["Refund ≤3 days", "Recovery ↑"], timeline: "Kickoff now; live in 6–8 weeks", proof: "NPS/contacts delta", icon: "recycle" }
        ],

        laneRiskMatrix: [
            { lane: 1, route: "CN → US (LA)", mode: "OCN/AIR", volume: 95, risk: "Launch spikes, tariffs", bestFitOffer: "Air-Gating, Trade Mgmt, InsureShield®" },
            { lane: 2, route: "TW → US (LA)", mode: "AIR", volume: 60, risk: "High ASP value", bestFitOffer: "ParcelPro®, secure handling" },
            { lane: 3, route: "KR → US (SEA/LA)", mode: "OCN/AIR", volume: 54, risk: "Schedule variability", bestFitOffer: "Date-certain + Tower" },
            { lane: 4, route: "MY → US (MEM)", mode: "AIR/OCN", volume: 41, risk: "Duty/VAT complexity", bestFitOffer: "Brokerage optimization" },
            { lane: 6, route: "CN → EU (NL)", mode: "OCN", volume: 70, risk: "Port congestion", bestFitOffer: "Tower + alt gateways" },
            { lane: 8, route: "MX → US (DAL)", mode: "TRK", volume: 22, risk: "Border ops", bestFitOffer: "Nearshore pilot" },
            { lane: 10, route: "US ITAD → US", mode: "TRK", volume: 40, risk: "Seasonal spikes (returns)", bestFitOffer: "Returns + Lifecycle + Insurance" }
        ],

        talkingPoints: [
            "Standardize insured corridors on APAC→US/EU device lanes; Q4 severity says it pays for itself.",
            "Pre-classify top 500 SKUs and engineer duties—avoid tariff surprises and speed release.",
            "Pipe Tower milestones into Xvantage so buyers see PO→Door ETA and exceptions in one place.",
            "Consolidate returns + ITAD (Plainfield US, NL EU) to halve refund cycle and boost recovery."
        ],

        quickFacts: {
            contactsUS: "Sales & Support: (800) 456-8000 • RMA/Returns: (800) 274-4800",
            hqAddress: "3351 Michelson Dr, Suite 100, Irvine, CA 92612",
            euHubs: "Netherlands (Bleiswijk/Waalwijk) + EU road to Nordics (Rosersberg)",
            lifecycle: "Plainfield, IN ITAD & recommerce campus; multiple certifications",
            platform: "Xvantage digital marketplace; CloudBlue for telco/MSPs"
        },

        totalProgramPotential: {
            min: "$5.0M",
            max: "$8.6M",
            description: "Annualized Value (Savings + Growth) from Recommended Offers (Modeled)."
        }
    }
};

