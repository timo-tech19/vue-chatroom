import { collection, onSnapshot, orderBy, query } from "@firebase/firestore";
import { ref } from "vue";
import { db } from "../firebase/config";

const getCollectionDocs = (col) => {
  const error = ref("");
  const docs = ref([]);

  const q = query(collection(db, col), orderBy("createdAt"));

  const unsubscribe = onSnapshot(q, (snapshot) => {
    let results = [];
    snapshot.forEach((doc) => {
      results.push({ ...doc.data(), id: doc.id });
    });
    docs.value = results;
    error.value = null;
  });

  return { docs, error, unsubscribe };
};

export default getCollectionDocs;
