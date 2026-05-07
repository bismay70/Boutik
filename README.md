# 🛍️ Boutik - AI-Powered E-Commerce Platform

**Next.js 15 | React 19 | MongoDB | Multi-Language Support**

### 🌟 Core Tech Stack

|                |                                  |
| -------------- | -------------------------------- |
| Framework      | Next.js 15, React 19             |
| UI             | Tailwind CSS, Shadcn/UI, Recharts|
| Database       | MongoDB, Mongoose 8.9.0          |
| Payment        | PayPal, Stripe                   |
| Authentication | Auth.js v5, Google OAuth         |
| Internationalization | next-intl (9 Languages)    |
| AI Features    | Chat Support, Product Assist     |
| Storage        | UploadThing                      |
| Email          | Resend                           |
| Deployment     | Vercel, Github                   |

---

## 📸 Screenshots & Features

### Platform Preview
```
┌─────────────────────────────────────────────────────┐
│                   BOUTIK HOMEPAGE                   │
├─────────────────────────────────────────────────────┤
│ [Hero Banner]      [Search & Filters]  [Wishlist]   │
│                                                       │
│ [Featured Products] [Today's Deals]  [Best Sellers]  │
│ [Product Cards]     [Reviews]        [Ratings]       │
│                                                       │
│ [Categories Sidebar] [Product Details] [AI Chat]     │
│                                                       │
│ [Shopping Cart]      [Checkout Flow]   [Orders]      │
└─────────────────────────────────────────────────────┘
```

### Key Features
✨ **Shopping Experience**
- 🏪 Product catalog with advanced filtering
- 🛒 Shopping cart with persistent storage
- ⭐ Product reviews and ratings
- 👁️ Quick view modal
- 📜 Browsing history tracking

✨ **AI Features**
- 🤖 Smart product recommendation chat
- 💬 Customer support assistant
- 🔍 Intelligent search suggestions

✨ **Multi-Language Support** (9 Languages)
- 🇮🇳 Hindi, Bengali, Gujarati, Marathi, Malayalam, Odia, Telugu, Tamil
- 🇬🇧 English (Base language)
- 🌐 RTL/LTR support ready

✨ **Payment & Checkout**
- 💳 PayPal integration
- 💰 Stripe payments
- 🔒 Secure checkout process

✨ **Admin Dashboard**
- 📊 Analytics & Revenue charts
- 📦 Product management
- 📋 Order tracking & fulfillment
- 👥 User management
- 📄 Web page management


---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- MongoDB (Cloud or Local)
- npm/yarn package manager

### Installation

1. **Clone Repository**
   ```bash
   git clone <repository-url>
   cd nextjs-amazona-main
   ```

2. **Install Dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```
   > Note: `--legacy-peer-deps` is required for React 19 compatibility with PayPal library

3. **Setup Environment**
   - Copy `.example-env` to `.env.local`
   - Configure your environment variables:
     ```bash
     # Database
     MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/boutik
     
     # Authentication
     AUTH_SECRET=<generate with: npx auth secret>
     AUTH_GOOGLE_ID=<your-google-client-id>
     AUTH_GOOGLE_SECRET=<your-google-client-secret>
     
     # App Config
     NEXT_PUBLIC_APP_NAME=Boutik
     NEXT_PUBLIC_SERVER_URL=http://localhost:3001
     
     # Payment (Choose one or both)
     PAYPAL_CLIENT_ID=<your-paypal-client-id>
     PAYPAL_APP_SECRET=<your-paypal-app-secret>
     STRIPE_SECRET_KEY=<your-stripe-secret>
     NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=<your-stripe-public>
     
     # Email Service
     RESEND_API_KEY=<your-resend-api-key>
     
     # File Upload
     UPLOADTHING_TOKEN=<your-uploadthing-token>
     ```

4. **Seed Database** (Optional - adds sample products)
   ```bash
   npm run seed
   ```

5. **Start Development Server**
   ```bash
   npm run dev
   ```
   - Local:   http://localhost:3001
   - Network: http://192.168.x.x:3001

### Test Admin Account
- Email: `admin@example.com`
- Password: `123456`

---

## 📁 Project Structure

### Language Implementation
```
messages/
├── en-US.json      (English - Base)
├── hi.json         (Hindi - हिंदी)
├── bn.json         (Bengali - বাংলা)
├── gu.json         (Gujarati - ગુજરાતી)
├── mr.json         (Marathi - मराठी)
├── ml.json         (Malayalam - മലയാളം)
├── or.json         (Odia - ଓଡ଼ିଆ)
├── te.json         (Telugu - తెలుగు)
└── ta.json         (Tamil - தமிழ்)

