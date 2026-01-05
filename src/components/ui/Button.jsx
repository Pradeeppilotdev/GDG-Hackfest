const Button = ({ children, variant = "primary", onClick, className = "", href, target, rel }) => {
  const variants = {
    primary: "bg-brand-blue text-white hover:bg-blue-600",
    secondary: "bg-white text-brand-black hover:bg-gray-100",
    outline: "bg-transparent text-brand-black border-2 border-brand-black hover:bg-brand-black hover:text-white"
  };

  const baseClasses = `
    ${variants[variant]}
    font-bold font-heading
    border-2 border-black rounded-lg
    px-6 py-3
    shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]
    transition-all duration-150
    hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]
    hover:-translate-y-0.5 hover:-translate-x-0.5
    active:translate-x-[3px] active:translate-y-[3px]
    active:shadow-none
    ${className}
  `;

  // If href is provided, render as anchor tag
  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={baseClasses}
      >
        {children}
      </a>
    );
  }

  // Otherwise render as button
  return (
    <button
      onClick={onClick}
      className={baseClasses}
    >
      {children}
    </button>
  );
};

export default Button;
