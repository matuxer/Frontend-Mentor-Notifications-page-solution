import rizkyHasanuddin from "../images/avatar-rizky-hasanuddin.webp";
import kimberlySmith from "../images/avatar-kimberly-smith.webp";
import nathanPeterson from "../images/avatar-nathan-peterson.webp";
import annaKim from "../images/avatar-anna-kim.webp";
import imageChess from "../images/image-chess.webp";

function Read() {
  return (
    <div className="flex flex-col">
      {/* Notification 1 */}
      <div className="mb-4 flex flex-row items-start px-4 py-3 space-x-3">
        <img
          src={rizkyHasanuddin}
          className="h-[52px]"
          alt="Rizky Hasanuddin avatar"
        />
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col space-y-1">
            <p className="text-grayishBlue font-plusJ tracking-wide text-left leading-tight">
              <button className="text-veryDarkBlue font-bold hover:text-blue">
                Rizky Hasanuddin
              </button>{" "}
              sent you a private message
            </p>
            <h6 className="text-grayishBlue text-sm font-plusJ">5 days ago</h6>
          </div>
          {/* Private Message */}
          <div className="mt-2 border-solid rounded-md border-lightGrayishBlue-2 border-[0.25px] px-5 py-4 hover:cursor-pointer hover:bg-lightGrayishBlue-2">
            <p className="text-left font-plusJ text-darkGrayishBlue">
              Hello, thanks for setting up the Chess Club. I've been a member
              for a few weeks now and I'm already having lots of fun and
              improving my game.
            </p>
          </div>
        </div>
      </div>

      {/* Notification 2 */}
      <div className="relative mb-4 flex flex-row justify-between items-start px-4 py-3 space-x-3">
        <div className="flex flex-row space-x-3">
          <img
            src={kimberlySmith}
            className="h-[52px]"
            alt="Kimberly Smith avatar"
          />
          <div className="flex flex-col space-y-1">
            <p className="text-grayishBlue font-plusJ tracking-wide text-left leading-tight">
              <button className="text-veryDarkBlue font-bold hover:text-blue">
                Kimberly Smith
              </button>{" "}
              commented on your picture
            </p>
            <h6 className="text-grayishBlue text-sm font-plusJ">1 week ago</h6>
          </div>
        </div>
        <img
          src={imageChess}
          className="h-[51px] ease-in duration-200 rounded-xl border-solid border-transparent border-[3px] hover:border-opacity-50 hover:border-grayishBlue hover:cursor-pointer"
          alt="Chess Post"
        />
      </div>

      {/* Notification 3 */}
      <div className="mb-4 flex flex-row items-start px-4 py-3 space-x-3">
        <img
          src={nathanPeterson}
          className="h-[52px]"
          alt="Nathan Peterson avatar"
        />
        <div className="flex flex-col space-y-1">
          <p className="text-grayishBlue font-plusJ tracking-wide text-left leading-tight">
            <button className="text-veryDarkBlue font-bold hover:text-blue">
              Nathan Peterson
            </button>{" "}
            reacted to your recent post{" "}
            <b className="text-darkGrayishBlue hover:cursor-pointer hover:text-blue">
              5 end-game strategies to increase your win rate
            </b>
          </p>
          <h6 className="text-grayishBlue text-sm font-plusJ">2 weeks ago</h6>
        </div>
      </div>

      {/* Notification 4 */}
      <div className="mb-4 flex flex-row items-start px-4 py-3 space-x-3">
        <img src={annaKim} className="h-[52px]" alt="Anna Kim avatar" />
        <div className="flex flex-col space-y-1">
          <p className="text-grayishBlue font-plusJ tracking-wide text-left leading-tight">
            <button className="text-veryDarkBlue font-bold hover:text-blue">
              Anna Kim
            </button>{" "}
            left the group{" "}
            <b className="text-darkGrayishBlue hover:cursor-pointer hover:text-blue">
              Chess Club
            </b>
          </p>
          <h6 className="text-grayishBlue text-sm font-plusJ">2 weeks ago</h6>
        </div>
      </div>
    </div>
  );
}

export default Read;
