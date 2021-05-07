import React from 'react';
import { Grid } from '@material-ui/core';
import NavBar from './components/nav/NavBar'
import SideBar from './components/nav/SideBar'

// views
import { HomeView, FrontendView, BackendView, HackingView, DevopsView } from './views'

// styles
import './App.css';

export default function App() {
  const [darkMode, setDarkMode] = React.useState(false);
  const [view, setView] = React.useState(<HomeView color={(darkMode ? "primary" : "secondary")} />);

  const [styles, setStyles] = React.useState({
    backgroundColor: "#fff",
  });

  const menuSelector = (option) => {
      switch (option) {
        case 0:
          setView(<HomeView color={(darkMode ? "primary" : "secondary")} />)
          break;
        case 1:
          setView(<FrontendView color={(darkMode ? "primary" : "secondary")} />)
          break;
        case 2:
          setView(<BackendView color={(darkMode ? "primary" : "secondary")} />)
          break;
        case 3:
          setView(<HackingView color={(darkMode ? "primary" : "secondary")} />)
          break;
        case 4:
          setView(<DevopsView color={(darkMode ? "primary" : "secondary")} />)
          break;
        default:
          console.error("Invalid view selection")
      }
  }

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
        <NavBar color={(darkMode ? "primary" : "secondary")} onToggle={toggleMode} selectView={menuSelector} />
        <div className="view">
          <div className="view-nav">
            <SideBar color={(darkMode ? "primary" : "secondary")} selectView={menuSelector} />
          </div>
          <div className="view-content">
            {view}
          </div>
        </div>
      </div>
    </div>
  );
};