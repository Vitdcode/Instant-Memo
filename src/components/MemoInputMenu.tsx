import React, { useEffect, useRef, useState } from "react";
import { KeyboardAvoidingView, Pressable, View } from "react-native";
import { Button, Text, TextInput, useTheme } from "react-native-paper";
import * as Notifications from "expo-notifications";
import { useAppContext } from "../Context";

const MemoMenu: React.FC = () => {
  const theme = useTheme();

  const { notificationInput, setNotificationInput } = useAppContext();
  const [memoCreatedTextVisible, setMemoCreatedTextVisible] = useState(false);
  const textInputRef = useRef<any>(null);

  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowBanner: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
  });

  const handleSubmit = async () => {
    Notifications.scheduleNotificationAsync({
      content: {
        /*       title: "Instant Memo", */
        body: notificationInput,
      },
      trigger: null,
    });
    setNotificationInput("");

    setMemoCreatedTextVisible(true);
    setTimeout(() => {
      setMemoCreatedTextVisible(false);
    }, 1000);
  };

  useEffect(() => {
    // This code runs ONLY ONCE after the initial render (when the component mounts)

    // Check if the ref has a reference to the TextInput instance
    if (textInputRef.current) {
      // Call the focus() method on the TextInput instance
      setTimeout(() => {
        textInputRef.current.focus();
      }, 100);
    }

    // No cleanup needed for this specific focus action on mount
  }, []);

  return (
    <KeyboardAvoidingView style={{ flex: 1, width: "100%", marginBottom: 30 }} behavior="height">
      <View
        style={{
          width: "90%",
          height: "90%",
          justifyContent: "flex-end",
          marginHorizontal: "auto",
          marginBottom: 300,
          gap: 40,
        }}
      >
        <MemoCreated memoCreatedTextVisible={memoCreatedTextVisible} />
        <TextInput
          ref={textInputRef}
          mode="flat"
          label="Neue Memo"
          value={notificationInput}
          onChangeText={setNotificationInput}
          onSubmitEditing={handleSubmit}
          returnKeyType="send"
          submitBehavior="submit"
          cursorColor={theme.colors.secondary}
          underlineColor={theme.colors.secondary}
          activeUnderlineColor={theme.colors.secondary}
          style={{
            backgroundColor: theme.colors.inverseOnSurface,
            width: "90%",
            height: 70,
            marginHorizontal: "auto",
          }}
        />
        <Button
          mode="contained"
          onPress={handleSubmit}
          buttonColor={theme.colors.onBackground}
          style={{ width: "80%", height: 45, justifyContent: "center", marginHorizontal: "auto" }}
        >
          Memo erstellen
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
};

interface MemoCreatedProps {
  memoCreatedTextVisible: boolean;
}

const MemoCreated: React.FC<MemoCreatedProps> = ({ memoCreatedTextVisible }) => {
  const theme = useTheme();
  return (
    memoCreatedTextVisible && (
      <Text
        style={{
          marginHorizontal: "auto",
          backgroundColor: theme.colors.secondary,
          /*     elevation: 5, */
          color: "white",
          padding: 10,
          borderRadius: 10,
          fontSize: 15,
        }}
      >
        Memo erstellt
      </Text>
    )
  );
};

export default MemoMenu;
