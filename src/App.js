import React from 'react';
import List from './List';
import './App.css';

function App() {
  return (
    <main>
      <section className="container">
        <h3>0 birthdays today</h3>
        <List />
        <button onClick={() => console.log('clicked')}>This is button</button>
      </section>
    </main>
  );
}

export default App;
