import React from 'react';

const CustomTextarea = React.forwardRef(({ id, ...props }, ref) => {
  return (
    <textarea
      id={id}
      ref={ref}
      rows={4}
      className="w-full resize-y rounded-xl border border-zinc-200 bg-white/50 px-4 py-3 text-zinc-900 placeholder-zinc-400 backdrop-blur-sm transition-all focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
      {...props}
    />
  );
});

CustomTextarea.displayName = 'CustomTextarea';

export default CustomTextarea;
