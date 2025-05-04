// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// function MovieReviewPage() {
//   const [reviews, setReviews] = useState([]);
//   const [movieName, setMovieName] = useState('');
//   const [review, setReview] = useState('');
//   const [editingId, setEditingId] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchReviews();
//   }, []);

//   const fetchReviews = async () => {
//     try {
//       const res = await axios.get('/api/reviews');
//       setReviews(res.data);
//     } catch (error) {
//       alert('Failed to load reviews. Please try again later.');
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (editingId) {
//         // Edit existing review
//         await axios.put(`/api/reviews/${editingId}`, {
//           movieName,
//           review,
//         });
//         setEditingId(null);
//       } else {
//         // Add new review
//         await axios.post('/api/reviews', {
//           movieName,
//           review,
//         });
//       }

//       setMovieName('');
//       setReview('');
//       fetchReviews();
//     } catch (error) {
//       alert('Failed to save review.');
//     }
//   };

//   const handleEdit = (r) => {
//     setMovieName(r.movieName);
//     setReview(r.review);
//     setEditingId(r.id); // Make sure your backend uses "id", not "_id"
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`/api/reviews/${id}`);
//       fetchReviews();
//     } catch (error) {
//       alert('Failed to delete review.');
//     }
//   };

//   return (
//     <div>
//       <h1>Movie Reviews</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={movieName}
//           onChange={(e) => setMovieName(e.target.value)}
//           placeholder="Movie Name"
//           required
//         />
//         <input
//           type="text"
//           value={review}
//           onChange={(e) => setReview(e.target.value)}
//           placeholder="Your Review"
//           required
//         />
//         <button type="submit">{editingId ? 'Update' : 'Submit'}</button>
//       </form>

//       <ul>
//         {reviews.map((r) => (
//           <li key={r.id}>
//             <strong>{r.movieName}</strong>: {r.review}
//             <button onClick={() => handleEdit(r)}>Edit</button>
//             <button onClick={() => handleDelete(r.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default MovieReviewPage;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// function MovieReviewPage() {
//   const [reviews, setReviews] = useState([]);
//   const [movieName, setMovieName] = useState('');
//   const [review, setReview] = useState('');
//   const [editingId, setEditingId] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (localStorage.getItem('isLoggedIn') !== 'true') {
//       navigate('/login');
//     } else {
//       fetchReviews();
//     }
//   }, [navigate]);

//   const fetchReviews = async () => {
//     try {
//       const res = await axios.get('/api/reviews');
//       setReviews(res.data);
//     } catch (error) {
//       alert('Failed to load reviews. Please try again later.');
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (editingId) {
//         await axios.put(`/api/reviews/${editingId}`, {
//           movieName,
//           review,
//         });
//         setEditingId(null);
//       } else {
//         await axios.post('/api/reviews', {
//           movieName,
//           review,
//         });
//       }
//       setMovieName('');
//       setReview('');
//       fetchReviews();
//     } catch (error) {
//       alert('Failed to save review.');
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`/api/reviews/${id}`);
//       fetchReviews();
//     } catch (error) {
//       alert('Failed to delete review.');
//     }
//   };

//   const handleEdit = (r) => {
//     setMovieName(r.movieName);
//     setReview(r.review);
//     setEditingId(r.id);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('isLoggedIn');
//     navigate('/login');
//   };

//   return (
//     <div>
//       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//         <h1>Movie Reviews</h1>
//         <button onClick={handleLogout}>Logout</button>
//       </div>

//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={movieName}
//           onChange={(e) => setMovieName(e.target.value)}
//           placeholder="Movie Name"
//           required
//         />
//         <input
//           type="text"
//           value={review}
//           onChange={(e) => setReview(e.target.value)}
//           placeholder="Your Review"
//           required
//         />
//         <button type="submit">{editingId ? 'Update' : 'Submit'}</button>
//       </form>

//       <ul>
//         {reviews.map((r) => (
//           <li key={r.id}>
//             {r.movieName} - {r.review}
//             <button onClick={() => handleEdit(r)}>Edit</button>
//             <button onClick={() => handleDelete(r.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default MovieReviewPage; 

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// function MovieReviewPage() {
//   const [reviews, setReviews] = useState([]);
//   const [movieName, setMovieName] = useState('');
//   const [review, setReview] = useState('');
//   const [editingId, setEditingId] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (localStorage.getItem('isLoggedIn') !== 'true') {
//       navigate('/login');
//     } else {
//       fetchReviews();
//     }
//   }, [navigate]);

