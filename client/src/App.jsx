import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import { Home, CreatePost } from './page';

const App = () => (
  <BrowserRouter>
        <header className="w-full flex items-center bg-[#481C37] sm:px-8 px-4 py-4 border-b bord">
        <Link to="/create-post" className="font-inter font-medium bg-[#481C37] text-white px-2 py-2 rounded-md">Create</Link>
        <Link to="/" className="font-inter font-medium bg-[#481C37] text-white px-2 py-2 rounded-md">Community</Link>

    </header>
    <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />

      </Routes>
    </main>
  </BrowserRouter>
);

export default App;
