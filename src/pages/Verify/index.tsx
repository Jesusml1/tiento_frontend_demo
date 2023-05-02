import { useEffect, useState } from "react";
import useTimer from "@/hooks/useTimer";
import axios from "@/utils/axios";
import { useUserAuth } from "@/hooks/useUserAuth";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  Box,
  Button,
  Center,
  Container,
  Input,
  Space,
  Title,
} from "@mantine/core";
import { notifications } from "@mantine/notifications";

function VerifyEmail() {
  const { user } = useUserAuth();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [time, startTimer, stopTimer] = useTimer(300000); // 300000 ms == 5 min
  const [emailSubmited, setEmailSubmited] = useState(false);
  const [searchParams] = useSearchParams();
  const token = searchParams.get("t");
  const navigate = useNavigate();

  useEffect(() => {
    if (time === 0) {
      stopTimer();
      notifications.show({
        title: "Time's up",
        message: "Resend your email to receive a new validation code",
        color: "yellow",
      });
      setEmailSubmited(false);
    }
  }, [time]);

  function formatTime(milliseconds: number) {
    const minutes = Math.floor(milliseconds / 60000);
    const seconds = Math.floor((milliseconds % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  }

  function handleEmailSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (email === "") {
      notifications.show({
        title: "There is no email",
        message: "You must introduce a valid email",
        color: "red",
      });
    } else {
      setLoading(true);
      axios
        .post(
          "/api/auth/verify",
          { email: email, discord_id: user?.id },
          { headers: { Authorization: `Bearer ${token}` } }
        )
        .then((res) => {
          if (res.status === 200) {
            notifications.show({
              title: "Verification code sent!",
              message: "Check your inbox, please",
              color: "green",
            });
            setEmailSubmited(true);
            startTimer();
          }
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setLoading(false);
        });
    }
  }

  function handleVerficationCodeSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (verificationCode === "") {
      notifications.show({
        title: "Empty verification code",
        message: "You must introduce the verification code send to your email",
        color: "red",
      });
    } else {
      setLoading(true);
      axios
        .put(
          "/api/auth/verify-email",
          { code: verificationCode },
          { headers: { Authorization: `Bearer ${token}` } }
        )
        .then((res) => {
          console.log(res.data);
          if (res.data.result?.data[0] !== null) {
            localStorage.setItem(
              "user",
              JSON.stringify(res.data?.result?.data[0])
            );
            navigate("/dashboard");
          }
        })
        .catch((err) => {
          console.log(err);
          notifications.show({
            title: "Invalid verification code",
            message:
              "You must introduce the verification code send to your email",
            color: "red",
          });
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }

  return (
    <Center maw={400} mih="80vh" h={500} mx="auto">
      <Container
        sx={(theme) => ({
          backgroundColor: theme.colors.dark[6],
          borderRadius: 5,
        })}
        miw={300}
        p={20}
      >
        <Title order={2} mb={20}>
          Verify your email
        </Title>
        <div
          style={{
            display: "flex",
            rowGap: 20,
            flexDirection: "column",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              rowGap: 10,
              width: "100%",
            }}
          >
            <Input.Wrapper label="Email">
              <Input
                placeholder="Enter your email"
                id="email"
                value={email}
                disabled={emailSubmited}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Input.Wrapper>
            <Button
              onClick={handleEmailSubmit}
              disabled={emailSubmited || loading}
            >
              Send code
            </Button>
          </div>

          {emailSubmited && <div>time left: {formatTime(time)}</div>}

          {emailSubmited && (
            <div
              style={{ display: "flex", flexDirection: "column", rowGap: 10 }}
            >
              <Input.Wrapper label="Verification code">
                <Input
                  id="verification_code"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                  placeholder="verification code"
                />
              </Input.Wrapper>
              <Button disabled={loading} onClick={handleVerficationCodeSubmit}>
                Verify
              </Button>
            </div>
          )}
        </div>
      </Container>
    </Center>
  );
}

export default VerifyEmail;
