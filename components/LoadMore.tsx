"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function LoadMore() {
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      console.log("inView", inView);
    }
  }, [inView]);

  console.log(inView);

  return (
    <>
      <section className="flex justify-center items-center w-full">
        <div ref={ref}>
          <Image
            src="./spinner.svg"
            alt="spinner"
            width={56}
            height={56}
            className="object-contain"
          />
        </div>
      </section>
    </>
  );
}

export default LoadMore;
