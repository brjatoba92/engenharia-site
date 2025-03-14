import React from "react";
import { BrowserRouter }from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AppRoutes from "./routes/AppRoutes/AppRoutes";
import '/App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main>
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;