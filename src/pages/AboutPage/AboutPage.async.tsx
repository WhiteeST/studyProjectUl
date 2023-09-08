import { lazy } from 'react';

export const AboutPageAsync = lazy(() => new Promise(resolve => {
  // @ts-ignore
  setTimeout(() => resolve(import(/* webpackChunkName: "AboutPage" */'./AboutPage')), 1500)
}));