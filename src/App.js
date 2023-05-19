import React from "react";
import "./App.css";
import Header from "./components/Header";
import Input from "./components/Input";
import Output from "./components/Output";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="App">
      <Header />
      <Input />
      <Output />
      <Footer />
    </main>
  );
}

export default App;
