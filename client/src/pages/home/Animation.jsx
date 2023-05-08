import { motion } from "framer-motion";

const pathBg = "#f3f3f3";

const textStyle = {
  fill: "rgb(248, 243, 246)",
  fontFamily: "Bradley Hand",
  fontSize: "18px",
  textAnchor: "middle",
  whiteSpace: "pre",
};

const ellipseStyle = {
  stroke: "rgb(1, 105, 111)",
  strokeWidth: "3px",
  fill: "rgb(223, 87, 126, 0.7)",
};

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 2 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: {
          delay,
          type: "spring",
          duration: 2.5,
          bounce: 0,
        },
        opacity: { delay, duration: 1.5 },
      },
    };
  },
};

const drawPath = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 1.5 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 2, bounce: 0 },
        opacity: { delay, duration: 1.5 },
      },
    };
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i) => {
    const delay = 1 + i * 0.5;
    return {
      opacity: 1,
      transition: {
        opacity: { delay, duration: 1 },
      },
    };
  },
};

export function Animation() {
  return (
    <motion.svg
      viewBox="0 0 1000.333 356.266"
      xmlns="http://www.w3.org/2000/svg"
      initial="hidden"
      animate="visible"
    >
      <a style={{ textDecoration: "none" }} href="/foods">
        <motion.ellipse
          filter="url(#noise1)"
          style={ellipseStyle}
          cx="99.761"
          cy="88.321"
          rx="48.735"
          ry="42.643"
          variants={draw}
          custom={-2}
        />
        <motion.text
          style={textStyle}
          transform="matrix(1, 0, 0, 1, 30.677876, 11.255055)"
          variants={fadeIn}
          custom={0}
        >
          <tspan x="66.022" y="70.08">
            Select
          </tspan>
          <tspan x="66.022" dy="1em">
            ​
          </tspan>
          <tspan>Foods</tspan>
        </motion.text>
      </a>
      <motion.path
        style={{
          strokeWidth: "3px",
          fillOpacity: "0",
          stroke: "rgb(1, 105, 111)",
        }}
        d="M 151.108 98.308 C 158.304 95.66 164.794 90.843 172.252 88.779 C 183.524 85.659 199.206 89.138 209.221 95.047 C 221.508 102.297 228.807 118.209 244.721 118.201 C 250.545 118.198 258.447 118.754 263.861 116.282 C 269.488 113.714 272.942 108.808 279.781 109.604 C 285.6 110.281 287.943 111.433 290.02 116.828 C 290.897 119.109 293.042 125.457 291.032 124.099"
        variants={drawPath}
        custom={1}
      />
      <path
        style={{
          strokeDasharray: "5px",
          strokeWidth: "5px",
          fillOpacity: "0",
          stroke: pathBg,
        }}
        d="M 151.108 98.308 C 158.304 95.66 164.794 90.843 172.252 88.779 C 183.524 85.659 199.206 89.138 209.221 95.047 C 221.508 102.297 228.807 118.209 244.721 118.201 C 250.545 118.198 258.447 118.754 263.861 116.282 C 269.488 113.714 272.942 108.808 279.781 109.604 C 285.6 110.281 287.943 111.433 290.02 116.828 C 290.897 119.109 293.042 125.457 291.032 124.099"
      />
      <a href="/profile" style={{ textDecoration: "none" }}>
        <motion.ellipse
          style={ellipseStyle}
          cx="340.188"
          cy="134.867"
          rx="48.735"
          ry="42.643"
          variants={draw}
          custom={2}
        />
        <motion.text
          style={textStyle}
          transform="matrix(1, 0, 0, 1, 274.320801, 59.347355)"
          variants={fadeIn}
          custom={4}
        >
          <tspan x="66.022" y="70.08">
            Add
          </tspan>
          <tspan x="66.022" dy="1em">
            ​
          </tspan>
          <tspan>People</tspan>
        </motion.text>
      </a>
      <motion.path
        style={{
          strokeWidth: "3px",
          fillOpacity: "0",
          stroke: "rgb(1, 105, 111)",
        }}
        d="M 390.874 128.087 C 397.948 130.957 404.325 136.18 411.656 138.417 C 422.734 141.8 438.147 138.028 447.989 131.622 C 460.065 123.762 467.239 106.511 482.88 106.52 C 488.604 106.523 496.37 105.92 501.691 108.6 C 507.221 111.384 510.616 116.703 517.337 115.84 C 523.056 115.106 525.359 113.857 527.4 108.008 C 528.263 105.536 530.37 98.654 528.395 100.126"
        variants={drawPath}
        custom={5}
      />
      <path
        style={{
          strokeDasharray: "5px",
          strokeWidth: "5px",
          fillOpacity: "0",
          stroke: pathBg,
        }}
        d="M 390.874 128.087 C 397.948 130.957 404.325 136.18 411.656 138.417 C 422.734 141.8 438.147 138.028 447.989 131.622 C 460.065 123.762 467.239 106.511 482.88 106.52 C 488.604 106.523 496.37 105.92 501.691 108.6 C 507.221 111.384 510.616 116.703 517.337 115.84 C 523.056 115.106 525.359 113.857 527.4 108.008 C 528.263 105.536 530.37 98.654 528.395 100.126"
      />
      <a href="/bites" style={{ textDecoration: "none" }}>
        <motion.ellipse
          style={ellipseStyle}
          cx="573.645"
          cy="82.374"
          rx="48.735"
          ry="42.643"
          variants={draw}
          custom={6}
        />
        <motion.text
          style={textStyle}
          transform="matrix(1, 0, 0, 1, 507.872894, 5.88627)"
          variants={fadeIn}
          custom={8}
        >
          <tspan x="66.022" y="70.08">
            Log
          </tspan>
          <tspan x="66.022" dy="1em">
            ​
          </tspan>
          <tspan>Bites</tspan>
        </motion.text>
      </a>
      <motion.path
        style={{
          strokeWidth: "3px",
          fillOpacity: "0",
          stroke: "rgb(1, 105, 111)",
        }}
        d="M 624.999 81.478 C 631.61 77.606 637.572 70.563 644.424 67.545 C 654.779 62.983 669.187 68.07 678.387 76.71 C 689.674 87.311 696.38 110.577 711 110.565 C 716.35 110.561 723.61 111.374 728.584 107.759 C 733.753 104.004 736.926 96.831 743.21 97.995 C 748.555 98.985 750.708 100.669 752.616 108.557 C 753.422 111.893 755.392 121.174 753.545 119.189"
        variants={drawPath}
        custom={9}
      />
      <path
        style={{
          strokeDasharray: "5px",
          strokeWidth: "5px",
          fillOpacity: "0",
          stroke: pathBg,
        }}
        d="M 624.999 81.478 C 631.61 77.606 637.572 70.563 644.424 67.545 C 654.779 62.983 669.187 68.07 678.387 76.71 C 689.674 87.311 696.38 110.577 711 110.565 C 716.35 110.561 723.61 111.374 728.584 107.759 C 733.753 104.004 736.926 96.831 743.21 97.995 C 748.555 98.985 750.708 100.669 752.616 108.557 C 753.422 111.893 755.392 121.174 753.545 119.189"
      />
      <a href="/dashboard" style={{ textDecoration: "none" }}>
        <motion.ellipse
          style={ellipseStyle}
          cx="768.139"
          cy="161.358"
          rx="48.735"
          ry="42.643"
          variants={draw}
          custom={10}
        />
        <motion.text
          style={textStyle}
          transform="matrix(1, 0, 0, 1, 702.475281, 85.866203)"
          variants={fadeIn}
          custom={12}
        >
          <tspan x="66.022" y="70.08">
            View
          </tspan>
          <tspan x="66.022" dy="1em">
            ​
          </tspan>
          <tspan>Charts</tspan>
        </motion.text>
      </a>
    </motion.svg>
  );
}
