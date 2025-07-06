// SkillCard.tsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "./Icon";
import { IconInfo } from "../types/IconInfo";

interface SkillCardProps {
  title: string;
  icons: IconInfo[];
}

const SkillCard: React.FC<SkillCardProps> = ({ title, icons }) => {
  const [hoveredIcon, setHoveredIcon] = useState<IconInfo | null>(null);

  return (
    <div className="col-lg-3 col-md-6 col-12">
      <div className="services-thumb" onMouseLeave={() => setHoveredIcon(null)}>
        <div className="d-flex flex-wrap align-items-center border-bottom mb-4 pb-3">
          <h5 className="mb-0">{title}</h5>
        </div>

        <div className="skill-icon-animation-area">
          <AnimatePresence>
            {hoveredIcon && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="expanded-icon"
              >
                <Icon id={hoveredIcon.id} color={hoveredIcon.color} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="services-icon-wrap d-flex justify-content-start align-items-center">
          {icons.map((icon) => (
            <motion.div
              key={icon.id}
              whileHover={{ scale: 1.2, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="service-icon"
              onMouseEnter={() => setHoveredIcon(icon)}
            >
              <Icon id={icon.id} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
