const textSize = {
  // key : ['font-size', 'line-height']
  'text-2xs': ['0.625rem', '0.75rem'], // ['10px', '12px']
  'text-xs': ['0.75rem', '1rem'], // ['12px' ,'16px']
  'text-sm': ['0.875rem', '1.25rem'], // ['14px' ,'20px']
  'text-base': ['1rem', '1.5rem'], // ['16px' ,'24px']
  'text-lg': ['1.125rem', '1.75rem'], // ['18px' ,'28px']
  'text-xl': ['1.25rem', '1.75rem'], // ['20px' ,'28px']
  'text-2xl': ['1.5rem', '2rem'], // ['24px' ,'32px']
  'text-3xl': ['1.875rem', '2.25rem'], // ['30px' ,'36px']
  'text-4xl': ['2.25rem', '2.5rem'], // ['36px' ,'40px']
  'text-5xl': ['3rem', '1'], // ['48px' ,1]
  'text-6xl': ['3.75rem', '1'], // ['60px' ,1]
  'text-7xl': ['4.5rem', '1'], // ['72px' ,1]
  'text-8xl': ['6rem', '1'], // ['96px' ,1]
  'text-9xl': ['8rem', '1'] // ['128px' ,1]
} as const;

export default textSize;
