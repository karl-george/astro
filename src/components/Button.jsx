const Button = ({ children, doesGlow, containerClasName }) => {
  {
    if (doesGlow) {
      return (
        <button className='[background:linear-gradient(45deg,#03231E,#0A3D2D)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.green.600/.48)_80%,_theme(colors.lime.500)_86%,_theme(colors.lime.300)_90%,_theme(colors.lime.500)_94%,_theme(colors.green.600/.48))_border-box] rounded-3xl border border-transparent animate-border px-6 py-2 text-t3 hover:bg-accent hover:transition-all hover:duration-500'>
          {children}
        </button>
      );
    } else {
      return (
        <button className='px-6 py-3 rounded-3xl bg-accent text-t2 hover:bg-buttonGreen hover:text-t1 transition-colors duration-500'>
          {children}
        </button>
      );
    }
  }
};

export default Button;
