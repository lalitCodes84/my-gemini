"use client"; // Ensure this runs only on the client side

import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";
import { useEffect, useState } from "react";

const Toaster = ({ ...props }) => {
  const { theme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState("light");

  useEffect(() => {
    const systemTheme =
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    setCurrentTheme(theme === "system" ? systemTheme : theme);
  }, [theme]);

  return (
    <Sonner
      theme={currentTheme}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground font-medium",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground font-medium",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
