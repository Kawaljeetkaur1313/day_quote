
import './App.css';
import Header from './components/Header';
import Quote from './components/Quote';
import Footer from './components/Footer';
import { useEffect } from 'react';
function App(){
  const appInfo ={
    title: 'Quote of the Day',
    author: 'Kawaljeet Kaur',
    copyright: 'copyright, 2024',
  }
  useEffect(() => {
    document.title = appInfo.title;
  },[appInfo.title]);
  return(
    <div className="App">
      <Header title={appInfo.title}/>
      <Quote />
      <Footer copyright={appInfo.copyright} author={appInfo.author}/> 
    </div>
  )
}

export default App;
