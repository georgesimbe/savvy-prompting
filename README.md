# Savvy Prompting

Welcome to Savvy Prompting, your partner in elevating AI conversations and maximizing the potential of AI technology for your business.

## Brand Overview

Savvy Prompting is a SaaS business dedicated to empowering companies with the tools and knowledge needed to craft perfect prompts for AI systems. Our platform streamlines the process of prompt engineering, ensuring more accurate, relevant, and valuable AI outputs.

## Table of Contents

1. [Features](#features)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Docker](#docker)
5. [API Documentation](#api-documentation)
6. [Development](#development)
7. [Roadmap](#roadmap)
8. [Contributing](#contributing)
9. [Security](#security)
10. [Contact](#contact)

## Features

- Prompt Analyzer tool with analysis features:
  - Token count
  - Estimated response time
  - Clarity score
  - Suggestions for improvement
- PromptBench integration for advanced prompt evaluation
- User authentication and authorization
- Prompt history tracking
- Responsive design for various screen sizes

## Installation

1. Clone this repository:
   ```
   git clone https://github.com/yourusername/savvy-prompting.git
   cd savvy-prompting
   ```

2. Install dependencies:
   ```
   cd server && npm install
   cd ../client && npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the `server` directory
   - Add the following variables:
     ```
     MONGODB_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     FRONTEND_URL=http://localhost:8000
     ```

## Usage

1. Start the application:
   ```
   ./start.sh
   ```

2. Open your web browser and go to `http://localhost:8000`

3. Register for an account or log in

4. Use the Prompt Analyzer:
   - Enter your prompt and select an AI model
   - Click "Analyze Prompt" to see the results

5. Use PromptBench:
   - Enter multiple prompts (one per line)
   - Click "Evaluate Prompts" to see the evaluation results

To stop the application, press Ctrl+C in the terminal where you ran the start script.

## Docker

To run the application using Docker:

1. Make sure you have Docker and Docker Compose installed on your system.

2. Build and start the containers:
   ```
   docker-compose up --build
   ```

3. Open your web browser and go to `http://localhost:8000`

4. To stop the application, press Ctrl+C in the terminal and then run:
   ```
   docker-compose down
   ```

## API Documentation

For detailed API documentation, please refer to the [API_DOCUMENTATION.md](./API_DOCUMENTATION.md) file.

## Development

To set up the development environment:

1. Follow the [Installation](#installation) steps
2. For the backend, run:
   ```
   cd server && npm run dev
   ```
3. For the frontend, run:
   ```
   cd client && npm start
   ```

This will start the backend server with nodemon for auto-reloading and the frontend development server.

## Roadmap

Our development roadmap is divided into phases:

### Phase 1 (Current)

- [x] Implement basic Prompt Analyzer
- [x] Integrate PromptBench
- [x] Set up user authentication
- [ ] Enhance feedback system
- [ ] Implement user dashboard

### Phase 2 (Upcoming)

- [ ] Advanced analysis features (bias detection, A/B testing)
- [ ] Blog platform
- [ ] Community features (comments, forum)

For more details, see our [project board](link-to-project-board).

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a new branch: `git checkout -b feature-branch-name`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-branch-name`
5. Submit a pull request

For major changes, please open an issue first to discuss what you would like to change.

## Security

We take security seriously. If you discover any security-related issues, please email security@savvyprompting.com instead of using the issue tracker.

## Contact

For any inquiries or if you're interested in contributing to the project, please use the contact form on our website or reach out to us through our social media channels.

---

Savvy Prompting: Elevate Your AI Conversations