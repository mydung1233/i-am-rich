import { StatusBar } from "expo-status-bar";
import { Image, Platform, StatusBar as RNStatusBar, StyleSheet, Text, View } from "react-native";
import {
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      {/* AppBar */}
      <View style={styles.appBar}>
        <Text style={styles.title}>I Am Rich</Text>
      </View>

      {/* Body */}
      <View style={styles.body}>
        <Image
          source={require("./images/diamond.png")}
          style={styles.diamond}
          resizeMode="contain"
        />
      </View>
    </View>
  );
}

const statusBarHeight =
  Platform.OS === "android" ? RNStatusBar.currentHeight || 24 : 44;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCEFFF", // nền hồng nhạt
  },
  appBar: {
    backgroundColor: "#F57C00", // cam
    paddingTop: statusBarHeight + 12,
    paddingBottom: 14,
    alignItems: "center",
    elevation: 4, // đổ bóng Android
    shadowColor: "#000", // đổ bóng iOS
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "500",
  },
  body: {
    flex: 1,
    justifyContent: "center", // căn giữa dọc
    alignItems: "center", // căn giữa ngang
  },
  diamond: {
    width: 200,
    height: 200,
  },
});