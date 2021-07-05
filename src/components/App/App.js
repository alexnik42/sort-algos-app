import React from "react";

import ArrayContainer from "../Array/ArrayContainer";
import ToolbarContainer from "../Toolbar/ToolbarContainer";
import Footer from "components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <div className="body">
      <ToolbarContainer />
      <ArrayContainer />
      <Footer />
    </div>
  );
}

export default App;
