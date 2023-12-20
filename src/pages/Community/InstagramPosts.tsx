import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ReactComponent as InstagramLogo } from "@/assets/instagram.svg";
import { useEffect, useState } from "react";
import axios from "@/utils/axios";

// const instagramMessages = [
//   {
//     id: "1",
//     username: "nerdyraver",
//     datetime: "11/15/2023, 1:32 PM",
//     content:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//   },
//   {
//     id: "2",
//     username: "Collab.Land",
//     datetime: "11/15/2023, 1:32 PM",
//     content:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
//   {
//     id: "3",
//     username: "Jesusml1",
//     datetime: "11/15/2023, 1:32 PM",
//     content:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//   },
// ];

const MessagesSection = styled.div`
  background: rgba(255, 255, 255, 0.2);
  padding: 20px;
  max-width: 30vw;
  overflow-y: scroll;
  border: 1px solid rgba(33, 150, 243, 0.15);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  flex-basis: 100%;

  @media (max-width: 1024px) {
    max-width: none;
    margin-left: 20px;
    margin-right: 20px;
    min-height: 350px;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;

const InstagramMessageCard = styled.div`
  background: rgba(54, 169, 192, 0.2);
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;

const InstagramMessageUser = styled.div`
  font-size: 20px;
`;

const InstagramMessageDateTime = styled.div`
  font-size: 12px;
  color: rgba(224, 224, 224);
`;

const InstagramMessageContetn = styled.div`
  font-size: 14px;
`;

const InstagramImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  aspect-ratio: 1 / 1;
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

interface Post {
  id: string;
  imageUrl: string;
}

async function fetchPosts() {
  try {
    const response = await axios.get("/api/community/instagram");
    if (response.status === 200) {
      const posts: Array<string> = response.data.urls;
      posts.pop();
      const results: Array<Post> = [];
      for (let i = 0; i < posts.length; i++) {
        results.push({
          id: i.toString(),
          imageUrl: posts[i],
        });
      }
      return results;
    }
    return [];
  } catch (error) {
    console.log(error);
    return [];
  }
}

function InstagramMessages() {
  const [loading, setLoading] = useState<boolean>(false);
  const [posts, setPosts] = useState<Array<Post>>([]);

  useEffect(() => {
    setLoading(true);
    fetchPosts()
      .then(setPosts)
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <MessagesSection>
      {/* <TopLeftCorner />
      <TopRightCorner />
      <BottomLeftCorner />
      <BottomRightCorner /> */}
      <div>
        <InstagramLogo width={80} height={80} />
      </div>
      {loading && <div>Loading...</div>}
      {posts.length > 0
        ? posts.map((post) => (
            <InstagramMessageCard key={post.id}>
              <InstagramImage src={post.imageUrl} />
            </InstagramMessageCard>
          ))
        : ""}
      {/* {instagramMessages.map((post) => (
        <InstagramMessageCard key={post.id}>
          <InstagramMessageUser>{post.username}</InstagramMessageUser>
          <InstagramMessageDateTime>{post.datetime}</InstagramMessageDateTime>
          <InstagramMessageContetn>{post.content}</InstagramMessageContetn>
        </InstagramMessageCard>
      ))} */}
    </MessagesSection>
  );
}

export default InstagramMessages;
