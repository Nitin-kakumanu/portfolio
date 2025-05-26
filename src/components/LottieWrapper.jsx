import { Player } from "@lottiefiles/react-lottie-player";
import PropTypes from "prop-types";

const LottieWrapper = ({ animationData, className = "", loop = true, autoplay = true }) => (
  <Player
    autoplay={autoplay}
    loop={loop}
    src={animationData}
    className={`pointer-events-none absolute ${className}`}
  />
);

LottieWrapper.propTypes = {
  animationData: PropTypes.object.isRequired,
  className: PropTypes.string,
  loop: PropTypes.bool,
  autoplay: PropTypes.bool,
};

export default LottieWrapper;