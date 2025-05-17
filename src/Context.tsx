import React, { createContext, useState, useContext } from "react";
import * as Notifications from "expo-notifications";

// Define the interface for the context value shape
interface AppContextType {
  modalIsVisible: boolean;
  setModalIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  notificationInput: string;
  setNotificationInput: React.Dispatch<React.SetStateAction<string>>;
}

// Create the context, providing the type using <>
// Initialize it with 'undefined' because the provider won't be available until runtime.
const AppContext = createContext<AppContextType | undefined>(undefined); // <--- Type the context here

// Now, when you use AppContext.Provider, TypeScript will check if the 'value' prop
// matches the AppContextType interface.

export const AppProvider = ({ children }) => {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [notificationInput, setNotificationInput] = useState("");

  return (
    <AppContext.Provider
      value={{
        // <-- TypeScript checks this object literal against AppContextType
        modalIsVisible, // Automatically inferred as boolean from useState
        setModalIsVisible, // Automatically inferred as Dispatch<SetStateAction<boolean>> from useState
        notificationInput,
        setNotificationInput,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  // useContext now returns a value that is either AppContextType or undefined
  const context = useContext(AppContext);

  if (!context) {
    // This check narrows the type from (AppContextType | undefined) to AppContextType
    throw new Error("useAppContext must be used within AppProvider");
  }

  return context; // The return type is now correctly inferred as AppContextType
};
