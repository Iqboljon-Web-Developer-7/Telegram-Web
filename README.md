# Telegram-Web

Telegram-Web is a full-stack Telegram clone built with modern web technologies, offering a seamless and responsive user experience. It implements core Telegram functionalities such as messaging and user interaction with a robust, scalable, and efficient architecture.

## 🚀 Features

- **Real-time Messaging**: Engage in live conversations with instant updates.
- **User Authentication**: Secure login and registration with modern authentication methods.
- **Responsive Design**: Optimized for all devices with a mobile-first approach using Tailwind CSS.
- **Modern UI/UX**: Clean, intuitive design inspired by Telegram's interface.
- **Scalable Architecture**: Built with a full-stack solution suitable for scaling as the user base grows.

---

## 🛠️ Technologies Used

### Frontend

- **React**: A powerful JavaScript library for building dynamic user interfaces.
- **Next.js**: Enables server-side rendering and improved performance with a file-based routing system.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.

### Backend

- **Sanity**: A headless CMS providing structured content management and easy API integration.
- **Next.js API Routes**: For building secure and scalable backend endpoints within the Next.js framework.

### Advantages of the Stack

1. **React + Next.js**:
   - Improved SEO with server-side rendering (SSR).
   - Lightning-fast routing and static generation (SSG).
2. **Tailwind CSS**:
   - Highly customizable and easy-to-implement design system.
   - Significantly reduces time spent on writing CSS.
3. **Sanity CMS**:
   - Real-time content management with GROQ querying.
   - Developer-friendly schema definitions for structured content.
4. **Full-Stack Integration**:
   - A unified development experience where frontend and backend seamlessly interact.

---

## 🔧 Getting Started

Follow these steps to get the project up and running on your local environment.

### Prerequisites

Ensure you have the following installed:

- Node.js (>= 16.x)
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo/telegram-web.git
   cd telegram-web
   ```

2. Install dependencies:

   ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    # or
    bun install
   ```

3. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. Open http://localhost:3333 in your browser to view the app.

## ✨ Acknowledgments

- Thanks to Next.js, Sanity, and Tailwind CSS communities for their incredible tools and documentation.
  Happy coding! 😊

### What did i learn ?

1. Hydranation in mind
   Tryin to use only SSR compoents can improves Next Project's performance but we should be careful not to make hydranation fail.
   Conditional styles make hydranation fail like className={`${item._id == user.id ? "self-end" : ""}`} it should be inside of seperate Client Component
   These make hydranation fail
   Date.now()

   in error if Hydranation fails you may see what kind of things may caouse or causing the fail
   for example in className changing if you see + and - lines
   In the context of hydration errors, the + and - symbols in logs indicate differences between the server-rendered HTML and the client-rendered DOM:

   +: Content or attributes present in the client-rendered DOM but not in the server-rendered HTML.
   -: Content or attributes present in the server-rendered HTML but not in the client-rendered DOM.

   if component has
   "use client"
   it will never couse hydranation fail (i think)

   i just searched about it :) it can cause

   If u change server rendered for example div's class from Client rendered function it also causes hydranation fail
   shortly don't change server rendered elements from client rendered component
   
3. Performance improvements
   1.Don't overuse Client components if possible try to use SSR componenets as much as possible
   2.When opening another page which has async await api call in it you should use Suspense to show loader while fetching because it's 1.shows loader 2.loads page almost immediately

and much more...
