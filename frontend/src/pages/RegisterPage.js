// import React, { useState } from 'react';
// import axios from 'axios';

// const RegisterPage = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleRegister = async () => {
//     try {
//       const response = await axios.post('/api/auth/register', {
//         username,
//         password,
//       });

//       // Handle success (response.data might be a message or object)
//       if (typeof response.data === 'string') {
//         alert(response.data);
//       } else {
//         alert('Registration successful');
//       }
//     } catch (error) {
//       if (error.response) {
//         // Server responded with a status other than 2xx
//         alert(`Registration failed: ${JSON.stringify(error.response.data)}`);
//       } else if (error.request) {
//         // Request was made but no response
//         alert('No response from server. Check if backend is running.');
//       } else {
//         // Other errors
//         alert('Registration failed: ' + error.message);
//       }
//     }
//   };

//   return (
//     <div>
//       <h2>Register</h2>
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
//       <button onClick={handleRegister}>Register</button>
//     </div>
//   );
// };

// export default RegisterPage;


import React, { useState } from 'react';
import axios from 'axios';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('/api/auth/register', {
        username,
        password,
      });

      if (typeof response.data === 'string') {
        alert(response.data);
      } else {
        alert('Registration successful');
      }
    } catch (error) {
      if (error.response) {
        alert(`Registration failed: ${JSON.stringify(error.response.data)}`);
      } else if (error.request) {
        alert('No response from server. Check if backend is running.');
      } else {
        alert('Registration failed: ' + error.message);
      }
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Register</h2>
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
        <button style={styles.button} onClick={handleRegister}>
          Register
        </button>
      </div>
    </div>
  );
};

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

export default RegisterPage;
