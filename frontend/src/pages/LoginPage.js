// import React, { useState } from 'react';
// import axios from 'axios';

// const LoginPage = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post('/api/auth/login', {
//         username,
//         password,
//       });

//       // Handle success (response.data might be a message or object)
//       if (typeof response.data === 'string') {
//         alert(response.data);
//       } else {
//         alert('Login successful');
//       }

//       // Inside handleLogin() after successful response
// if (typeof response.data === 'string') {
//     alert(response.data);
//     localStorage.setItem('isLoggedIn', 'true');
//     window.location.href = '/home';
//   } else {
//     alert('Login successful');
//     localStorage.setItem('isLoggedIn', 'true');
//     window.location.href = '/home';
//   }
  
//     } catch (error) {
//       if (error.response) {
//         alert(`Login failed: ${JSON.stringify(error.response.data)}`);
//       } else if (error.request) {
//         alert('No response from server. Check if backend is running.');
//       } else {
//         alert('Login failed: ' + error.message);
//       }
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <input
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <input
//         placeholder="Password"
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// };

// export default LoginPage;

import React, { useState } from 'react';
import axios from 'axios';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('/api/auth/login', {
        username,
        password,
      });

      if (typeof response.data === 'string') {
        alert(response.data);
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = '/home';
      } else {
        alert('Login successful');
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = '/home';
      }

    } catch (error) {
      if (error.response) {
        alert(`Login failed: ${JSON.stringify(error.response.data)}`);
      } else if (error.request) {
        alert('No response from server. Check if backend is running.');
      } else {
        alert('Login failed: ' + error.message);
      }
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Login</h2>
        <input
          style={styles.input}
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          style={styles.input}
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button style={styles.button} onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

// Inline CSS styles
const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(to right, #667eea, #764ba2)',
    fontFamily: 'Arial, sans-serif',
  },
  card: {
    backgroundColor: 'white',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
    textAlign: 'center',
    width: '300px',
  },
  title: {
    marginBottom: '20px',
    color: '#333',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '14px',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#667eea',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
};

export default LoginPage;
