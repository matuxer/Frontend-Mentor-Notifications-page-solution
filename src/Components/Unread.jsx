import markWebber from "../images/avatar-mark-webber.webp";
import angelaGray from "../images/avatar-angela-gray.webp";
import jacobThompson from "../images/avatar-jacob-thompson.webp";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const unreadDiv = "mb-4 flex flex-row items-start rounded-lg px-4 py-3 space-x-3";
const unreadDot = "inline-block bg-red h-2.5 w-2.5 rounded-full";

function Unread() {
  const count = useSelector(state => state.counter.value);

  const [read, setRead] = useState(false);

  useEffect(() => {
    if (count === 0) {
      setRead(true);
    }
  }, [count]);

  return (
    <div className="flex flex-col mt-6">
      {/* Notification 1 */}
      <div className={read ? unreadDiv : unreadDiv + ' bg-veryLightGrayishBlue'}>
        <img src={markWebber} className="h-[52px]" alt="Mark Webber avatar" />
        <div className="flex flex-col space-y-1">
          <p className="relative text-grayishBlue font-plusJ tracking-wide text-left leading-tight">
            <button className="text-veryDarkBlue font-bold hover:text-blue">
              Mark Webber
            </button>{" "}
            reacted to your recent post{" "}
            <b className="text-darkGrayishBlue hover:cursor-pointer hover:text-blue">
              My first tournament today!{" "}
            </b>
            <div className={read ? unreadDot + ' hidden' : unreadDot}></div>
          </p>
          <h6 className="text-grayishBlue text-sm font-plusJ">1m ago</h6>
        </div>
      </div>

      {/* Notification 2 */}
      <div className={read ? unreadDiv : unreadDiv + ' bg-veryLightGrayishBlue'}>
        <img src={angelaGray} className="h-[52px]" alt="Angela Gray avatar" />
        <div className="flex flex-col space-y-1">
          <p className="text-grayishBlue font-plusJ tracking-wide text-left leading-tight">
            <button className="text-veryDarkBlue font-bold hover:text-blue">
              Angela Gray
            </button>{" "}
            followed you{" "}
            <div className={read ? unreadDot + ' hidden' : unreadDot}></div>
          </p>
          <h6 className="text-grayishBlue text-sm font-plusJ">5m ago</h6>
        </div>
      </div>

      {/* Notification 3 */}
      <div className={read ? unreadDiv : unreadDiv + ' bg-veryLightGrayishBlue'}>
        <img
          src={jacobThompson}
          className="h-[52px]"
          alt="Jacob Thompson avatar"
        />
        <div className="flex flex-col space-y-1">
          <p className="text-grayishBlue font-plusJ tracking-wide text-left leading-tight">
            <button className="text-veryDarkBlue font-bold hover:text-blue">
              Jacob Thompson
            </button>{" "}
            has joined your group{" "}
            <b className="text-darkGrayishBlue hover:cursor-pointer hover:text-blue">
              Chess Club{" "}
            </b>
            <div className={read ? unreadDot + ' hidden' : unreadDot}></div>
          </p>
          <h6 className="text-grayishBlue text-sm font-plusJ">1 day ago</h6>
        </div>
      </div>
    </div>
  );
}

export default Unread;