i18n/
├── routing.ts      (Language routing configuration)
└── request.ts      (Locale request handler)

app/[locale]/      (Dynamic language routing)
├── layout.tsx      (Locale-aware layout)
├── (home)/         (Home page)
├── (auth)/         (Authentication routes)
├── (root)/         (Public routes)
├── admin/          (Admin dashboard)
└── checkout/       (Checkout flow)
```

### AI Chat Features
```
components/
├── ai-chat/
│   ├── ChatWidget.tsx      (Floating chat bubble)
│   ├── ChatInterface.tsx    (Chat message display)
│   └── AIAssistant.tsx      (AI response handler)

lib/
└── ai/
    ├── prompts.ts          (AI system prompts)
    ├── product-assist.ts   (Product recommendation)
    └── chat-service.ts     (Chat integration)

app/api/
└── ai/
    ├── chat/route.ts       (Chat API endpoint)
    └── recommendations/route.ts (Product suggestions)
```

### Core Directory Layout
```
nextjs-amazona-main/
├── app/                    (Next.js app router)
│   ├── api/               (Backend APIs)
│   ├── [locale]/          (Language routes)
│   └── globals.css        (Global styles)
├── components/            (React components)
│   ├── shared/            (Reusable components)
│   ├── ui/                (Shadcn UI components)
│   └── ai-chat/           (AI chat components)
├── lib/                   (Utilities & helpers)
│   ├── actions/           (Server actions)
│   ├── db/                (Database schemas)
│   ├── ai/                (AI features)
│   └── constants.ts       (App constants)
├── messages/              (i18n translations)
├── public/                (Static assets)
├── types/                 (TypeScript types)
├── hooks/                 (Custom React hooks)
└── middleware.ts          (Request middleware)


---

## 🌍 Language Support

**9 Supported Languages** with full RTL/LTR support:

| Language | Code | Script | Status |
|----------|------|--------|--------|
| English | en-US | Latin | ✅ Active |
| Hindi | hi | Devanagari | ✅ Active |
| Bengali | bn | Bengali | ✅ Active |
| Gujarati | gu | Gujarati | ✅ Active |
| Marathi | mr | Devanagari | ✅ Active |
| Malayalam | ml | Malayalam | ✅ Active |
| Odia | or | Odia | ✅ Active |
| Telugu | te | Telugu | ✅ Active |
| Tamil | ta | Tamil | ✅ Active |

**Test Language Routes:**
```
http://localhost:3001/          (English - Default)
http://localhost:3001/hi        (Hindi)
http://localhost:3001/bn        (Bengali)
http://localhost:3001/gu        (Gujarati)
http://localhost:3001/mr        (Marathi)
http://localhost:3001/ml        (Malayalam)
http://localhost:3001/or        (Odia)
http://localhost:3001/te        (Telugu)
http://localhost:3001/ta        (Tamil)
```

---

## 🤖 AI Chat Features

### Smart Product Assistant
- **Intelligent Recommendations**: AI-powered product suggestions based on user preferences
- **Natural Language Search**: Understand customer queries and find relevant products
- **Multi-Language Support**: Chat in any of the 9 supported languages

### Customer Support
- **24/7 Availability**: AI chat widget available on all pages
- **FAQ Automation**: Instant answers to common questions
- **Order Tracking Help**: Assist customers with order status inquiries

### Implementation Details
The AI chat feature is integrated with:
- OpenAI GPT API (or compatible) for natural language processing
- Product database for context-aware recommendations
- Real-time messaging interface
- Mobile-responsive chat widget

---

## 📚 Learning Path

