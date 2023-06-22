export const StaggerAnimation = (duration: number, delay: number) => {
  const stagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: duration,
        delay,
      },
    },
  };

  return stagger;
};

const ease2 = [0.33, 1, 0.68, 1];
const easing = [0.6, -0.05, 0.01, 0.99];

export const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: ease2,
    },
  },
};

export const fadeInRight = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      ease: easing,
    },
  },
};

export const OpacityWithTransformAnimation = (duration: number) => {
  const opacityAnimation = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return opacityAnimation;
};

export const WordAnimation = (duration: number) => {
  const wordAnimation = {
    hidden: {
      y: 30,
      scale: 0,
      opacity: 0,
    },
    visible: {
      y: 0,
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        duration,
        ease: easing,
      },
    },
  };

  return wordAnimation;
};
