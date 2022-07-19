import { signInWithEmailAndPassword } from "@firebase/auth";
import { ref } from "vue";
import { auth } from "../firebase/config";

const error = ref("");

const login = async (email, password) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    return res;
  } catch (err) {
    console.log(err.message);
    error.value = "Invalid Login Credentials";
  }
};

const useLogin = () => ({ error, login });

export default useLogin;
