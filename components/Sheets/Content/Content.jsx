import { View, Text } from "react-native";
import { ScrollView, Sheet } from "tamagui";
import CustomInput from "../../FormControls/CustomInput/CustomInput";
import SocialMedia from "./SocialMedia/SocialMedia";
import { getContext } from "../../../lib/context/context";
import ImagePickerButton from "./ImagePickerButton/ImagePickerButton";
import { CustomSwitch } from "../../FormControls/CustomSwitch/CustomSwitch";
import { DEVICE_WIDTH } from "../../../styles/constants";

const Content = ({ show, setShow }) => {
  const {
    profileName,
    setProfileName,
    userName,
    setUserName,
    postContent,
    setPostContent,
    postCounts,
    setPostCounts,
  } = getContext();
  return (
    <Sheet
      open={show}
      modal
      animation="medium"
      zIndex={100_000}
      dismissOnSnapToBottom
      onOpenChange={setShow}
      snapPointsMode="percent"
      snapPoints={[80, 40]}
    >
      <Sheet.Overlay
        animation="lazy"
        enterStyle={{ opacity: 0 }}
        exitStyle={{ opacity: 0 }}
      />
      <Sheet.Handle scale={0.5} scaleY={0.8} />
      <Sheet.Frame>
        <View className="w-full p-5">
          <Text className="text-lg">Content</Text>
        </View>
        <ScrollView>
          <View className="relative px-5 pt-2 pb-8">
            <View className="relative space-y-4">
              <View className="relative">
                <ImagePickerButton />
              </View>
              <View className="relative items-center w-full">
                <SocialMedia />
              </View>
              <View className="relative">
                <CustomInput
                  label="Name"
                  keyboardType="default"
                  placeholder="Vikrant Ghodvinde"
                  color="#000"
                  value={profileName}
                  onChange={setProfileName}
                />
              </View>
              <View className="relative">
                <CustomInput
                  label="User Name"
                  keyboardType="default"
                  placeholder="vicky027_"
                  color="#000"
                  value={userName}
                  onChange={setUserName}
                />
              </View>
              <View className="relative">
                <CustomInput
                  label="Post Content"
                  multiline
                  keyboardType="default"
                  placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, corporis."
                  color="#000"
                  value={postContent}
                  onChange={setPostContent}
                />
              </View>
              <View className="relative">
                <CustomSwitch
                  label="Post Counts"
                  rightLabeled
                  onCheckedChange={() =>
                    setPostCounts({ ...postCounts, enabled: !postCounts.enabled })
                  }
                />
                <View className="flex flex-row items-center space-x-2 mt-2">
                  <View style={{ width: (DEVICE_WIDTH - 58) / 3 }}>
                    <CustomInput
                      label="Likes"
                      keyboardType="numeric"
                      placeholder="0"
                      value={postCounts.likes}
                      onChange={(value) =>
                        setPostCounts({ ...postCounts, likes: value })
                      }
                    />
                  </View>
                  <View style={{ width: (DEVICE_WIDTH - 58) / 3 }}>
                    <CustomInput
                      label="Shares"
                      keyboardType="numeric"
                      placeholder="0"
                      value={postCounts.shares}
                      onChange={(value) =>
                        setPostCounts({ ...postCounts, shares: value })
                      }
                    />
                  </View>
                  <View style={{ width: (DEVICE_WIDTH - 58) / 3 }}>
                    <CustomInput
                      label="Replies"
                      keyboardType="numeric"
                      placeholder="0"
                      value={postCounts.replies}
                      onChange={(value) =>
                        setPostCounts({ ...postCounts, replies: value })
                      }
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </Sheet.Frame>
    </Sheet>
  );
};

export default Content;
