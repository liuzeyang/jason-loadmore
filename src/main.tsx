import './index.less'
import { FC, MutableRefObject, useEffect, } from "react";
import { injectLoadMore } from './components'

export interface LoadMoreProps {
  children: any;
  loadMore: (entry: IntersectionObserverEntry) => void;
  ref?: MutableRefObject<unknown>
  handleIntersectionObserver?: IntersectionObserverCallback;
  Options?: IntersectionObserverInit | undefined
  containerProps?: any
}

export const LoadMore: FC<LoadMoreProps>= ({ children, ref ,loadMore, handleIntersectionObserver, Options, containerProps = {}}) => {
  
  const defaultHandleIntersectionObserver = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      loadMore(entry)
    })
  }

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(handleIntersectionObserver ? handleIntersectionObserver : defaultHandleIntersectionObserver, Options)
    intersectionObserver.observe(document.querySelector('#jsaon-loadMore') as HTMLElement)
    if(ref){
      ref.current = intersectionObserver
    }
    return () => {
      intersectionObserver.disconnect()
    }
  }, [])
  
  return injectLoadMore(children, containerProps)
}
