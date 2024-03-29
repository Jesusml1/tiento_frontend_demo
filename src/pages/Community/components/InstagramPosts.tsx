import styled from "@emotion/styled";
import { ReactComponent as InstagramLogo } from "@/assets/instagram.svg";
import { useEffect, useState } from "react";
import TabName from "./TabName";
import Container from "./Container";
import ScrollView from "./ScrollView";
import { InstagramPost } from "@/types/instagram";
import { fetchInstagramPosts } from "@/lib/instagram";

const InstagramPosts = styled.div``;

const InstagramMessageCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

const InstagramImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  aspect-ratio: 1 / 1;
`;

const InstagramPostDescription = styled.div`
  font-size: 1rem;
`;

function InstagramMessages() {
  const [loading, setLoading] = useState<boolean>(false);
  const [posts, setPosts] = useState<Array<InstagramPost>>([]);

  useEffect(() => {
    setLoading(true);
    fetchInstagramPosts()
      .then(setPosts)
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <Container>
      <TabName bgColor="rgba(255, 255, 255, 0.3)">
        <InstagramLogo width={35} height={35} />
      </TabName>
      <ScrollView bgColor="rgba(255, 255, 255, 0.3)">
        <InstagramPosts>
          {loading && <div>Loading...</div>}
          {posts.length > 0
            ? posts.map((post) => (
                <InstagramMessageCard key={post.id}>
                  <InstagramImage src={post.media_url} />
                  <InstagramPostDescription>
                    {post.caption}
                  </InstagramPostDescription>
                </InstagramMessageCard>
              ))
            : ""}
        </InstagramPosts>
      </ScrollView>
    </Container>
  );
}

export default InstagramMessages;