- [00-introduction](./lessons/00-introduction.md)
- [01-install-ai-tools-and-vscode-extensions](./lessons/01-install-ai-tools-and-vscode-extensions.md)
- [02-create-next-app](./lessons/02-create-next-app.md)
- [03-create-website-layout](./lessons/03-create-website-layout.md)
- [04-create-home-page-carousel](./lessons/04-create-home-page-carousel.md)
- [05-connect-to-mongodb-and-seed-products](./lessons/05-connect-to-mongodb-and-seed-products.md)
- [06-create-home-cards](./lessons/06-create-home-cards.md)
- [07-create-todays-deals-slider](./lessons/07-create-todays-deals-slider.md)
- [08-create-best-selling-slider](./lessons/08-create-best-selling-slider.md)
- [09-create-product-details-page](./lessons/09-create-product-details-page.md)
- [10-create-browsing-history](./lessons/10-create-browsing-history.md)
- [11-implement-add-to-cart](./lessons/11-implement-add-to-cart.md)
- [12-create-cart-page](./lessons/12-create-cart-page.md)
- [13-create-cart-sidebar](./lessons/13-create-cart-sidebar.md)
- [14-signin-user](./lessons/14-signin-user.md)
- [15-register-user](./lessons/15-register-user.md)
- [16-signin-with-google](./lessons/16-signin-with-google.md)
- [17-create-checkout-page](./lessons/17-create-checkout-page.md)
- [18-place-order](./lessons/18-place-order.md)
- [19-pay-order-by-paypal](./lessons/19-pay-order-by-paypal.md)
- [20-pay-order-by-stripe](./lessons/20-pay-order-by-stripe.md)
- [21-rate-review-products](./lessons/21-rate-review-products.md)
- [22-create-order-history-page](./lessons/22-create-order-history-page.md)
- [23-update-user-name](./lessons/23-update-user-name.md)
- [24-create-category-sidebar](./lessons/24-create-category-sidebar.md)
- [25-create-search-page](./lessons/25-create-search-page.md)
- [26-add-theme-color](./lessons/26-add-theme-color.md)
- [27-create-admin-dashboard](./lessons/27-create-admin-dashboard.md)
- [28-admin-products](./lessons/28-admin-products.md)
- [29-create-update-products](./lessons/29-create-update-products.md)
- [30-admin-orders](./lessons/30-admin-orders.md)
- [31-mark-orders-as-paid-delivered](./lessons/31-mark-orders-as-paid-delivered.md)
- [32-admin-users](./lessons/32-admin-users.md)
- [33-edit-user](./lessons/33-edit-user.md)
- [34-admin-web-pages](./lessons/34-admin-web-pages.md)
- [35-create-update-web-pages](./lessons/35-create-update-web-pages.md)

---

## 🎯 Key Learnings

Through this project, you'll master:

✅ **Frontend Development**
- Next.js 15 server components & routing
- React 19 composition patterns
- Tailwind CSS styling & responsive design
- State management with custom hooks

✅ **Backend Development**
- MongoDB database design & queries
- Server actions for data mutations
- RESTful API development
- Authentication & authorization flows

✅ **Advanced Features**
- Multi-language internationalization (i18n)
- Payment gateway integration
- File upload handling
- Email notifications
- AI/Chat integration

✅ **Admin Capabilities**
- Dashboard analytics with charts
- Product CRUD operations
- Order management & fulfillment
- User administration

---

## 📋 Available Scripts

```bash
# Development
npm run dev              # Start dev server (Turbopack)

# Production
npm run build            # Build for production
npm start                # Start production server

# Database
npm run seed             # Seed sample products

# Code Quality
npm run lint             # Run ESLint
npm run type-check       # Check TypeScript types
```

---

## 🔧 Environment Variables Reference

See `.example-env` and `LANGUAGE_SETUP_GUIDE.md` for detailed configuration instructions.

Key variables:
- `MONGODB_URI` - Database connection
- `AUTH_SECRET` - NextAuth encryption key
- `AUTH_GOOGLE_ID/SECRET` - Google OAuth
- `PAYPAL_CLIENT_ID/SECRET` - PayPal payments
- `STRIPE_SECRET_KEY` - Stripe payments
- `RESEND_API_KEY` - Email service
- `UPLOADTHING_TOKEN` - File uploads

---

## 🚀 Deployment

### Deploy to Vercel
```bash
npm run build
vercel deploy
```

### Environment Setup for Production
1. Create `.env.production.local`
2. Set production-specific variables
3. Deploy using Vercel CLI or Git integration

---

## 📞 Support & Documentation

- 📖 See `LANGUAGE_SETUP_GUIDE.md` for detailed setup instructions
- 📚 View `lessons/` directory for step-by-step tutorials
- 🐛 Check issues/discussions for common problems

---

## 🏆 Credits

Built with modern web technologies and best practices.

**Framework**: Next.js 15 | **Database**: MongoDB | **UI**: Shadcn/Tailwind
