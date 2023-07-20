import React from 'react';

const DevelopersSetupGuide: React.FC = () => {
  return (
    <div>
      <h1>Developers Setup Guide</h1>
      <h2>Environment Setup</h2>
      <p>Ensure you have Node.js, npm/yarn and React Native CLI installed on your system.</p>
      <h2>Project Setup</h2>
      <p>Clone the repository and navigate to the project directory. Run 'npm install' or 'yarn' to install the dependencies.</p>
      <h2>Firebase Setup</h2>
      <p>Setup Firebase project and enable Authentication. Add your Firebase project configuration in 'src/config/firebaseConfig.ts'.</p>
      <h2>Running the App</h2>
      <p>For iOS, navigate to the ios directory and run 'pod install'. Then, run 'react-native run-ios' in the project directory.</p>
      <p>For Android, run 'react-native run-android' in the project directory.</p>
      <h2>Code Structure</h2>
      <p>All the source code is in the 'src' directory. Each feature has its own directory and the shared components are in 'src/components'.</p>
      <h2>Testing</h2>
      <p>Run 'npm test' or 'yarn test' to run the tests.</p>
      <h2>Building for Production</h2>
      <p>For iOS, use Xcode to archive and distribute the app. For Android, run 'react-native run-android --variant=release'.</p>
    </div>
  );
};

export default DevelopersSetupGuide;