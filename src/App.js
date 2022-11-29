import React from 'react';
import './App.scss';
import Card from './components/Card/Card';

function App() {
  return (
    <div className="container">
      <div className="row">
        <Card
          title="Lorem ipsum dolor "
          images="../images/arthur.png"
          alt="arthur"
          p_title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, ex?"
        />
        <Card
          title="Lorem ipsum dolor"
          images="../images/kashima.png"
          alt="kashima"
          p_title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, ex?"
        />
      </div>
      
    </div>
  );
}

export default App;
