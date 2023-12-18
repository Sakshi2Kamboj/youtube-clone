import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { Sidebar } from './component/Sidebar';
import { Mynavbar } from './component/Mynavbar';
import { Mybadge } from './component/Mybadge';
import { Mycolum } from './component/Mycolum';

function App() {
  const urls = [
    { 'id': 1, 'url': 'https://www.youtube.com/embed/Bn62TH0ulps', 'description': ' Props in React Js in Hindi' },
    { 'id': 2, 'url': 'https://www.youtube.com/embed/-vS2RzgbnMc', 'description': ' Basic Spoken English course 2023 | Class -2 | Basic English Speaking Class 2023 | Free English class' },
    { 'id': 3, 'url': 'https://www.youtube.com/embed/kOk4-wb0Yzk', 'description': ' बकरा हलाल हो गया 😜| Family Vlog | Master Ji' },
    { 'id': 4, 'url': 'https://www.youtube.com/embed/Hc18Y_pWRLw', 'description': ' Effective Ways to Make Students Think Innovative' },
    { 'id': 5, 'url': 'https://www.youtube.com/embed/-T84LlW4qDw?controls=0', 'description': ' न्यू यॉर्क में गरीब: शहर और वहां जीने की कोशिश [Poor in New York] | DW Documentary हिन्दी' },
    { 'id': 6, 'url': 'https://www.youtube.com/embed/sfyYX1s0E5U?controls=0', 'description': ' Life in Winter at Village of Talesh Mountains Episode Three | Country Life Series' },
    { 'id': 7, 'url': 'https://www.youtube.com/embed/JIoN76fixMY?controls=0', 'description': ' Cooking tandoori lamb with saffron and vegetables on a snowy winter day!' },
    { 'id': 8, 'url': 'https://www.youtube.com/embed/VZU-EyQfUXQ?controls=0', 'description': 'Italian Style Oven Pizza Making / 이태리 스타일 화덕 피자 만들기 / Korean Western Restaurant' },

  ]
  const [mainClass, setMainClass] = useState('col-md-10')
  const [isVisible, setIsVisible] = useState(false)
  const [filterArray, setFilterArray] = useState(urls)

  const updateStatus = (value) => {
    setIsVisible(value)
  }

  useEffect(
    () => {
      if (isVisible) {
        setMainClass('col-md-10')
      }
      else {
        setMainClass('col-md-12')
      }
    }
    , [isVisible])
  const filterUrls = (value) => {
    setFilterArray(value)
  }

  return (
    <div className='row'>
      <div className='col-md-2 sidemenu'>
        <Sidebar status={isVisible} updateStatus={updateStatus} />
      </div>
      <div className={`${mainClass} mainContainer`} >
        <Mynavbar Url={urls} filterUrls={filterUrls} />
        <Mybadge />
        <Mycolum Url={filterArray} />
      </div>
    </div>
  );
}

export default App;
