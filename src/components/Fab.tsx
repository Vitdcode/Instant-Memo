/* import { StyleSheet } from "react-native";
import { FAB } from "react-native-paper";

const Fab = () => {
  <FAB icon="plus" style={styles.fab} onPress={() => console.log("Pressed")} />;
};

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default Fab;
 */

import React from "react"; // Import React to use React.FC type
import { StyleSheet, ViewStyle } from "react-native"; // Import StyleSheet and ViewStyle for types
import { FAB } from "react-native-paper";

// Define the component using the React.FC type.
// Since this component doesn't currently accept any props, we use <{}> or just React.FC
const Fab: React.FC<{}> = () => {
  // Or simply: const Fab: React.FC = () => {
  // <-- Add the explicit return statement here
  return (
    <FAB
      icon="plus" // TypeScript checks if "plus" is compatible with FAB's icon prop type (string or React.ReactNode etc.)
      style={styles.fab} // TypeScript checks if styles.fab matches the expected style type (ViewStyle)
      onPress={() => console.log("Pressed")} // TypeScript checks if this is a valid function for onPress
    />
  );
};

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    // TypeScript will infer the type of 'styles' object based on StyleSheet.create and the properties you provide
  },
});

export default Fab;
