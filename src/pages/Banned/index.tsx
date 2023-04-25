import { Link } from "react-router-dom";

function Banned() {
  return (
    <div>
      <h2>You are currently banned from Tiento Discord server</h2>
      <Link to="/">go back home</Link>
    </div>
  );
}

export default Banned;
