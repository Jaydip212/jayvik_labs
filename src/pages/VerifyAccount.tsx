import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const VerifyAccount: React.FC = () => {
  const [params] = useSearchParams();
  const token = params.get('token');

  useEffect(() => {
    if (token) {
      // 👇 Replace this with your actual API endpoint
      fetch(`https://your-backend-api.com/verify?token=${token}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            alert("Account verified successfully!");
          } else {
            alert("Invalid or expired verification link.");
          }
        })
        .catch((err) => {
          console.error(err);
          alert("Something went wrong.");
        });
    }
  }, [token]);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Verifying your account...</h2>
    </div>
  );
};

export default VerifyAccount;
