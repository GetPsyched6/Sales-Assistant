# Under Armour — Digital Sales Assistant Dossier (Expanded)

> **Notes**
> - **Cited = public** facts (press releases, annual report, Reuters, etc.).
> - **Mock = demo-only** values to complete the UI (volumes, card KPIs, lane counts, contact routes).
> - Currency USD unless stated.

---

## HOME

### Financials (Company-Level Cards)

- **Revenue (Last Quarter):** **$1.134B** _(Q1 FY26; quarter ended Jun 30, 2025)_ • **GM 48.2%** (↑70 bps YoY). :contentReference[oaicite:0]{index=0}  
- **Gross Margin (Trailing/FY25):** **47.9%** (↑180 bps YoY). :contentReference[oaicite:1]{index=1}  
- **Profit (Q3 FY25 Adj. EPS):** **$0.08** (beat). :contentReference[oaicite:2]{index=2}  
- **Loss (FY25 GAAP NI):** **−$201M**; **Op. Income −$185M**. :contentReference[oaicite:3]{index=3}

**Context nuggets (for tooltips):**
- Q4 FY25 GM **46.7%** (↑170 bps) on lower freight/product costs & reduced discounting. :contentReference[oaicite:4]{index=4}  
- FY25 **Net revenue ~$5.16B** (company filings/press set). :contentReference[oaicite:5]{index=5}  
- FY25 Mix: **Apparel ~67% / Footwear ~23% / Accessories ~8%**. :contentReference[oaicite:6]{index=6}  
- FY25 Geography: **~60% North America**, remainder EMEA/APAC/LatAm. :contentReference[oaicite:7]{index=7}  
- Q1 FY26 split snapshot: **NA $670M (−5%) / Intl $467M (−1%)**; EMEA +10%, APAC −10% (cc). :contentReference[oaicite:8]{index=8}

---

### Company Snapshot

- **Website:** underarmour.com  
- **HQ:** Baltimore, Maryland, USA. :contentReference[oaicite:9]{index=9}  
- **Founded:** 1996 (Kevin Plank). **CEO & President (since Apr 1, 2024):** **Kevin A. Plank**. :contentReference[oaicite:10]{index=10}  
- **Industry:** Athletic apparel & footwear. :contentReference[oaicite:11]{index=11}  
- **Product Platforms:** **HeatGear® / ColdGear®** (apparel); **Curry Brand** on **UA Flow** (performance basketball); **UA Halo** footwear line announced FY25. :contentReference[oaicite:12]{index=12}  
- **Channel Mix Trend:** Wholesale down mid-single digits; DTC ~**~40%** and structurally higher margin; eCom tightening promos. :contentReference[oaicite:13]{index=13}  
- **Price Bands (market scan):** Apparel **$25–$150**, Footwear **$70–$225**, Accessories **$15–$100** (varies by model/region).  
- **Summary:** UA is resetting toward **full-price sell-through**, lower promos/inventory, and a FY25–26 **restructuring** including exit of **Rialto, CA DC by Mar 2026**; margin tailwinds from supply chain efficiencies + lower freight. :contentReference[oaicite:14]{index=14}

---

### Products (Examples)

- Apparel: HeatGear®, ColdGear®, baselayers, team/football/basketball, golf, training. :contentReference[oaicite:15]{index=15}  
- Footwear: Curry series (e.g., Curry Flow), UA Halo (trainer/runner/racer). :contentReference[oaicite:16]{index=16}  
- Accessories: Bags, headwear, socks, sport accessories. (Catalog)

---

### Retail Price (indicative bands)
- **Apparel:** $25–$150
- **Footwear:** $70–$225
- **Accessories:** $15–$100

---

### Market / Regions
- **North America (~60% FY25)**; **EMEA strongest FY25**; **APAC reset underway**. :contentReference[oaicite:17]{index=17}

---

### Shipping Modes (Overview)

- **Ocean (OCN):** Primary for wholesale replenishment (VN/KH/CN/JO/ID → US/EU). *(Mock routing based on supplier geos.)* :contentReference[oaicite:18]{index=18}  
- **Air (AIR):** Launch drops / constrained lead-time (e.g., Curry releases). :contentReference[oaicite:19]{index=19}  
- **Truck (TRK):** US domestic moves from DCs to wholesale & parcel hubs. *(Mock)*

---

### Competitors
- Nike, adidas, Puma, Lululemon (core set). 

---

### Sources (for the sidebar)
- Google News (latest): Reuters, PR Newswire, MarketWatch, Investopedia. :contentReference[oaicite:21]{index=21}  
- Company: UA Investors site (Annual Report FY25; Supplier List PDF; Press). :contentReference[oaicite:22]{index=22}

---

## SUPPLY CHAIN (Map + Lanes)

> **Public:** UA publishes a **Tier-1 (assembly) supplier list** covering >90% of business; countries include **Vietnam, Jordan, China, Cambodia, Indonesia, Malaysia, Egypt, Turkey, Mexico, El Salvador, Honduras, Guatemala, Nicaragua, Bangladesh, Pakistan, Ukraine, USA**, among others. :contentReference[oaicite:23]{index=23}  
> **Demo lanes & volumes below are Mock** (format ready for your map UI).

