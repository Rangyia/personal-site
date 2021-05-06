import React from 'react';
import NavBar from './components/nav/NavBar'
import SideBar from './components/nav/SideBar'

// views
import { HomeView } from './views'

// styles
import './App.css';

export default function App() {

  const [styles, setStyles] = React.useState({
    backgroundColor: "#fff",
  });
  const [darkMode, setDarkMode] = React.useState(false);

  const toggleMode = (isDarkMode) => {
    if (isDarkMode) {
      setStyles({
        backgroundColor: "#0c0c0c"
      })
      setDarkMode(true)
    } else {
      setStyles({
        backgroundColor: "#fff"
      })
      setDarkMode(false)
    }
  }

  return (
    <div className="app" style={styles}>
      <div className="container">
        <NavBar color={(darkMode ? "primary" : "secondary")} onToggle={toggleMode} />
        <div style={{ display: 'flex', alignItems: 'center', verticalAlign: 'middle', height: "100%" }}>
          <SideBar />
          <HomeView color={(darkMode ? "primary" : "secondary")} />
        </div>
      </div>
    </div>
  );
};