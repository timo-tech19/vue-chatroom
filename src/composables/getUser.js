import { onAuthStateChanged } from "@firebase/auth";
import { ref } from "vue";
import { auth } from "../firebase/config";

const user = ref(auth.currentUser);
const error = ref("");

onAuthStateChanged(auth, (_user) => {
  user.value = _user;
});

const getUser = () => {
  return { user };
};
export default getUser;
