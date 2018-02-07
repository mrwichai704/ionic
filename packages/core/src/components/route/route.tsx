import { Component, Prop } from '@stencil/core';


@Component({
  tag: 'ion-route'
})
export class Route {

  @Prop() path: string;
  @Prop() component: string;
  @Prop() props: any = {};

}
