import {
  BellIcon,
  ChartColumnBigIcon,
  ChartNoAxesCombinedIcon,
  FileTextIcon,
  LayoutDashboardIcon,
  MessageCircleQuestionIcon,
  MessageSquareIcon,
  SettingsIcon,
  SquareKanbanIcon,
} from "lucide-react";
import { ReactNode, useState } from "react";

interface NavigationLinks {
  icon: ReactNode;
  text: string;
  active: boolean;
  rightText?: number;
}

const links: NavigationLinks[] = [
  {
    icon: <LayoutDashboardIcon />,
    text: "Dashboard",
    active: true,
  },
  {
    icon: <ChartColumnBigIcon />,
    text: "Investment Options",
    active: false,
  },
  {
    icon: <ChartNoAxesCombinedIcon />,
    text: "Analytics",
    active: false,
  },
  {
    icon: <SquareKanbanIcon />,
    text: "Finacial Tools",
    active: false,
  },
  {
    icon: <BellIcon />,
    text: "Notification",
    active: false,
    rightText: 3,
  },
];

const links2: NavigationLinks[] = [
  {
    icon: <MessageSquareIcon />,
    text: "Community",
    active: false,
  },
  {
    icon: <SettingsIcon />,
    text: "Setting",
    active: false,
  },
  {
    icon: <MessageCircleQuestionIcon />,
    text: "Feedback & Support",
    active: false,
  },
];

export const NavLinks = () => {
  const [navigations, setNavigations] = useState<NavigationLinks[]>(links);

  const handleNavigationClick = (text: string) => {
    const updatedNavigations = navigations.map((nav) =>
      nav.text === text ? { ...nav, active: true } : { ...nav, active: false }
    );
    setNavigations(updatedNavigations);
  };

  return (
    <>
      <div className="flex flex-col gap-2">
        {links.map((i: NavigationLinks) => (
          <button
            key={i.text}
            onClick={() => handleNavigationClick(i.text)}
            style={{
              backgroundColor: i.active ? "#e0e0e0" : "transparent",
              color: i.active ? "#333" : "#000",
              fontWeight: i.active ? "600" : "400",
            }}
            className="flex item-center gap-2 p-2"
          >
            <div>{i.icon}</div>
            {i.text}
            <div className="text-center bg-green-500 text-white rounded-full w-4">
              {i.rightText}
            </div>
          </button>
        ))}
      </div>

      <div className="mt-12">
        {links2.map((i: NavigationLinks) => (
          <button
            key={i.text}
            onClick={() => handleNavigationClick(i.text)}
            style={{
              backgroundColor: i.active ? "#e0e0e0" : "transparent",
              color: i.active ? "#333" : "#000",
              fontWeight: i.active ? "600" : "400",
            }}
            className="flex item-center gap-2 p-2"
          >
            <div>{i.icon}</div>
            {i.text}
          </button>
        ))}
      </div>
    </>
  );
};
