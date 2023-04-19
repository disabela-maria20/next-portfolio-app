import { useState, useEffect, useRef, useCallback } from 'react';

const Square = (): JSX.Element => {
  const block = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState<boolean>(false);

  const createSquare = useCallback(() => {
    const altura: number = window.innerHeight;
    const largura: number = window.innerWidth;

    const posisaoX: number = Math.floor(Math.random() * largura);
    const posisaoY: number = Math.floor(Math.random() * altura);

    const size: number = Math.floor(Math.random() * 50);
    const square: HTMLSpanElement = document.createElement('span');

    square.style.width = 20 + size + 'px';
    square.style.height = 20 + size + 'px';

    square.style.background = '#ffffff59';
    square.className = 'animateSquare';
    square.style.top = posisaoY + 'px';
    square.style.left = posisaoX + 'px';
    square.style.position = 'absolute';

    block.current?.appendChild(square);
    setTimeout(() => {
      square.remove();
    }, 6000);
  }, [block]);

  const handleScroll = useCallback(() => {
    const scrollTop: number = window.pageYOffset;
    const clientHeight: number = block.current?.clientHeight ?? 0;

    if (scrollTop > clientHeight) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  }, [block]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;

    if (!isScrolling) {
      intervalId = setInterval(() => {
        createSquare();
      }, 800);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [createSquare, isScrolling]);

  return (
    <section className="square relative overflow-hidden flex flex-col items-center justify-center bg-waves bg-no-repeat bg-cover" ref={block}>
      <div className="h-100">
        <h1 className="relative text-white font-serif text-center mb-15 leading-title after:content-[''] after:mt-15 after:absolute after:-bottom-8 after:bg-yellow after:w-185 after:h-2 after:left-0 after:right-0 after:m-auto after:z-40">
          Desenvolvedora<br /> Front-end
        </h1>
        <span className="text-white font-serif block text-center text-18">React.js, Next.js &amp; Typescript </span>
      </div>
    </section>
  );
};

export default Square 
