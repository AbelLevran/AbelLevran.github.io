import { useState, useEffect } from 'react';

const AnimatedText = ({ texts, typingSpeed = 100, deletingSpeed = 50, pauseTime = 2000 }) => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    let ticker;

    const handleType = () => {
      const i = loopNum % texts.length;
      const fullText = texts[i];

      setDisplayText((prev) => 
        isDeleting ? fullText.substring(0, prev.length - 1) : fullText.substring(0, prev.length + 1)
      );

      let typeSpeed = isDeleting ? deletingSpeed : typingSpeed;

      if (!isDeleting && displayText === fullText) {
        typeSpeed = pauseTime;
        setIsDeleting(true);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        typeSpeed = 500; // Pause before typing next word
      }

      ticker = setTimeout(handleType, typeSpeed);
    };

    ticker = setTimeout(handleType, typingSpeed);

    return () => clearTimeout(ticker);
  }, [displayText, isDeleting, loopNum, texts, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className="gradient-text">
      {displayText}
      <span className="typing-cursor"></span>
    </span>
  );
};

export default AnimatedText;
