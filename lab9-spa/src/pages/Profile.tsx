import { useParams } from 'react-router-dom';

function Profile() {
  const { username } = useParams<{ username?: string }>();

  return (
    <div>
      <h2>User Profile Page</h2>
      {username ? <p>Welcome, {username}!</p> : <p>No username provided.</p>}
    </div>
  );
}

export default Profile;
