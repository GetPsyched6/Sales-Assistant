# UPS Digital Sales Assistant

A comprehensive sales intelligence platform designed to help UPS sales teams efficiently research companies, understand their supply chains, and generate qualified leads. This application demonstrates how AI agents can streamline the sales process by automating time-consuming research tasks.

## 🎯 Purpose

Sales teams typically spend 80% of their time gathering information about potential clients rather than selling. This tool inverts that ratio by:

- Automatically gathering company intelligence from public sources
- Analyzing supply chain patterns and logistics needs
- Identifying key decision makers and contact information
- Surfacing actionable insights for sales conversations
- Providing ready-to-use outreach templates

## ✨ Features

### 1. **Intelligent Company Search**

- Search for any company by name
- Supports additional filters (tax ID, country, etc.) for precise results
- 3-second smart loader while gathering data

### 2. **Financial Overview (Home)**

- Real-time financial metrics with trend indicators
- Company profile with industry, products, and market presence
- Competitor analysis
- Source attribution for all data

### 3. **Supply Chain Visualization**

- Interactive world map showing global shipping routes
- Color-coded facilities (HQ, factories, suppliers, warehouses)
- Inbound/outbound route visualization
- Detailed shipping lane information with volume metrics
- Filterable by origin, destination, shipment mode, and facility type

### 4. **Critical Insights**

- **External Intelligence**: Market trends, leadership changes, financial performance
- **Internal UPS Data**: Shipment volumes, insurance claims, delivery performance
- Interactive charts for shipment volume trends
- Claims analysis with resolution rates

### 5. **Key People & Contacts**

- Logistics decision makers highlighted
- Leadership team directory
- LinkedIn connections and suggestions
- Direct email outreach with pre-populated templates
- Professional email draft modal with attachments and QR codes

### 6. **AI Chat Assistant (Eia)**

- 24/7 availability for questions
- Context-aware responses about the company
- Voice input support
- Persistent chat history

## 🏗️ Architecture

### Project Structure

```
Sales Assistant/
├── frontend/           # React frontend application
│   ├── src/
│   │   ├── features/
│   │   │   ├── search/          # Company search functionality
│   │   │   ├── dashboard/       # Main layout and navigation
│   │   │   ├── home/           # Financial overview page
│   │   │   ├── supply-chain/   # Interactive map and logistics
│   │   │   ├── critical-insights/ # Intelligence and analytics
│   │   │   ├── people/         # Contacts and communication
│   │   │   └── chatbot/        # AI assistant
│   │   ├── shared/
│   │   │   ├── components/     # Reusable UI components
│   │   │   ├── utils/          # Helper functions
│   │   │   └── hooks/          # Custom React hooks
│   │   ├── data/              # Mock data (will be replaced by API calls)
│   │   └── assets/            # Images and static resources
│   ├── public/                # Static assets
│   └── package.json           # Frontend dependencies
├── backend/                   # Backend API (future implementation)
├── README.md                  # Project documentation
├── AGENTS.md                  # Project instructions
└── UA.md                      # Under Armour data reference
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone and navigate to the project:**

   ```bash
   cd "Sales Assistant"
   ```

2. **Navigate to frontend and install dependencies:**

   ```bash
   cd frontend
   npm install
   ```

3. **Set up images (optional but recommended):**

   - See `frontend/public/images/IMAGES_NEEDED.md` for required images
   - App works without images but looks better with them

4. **Set up environment variables (for future AI integration):**

   ```bash
   cp sample.env .env
   # Edit .env with your API keys when ready
   ```

5. **Start the development server:**

   ```bash
   npm run dev
   ```

6. **Open your browser:**
   - Navigate to `http://localhost:3000`
   - Search for "Under Armour" to see the demo

## 🎨 Technology Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite (fast HMR and optimized builds)
- **Routing**: React Router v6
- **Styling**: Tailwind CSS (UPS brown/gold theme)
- **Animations**: Framer Motion
- **Charts**: Recharts
- **Maps**: React Simple Maps
- **Icons**: Lucide React

## 📊 Current Demo Data

The application currently contains comprehensive mock data for **Under Armour**:

- Financial metrics (revenue, margins, profit/loss)
- 15+ supply chain routes across Asia, Middle East, Europe, Americas
- 6 critical market insights
- 9 key executive contacts
- 12 months of shipment and claims data
- Real company information from public sources

## 🔮 Future Enhancements

### Phase 1: Real Data Integration

- [ ] Connect to UPS internal APIs for shipment data
- [ ] Integrate with LinkedIn API for contact verification
- [ ] Connect to financial data providers (Bloomberg, FactSet)

### Phase 2: AI Agent System

- [ ] Multi-agent orchestration (research, analysis, summarization)
- [ ] Tavily integration for real-time web research
- [ ] OpenAI/Claude integration for intelligent insights
- [ ] Automated lead scoring and prioritization

### Phase 3: Advanced Features

- [ ] Real-time notifications for company changes
- [ ] CRM integration (Salesforce, HubSpot)
- [ ] Email tracking and analytics
- [ ] Team collaboration features
- [ ] Mobile responsive design
- [ ] Export to PDF/PowerPoint

### Phase 4: Scale

- [ ] Multi-company comparison views
- [ ] Industry-wide analytics
- [ ] Predictive opportunity modeling
- [ ] Integration with UPS proposal generation tools

## 🎯 Usage

### For Demo Purposes:

1. Open the app and search for "Under Armour"
2. Explore the different tabs to see various features
3. Try clicking on contacts to draft emails
4. Open the chatbot to ask questions
5. Filter supply chain routes on the map

### For Development:

1. Add new companies by creating data files in `src/data/`
2. Extend features in the respective feature folders
3. Add new shared components in `src/shared/components/`
4. Follow the feature-based architecture pattern

## 📝 Code Quality

- **ESLint**: Configured for React best practices
- **Modular Components**: Each feature is self-contained
- **Reusable Logic**: Shared components and utilities
- **Type Safety**: Ready for TypeScript migration
- **Clean Code**: Follows senior-level engineering patterns

## 🔧 Scripts

**From the `frontend/` directory:**

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🎨 Design System

### Colors

- **UPS Brown**: `#351C15` (primary brand color)
- **UPS Gold**: `#FFB500` (accent and CTAs)
- **UPS Teal**: `#00A3AD` (interactive elements)

### Components

- Cards with hover effects
- Smooth animations and transitions
- Consistent spacing and typography
- Accessible color contrasts
- Professional shadows and borders

## 📄 License

Proprietary - UPS Internal Use Only

## 👥 Contact

For questions or support, contact the UPS Digital Innovation Team.

---

**Note**: This is a demo application with mock data. All company information is sourced from public records and used for demonstration purposes only.
