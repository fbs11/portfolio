import React, { Suspense } from 'react';
import logo from './logo.svg';
import './App.css';

import { Home, About, Projects, Skills} from './container'
import {Navbar} from './components'
import {Basketball} from './components'
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from './Model';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Basketball />
      <Home />
      <About />
      <Projects />
      <Skills />

    </div>
  );
}

export default App;
