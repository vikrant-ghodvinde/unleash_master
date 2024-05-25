import { View, Text, Pressable } from "react-native";
import AppLayout from "../../components/AppLayout/AppLayout";
import { DEVICE_WIDTH } from "../../styles/constants";
import AppHeader from "../../components/AppHeader/AppHeader";
import PostCardFirst from "../../components/PostCards/PostCardFirst/PostCardFirst";
import { useRef, useState } from "react";
import Content from "../../components/Sheets/Content/Content";
import ColorPalette from "../../components/Sheets/ColorPalette/ColorPalette";
import * as MediaLibrary from "expo-media-library";
import ViewShot, { captureRef } from "react-native-view-shot";
import Backgrounds from "../../components/Sheets/Backgrounds/Backgrounds";

const Home = () => {
  console.log(DEVICE_WIDTH);
  const postRef = useRef();
  const [contestSheet, setContestSheet] = useState(false);
  const [settingSheet, setSettingSheet] = useState(false);
  const [backgroundsSheet, setBackgroundsSheet] = useState(false);

  const exportPostImage = async () => {
    try {
      const localUri = await captureRef(postRef, {
        width: 1080,
        height: 1080,
        format: "png",
        quality: 1,
        fileName: "unleash-post-"
      });

      if (localUri) {
        await MediaLibrary.saveToLibraryAsync(localUri);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View>
      <AppLayout>
        <View className="w-full h-full items-center justify-start">
          <AppHeader label="Create Post" />
          <ViewShot className="relative" ref={postRef}>
            <PostCardFirst />
          </ViewShot>
          <View className="mt-8 space-y-2">
            <Pressable
              className="py-2 px-6"
              onPress={() => setContestSheet(true)}
            >
              <Text className="text-center">Content</Text>
            </Pressable>
            
            <Pressable
              className="py-2 px-6"
              onPress={() => setSettingSheet(true)}
            >
              <Text className="text-center">Color Palette</Text>
            </Pressable>

            <Pressable
              className="py-2 px-6"
              onPress={() => setBackgroundsSheet(true)}
            >
              <Text className="text-center">Backgrounds</Text>
            </Pressable>

            <Pressable className="py-2 px-6" onPress={exportPostImage}>
              <Text className="text-center">Save Post</Text>
            </Pressable>
          </View>
        </View>
        <Content show={contestSheet} setShow={setContestSheet} />
        <ColorPalette show={settingSheet} setShow={setSettingSheet} />
        <Backgrounds show={backgroundsSheet} setShow={setBackgroundsSheet} />
      </AppLayout>
    </View>
  );
};

export default Home;
