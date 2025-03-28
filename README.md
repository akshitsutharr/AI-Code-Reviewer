# AI Code Reviewer

An AI-powered code review tool that helps developers identify issues and improve their code quality. The application uses Google's Gemini AI to analyze code snippets and provide detailed feedback.

## Features

- Real-time code analysis
- Detailed code improvement suggestions
- Best practices recommendations
- Error detection
- Performance optimization tips

## Tech Stack

### Frontend
- React (Vite)
- Axios for API requests
- CSS for styling

### Backend
- Node.js with Express
- Google Generative AI (Gemini 2.0)
- Dotenv for environment variables

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Google Gemini API key

### Backend Setup
1. Navigate to the backend directory
   ```
   cd backend
   ```
2. Install dependencies
   ```
   npm install
   ```
3. Create a `.env` file with your Gemini API key
   ```
   GOOGLE_GEMINI_KEY=your_api_key_here
   ```
4. Start the server
   ```
   npm run dev
   ```

### Frontend Setup
1. Navigate to the frontend directory
   ```
   cd Frontend
   ```
2. Install dependencies
   ```
   npm install
   ```
3. Start the development server
   ```
   npm run dev
   ```

## Usage
1. Enter or paste your code in the left panel
2. Click the "Review" button
3. View the AI-generated code review in the right panel

## License
ISC
