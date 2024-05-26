import { View, Text, Pressable, ToastAndroid } from "react-native";
import AppLayout from "../../components/AppLayout/AppLayout";
import { DEVICE_WIDTH } from "../../styles/constants";
import AppHeader from "../../components/AppHeader/AppHeader";
import PostCardFirst from "../../components/PostCards/PostCardFirst/PostCardFirst";
import { useRef, useState } from "react";
import Content from "../../components/Sheets/Content/Content";
import ColorPalette from "../../components/Sheets/ColorPalette/ColorPalette";
import * as MediaLibrary from "expo-media-library";
import ViewShot, { captureRef, captureScreen } from "react-native-view-shot";
import Backgrounds from "../../components/Sheets/Backgrounds/Backgrounds";
import TextSetting from "../../components/Sheets/TextSetting/TextSetting";

const Home = () => {
  console.log(DEVICE_WIDTH);
  const postRef = useRef();
  const [contestSheet, setContestSheet] = useState(false);
  const [settingSheet, setSettingSheet] = useState(false);
  const [backgroundsSheet, setBackgroundsSheet] = useState(false);
  const [textSettingSheet, setTextSettingSheet] = useState(false);

  const exportPostImage = async () => {
    try {
      const localUri = await captureRef(postRef, {
        width: 1080,
        height: 1080,
        format: "png",
        quality: 1,
        fileName: "unleash-post-",
      });

      if (localUri) {
        console.log(localUri)
        await MediaLibrary.saveToLibraryAsync(localUri);
        ToastAndroid.show("Post saved successfully.", ToastAndroid.SHORT);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View className="w-full h-full bg-white">
      <AppHeader label="Create Post" />
      <AppLayout scrolled>
        <View className="w-full h-full items-center justify-start">
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
              onPress={() => setTextSettingSheet(true)}
            >
              <Text className="text-center">Text Setting</Text>
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
      </AppLayout>
      <Content show={contestSheet} setShow={setContestSheet} />
      <ColorPalette show={settingSheet} setShow={setSettingSheet} />
      <Backgrounds show={backgroundsSheet} setShow={setBackgroundsSheet} />
      <TextSetting show={textSettingSheet} setShow={setTextSettingSheet} />
    </View>
  );
};

export default Home;
