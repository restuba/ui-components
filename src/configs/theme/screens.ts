const screens = {
  // => @media (min-width: 480px) { ... }
  xs: '480px',
  // => @media (min-width: 640px) { ... }
  sm: '640px',
  // => @media (min-width: 768px) { ... }
  md: '768px',
  // => @media (min-width: 960px) { ... }
  lg: '960px',
  // => @media (min-width: 1024px) { ... }
  xl: '1024px',
  // => @media (min-width: 1280px) { ... }
  xxl: '1280px'
} as const;

export default screens;
