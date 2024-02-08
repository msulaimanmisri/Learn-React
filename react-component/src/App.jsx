import Hero from "./Components/Hero";
import SearchFilter from "./Components/SearchFilter";
import Card from "./Components/Card";
import React, { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <Hero />
      <SearchFilter setSearchTerm={setSearchTerm} />
      <Card searchTerm={searchTerm} />
    </>
  );
}

export default App;
