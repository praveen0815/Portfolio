import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Section = ({ 
  id, 
  children, 
  className = "", 
  containerClassName = "",
  fullWidth = false 
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id={id}
      ref={ref}
      className={`py-20 md:py-28 lg:py-32 ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={fullWidth ? containerClassName : `container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl ${containerClassName}`}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default Section;
