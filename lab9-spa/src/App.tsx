import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Lab 9 SPA with React Router</h1>

      <nav style={{ marginBottom: '20px' }}>
        <a href="/" style={{ marginRight: '10px' }}>Home</a>
        <a href="/about" style={{ marginRight: '10px' }}>About</a>
        <a href="/profile" style={{ marginRight: '10px' }}>Profile</a>
        <a href="/profile/Echo">Profile for Echo</a>
      </nav>

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/profile" element={<Profile />} />
  <Route path="/profile/:username" element={<Profile />} />
  <Route path="*" element={<NotFound />} />
</Routes>

    </div>
  );
}

export default App;