**Legend:** SUP = Supplier, FAC = Factory/Assembler, DC = Distribution Center, RTL = Retail/eCom  
**Mode:** OCN (Ocean), AIR (Air), TRK (Truck)

| # | From | To | What | Mode | Nodes | Est. 12-mo Vol (mock) |
|---|------|----|------|------|-------|-----------------------|
| 1 | **VN** | **US** | Footwear, apparel (Curry/HeatGear) | OCN/AIR | FAC: Hai Duong; DC: US-SE | **48** |
| 2 | **JO** | **US/EU** | Team apparel | OCN | FAC: Irbid/Ramtha QIZ; DC: US-E / NL | **36** |
| 3 | **CN** | **US/EU** | Accessories & apparel | OCN | FAC: Guangdong/Jiangsu | **43** |
| 4 | **KH** | **US** | Apparel | OCN | FAC: Phnom Penh/Kandal | **35** |
| 5 | **ID** | **US** | Apparel/accs | OCN | FAC: Central Java | **26** |
| 6 | **MY** | **US** | Apparel | OCN | FAC: Johor | **24** |
| 7 | **EG** | **EU/US** | Apparel | OCN | FAC: Alexandria/6th Oct | **18** |
| 8 | **TR** | **EU** | Apparel | OCN/TRK | FAC: Bursa/Istanbul; EU hub (NL) | **14** |
| 9 | **MX** | **US** | Nearshore apparel | TRK/OCN | FAC: NL/Tamaulipas; DC: TX | **20** |
|10 | **SV/HN/GT/NI** | **US** | Apparel | OCN | FAC: C.A. cluster | **22** |
|11 | **BD/PK** | **US/EU** | Socks/accs | OCN | FAC: Dhaka/Karachi | **12** |
|12 | **US** | **US/EU** | Custom kits / SMUs | AIR/TRK | Fulfillment partners (MD) | **8** |
|13 | **VN/CN** | **CA** | Apparel/footwear to Canada | OCN/TRK | DC: Pacific NW transload | **10** |
|14 | **VN** | **JP/KR** | APAC DTC replen | OCN/AIR | DC: JP 3PL (mock) | **9** |
|15 | **TR/EG** | **UK** | EU/UK split post-Brexit | OCN/TRK | EU hub (NL) → UK | **11** |
|16 | **CN/TW** | **VN** | Components (midsoles/uppers) | OCN/TRK | SUP → FAC | **18** |
|17 | **US/IN** | **VN/KH** | Cotton yarn/fabrics | OCN | SUP mills → FAC | **12** |
|18 | **VN** | **US DCs** | Peak/Q4 replen | OCN/AIR | DC: US-E/US-SE | **28** |
|19 | **KH/VN** | **LatAm** | Wholesale | OCN | via US Gulf transload | **6** |
|20 | **TR** | **MENA** | Regional wholesale | OCN/TRK | TR → KSA/UAE | **4** |

**Network update:** UA to **exit Rialto, CA DC by Mar 2026** (restructure). :contentReference[oaicite:24]{index=24}

---

## CRITICAL INSIGHTS

### External Insight Cards (with dates)

1. **Margins up while revenue resets** — GM expansion **+170–240 bps** from lower freight/product costs and fewer promos; revenue softness persists, esp. **North America**. *(Q4 FY25 + Q3 FY25)* :contentReference[oaicite:25]{index=25}  
   - **Source:** Reuters; UA PR.

2. **FY25 → FY26 Reset & Restructuring** — UA raised restructuring range and **plans to exit Rialto DC by Mar 2026**. Expected charges **$140–$160M**. *(Sep 9, 2024)* :contentReference[oaicite:26]{index=26}  
   - **Source:** PR Newswire.

3. **Leadership** — **Kevin Plank** returned as **CEO** on **Apr 1, 2024**; brand/merch speed focus. *(Mar 13, 2024)* :contentReference[oaicite:27]{index=27}  
   - **Source:** UA PR; Business Insider interview recap.

4. **Q1 FY26 regional split** — **NA $670M (−5%) / Intl $467M (−1%)**; **EMEA +10%**, **APAC −10%**. *(Aug 2025)* :contentReference[oaicite:28]{index=28}  
   - **Source:** UA PR.

5. **DTC vs Wholesale** — **Wholesale −12%**, **DTC −8%** in 2Q FY25; **eCom −21%** as promos pulled back; **DTC ~40%** of FY25 rev with higher margins. *(Nov 7, 2024; FY25 commentary)* :contentReference[oaicite:29]{index=29}  
   - **Source:** PR Newswire; Trefis analysis.

6. **Tariff/Trade Watch** — Uncertainty around **Vietnam → US** tariff exposure referenced in outlook; potential GM impact. *(May–Aug 2025)* :contentReference[oaicite:30]{index=30}  
   - **Source:** Reuters.

