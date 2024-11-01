import type { PageQueryResult } from '../sanity.entity';

type PageComponentsArray = NonNullable<NonNullable<PageQueryResult>['components']>;
type PageComponents = PageComponentsArray extends Array<infer T> ? T : never;
export type PageComponentTypes = PageComponents['_type'];
export type PickPageComponent<T extends PageComponentTypes> = Extract<PageComponents, { _type: T } >;
