// App.js
import ImageSlider from "./ImageSlider";
import Navbar from './Navbar';
import Footer from './Footer';


const Box = () => {
  return (
    <div
      style={{
        width: '30%',
        height: '200px',
        backgroundColor: '#f0f0f0', // Set the background color
        borderRadius: '15px', // Set the border radius for curved corners
        margin: '20px', // Adjust spacing between boxes
        display: 'inline-block',
        boxSizing: 'border-box',
      }}
    >
      {/* Box content goes here */}
    </div>
  );
};

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
    marginBottom: "100px"
  };
  // Increase marginTop value to move the boxes above
  const boxContainerStyles = {
    textAlign: 'center',
    marginTop: '50px', // Adjust the marginTop value
  };

  return (
    <div style={{ height: "100vh", overflow: "hidden" }}>
      <Navbar />
      <div style={{ ...containerStyles, height: "calc(100vh - 200px)", overflowY: "hidden" }}>
        <ImageSlider slides={slides} />
      </div>
      {/* Three rectangular boxes */}
      <div style={boxContainerStyles}>
        <Box />
        <Box />
        <Box />
      </div>
      <Footer />
    </div>
  );
};

export default App;
