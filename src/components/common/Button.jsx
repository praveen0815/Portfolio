import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  variant = 'primary', 
  href, 
  onClick, 
  className = "",
  icon: Icon,
  iconPosition = 'left',
  download = false,
  target,
  ...props 
}) => {
  const baseClasses = variant === 'primary' ? 'btn-primary' : 'btn-secondary';
  const classes = `${baseClasses} ${className} inline-flex items-center justify-center gap-2`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-5 h-5" />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className="w-5 h-5" />}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        download={download}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        {...props}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={classes}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {content}
    </motion.button>
  );
};

export default Button;
