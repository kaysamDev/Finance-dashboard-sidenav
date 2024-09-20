import {
  BellIcon,
  ChartColumnBigIcon,
  ChartNoAxesCombinedIcon,
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
  const [navigations, setNavigations] = useState<NavigationLinks[]>([
    ...links,
    ...links2,
  ]);

  // Handle navigation click
  const handleNavigationClick = (text: string) => {
    const updatedNavigations = navigations.map((nav) =>
      nav.text === text ? { ...nav, active: true } : { ...nav, active: false }
    );
    setNavigations(updatedNavigations);
  };

  return (
    <>
      <div className="flex flex-col gap-2">
        {navigations.slice(0, links.length).map((i: NavigationLinks) => (
          <button
            key={i.text}
            onClick={() => handleNavigationClick(i.text)}
            className={`flex items-center p-2 group-hover:pr-2 ${
              i.active
                ? "bg-gray-200 text-gray-800 font-semibold rounded-md"
                : "bg-transparent text-black font-normal hover:bg-gray-100 text-gray-800"
            }`}
          >
            <div className="pr-4">{i.icon}</div>
            {i.text}
            {i.rightText && (
              <div className="text-center bg-green-500 text-white rounded-full w-4 ml-auto">
                {i.rightText}
              </div>
            )}
          </button>
        ))}
      </div>

      <div className="mt-12 flex flex-col gap-2">
        {navigations.slice(links.length).map((i: NavigationLinks) => (
          <button
            key={i.text}
            onClick={() => handleNavigationClick(i.text)}
            className={`flex items-center p-2 group-hover:pr-2 ${
              i.active
                ? "bg-gray-200 text-gray-800 font-semibold"
                : "bg-transparent text-black font-normal hover:bg-gray-100 text-gray-800"
            }`}
          >
            <div className="pr-4">{i.icon}</div>
            {i.text}
          </button>
        ))}
      </div>
    </>
  );
};
