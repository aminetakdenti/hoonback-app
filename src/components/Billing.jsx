import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

function Billing() {
  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="billing" className="realtive z-10 h-full w-full" />
        <div className="white__gradient absolute top-0 -left-1/2 z-[3] h-1/2 w-1/2 rounded-full" />
        <div className="pink__gradient absolute bottom-0 -left-1/2 z-[0] h-1/2 w-1/2 rounded-full" />
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Easily control your <br className="hidden sm:block" /> billing &
          invoicing.
        </h2>
        <p className={`${styles.paragraph} mt-5  max-w-[470px]`}>
          Elit enim sed messa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integerplatea
          placerat.
        </p>
        <div className="mt-6 flex flex-row flex-wrap gap-5 sm:mt-10">
          <img
            src={apple}
            alt="apple store"
            className="mr-5 h-[42px] w-[128px] cursor-pointer object-contain"
          />
          <img
            src={google}
            alt="google play"
            className="h-[42px] w-[128px] cursor-pointer object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default Billing;
