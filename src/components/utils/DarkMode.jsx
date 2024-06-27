// import React, { useEffect, useState } from 'react';

// const DarkMode = () => {
//   const storedTheme = localStorage.getItem('theme') || 'light';
//   const [theme, setTheme] = useState(storedTheme);

//   useEffect(() => {
//     // Apply the theme to the root element
//     document.documentElement.className = theme;
//     // Save the theme to localStorage
//     localStorage.setItem('theme', theme);
//   }, [theme]);

//   const toggleTheme = () => {
//     // Toggle between 'light' and 'dark' themes
//     setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
//   };

//   return (
//     <button
//       className="fixed bottom-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-800"
//       onClick={toggleTheme}
//     >
//       Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
//     </button>
//   );
// };

// export default DarkMode;


import React, { useEffect, useState } from 'react';
import Clock from './Clock.jsx';

const DarkMode = () => {
  const storedTheme = localStorage.getItem('theme') || 'light';
  const [theme, setTheme] = useState(storedTheme);

  useEffect(() => {
    // Apply the theme to the root element
    document.documentElement.className = theme;
    // Save the theme to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    // Toggle between 'light' and 'dark' themes
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`min-h-screen ${theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'}`}>
      <button
        className="fixed bottom-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-800"
        onClick={toggleTheme}
      >
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </div>
  );
};

export default DarkMode;
