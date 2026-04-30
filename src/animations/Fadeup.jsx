import { motion } from "framer-motion";

export default function FadeUp({
  children,
  duration = 0.5,
  delay = 0,
  whileInView = false,
}) {
  const animation = {
    opacity: 1,
    y: 0,
    transition: {
      duration,
      ease: "easeInOut",
      delay,
    },
  };

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={whileInView ? animation : {}}
      animate={!whileInView ? animation : {}}
      viewport={{ once: false }}
    >
      {children}
    </motion.div>
  );
}