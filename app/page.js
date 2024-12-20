import Header from "@/components/header/header";
import Home from "./home/page";
import LoadingWrapper from "@/components/utils/loadingwrapper";

const Page = () => {
  return (
    <LoadingWrapper>
      <Header />
      <main>
        <Home />
      </main>
    </LoadingWrapper>
  );
};

export default Page;
