'use client';

import dynamic from 'next/dynamic';
import { useTheme } from "next-themes";


const FaSun = dynamic(() => import('react-icons/fa').then(mod => mod.FaSun), { ssr: false });
const FaMoon = dynamic(() => import('react-icons/fa').then(mod => mod.FaMoon), { ssr: false });

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
      setTheme(theme === "light" ? "dark" : "light");
    };


  return (
    <div className="theme">
      <button onClick={toggleTheme}>
        {theme === "light" ? <FaSun /> : <FaMoon />}
      </button>
    </div>
  );
};
 export default ThemeSwitch;