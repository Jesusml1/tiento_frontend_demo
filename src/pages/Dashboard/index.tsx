import { ReactComponent as TientoLogo } from "@/assets/tiento-logo.svg";
import PageContent from "@/components/PageContent";
import PageTitle from "@/components/PageTitle";
import { useUserAuth } from "@/hooks/useUserAuth";
import axios from "@/utils/axios";
import { Box, Button, Flex, Grid, Loader } from "@mantine/core";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import BackgroundImageOverlay from "../../components/BackgroundImageOverlay";
import DisplayBorders from "../Home/components/DisplayBorders";
import HomeNav from "../Home/components/HomeNav";
import PhaseLabel from "../Home/components/PhaseLabel";
import Pointer from "../Home/components/Pointer/Pointer";
import ScreenOverlay from "../Home/components/ScreenOverlay";
import MobileMenuOverlay from "@/components/MobileMenuOverlay";
import MainContainer from "@/components/MainContainer";

enum RoleNames {
  TRYOUT = "tryout",
  ACADEMY = "academy",
  FIRST_TEAM = "first_team",
  LEGEND = "legend",
}

type Message = {
  id: string;
  content: string;
};

function Dashboard() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedLevel, setSelectedLevel] = useState("");
  const { user } = useUserAuth();
  const [isHovered, setIsHovered] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  function fetchMessages() {
    setLoading(true);
    axios
      .post("/api/users/messages", {
        username: user?.username,
        level: selectedLevel,
      })
      .then((res) => {
        setMessages(res.data.result);
      })
      .catch((err) => {
        setMessages([]);
        console.error(err);
      })
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    const token = searchParams.get("t");
    if (token) navigate("/dashboard");
    setSelectedLevel(RoleNames.TRYOUT);
  }, []);

  useEffect(() => {
    if (user) {
      fetchMessages();
    }
  }, [user, selectedLevel]);

  return (
    <div>
      {showMobileMenu ? (
        <MobileMenuOverlay setShowMobileMenu={setShowMobileMenu} />
      ) : (
        <MainContainer>
          <ScreenOverlay />

          <DisplayBorders>
            <PhaseLabel
              setShowMobileMenu={setShowMobileMenu}
              setIsHovered={setIsHovered}
            />
            <HomeNav setIsHovered={setIsHovered} />
            <PageContent>
              <TientoLogo width={150} height={150} />
              {/* <PageTitle>Messages</PageTitle>

            <Flex columnGap={10} mb={20}>
              <Button
                variant={
                  selectedLevel === RoleNames.TRYOUT ? "filled" : "outline"
                }
                onClick={() => setSelectedLevel(RoleNames.TRYOUT)}
              >
                Tryout
              </Button>
              <Button
                variant={
                  selectedLevel === RoleNames.ACADEMY ? "filled" : "outline"
                }
                onClick={() => setSelectedLevel(RoleNames.ACADEMY)}
              >
                Academy
              </Button>
              <Button
                variant={
                  selectedLevel === RoleNames.FIRST_TEAM ? "filled" : "outline"
                }
                onClick={() => setSelectedLevel(RoleNames.FIRST_TEAM)}
              >
                First team
              </Button>
              <Button
                variant={
                  selectedLevel === RoleNames.LEGEND ? "filled" : "outline"
                }
                onClick={() => setSelectedLevel(RoleNames.LEGEND)}
              >
                Legends
              </Button>
            </Flex>
            {loading ? (
              <Flex justify="center" pt={20}>
                <Loader variant="bars" />
              </Flex>
            ) : (
              <Grid>
                {messages.length ? (
                  messages.map((message) => (
                    <Grid.Col lg={3} key={message.id}>
                      <Box
                        p={10}
                        style={{
                          border: "1px solid white",
                          borderRadius: "5px",
                        }}
                      >
                        <div>{message.author.username}</div>
                        <div>{message.content}</div>
                      </Box>
                    </Grid.Col>
                  ))
                ) : (
                  <div>There are no messages</div>
                )}
              </Grid>
            )} */}
            </PageContent>
          </DisplayBorders>

          {/* <RandomNumbersDisplay /> */}
          <BackgroundImageOverlay />
        </MainContainer>
      )}

      <Pointer isHovered={isHovered} />
    </div>

    // <Container>
    //   <NavBar />
    //   <h1>Dashboard</h1>
    //   <h2>Messages</h2>
    //   <Flex columnGap={10} mb={20}>
    //     <Button
    //       variant={selectedLevel === RoleNames.TRYOUT ? "filled" : "outline"}
    //       onClick={() => setSelectedLevel(RoleNames.TRYOUT)}
    //     >
    //       Tryout
    //     </Button>
    //     <Button
    //       variant={selectedLevel === RoleNames.ACADEMY ? "filled" : "outline"}
    //       onClick={() => setSelectedLevel(RoleNames.ACADEMY)}
    //     >
    //       Academy
    //     </Button>
    //     <Button
    //       variant={
    //         selectedLevel === RoleNames.FIRST_TEAM ? "filled" : "outline"
    //       }
    //       onClick={() => setSelectedLevel(RoleNames.FIRST_TEAM)}
    //     >
    //       First team
    //     </Button>
    //     <Button
    //       variant={selectedLevel === RoleNames.LEGEND ? "filled" : "outline"}
    //       onClick={() => setSelectedLevel(RoleNames.LEGEND)}
    //     >
    //       Legends
    //     </Button>
    //   </Flex>
    //   {loading ? (
    //     <Flex justify="center" pt={20}>
    //       <Loader variant="bars" />
    //     </Flex>
    //   ) : (
    //     <Grid>
    //       {messages.length ? (
    //         messages.map((message) => (
    //           <Grid.Col lg={3} key={message.id}>
    //             <Box
    //               p={10}
    //               style={{ border: "1px solid white", borderRadius: "5px" }}
    //             >
    //               {/* <div>{message.author.username}</div> */}
    //               <div>{message.content}</div>
    //             </Box>
    //           </Grid.Col>
    //         ))
    //       ) : (
    //         <div>There are no messages</div>
    //       )}
    //     </Grid>
    //   )}
    // </Container>
  );
}

export default Dashboard;
