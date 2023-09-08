import { resolve } from 'path/posix';
import { lazy } from 'react';

export const MainPageAsync = lazy(() => new Promise(resolve => {
  // @ts-ignore
  setTimeout(() => resolve(import(/* webpackChunkName: "MainPage" */'./MainPage')), 1500)
}));