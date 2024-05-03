
import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
     <div className="container">  
     <Weather defaultCity="New York"/>
      <footer className="footer mt-1">
       coded by Maryam and is open-sourced on {""}
      <a href='https://github.com/maryamnora/weatheer-react-app'target='_blank' rel="noreferrer" >
         GitHub </a> and hosted on <a href="https://weather-app-maryam.netlify.app/"target='_blank' rel="noreferrer">Netlify</a>
        
      </footer>
     </div>
    </div>
  );
}

 
