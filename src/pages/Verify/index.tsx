import { useEffect, useState } from "react";
import useTimer from "@/hooks/useTimer";
import axios from "@/utils/axios";
import { useUserAuth } from "@/hooks/useUserAuth";
import { useNavigate, useSearchParams } from "react-router-dom";

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
      alert("Time's up, resend your email to receive a new validation code");
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
      alert("you must introduce a valid email");
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
      alert("you must introduce the verification code send to your email");
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
          alert("invalid verification code");
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        minHeight: "80vh",
      }}
    >
      <div>
        <h2>Verify your email</h2>
        <div style={{ display: "flex", rowGap: 20, flexDirection: "column" }}>
          <div style={{ display: "flex", flexDirection: "column", rowGap: 10 }}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              value={email}
              disabled={emailSubmited}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
            <button
              style={{ alignSelf: "end" }}
              onClick={handleEmailSubmit}
              disabled={emailSubmited || loading}
            >
              Send code
            </button>
          </div>

          {emailSubmited && <div>time left: {formatTime(time)}</div>}

          {emailSubmited && (
            <div
              style={{ display: "flex", flexDirection: "column", rowGap: 10 }}
            >
              <label htmlFor="verification_code">Verification code</label>
              <input
                id="verification_code"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                placeholder="verification code"
              />
              <button
                style={{ alignSelf: "end" }}
                disabled={loading}
                onClick={handleVerficationCodeSubmit}
              >
                Verify
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default VerifyEmail;
