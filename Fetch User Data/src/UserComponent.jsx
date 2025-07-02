import React, { useEffect, useState } from 'react';

function UserComponent() {
  const [user, setUser] = useState(null);   
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    
    fetch('https://jsonplaceholder.typicode.com/users/1')  
      .then((response) => response.json())   
      .then((data) => {
        setUser(data);    
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching user:', error);
        setLoading(false);       
      });
  }, []);                                 
                                            
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>User Name: {user?.name}</h2>
    </div>
  );
}

export default UserComponent;
