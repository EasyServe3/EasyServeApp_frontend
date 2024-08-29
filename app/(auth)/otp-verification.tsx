import React, { useState } from "react";
import { View, TextInput, ScrollView, Alert, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../components/CustomButton";
// import verification from "../../constants/verify-otp";

const OtpVerification: React.FC = () => {
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);

  const handleChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Automatically move to the next input if a digit is entered
    if (text && index < otp.length - 1) {
      const nextInput = `input${index + 1}`;
      (inputs[nextInput] as any)?.focus();
    }
  };

  const handleSubmit = () => {
    const otpValue = otp.join("");
    if (otpValue.length === 6) {
      // Implement OTP verification logic here
      Alert.alert("OTP Submitted", `Your OTP is ${otpValue}`);
    } else {
      Alert.alert("Invalid OTP", "Please enter a 6-digit OTP.");
    }
  };

  const inputs: { [key: string]: TextInput | null } = {};

  return (
    <SafeAreaView className=" h-full">
      <ScrollView>
        <View className="justify-center items-center p-2 pt-10">
          <Text className="font-pbold text-2xl text-secondary pb-10">
            OTP VERIFICATION
          </Text>
          <Text className="font-psemibold text-lg text-secondary pb-20">
            Please verify by entering the 6-digit code sent to your phone number
          </Text>
          <View className="flex flex-row gap-4 pb-6">
            {otp.map((_, index) => (
              <TextInput
                key={index}
                className="border border-secondary rounded-lg w-12 h-12 text-center"
                value={otp[index]}
                onChangeText={(text) => handleChange(text, index)}
                keyboardType="numeric"
                maxLength={1}
                ref={(input) => {
                  inputs[`input${index}`] = input;
                }}
              />
            ))}
          </View>
          <Text className="font-psemibold text-lg text-secondary pb-20">
            Didn't receive the code? {""}
            <Text className="text-primary">Resend</Text>{" "}
          </Text>

          <View className="w-full">
            <CustomButton
              title="Verify OTP"
              handlePress={handleSubmit}
              containerStyles="mt-7"
              testStyles={null}
              isLoading={false}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OtpVerification;
