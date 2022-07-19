import { signOut } from "@firebase/auth";
import { ref } from "vue";
import { auth } from "../firebase/config";

const error = ref("");

const logout = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    console.log(err.messgae);
    error.value = err.message;
  }
};

const useLogout = () => {
  return { error, logout };
};

export default useLogout;
