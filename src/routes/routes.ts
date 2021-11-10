import { lazy, LazyExoticComponent } from "react";
import NoLazy from "../01-lazyload/pages/NoLazy";
//import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";


type JSXComponent = () => JSX.Element;

interface Route {
  path: string;
  component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
  children?: Route[];
}

//const LazyPage1 = lazy(() => import(/*webpackChunkName:"LazyPage1" */ "../01-lazyload/pages/LazyPage1"));
//const LazyLoad = lazy(() => import(/*webpackChunkName:"LazyPage1" */ "../01-lazyload/layout/LazyLayout"));

export const routes: Route[] = [
  {
    path: "/lazyload",
    component:  lazy(() => import(/*webpackChunkName:"LazyLayout" */ "../01-lazyload/layout/LazyLayout")),
    name: "LazyLoading Nested",
  },
  {
    path: "/no-lazy",
    component: NoLazy,
    name: "NoLazyLoading",
  },

];
