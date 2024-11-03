import React from "react";

const home = () => {
  return (
    <>
      {/* 1 */}
      <div className="w-[75vw] translate-x-[25vw]">
        <div>
          {" "}
          <img
            src="public/media/Screenshot 2024-11-03 at 10.37.43 AM.png"
            alt="image"
          />
        </div>
        {/* 2 */}
        <div className="flex gap-10 ">
          <div className="flex flex-col items-center pt-10 px-10 shadow-sm text-center bg-white ml-10 -translate-y-10 rounded-lg h-[50vh]">
            <img
              className="rounded-md w-[7rem] h-[7rem]"
              src="/media/Screenshot 2024-11-03 at 10.33.51 AM.png"
              alt="pp"
            />
            <p className="font-[poppinsSemiBold] text-[1.4rem] my-4">
              Prabhleen Kaur
            </p>
            <p className="text-[#c1c1c2] py-2">prabhleen@gmail.com</p>
            <p className="text-[#c1c1c2] pb-2">9899999882</p>
            <p className="text-[#c1c1c2] py-6">Delhi, India</p>
          </div>
          {/* 3 */}
          <div className="flex flex-col">
            <p className="py-6">Morning, 14 October</p>
            <p className="pb-6 text-[2rem] text-[#20416c] font-[poppinsSemiBold]">
              Good morning, Prabhleen! 👋
            </p>
            <div className=" flex flex-col py-6 px-4 rounded-md bg-white shadow-md">
              <p className="font-[poppinsMedium] py-2 my-2 bg-[#d7d7d7] pl-4 rounded-md">
                Monday,14 October 2024
              </p>
              <div className="flex gap-2 border-b-2 pb-4 pt-2">
                <div className="border-r-2 border-r-[#d0f6f3] pr-2">
                  <p className="font-[poppinsMedium]">11:30 AM</p>
                  <p className="text-[0.5rem] text-[#f7f7f7]">11:30 AM</p>
                </div>
                <div>
                  <div className="flex gap-2 items-center">
                    <div>
                      <p className="text-[#c1c1c2]">Live</p>
                    </div>
                    <div>
                      {" "}
                      <img
                        className="h-[16px] w-[20px]"
                        src="/media/Screenshot 2024-11-03 at 10.54.58 AM.png"
                        alt="video"
                      />{" "}
                    </div>
                  </div>
                  <div>UX Webinar</div>
                </div>
              </div>
              <div className="flex gap-2 border-b-2 pb-4 pt-2">
                <div className="border-r-2 border-r-[#d0f6f3] pr-2">
                  <p className="font-[poppinsMedium]">11:30 AM</p>
                  <p className="text-[0.5rem] text-[#f7f7f7]">11:30 AM</p>
                </div>
                <div>
                  <div className="flex gap-2 items-center">
                    <div>
                      <p className="text-[#c1c1c2]">Upcoming</p>
                    </div>
                    <div>
                      {" "}
                      <img
                        className="h-[16px] w-[20px]"
                        src="/media/Screenshot 2024-11-03 at 10.55.12 AM.png"
                        alt="video"
                      />{" "}
                    </div>
                  </div>
                  <div>My First Webinar</div>
                </div>
              </div>
              <div className="flex gap-2 border-b-2 pb-4 pt-2">
                <div className="border-r-2 border-r-[#d0f6f3] pr-2">
                  <p className="font-[poppinsMedium]">11:30 AM</p>
                  <p className="text-[0.5rem] text-[#f7f7f7]">11:30 AM</p>
                </div>
                <div>
                  <div className="flex gap-2 items-center">
                    <div>
                      <p className="text-[#c1c1c2]">Upcoming</p>
                    </div>
                    <div>
                      {" "}
                      <img
                        className="h-[16px] w-[20px]"
                        src="/media/Screenshot 2024-11-03 at 10.55.12 AM.png"
                        alt="video"
                      />{" "}
                    </div>
                  </div>
                  <div>Important Webinar</div>
                </div>
              </div>
              <div className="flex gap-2 border-b-2 pb-4 pt-2">
                <div className="border-r-2 border-r-[#d0f6f3] pr-2">
                  <p className="font-[poppinsMedium]">11:30 AM</p>
                  <p className="text-[0.5rem] text-[#f7f7f7]">11:30 AM</p>
                </div>
                <div>
                  <div className="flex gap-2 items-center">
                    <div>
                      <p className="text-[#c1c1c2]">Upcoming</p>
                    </div>
                    <div>
                      {" "}
                      <img
                        className="h-[16px] w-[20px]"
                        src="/media/Screenshot 2024-11-03 at 10.55.12 AM.png"
                        alt="video"
                      />{" "}
                    </div>
                  </div>
                  <div>Webinar 1</div>
                </div>
              </div>
            </div>
          </div>
          {/* 4 */}
          <div className="grid grid-cols-2 gap-6 p-4 rounded-md shadow-md text-[0.5rem] mt-[10vw] mb-[12vw] items-center text-center ">
            <div className="justify-items-center">
              <img
                className="h-[2rem] w-[2rem]"
                src="public/media/Screenshot 2024-11-03 at 10.55.48 AM.png"
                alt="image"
              />
              <p>schedule a Webinar</p>
            </div>
            <div className="justify-items-center">
              <img
                className="h-[2rem] w-[2rem]"
                src="public/media/Screenshot 2024-11-03 at 10.56.09 AM.png"
                alt="image"
              />
              <p>Join a Webinar</p>
            </div>
            <div className="justify-items-center">
              <img
                className="h-[2rem] w-[2rem]"
                src="public/media/Screenshot 2024-11-03 at 10.56.20 AM.png"
                alt="image"
              />
              <p>Open Recordings</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default home;
