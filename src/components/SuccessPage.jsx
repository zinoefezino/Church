import React from "react";
import { useNavigate } from "react-router-dom";

const SuccessPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4">Thank You!</h1>
        <p className="text-gray-700 mb-6">
          Your donation has been successfully processed. We appreciate your
          generosity!
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Go Back to Home
        </button>
      </div>
    </div>
  );
};

export default SuccessPage;
