import { Container, inject } from 'inversify';
import TAGS from '../constants/TAGS';
import {
  buildProviderModule,
  fluentProvide,
  provide,
} from 'inversify-binding-decorators';
import { interfaces, controller, httpGet, TYPE } from 'inversify-koa-utils';
import * as Router from 'koa-router';
const provideThrowable = function(identifier, name) {
  return fluentProvide(identifier)
    .whenTargetNamed(name)
    .done();
};

export {
  Container,
  buildProviderModule,
  interfaces,
  controller,
  TAGS,
  httpGet,
  TYPE,
  inject,
  provideThrowable,
  Router,
  provide,
};
