"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.getBoundingClientRect().height);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-black font-sans"
    >
      <div ref={ref} className="relative max-w-7xl mx-auto pb-12">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-6 md:pt-16 md:gap-10"
          >
            {/* Title + Dot */}
            <div className="relative z-40 flex items-center self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 w-10 absolute left-3 flex items-center justify-center rounded-full bg-black">
                <div className="h-4 w-4 rounded-full bg-neutral-800 border border-neutral-600" />
              </div>

              <h3 className="hidden md:block md:pl-20 text-5xl font-bold text-white">
                {item.title}
              </h3>
            </div>

            {/* Content */}
            <div className="relative pl-20 pr-4 md:pl-4 w-full text-white">
              <h3 className="md:hidden mb-4 text-2xl font-bold text-white">
                {item.title}
              </h3>

              <div className="leading-relaxed">
                {item.content}
              </div>
            </div>
          </div>
        ))}

        {/* Timeline line */}
        <div
          style={{ height }}
          className="absolute left-8 top-0 w-[2px] overflow-hidden
            bg-gradient-to-b from-transparent via-neutral-700 to-transparent
            [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px]
              bg-gradient-to-t from-blue-600 via-blue-500 to-transparent
              rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
