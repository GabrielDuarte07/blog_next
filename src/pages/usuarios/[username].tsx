import { useRouter } from "next/router";
import { ReactElement, useState } from "react";

const Username = (): ReactElement => {
  const [counter, setCounter] = useState<number>(0);
  const userName = useRouter();
  return (
    <>
      <h1>{userName.query.username}</h1>
      <div>
        <button onClick={() => setCounter((counter) => counter + 1)}>
          inc +1
        </button>
        <span>{counter}</span>
      </div>
    </>
  );
};

export default Username;
