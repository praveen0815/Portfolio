import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const Card = ({ 
  children, 
  className = "", 
  hover = true,
  glow = false,
  ...props 
}) => {
  const { isDark } = useTheme();
  
  return (
    <motion.div
      className={`
        rounded-2xl p-6 
        ${isDark ? 'glass' : 'glass-light'}
        ${hover ? 'card-hover' : ''}
        ${glow ? 'glow-primary' : ''}
        ${className}
      `}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
