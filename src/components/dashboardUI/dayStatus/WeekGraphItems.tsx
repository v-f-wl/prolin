import { useEffect, useRef, useState } from "react";

interface WeekGraphItemsProps{
  taskStatus: string,
  workStatus: string,
  learningStatus: string,
  style: boolean
}
const WeekGraphItems:React.FC<WeekGraphItemsProps> = ({
  taskStatus,
  workStatus,
  learningStatus,
  style,
}) => {

  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  return ( 
    <div 
      ref={itemRef}
      className={`
        flex justify-center gap-2 items-end 
        h-full
        ${style && 'bg-neutral-300/50 dark:bg-blue-100/20'}
      `}
    >
      <div 
        style={{ height: isVisible ? `${taskStatus}%` : '0%' }}
        className={`w-4 bg-blue-300 rounded-t-sm transition-all duration-700`}
      >
      </div>
      <div 
        style={{ height: isVisible ? `${learningStatus}%` : '0%' }}
        className={`w-4 bg-green-400 rounded-t-sm transition-all duration-700`}
      >
      </div>
      <div 
        style={{ height: isVisible ? `${workStatus}%` : '0%' }}
        className={`w-4 bg-red-400 rounded-t-sm transition-all duration-700`}
      >
      </div>
    </div>
  );
}
 
export default WeekGraphItems;