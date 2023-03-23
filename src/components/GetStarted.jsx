import { arrowUp } from "../assets";
import styles from "../style";

function GetStarted() {
  return (
    <div
      className={`${styles.flexCenter} bg-blue-gradient h-[140px] w-[140px] cursor-pointer rounded-full p-[2px]`}
    >
      <div
        className={`${styles.flexCenter} h-full w-full flex-col rounded-full bg-primary `}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <p className="mr-2  font-poppins text-[18px] font-medium leading-[23px]">
            <span className="text-gradient">Get</span>
          </p>
          <img src={arrowUp} className="h-[23px] w-[23px] object-contain" />
        </div>

        <p className="font-poppins text-[18px] font-medium leading-[23px]">
          <span className="text-gradient">Started</span>
        </p>
      </div>
    </div>
  );
}

export default GetStarted;
