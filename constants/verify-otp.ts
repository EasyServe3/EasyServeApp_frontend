// Function to verify OTP
const verifyOtp = async (confirmation: any, otp: string) => {
  try {
    await confirmation.confirm(otp);
    alert("Phone number verified!");
  } catch (error) {
    alert("Error verifying OTP:", error);
  }
};
