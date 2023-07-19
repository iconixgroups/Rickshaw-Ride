import React from 'react';

const DevelopersSetup: React.FC = () => {
  return (
    <div>
      <h1>Developers Setup Guide</h1>
      <h2>Environment Setup</h2>
      <p>
        1. Install Node.js and npm: Download and install Node.js from the official website. It comes with npm(node package manager).
      </p>
      <p>
        2. Install React Native CLI: Run the following command in your terminal to install React Native CLI globally on your machine.
        <code>npm install -g react-native-cli</code>
      </p>
      <p>
        3. Install TypeScript: Run the following command in your terminal to install TypeScript globally on your machine.
        <code>npm install -g typescript</code>
      </p>
      <h2>Project Setup</h2>
      <p>
        1. Clone the repository: Clone the repository to your local machine using the git clone command.
      </p>
      <p>
        2. Install dependencies: Navigate to the project directory in your terminal and run the following command to install all the project dependencies.
        <code>npm install</code>
      </p>
      <p>
        3. Start the development server: Run the following command in your terminal to start the development server.
        <code>npm start</code>
      </p>
      <h2>Firebase Setup</h2>
      <p>
        1. Create a Firebase project: Go to the Firebase console and create a new project.
      </p>
      <p>
        2. Enable Authentication: In your Firebase project, enable the authentication method you want to use.
      </p>
      <p>
        3. Add Firebase to your app: Follow the instructions in the Firebase console to add Firebase to your app.
      </p>
    </div>
  );
};

export default DevelopersSetup;