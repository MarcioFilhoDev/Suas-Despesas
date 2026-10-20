# 💰 Finance App

[🇧🇷 Leia este README em Português](README.pt-BR.md)

A mobile application built with React Native and Expo, focused on personal finance management. The project features user authentication, session persistence, and expense management using Supabase as the backend.

---

## 💡 Inspiration

I developed this project to move away from using spreadsheets to track my personal expenses.

Additionally, I sometimes handle transactions on behalf of other people, which means I need to keep track of who owes me money and how much they owe. Although the current version of the application does not support custom expense categories, this is a feature I plan to implement in the future.

---

## 📱 About the Project

The goal of this application is to provide a simple and practical way to manage personal finances, ensuring that each user can access only their own expense records.

The application was built using modern technologies from the React Native ecosystem, following good practices in componentization, TypeScript typing, and form validation.

---

## 🚀 Features

- ✅ User registration and authentication
- ✅ Automatic user session persistence
- ✅ Expense creation
- ✅ Expense record retrieval
- ✅ Expense deletion
- ✅ Database integration with Supabase
- ✅ Navigation between screens
- ✅ Form validation

---

## 🛠️ Technologies Used

### Mobile Frontend

- React Native
- Expo
- TypeScript
- Expo Router

### Backend & Database

- Supabase

### Styling

- NativeWind

### Forms & Validation

- React Hook Form
- Zod

### Navigation

- Expo Router

### Components & User Experience

- Lucide React Native
- React Native Calendars

---

## 📂 Project Structure

```bash
financas/
└── src/
    ├── app/
    ├── components/
    ├── config/
    ├── hooks/
    ├── services/
    ├── screens/
    ├── types/
    └── ...
```

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the project

```bash
npx expo start
```

To run on Android:

```bash
npx expo run:android
```

To run on iOS:

```bash
npx expo run:ios
```

---

## 🔐 Supabase Configuration

Create a `.env` file in the project root with the following environment variables:

```env
EXPO_PUBLIC_SUPABASE_URL=YOUR_URL
EXPO_PUBLIC_SUPABASE_ANON_KEY=YOUR_KEY
```

---

## 🗄️ Supabase Setup

1. Enable email authentication in your Supabase project.
2. Create a table to store user information.
3. Create a database trigger to automatically insert a record into the users table whenever a new user registers.
4. Create a table to store expense records.

---

## 🎯 Technical Goals

This project was developed with a focus on:

- Improving data typing with TypeScript
- Practicing mobile application architecture
- Integrating with an authenticated backend
- Managing application state and forms
- Implementing session persistence
- Integrating with a database

---

## 📌 Future Improvements

- [ ] Edit existing expenses
- [ ] Add expense filters by date range and/or category
- [ ] Support installment-based expenses
- [ ] Display upcoming expenses

---

## 👨‍💻 Author

Developed by Márcio Filho with ☕.
