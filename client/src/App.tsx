import React from 'react';
import Confetti from 'react-confetti';

function App(): React.JSX.Element {
  return (
    <React.Fragment>
      <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
        numberOfPieces={400}
        recycle={false}  
        gravity={0.2}   
      />
      <div className="px-auto pt-[50vh]">
        <h1 className="text-center font-bold text-5xl text-white">
          CollaborateX
        </h1>
        <p className="text-white text-center mt-6">Coming Soon</p>
      </div>
    </React.Fragment>
  );
}

export default App;

