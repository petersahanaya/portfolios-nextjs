import FirstPage from "@page/firstPage";
import SecondPage from "@page/secondPage";
import ThirdPage from "@page/thirdPage";

const HomePage = () => {
  return (
    <main className="w-screen overflow-x-hidden snap-y snap-mandatory overflow-y-scroll">
      <FirstPage />
      <SecondPage />
      <ThirdPage />
    </main>
  );
};

export default HomePage;
