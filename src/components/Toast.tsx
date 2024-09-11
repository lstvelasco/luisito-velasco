import { useState, useEffect } from "react";

interface Props {
  message: string;
  duration?: number; // Optional prop for the duration of toast visibility
}

const Toast = ({ message, duration = 3000 }: Props) => {
  const [isVisible, setIsVisible] = useState(true);

  // Automatically hide the toast after the specified duration
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, [duration]);

  // Hide toast when clicked
  const handleClick = () => {
    setIsVisible(false);
  };

  // Only render the toast if it's visible
  if (!isVisible) return null;

  return (
    <div className="toast toast-start z-60" onClick={handleClick}>
      <div className="alert alert-success">
        <span>{message}</span>
      </div>
    </div>
  );
};

export default Toast;
