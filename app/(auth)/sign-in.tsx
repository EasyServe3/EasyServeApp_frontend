import React, { useState } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { icons } from "../../constants";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submit = () => {};

  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView>
        <View className="w-full justify-center h-full px-4 my-6">
          <Text className="text-2xl text-secondary text-semibold font-psemibold text-center">
            Log In
          </Text>

          <FormField
            title="Email Address"
            value={form.email}
            handleChangeText={(e: string) => setForm({ ...form, email: e })}
            placeholder="johndoe@gmail.com"
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e: string) => setForm({ ...form, password: e })}
            placeholder="********"
            otherStyles="mt-7"
          />
          <Link
            href="/forgot-password"
            className="text-primary font-psemibold text-lg text-right pt-2 pb-6"
          >
            Forgot Password?
          </Link>

          <CustomButton
            title="Log In"
            handlePress={submit}
            containerStyles="mt-7"
            testStyles={null}
            isLoading={isSubmitting}
          />

          <View className="justify-center items-center pt-8 flex-col gap-2">
            <View className="border border-t-primary border-b-primary w-80 "></View>
            <Text className="font-pbold text-lg">Log In with</Text>
            <View className="flex-row gap-4">
              <Image
                source={icons.google}
                resizeMode="contain"
                className="w-8 h-8"
              />
              <Image
                source={icons.facebook}
                resizeMode="contain"
                className="w-6 h-6"
              />
            </View>
          </View>
          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-secondary font-pregular">
              Don't have an account?
            </Text>
            <Link
              href="/sign-up"
              className="text-primary font-psemibold text-lg"
            >
              Sign Up
            </Link>
          </View>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="dark" />
    </SafeAreaView>
  );
};

export default SignIn;
