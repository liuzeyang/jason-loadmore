import './index.less';
import { FC, MutableRefObject } from "react";
export interface LoadMoreProps {
    children: any;
    loadMore: (entry: IntersectionObserverEntry) => void;
    ref?: MutableRefObject<unknown>;
    handleIntersectionObserver?: IntersectionObserverCallback;
    Options?: IntersectionObserverInit | undefined;
    containerProps?: any;
}
export declare const LoadMore: FC<LoadMoreProps>;
