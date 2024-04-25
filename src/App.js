
import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
     <div className="container">  
     <Weather defaultCity="New York"/>
      <footer className="footer mt-1">
      This site is coded by Maryam and is {""}
      <a href='https://github.com/maryamnora/weatheer-react-app'target='_blank' rel="noreferrer" >
        open-sourced on GitHub </a>
        
      </footer>
     </div>
    </div>
  );
}

 
