import React, { useState } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import NumberInput from "../../components/NumberInput";
import CustomButton from "../../components/CustomButton";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { icons } from "../../constants";

const SignUp = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submit = () => {};

  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView>
        <View className="w-full justify-center h-full px-4 my-6">
          <Text className="text-2xl text-secondary text-semibold font-psemibold text-center">
            Sign Up
          </Text>

          <NumberInput />

          <CustomButton
            title="Sign Up"
            handlePress={submit}
            containerStyles="mt-7"
            testStyles={null}
            isLoading={isSubmitting}
          />

          <View className="justify-center items-center pt-8 flex-col gap-2">
            <View className="border border-t-primary border-b-primary w-80 "></View>
          </View>
          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-secondary font-pregular">
              Already have an account?
            </Text>
            <Link
              href="/sign-in"
              className="text-primary font-psemibold text-lg"
            >
              Sign In
            </Link>
          </View>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="dark" />
    </SafeAreaView>
  );
};

export default SignUp;
