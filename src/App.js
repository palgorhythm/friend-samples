import React from 'react';
import './App.css';

const samplePackData = [
]
for(let i = 0; i < 20; i ++){
  samplePackData.push({title: `Cool/Dope Sample Pack ${i + 1}`, url: 'https://heeeeeeeey.com/', imgUrl: 'https://picsum.photos/500'})
}

const App = () => (
    <div className="App">
      <header className="App-header">
        friend samples :D
      </header>
      <div className="sample-packs">
        { samplePackData.map((samplePack, index) => SamplePack({...samplePack, key: `key-${index}`}))}
      </div>
    </div>
  );
const SamplePack = ({title, url, imgUrl, key}) => (
  <div className="sample-pack" key={key}> 
    <div className="sample-pack-title">
      <a href={url}>{title}</a>
    </div>
    <img src={imgUrl} className={`sample-pack-${title}`} alt="sample-pack-logo" />
  </div>
)


export default App;
