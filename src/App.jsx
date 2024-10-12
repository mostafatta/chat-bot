import React from 'react';
import SideBar from './components/SideBar';
import Main from './components/Main';

const App = () => {
  return (
    <div className="flex min-h-screen"> {/* Using flex for layout */}
      <SideBar />
      <Main />
    </div>
  );
};

export default App;
