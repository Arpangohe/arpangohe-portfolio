# Backend Integration Contracts - Arpan Gohe Portfolio

## Overview
Transform the mock-based frontend into a fully functional production-ready portfolio with AI chatbot, contact form processing, download tracking, and real-time metrics.

---

## 1. Contact Form Submission

### API Endpoint
**POST** `/api/contact`

### Request Body
```json
{
  "name": "string (required)",
  "email": "string (required)",
  "phone": "string (optional)",
  "serviceType": "string (required) - ai|fullstack|marketing|other",
  "budget": "string (required) - 500-2k|2k-5k|5k-10k|10k+",
  "startDate": "string (optional)",
  "description": "string (required)",
  "timestamp": "Date (auto-generated)"
}
```

### Response
```json
{
  "success": true,
  "message": "Thank you! I'll get back to you within 24 hours.",
  "submissionId": "mongo_object_id"
}
```

### MongoDB Collection: `contact_submissions`
- Store all form data
- Add createdAt timestamp
- Calculate lead score based on budget/service

### Email Integration
**To Admin (arpangohework@gmail.com):**
- Subject: "New Project Inquiry - [Service Type]"
- Body: Include all form details, lead score

**To User (auto-responder):**
- Subject: "Thank you for reaching out!"
- Body: Professional acknowledgment + 24hr response promise

### Frontend Integration
- Update: `/app/frontend/src/components/Contact.jsx`
- Replace mock submission with real API call
- Show loading state during submission
- Display success/error messages using toast

---

## 2. Resume Download Tracking

### API Endpoint
**POST** `/api/downloads`

### Request Body
```json
{
  "resumeType": "string (required) - ai|fullstack|complete",
  "userAgent": "string (optional)",
  "referrer": "string (optional)"
}
```

### Response
```json
{
  "success": true,
  "downloadUrl": "/downloads/arpan-gohe-[type]-resume.pdf",
  "totalDownloads": 247
}
```

### MongoDB Collection: `resume_downloads`
- Track each download with timestamp
- Store resume type, IP (optional), user agent
- Generate analytics

### Analytics Aggregation
**GET** `/api/downloads/stats`
```json
{
  "total": 247,
  "byType": {
    "ai": 98,
    "fullstack": 102,
    "complete": 47
  },
  "thisWeek": 23,
  "mostPopular": "fullstack"
}
```

### Frontend Integration
- Update: `/app/frontend/src/components/Hero.jsx`
- Track downloads when user clicks resume buttons
- Display live download counter
- Trigger actual PDF download

### Resume Files
Create placeholder PDFs:
- `/public/downloads/arpan-gohe-ai-resume.pdf`
- `/public/downloads/arpan-gohe-fullstack-resume.pdf`
- `/public/downloads/arpan-gohe-complete-resume.pdf`

---

## 3. AI Chatbot Integration

### API Endpoint
**POST** `/api/chatbot`

### Request Body
```json
{
  "message": "string (required)",
  "conversationId": "string (optional) - for context",
  "sessionId": "string (required)"
}
```

### Response
```json
{
  "success": true,
  "reply": "string - AI generated response",
  "conversationId": "string",
  "suggestedActions": ["Book a call", "View services", "Contact"]
}
```

### OpenAI Integration
- Use provided API key: `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`
- Model: `gpt-4o-mini` (cost-effective for chatbot)
- System prompt: Define Arpan's expertise, services, pricing
- Max tokens: 150-200 per response
- Temperature: 0.7 (balanced creativity/accuracy)

### MongoDB Collection: `chatbot_conversations`
- Store conversation threads
- Track engagement metrics
- Flag high-intent conversations (5+ messages)

### Frontend Component
Create: `/app/frontend/src/components/Chatbot.jsx`
- Floating chat icon (above WhatsApp button)
- Chat window with message history
- Typing indicator
- Quick action buttons
- Store session in localStorage

---

## 4. Visitor Metrics Tracking

### API Endpoint
**POST** `/api/metrics/track`

### Request Body
```json
{
  "eventType": "page_view|section_view|interaction",
  "sectionId": "hero|services|projects|contact",
  "metadata": {
    "userAgent": "string",
    "referrer": "string",
    "screenSize": "desktop|tablet|mobile"
  }
}
```

### MongoDB Collection: `visitor_metrics`
- Track page views, unique visitors
- Section engagement times
- Popular sections
- Geographic data (optional via IP)

### Live Stats Endpoint
**GET** `/api/metrics/live`
```json
{
  "totalViews": 2547,
  "uniqueVisitors": 892,
  "activeProjects": 5,
  "avgResponseTime": "8 hours",
  "availabilityStatus": "available",
  "topSections": ["services", "projects", "contact"]
}
```

### Frontend Integration
- Display live counters in Impact Dashboard
- Show availability status in header
- Track scroll depth for sections

---

## 5. GitHub Integration

### API Endpoint
**GET** `/api/github/stats`

### GitHub API Call
```javascript
// Fetch from: https://api.github.com/users/Arpangohe
// No auth needed for public data
```

### Response
```json
{
  "username": "Arpangohe",
  "contributions": {
    "total": 847,
    "thisWeek": 12,
    "thisMonth": 53
  },
  "repositories": {
    "total": 28,
    "public": 24
  },
  "stats": {
    "followers": 156,
    "following": 89
  },
  "contributionGraph": "svg_data_or_url"
}
```

### Frontend Integration
- Display in Experience section or Footer
- Real-time contribution counter
- Link to GitHub profile
- Update every 24 hours (cache results)

---

## 6. Email Notification System

### Configuration
**Service:** Nodemailer with Gmail SMTP

