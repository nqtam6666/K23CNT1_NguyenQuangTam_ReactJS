// src/NqtApp.js
import { useTheme } from "./context/NqtThemeContext";
import NqtTodoList from "./components/NqtTodoList";
import NqtThemeToggle from "./components/NqtThemeToggle";

export default function NqtApp() {
  const { theme } = useTheme();

  return (
    <div className={theme}>
      <NqtThemeToggle />
      <NqtTodoList />
    </div>
  );
}