import { motion, useReducedMotion } from "motion/react";

function floatPreset(index: number) {
  const duration = 4.2 + (index % 5) * 0.65;
  const delay = (index % 7) * 0.22;
  const amplitude = 4 + (index % 3);
  const drift = index % 2 === 0 ? 1.5 : -1.5;
  return { duration, delay, amplitude, drift };
}

type FloatingAreasProps = {
  areas: string[];
};

export function FloatingAreas({ areas }: FloatingAreasProps) {
  const reduce = useReducedMotion();

  return (
    <div className="flex flex-wrap gap-3 items-center">
      {areas.map((area, i) => {
        const { duration, delay, amplitude, drift } = floatPreset(i);

        const pill = (
          <div className="group flex items-center gap-2 px-5 py-3 bg-white border border-[#e8e8e8] rounded-full text-sm text-[#444] hover:border-[#2B4FCB] hover:text-[#2B4FCB] hover:shadow-md transition-colors cursor-default shadow-sm shadow-black/[0.03]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E84B1B] group-hover:bg-[#2B4FCB] transition-colors flex-shrink-0" />
            {area}
          </div>
        );

        if (reduce) {
          return (
            <div key={area}>
              {pill}
            </div>
          );
        }

        return (
          <motion.div
            key={area}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, delay: i * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <motion.div
              animate={{
                y: [0, -amplitude, 0, amplitude * 0.55, 0],
                x: [0, drift, 0, -drift * 0.5, 0],
              }}
              transition={{
                duration,
                delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {pill}
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}
