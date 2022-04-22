import { FC, Children, cloneElement, createElement, ClassAttributes, DetailedReactHTMLElement, Key, ReactElement } from "react"

export const injectLoadMore = (
  children: DetailedReactHTMLElement<any, HTMLElement>, 
  props: ClassAttributes<HTMLElement> | {className: string, key: Key, ref: unknown},
  LoadingComponent?: FC<any> | undefined
  ): ReactElement => {
  if(Children.only(children)){
    return cloneElement(children, props, [children?.props?.children, <div id="jsaon-loadMore">{LoadingComponent && LoadingComponent({})}</div>])
  }

  return createElement('div', {...props, className: `${'loadmore-container'}`}, [children, <div id="jsaon-loadMore">{LoadingComponent && LoadingComponent({})}</div>])
}
