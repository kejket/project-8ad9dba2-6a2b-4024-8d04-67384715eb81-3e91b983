import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // 해시가 있으면 해당 요소로 스크롤, 없으면 최상단으로
    if (hash) {
      // 요소가 렌더링될 때까지 약간의 지연
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          const headerOffset = 80; // 헤더 높이 고려
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
