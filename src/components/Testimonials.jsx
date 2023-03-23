import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

function Testimonials() {
  return (
    <section
      id="clients"
      className={`${styles.paddingY} ${styles.flexCenter} relative flex-col`}
    >
      <div className="blue__gradient absolute -right-[50%] z-0 h-[60%] w-[60%] rounded-full" />
      <div className="relative z-[1] mb-6 flex w-full flex-col items-center justify-between sm:mb-16 md:flex-row">
        <h1 className={`${styles.heading2}`}>
          What people are <br className="hidden sm:block" /> sauing about us
        </h1>
        <div className="mt-6 w-full md:mt-0">
          <p className={`${styles.paragraph} max-w-[450px] text-left`}>
            Everything you need to accept card payments and grow your business
            anyweher on the planet.
          </p>
        </div>
      </div>

      <div className="feedback-container z-[1 relative flex w-full flex-wrap items-center justify-around sm:justify-start">
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
