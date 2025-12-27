"use client";

interface MarqueeProps {
  text: string;
  speed?: number; // seconds
  direction?: "left" | "right";
}

export default function Marquee({
  text,
  speed = 25,
  direction = "left",
}: MarqueeProps) {
  return (
    <div className="marquee-container">
      <div
        className={`marquee-content ${
          direction === "right" ? "marquee-right" : ""
        }`}
        style={{ animationDuration: `${speed}s` }}
      >
        <span>{text}</span>
        <span>{text}</span>
      </div>

      <style jsx>{`
        .marquee-container {
          width: 100%;
          overflow: hidden;
          white-space: nowrap;
          background: #92400e;
          color: #ffffff;
          padding: 8px 0;
          font-size: 14px;
          font-weight: 500;
        }

        .marquee-content {
          display: inline-flex;
          gap: 50px;
          animation: marquee-left linear infinite;
        }

        .marquee-right {
          animation-name: marquee-right;
        }

        @keyframes marquee-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes marquee-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
