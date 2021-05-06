import React from 'react';
import NavBar from './components/nav/NavBar'

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
        <NavBar color={(darkMode ? "primary" : "secondary")} onToggle={toggleMode}/>
        <HomeView />
      </div>
    </div>
  );
};