import { View, Text, StyleSheet, Pressable } from "react-native";
import AppLayout from "../../components/AppLayout/AppLayout";
import { CARD_HEIGHT, CARD_WIDTH, DEVICE_WIDTH } from "../../styles/constants";
import AppHeader from "../../components/AppHeader/AppHeader";
import { Image } from "expo-image";
import PostCardFirst from "../../components/PostCards/PostCardFirst/PostCardFirst";
import { useState } from "react";
import Content from "../../components/Sheets/Content/Content";

const Home = () => {
  console.log(DEVICE_WIDTH);
  const [contestSheet, setContestSheet] = useState(false);
  return (
    <View>
      <AppLayout>
        <View className="w-full h-full items-center justify-start">
          <AppHeader label="Create Post" />
          <PostCardFirst />
          <View className="mt-8">
            <Pressable onPress={() => setContestSheet(true)}>
              <Text>Click Me</Text>
            </Pressable>
          </View>
        </View>
        <Content show={contestSheet} setShow={setContestSheet} />
      </AppLayout>
    </View>
  );
};

export default Home;
