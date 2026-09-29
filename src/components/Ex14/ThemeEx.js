import React, { createContext, useContext, useState } from 'react';

// Định nghĩa themes object theo yêu cầu đề bài
const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#61dafb"
  }
};

// Tạo ThemeContext
const ThemeContext = createContext();

// ThemeProvider component cung cấp state và hàm toggle theme
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === themes.light ? themes.dark : themes.light));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook để sử dụng theme dễ dàng hơn
export function useTheme() {
  return useContext(ThemeContext);
}

// Theme component chứa nút bấm thay đổi theme
function ThemedButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: '10px 20px',
        color: theme.foreground,
        backgroundColor: theme.background,
        border: '1px solid #ccc',
        borderRadius: '4px',
        cursor: 'pointer',
        fontWeight: 'bold',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
      }}
    >
      Toggle Theme
    </button>
  );
}

export default function ThemeEx() {
  return (
    <ThemeProvider>
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <ThemedButton />
      </div>
    </ThemeProvider>
  );
}