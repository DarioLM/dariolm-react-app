import React, { useState } from 'react';
import logo from '../logo.svg';
import '../App.css';
import loadable from '@loadable/component'
import Button from "@dariolm/react-common-components-library/build/button";

const LinkComponent = loadable(() => import("@dariolm/react-common-components-library/build/link"), {
  fallback: <div>Cargando...</div>
});

const Homepage = () => {
  const [tabSelected, setTabSelected] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div onClick={() => setTabSelected(!tabSelected)}>
         TabPanel
         {!tabSelected ?
          <Button />
          :
          <LinkComponent to={"https://www.empathy.co/"}/>
        }
        </div>
      </header>
    </div>
  );
}

export default Homepage;
