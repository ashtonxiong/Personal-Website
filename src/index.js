import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TopBar from './components/TopBar'
import InfoPage from './components/InfoPage'
import ProjectPage from "./components/ProjectPage"
import backgroundVideo from './videos/background1.mp4'
import Footer from "./components/Footer"

const root = ReactDOM.createRoot(document.getElementById('root'));

let page = "home"
const changeAddPage = (info) => {
  console.log("test page in index", info)
  page = info;
}

root.render(
  <React.StrictMode>
    <TopBar changeCurrentPage={changeAddPage} currentPage={page} />
    {/* <InfoPage video={backgroundVideo}/> */}
    {/* <App /> */}
    {/* ({page === "about me" ? <InfoPage /> :  }) */}
    <Footer />
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