**Credentials:**
- Email: `arpangohework@gmail.com`
- Password: `Arpan@90`
- SMTP: `smtp.gmail.com:587`

**Note:** Enable "Less secure app access" in Gmail or use App Password

### Email Templates
**Admin Notification:**
```html
Subject: New Project Inquiry - [Service Type]

Hi Arpan,

You have a new project inquiry from your portfolio!

Name: [Name]
Email: [Email]
Phone: [Phone]
Service: [Service Type]
Budget: [Budget Range]
Start Date: [Start Date]

Project Description:
[Description]

Lead Score: [Score]/100

View in admin dashboard: [Link]

---
Sent from Arpan Gohe Portfolio
```

**User Auto-Responder:**
```html
Subject: Thank you for reaching out!

Hi [Name],

Thank you for your interest in working together! I've received your project inquiry and will review it shortly.

What happens next:
✅ I'll review your project details
✅ Prepare a customized proposal
✅ Get back to you within 24 hours

In the meantime, feel free to:
• Book a quick call: [Calendly Link or Email]
• Check out my projects: [Portfolio Link]
• Connect on LinkedIn: linkedin.com/in/arpangohe

Looking forward to discussing your project!

Best regards,
Arpan Gohe
AI Strategist • Full-Stack Developer • EdTech Entrepreneur
arpangohework@gmail.com | +91-896-242-7126
```

---

## 7. Admin Dashboard (Simple)

### Protected Route
**Path:** `/admin/dashboard`

### Authentication
- Simple password protection
- Password: `Arpan@90`
- Store hash in environment variable
- Use session storage

### Dashboard Features
1. **Contact Submissions Table**
   - List all inquiries
   - Sort by date, lead score
   - Export to CSV

2. **Download Analytics**
   - Total downloads by type
   - Weekly/monthly trends
   - Chart visualization

3. **Chatbot Conversations**
   - High-intent leads (5+ messages)
   - Conversation transcripts
   - Export functionality

4. **Visitor Metrics**
   - Daily/weekly views
   - Section engagement
   - Top referrers

### API Endpoints
**GET** `/api/admin/submissions` - All contact forms
**GET** `/api/admin/downloads` - Download stats
**GET** `/api/admin/conversations` - Chatbot logs
**GET** `/api/admin/metrics` - Visitor analytics

---

## 8. Environment Variables Setup

### Backend `.env` File
```env
# MongoDB
MONGO_URL=mongodb+srv://[user]:[password]@cluster.mongodb.net/arpan-portfolio

# OpenAI
OPENAI_API_KEY=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

# Email
EMAIL_USER=arpangohework@gmail.com
EMAIL_PASSWORD=Arpan@90

# GitHub
GITHUB_USERNAME=Arpangohe

# Admin
ADMIN_PASSWORD_HASH=[bcrypt_hash_of_Arpan@90]

# App
NODE_ENV=production
PORT=8001
```

---

## Implementation Priority

### Phase 1: Core Functionality (MUST HAVE)
1. ✅ Contact form API + Email notifications
2. ✅ Resume download tracking
3. ✅ AI Chatbot with OpenAI

### Phase 2: Enhanced Features (SHOULD HAVE)
4. ✅ Visitor metrics tracking
5. ✅ GitHub integration

### Phase 3: Admin Features (NICE TO HAVE)
6. ⚠️ Simple admin dashboard

---

## Frontend Files to Update

### Remove Mock Data & Integrate Backend
1. **Contact.jsx** - Replace mock with `/api/contact`
2. **Hero.jsx** - Add download tracking `/api/downloads`
3. **Create Chatbot.jsx** - New AI chat component `/api/chatbot`
4. **ImpactDashboard.jsx** - Fetch live metrics `/api/metrics/live`
5. **Experience.jsx** - Add GitHub stats `/api/github/stats`

### Keep Mock Data For
- Testimonials (no backend needed)
- Projects list (static showcase)
- Services pricing (static info)
- Education/certifications (static)

---

## Testing Checklist

### Backend APIs
- [ ] POST /api/contact - Form submission works
- [ ] Email sent to admin & user
- [ ] POST /api/downloads - Track & serve PDF
- [ ] POST /api/chatbot - AI responses working
- [ ] GET /api/metrics/live - Returns stats
- [ ] GET /api/github/stats - Fetches profile data

### Frontend Integration
- [ ] Contact form submits successfully
- [ ] Success/error messages display
- [ ] Resume downloads trigger tracking
- [ ] Chatbot opens and responds
- [ ] Live metrics display on page
- [ ] GitHub stats show in UI

### Email Delivery
- [ ] Admin receives notifications
- [ ] User receives auto-responder
- [ ] Email formatting is correct

---

## Production Deployment Notes

### Database
- Use MongoDB Atlas (free tier sufficient)
- Set up indexes on: createdAt, email, resumeType
- Enable backup/snapshots

### Security
- Sanitize all user inputs
- Rate limiting on API endpoints (10 req/min)
- CORS configured for production domain
- Environment variables secured
- Never expose API keys in frontend

### Performance
- Cache GitHub data (24hr TTL)
- Optimize images for web
- Enable gzip compression
- CDN for static assets

### Monitoring
- Log all API errors
- Track API response times
- Monitor email delivery rates
- Set up alerts for downtime

---

## Success Criteria

✅ Contact form submissions stored & emails sent
✅ Resume downloads tracked with live counter
✅ AI chatbot provides relevant, helpful responses
✅ Visitor metrics display accurately
✅ GitHub stats update automatically
✅ All features work on mobile & desktop
✅ No console errors
✅ Fast load times (< 2s)

**Goal:** Portfolio so impressive that recruiters think "I need to hire this person NOW!"
