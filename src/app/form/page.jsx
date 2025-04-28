"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

// export default function Form() {
//   <div className="h-screen w-screen flex items center"></div>;
// }

export default function Rotate() {
  const container = {
    display: "flex",
    flexDirection: "column",
    width: 100,
    height: 160,
    position: "relative",
  };
  const [isVisible, setIsVisible] = useState(true);
  const box = {
    width: 100,
    height: 100,
    backgroundColor: "#98c379",
    borderRadius: 5,
  };
  return (
    <div style={container}>
      <AnimatePresence mode="wait">
        <motion.div
          key={isVisible ? isVisible : "empty"}
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ x: -20, opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div style={box} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// export default function ExitAnimation() {
//     const [isVisible, setIsVisible] = useState(true)

//     return (
//         <div style={container}>
//             <AnimatePresence initial={false}>
//                 {isVisible ? (
//                     <motion.div
//                         initial={{ opacity: 0, scale: 0 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         exit={{ opacity: 0, scale: 0 }}
//                         style={box}
//                         key="box"
//                     />
//                 ) : null}
//             </AnimatePresence>
//             <motion.button
//                 style={button}
//                 onClick={() => setIsVisible(!isVisible)}
//                 whileTap={{ y: 1 }}
//             >
//                 {isVisible ? "Hide" : "Show"}
//             </motion.button>
//         </div>
//     )
// }

// /**
//  * ==============   Styles   ================
//  */

// const box: React.CSSProperties = {
//     width: 100,
//     height: 100,
//     backgroundColor: "#0cdcf7",
//     borderRadius: "10px",
// }

// const button: React.CSSProperties = {
//     backgroundColor: "#0cdcf7",
//     borderRadius: "10px",
//     padding: "10px 20px",
//     color: "#0f1115",
//     position: "absolute",
//     bottom: 0,
//     left: 0,
//     right: 0,
// }

// animate={{ rotate: 360 }} transition={{ duration: 3 }}
