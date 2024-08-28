import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "../../constants";
import { Redirect, router, Link } from "expo-router";
import CustomButton from "@/components/CustomButton";

interface Profile {
  firstname: string;
  lastname: string;
  bio: string;
  gender: string;
  email: string;
  country: string;
  state: string;
  area: string;
  address: string;
  referercode: string;
}

const ProfileScreen: React.FC = () => {
  const [profile, setProfile] = useState<Profile>({
    firstname: "",
    lastname: "",
    bio: "",
    gender: "",
    email: "",
    country: "",
    state: "",
    area: "",
    address: "",
    referercode: "",
  });

  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleSave = () => {
    // Implement your save logic here, such as sending data to the server
    setIsEditing(false);
    Alert.alert(
      "Profile Updated",
      "Your profile has been updated successfully."
    );
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <SafeAreaView className="w-full h-full">
      <View>
        <ScrollView>
          <Text className="text-center text-2xl font-psemibold text-semibold text-secondary mb-16">
            Profile
          </Text>
          <View className="text-secondary justify-center items-center">
            <Image
              source={icons.profile}
              resizeMode="contain"
              className="justify-center items-center w-full mb-4"
            />
            <Link className="font-psemibold text-secondary mb-6" href="/">
              Upload Image
            </Link>
          </View>

          {isEditing ? (
            <>
              {/* first name filed  */}
              <View className="p-4">
                <Text className="text-base text-secondary font-pmedium">
                  First Name
                </Text>
                <TextInput
                  value={profile.firstname}
                  onChangeText={(text) =>
                    setProfile({ ...profile, firstname: text })
                  }
                  placeholderTextColor="gray"
                  placeholder="First Name"
                  className="border text-secondary border-gray-500 w-full h-16 px-4 rounded-full focus:border-primary items-center mb-4"
                />
                {/* last name field */}
                <Text className="text-base text-secondary font-pmedium">
                  Last Name
                </Text>
                <TextInput
                  value={profile.lastname}
                  onChangeText={(text) =>
                    setProfile({ ...profile, lastname: text })
                  }
                  placeholderTextColor="gray"
                  placeholder="Last Name"
                  className="border text-secondary border-gray-500 w-full h-16 px-4 rounded-full focus:border-primary items-center mb-4"
                />
                {/* gender field */}
                <Text className="text-base text-secondary font-pmedium">
                  Gender
                </Text>
                <TextInput
                  value={profile.gender}
                  onChangeText={(text) =>
                    setProfile({ ...profile, gender: text })
                  }
                  placeholderTextColor="gray"
                  placeholder="Ender gender"
                  className="border text-secondary border-gray-500 w-full h-16 px-4 rounded-full focus:border-primary items-center mb-4"
                />
                {/* email field */}
                <Text className="text-base text-secondary font-pmedium">
                  Email Address
                </Text>
                <TextInput
                  value={profile.email}
                  onChangeText={(text) =>
                    setProfile({ ...profile, email: text })
                  }
                  placeholderTextColor="gray"
                  placeholder="Ender email address"
                  className="border text-secondary border-gray-500 w-full h-16 px-4 rounded-full focus:border-primary items-center mb-4"
                />
                {/* country field */}
                <Text className="text-base text-secondary font-pmedium">
                  Country
                </Text>
                <TextInput
                  value={profile.country}
                  onChangeText={(text) =>
                    setProfile({ ...profile, country: text })
                  }
                  placeholderTextColor="gray"
                  placeholder="Ender country"
                  className="border text-secondary border-gray-500 w-full h-16 px-4 rounded-full focus:border-primary items-center mb-4"
                />
                {/* state field */}
                <Text className="text-base text-secondary font-pmedium">
                  State
                </Text>
                <TextInput
                  value={profile.state}
                  onChangeText={(text) =>
                    setProfile({ ...profile, state: text })
                  }
                  placeholderTextColor="gray"
                  placeholder="Ender state"
                  className="border text-secondary border-gray-500 w-full h-16 px-4 rounded-full focus:border-primary items-center mb-4"
                />
                {/* area field */}
                <Text className="text-base text-secondary font-pmedium">
                  Area
                </Text>
                <TextInput
                  value={profile.area}
                  onChangeText={(text) =>
                    setProfile({ ...profile, area: text })
                  }
                  placeholderTextColor="gray"
                  placeholder="Ender area"
                  className="border text-secondary border-gray-500 w-full h-16 px-4 rounded-full focus:border-primary items-center mb-4"
                />
                {/* address field */}
                <Text className="text-base text-secondary font-pmedium">
                  Address (Optional)
                </Text>
                <TextInput
                  value={profile.address}
                  onChangeText={(text) =>
                    setProfile({ ...profile, address: text })
                  }
                  placeholderTextColor="gray"
                  placeholder="Ender address"
                  className="border text-secondary border-gray-500 w-full h-16 px-4 rounded-full focus:border-primary items-center mb-4"
                />
                {/* referer code field */}
                <Text className="text-base text-secondary font-pmedium">
                  Referer Code (Optional)
                </Text>
                <TextInput
                  value={profile.referercode}
                  onChangeText={(text) =>
                    setProfile({ ...profile, referercode: text })
                  }
                  placeholderTextColor="gray"
                  placeholder="Ender gender"
                  className="border text-secondary border-gray-500 w-full h-16 px-4 rounded-full focus:border-primary items-center mb-4"
                />
                <Text className="text-base text-secondary font-pmedium mb-6">
                  Accept Terms and Conditions!
                </Text>

                <CustomButton
                  title="Submit"
                  handlePress={handleSave}
                  containerStyles="bg-primary border border-white shadow-lg rounded-full min-h-[62px] justify-center items-center"
                  textStyles="text-white font-psemibold text-lg"
                  isLoading={false}
                />
                {/* <Button title="Save" onPress={handleSave} /> */}
              </View>
            </>
          ) : (
            <>
              <View className="justify-center items-center p-6">
                <Text className="font-psemibold text-secondary text-lg">
                  {profile.firstname}
                </Text>
                <Text className="font-psemibold text-secondary text-lg">
                  {profile.lastname}
                </Text>
                <Text className="font-psemibold text-secondary text-lg">
                  {profile.gender}
                </Text>
                <Text className="font-psemibold text-secondary text-lg">
                  {profile.email}
                </Text>
                <Text className="font-psemibold text-secondary text-lg">
                  {profile.country}
                </Text>
                <Text className="font-psemibold text-secondary text-lg">
                  {profile.state}
                </Text>
                <Text className="font-psemibold text-secondary text-lg">
                  {profile.area}
                </Text>
                <Text className="font-psemibold text-secondary text-lg">
                  {profile.address}
                </Text>
                <Text className="font-psemibold text-secondary text-lg">
                  {profile.referercode}
                </Text>
                <TouchableOpacity onPress={handleEdit} className="w-full">
                  <CustomButton
                    title="Edit Profile"
                    handlePress={handleEdit}
                    containerStyles="bg-primary border border-white shadow-lg rounded-full min-h-[62px] justify-center items-center"
                    textStyles="text-white font-psemibold text-lg"
                    isLoading={false}
                  />
                </TouchableOpacity>
              </View>
            </>
          )}
        </ScrollView>
      </View>
      <StatusBar backgroundColor="#161622" style="dark" />
    </SafeAreaView>
  );
};

export default ProfileScreen;
