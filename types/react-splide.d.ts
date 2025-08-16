// types/react-splide.d.ts

// The existing Splide module declarations
declare module '@splidejs/react-splide' {
  import * as React from 'react';
  import type { Options, Splide as SplideInstance } from '@splidejs/splide';

  export interface SplideRef {
    splide?: SplideInstance;
  }

  export interface SplideProps extends React.HTMLAttributes<HTMLElement> {
    options?: Options;
    extensions?: Record<string, unknown>;
    hasTrack?: boolean;
    tag?: keyof JSX.IntrinsicElements;
    ariaLabel?: string;
    children?: React.ReactNode;
    className?: string;
    id?: string;
  }

  export const Splide: React.ForwardRefExoticComponent<
    SplideProps & React.RefAttributes<SplideRef>
  >;

  export interface SplideSlideProps extends React.HTMLAttributes<HTMLElement> {
    tag?: keyof JSX.IntrinsicElements;
    className?: string;
    children?: React.ReactNode;
  }

  export const SplideSlide: React.FC<SplideSlideProps>;
}
