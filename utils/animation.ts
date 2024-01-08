export function BasicAnimation() {
  return {
    initial: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };
}

export function ImageAnimation() {
  return {
    initial: {
      opacity: 0,
      scale: 0.5,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        type: 'twin',
      },
    },
  };
}

export function MainAnimation(axis: string = 'x', axisValue: number = -100) {
  return {
    initial: {
      [axis]: axisValue,
      opacity: 0,
    },
    visible: {
      [axis]: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        staggerChildren: 0.5,
      },
    },
  };
}

export function StaggerAnimation(
  axis: string,
  axisValue: number = -100,
  duration: number = 1,
  staggerChildren: number = 0.5,
) {
  return {
    initial: {
      [axis]: axisValue,
      opacity: 0,
    },
    visible: {
      [axis]: 0,
      opacity: 1,
      transition: { duration, staggerChildren },
    },
  };
}

export function TitleAnimation(
  axis: string,
  delay: number = 0,
  duration: number = 0,
  axisValue: number = -140,
) {
  return {
    hidden: {
      [axis]: axisValue,
      opacity: 0,
    },
    visible: {
      [axis]: 0,
      opacity: 1,
      transition: { delay: delay, duration: duration },
    },
  };
}

export function TitleButtonAnimation(axis: string, delay: number = 0) {
  return {
    hidden: {
      [axis]: 100,
      opacity: 0,
    },
    visible: {
      [axis]: 0,
      opacity: 1,
      transition: { delay: delay, duration: 0.8 },
    },
  };
}

export function SpringAnimation(
  axis: string,
  axisValue: number = -100,
  delay: number = 0,
  stiffness: number = 100,
) {
  return {
    hidden: {
      [axis]: axisValue,
      opacity: 0,
    },
    visible: {
      [axis]: 0,
      opacity: 1,
      transition: {
        delay,
        type: 'spring',
        stiffness,
      },
    },
  };
}

export function ScrollDownAnimation() {
  return {
    initial: {
      y: 0,
      opacity: 0,
    },
    scrollButton: {
      opacity: 1,
      y: 80,
      transition: {
        duration: 3,
        repeat: Infinity,
      },
    },
  };
}

export function StepAnimation() {
  return {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: custom * 0.5,
      },
    }),
  };
}
