import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Home() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const handleNavigate = () => {
    if (username.trim()) {
      setError('');
      navigate(`/profile/${username}`);
    } else {
      setError('Please enter a username.');
    }
  };

  return (
    <div>
      <h2>Welcome to the Home Page</h2>

      <div style={{ marginBottom: '10px' }}>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={handleNavigate} style={{ marginLeft: '10px' }}>
          View Profile
        </button>
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}
