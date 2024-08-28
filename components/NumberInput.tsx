import React, { useState } from "react";
import { View, TextInput, Text } from "react-native";

const NumberInput: React.FC = () => {
  const [value, setValue] = useState<string>(""); // The value will be a string since TextInput returns a string

  const handleChange = (text: string) => {
    // You can add more validation here if necessary
    if (/^\d*$/.test(text)) {
      // Only allow numeric characters
      setValue(text);
    }
  };

  return (
    <View className="text-secondary pt-10">
      <Text className="font-pbold text-secondary text-lg">
        Please enter you phone number. {""}
      </Text>
      <Text className="font-pbold text-secondary text-lg pb-20">
        An sms will be sent to you
      </Text>
      <Text className="font-pbold text-secondary text-lg">Phone Number:</Text>
      <View>
        <TextInput
          value={value}
          onChangeText={handleChange}
          keyboardType="numeric" // Ensures the numeric keyboard is shown
          placeholderTextColor="gray"
          placeholder="📞 +234 123 456 7890"
          className="border text-secondary border-gray-500 w-full h-16 px-4 rounded-full focus:border-primary items-center mb-4"
        />
      </View>
    </View>
  );
};

export default NumberInput;
