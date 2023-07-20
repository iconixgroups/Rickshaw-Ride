import React from 'react';

const DependencyInstallationGuide: React.FC = () => {
  return (
    <div>
      <h1>Dependency Installation Guide</h1>
      <h2>Required Dependencies:</h2>
      <ul>
        <li>React: <code>npm install react react-dom</code></li>
        <li>React Native: <code>npm install react-native</code></li>
        <li>React Router: <code>npm install react-router-dom</code></li>
        <li>Firebase: <code>npm install firebase</code></li>
        <li>Material UI: <code>npm install @material-ui/core</code></li>
        <li>Typescript: <code>npm install typescript</code></li>
        <li>Google Maps: <code>npm install @react-google-maps/api</code></li>
      </ul>
      <h2>Installation:</h2>
      <p>After cloning the repository, navigate to the project directory and run <code>npm install</code> to install all the dependencies listed in the package.json file.</p>
      <h2>Running the App:</h2>
      <p>Once all dependencies are installed, you can start the app by running <code>npm start</code> in the terminal.</p>
    </div>
  );
}

export default DependencyInstallationGuide;