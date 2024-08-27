import { Text, View, Image } from "react-native";
import React from "react";
import Logo from "../assets/images/easyserve.png";

const App = () => {
  return (
    <>
      <View className="bg-primary flex justify-center items-center h-full">
        <Image source={Logo} resizeMode="contain" className="w-1/2" />
        <Text className="font-bold text-2xl text-white">EasyServe</Text>
      </View>
    </>
  );
};

export default App;
