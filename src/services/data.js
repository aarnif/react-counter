import { db } from "../FireBase";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore/lite";

const get = async () => {
  const savedCountSnapShot = await getDocs(collection(db, "savedCount"));
  return savedCountSnapShot.docs[0].data();
};

const update = async (count) => {
  const updatedData = await updateDoc(doc(db, "savedCount", "countValue"), {
    value: count,
  });
  return updatedData;
};

export default {
  get,
  update,
};
