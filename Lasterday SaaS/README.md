# Personal Journal App

A beautiful personal journaling application built with React, Next.js, Tailwind CSS, and shadcn/ui.

## Features

- Clean, modern interface with responsive design
- Daily journal entries stored in localStorage
- Sidebar showing past entries with dates
- AI-powered summary generation using OpenAI
- Beautiful typography and comfortable spacing

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env.local` file in the root directory and add your OpenAI API key:
   ```
   OPENAI_API_KEY=your_openai_api_key_here
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```

## Usage

1. Open the app in your browser
2. Start writing your journal entry in the main textarea
3. Click "Save Entry" to save your entry
4. Click "Generate Summary" to get an AI-generated summary of your entry
5. View past entries in the sidebar

## Technologies Used

- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- date-fns
- OpenAI API 