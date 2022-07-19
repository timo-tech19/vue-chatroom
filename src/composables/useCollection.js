import { addDoc, collection, doc, serverTimestamp } from "@firebase/firestore";
import { ref } from "vue";
import { db } from "../firebase/config";

const useCollection = (col) => {
  const error = ref("");

  const createDoc = async (data) => {
    try {
      const docRef = await addDoc(collection(db, col), {
        ...data,
        createdAt: serverTimestamp(),
      });
    } catch (err) {
      console.log(err.message);
      error.value = err.message;
    }
  };

  return { createDoc, error };
};

export default useCollection;