//   const fetchReviews = async () => {
//     try {
//       const res = await axios.get('/api/reviews');
//       setReviews(res.data);
//     } catch (error) {
//       alert('Failed to load reviews. Please try again later.');
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (editingId) {
//         await axios.put(`/api/reviews/${editingId}`, {
//           movieName,
//           review,
//         });
//         setEditingId(null);
//       } else {
//         await axios.post('/api/reviews', {
//           movieName,
//           review,
//         });
//       }
//       setMovieName('');
//       setReview('');
//       fetchReviews();
//     } catch (error) {
//       alert('Failed to save review.');
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`/api/reviews/${id}`);
//       fetchReviews();
//     } catch (error) {
//       alert('Failed to delete review.');
//     }
//   };

//   const handleEdit = (r) => {
//     setMovieName(r.movieName);
//     setReview(r.review);
//     setEditingId(r.id);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('isLoggedIn');
//     navigate('/login');
//   };

//   return (
//     <div>
//       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//         <h1>Movie Reviews</h1>
//         <button onClick={handleLogout}>Logout</button>
//       </div>

//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={movieName}
//           onChange={(e) => setMovieName(e.target.value)}
//           placeholder="Movie Name"
//           required
//         />
//         <input
//           type="text"
//           value={review}
//           onChange={(e) => setReview(e.target.value)}
//           placeholder="Your Review"
//           required
//         />
//         <button type="submit">{editingId ? 'Update' : 'Submit'}</button>
//       </form>

//       <ul>
//         {reviews.map((r) => (
//           <li key={r.id}>
//             {r.movieName} - {r.review}
//             <button onClick={() => handleEdit(r)}>Edit</button>
//             <button onClick={() => handleDelete(r.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default MovieReviewPage;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function MovieReviewPage() {
  const [reviews, setReviews] = useState([]);
  const [movieName, setMovieName] = useState('');
  const [review, setReview] = useState('');
  const [editingId, setEditingId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('isLoggedIn') !== 'true') {
      navigate('/login');
    } else {
      fetchReviews();
    }
  }, [navigate]);

  const fetchReviews = async () => {
    try {
      const res = await axios.get('/api/reviews');
      setReviews(res.data);
    } catch (error) {
      alert('Failed to load reviews. Please try again later.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await axios.put(`/api/reviews/${editingId}`, {
          movieName,
          review,
        });
        setEditingId(null);
      } else {
        await axios.post('/api/reviews', {
          movieName,
          review,
        });
      }
      setMovieName('');
      setReview('');
      fetchReviews();
    } catch (error) {
      alert('Failed to save review.');
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/reviews/${id}`);
      fetchReviews();
    } catch (error) {
      alert('Failed to delete review.');
    }
  };

  const handleEdit = (r) => {
    setMovieName(r.movieName);
    setReview(r.review);
    setEditingId(r.id);
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Movie Reviews</h1>
        <button style={styles.logoutButton} onClick={handleLogout}>Logout</button>
      </div>

      <form style={styles.form} onSubmit={handleSubmit}>
        <input
          style={styles.input}
          type="text"
          value={movieName}
          onChange={(e) => setMovieName(e.target.value)}
          placeholder="Movie Name"
          required
        />
        <input
          style={styles.input}
          type="text"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Your Review"
          required
        />
        <button style={styles.submitButton} type="submit">
          {editingId ? 'Update' : 'Submit'}
        </button>
      </form>

      <ul style={styles.reviewList}>
        {reviews.map((r) => (
          <li key={r.id} style={styles.reviewItem}>
            <span><strong>{r.movieName}</strong>: {r.review}</span>
            <div>
              <button style={styles.editButton} onClick={() => handleEdit(r)}>Edit</button>
              <button style={styles.deleteButton} onClick={() => handleDelete(r.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    padding: '30px',
    fontFamily: 'Arial, sans-serif',
    background: 'linear-gradient(to right, #667eea, #764ba2)',
    minHeight: '100vh',
    color: '#333',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '30px',
  },
  title: {
    color: 'white',
  },
  logoutButton: {
    backgroundColor: '#e53e3e',
    color: 'white',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  form: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
    marginBottom: '30px',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    maxWidth: '400px',
  },
  input: {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '14px',
  },
  submitButton: {
    padding: '10px',
    backgroundColor: '#667eea',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  reviewList: {
    listStyle: 'none',
    padding: 0,
    maxWidth: '600px',
  },
  reviewItem: {
    backgroundColor: 'white',
    marginBottom: '10px',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  editButton: {
    marginRight: '10px',
    padding: '6px 12px',
    backgroundColor: '#3182ce',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  deleteButton: {
    padding: '6px 12px',
    backgroundColor: '#e53e3e',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default MovieReviewPage;

