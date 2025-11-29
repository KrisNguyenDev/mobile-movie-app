import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Tabs } from "expo-router";
import { Image, ImageBackground, Text } from "react-native";

const TabIcon = ({
  tabName,
  icon,
  focused,
}: {
  tabName?: string;
  icon?: any;
  focused: boolean;
}) => {
  return (
    <ImageBackground
      className="flex flex-row w-full min-w-[112px] justify-center items-center h-full rounded-full"
      source={focused ? images.highlight : null}
    >
      <Image source={icon} tintColor="#151312" className="size-5" />
      <Text className="text-base font-semibold">{tabName}</Text>
    </ImageBackground>
  );
};

const _layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon tabName="Home" focused={focused} icon={icons.home} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon tabName="Search" focused={focused} icon={icons.search} />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon tabName="Saved" focused={focused} icon={icons.save} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon tabName="Profile" focused={focused} icon={icons.person} />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
