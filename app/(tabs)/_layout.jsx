import { Tabs } from "expo-router";
import { Text, View } from "react-native";
import { AppOutlined, HomeIcon, SettingsIcon, UserIcon } from "../../icons";

export default function TabLayout() {
  return (
    <Tabs
      initialRouteName="index"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused }) => menuIcon(route, focused),
        tabBarStyle: {
          width: "100%",
          height: 70,
        },
      })}
    >
      <Tabs.Screen name="user" />
      <Tabs.Screen name="index" />
      <Tabs.Screen name="settings" />
    </Tabs>
  );
}

const menuIcon = (route, focused) => {
  let icon =
    route.name === "index" ? (
      focused ? (
        <HomeIcon size={24} color="#fff" />
      ) : (
        <HomeIcon size={20} color="#000" />
      )
    ) : route.name === "user" ? (
      focused ? (
        <UserIcon size={24} color="#fff" />
      ) : (
        <UserIcon size={20} color="#000" />
      )
    ) : route.name === "settings" ? (
      focused ? (
        <SettingsIcon size={24} color="#fff" />
      ) : (
        <SettingsIcon size={20} color="#000" />
      )
    ) : (
      <AppOutlined size={20} color="#000" />
    );
  return (
    <View
      className={`w-14 h-14 items-center justify-center rounded-full ${
        focused ? "bg-black" : "bg-transparent"
      }`}
    >
      <Text>{icon}</Text>
    </View>
  );
};
