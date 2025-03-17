// src/components/NqtThemeToggle.js
import { useTheme } from "../context/NqtThemeContext"; // Correct path

export default function NqtThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Chuyển sang {theme === "light" ? "Tối" : "Sáng"}
    </button>
  );
}