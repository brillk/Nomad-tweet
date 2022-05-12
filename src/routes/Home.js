import { dbService } from "fbase";
import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
const Home = () => {
  const [nweet, setNweet] = useState("");
  const onSubmit = async event => {
    event.preventDefault();
    const docRef = await addDoc(collection(dbService, "nweets"), {
      //submit할떄마다 document를 생성한다
      nweet,
      createdAt: Date.now(),
    });
    setNweet("");
  };
  const onChange = ({ target: { value } }) => {
    setNweet(value);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={nweet}
          onChange={onChange}
          type="text"
          placeholder="What"
          maxLength={120}
        />
        <input type="submit" value="Nweet" />
      </form>
    </div>
  );
};
export default Home;
