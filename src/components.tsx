import { Children, cloneElement, createElement, ClassAttributes, DetailedReactHTMLElement, Key, ReactElement } from "react"

export const injectLoadMore = (children: DetailedReactHTMLElement<any, HTMLElement>, props: ClassAttributes<HTMLElement> | {className: string, key: Key, ref: unknown}): ReactElement => {
  if(Children.only(children)){
    return cloneElement(children, props, [children?.props?.children, <div id="jsaon-loadMore"></div>])
  }

  return createElement('div', {...props, className: `${'loadmore-container'}`}, children)
}
