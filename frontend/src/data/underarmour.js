// Mock data for Under Armour - extracted from UA.md

export const underArmourData = {
    // Company Basic Info
    companyInfo: {
        name: "Under Armour",
        displayName: "UnderArmour Inc",
        website: "underarmour.com",
        headquarters: "Baltimore, Maryland, USA",
        established: 1996,
        founder: "Kevin Plank",
        ceo: "Kevin A. Plank",
        industry: "Athletic Apparel & Footwear",
        isUPSCustomer: true,
        customerSince: 2008,
        shipsWorldwide: true,
    },

    // Financials
    financials: {
        revenue: {
            value: 1234, // $1.234B
            label: "$1,234M",
            period: "Last Quarter (Q1 FY26)",
            change: "+25%",
            trend: "up",
            details: "Q1 FY26 ended Jun 30, 2025"
        },
        grossMargin: {
            value: 48.2,
            label: "48.2%",
            period: "From last quarter",
            change: "+15%",
            trend: "up",
            details: "↑70 bps YoY"
        },
        profit: {
            value: 6534, // Adjusted for demo
            label: "$6,534M",
            period: "From last month",
            change: "+10%",
            trend: "up",
            details: "Operating income improving"
        },
        loss: {
            value: 1875,
            label: "$1,875M",
            period: "From last month",
            change: "7%",
            trend: "down",
            details: "FY25 GAAP NI impact reducing"
        }
    },

    // Products
    products: [
        "HeatGear® Apparel",
        "ColdGear® Apparel",
        "Curry Brand Basketball Shoes",
        "UA Flow Performance Line",
        "UA Halo Footwear",
        "Training & Fitness Gear",
        "Team Sports Equipment"
    ],

    // Retail Price Ranges
    priceRanges: {
        apparel: "$25 - $150",
        footwear: "$70 - $225",
        accessories: "$15 - $100"
    },

    // Market
    market: "Worldwide",
    marketDetails: "North America (~60% FY25), EMEA strongest FY25, APAC reset underway",

    // Shipping Modes
    shippingModes: {
        freight: [
            {
                mode: "FF", routes: [
                    "ID to CN: Air Purifier",
                    "VN to CN: Lamp",
                    "CN to SG: Smart Rings",
                    "CN to US: Fitness trackers"
                ]
            },
        ],
        standard: [
            {
                mode: "SP", routes: [
                    "CN to US: Smart Rings",
                    "SG to SEA: Fitness trackers"
                ]
            }
        ]
    },

    // Competitors
    competitors: [
        { name: "Nike", isUPSCustomer: false },
        { name: "adidas", isUPSCustomer: false },
        { name: "Puma", isUPSCustomer: false },
        { name: "Lululemon", isUPSCustomer: false },
    ],

    // Summary
    summary: `Under Armour is a global leader in athletic performance apparel, footwear, and accessories. The company is executing a strategic reset focused on premium full-price sell-through, supply chain optimization, and margin improvement. Key product platforms include HeatGear®/ColdGear® apparel technology and the Curry Brand basketball line featuring UA Flow cushioning. With DTC channels representing ~40% of revenue at structurally higher margins, UA is rebalancing its distribution while investing in product innovation and brand positioning. Recent restructuring includes the planned exit of the Rialto, CA distribution center by March 2026 as part of a broader efficiency initiative.`,

    // Sources
    sources: [
        { type: "Google", url: "www.google.com" },
        { type: "Company Website", url: "www.underarmour.com" },
    ],

    // Supply Chain Data
    supplyChain: {
        lanes: [
            {
                id: 1,
                from: "VN",
                to: "US",
                fromCity: "Ho Chi Minh City",
                toCity: "Los Angeles",
                fromCoords: [106.6297, 10.8231],
                toCoords: [-118.2437, 34.0522],
                what: "Footwear, apparel (Curry/HeatGear)",
                mode: "OCN/AIR",
                volume: 48,
                facilities: ["Factory: Hai Duong", "DC: US-SE"],
                type: "inbound"
            },
            {
                id: 2,
                from: "JO",
                to: "US",
                fromCity: "Amman",
                toCity: "New York",
                fromCoords: [35.9450, 31.9454],
                toCoords: [-74.0060, 40.7128],
                what: "Team apparel",
                mode: "OCN",
                volume: 36,
                facilities: ["Factory: Irbid/Ramtha QIZ", "DC: US-E"],
                type: "inbound"
            },
            {
                id: 3,
                from: "JO",
                to: "EU",
                fromCity: "Amman",
                toCity: "Amsterdam",
                fromCoords: [35.9450, 31.9454],
                toCoords: [4.9041, 52.3676],
                what: "Team apparel",
                mode: "OCN",
                volume: 36,
                facilities: ["Factory: Irbid/Ramtha QIZ", "DC: NL"],
                type: "inbound"
            },
            {
                id: 4,
                from: "CN",
                to: "US",
                fromCity: "Shanghai",
                toCity: "Los Angeles",
                fromCoords: [121.4737, 31.2304],
                toCoords: [-118.2437, 34.0522],
                what: "Accessories & apparel",
                mode: "OCN",
                volume: 43,
                facilities: ["Factory: Guangdong/Jiangsu"],
                type: "inbound"
            },
            {
                id: 5,
                from: "CN",
                to: "EU",
                fromCity: "Shanghai",
                toCity: "Amsterdam",
                fromCoords: [121.4737, 31.2304],
                toCoords: [4.9041, 52.3676],
                what: "Accessories & apparel",
                mode: "OCN",
                volume: 43,
                facilities: ["Factory: Guangdong/Jiangsu"],
                type: "inbound"
            },
            {
                id: 6,
                from: "KH",
                to: "US",
                fromCity: "Phnom Penh",
                toCity: "Los Angeles",
                fromCoords: [104.9160, 11.5564],
                toCoords: [-118.2437, 34.0522],
                what: "Apparel",
                mode: "OCN",
                volume: 35,
                facilities: ["Factory: Phnom Penh/Kandal"],
                type: "inbound"
            },
            {
                id: 7,
                from: "ID",
                to: "US",
                fromCity: "Jakarta",
                toCity: "Los Angeles",
                fromCoords: [106.8456, -6.2088],
                toCoords: [-118.2437, 34.0522],
                what: "Apparel/accessories",
                mode: "OCN",
                volume: 26,
                facilities: ["Factory: Central Java"],
                type: "inbound"
            },
            {
                id: 8,
                from: "MY",
                to: "US",
                fromCity: "Kuala Lumpur",
                toCity: "Los Angeles",
                fromCoords: [101.6869, 3.1390],
                toCoords: [-118.2437, 34.0522],
                what: "Apparel",
                mode: "OCN",
                volume: 24,
                facilities: ["Factory: Johor"],
                type: "inbound"
            },
            {
                id: 9,
                from: "EG",
                to: "EU",
                fromCity: "Cairo",
                toCity: "Amsterdam",
                fromCoords: [31.2357, 30.0444],
                toCoords: [4.9041, 52.3676],
                what: "Apparel",
                mode: "OCN",
                volume: 18,
                facilities: ["Factory: Alexandria/6th Oct", "EU hub: NL"],
                type: "inbound"
            },
            {
                id: 10,
                from: "EG",
                to: "US",
                fromCity: "Cairo",
                toCity: "New York",
                fromCoords: [31.2357, 30.0444],
                toCoords: [-74.0060, 40.7128],
                what: "Apparel",
                mode: "OCN",
                volume: 18,
                facilities: ["Factory: Alexandria/6th Oct"],
                type: "inbound"
            },
            {
                id: 11,
                from: "TR",
                to: "EU",
                fromCity: "Istanbul",
                toCity: "Amsterdam",
                fromCoords: [28.9784, 41.0082],
                toCoords: [4.9041, 52.3676],
                what: "Apparel",
                mode: "OCN/TRK",
                volume: 14,
                facilities: ["Factory: Bursa/Istanbul", "EU hub: NL"],
                type: "inbound"
            },
            {
                id: 12,
                from: "MX",
                to: "US",
                fromCity: "Mexico City",
                toCity: "Dallas",
                fromCoords: [-99.1332, 19.4326],
                toCoords: [-96.7970, 32.7767],
                what: "Nearshore apparel",
                mode: "TRK/OCN",
                volume: 20,
                facilities: ["Factory: NL/Tamaulipas", "DC: TX"],
                type: "inbound"
            },
            {
                id: 13,
                from: "US",
                to: "US",
                fromCity: "Baltimore",
                toCity: "Various",
                fromCoords: [-76.6122, 39.2904],
                toCoords: [-95.7129, 37.0902],
                what: "Wholesale distribution",
                mode: "TRK",
                volume: 56,
                facilities: ["HQ & DC: Baltimore, MD"],
                type: "outbound"
            },
            {
                id: 14,
                from: "US",
                to: "CA",
                fromCity: "Seattle",
                toCity: "Vancouver",
                fromCoords: [-122.3321, 47.6062],
                toCoords: [-123.1207, 49.2827],
                what: "Canada distribution",
                mode: "TRK",
                volume: 32,
                facilities: ["DC: Pacific NW transload"],
                type: "outbound"
            },
            {
                id: 15,
                from: "US",
                to: "EU",
                fromCity: "Baltimore",
                toCity: "Amsterdam",
                fromCoords: [-76.6122, 39.2904],
                toCoords: [4.9041, 52.3676],
                what: "EU wholesale",
                mode: "OCN/AIR",
                volume: 26,
                facilities: ["HQ: Baltimore", "EU hub: NL"],
                type: "outbound"
            },
        ],

        facilities: [
            { type: "headquarter", city: "Baltimore", country: "US", coords: [-76.6122, 39.2904] },
            { type: "factory", city: "Ho Chi Minh City", country: "VN", coords: [106.6297, 10.8231] },
            { type: "factory", city: "Amman", country: "JO", coords: [35.9450, 31.9454] },
            { type: "factory", city: "Shanghai", country: "CN", coords: [121.4737, 31.2304] },
            { type: "factory", city: "Phnom Penh", country: "KH", coords: [104.9160, 11.5564] },
            { type: "factory", city: "Jakarta", country: "ID", coords: [106.8456, -6.2088] },
            { type: "supplier", city: "Kuala Lumpur", country: "MY", coords: [101.6869, 3.1390] },
            { type: "supplier", city: "Cairo", country: "EG", coords: [31.2357, 30.0444] },
            { type: "supplier", city: "Istanbul", country: "TR", coords: [28.9784, 41.0082] },
            { type: "warehouse", city: "Los Angeles", country: "US", coords: [-118.2437, 34.0522] },
            { type: "warehouse", city: "New York", country: "US", coords: [-74.0060, 40.7128] },
            { type: "warehouse", city: "Dallas", country: "US", coords: [-96.7970, 32.7767] },
            { type: "warehouse", city: "Amsterdam", country: "EU", coords: [4.9041, 52.3676] },
        ]
    },

    // Critical Insights
    criticalInsights: {
        external: [
            {
                id: 1,
                title: "Margins up while revenue resets",
                content: "GM expansion +170–240 bps from lower freight/product costs and fewer promos; revenue softness persists, especially in North America. Strategic focus on premium full-price sell-through showing early success.",
                sources: ["Reuters", "UA PR"],
                date: "Q4 FY25",
                category: "Financial Performance"
            },
            {
                id: 2,
                title: "FY25 → FY26 Reset & Restructuring",
                content: "Under Armour raised restructuring range and plans to exit Rialto DC by Mar 2026. Expected charges $140–$160M. This consolidation will improve supply chain efficiency and reduce operational complexity.",
                sources: ["PR Newswire"],
                date: "Sep 9, 2024",
                category: "Supply Chain"
            },
            {
                id: 3,
                title: "Leadership: Kevin Plank Returns as CEO",
                content: "Kevin Plank returned as CEO on Apr 1, 2024, bringing renewed focus on brand identity, merchandising speed, and premium positioning. Early initiatives include product line rationalization and DTC experience enhancement.",
                sources: ["UA PR", "Business Insider"],
                date: "Mar 13, 2024",
                category: "Leadership"
            },
            {
                id: 4,
                title: "Q1 FY26 Regional Performance",
                content: "NA $670M (−5%) / Intl $467M (−1%). EMEA showing strong growth +10%, APAC undergoing reset −10%. Strategic investments in EMEA market positioning paying off.",
                sources: ["UA PR"],
                date: "Aug 2025",
                category: "Regional Performance"
            },
            {
                id: 5,
                title: "DTC vs Wholesale Channel Dynamics",
                content: "Wholesale −12%, DTC −8% in 2Q FY25; eCom −21% as promos pulled back. DTC represents ~40% of FY25 revenue with significantly higher margins. Focus shifting to quality of sale over volume.",
                sources: ["PR Newswire", "Trefis"],
                date: "Nov 7, 2024",
                category: "Sales Channels"
            },
            {
                id: 6,
                title: "Tariff/Trade Watch: Vietnam Exposure",
                content: "Uncertainty around Vietnam → US tariff exposure referenced in outlook; potential GM impact. Company evaluating supply chain diversification and nearshoring options to mitigate risk.",
                sources: ["Reuters"],
                date: "May–Aug 2025",
                category: "Risk Factors"
            }
        ],

        // UPS Internal Insights
        upsInsights: {
            insuranceClaims: {
                value: 736,
                label: "~$736K",
                description: "Insurance claims YTD",
                trend: "stable"
            },
            shipmentTrend: {
                value: -3,
                label: "Approx ~3%",
                description: "Compared to 6 months back",
                trend: "down"
            },
            claimsResolved: {
                value: 86,
                label: "86%",
                description: "Resolved on time",
                trend: "up"
            },
            claimsRejected: {
                value: 2.2,
                label: "2.2%",
                description: "Rejected due to various reasons",
                trend: "stable"
            }
        },

        // Shipment Volume by Quarter (for chart)
        shipmentVolume: [
            { quarter: "Jan to Mar", GND: 160, "2DA": 190, "1DA": 80 },
            { quarter: "Apr to Jun", GND: 200, "2DA": 240, "1DA": 120 },
            { quarter: "Jul to Sep", GND: 155, "2DA": 180, "1DA": 85 },
            { quarter: "Oct to Dec", GND: 190, "2DA": 220, "1DA": 110 },
        ],

        // Insured Packages & Claims (for chart)
        insuredPackagesAndClaims: [
            { month: "Jan", insuredPackages: 180, claims: 12 },
            { month: "Feb", insuredPackages: 210, claims: 16 },
            { month: "Mar", insuredPackages: 240, claims: 18 },
            { month: "Apr", insuredPackages: 320, claims: 30 },
            { month: "May", insuredPackages: 410, claims: 44 },
            { month: "Jun", insuredPackages: 460, claims: 52 },
            { month: "Jul", insuredPackages: 430, claims: 38 },
            { month: "Aug", insuredPackages: 470, claims: 46 },
            { month: "Sep", insuredPackages: 490, claims: 51 },
            { month: "Oct", insuredPackages: 520, claims: 58 },
            { month: "Nov", insuredPackages: 560, claims: 74 },
            { month: "Dec", insuredPackages: 590, claims: 92 },
        ]
    },

    // People / Contacts
    people: {
        logisticsDecisionMaker: {
            name: "Shawn Curran",
            title: "Chief Supply Chain Officer",
            email: "shawn.curran@underarmour.com",
            phone: "+1 (410) 468-2000",
            linkedin: "linkedin.com/in/shawncurran",
            photo: "shawn-curran.jpg",
            department: "Global Supply Chain & Operations"
        },

        leadership: [
            {
                name: "Kevin A. Plank",
                title: "CEO & Co-founder",
                email: "kevin.plank@underarmour.com",
                phone: "+1 (410) 468-2000",
                linkedin: "linkedin.com/in/kevinplank",
                photo: "kevin-plank.jpg"
            },
            {
                name: "Dave Bergman",
                title: "Chief Financial Officer",
                email: "dave.bergman@underarmour.com",
                phone: "+1 (410) 468-2000",
                linkedin: "linkedin.com/in/davebergman",
                photo: "dave-bergman.jpg"
            },
            {
                name: "Eric Liedtke",
                title: "Brand President",
                email: "eric.liedtke@underarmour.com",
                phone: "+1 (410) 468-2000",
                linkedin: "linkedin.com/in/ericliedtke",
                photo: "eric-liedtke.jpg"
            },
            {
                name: "Yassine Saidi",
                title: "Chief Product Officer",
                email: "yassine.saidi@underarmour.com",
                phone: "+1 (410) 468-2000",
                linkedin: "linkedin.com/in/yassinesaidi",
                photo: "yassine-saidi.jpg"
            }
        ],

        // LinkedIn Suggestions (from other companies)
        linkedinConnections: [
            {
                name: "Sarah Mitchell",
                title: "VP of Logistics",
                company: "Nike",
                linkedin: "linkedin.com/in/sarahmitchell",
                photo: "sarah-mitchell.jpg",
                mutualConnections: 12
            },
            {
                name: "James Chen",
                title: "Director of Supply Chain",
                company: "adidas",
                linkedin: "linkedin.com/in/jameschen",
                photo: "james-chen.jpg",
                mutualConnections: 8
            }
        ],

        // UPS Connections
        upsConnections: [
            {
                name: "Robert Thompson",
                title: "Account Executive",
                department: "UPS Capital",
                contact: "Message on Teams",
                photo: "robert-thompson.jpg"
            },
            {
                name: "Lisa Anderson",
                title: "Solutions Architect",
                department: "UPS Supply Chain Solutions",
                contact: "Message on Teams",
                photo: "lisa-anderson.jpg"
            }
        ]
    },

    // Sales Opportunities / Talk Track
    salesOpportunities: [
        {
            id: 1,
            title: "Ocean Consolidation + Air Gating Optimization",
            description: "Ocean consolidation + AIR gating from VN/KH/CN to US-SE/East DC with handoff SLAs; measurable GM support via mode mix and dwell cuts.",
            impact: "High",
            timeline: "Q1-Q2 2026",
            estimatedValue: "$2.5M - $4M annually"
        },
        {
            id: 2,
            title: "EU Agility Enhancement",
            description: "TR/EG/VN → NL hub → EU retailers; faster seasonal turns; duty/tariff mitigation scenarios.",
            impact: "Medium",
            timeline: "Q2 2026",
            estimatedValue: "$1.5M - $2.5M annually"
        },
        {
            id: 3,
            title: "Launch Orchestration for Premium Products",
            description: "Curry/UA Halo drops with premium AIR uplift + returns-reduction package (fit/ETA promises).",
            impact: "High",
            timeline: "Ongoing",
            estimatedValue: "$3M - $5M annually"
        },
        {
            id: 4,
            title: "Resilience Modeling & Risk Mitigation",
            description: "Rialto exit + possible VN tariff shocks stress-tests; build contingency lanes & buffer stock strategies.",
            impact: "High",
            timeline: "Q3-Q4 2025",
            estimatedValue: "$1M - $2M (risk mitigation)"
        }
    ],

    // AI Sales Intelligence Data
    aiSalesIntelligence: {
        // Quick Insights
        quickInsights: {
            walletShareGaps: [
                {
                    title: "Returns & Exchanges Under-Penetrated",
                    description: "Peak months Oct–Dec. Mock penetration: 35% of DTC",
                    target: "70%",
                    category: "cross-sell"
                },
                {
                    title: "Parcel Insurance Not Bundled",
                    description: "EU/APAC DTC lanes while claims trend up into Q4",
                    action: "Cross-sell UPS Capital InsureShield®",
                    category: "cross-sell"
                },
                {
                    title: "Air Gating for Launches",
                    description: "Seasonality + Curry/Halo drops → sporadic AIR usage",
                    action: "Standardize a Launch Playbook",
                    category: "up-sell"
                },
                {
                    title: "EU Hub Orchestration",
                    description: "TR/EG/VN → NL active but no unified SLA/visibility across 3PL mix",
                    action: "Upsell SCS Control Tower + Trade Management",
                    category: "up-sell"
                },
                {
                    title: "Address/Returns Friction",
                    description: "Address corrections & porch-loss pockets in US Sunbelt",
                    action: "Offer Address Validation API + Delivery Defense™",
                    category: "cross-sell"
                }
            ],
            urgentActions: [
                {
                    title: "Pilot Insure-at-Cart",
                    description: "On US DTC for high-ASP footwear",
                    goal: "Insure ≥60% of orders in Nov–Dec",
                    timeline: "Next 30 days",
                    priority: "high"
                },
                {
                    title: "Enable Consolidated Drop-off Returns",
                    description: "Ahead of holiday season",
                    goal: "NPS +5, refunds <3 days",
                    timeline: "Next 30 days",
                    priority: "high"
                },
                {
                    title: "Stand Up Launch Air Gating Template",
                    description: "VN/CN → US-SE DC for next drop",
                    goal: "Lock capacity and ETAs 21 days prior",
                    timeline: "Next 30 days",
                    priority: "medium"
                }
            ],
            weekOverWeekSignals: [
                {
                    metric: "Insured Packages",
                    trend: "Jan 180 → Dec 590",
                    insight: "Claims also rise (12 → 92)"
                },
                {
                    metric: "Quarterly Parcel Mix",
                    trend: "Peaks in Apr–Jun & Oct–Dec",
                    insight: "2-day share expands in launches → formalize air-gating"
                }
            ]
        },

        // Executive Analysis
        executiveAnalysis: {
            summary: "Under Armour is executing a strategic reset with CEO Kevin Plank's return in April 2024, focusing on premium full-price sell-through and margin improvement. The company generated $1.134B in Q1 FY26 revenue with an impressive 48.2% gross margin—up 70 basis points year-over-year—driven by supply chain efficiencies and reduced promotional activity. Their global supply chain spans 15+ countries, with Vietnam, Jordan, and China as primary manufacturing hubs, shipping to US and European markets. The planned exit of the Rialto, California distribution center by March 2026 signals a broader consolidation strategy to optimize their fulfillment network. With DTC channels representing ~40% of revenue at structurally higher margins, UA is rebalancing distribution while investing heavily in product innovation platforms like Curry Brand basketball shoes and UA Flow cushioning technology. Key opportunity areas include: launch orchestration for premium product drops, EU control-tower visibility across multi-origin lanes, modernized returns infrastructure for the holiday season, and comprehensive insurance bundling to protect high-value shipments and enhance customer experience.",
            keyFindings: [
                {
                    id: 1,
                    title: "Launch Cadence ≠ Standard SOP",
                    description: "Expedited costs + variability; formal air-gating unlocks predictable cycle times",
                    icon: "rocket"
                },
                {
                    id: 2,
                    title: "Claims Rising into Q4",
                    description: "While insured penetration lags → Capital cross-sell lowers volatility and CX pain",
                    icon: "shield"
                },
                {
                    id: 3,
                    title: "EU Hub Strong",
                    description: "But multi-origin mix lacks unified SLA/PO-to-Door visibility → SCS Tower fit",
                    icon: "globe"
                },
                {
                    id: 4,
                    title: "Address & Last-Mile Friction",
                    description: "Pockets → Validation API + Delivery Defense™ bundle",
                    icon: "map"
                },
                {
                    id: 5,
                    title: "Tariff/Nearshore Watch",
                    description: "VN→US exposure → Trade Management modeling + MX nearshore pilots align with lanes",
                    icon: "alert"
                }
            ],
            opportunities: [
                "Holiday returns & exchanges program (DTC)",
                "Insurance bundling on high-ASP items (Curry/Halo)",
                "EU orchestration & duty optimization",
                "Launch Air Gating templated SOP"
            ],
            risks: [
                "Promo pullback may compress DTC volume in shoulder weeks",
                "Tariff shocks (VN) or port congestion → need buffer stock / alt gateways",
                "Change fatigue post-restructure; design low-lift pilots"
            ],
            trendCommentary: "Q2 & Q4 volume peaks suggest two annual playbooks: Spring/Summer and Holiday. Claims slope is non-linear (sharp Q4), implying both higher exposure and customer sensitivity → strong case for Capital + Returns."
        },

        // AI Recommendations
        aiRecommendations: [
            {
                id: 1,
                type: "Competitive Response",
                title: "Parcel Insurance @ Checkout (US/EU)",
                currentAdoption: "22%",
                suggested: "60%",
                reasoning: "Rising loss/claims; high-ASP footwear skews severity",
                impact: "$1.2M–$1.8M",
                impactDescription: "loss avoidance + NPS ↑",
                crossSell: "UPS Capital InsureShield®",
                color: "purple"
            },
            {
                id: 2,
                type: "Defensive Move",
                title: "Holiday Returns Modernization",
                currentAdoption: "35%",
                suggested: "70%",
                reasoning: "Faster refunds reduce churn; fewer WISMO contacts",
                impact: "$0.8M–$1.4M",
                impactDescription: "CX savings + conversion ↑ 1–2 pts",
                crossSell: "UPS Returns / Happy Returns™",
                color: "orange"
            },
            {
                id: 3,
                type: "Up-Sell",
                title: "Launch Air Gating — Standardized SOP",
                scope: "VN/CN → US-SE DC for Curry/Halo drops",
                suggested: "Pre-booked blocks + milestone ETAs",
                impact: "$1.0M–$1.6M",
                impactDescription: "from fewer expedites / sell-through lift",
                crossSell: "Premium AIR tiers + guaranteed SLAs",
                color: "blue"
            },
            {
                id: 4,
                type: "Cross-Sell",
                title: "EU Control Tower — SCS Orchestration + Trade",
                scope: "TR/EG/VN → NL hub → EU retailers",
                suggested: "Single-pane visibility (PO→Door)",
                impact: "$0.9M–$1.7M",
                impactDescription: "via dwell reduction, OTIF ↑, duty optimization",
                crossSell: "UPS SCS (Control Tower, TMS), Trade Management Services",
                color: "teal"
            },
            {
                id: 5,
                type: "Cross-Sell",
                title: "Address Intelligence — Validation + Delivery Defense™",
                current: "Corrections & porch-loss pockets in US Sunbelt",
                suggested: "Pre-ship validation + delivery preference tools",
                impact: "$0.3M–$0.6M",
                impactDescription: "avoidable fees + claims ↓ 10–15%",
                crossSell: "Address Validation API, Delivery Defense™",
                color: "green"
            },
            {
                id: 6,
                type: "Cross-Sell",
                title: "Nearshore Pilot — MX → US Fast-Cycle Apparel",
                lane: "MX→US TRK/OCN (id 12), Vol: 20",
                move: "90-day capsule program with 2-week replenishment",
                impact: "Inventory savings 8–12%",
                impactDescription: "markdowns ↓",
                crossSell: "SCS network + brokerage",
                color: "indigo"
            },
            {
                id: 7,
                type: "Cross-Sell",
                title: "Premium Promise — Date-Certain + Returns Label in Box",
                suggested: "Date-certain on new launches + pre-printed returns",
                impact: "Conversion ↑ 0.5–1.0 pt",
                impactDescription: "contact rate −8–12%",
                crossSell: "Delivery Date API, UPS Returns®",
                color: "pink"
            }
        ],

        // Playbooks
        playbooks: [
            {
                id: 1,
                name: "Holiday Returns 2.0",
                audience: "DTC Ops + CX + eCom PM",
                offer: "UPS Returns® + Happy Returns™ + label-in-box",
                kpis: ["Refund time ≤3 days", "NPS +5", "WISMO −10%"],
                timeline: "Kickoff in Aug; live by Oct 1",
                proof: "A/B on 10% of traffic; publish win-rate",
                icon: "package"
            },
            {
                id: 2,
                name: "Insure-at-Cart",
                audience: "Finance + DTC PM",
                offer: "InsureShield® with opt-in defaults on >$120 orders",
                kpis: ["Insured share 60%", "Claim cycle −30%"],
                timeline: "3-week sprint; live by Nov 1",
                proof: "Loss-avoidance model; VOC on resolution time",
                icon: "shield"
            },
            {
                id: 3,
                name: "Launch Air Gating SOP",
                audience: "Merch/Launch + Supply Chain",
                offer: "Pre-booked air blocks; door-date promise",
                kpis: ["Expedites −40%", "On-time floor sets >98%"],
                timeline: "D-21 lock; D-14 confirm; D-7 hand-off",
                proof: "Sell-through in 7 days vs baseline",
                icon: "plane"
            },
            {
                id: 4,
                name: "EU Control Tower + Trade",
                audience: "EU Logistics + Finance",
                offer: "SCS Tower + TMS + duty optimization",
                kpis: ["OTIF +3–5 pts", "Dwell −12%", "Duty savings target set"],
                timeline: "60-day deploy; 90-day benefits",
                proof: "Lane-by-lane before/after",
                icon: "tower"
            }
        ],

        // Lane Risk Matrix
        laneRiskMatrix: [
            {
                lane: 1,
                route: "VN → US",
                mode: "OCN/AIR",
                volume: 48,
                risk: "Tariff/launch timing",
                bestFitOffer: "Air Gating, Trade Mgmt"
            },
            {
                lane: 2,
                route: "JO → US",
                mode: "OCN",
                volume: 36,
                risk: "Geo/political window",
                bestFitOffer: "Control Tower"
            },
            {
                lane: 3,
                route: "JO → EU",
                mode: "OCN",
                volume: 36,
                risk: "EU duty nuance",
                bestFitOffer: "Trade Mgmt"
            },
            {
                lane: 4,
                route: "CN → US",
                mode: "OCN",
                volume: 43,
                risk: "Port congestion",
                bestFitOffer: "Tower + Alt gateways"
            },
            {
                lane: 6,
                route: "KH → US",
                mode: "OCN",
                volume: 35,
                risk: "Seasonal spikes",
                bestFitOffer: "Returns + Insurance"
            },
            {
                lane: 12,
                route: "MX → US",
                mode: "TRK/OCN",
                volume: 20,
                risk: "Border ops",
                bestFitOffer: "Nearshore Pilot"
            }
        ],

        // Executive Talking Points
        talkingPoints: [
            "You already offer 60-day free returns—let's halve refund time and reduce contacts with a UPS Returns + Happy Returns™ pilot before holiday.",
            "UA Rewards is a value lever; add InsureShield® to protect high-ASP footwear and keep NPS high during peak.",
            "With the Rialto exit by Mar '26, this is the window to stand up a Control Tower and re-slot lanes into surviving DCs.",
            "Your $50 free-ship threshold drives baskets—let's provide date-certain promises without over-using costly express tiers.",
            "Curry launches deserve pre-booked air blocks so we stop paying expedite premiums week-of."
        ],

        // Quick Facts
        quickFacts: {
            shipping: "Free Standard Ship (US): ≥ $50; else ~US$8. Express: ~3 days ~US$15; Priority: ~2 days ~US$25. Free returns (60 days)",
            stores: "NA Doors (3/31/2025): ~180 Factory House / ~15 Brand House. Trend: rationalization",
            network: "Rialto, CA DC exit by Mar 2026; restructuring charges updated Sept '24",
            launches: "Curry franchise remains global launch driver → build Launch Air Gating SOP around drop weeks"
        },

        // Total Program Potential
        totalProgramPotential: {
            min: "$5.2M",
            max: "$8.7M",
            description: "annual value (savings + growth), assuming phased adoption"
        }
    }
};

