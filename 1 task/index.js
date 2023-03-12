const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

const getHour = (seconds) => {
  return Math.floor(seconds / 60 / 60);
}

const getMinute = (seconds) => {
  return Math.floor(seconds / 60 % 60);
}

const getSecond = (seconds) => {
  return Math.floor(seconds % 60);
}

const formatWithNull = (value) => {
  return value < 9 ? '0' + value : value;
}

const formatTime = (second) => {
  return `${formatWithNull(getHour(second))}:${formatWithNull(getMinute(second))}:${formatWithNull(getSecond(second))}`;
}


// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {
    timerEl.textContent = formatTime(seconds);
    const timer = setInterval(() => {
      seconds--;
      timerEl.textContent = formatTime(seconds);
      if (seconds === 0) {
        clearInterval(timer);
      }
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  inputEl.value = inputEl.value.replace(/\D/gi, '')
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});
