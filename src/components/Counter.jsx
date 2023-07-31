import "./Counter.css";
import { useEffect, useState } from "react";
import { db } from "../FireBase";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore/lite";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

const Counter = () => {
  const [count, setCount] = useState(null);

  useEffect(() => {
    // Fetch data from database when page first loads
    const getCount = async (db) => {
      const savedCountSnapShot = await getDocs(collection(db, "savedCount"));
      return savedCountSnapShot.docs[0].data();
    };
    getCount(db).then((data) => {
      setCount(data.value);
      console.log("Previous count value fetched!");
    });
  }, []);

  useEffect(() => {
    const updateData = async (db) => {
      const updateData = await updateDoc(doc(db, "savedCount", "countValue"), {
        value: count,
      });
      return updateData;
    };

    // Update database only after 500ms has passed from previous click or when page first loads
    const updateDataTimeout = setTimeout(() => {
      updateData(db).then(() => {
        console.log("Count value saved to database!");
      });
    }, 500);

    return () => clearTimeout(updateDataTimeout);
  }, [count]);

  const increaseCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decreaseCount = () => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <main className="main-content">
      <h1 className="count">
        {count !== null ? (
          count
        ) : (
          <FontAwesomeIcon
            icon={faCircleNotch}
            spin
            style={{ color: "#ffffff" }}
          />
        )}
      </h1>
      <div className="buttons">
        <button onClick={increaseCount}>Increment</button>
        <button onClick={decreaseCount}>Decrement</button>
        <button onClick={resetCount}>Reset</button>
      </div>
    </main>
  );
};

export default Counter;
