import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Redirect, router } from "expo-router";
import Logo from "../assets/images/easyserve.png";
import CustomButton from "../components/CustomButton";

const App = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center min-h-[85vh] px-4">
          <Image
            source={Logo}
            resizeMode="contain"
            className="w-1/2 h-30 animate-spin"
          />
          <Text className="font-pblack text-2xl text-white">EasyServe</Text>

          <CustomButton
            title="Get Started"
            handlePress={() => router.push("/register")}
            containerStyles="w-full mt-7"
            testStyles={null}
            isLoading={false}
          />

          <CustomButton
            title="Dashboard"
            handlePress={() => router.push("/home")}
            containerStyles="w-full mt-7"
            testStyles={null}
            isLoading={false}
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default App;
