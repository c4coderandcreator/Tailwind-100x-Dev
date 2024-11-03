import React from "react";

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 flex flex-col w-[25vw] h-[100vh] gap-10 border-r-[1px] z-20 bg-white">
      <div className="p-8">
        <div className="flex justify-between items-center py-4 px-2">
          <div className="bg-[#002a5a] p-2 rounded-md">
            <p className="text-white">
              Webinar <span className="text-[#1a7389]">.gg</span>
            </p>
          </div>
          <div>
            <img
              className="w-[2rem] h-[2rem] rounded-md"
              src="public/media/Screenshot1.png"
              alt="Profile"
            />
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col space-y-2">
          {[
            {
              label: "Home",
              icon: "/media/Screenshot 2024-11-03 at 10.35.33 AM.png",
            },
            {
              label: "Webinars",
              icon: "/media/Screenshot 2024-11-03 at 10.36.04 AM.png",
            },
            {
              label: "Billing",
              icon: "/media/Screenshot 2024-11-03 at 10.36.14 AM.png",
            },
            {
              label: "User Management",
              icon: "/media/Screenshot 2024-11-03 at 10.36.22 AM.png",
            },
            {
              label: "Settings",
              icon: "/media/Screenshot 2024-11-03 at 10.36.31 AM.png",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center py-4 px-2 rounded-md hover:bg-[#e4e9ee] hover:text-[#5a7392] text-[#c1c1c2]"
            >
              <p>{item.label}</p>
              <img
                className="w-[1rem] h-[1rem]"
                src={item.icon}
                alt={item.label}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
