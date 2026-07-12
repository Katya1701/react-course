import { useEffect, useState } from 'react';

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (totalHeight === 0) {
        setProgress(0);
        return;
      }

      const scrollPosition = window.scrollY;
      const percentage = (scrollPosition / totalHeight) * 100;
      setProgress(percentage);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: `${progress}%`,
        height: '4px',
        backgroundColor: 'green',
        zIndex: 9999,
        transition: 'width 0.1s ease-out',
      }}
    />
  );
}

export default ScrollProgress;
