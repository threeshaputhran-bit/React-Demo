import React, { useState } from "react";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      console.log("Response", response.data);
      setUsers(response.data);
    } catch (error) {
      console.log("Error In Users", error);
    }
  };

  const styles = {
    container: {
      background: "#e0f7ff",
      minHeight: "100vh",
      padding: "30px",
      textAlign: "center",
      fontFamily: "Arial",
      alignItems: "center",
      justifyContent: "center",
    },

    button: {
      padding: "12px 25px",
      background: "#2563eb",
      color: "#fff",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontSize: "16px",
      marginBottom: "20px",
    },

    cardContainer: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "20px",
    },

    card: {
      width: "300px",
      background: "#fff",
      borderRadius: "8px",
      padding: "20px",
      boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
      textAlign: "center",
    },
  };

  return (
    <div style={styles.container}>
      <h1>Rest Axios Api Example</h1>

      <button onClick={fetchUsers} style={styles.button}>
        Load Users
      </button>

      <div style={styles.cardContainer}>
        {users.map((user) => (
          <div key={user.id} style={styles.card}>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.address.street}</p>
            <p>{user.address.city}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;

