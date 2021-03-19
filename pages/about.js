import Link from "next/link";

const AboutPage = () => {
  return (
    <>
      <h1>ABOUT</h1>
      {/* <p>Counter: {count}</p>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleIncrease15}>Increase By 15</button> */}
      <p>
        <Link href="/">
          <a>Home</a>
        </Link>
      </p>
    </>
  );
};

export default AboutPage;
