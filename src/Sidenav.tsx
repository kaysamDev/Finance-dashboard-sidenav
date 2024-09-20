import { NavLinks } from "./components/NavLinks";
import { Upgrade } from "./components/Upgrade";
import { UserProfile } from "./components/UserProfile";

export const Sidenav = () => {
  return (
    <div className="sideNav hover:w-72 group">
      <UserProfile />
      <NavLinks />
      <Upgrade />
    </div>
  );
};
