<h1 align="center"> AI Fitness Assistant </h1>

<p align="center">
  <img src="/public/screenshot-for-readme.png" alt="Demo App" />
</p>

##  Tech Stack

* **Framework**: Next.js, React (App Router)
* **Styling**: Tailwind CSS, Shadcn UI
* **AI Integration**: Voice Assistant via Vapi, Gemini AI (LLM)
* **Authentication**: Clerk
* **Database**: Convex (Real-time backend)

##  Features

* **🎧 Smart Voice Assistant**
  Chat with an AI that understands your fitness goals, health conditions, and preferences

* **🏋️ Personalized Workout Plans**
  Get dynamic exercise routines tailored to your fitness level, injuries, and goals

* **🥗 AI-Generated Diet Recommendations**
  Receive diet suggestions that respect your allergies and dietary preferences

* **🔐 User Authentication**
  Secure sign-in with GitHub, Google, or email/password

* **📋 Program Management**
  Manage multiple fitness plans—only the latest one remains active

* **🧠 LLM + Voice AI**
  Combines large language models with voice-based interactions

* **📱 Responsive UI**
  Sleek design optimized for mobile, tablet, and desktop

---

## Environment Setup

Create a `.env` file with the following variables:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# Clerk Redirect URLs
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# Vapi Voice AI
NEXT_PUBLIC_VAPI_WORKFLOW_ID=
NEXT_PUBLIC_VAPI_API_KEY=

# Convex Database
CONVEX_DEPLOYMENT=
NEXT_PUBLIC_CONVEX_URL=
```

---

## 💠 Getting Started

1. **Clone the repository**

```bash
git clone https://github.com/your-username/ai-fitness-assistant.git
cd ai-fitness-assistant
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**
   Create a `.env` file as shown above and add your keys

4. **Run the development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🚀 Deployment

You can deploy this project with [Vercel](https://vercel.com):

```bash
npm run build
npm run start
```

Or connect your GitHub repo directly to Vercel for automatic deployments.

---

## 🧰 Tech Breakdown

| Tech         | Description                             |
| ------------ | --------------------------------------- |
| Next.js      | Frontend & backend API routes           |
| Tailwind CSS | Utility-first CSS framework             |
| Shadcn UI    | Reusable and customizable UI components |
| Clerk        | Auth system with prebuilt UI            |
| Vapi         | Voice interaction engine (WebRTC + AI)  |
| Convex       | Real-time backend + database            |
| Gemini AI    | Google’s LLM to power fitness logic     |

---

## 📚 Learn More

* [Next.js Docs](https://nextjs.org/docs)
* [Clerk Docs](https://clerk.com/docs)
* [Vapi Docs](https://docs.vapi.ai)
* [Convex Docs](https://docs.convex.dev)
* [Gemini AI Docs](https://ai.google.dev/gemini-api)

---

> Built with ❤️ for fitness lovers and developers.
