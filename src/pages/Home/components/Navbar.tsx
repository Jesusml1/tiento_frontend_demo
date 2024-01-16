import { useUserAuth } from "@/hooks/useUserAuth";
import { Button } from "@mantine/core";
import envVars from "@/config/env";

const discordApiRedirectUrl = `${envVars.apiUrl}/api/auth/discord`;

function NavBar() {
  const { handleLogout, user } = useUserAuth();

  return (
    <nav>
      {user !== null ? (
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span>{user.username}</span>
            <img
              src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.jpg`}
              alt={`${user.username} profile picture`}
              style={{ borderRadius: 50, width: 50, height: 50 }}
            />
          </div>
          <Button color="gray" onClick={handleLogout}>
            logout
          </Button>
        </div>
      ) : (
        <div>
          <Button
            color="indigo"
            component="a"
            href={discordApiRedirectUrl}
          >
            Login with Discord
          </Button>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