---

### UPS Insight (Demo / Mock — match card layout)

- **Paid (Insurance claims YTD):** **~$1.25M** *(mock)*  
- **Shipment Decreasing:** **Approx −3.4%** vs 6 months back *(mock)*  
- **Claims (Resolved on time):** **86%** *(mock)*  
- **Claims (Rejected):** **2.2%** *(mock)*

---

### Shipment Volume (Quarterly — Stacked Bar Inputs | Mock)

_Service levels: GND / 2DA / 1DA_

| Quarter | GND | 2DA | 1DA | **Total** |
|---|---:|---:|---:|---:|
| **Jan–Mar** | 160 | 190 | 80 | **430** |
| **Apr–Jun** | 200 | 240 | 120 | **560** |
| **Jul–Sep** | 155 | 180 | 85 | **420** |
| **Oct–Dec** | 190 | 220 | 110 | **520** |

*(Use as chart series input.)*

---

### Insured Packages & Claims (Monthly — Line Chart Inputs | Mock)

| Month | Insured Packages | Claims |
|---|---:|---:|
| Jan | 180 | 12 |
| Feb | 210 | 16 |
| Mar | 240 | 18 |
| Apr | 320 | 30 |
| May | 410 | 44 |
| Jun | 460 | 52 |
| Jul | 430 | 38 |
| Aug | 470 | 46 |
| Sep | 490 | 51 |
| Oct | 520 | 58 |
| Nov | 560 | 74 |
| Dec | 590 | 92 |

---

## PEOPLE

> Execs/titles from UA Investors site. For outreach, route through IR/PR or connect on LinkedIn. :contentReference[oaicite:31]{index=31}

### Logistics Decision Maker
- **Shawn Curran** — **Chief Supply Chain Officer** (Global supply chain & operations). *(LinkedIn outreach suggested)* :contentReference[oaicite:32]{index=32}

### Leadership
- **Kevin A. Plank** — President & CEO. :contentReference[oaicite:33]{index=33}  
- **Dave Bergman** — Chief Financial Officer. :contentReference[oaicite:34]{index=34}  
- **Eric Liedtke** — Brand President. :contentReference[oaicite:35]{index=35}  
- **Yassine Saidi** — Chief Product Officer. :contentReference[oaicite:36]{index=36}  
- **Mehri Shadman** — Chief Legal Officer & Corporate Secretary. :contentReference[oaicite:37]{index=37}

### Other UA Contacts (Public Routes)
- **Investor Relations / Media Relations** (inbound email/webforms; coordinate exec touchpoints). :contentReference[oaicite:38]{index=38}

*Privacy note: Personal emails/phone numbers for individuals are intentionally omitted; use corporate channels or LinkedIn DM.*

---

## APPENDIX — Supplier & Manufacturing Evidence

- **Tier-1 Assembly Locations List (PDF, Feb 2025; >90% coverage):** country roster used for lanes above. :contentReference[oaicite:39]{index=39}  
- **Annual Report FY25 (Ops & Mix):** contract manufacturer concentration; geographic split; strategic reset. :contentReference[oaicite:40]{index=40}

---

## QUICK SALES OPPORTUNITIES (Talk Track) — Tie to Insights

1) **Ocean consolidation + AIR gating** from VN/KH/CN to **US-SE/East** DC with **handoff SLAs**; measurable GM support via mode mix and dwell cuts. :contentReference[oaicite:41]{index=41}  
2) **EU agility**: TR/EG/VN → **NL hub** → EU retailers; faster seasonal turns; duty/tariff mitigation scenarios. :contentReference[oaicite:42]{index=42}  
3) **Launch orchestration**: Curry/UA Halo drops with premium **AIR uplift** + returns-reduction package (fit/ETA promises). :contentReference[oaicite:43]{index=43}  
4) **Resilience modeling**: **Rialto exit** + possible **VN tariff shocks** stress-tests; build contingency lanes & buffer stock strategies. :contentReference[oaicite:44]{index=44}

---

## SOURCE INDEX (Public)

- **Quarterlies / Earnings:** UA PR (Q4 FY25, Q1 FY26), Yahoo Finance syndication. :contentReference[oaicite:45]{index=45}  
- **Annual / Investors:** FY25 Annual Report; Financials hub; Investor Meeting deck. :contentReference[oaicite:46]{index=46}  
- **Restructuring / DC Exit:** UA PR; RetailDive coverage; MarketWatch analysis. :contentReference[oaicite:47]{index=47}  
- **Mix / Channel:** PR (Q2 FY25) + commentary; Trefis (margin structure). :contentReference[oaicite:48]{index=48}  
- **Regional Splits:** PR snapshots (Q1 FY26; Q2 FY25). :contentReference[oaicite:49]{index=49}  
- **Supplier Countries:** UA Supplier List (Tier-1). :contentReference[oaicite:50]{index=50}  
- **Leadership:** UA CEO PR; Exec listings. :contentReference[oaicite:51]{index=51}
