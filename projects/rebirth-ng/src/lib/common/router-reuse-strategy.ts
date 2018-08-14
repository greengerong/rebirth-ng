import { RouteReuseStrategy, DetachedRouteHandle, ActivatedRouteSnapshot } from '@angular/router';

/**
 * Register on AppModule: {provide: RouteReuseStrategy, useClass: RebirthRouterReuseStrategy};
 * Put {data: {reusable: true}} on reuse router config.
 */
export class RebirthRouterReuseStrategy implements RouteReuseStrategy {

  handlers: { [key: string]: DetachedRouteHandle } = {};

  isReusable = (route: ActivatedRouteSnapshot): boolean => {
    return route.data && route.data.reusable;
  }

  getReusableKey = (route: ActivatedRouteSnapshot): string => {
    return route.url.join('/');
  }

  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return this.isReusable(route);
  }

  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
    this.handlers[this.getReusableKey(route)] = handle;
  }

  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return !!route.routeConfig && !!this.handlers[this.getReusableKey(route)];
  }

  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
    return this.isReusable(route) && route.routeConfig ? this.handlers[this.getReusableKey(route)] : null;
  }

  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    return future.routeConfig === curr.routeConfig && this.isReusable(future);
  }

}
