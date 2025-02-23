# Career Guidance System - Client

🚀 **Career Guidance System Client** is a frontend application built with **NestJS, TypeScript, Tailwind CSS, and Testing Library**.  
This project serves as the client-side application for a career guidance system, helping users find career recommendations based on their interests and skills.

---

## 📌 Features

- ✅ **NestJS (Backend API Integration)**
- ✅ **TypeScript for Type Safety**
- ✅ **Tailwind CSS for Styling**
- ✅ **ESLint & Prettier for Code Quality**
- ✅ **Jest & Testing Library for Unit Tests**
- ✅ **GitHub Integration for Version Control**

---

## 🚀 Getting Started

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/Mansoor07Tariq/career-guidance-system-client.git
cd career-guidance-system-client
```

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Configure Environment Variables**
Create a `.env` file in the root directory and add necessary configurations. Example:
```sh
PORT=3000
API_URL=https://api.example.com
```

### **4️⃣ Run the Development Server**
```sh
npm run start
```
The application will be available at `http://localhost:3000`.

---

## 🛠 Scripts

| Command             | Description                         |
|---------------------|-------------------------------------|
| `npm run start`    | Start the development server       |
| `npm run build`    | Build the project for production   |
| `npm run lint`     | Run ESLint and fix linting issues  |
| `npm run test`     | Run Jest test cases                |
| `npm run format`   | Format the code with Prettier      |

---

## 🏗 Project Structure

```
career-guidance-system-client/
│── src/
│   ├── controllers/      # API Controllers
│   ├── services/         # Business Logic Services
│   ├── modules/          # NestJS Modules
│   ├── middlewares/      # Custom Middleware
│   ├── main.ts           # Entry Point
│   ├── app.module.ts     # Root Module
│── public/               # Static Files (CSS, Images)
│── test/                 # Unit & Integration Tests
│── .gitignore            # Ignored files for Git
│── .eslintrc.js          # ESLint Configuration
│── tailwind.config.js    # Tailwind CSS Configuration
│── package.json          # Project Dependencies
│── README.md             # Project Documentation
```

---

## 🧪 Testing

Run tests with:
```sh
npm test
```

For test coverage:
```sh
npm run test:cov
```

---

## 🚀 Deployment

1. **Build for production**:
   ```sh
   npm run build
   ```
2. **Deploy using Docker, Heroku, Vercel, or another platform**.
