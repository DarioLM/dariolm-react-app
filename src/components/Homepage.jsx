import React from 'react';
import logo from '../logo.svg';
import empathyLogo from "../emphaty-logo.png";
import '../App.css';
import loadable from '@loadable/component';
// import { TabsPanel } from "@dariolm/react-common-components-library";
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
    content: <LinkComponent className={"app-link"} to={"https://www.empathy.co/"} content={"Link in a new tab to Empathy.co"}/>,
  }
];

const Homepage = () => (
    <div className="App App-body">
      <header className="App-header">
        <div className="App-header_logos">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={empathyLogo} className="emphathy-logo" alt="emphaty-logo" />
        </div>
      </header>
      <div className="app-content">
        <TabsPanel className={"app-tabs-panel"} tabs={tabsConfig} />
      </div>
      <footer>
        Made with ❤️ by <a href="https://github.com/DarioLM/react-empathy-app" target="_blank">DarioLM</a>
      </footer>
    </div>
  );

export default Homepage;
