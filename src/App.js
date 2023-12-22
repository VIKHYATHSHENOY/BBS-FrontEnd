// App.js
import React from 'react';
import ImageSlider from "./ImageSlider";
import Navbar from './Navbar';
import Footer from './Footer';
import Box from './Box';

const App = () => {
  const slides = [
    { url: "http://localhost:3000/image-1.jpg", title: "beach" },
    { url: "http://localhost:3000/image-2.jpg", title: "boat" },
    { url: "http://localhost:3000/image-3.jpg", title: "forest" },
    { url: "http://localhost:3000/image-4.jpg", title: "city" },
    { url: "http://localhost:3000/image-5.jpg", title: "italy" },
  ];

  const containerStyles = {
    maxWidth: "1380px",
    margin: "0 auto",
    position: 'relative',
  };

  // Adjust the marginTop and marginBottom values to create space
  const boxContainerStyles = {
    textAlign: 'center',
    marginTop: '-150px', // Adjust this value
    marginBottom: '20px', // Reduced marginBottom
  };

  const headingStyles = {
    fontWeight: 'bold',
  };

  const footerStyles = {
    borderTop: '2px solid black',
    padding: '20px',
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  };

  return (
    <div style={{ height: "100vh", overflow: "hidden" }}>
      <Navbar />
      <div style={{ ...containerStyles, height: "calc(100vh - 200px)", overflowY: "hidden" }}>
        <ImageSlider slides={slides} />
      </div>
      {/* Three rectangular boxes */}
      <div style={boxContainerStyles}>
        <h1 style={headingStyles}>What makes us unique</h1>
        <Box text="Box 1 Text - Something unique about Box 1." />
        <Box text="Box 2 Text - Something unique about Box 2." />
        <Box text="Box 3 Text - Something unique about Box 3." />
      </div>
      <Footer style={footerStyles} />
    </div>
  );
};

export default App;
