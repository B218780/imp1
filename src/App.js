import React, { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [boxes, setBoxes] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (!isNaN(value) && value !== '') {
      const numberOfBoxes = parseInt(value);
      const newBoxes = Array.from({ length: numberOfBoxes });
      setBoxes(newBoxes);
    } else {
      setBoxes([]);
    }
  };

  return (
    <div>
      <h1>Input Value Box Creator</h1>
      <input
        type="text"
        placeholder="Enter a number"
        value={inputValue}
        onChange={handleInputChange}
      />
      <div className="box-container">
        {boxes.map((_,index) => (
          
          <div key={index} className="box" style={{border:"2px solid red", width:"20px", height:"20px"}}>
            {index}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
