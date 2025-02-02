import React, { useState, useRef } from "react";
import Webcam from "react-webcam";

const FaceValidation = () => {
  const [isCameraActive, setIsCameraActive] = useState(false);
  const webcamRef = useRef(null);

  const startCamera = () => {
    setIsCameraActive(true);
  };

  const captureImage = () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      console.log("Captured Image:", imageSrc);
      // Send imageSrc to backend for validation (if needed)
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Face Live Validation</h2>

        {!isCameraActive ? (
          <div className="flex justify-center">
            <button
              onClick={startCamera}
              className="bg-blue-500 text-white px-6 py-2 rounded-md"
            >
              Start Face Validation
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <Webcam
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              className="rounded-lg shadow-md"
            />
            <button
              onClick={captureImage}
              className="mt-4 bg-green-500 text-white px-6 py-2 rounded-md"
            >
              Capture Face
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FaceValidation;
