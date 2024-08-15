import { LazyExoticComponent } from 'react';
import { lazy } from 'react' 
import { NoLazy } from '../01-lazyload/pages/NoLazy';


// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

type JSXComponent = () => JSX.Element;

interface Route {
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent,
  name: string;
  children?: Route[];


}

// const LazyPage1 = lazy( () => import( /*webpackChunkName: "LazyPage1"*/'../01-lazyload/pages/LazyPage1'))

 



export const Routes: Route[] = [
    {
        path: '/lazyload',
        Component: lazy( () => import(/*webpackChunkName: "Lazylayout-mainPage"*/'../01-lazyload/layout/Lazylayout')),
        name: 'LazyLoading Nested'
    },
    {
        path: '/no-Lazy',
        Component: NoLazy,
        name: 'No lazy loading'
    },



   
]