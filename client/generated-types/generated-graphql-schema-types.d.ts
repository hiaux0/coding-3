/* tslint:disable */
/* eslint-disable */
import { GraphQLResolveInfo } from 'graphql';
/**
 * This file is auto-generated by graphql-schema-typescript
 * Please note that any changes in this file may be overwritten
 */


/*******************************
 *                             *
 *          TYPE DEFS          *
 *                             *
 *******************************/
export interface Query {
  feed: Array<Post>;
  post?: Post;
  postsByUser: Array<Post>;
  tarotCards: Array<TarotCard>;
  tarotPages: Array<TarotPage>;
  todoItems: Array<TodoItem>;
}

export interface Post {
  author?: User;
  id: string;
  published: boolean;
  title: string;
}

export interface User {
  email?: string;
  id: string;
  name: string;
  posts?: Array<Post>;
}

export const enum PostOrderByInput {
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  published_ASC = 'published_ASC',
  published_DESC = 'published_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

export interface PostWhereInput {
  AND?: Array<PostWhereInput>;
  author?: UserWhereInput;
  id?: string;
  id_contains?: string;
  id_ends_with?: string;
  id_gt?: string;
  id_gte?: string;
  id_in?: Array<string>;
  id_lt?: string;
  id_lte?: string;
  id_not?: string;
  id_not_contains?: string;
  id_not_ends_with?: string;
  id_not_in?: Array<string>;
  id_not_starts_with?: string;
  id_starts_with?: string;
  NOT?: Array<PostWhereInput>;
  OR?: Array<PostWhereInput>;
  published?: boolean;
  published_not?: boolean;
  title?: string;
  title_contains?: string;
  title_ends_with?: string;
  title_gt?: string;
  title_gte?: string;
  title_in?: Array<string>;
  title_lt?: string;
  title_lte?: string;
  title_not?: string;
  title_not_contains?: string;
  title_not_ends_with?: string;
  title_not_in?: Array<string>;
  title_not_starts_with?: string;
  title_starts_with?: string;
}

export interface UserWhereInput {
  AND?: Array<UserWhereInput>;
  email?: string;
  email_contains?: string;
  email_ends_with?: string;
  email_gt?: string;
  email_gte?: string;
  email_in?: Array<string>;
  email_lt?: string;
  email_lte?: string;
  email_not?: string;
  email_not_contains?: string;
  email_not_ends_with?: string;
  email_not_in?: Array<string>;
  email_not_starts_with?: string;
  email_starts_with?: string;
  id?: string;
  id_contains?: string;
  id_ends_with?: string;
  id_gt?: string;
  id_gte?: string;
  id_in?: Array<string>;
  id_lt?: string;
  id_lte?: string;
  id_not?: string;
  id_not_contains?: string;
  id_not_ends_with?: string;
  id_not_in?: Array<string>;
  id_not_starts_with?: string;
  id_starts_with?: string;
  name?: string;
  name_contains?: string;
  name_ends_with?: string;
  name_gt?: string;
  name_gte?: string;
  name_in?: Array<string>;
  name_lt?: string;
  name_lte?: string;
  name_not?: string;
  name_not_contains?: string;
  name_not_ends_with?: string;
  name_not_in?: Array<string>;
  name_not_starts_with?: string;
  name_starts_with?: string;
  NOT?: Array<UserWhereInput>;
  OR?: Array<UserWhereInput>;
  posts_every?: PostWhereInput;
  posts_none?: PostWhereInput;
  posts_some?: PostWhereInput;
}

export interface PostWhereUniqueInput {
  id?: string;
}

export const enum TarotCardOrderByInput {
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

export interface TarotCardWhereInput {
  AND?: Array<TarotCardWhereInput>;
  arcana?: TarotArcanaWhereInput;
  explanation_every?: TarotExplanationWhereInput;
  explanation_none?: TarotExplanationWhereInput;
  explanation_some?: TarotExplanationWhereInput;
  id?: string;
  id_contains?: string;
  id_ends_with?: string;
  id_gt?: string;
  id_gte?: string;
  id_in?: Array<string>;
  id_lt?: string;
  id_lte?: string;
  id_not?: string;
  id_not_contains?: string;
  id_not_ends_with?: string;
  id_not_in?: Array<string>;
  id_not_starts_with?: string;
  id_starts_with?: string;
  name?: string;
  name_contains?: string;
  name_ends_with?: string;
  name_gt?: string;
  name_gte?: string;
  name_in?: Array<string>;
  name_lt?: string;
  name_lte?: string;
  name_not?: string;
  name_not_contains?: string;
  name_not_ends_with?: string;
  name_not_in?: Array<string>;
  name_not_starts_with?: string;
  name_starts_with?: string;
  NOT?: Array<TarotCardWhereInput>;
  OR?: Array<TarotCardWhereInput>;
}

export interface TarotArcanaWhereInput {
  AND?: Array<TarotArcanaWhereInput>;
  family?: string;
  family_contains?: string;
  family_ends_with?: string;
  family_gt?: string;
  family_gte?: string;
  family_in?: Array<string>;
  family_lt?: string;
  family_lte?: string;
  family_not?: string;
  family_not_contains?: string;
  family_not_ends_with?: string;
  family_not_in?: Array<string>;
  family_not_starts_with?: string;
  family_starts_with?: string;
  id?: string;
  id_contains?: string;
  id_ends_with?: string;
  id_gt?: string;
  id_gte?: string;
  id_in?: Array<string>;
  id_lt?: string;
  id_lte?: string;
  id_not?: string;
  id_not_contains?: string;
  id_not_ends_with?: string;
  id_not_in?: Array<string>;
  id_not_starts_with?: string;
  id_starts_with?: string;
  NOT?: Array<TarotArcanaWhereInput>;
  number?: number;
  number_gt?: number;
  number_gte?: number;
  number_in?: Array<number>;
  number_lt?: number;
  number_lte?: number;
  number_not?: number;
  number_not_in?: Array<number>;
  OR?: Array<TarotArcanaWhereInput>;
}

export interface TarotExplanationWhereInput {
  AND?: Array<TarotExplanationWhereInput>;
  cardName?: TarotCardWhereInput;
  content?: string;
  content_contains?: string;
  content_ends_with?: string;
  content_gt?: string;
  content_gte?: string;
  content_in?: Array<string>;
  content_lt?: string;
  content_lte?: string;
  content_not?: string;
  content_not_contains?: string;
  content_not_ends_with?: string;
  content_not_in?: Array<string>;
  content_not_starts_with?: string;
  content_starts_with?: string;
  id?: string;
  id_contains?: string;
  id_ends_with?: string;
  id_gt?: string;
  id_gte?: string;
  id_in?: Array<string>;
  id_lt?: string;
  id_lte?: string;
  id_not?: string;
  id_not_contains?: string;
  id_not_ends_with?: string;
  id_not_in?: Array<string>;
  id_not_starts_with?: string;
  id_starts_with?: string;
  NOT?: Array<TarotExplanationWhereInput>;
  OR?: Array<TarotExplanationWhereInput>;
  source?: string;
  source_contains?: string;
  source_ends_with?: string;
  source_gt?: string;
  source_gte?: string;
  source_in?: Array<string>;
  source_lt?: string;
  source_lte?: string;
  source_not?: string;
  source_not_contains?: string;
  source_not_ends_with?: string;
  source_not_in?: Array<string>;
  source_not_starts_with?: string;
  source_starts_with?: string;
}

export interface TarotCard {
  arcana?: TarotArcana;
  explanation?: Array<TarotExplanation>;
  id: string;
  keyWords: Array<string>;
  name: string;
}

export interface TarotArcana {
  family?: string;
  id: string;
  number: number;
}

export const enum TarotExplanationOrderByInput {
  content_ASC = 'content_ASC',
  content_DESC = 'content_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  source_ASC = 'source_ASC',
  source_DESC = 'source_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

export interface TarotExplanation {
  cardName?: TarotCard;
  content?: string;
  id: string;
  source: string;
}

export const enum TarotPageOrderByInput {
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

export interface TarotPageWhereInput {
  AND?: Array<TarotPageWhereInput>;
  id?: string;
  id_contains?: string;
  id_ends_with?: string;
  id_gt?: string;
  id_gte?: string;
  id_in?: Array<string>;
  id_lt?: string;
  id_lte?: string;
  id_not?: string;
  id_not_contains?: string;
  id_not_ends_with?: string;
  id_not_in?: Array<string>;
  id_not_starts_with?: string;
  id_starts_with?: string;
  NOT?: Array<TarotPageWhereInput>;
  OR?: Array<TarotPageWhereInput>;
}

export interface TarotPage {
  id: string;
  tarotFilterKeyWords: Array<string>;
}

export const enum TodoItemOrderByInput {
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  done_ASC = 'done_ASC',
  done_DESC = 'done_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  text_ASC = 'text_ASC',
  text_DESC = 'text_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

export interface TodoItemWhereInput {
  AND?: Array<TodoItemWhereInput>;
  done?: boolean;
  done_not?: boolean;
  id?: string;
  id_contains?: string;
  id_ends_with?: string;
  id_gt?: string;
  id_gte?: string;
  id_in?: Array<string>;
  id_lt?: string;
  id_lte?: string;
  id_not?: string;
  id_not_contains?: string;
  id_not_ends_with?: string;
  id_not_in?: Array<string>;
  id_not_starts_with?: string;
  id_starts_with?: string;
  NOT?: Array<TodoItemWhereInput>;
  OR?: Array<TodoItemWhereInput>;
  text?: string;
  text_contains?: string;
  text_ends_with?: string;
  text_gt?: string;
  text_gte?: string;
  text_in?: Array<string>;
  text_lt?: string;
  text_lte?: string;
  text_not?: string;
  text_not_contains?: string;
  text_not_ends_with?: string;
  text_not_in?: Array<string>;
  text_not_starts_with?: string;
  text_starts_with?: string;
}

export interface TodoItem {
  done?: boolean;
  id: string;
  text: string;
}

export interface Mutation {
  createDraft: Post;
  createTarotCard: TarotCard;
  createTarotExplanation: TarotExplanation;
  createTodoItem: TodoItem;
  createUser: User;
  deletePost?: Post;
  deleteTarotCard?: TarotCard;
  deleteTodoItem?: TodoItem;
  publish?: Post;
  updateTarotCard?: TarotCard;
  updateTarotExplanation?: TarotExplanation;
  updateTarotPage?: TarotPage;
  updateTodoItem?: TodoItem;
}

export interface TarotCardCreateInput {
  arcana?: TarotArcanaCreateOneInput;
  explanation?: TarotExplanationCreateManyWithoutCardNameInput;
  id?: string;
  keyWords?: TarotCardCreatekeyWordsInput;
  name: string;
}

export interface TarotArcanaCreateOneInput {
  connect?: TarotArcanaWhereUniqueInput;
  create?: TarotArcanaCreateInput;
}

export interface TarotArcanaWhereUniqueInput {
  id?: string;
}

export interface TarotArcanaCreateInput {
  family?: string;
  id?: string;
  number: number;
}

export interface TarotExplanationCreateManyWithoutCardNameInput {
  connect?: Array<TarotExplanationWhereUniqueInput>;
  create?: Array<TarotExplanationCreateWithoutCardNameInput>;
}

export interface TarotExplanationWhereUniqueInput {
  id?: string;
}

export interface TarotExplanationCreateWithoutCardNameInput {
  content?: string;
  id?: string;
  source: string;
}

export interface TarotCardCreatekeyWordsInput {
  set?: Array<string>;
}

export interface TarotExplanationCreateInput {
  cardName?: TarotCardCreateOneWithoutExplanationInput;
  content?: string;
  id?: string;
  source: string;
}

export interface TarotCardCreateOneWithoutExplanationInput {
  connect?: TarotCardWhereUniqueInput;
  create?: TarotCardCreateWithoutExplanationInput;
}

export interface TarotCardWhereUniqueInput {
  id?: string;
}

export interface TarotCardCreateWithoutExplanationInput {
  arcana?: TarotArcanaCreateOneInput;
  id?: string;
  keyWords?: TarotCardCreatekeyWordsInput;
  name: string;
}

export interface TodoItemCreateInput {
  done?: boolean;
  id?: string;
  text: string;
}

export interface UserCreateInput {
  email?: string;
  id?: string;
  name: string;
  posts?: PostCreateManyWithoutAuthorInput;
}

export interface PostCreateManyWithoutAuthorInput {
  connect?: Array<PostWhereUniqueInput>;
  create?: Array<PostCreateWithoutAuthorInput>;
}

export interface PostCreateWithoutAuthorInput {
  id?: string;
  published?: boolean;
  title: string;
}

export interface TodoItemWhereUniqueInput {
  id?: string;
}

export interface TarotCardUpdateInput {
  arcana?: TarotArcanaUpdateOneInput;
  explanation?: TarotExplanationUpdateManyWithoutCardNameInput;
  keyWords?: TarotCardUpdatekeyWordsInput;
  name?: string;
}

export interface TarotArcanaUpdateOneInput {
  connect?: TarotArcanaWhereUniqueInput;
  create?: TarotArcanaCreateInput;
  delete?: boolean;
  disconnect?: boolean;
  update?: TarotArcanaUpdateDataInput;
  upsert?: TarotArcanaUpsertNestedInput;
}

export interface TarotArcanaUpdateDataInput {
  family?: string;
  number?: number;
}

export interface TarotArcanaUpsertNestedInput {
  create: TarotArcanaCreateInput;
  update: TarotArcanaUpdateDataInput;
}

export interface TarotExplanationUpdateManyWithoutCardNameInput {
  connect?: Array<TarotExplanationWhereUniqueInput>;
  create?: Array<TarotExplanationCreateWithoutCardNameInput>;
  delete?: Array<TarotExplanationWhereUniqueInput>;
  deleteMany?: Array<TarotExplanationScalarWhereInput>;
  disconnect?: Array<TarotExplanationWhereUniqueInput>;
  set?: Array<TarotExplanationWhereUniqueInput>;
  update?: Array<TarotExplanationUpdateWithWhereUniqueWithoutCardNameInput>;
  updateMany?: Array<TarotExplanationUpdateManyWithWhereNestedInput>;
  upsert?: Array<TarotExplanationUpsertWithWhereUniqueWithoutCardNameInput>;
}

export interface TarotExplanationScalarWhereInput {
  AND?: Array<TarotExplanationScalarWhereInput>;
  content?: string;
  content_contains?: string;
  content_ends_with?: string;
  content_gt?: string;
  content_gte?: string;
  content_in?: Array<string>;
  content_lt?: string;
  content_lte?: string;
  content_not?: string;
  content_not_contains?: string;
  content_not_ends_with?: string;
  content_not_in?: Array<string>;
  content_not_starts_with?: string;
  content_starts_with?: string;
  id?: string;
  id_contains?: string;
  id_ends_with?: string;
  id_gt?: string;
  id_gte?: string;
  id_in?: Array<string>;
  id_lt?: string;
  id_lte?: string;
  id_not?: string;
  id_not_contains?: string;
  id_not_ends_with?: string;
  id_not_in?: Array<string>;
  id_not_starts_with?: string;
  id_starts_with?: string;
  NOT?: Array<TarotExplanationScalarWhereInput>;
  OR?: Array<TarotExplanationScalarWhereInput>;
  source?: string;
  source_contains?: string;
  source_ends_with?: string;
  source_gt?: string;
  source_gte?: string;
  source_in?: Array<string>;
  source_lt?: string;
  source_lte?: string;
  source_not?: string;
  source_not_contains?: string;
  source_not_ends_with?: string;
  source_not_in?: Array<string>;
  source_not_starts_with?: string;
  source_starts_with?: string;
}

export interface TarotExplanationUpdateWithWhereUniqueWithoutCardNameInput {
  data: TarotExplanationUpdateWithoutCardNameDataInput;
  where: TarotExplanationWhereUniqueInput;
}

export interface TarotExplanationUpdateWithoutCardNameDataInput {
  content?: string;
  source?: string;
}

export interface TarotExplanationUpdateManyWithWhereNestedInput {
  data: TarotExplanationUpdateManyDataInput;
  where: TarotExplanationScalarWhereInput;
}

export interface TarotExplanationUpdateManyDataInput {
  content?: string;
  source?: string;
}

export interface TarotExplanationUpsertWithWhereUniqueWithoutCardNameInput {
  create: TarotExplanationCreateWithoutCardNameInput;
  update: TarotExplanationUpdateWithoutCardNameDataInput;
  where: TarotExplanationWhereUniqueInput;
}

export interface TarotCardUpdatekeyWordsInput {
  set?: Array<string>;
}

export interface TarotExplanationUpdateInput {
  cardName?: TarotCardUpdateOneWithoutExplanationInput;
  content?: string;
  source?: string;
}

export interface TarotCardUpdateOneWithoutExplanationInput {
  connect?: TarotCardWhereUniqueInput;
  create?: TarotCardCreateWithoutExplanationInput;
  delete?: boolean;
  disconnect?: boolean;
  update?: TarotCardUpdateWithoutExplanationDataInput;
  upsert?: TarotCardUpsertWithoutExplanationInput;
}

export interface TarotCardUpdateWithoutExplanationDataInput {
  arcana?: TarotArcanaUpdateOneInput;
  keyWords?: TarotCardUpdatekeyWordsInput;
  name?: string;
}

export interface TarotCardUpsertWithoutExplanationInput {
  create: TarotCardCreateWithoutExplanationInput;
  update: TarotCardUpdateWithoutExplanationDataInput;
}

export interface TarotPageUpdateInput {
  tarotFilterKeyWords?: TarotPageUpdatetarotFilterKeyWordsInput;
}

export interface TarotPageUpdatetarotFilterKeyWordsInput {
  set?: Array<string>;
}

export interface TarotPageWhereUniqueInput {
  id?: string;
}

export interface TodoItemUpdateInput {
  done?: boolean;
  text?: string;
}

/*********************************
 *                               *
 *         TYPE RESOLVERS        *
 *                               *
 *********************************/
/**
 * This interface define the shape of your resolver
 * Note that this type is designed to be compatible with graphql-tools resolvers
 * However, you can still use other generated interfaces to make your resolver type-safed
 */
export interface Resolver {
  Query?: QueryTypeResolver;
  Post?: PostTypeResolver;
  User?: UserTypeResolver;
  TarotCard?: TarotCardTypeResolver;
  TarotArcana?: TarotArcanaTypeResolver;
  TarotExplanation?: TarotExplanationTypeResolver;
  TarotPage?: TarotPageTypeResolver;
  TodoItem?: TodoItemTypeResolver;
  Mutation?: MutationTypeResolver;
}
export interface QueryTypeResolver<TParent = any> {
  feed?: QueryToFeedResolver<TParent>;
  post?: QueryToPostResolver<TParent>;
  postsByUser?: QueryToPostsByUserResolver<TParent>;
  tarotCards?: QueryToTarotCardsResolver<TParent>;
  tarotPages?: QueryToTarotPagesResolver<TParent>;
  todoItems?: QueryToTodoItemsResolver<TParent>;
}

export interface QueryToFeedResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface QueryToPostArgs {
  where: PostWhereUniqueInput;
}
export interface QueryToPostResolver<TParent = any, TResult = any> {
  (parent: TParent, args: QueryToPostArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface QueryToPostsByUserArgs {
  email?: string;
}
export interface QueryToPostsByUserResolver<TParent = any, TResult = any> {
  (parent: TParent, args: QueryToPostsByUserArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface QueryToTarotCardsArgs {
  after?: string;
  before?: string;
  first?: number;
  last?: number;
  orderBy?: TarotCardOrderByInput;
  skip?: number;
  where?: TarotCardWhereInput;
}
export interface QueryToTarotCardsResolver<TParent = any, TResult = any> {
  (parent: TParent, args: QueryToTarotCardsArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface QueryToTarotPagesArgs {
  after?: string;
  before?: string;
  first?: number;
  last?: number;
  orderBy?: TarotPageOrderByInput;
  skip?: number;
  where?: TarotPageWhereInput;
}
export interface QueryToTarotPagesResolver<TParent = any, TResult = any> {
  (parent: TParent, args: QueryToTarotPagesArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface QueryToTodoItemsArgs {
  after?: string;
  before?: string;
  first?: number;
  last?: number;
  orderBy?: TodoItemOrderByInput;
  skip?: number;
  where?: TodoItemWhereInput;
}
export interface QueryToTodoItemsResolver<TParent = any, TResult = any> {
  (parent: TParent, args: QueryToTodoItemsArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface PostTypeResolver<TParent = any> {
  author?: PostToAuthorResolver<TParent>;
  id?: PostToIdResolver<TParent>;
  published?: PostToPublishedResolver<TParent>;
  title?: PostToTitleResolver<TParent>;
}

export interface PostToAuthorResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface PostToIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface PostToPublishedResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface PostToTitleResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface UserTypeResolver<TParent = any> {
  email?: UserToEmailResolver<TParent>;
  id?: UserToIdResolver<TParent>;
  name?: UserToNameResolver<TParent>;
  posts?: UserToPostsResolver<TParent>;
}

export interface UserToEmailResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface UserToIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface UserToNameResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface UserToPostsArgs {
  after?: string;
  before?: string;
  first?: number;
  last?: number;
  orderBy?: PostOrderByInput;
  skip?: number;
  where?: PostWhereInput;
}
export interface UserToPostsResolver<TParent = any, TResult = any> {
  (parent: TParent, args: UserToPostsArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface TarotCardTypeResolver<TParent = any> {
  arcana?: TarotCardToArcanaResolver<TParent>;
  explanation?: TarotCardToExplanationResolver<TParent>;
  id?: TarotCardToIdResolver<TParent>;
  keyWords?: TarotCardToKeyWordsResolver<TParent>;
  name?: TarotCardToNameResolver<TParent>;
}

export interface TarotCardToArcanaResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface TarotCardToExplanationArgs {
  after?: string;
  before?: string;
  first?: number;
  last?: number;
  orderBy?: TarotExplanationOrderByInput;
  skip?: number;
  where?: TarotExplanationWhereInput;
}
export interface TarotCardToExplanationResolver<TParent = any, TResult = any> {
  (parent: TParent, args: TarotCardToExplanationArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface TarotCardToIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface TarotCardToKeyWordsResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface TarotCardToNameResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface TarotArcanaTypeResolver<TParent = any> {
  family?: TarotArcanaToFamilyResolver<TParent>;
  id?: TarotArcanaToIdResolver<TParent>;
  number?: TarotArcanaToNumberResolver<TParent>;
}

export interface TarotArcanaToFamilyResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface TarotArcanaToIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface TarotArcanaToNumberResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface TarotExplanationTypeResolver<TParent = any> {
  cardName?: TarotExplanationToCardNameResolver<TParent>;
  content?: TarotExplanationToContentResolver<TParent>;
  id?: TarotExplanationToIdResolver<TParent>;
  source?: TarotExplanationToSourceResolver<TParent>;
}

export interface TarotExplanationToCardNameResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface TarotExplanationToContentResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface TarotExplanationToIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface TarotExplanationToSourceResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface TarotPageTypeResolver<TParent = any> {
  id?: TarotPageToIdResolver<TParent>;
  tarotFilterKeyWords?: TarotPageToTarotFilterKeyWordsResolver<TParent>;
}

export interface TarotPageToIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface TarotPageToTarotFilterKeyWordsResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface TodoItemTypeResolver<TParent = any> {
  done?: TodoItemToDoneResolver<TParent>;
  id?: TodoItemToIdResolver<TParent>;
  text?: TodoItemToTextResolver<TParent>;
}

export interface TodoItemToDoneResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface TodoItemToIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface TodoItemToTextResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MutationTypeResolver<TParent = any> {
  createDraft?: MutationToCreateDraftResolver<TParent>;
  createTarotCard?: MutationToCreateTarotCardResolver<TParent>;
  createTarotExplanation?: MutationToCreateTarotExplanationResolver<TParent>;
  createTodoItem?: MutationToCreateTodoItemResolver<TParent>;
  createUser?: MutationToCreateUserResolver<TParent>;
  deletePost?: MutationToDeletePostResolver<TParent>;
  deleteTarotCard?: MutationToDeleteTarotCardResolver<TParent>;
  deleteTodoItem?: MutationToDeleteTodoItemResolver<TParent>;
  publish?: MutationToPublishResolver<TParent>;
  updateTarotCard?: MutationToUpdateTarotCardResolver<TParent>;
  updateTarotExplanation?: MutationToUpdateTarotExplanationResolver<TParent>;
  updateTarotPage?: MutationToUpdateTarotPageResolver<TParent>;
  updateTodoItem?: MutationToUpdateTodoItemResolver<TParent>;
}

export interface MutationToCreateDraftArgs {
  authorId?: string;
  title?: string;
}
export interface MutationToCreateDraftResolver<TParent = any, TResult = any> {
  (parent: TParent, args: MutationToCreateDraftArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MutationToCreateTarotCardArgs {
  data: TarotCardCreateInput;
}
export interface MutationToCreateTarotCardResolver<TParent = any, TResult = any> {
  (parent: TParent, args: MutationToCreateTarotCardArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MutationToCreateTarotExplanationArgs {
  data: TarotExplanationCreateInput;
}
export interface MutationToCreateTarotExplanationResolver<TParent = any, TResult = any> {
  (parent: TParent, args: MutationToCreateTarotExplanationArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MutationToCreateTodoItemArgs {
  data: TodoItemCreateInput;
}
export interface MutationToCreateTodoItemResolver<TParent = any, TResult = any> {
  (parent: TParent, args: MutationToCreateTodoItemArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MutationToCreateUserArgs {
  data: UserCreateInput;
}
export interface MutationToCreateUserResolver<TParent = any, TResult = any> {
  (parent: TParent, args: MutationToCreateUserArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MutationToDeletePostArgs {
  where: PostWhereUniqueInput;
}
export interface MutationToDeletePostResolver<TParent = any, TResult = any> {
  (parent: TParent, args: MutationToDeletePostArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MutationToDeleteTarotCardArgs {
  where: TarotCardWhereUniqueInput;
}
export interface MutationToDeleteTarotCardResolver<TParent = any, TResult = any> {
  (parent: TParent, args: MutationToDeleteTarotCardArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MutationToDeleteTodoItemArgs {
  where: TodoItemWhereUniqueInput;
}
export interface MutationToDeleteTodoItemResolver<TParent = any, TResult = any> {
  (parent: TParent, args: MutationToDeleteTodoItemArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MutationToPublishArgs {
  id?: string;
}
export interface MutationToPublishResolver<TParent = any, TResult = any> {
  (parent: TParent, args: MutationToPublishArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MutationToUpdateTarotCardArgs {
  data: TarotCardUpdateInput;
  where: TarotCardWhereUniqueInput;
}
export interface MutationToUpdateTarotCardResolver<TParent = any, TResult = any> {
  (parent: TParent, args: MutationToUpdateTarotCardArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MutationToUpdateTarotExplanationArgs {
  data: TarotExplanationUpdateInput;
  where: TarotExplanationWhereUniqueInput;
}
export interface MutationToUpdateTarotExplanationResolver<TParent = any, TResult = any> {
  (parent: TParent, args: MutationToUpdateTarotExplanationArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MutationToUpdateTarotPageArgs {
  data: TarotPageUpdateInput;
  where: TarotPageWhereUniqueInput;
}
export interface MutationToUpdateTarotPageResolver<TParent = any, TResult = any> {
  (parent: TParent, args: MutationToUpdateTarotPageArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MutationToUpdateTodoItemArgs {
  data: TodoItemUpdateInput;
  where: TodoItemWhereUniqueInput;
}
export interface MutationToUpdateTodoItemResolver<TParent = any, TResult = any> {
  (parent: TParent, args: MutationToUpdateTodoItemArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export as namespace gqlt;
