export type ObserverOptions = {
  root?: null | Element | Document | string;
  rootMargin?: string;
  threshold?: number | number[];
}

export const defaultOptions: ObserverOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.01
}
