import { useUserAuth } from "@/hooks/useUserAuth";

function NavBar() {
  const { handleLogout, user, apiUrl } = useUserAuth();

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
          <button onClick={handleLogout}>logout</button>
        </div>
      ) : (
        <a href={`${apiUrl}/api/auth/discord`}>Login with Discord</a>
      )}
    </nav>
  );
}

export default NavBar;
