import './App.css';
import SocialLinks from './Components/SocialLinks';
import MixArticle from './Components/MixArticle';
import LatestMix from './Components/LatestMix';

import { BrowserRouter as Router} from 'react-router-dom'

function App() {

  const hours = new Date().getHours()
  const isDayTime = hours > 7 && hours < 17

  return (
    <Router>
         <div className={isDayTime ? "App" : "App-dark"}>

           
            <div className={isDayTime ? "App-title" : "App-title-dark"} >TRAILMIX</div>
            <div className={isDayTime ? "App-subtitle" : "App-subtitle-dark"} >DUB TECHNO DEEP HOUSE</div>
            <SocialLinks></SocialLinks> 
          
            <LatestMix title="LOCK DUB DOWN" genre="Dub Techno / Deep House" scLink="https://soundcloud.com/jeva126/lock-dub-down" isDayTime={isDayTime}></LatestMix>
            
            <div className={isDayTime ? "App-archive-title" : "App-archive-title-dark"}>ARCHIVE</div>   
            
            <MixArticle title="Salomon_xa_pro_1" genre="Dub Techno / Deep House" date="19_08_2021" scLink={"https://soundcloud.com/jeva126/salomon_xa_pro_1/s-xRLoHlmzn95"} isDayTime={isDayTime}></MixArticle>   
            <MixArticle title="Deep 21 Mix" genre="Dub Techno" date="30_07_2020" scLink={"https://soundcloud.com/jeva126/jeva-deep-21-mix"} isDayTime={isDayTime}></MixArticle>   
            <MixArticle title="ayest" genre="Minimal" date="10_07_2020" scLink={"https://soundcloud.com/jeva126/jeva-grey-lynn-sound-volume-1"} isDayTime={isDayTime}></MixArticle>   

          </div>

    </Router>
 
  );
}

export default App;
