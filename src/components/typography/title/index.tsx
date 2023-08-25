/* eslint-disable react/require-default-props */
import React, { ForwardedRef } from 'react';

import styled, { CSSProp } from 'styled-components';

import { theme } from '../../../configs/theme';
import screens from '../../../configs/theme/screens';

// import styled from 'styled-components';

interface BaseTitleProps extends React.HTMLAttributes<HTMLHeadElement> {
  level?: (typeof LEVELS)[number];
  color?: keyof (typeof theme)['colors'];
}

interface ResponsiveProps {
  xs?: CSSProp;
  sm?: CSSProp;
  md?: Partial<CSSStyleDeclaration>;
  lg?: Partial<CSSStyleDeclaration>;
}

export type TitleProps = ResponsiveProps & BaseTitleProps;

const LEVELS = [1, 2, 3, 4, 5, 6] as const;

// const COLORS = {};

// export interface TitleProps extends React.HTMLAttributes<HTMLHeadElement> {
//   level?: (typeof LEVELS)[number];
//   color?: keyof (typeof theme)['colors'];
// }

const Base = React.forwardRef((props: TitleProps, ref: ForwardedRef<HTMLHeadingElement>) => {
  const { level = 1, ...restProps } = props;
  let Component: keyof JSX.IntrinsicElements;

  if (LEVELS.includes(level)) {
    Component = `h${level}`;
  } else {
    Component = 'h1';
  }

  return <Component ref={ref} {...restProps} />;
});

const Title = styled(Base)<TitleProps>`
  color: ${props => {
    return props.theme.colors[props.color || 'gray-13'] || 'black';
  }};
  @media screen and (min-width: ${screens.xs}) {
    ${props => props.xs}
  }
  @media screen and (min-width: ${screens.sm}) {
    ${props => props.sm}
  }
`;

/* @media screen and (min-width: ${screens.xs}) {
    ${(props: any)=> props.xs}
  }
  @media screen and (min-width: ${screens.sm}) {
    ${({sm}: any)=> {
      console.log(sm)
      return sm
    }}
  }
  @media screen and (min-width: ${screens.md}) {
    ${({md}: any)=> md}
  } */

// const screenSizes = {
//   xs: '576px',
//   sm: '640px',
//   md: '768px',
//   lg: '1024px',
//   xl: '1280px',
//   '2xl': '1536px'
// };

// const exampleProps = {
//   level: 1,
//   color: 'primary',
//   sizes: {
//     xs: {},
//     sm: {},
//     md: {},
//     lg: {}
//   }
// };

export default Title;
