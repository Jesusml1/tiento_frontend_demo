import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ReactComponent as TwitterLogo } from "@/assets/twitter.svg";
import MessagesSection from "./MessagesSection";

const twitterPosts = [
  {
    id: "1",
    username: "nerdyraver",
    datetime: "11/15/2023, 1:32 PM",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: "2",
    username: "Collab.Land",
    datetime: "11/15/2023, 1:32 PM",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "3",
    username: "Jesusml1",
    datetime: "11/15/2023, 1:32 PM",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

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

const borderSharedStyles = css`
  position: absolute;
  width: 50px;
  height: 50px;
`;

const cornerBorderProps = "1px solid white";

const TopLeftCorner = styled.div`
  ${borderSharedStyles}
  top: 0;
  left: 0;
  border-top: ${cornerBorderProps};
  border-left: ${cornerBorderProps};
`;
const TopRightCorner = styled.div`
  ${borderSharedStyles}
  top: 0;
  right: 0;
  border-top: ${cornerBorderProps};
  border-right: ${cornerBorderProps};
`;
const BottomLeftCorner = styled.div`
  ${borderSharedStyles}
  bottom: 0;
  left: 0;
  border-left: ${cornerBorderProps};
  border-bottom: ${cornerBorderProps};
`;
const BottomRightCorner = styled.div`
  ${borderSharedStyles}
  bottom: 0;
  right: 0;
  border-right: ${cornerBorderProps};
  border-bottom: ${cornerBorderProps};
`;

function XPosts() {
  return (
    <MessagesSection>
      {/* <TopLeftCorner />
      <TopRightCorner />
      <BottomLeftCorner />
      <BottomRightCorner /> */}
      <a href="#">
        <TwitterLogo width={80} height={80} />
      </a>
      {twitterPosts.map((post) => (
        <TwitterPostCard key={post.id}>
          <TwitterPostUser>{post.username}</TwitterPostUser>
          <TwitterPostDateTime>{post.datetime}</TwitterPostDateTime>
          <TwitterPostContent>{post.content}</TwitterPostContent>
        </TwitterPostCard>
      ))}
    </MessagesSection>
  );
}

export default XPosts;
