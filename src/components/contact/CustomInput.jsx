import React from 'react';

const CustomInput = React.forwardRef(({ id, ...props }, ref) => {
  return (
    <input
      id={id}
      ref={ref}
      className="w-full rounded-xl border border-zinc-200 bg-white/50 px-4 py-3 text-zinc-900 placeholder-zinc-400 backdrop-blur-sm transition-all focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
      {...props}
    />
  );
});

CustomInput.displayName = 'CustomInput';

export default CustomInput;
