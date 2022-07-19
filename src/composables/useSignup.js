import { createUserWithEmailAndPassword, updateProfile } from "@firebase/auth";
import { ref } from "vue";
import { auth } from "../firebase/config";

const error = ref("");
const signup = async (email, password, displayName) => {
  // sign up with email
  try {
    const res = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
      displayName
    );
    // throw error if response is empty
    if (!res) {
      throw new Error("Something Went Wrong:(");
    }
    await updateProfile(auth.currentUser, { displayName });

    return res;
  } catch (err) {
    error.value = err.message;
  }
};

const useSignup = () => {
  return { error, signup };
};

export default useSignup;
