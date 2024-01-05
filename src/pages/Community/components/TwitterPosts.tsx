import styled from "@emotion/styled";
import { ReactComponent as TwitterLogo } from "@/assets/twitter.svg";
import ScrollView from "./ScrollView";
import TabName from "./TabName";
import twitterPosts from "@/data/mockTwitterPosts";
import Container from "./Container";

const TwitterPosts = styled.div``;

const TwitterPostCard = styled.div`
  background: rgba(54, 169, 192, 0.2);
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;

const TwitterPostUser = styled.div`
  font-size: 20px;
`;

const TwitterPostDateTime = styled.div`
  font-size: 12px;
  color: rgba(224, 224, 224);
`;

const TwitterPostContent = styled.div`
  font-size: 14px;
`;

function XPosts() {
  return (
    <Container>
      <TabName>
        <TwitterLogo width={35} height={35} />
      </TabName>

      <ScrollView>
        <TwitterPosts>
          {twitterPosts.map((post) => (
            <TwitterPostCard key={post.id}>
              <TwitterPostUser>{post.username}</TwitterPostUser>
              <TwitterPostDateTime>{post.datetime}</TwitterPostDateTime>
              <TwitterPostContent>{post.content}</TwitterPostContent>
            </TwitterPostCard>
          ))}
        </TwitterPosts>
      </ScrollView>
    </Container>
  );
}

export default XPosts;
