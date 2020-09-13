import React, { useState } from 'react';
import logo from '../logo.svg';
import '../App.css';
import loadable from '@loadable/component';
import TabsPanel from "@dariolm/react-common-components-library/modules/tabsPanel";

const LinkComponent = loadable(() => import("@dariolm/react-common-components-library/modules/link"), {
  fallback: <div>Cargando...</div>
});

const tabsConfig = [
  {
    label: "Empty",
    value: 0,
    content: null,
  },
  {
    label: "Link",
    value: 1,
    content: <LinkComponent to={"https://www.empathy.co/"}/>,
  }
];

const Homepage = () => (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
         <TabsPanel tabs={tabsConfig} />
        </div>
      </header>
    </div>
  );

export default Homepage;
