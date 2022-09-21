import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  // <StrictMode>
  //   <App />
  // </StrictMode>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />}>
      {/* <Route index element={<Home />} /> */}
      {/* <Route path="blogs" element={<Blogs />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<NoPage />} /> */}
    </Route>
  </Routes>
</BrowserRouter>
);
