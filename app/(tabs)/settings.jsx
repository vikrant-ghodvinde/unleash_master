import { View, Text, TouchableOpacity, Linking } from "react-native";
import React, { useState } from "react";
import AppLayout from "../../components/AppLayout/AppLayout";
import AppHeader from "../../components/AppHeader/AppHeader";
import { GlobeIcon, HelpIcon } from "../../icons";
import { Image } from "expo-image";
import { getLocales } from "expo-localization";
import { i18n } from "../../lib/locales/translator";
import AppLanguage from "../../components/Sheets/AppLanguage/AppLanguage";

const Settings = () => {
  const [appLanguageSheet, setAppLanguageSheet] = useState(false);
  const socialLink = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/",
      icon: require("../../assets/images/social/linkedin.png"),
    },
    {
      name: "Twitter",
      url: "https://x.com/",
      icon: require("../../assets/images/social/twitter.png"),
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/",
      icon: require("../../assets/images/social/facebook.png"),
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/",
      icon: require("../../assets/images/social/instagram.png"),
    },
  ];
  return (
    <View className="w-full h-full bg-white">
      <AppLayout scrolled>
        <AppHeader label={i18n.t("setting-title")} />
        <View className="relative w-full space-y-5">
          <View className="relative w-full">
            <Text className="text-base font-poppins-medium">General</Text>
            <View className="relative w-full">
              <TouchableOpacity
                className="flex-row items-center space-x-4 py-3"
                onPress={() => setAppLanguageSheet(true)}
              >
                <GlobeIcon color="#000" size={20} />
                <View>
                  <Text className="text-xs font-poppins-medium">
                    App Language
                  </Text>
                  <Text className="text-xxs font-poppins-regular">
                    English (Device's language)
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity className="flex-row items-center space-x-4 py-3">
                <HelpIcon color="#000" size={20} />
                <View>
                  <Text className="text-xs font-poppins-medium">Help</Text>
                  <Text className="text-xxs font-poppins-regular">
                    Privacy policy, App info
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View className="relative w-full">
            <Text className="text-base font-poppins-medium mb-1">
              Join With Us
            </Text>
            <View className="relative w-full">
              {socialLink?.map((item) => (
                <TouchableOpacity
                  key={item.name}
                  className="flex-row items-center space-x-4 py-2"
                  onPress={() => Linking.openURL(item.url)}
                >
                  <Image
                    source={item.icon}
                    alt={item.name}
                    className="w-5 h-5"
                  />
                  <View>
                    <Text className="text-xs font-poppins-regular">
                      {item.name}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </AppLayout>
      <AppLanguage show={appLanguageSheet} setShow={setAppLanguageSheet} />
    </View>
  );
};

export default Settings;
