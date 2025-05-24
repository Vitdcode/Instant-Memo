import React, { useEffect, useRef, useState } from "react";
import { Image, KeyboardAvoidingView, Pressable, View } from "react-native";
import { Button, Text, TextInput, useTheme } from "react-native-paper";
import * as Notifications from "expo-notifications";
import { useAppContext } from "../Context";
import { MaterialIcons } from "@expo/vector-icons";

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
    <>
      <View
        style={{
          height: 120,
          backgroundColor: theme.colors.background,
          elevation: 5,
          width: "100%",
          flexDirection: "row",
          gap: 20,
          alignItems: "flex-end",
        }}
      >
        <Image
          source={require("../../assets/in-app-icon.png")}
          style={{ width: 40, height: 40, marginLeft: 20, marginBottom: 14 }}
        />
        <Text
          variant="titleLarge"
          style={{
            fontWeight: "bold",
            color: theme.colors.onSurfaceVariant,
            marginBottom: 20,
          }}
        >
          Instant Memo
        </Text>
        <MemoCreated memoCreatedTextVisible={memoCreatedTextVisible} />
      </View>
      <KeyboardAvoidingView
        style={{
          flex: 1,
          width: "100%",
        }}
        behavior="padding"
      >
        <View
          style={{
            width: "90%",
            backgroundColor: theme.colors.onPrimary,
            borderRadius: 20,
            padding: 10,
            paddingTop: 20,
            elevation: 20,
            justifyContent: "flex-end",
            marginHorizontal: "auto",
            marginTop: "auto",
            marginBottom: 50,
            gap: 40,
          }}
        >
          <Text
            variant="titleLarge"
            style={{ color: "rgb(36, 172, 235)", fontWeight: "bold", marginLeft: 20 }}
          >
            Neue Memo erstellen
          </Text>
          <TextInput
            ref={textInputRef}
            mode="outlined"
            label="Neue Memo"
            value={notificationInput}
            onChangeText={setNotificationInput}
            onSubmitEditing={handleSubmit}
            returnKeyType="send"
            submitBehavior="submit"
            cursorColor={theme.colors.secondary}
            underlineColor={theme.colors.secondary}
            activeUnderlineColor={theme.colors.secondary}
            outlineColor="rgba(0, 0, 0, 0.07)"
            activeOutlineColor="rgba(97, 97, 97, 0.88)"
            style={{
              backgroundColor: theme.colors.inverseOnSurface,
              width: "90%",
              height: 120,
              marginHorizontal: "auto",
            }}
          />
          <Button
            mode="contained"
            onPress={handleSubmit}
            buttonColor="rgb(14, 165, 233)"
            textColor="white"
            style={{
              width: "80%",
              height: 45,
              justifyContent: "center",
              marginHorizontal: "auto",
              marginBottom: 15,
            }}
          >
            Memo erstellen
          </Button>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

interface MemoCreatedProps {
  memoCreatedTextVisible: boolean;
}

const MemoCreated: React.FC<MemoCreatedProps> = ({ memoCreatedTextVisible }) => {
  const theme = useTheme();
  return (
    memoCreatedTextVisible && (
      <View
        style={{
          marginHorizontal: "auto",
          backgroundColor: theme.colors.onPrimary,
          elevation: 1,
          padding: 10,
          borderRadius: 10,
          /* borderWidth: 1,
          borderColor: "rgba(0, 0, 0, 0.06)", */
          flexDirection: "row",
          gap: 10,
          alignItems: "center",
          marginBottom: 10,
          position: "absolute",
          right: 10,
        }}
      >
        <Text style={{ color: theme.colors.onSurfaceVariant, fontSize: 15 }}>Memo erstellt</Text>
        <MaterialIcons name="check-circle" size={25} color="rgb(0, 164, 232)" />
      </View>
    )
  );
};

export default MemoMenu;
