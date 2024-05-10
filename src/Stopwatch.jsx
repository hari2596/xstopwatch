import React from "react"; // Import the React library
import { useState, useEffect } from "react"; // Import the useState and useEffect hooks from React

function Stopwatch() {
  // Define the Stopwatch component
  const [isRunning, setIsRunning] = useState(false); // Initialize state for whether the stopwatch is running
  const [time, setTime] = useState(0); // Initialize state for the elapsed time

  useEffect(() => {
    // Use the useEffect hook to manage side effects
    let interval; // Declare a variable to hold the interval ID

    if (isRunning) {
      // If the stopwatch is running
      interval = setInterval(() => {
        // Set up an interval to update the time every second
        setTime((prevTime) => prevTime + 1); // Update the time state
      }, 1000);
    } else {
      // If the stopwatch is not running
      clearInterval(interval); // Clear the interval
    }

    return () => clearInterval(interval); // Clean up the interval on unmount or when isRunning changes
  }, [isRunning]); // Depend on isRunning to re-run the effect when it changes

  const handleStartStop = () => {
    // Define a function to start or stop the stopwatch
    setIsRunning(!isRunning); // Toggle the isRunning state
  };

  const handleReset = () => {
    // Define a function to reset the stopwatch
    setTime(0); // Reset the time state
    setIsRunning(false); // Stop the stopwatch
  };

  const formatTime = (time) => {
    // Define a function to format the time
    const minutes = Math.floor(time / 60); // Calculate the minutes
    const seconds = time % 60; // Calculate the remaining seconds
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`; // Return the formatted time
  };

  return (
    <div>
      <h2>Stopwatch</h2>
      <h1> Time: {formatTime(time)}</h1>
      <button
        onClick={handleStartStop} 
      >
        {isRunning ? "Stop" : "Start"}
      </button>

      <button 
        onClick={handleReset} 
      >
        Reset
      </button>
    </div>
  );
}

export default Stopwatch; // Export the Stopwatch component
