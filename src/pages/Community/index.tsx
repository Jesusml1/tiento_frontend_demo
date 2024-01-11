import PageTitle from "../../components/PageTitle";
import DiscordMessages from "./components/DiscordMessages";
import InstagramMessages from "./components/InstagramPosts";
import TwitterPosts from "./components/TwitterPosts";
import HomeLayout from "@/Layout/HomeLayout";
import CardsContainer from "./components/CardsContainer";

function Community() {
  return (
    <HomeLayout>
      <PageTitle>COMMUNITY</PageTitle>
      <CardsContainer>
        <DiscordMessages />
        <InstagramMessages />
        <TwitterPosts />
      </CardsContainer>
    </HomeLayout>
  );
}

export default Community;
