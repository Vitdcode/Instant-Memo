import { StatusBar } from "expo-status-bar";
import { Appearance, StyleSheet, Text, useColorScheme, View } from "react-native";
import merge from "deepmerge";
import { Button, MD3DarkTheme, MD3LightTheme, PaperProvider } from "react-native-paper";
import * as SystemUI from "expo-system-ui";
import * as NavigationBar from "expo-navigation-bar";
import Fab from "./components/Fab";
import Colors from "./constants/Colors";
import { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

const CombinedLightTheme = merge(MD3LightTheme, { colors: Colors.light });
const CombinedDarkTheme = merge(MD3DarkTheme, { colors: Colors.dark });

export default function App() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? CombinedDarkTheme : CombinedLightTheme;

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      const newTheme = colorScheme === "dark" ? CombinedDarkTheme : CombinedLightTheme;
      SystemUI.setBackgroundColorAsync(newTheme.colors.background);
    });

    return () => subscription.remove(); // Cleanup on unmount
  }, []);

  useEffect(() => {
    const setNavBarTransparent = async () => {
      try {
        NavigationBar.setPositionAsync("absolute");
        NavigationBar.setBackgroundColorAsync(theme.colors.lightGray);
      } catch (error) {
        console.error("Failed to set navigation bar color:", error);
      }
    };

    setNavBarTransparent();
  }, [theme]);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      alignItems: "center",
      justifyContent: "center",
    },
  });

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your appp!</Text>
      <Button mode="contained">This is new</Button>
      <Fab />
      <StatusBar style="auto" />
    </View>
  );
}
