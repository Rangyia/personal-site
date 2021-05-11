import React, { useEffect } from 'react';
import NavBar from './components/nav/NavBar'
import SideBar from './components/nav/SideBar'
import axios from 'axios';

// views
import { HomeView, FrontendView, BackendView, HackingView, DevopsView } from './views'

// styles
import './App.css';

export default function App() {
  const [repos, setRepos] = React.useState([]);
  const [darkMode, setDarkMode] = React.useState(false);
  const [view, setView] = React.useState(<HomeView title={"Home"} color={(darkMode ? "primary" : "secondary")} />);
  const [selectedView, setSelectedView] = React.useState({
    home: true,
    frontend: false,
    backend: false,
    hacking: false,
    devops: false
  });

  
  const [styles, setStyles] = React.useState({
    backgroundColor: "#fff",
  });

  const menuSelector = (option) => {
      switch (option) {
        case 0:
          setView(<HomeView title={"Home"} color={(darkMode ? "primary" : "secondary")} />)
          setSelectedView({
            home: true,
            frontend: false,
            backend: false,
            hacking: false,
            devops: false
          });
          break;
        case 1:
          setView(<FrontendView repos={repos} title={"Frontend"} color={(darkMode ? "primary" : "secondary")} />)
          setSelectedView({
            home: false,
            frontend: true,
            backend: false,
            hacking: false,
            devops: false
          });
          break;
        case 2:
          setView(<BackendView repos={repos} title={"Backend"} color={(darkMode ? "primary" : "secondary")} />)
          setSelectedView({
            home: false,
            frontend: false,
            backend: true,
            hacking: false,
            devops: false
          });
          break;
        case 3:
          setView(<HackingView repos={repos} title={"Hacking"} color={(darkMode ? "primary" : "secondary")} />)
          setSelectedView({
            home: false,
            frontend: false,
            backend: false,
            hacking: true,
            devops: false
          });
          break;
        case 4:
          setView(<DevopsView repos={repos} title={"DevOps"} color={(darkMode ? "primary" : "secondary")} />)
          setSelectedView({
            home: false,
            frontend: false,
            backend: false,
            hacking: false,
            devops: true
          });
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

  const getRepos = async () => {
    let headers = {
      'Content-Type': 'application/json; charset=utf-8',
      'Accept': 'application/json',
    };

    await axios.get(`https://api.github.com/users/rangyia/repos`, { headers })
      .then(res => {
        let repoData = [];
        for (let i in res.data) {
          repoData.push({
            name: res.data[i].name,
            fullName: res.data[i].full_name,
            description: res.data[i].description,
            language: res.data[i].language,
            link: res.data[i].html_url
          })
        }
        setRepos(repoData);
      })
      .catch((err) => {
        console.log("GitHub API Error: ", err);
      });
  }

  useEffect(() => {
    async function fetchData() {
      await getRepos();
    }
    fetchData();
  }, [setRepos])

  return (
    <div className="app" style={styles}>
      <div className="container">
        <NavBar color={(darkMode ? "primary" : "secondary")} onToggle={toggleMode} selectView={menuSelector} />
          {(!selectedView["home"] ? 
            <div className="view">
              <SideBar selectedView={selectedView} color={(darkMode ? "primary" : "secondary")} selectView={menuSelector} />
              <div className="view-content">
                {view}
              </div>
            </div>
            : 
            <div className="view">
              <div className="view-content">
                <HomeView title={"Home"} color={(darkMode ? "primary" : "secondary")} selectView={menuSelector} />
              </div>
            </div>
          )}
      </div>
    </div>
  );
};