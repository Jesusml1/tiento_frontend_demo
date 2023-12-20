import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ReactComponent as InstagramLogo } from "@/assets/instagram.svg";
import { useEffect, useState } from "react";
import axios from "@/utils/axios";
import MessagesSection from "./MessagesSection";

const InstagramMessageCard = styled.div`
  background: rgba(54, 169, 192, 0.2);
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  row-gap: 5px;
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
      <a href="https://www.instagram.com/tientosportsmanagement/" target="_blank">
        <InstagramLogo width={80} height={80} />
      </a>
      {loading && <div>Loading...</div>}
      {posts.length > 0
        ? posts.map((post) => (
            <InstagramMessageCard key={post.id}>
              <InstagramImage src={post.imageUrl} />
            </InstagramMessageCard>
          ))
        : ""}
    </MessagesSection>
  );
}

export default InstagramMessages;
