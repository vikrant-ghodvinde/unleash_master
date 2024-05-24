import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
} from "../../../lib/constans/SocialMediIcons";
import { CARD_HEIGHT, CARD_WIDTH } from "../../../styles/constants";
import { getContext } from "../../../lib/context/context";
import { HeartIcon, RepliesIcon, ShareIcon } from "../../../icons";

const PostCardFirst = () => {
  const {
    userImage,
    profileName,
    userName,
    socialMedia,
    postContent,
    postCounts,
  } = getContext();

  const socialMediaIcon = (icon) => {
    return icon === "twitter"
      ? Twitter
      : icon === "linkedIn"
      ? LinkedIn
      : icon === "instagram"
      ? Instagram
      : icon === "facebook"
      ? Facebook
      : "";
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View className="flex flex-row items-start justify-between mb-5">
          <View className="flex flex-row items-center gap-x-1">
            <View className="w-9 h-9 rounded-full bg-gray-100 -left-1 overflow-hidden">
              <Image
                source={{
                  uri: userImage,
                }}
                className="w-full h-full object-cover"
              />
            </View>
            <View>
              <Text className="font-bold">{profileName}</Text>
              <Text className="text-xs">@{userName.toLowerCase()}</Text>
            </View>
          </View>
          <View className="flex flex-row items-center">
            {socialMedia?.map((item) => (
              <Image
                key={item}
                source={socialMediaIcon(item)}
                alt={item}
                className="w-4 h-4 -mx-1"
              />
            ))}
          </View>
        </View>
        <View className="relative">
          <Text>{postContent}</Text>
        </View>
        {postCounts.enabled && (
          <View className="relative flex flex-row items-center space-x-3 mt-3">
            <View className="relative flex flex-row items-center space-x-0.5">
              <HeartIcon color="#000" size={12} />
              <Text className="text-xs">{postCounts.likes}</Text>
            </View>
            <View className="relative flex flex-row items-center space-x-0.5">
              <ShareIcon color="#000" size={12} />
              <Text className="text-xs">{postCounts.shares}</Text>
            </View>
            <View className="relative flex flex-row items-center space-x-0.5">
              <RepliesIcon color="#000" size={12} />
              <Text className="text-xs">{postCounts.replies}</Text>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    backgroundColor: "#000",
  },
  card: {
    width: CARD_WIDTH * 0.9,
    height: "auto",
    minHeight: CARD_HEIGHT * 0.45,
    maxHeight: CARD_HEIGHT * 0.9,
    borderRadius: CARD_WIDTH * 0.02,
    backgroundColor: "#fff",
    margin: "auto",
    padding: 8,
  },
});

export default PostCardFirst;
