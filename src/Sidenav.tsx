import { NavLinks } from "./components/NavLinks";
import { Upgrade } from "./components/Upgrade";
import { UserProfile } from "./components/UserProfile";

export const Sidenav = () => {
  return (
    <div className="w-72 h-dvh my-4 ml-4 bg-white rounded-2xl p-4 overflow-y-auto">
      <UserProfile />
      <NavLinks />
      <Upgrade />
    </div>
  );
};
