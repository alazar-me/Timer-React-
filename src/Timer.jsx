import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isSetup, setIsSetup] = useState(true);

  useEffect(() => {
    let totalSeconds = hours * 3600 + minutes * 60 + seconds;

    if (isActive && totalSeconds > 0) {
      const interval = setInterval(() => {
        if (!isPaused) {
          totalSeconds -= 1;
          setSeconds(totalSeconds % 60);
          setMinutes(Math.floor((totalSeconds % 3600) / 60));
          setHours(Math.floor(totalSeconds / 3600));

          if (totalSeconds === 0) {
            clearInterval(interval);
            setIsActive(false);
            showNotification();
          }
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isActive, isPaused, hours, minutes, seconds]);

  const startTimer = () => {
    const totalSeconds = hours * 3600 + minutes * 60 + seconds;

    if (totalSeconds > 0) {
      setIsActive(true);
      setIsSetup(false);
    } else {
      alert('Please enter a valid time.');
    }
  };

  const pauseTimer = () => {
    setIsPaused(true);
  };

  const resumeTimer = () => {
    setIsPaused(false);
  };

  const restartTimer = () => {
    setIsSetup(true);
    setIsPaused(false);
    setHours('');
    setMinutes('');
    setSeconds('');
  };

  const showNotification = () => {
    alert('Time is up!');
    // You can customize the notification further, e.g., using a modal library
  };

  const formatTime = (time) => {
    const formattedTime = String(time).padStart(2, '0');
    return formattedTime;
  };
  return (
    <div className="text-center mt-10">
      {isSetup ? (
        <>
          <h1 className="text-4xl text-white font-bold mb-10">Set Timer</h1>
          <div className="flex justify-center items-center mb-4">
            <input
              type="number"
              placeholder="Hours"
              value={hours}
              onChange={(e) => setHours(e.target.value)}
              className=" p-2 mx-2 w-24 text-center      bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg  h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
            />
            <input
              type="number"
              placeholder="Minutes"
              value={minutes}
              onChange={(e) => setMinutes(e.target.value)}
              className="border border-gray-300 p-2 mx-2 w-24 text-center      bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200    h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
            />
            <input
              type="number"
              placeholder="Seconds"
              value={seconds}
              onChange={(e) => setSeconds(e.target.value)}
              className="border border-gray-300 p-2 mx-2 w-24 text-center      bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200  rounded-e-lg  h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
            />
          </div>
          <button onClick={startTimer} className=" mt-5 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            Start Timer
          </button>
        </>
      ) : (
        <>
          <div className="flex justify-center items-center  relative text-white mb-24 ">
            
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  font-bold text-6xl ">
              {String(hours).padStart(2, '0')}:{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
            </div>
          </div>
          <button onClick={restartTimer} className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            Restart Timer
          </button>
       
            {isPaused ? (
              <button onClick={resumeTimer} className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ml-4">
                Resume
              </button>
            ) : (
              <button onClick={pauseTimer} className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ml-4">
                Pause
              </button>
            )}
            
          
          
        </>
      )}
    </div>
  );
};

export default Timer;
