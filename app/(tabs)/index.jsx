import { View, Text, ToastAndroid } from "react-native";
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
import TextSetting from "../../components/Sheets/TextSetting/TextSetting";
import CircleButton from "../../components/Buttons/CircleButton/CircleButton";
import RoundedButton from "../../components/Buttons/RoundedButton/RoundedButton";
import {
  BackgroundIcon,
  ColorPickerIcon,
  ContentIcon,
  DownloadIcon,
  TextIcon,
} from "../../icons";

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
        console.log(localUri);
        await MediaLibrary.saveToLibraryAsync(localUri);
        ToastAndroid.show("Post saved successfully.", ToastAndroid.SHORT);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View className="w-full h-full bg-white">
      <AppLayout scrolled>
        <AppHeader label="Create Post" />
        <View className="w-full h-full items-center justify-start">
          <ViewShot className="relative" ref={postRef}>
            <PostCardFirst />
          </ViewShot>
          <View className="relative w-full mt-8 space-y-8">
            <View
              className="flex flex-row items-center justify-evenly"
              style={{ width: DEVICE_WIDTH }}
            >
              <CircleButton
                label={<ContentIcon size={22} />}
                onPress={() => setContestSheet(true)}
              />
              <CircleButton
                label={<ColorPickerIcon size={22} />}
                onPress={() => setSettingSheet(true)}
              />
              <CircleButton
                label={<TextIcon size={20} />}
                onPress={() => setTextSettingSheet(true)}
              />
              <CircleButton
                label={<BackgroundIcon size={26} />}
                onPress={() => setBackgroundsSheet(true)}
              />
            </View>
            <View className="relative">
              <RoundedButton
                label={
                  <View className="items-center justify-center">
                    <DownloadIcon size={16} />
                    <Text className="text-xs font-poppins-regular">
                      Save Post
                    </Text>
                  </View>
                }
                onPress={exportPostImage}
              />
            </View>
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
