import merge from "deepmerge";
import * as NavigationBar from "expo-navigation-bar";
import * as Notifications from "expo-notifications";
import { StatusBar } from "expo-status-bar";
import * as SystemUI from "expo-system-ui";
import { useEffect } from "react";
import { Appearance, StyleSheet, useColorScheme, View } from "react-native";
import { MD3DarkTheme, MD3LightTheme, PaperProvider } from "react-native-paper";

import MemoMenu from "./components/MemoInputMenu";
import Colors from "./constants/Colors";
import { AppProvider } from "./Context";

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

  useEffect(() => {
    const requestNotificationPermissions = async () => {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== "granted") {
        console.warn("Notification permissions not granted!");
        // You might want to show an alert to the user explaining they need to enable permissions in settings
      }
    };

    requestNotificationPermissions();
  }, []); // Run once on mount

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      alignItems: "center",
      justifyContent: "center",
    },
  });

  return (
    <PaperProvider theme={theme}>
      <AppProvider>
        <View style={styles.container}>
          <MemoMenu />
          <StatusBar style="auto" />
        </View>
      </AppProvider>
    </PaperProvider>
  );
}
