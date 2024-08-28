import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Redirect, router } from "expo-router";

import RegisterImage from "../../assets/images/frame4.png";
import CustomButton from "../../components/CustomButton";
import CustomButtonLight from "../../components/CustomButtonLight";

const Register = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <View>
        <ScrollView>
          <View className="w-full justify-center h-full px-4 my-6">
            <Text className="text-center text-2xl font-psemibold text-semibold text-secondary mb-16">
              Register Account
            </Text>

            <Image
              source={RegisterImage}
              resizeMode="contain"
              className="justify-center items-center w-full mb-16"
            />

            <CustomButtonLight
              title="Create Account"
              handlePress={() => router.push("/sign-up")}
              containerStyles="w-full mt-7"
              testStyles={null}
              isLoading={false}
            />
            <CustomButton
              title="Log In"
              handlePress={() => router.push("/sign-in")}
              containerStyles="w-full mt-7"
              testStyles={null}
              isLoading={false}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Register;
