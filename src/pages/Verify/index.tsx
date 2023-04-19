import { useEffect, useState } from "react";
import useTimer from "@/hooks/useTimer";
import axios from "axios";
import { useUserAuth } from "@/hooks/useUserAuth";
import { useNavigate } from "react-router-dom";

function VerifyEmail() {
  const { user, apiUrl } = useUserAuth();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [time, startTimer, stopTimer] = useTimer(300000); // 300000 ms == 5 min
  const [emailSubmited, setEmailSubmited] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (time === 0) {
      stopTimer();
      alert("time out! resend your email");
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
        .post(apiUrl + "/api/auth/verify", {
          email: email,
          discord_id: user?.id,
        })
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
        .put(apiUrl + "/api/auth/verify-email", {
          code: verificationCode,
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.payload.data[0] !== null) {
            localStorage.setItem("user", JSON.stringify(res.data.payload.data[0]));
            navigate("/dashboard");
          }
        })
        .catch((err) => console.log(err))
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
