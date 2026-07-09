
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model projects
 * 
 */
export type projects = $Result.DefaultSelection<Prisma.$projectsPayload>
/**
 * Model sources
 * 
 */
export type sources = $Result.DefaultSelection<Prisma.$sourcesPayload>
/**
 * Model projectStack
 * 
 */
export type projectStack = $Result.DefaultSelection<Prisma.$projectStackPayload>
/**
 * Model types
 * 
 */
export type types = $Result.DefaultSelection<Prisma.$typesPayload>
/**
 * Model education
 * 
 */
export type education = $Result.DefaultSelection<Prisma.$educationPayload>
/**
 * Model education_description
 * 
 */
export type education_description = $Result.DefaultSelection<Prisma.$education_descriptionPayload>
/**
 * Model experience
 * 
 */
export type experience = $Result.DefaultSelection<Prisma.$experiencePayload>
/**
 * Model experience_description
 * 
 */
export type experience_description = $Result.DefaultSelection<Prisma.$experience_descriptionPayload>
/**
 * Model achievements
 * 
 */
export type achievements = $Result.DefaultSelection<Prisma.$achievementsPayload>
/**
 * Model softSkills
 * 
 */
export type softSkills = $Result.DefaultSelection<Prisma.$softSkillsPayload>
/**
 * Model frontendSkills
 * 
 */
export type frontendSkills = $Result.DefaultSelection<Prisma.$frontendSkillsPayload>
/**
 * Model backendSkills
 * 
 */
export type backendSkills = $Result.DefaultSelection<Prisma.$backendSkillsPayload>
/**
 * Model techStack
 * 
 */
export type techStack = $Result.DefaultSelection<Prisma.$techStackPayload>
/**
 * Model techStackType
 * 
 */
export type techStackType = $Result.DefaultSelection<Prisma.$techStackTypePayload>
/**
 * Model personal
 * 
 */
export type personal = $Result.DefaultSelection<Prisma.$personalPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Types: {
  development: 'development',
  automation: 'automation',
  mockup: 'mockup'
};

export type Types = (typeof Types)[keyof typeof Types]


export const devTypes: {
  frontend: 'frontend',
  backend: 'backend',
  databaseandserver: 'databaseandserver',
  developmenttools: 'developmenttools',
  templateanddesign: 'templateanddesign'
};

export type devTypes = (typeof devTypes)[keyof typeof devTypes]

}

export type Types = $Enums.Types

export const Types: typeof $Enums.Types

export type devTypes = $Enums.devTypes

export const devTypes: typeof $Enums.devTypes

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projects`: Exposes CRUD operations for the **projects** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.projects.findMany()
    * ```
    */
  get projects(): Prisma.projectsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sources`: Exposes CRUD operations for the **sources** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sources
    * const sources = await prisma.sources.findMany()
    * ```
    */
  get sources(): Prisma.sourcesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectStack`: Exposes CRUD operations for the **projectStack** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectStacks
    * const projectStacks = await prisma.projectStack.findMany()
    * ```
    */
  get projectStack(): Prisma.projectStackDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.types`: Exposes CRUD operations for the **types** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Types
    * const types = await prisma.types.findMany()
    * ```
    */
  get types(): Prisma.typesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.education`: Exposes CRUD operations for the **education** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Educations
    * const educations = await prisma.education.findMany()
    * ```
    */
  get education(): Prisma.educationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.education_description`: Exposes CRUD operations for the **education_description** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Education_descriptions
    * const education_descriptions = await prisma.education_description.findMany()
    * ```
    */
  get education_description(): Prisma.education_descriptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.experience`: Exposes CRUD operations for the **experience** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Experiences
    * const experiences = await prisma.experience.findMany()
    * ```
    */
  get experience(): Prisma.experienceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.experience_description`: Exposes CRUD operations for the **experience_description** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Experience_descriptions
    * const experience_descriptions = await prisma.experience_description.findMany()
    * ```
    */
  get experience_description(): Prisma.experience_descriptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.achievements`: Exposes CRUD operations for the **achievements** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Achievements
    * const achievements = await prisma.achievements.findMany()
    * ```
    */
  get achievements(): Prisma.achievementsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.softSkills`: Exposes CRUD operations for the **softSkills** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SoftSkills
    * const softSkills = await prisma.softSkills.findMany()
    * ```
    */
  get softSkills(): Prisma.softSkillsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.frontendSkills`: Exposes CRUD operations for the **frontendSkills** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FrontendSkills
    * const frontendSkills = await prisma.frontendSkills.findMany()
    * ```
    */
  get frontendSkills(): Prisma.frontendSkillsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.backendSkills`: Exposes CRUD operations for the **backendSkills** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BackendSkills
    * const backendSkills = await prisma.backendSkills.findMany()
    * ```
    */
  get backendSkills(): Prisma.backendSkillsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.techStack`: Exposes CRUD operations for the **techStack** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TechStacks
    * const techStacks = await prisma.techStack.findMany()
    * ```
    */
  get techStack(): Prisma.techStackDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.techStackType`: Exposes CRUD operations for the **techStackType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TechStackTypes
    * const techStackTypes = await prisma.techStackType.findMany()
    * ```
    */
  get techStackType(): Prisma.techStackTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.personal`: Exposes CRUD operations for the **personal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Personals
    * const personals = await prisma.personal.findMany()
    * ```
    */
  get personal(): Prisma.personalDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    users: 'users',
    projects: 'projects',
    sources: 'sources',
    projectStack: 'projectStack',
    types: 'types',
    education: 'education',
    education_description: 'education_description',
    experience: 'experience',
    experience_description: 'experience_description',
    achievements: 'achievements',
    softSkills: 'softSkills',
    frontendSkills: 'frontendSkills',
    backendSkills: 'backendSkills',
    techStack: 'techStack',
    techStackType: 'techStackType',
    personal: 'personal'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "users" | "projects" | "sources" | "projectStack" | "types" | "education" | "education_description" | "experience" | "experience_description" | "achievements" | "softSkills" | "frontendSkills" | "backendSkills" | "techStack" | "techStackType" | "personal"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      projects: {
        payload: Prisma.$projectsPayload<ExtArgs>
        fields: Prisma.projectsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.projectsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.projectsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          findFirst: {
            args: Prisma.projectsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.projectsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          findMany: {
            args: Prisma.projectsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>[]
          }
          create: {
            args: Prisma.projectsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          createMany: {
            args: Prisma.projectsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.projectsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>[]
          }
          delete: {
            args: Prisma.projectsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          update: {
            args: Prisma.projectsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          deleteMany: {
            args: Prisma.projectsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.projectsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.projectsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>[]
          }
          upsert: {
            args: Prisma.projectsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          aggregate: {
            args: Prisma.ProjectsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjects>
          }
          groupBy: {
            args: Prisma.projectsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectsGroupByOutputType>[]
          }
          count: {
            args: Prisma.projectsCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectsCountAggregateOutputType> | number
          }
        }
      }
      sources: {
        payload: Prisma.$sourcesPayload<ExtArgs>
        fields: Prisma.sourcesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sourcesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sourcesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sourcesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sourcesPayload>
          }
          findFirst: {
            args: Prisma.sourcesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sourcesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sourcesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sourcesPayload>
          }
          findMany: {
            args: Prisma.sourcesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sourcesPayload>[]
          }
          create: {
            args: Prisma.sourcesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sourcesPayload>
          }
          createMany: {
            args: Prisma.sourcesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.sourcesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sourcesPayload>[]
          }
          delete: {
            args: Prisma.sourcesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sourcesPayload>
          }
          update: {
            args: Prisma.sourcesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sourcesPayload>
          }
          deleteMany: {
            args: Prisma.sourcesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sourcesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.sourcesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sourcesPayload>[]
          }
          upsert: {
            args: Prisma.sourcesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sourcesPayload>
          }
          aggregate: {
            args: Prisma.SourcesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSources>
          }
          groupBy: {
            args: Prisma.sourcesGroupByArgs<ExtArgs>
            result: $Utils.Optional<SourcesGroupByOutputType>[]
          }
          count: {
            args: Prisma.sourcesCountArgs<ExtArgs>
            result: $Utils.Optional<SourcesCountAggregateOutputType> | number
          }
        }
      }
      projectStack: {
        payload: Prisma.$projectStackPayload<ExtArgs>
        fields: Prisma.projectStackFieldRefs
        operations: {
          findUnique: {
            args: Prisma.projectStackFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectStackPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.projectStackFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectStackPayload>
          }
          findFirst: {
            args: Prisma.projectStackFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectStackPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.projectStackFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectStackPayload>
          }
          findMany: {
            args: Prisma.projectStackFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectStackPayload>[]
          }
          create: {
            args: Prisma.projectStackCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectStackPayload>
          }
          createMany: {
            args: Prisma.projectStackCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.projectStackCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectStackPayload>[]
          }
          delete: {
            args: Prisma.projectStackDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectStackPayload>
          }
          update: {
            args: Prisma.projectStackUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectStackPayload>
          }
          deleteMany: {
            args: Prisma.projectStackDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.projectStackUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.projectStackUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectStackPayload>[]
          }
          upsert: {
            args: Prisma.projectStackUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectStackPayload>
          }
          aggregate: {
            args: Prisma.ProjectStackAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectStack>
          }
          groupBy: {
            args: Prisma.projectStackGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectStackGroupByOutputType>[]
          }
          count: {
            args: Prisma.projectStackCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectStackCountAggregateOutputType> | number
          }
        }
      }
      types: {
        payload: Prisma.$typesPayload<ExtArgs>
        fields: Prisma.typesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.typesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$typesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.typesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$typesPayload>
          }
          findFirst: {
            args: Prisma.typesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$typesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.typesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$typesPayload>
          }
          findMany: {
            args: Prisma.typesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$typesPayload>[]
          }
          create: {
            args: Prisma.typesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$typesPayload>
          }
          createMany: {
            args: Prisma.typesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.typesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$typesPayload>[]
          }
          delete: {
            args: Prisma.typesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$typesPayload>
          }
          update: {
            args: Prisma.typesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$typesPayload>
          }
          deleteMany: {
            args: Prisma.typesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.typesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.typesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$typesPayload>[]
          }
          upsert: {
            args: Prisma.typesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$typesPayload>
          }
          aggregate: {
            args: Prisma.TypesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTypes>
          }
          groupBy: {
            args: Prisma.typesGroupByArgs<ExtArgs>
            result: $Utils.Optional<TypesGroupByOutputType>[]
          }
          count: {
            args: Prisma.typesCountArgs<ExtArgs>
            result: $Utils.Optional<TypesCountAggregateOutputType> | number
          }
        }
      }
      education: {
        payload: Prisma.$educationPayload<ExtArgs>
        fields: Prisma.educationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.educationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$educationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.educationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$educationPayload>
          }
          findFirst: {
            args: Prisma.educationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$educationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.educationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$educationPayload>
          }
          findMany: {
            args: Prisma.educationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$educationPayload>[]
          }
          create: {
            args: Prisma.educationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$educationPayload>
          }
          createMany: {
            args: Prisma.educationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.educationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$educationPayload>[]
          }
          delete: {
            args: Prisma.educationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$educationPayload>
          }
          update: {
            args: Prisma.educationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$educationPayload>
          }
          deleteMany: {
            args: Prisma.educationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.educationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.educationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$educationPayload>[]
          }
          upsert: {
            args: Prisma.educationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$educationPayload>
          }
          aggregate: {
            args: Prisma.EducationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEducation>
          }
          groupBy: {
            args: Prisma.educationGroupByArgs<ExtArgs>
            result: $Utils.Optional<EducationGroupByOutputType>[]
          }
          count: {
            args: Prisma.educationCountArgs<ExtArgs>
            result: $Utils.Optional<EducationCountAggregateOutputType> | number
          }
        }
      }
      education_description: {
        payload: Prisma.$education_descriptionPayload<ExtArgs>
        fields: Prisma.education_descriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.education_descriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$education_descriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.education_descriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$education_descriptionPayload>
          }
          findFirst: {
            args: Prisma.education_descriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$education_descriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.education_descriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$education_descriptionPayload>
          }
          findMany: {
            args: Prisma.education_descriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$education_descriptionPayload>[]
          }
          create: {
            args: Prisma.education_descriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$education_descriptionPayload>
          }
          createMany: {
            args: Prisma.education_descriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.education_descriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$education_descriptionPayload>[]
          }
          delete: {
            args: Prisma.education_descriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$education_descriptionPayload>
          }
          update: {
            args: Prisma.education_descriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$education_descriptionPayload>
          }
          deleteMany: {
            args: Prisma.education_descriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.education_descriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.education_descriptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$education_descriptionPayload>[]
          }
          upsert: {
            args: Prisma.education_descriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$education_descriptionPayload>
          }
          aggregate: {
            args: Prisma.Education_descriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEducation_description>
          }
          groupBy: {
            args: Prisma.education_descriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<Education_descriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.education_descriptionCountArgs<ExtArgs>
            result: $Utils.Optional<Education_descriptionCountAggregateOutputType> | number
          }
        }
      }
      experience: {
        payload: Prisma.$experiencePayload<ExtArgs>
        fields: Prisma.experienceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.experienceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$experiencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.experienceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$experiencePayload>
          }
          findFirst: {
            args: Prisma.experienceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$experiencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.experienceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$experiencePayload>
          }
          findMany: {
            args: Prisma.experienceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$experiencePayload>[]
          }
          create: {
            args: Prisma.experienceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$experiencePayload>
          }
          createMany: {
            args: Prisma.experienceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.experienceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$experiencePayload>[]
          }
          delete: {
            args: Prisma.experienceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$experiencePayload>
          }
          update: {
            args: Prisma.experienceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$experiencePayload>
          }
          deleteMany: {
            args: Prisma.experienceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.experienceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.experienceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$experiencePayload>[]
          }
          upsert: {
            args: Prisma.experienceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$experiencePayload>
          }
          aggregate: {
            args: Prisma.ExperienceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExperience>
          }
          groupBy: {
            args: Prisma.experienceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExperienceGroupByOutputType>[]
          }
          count: {
            args: Prisma.experienceCountArgs<ExtArgs>
            result: $Utils.Optional<ExperienceCountAggregateOutputType> | number
          }
        }
      }
      experience_description: {
        payload: Prisma.$experience_descriptionPayload<ExtArgs>
        fields: Prisma.experience_descriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.experience_descriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$experience_descriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.experience_descriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$experience_descriptionPayload>
          }
          findFirst: {
            args: Prisma.experience_descriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$experience_descriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.experience_descriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$experience_descriptionPayload>
          }
          findMany: {
            args: Prisma.experience_descriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$experience_descriptionPayload>[]
          }
          create: {
            args: Prisma.experience_descriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$experience_descriptionPayload>
          }
          createMany: {
            args: Prisma.experience_descriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.experience_descriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$experience_descriptionPayload>[]
          }
          delete: {
            args: Prisma.experience_descriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$experience_descriptionPayload>
          }
          update: {
            args: Prisma.experience_descriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$experience_descriptionPayload>
          }
          deleteMany: {
            args: Prisma.experience_descriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.experience_descriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.experience_descriptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$experience_descriptionPayload>[]
          }
          upsert: {
            args: Prisma.experience_descriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$experience_descriptionPayload>
          }
          aggregate: {
            args: Prisma.Experience_descriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExperience_description>
          }
          groupBy: {
            args: Prisma.experience_descriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<Experience_descriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.experience_descriptionCountArgs<ExtArgs>
            result: $Utils.Optional<Experience_descriptionCountAggregateOutputType> | number
          }
        }
      }
      achievements: {
        payload: Prisma.$achievementsPayload<ExtArgs>
        fields: Prisma.achievementsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.achievementsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$achievementsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.achievementsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$achievementsPayload>
          }
          findFirst: {
            args: Prisma.achievementsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$achievementsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.achievementsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$achievementsPayload>
          }
          findMany: {
            args: Prisma.achievementsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$achievementsPayload>[]
          }
          create: {
            args: Prisma.achievementsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$achievementsPayload>
          }
          createMany: {
            args: Prisma.achievementsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.achievementsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$achievementsPayload>[]
          }
          delete: {
            args: Prisma.achievementsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$achievementsPayload>
          }
          update: {
            args: Prisma.achievementsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$achievementsPayload>
          }
          deleteMany: {
            args: Prisma.achievementsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.achievementsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.achievementsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$achievementsPayload>[]
          }
          upsert: {
            args: Prisma.achievementsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$achievementsPayload>
          }
          aggregate: {
            args: Prisma.AchievementsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAchievements>
          }
          groupBy: {
            args: Prisma.achievementsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AchievementsGroupByOutputType>[]
          }
          count: {
            args: Prisma.achievementsCountArgs<ExtArgs>
            result: $Utils.Optional<AchievementsCountAggregateOutputType> | number
          }
        }
      }
      softSkills: {
        payload: Prisma.$softSkillsPayload<ExtArgs>
        fields: Prisma.softSkillsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.softSkillsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$softSkillsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.softSkillsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$softSkillsPayload>
          }
          findFirst: {
            args: Prisma.softSkillsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$softSkillsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.softSkillsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$softSkillsPayload>
          }
          findMany: {
            args: Prisma.softSkillsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$softSkillsPayload>[]
          }
          create: {
            args: Prisma.softSkillsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$softSkillsPayload>
          }
          createMany: {
            args: Prisma.softSkillsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.softSkillsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$softSkillsPayload>[]
          }
          delete: {
            args: Prisma.softSkillsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$softSkillsPayload>
          }
          update: {
            args: Prisma.softSkillsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$softSkillsPayload>
          }
          deleteMany: {
            args: Prisma.softSkillsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.softSkillsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.softSkillsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$softSkillsPayload>[]
          }
          upsert: {
            args: Prisma.softSkillsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$softSkillsPayload>
          }
          aggregate: {
            args: Prisma.SoftSkillsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSoftSkills>
          }
          groupBy: {
            args: Prisma.softSkillsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SoftSkillsGroupByOutputType>[]
          }
          count: {
            args: Prisma.softSkillsCountArgs<ExtArgs>
            result: $Utils.Optional<SoftSkillsCountAggregateOutputType> | number
          }
        }
      }
      frontendSkills: {
        payload: Prisma.$frontendSkillsPayload<ExtArgs>
        fields: Prisma.frontendSkillsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.frontendSkillsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$frontendSkillsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.frontendSkillsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$frontendSkillsPayload>
          }
          findFirst: {
            args: Prisma.frontendSkillsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$frontendSkillsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.frontendSkillsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$frontendSkillsPayload>
          }
          findMany: {
            args: Prisma.frontendSkillsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$frontendSkillsPayload>[]
          }
          create: {
            args: Prisma.frontendSkillsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$frontendSkillsPayload>
          }
          createMany: {
            args: Prisma.frontendSkillsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.frontendSkillsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$frontendSkillsPayload>[]
          }
          delete: {
            args: Prisma.frontendSkillsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$frontendSkillsPayload>
          }
          update: {
            args: Prisma.frontendSkillsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$frontendSkillsPayload>
          }
          deleteMany: {
            args: Prisma.frontendSkillsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.frontendSkillsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.frontendSkillsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$frontendSkillsPayload>[]
          }
          upsert: {
            args: Prisma.frontendSkillsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$frontendSkillsPayload>
          }
          aggregate: {
            args: Prisma.FrontendSkillsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFrontendSkills>
          }
          groupBy: {
            args: Prisma.frontendSkillsGroupByArgs<ExtArgs>
            result: $Utils.Optional<FrontendSkillsGroupByOutputType>[]
          }
          count: {
            args: Prisma.frontendSkillsCountArgs<ExtArgs>
            result: $Utils.Optional<FrontendSkillsCountAggregateOutputType> | number
          }
        }
      }
      backendSkills: {
        payload: Prisma.$backendSkillsPayload<ExtArgs>
        fields: Prisma.backendSkillsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.backendSkillsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$backendSkillsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.backendSkillsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$backendSkillsPayload>
          }
          findFirst: {
            args: Prisma.backendSkillsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$backendSkillsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.backendSkillsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$backendSkillsPayload>
          }
          findMany: {
            args: Prisma.backendSkillsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$backendSkillsPayload>[]
          }
          create: {
            args: Prisma.backendSkillsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$backendSkillsPayload>
          }
          createMany: {
            args: Prisma.backendSkillsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.backendSkillsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$backendSkillsPayload>[]
          }
          delete: {
            args: Prisma.backendSkillsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$backendSkillsPayload>
          }
          update: {
            args: Prisma.backendSkillsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$backendSkillsPayload>
          }
          deleteMany: {
            args: Prisma.backendSkillsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.backendSkillsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.backendSkillsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$backendSkillsPayload>[]
          }
          upsert: {
            args: Prisma.backendSkillsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$backendSkillsPayload>
          }
          aggregate: {
            args: Prisma.BackendSkillsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBackendSkills>
          }
          groupBy: {
            args: Prisma.backendSkillsGroupByArgs<ExtArgs>
            result: $Utils.Optional<BackendSkillsGroupByOutputType>[]
          }
          count: {
            args: Prisma.backendSkillsCountArgs<ExtArgs>
            result: $Utils.Optional<BackendSkillsCountAggregateOutputType> | number
          }
        }
      }
      techStack: {
        payload: Prisma.$techStackPayload<ExtArgs>
        fields: Prisma.techStackFieldRefs
        operations: {
          findUnique: {
            args: Prisma.techStackFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$techStackPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.techStackFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$techStackPayload>
          }
          findFirst: {
            args: Prisma.techStackFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$techStackPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.techStackFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$techStackPayload>
          }
          findMany: {
            args: Prisma.techStackFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$techStackPayload>[]
          }
          create: {
            args: Prisma.techStackCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$techStackPayload>
          }
          createMany: {
            args: Prisma.techStackCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.techStackCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$techStackPayload>[]
          }
          delete: {
            args: Prisma.techStackDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$techStackPayload>
          }
          update: {
            args: Prisma.techStackUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$techStackPayload>
          }
          deleteMany: {
            args: Prisma.techStackDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.techStackUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.techStackUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$techStackPayload>[]
          }
          upsert: {
            args: Prisma.techStackUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$techStackPayload>
          }
          aggregate: {
            args: Prisma.TechStackAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTechStack>
          }
          groupBy: {
            args: Prisma.techStackGroupByArgs<ExtArgs>
            result: $Utils.Optional<TechStackGroupByOutputType>[]
          }
          count: {
            args: Prisma.techStackCountArgs<ExtArgs>
            result: $Utils.Optional<TechStackCountAggregateOutputType> | number
          }
        }
      }
      techStackType: {
        payload: Prisma.$techStackTypePayload<ExtArgs>
        fields: Prisma.techStackTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.techStackTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$techStackTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.techStackTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$techStackTypePayload>
          }
          findFirst: {
            args: Prisma.techStackTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$techStackTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.techStackTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$techStackTypePayload>
          }
          findMany: {
            args: Prisma.techStackTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$techStackTypePayload>[]
          }
          create: {
            args: Prisma.techStackTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$techStackTypePayload>
          }
          createMany: {
            args: Prisma.techStackTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.techStackTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$techStackTypePayload>[]
          }
          delete: {
            args: Prisma.techStackTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$techStackTypePayload>
          }
          update: {
            args: Prisma.techStackTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$techStackTypePayload>
          }
          deleteMany: {
            args: Prisma.techStackTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.techStackTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.techStackTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$techStackTypePayload>[]
          }
          upsert: {
            args: Prisma.techStackTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$techStackTypePayload>
          }
          aggregate: {
            args: Prisma.TechStackTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTechStackType>
          }
          groupBy: {
            args: Prisma.techStackTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<TechStackTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.techStackTypeCountArgs<ExtArgs>
            result: $Utils.Optional<TechStackTypeCountAggregateOutputType> | number
          }
        }
      }
      personal: {
        payload: Prisma.$personalPayload<ExtArgs>
        fields: Prisma.personalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.personalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.personalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personalPayload>
          }
          findFirst: {
            args: Prisma.personalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.personalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personalPayload>
          }
          findMany: {
            args: Prisma.personalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personalPayload>[]
          }
          create: {
            args: Prisma.personalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personalPayload>
          }
          createMany: {
            args: Prisma.personalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.personalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personalPayload>[]
          }
          delete: {
            args: Prisma.personalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personalPayload>
          }
          update: {
            args: Prisma.personalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personalPayload>
          }
          deleteMany: {
            args: Prisma.personalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.personalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.personalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personalPayload>[]
          }
          upsert: {
            args: Prisma.personalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personalPayload>
          }
          aggregate: {
            args: Prisma.PersonalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePersonal>
          }
          groupBy: {
            args: Prisma.personalGroupByArgs<ExtArgs>
            result: $Utils.Optional<PersonalGroupByOutputType>[]
          }
          count: {
            args: Prisma.personalCountArgs<ExtArgs>
            result: $Utils.Optional<PersonalCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    users?: usersOmit
    projects?: projectsOmit
    sources?: sourcesOmit
    projectStack?: projectStackOmit
    types?: typesOmit
    education?: educationOmit
    education_description?: education_descriptionOmit
    experience?: experienceOmit
    experience_description?: experience_descriptionOmit
    achievements?: achievementsOmit
    softSkills?: softSkillsOmit
    frontendSkills?: frontendSkillsOmit
    backendSkills?: backendSkillsOmit
    techStack?: techStackOmit
    techStackType?: techStackTypeOmit
    personal?: personalOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    sources: number
    types: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sources?: boolean | UsersCountOutputTypeCountSourcesArgs
    types?: boolean | UsersCountOutputTypeCountTypesArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountSourcesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sourcesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountTypesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: typesWhereInput
  }


  /**
   * Count Type ProjectsCountOutputType
   */

  export type ProjectsCountOutputType = {
    source: number
    type: number
    projectStacks: number
  }

  export type ProjectsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    source?: boolean | ProjectsCountOutputTypeCountSourceArgs
    type?: boolean | ProjectsCountOutputTypeCountTypeArgs
    projectStacks?: boolean | ProjectsCountOutputTypeCountProjectStacksArgs
  }

  // Custom InputTypes
  /**
   * ProjectsCountOutputType without action
   */
  export type ProjectsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectsCountOutputType
     */
    select?: ProjectsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectsCountOutputType without action
   */
  export type ProjectsCountOutputTypeCountSourceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sourcesWhereInput
  }

  /**
   * ProjectsCountOutputType without action
   */
  export type ProjectsCountOutputTypeCountTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: typesWhereInput
  }

  /**
   * ProjectsCountOutputType without action
   */
  export type ProjectsCountOutputTypeCountProjectStacksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: projectStackWhereInput
  }


  /**
   * Count Type EducationCountOutputType
   */

  export type EducationCountOutputType = {
    educationDescriptions: number
  }

  export type EducationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    educationDescriptions?: boolean | EducationCountOutputTypeCountEducationDescriptionsArgs
  }

  // Custom InputTypes
  /**
   * EducationCountOutputType without action
   */
  export type EducationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EducationCountOutputType
     */
    select?: EducationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EducationCountOutputType without action
   */
  export type EducationCountOutputTypeCountEducationDescriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: education_descriptionWhereInput
  }


  /**
   * Count Type ExperienceCountOutputType
   */

  export type ExperienceCountOutputType = {
    experienceDescriptions: number
  }

  export type ExperienceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    experienceDescriptions?: boolean | ExperienceCountOutputTypeCountExperienceDescriptionsArgs
  }

  // Custom InputTypes
  /**
   * ExperienceCountOutputType without action
   */
  export type ExperienceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienceCountOutputType
     */
    select?: ExperienceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExperienceCountOutputType without action
   */
  export type ExperienceCountOutputTypeCountExperienceDescriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: experience_descriptionWhereInput
  }


  /**
   * Count Type TechStackCountOutputType
   */

  export type TechStackCountOutputType = {
    techstacktype: number
  }

  export type TechStackCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    techstacktype?: boolean | TechStackCountOutputTypeCountTechstacktypeArgs
  }

  // Custom InputTypes
  /**
   * TechStackCountOutputType without action
   */
  export type TechStackCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechStackCountOutputType
     */
    select?: TechStackCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TechStackCountOutputType without action
   */
  export type TechStackCountOutputTypeCountTechstacktypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: techStackTypeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    email: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    email: string
    password: string
    createdAt: Date
    updatedAt: Date
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sources?: boolean | users$sourcesArgs<ExtArgs>
    types?: boolean | users$typesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sources?: boolean | users$sourcesArgs<ExtArgs>
    types?: boolean | users$typesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      sources: Prisma.$sourcesPayload<ExtArgs>[]
      types: Prisma.$typesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sources<T extends users$sourcesArgs<ExtArgs> = {}>(args?: Subset<T, users$sourcesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sourcesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    types<T extends users$typesArgs<ExtArgs> = {}>(args?: Subset<T, users$typesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$typesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly createdAt: FieldRef<"users", 'DateTime'>
    readonly updatedAt: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.sources
   */
  export type users$sourcesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sources
     */
    select?: sourcesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sources
     */
    omit?: sourcesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sourcesInclude<ExtArgs> | null
    where?: sourcesWhereInput
    orderBy?: sourcesOrderByWithRelationInput | sourcesOrderByWithRelationInput[]
    cursor?: sourcesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SourcesScalarFieldEnum | SourcesScalarFieldEnum[]
  }

  /**
   * users.types
   */
  export type users$typesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the types
     */
    select?: typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the types
     */
    omit?: typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: typesInclude<ExtArgs> | null
    where?: typesWhereInput
    orderBy?: typesOrderByWithRelationInput | typesOrderByWithRelationInput[]
    cursor?: typesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TypesScalarFieldEnum | TypesScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model projects
   */

  export type AggregateProjects = {
    _count: ProjectsCountAggregateOutputType | null
    _min: ProjectsMinAggregateOutputType | null
    _max: ProjectsMaxAggregateOutputType | null
  }

  export type ProjectsMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectsMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectsCountAggregateOutputType = {
    id: number
    title: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectsMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectsMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectsCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which projects to aggregate.
     */
    where?: projectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectsOrderByWithRelationInput | projectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: projectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned projects
    **/
    _count?: true | ProjectsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectsMaxAggregateInputType
  }

  export type GetProjectsAggregateType<T extends ProjectsAggregateArgs> = {
        [P in keyof T & keyof AggregateProjects]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjects[P]>
      : GetScalarType<T[P], AggregateProjects[P]>
  }




  export type projectsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: projectsWhereInput
    orderBy?: projectsOrderByWithAggregationInput | projectsOrderByWithAggregationInput[]
    by: ProjectsScalarFieldEnum[] | ProjectsScalarFieldEnum
    having?: projectsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectsCountAggregateInputType | true
    _min?: ProjectsMinAggregateInputType
    _max?: ProjectsMaxAggregateInputType
  }

  export type ProjectsGroupByOutputType = {
    id: string
    title: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: ProjectsCountAggregateOutputType | null
    _min: ProjectsMinAggregateOutputType | null
    _max: ProjectsMaxAggregateOutputType | null
  }

  type GetProjectsGroupByPayload<T extends projectsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectsGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectsGroupByOutputType[P]>
        }
      >
    >


  export type projectsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    source?: boolean | projects$sourceArgs<ExtArgs>
    type?: boolean | projects$typeArgs<ExtArgs>
    projectStacks?: boolean | projects$projectStacksArgs<ExtArgs>
    _count?: boolean | ProjectsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projects"]>

  export type projectsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["projects"]>

  export type projectsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["projects"]>

  export type projectsSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type projectsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["projects"]>
  export type projectsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    source?: boolean | projects$sourceArgs<ExtArgs>
    type?: boolean | projects$typeArgs<ExtArgs>
    projectStacks?: boolean | projects$projectStacksArgs<ExtArgs>
    _count?: boolean | ProjectsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type projectsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type projectsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $projectsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "projects"
    objects: {
      source: Prisma.$sourcesPayload<ExtArgs>[]
      type: Prisma.$typesPayload<ExtArgs>[]
      projectStacks: Prisma.$projectStackPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["projects"]>
    composites: {}
  }

  type projectsGetPayload<S extends boolean | null | undefined | projectsDefaultArgs> = $Result.GetResult<Prisma.$projectsPayload, S>

  type projectsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<projectsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectsCountAggregateInputType | true
    }

  export interface projectsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['projects'], meta: { name: 'projects' } }
    /**
     * Find zero or one Projects that matches the filter.
     * @param {projectsFindUniqueArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends projectsFindUniqueArgs>(args: SelectSubset<T, projectsFindUniqueArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Projects that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {projectsFindUniqueOrThrowArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends projectsFindUniqueOrThrowArgs>(args: SelectSubset<T, projectsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsFindFirstArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends projectsFindFirstArgs>(args?: SelectSubset<T, projectsFindFirstArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Projects that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsFindFirstOrThrowArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends projectsFindFirstOrThrowArgs>(args?: SelectSubset<T, projectsFindFirstOrThrowArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.projects.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.projects.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectsWithIdOnly = await prisma.projects.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends projectsFindManyArgs>(args?: SelectSubset<T, projectsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Projects.
     * @param {projectsCreateArgs} args - Arguments to create a Projects.
     * @example
     * // Create one Projects
     * const Projects = await prisma.projects.create({
     *   data: {
     *     // ... data to create a Projects
     *   }
     * })
     * 
     */
    create<T extends projectsCreateArgs>(args: SelectSubset<T, projectsCreateArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {projectsCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const projects = await prisma.projects.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends projectsCreateManyArgs>(args?: SelectSubset<T, projectsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {projectsCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const projects = await prisma.projects.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectsWithIdOnly = await prisma.projects.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends projectsCreateManyAndReturnArgs>(args?: SelectSubset<T, projectsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Projects.
     * @param {projectsDeleteArgs} args - Arguments to delete one Projects.
     * @example
     * // Delete one Projects
     * const Projects = await prisma.projects.delete({
     *   where: {
     *     // ... filter to delete one Projects
     *   }
     * })
     * 
     */
    delete<T extends projectsDeleteArgs>(args: SelectSubset<T, projectsDeleteArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Projects.
     * @param {projectsUpdateArgs} args - Arguments to update one Projects.
     * @example
     * // Update one Projects
     * const projects = await prisma.projects.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends projectsUpdateArgs>(args: SelectSubset<T, projectsUpdateArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {projectsDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.projects.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends projectsDeleteManyArgs>(args?: SelectSubset<T, projectsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const projects = await prisma.projects.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends projectsUpdateManyArgs>(args: SelectSubset<T, projectsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {projectsUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const projects = await prisma.projects.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectsWithIdOnly = await prisma.projects.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends projectsUpdateManyAndReturnArgs>(args: SelectSubset<T, projectsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Projects.
     * @param {projectsUpsertArgs} args - Arguments to update or create a Projects.
     * @example
     * // Update or create a Projects
     * const projects = await prisma.projects.upsert({
     *   create: {
     *     // ... data to create a Projects
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Projects we want to update
     *   }
     * })
     */
    upsert<T extends projectsUpsertArgs>(args: SelectSubset<T, projectsUpsertArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.projects.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends projectsCountArgs>(
      args?: Subset<T, projectsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectsAggregateArgs>(args: Subset<T, ProjectsAggregateArgs>): Prisma.PrismaPromise<GetProjectsAggregateType<T>>

    /**
     * Group by Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends projectsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: projectsGroupByArgs['orderBy'] }
        : { orderBy?: projectsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, projectsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the projects model
   */
  readonly fields: projectsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for projects.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__projectsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    source<T extends projects$sourceArgs<ExtArgs> = {}>(args?: Subset<T, projects$sourceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sourcesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    type<T extends projects$typeArgs<ExtArgs> = {}>(args?: Subset<T, projects$typeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$typesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projectStacks<T extends projects$projectStacksArgs<ExtArgs> = {}>(args?: Subset<T, projects$projectStacksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectStackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the projects model
   */
  interface projectsFieldRefs {
    readonly id: FieldRef<"projects", 'String'>
    readonly title: FieldRef<"projects", 'String'>
    readonly description: FieldRef<"projects", 'String'>
    readonly createdAt: FieldRef<"projects", 'DateTime'>
    readonly updatedAt: FieldRef<"projects", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * projects findUnique
   */
  export type projectsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where: projectsWhereUniqueInput
  }

  /**
   * projects findUniqueOrThrow
   */
  export type projectsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where: projectsWhereUniqueInput
  }

  /**
   * projects findFirst
   */
  export type projectsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where?: projectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectsOrderByWithRelationInput | projectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for projects.
     */
    cursor?: projectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projects.
     */
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }

  /**
   * projects findFirstOrThrow
   */
  export type projectsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where?: projectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectsOrderByWithRelationInput | projectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for projects.
     */
    cursor?: projectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projects.
     */
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }

  /**
   * projects findMany
   */
  export type projectsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where?: projectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectsOrderByWithRelationInput | projectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing projects.
     */
    cursor?: projectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projects.
     */
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }

  /**
   * projects create
   */
  export type projectsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * The data needed to create a projects.
     */
    data: XOR<projectsCreateInput, projectsUncheckedCreateInput>
  }

  /**
   * projects createMany
   */
  export type projectsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many projects.
     */
    data: projectsCreateManyInput | projectsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * projects createManyAndReturn
   */
  export type projectsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * The data used to create many projects.
     */
    data: projectsCreateManyInput | projectsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * projects update
   */
  export type projectsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * The data needed to update a projects.
     */
    data: XOR<projectsUpdateInput, projectsUncheckedUpdateInput>
    /**
     * Choose, which projects to update.
     */
    where: projectsWhereUniqueInput
  }

  /**
   * projects updateMany
   */
  export type projectsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update projects.
     */
    data: XOR<projectsUpdateManyMutationInput, projectsUncheckedUpdateManyInput>
    /**
     * Filter which projects to update
     */
    where?: projectsWhereInput
    /**
     * Limit how many projects to update.
     */
    limit?: number
  }

  /**
   * projects updateManyAndReturn
   */
  export type projectsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * The data used to update projects.
     */
    data: XOR<projectsUpdateManyMutationInput, projectsUncheckedUpdateManyInput>
    /**
     * Filter which projects to update
     */
    where?: projectsWhereInput
    /**
     * Limit how many projects to update.
     */
    limit?: number
  }

  /**
   * projects upsert
   */
  export type projectsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * The filter to search for the projects to update in case it exists.
     */
    where: projectsWhereUniqueInput
    /**
     * In case the projects found by the `where` argument doesn't exist, create a new projects with this data.
     */
    create: XOR<projectsCreateInput, projectsUncheckedCreateInput>
    /**
     * In case the projects was found with the provided `where` argument, update it with this data.
     */
    update: XOR<projectsUpdateInput, projectsUncheckedUpdateInput>
  }

  /**
   * projects delete
   */
  export type projectsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * Filter which projects to delete.
     */
    where: projectsWhereUniqueInput
  }

  /**
   * projects deleteMany
   */
  export type projectsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which projects to delete
     */
    where?: projectsWhereInput
    /**
     * Limit how many projects to delete.
     */
    limit?: number
  }

  /**
   * projects.source
   */
  export type projects$sourceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sources
     */
    select?: sourcesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sources
     */
    omit?: sourcesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sourcesInclude<ExtArgs> | null
    where?: sourcesWhereInput
    orderBy?: sourcesOrderByWithRelationInput | sourcesOrderByWithRelationInput[]
    cursor?: sourcesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SourcesScalarFieldEnum | SourcesScalarFieldEnum[]
  }

  /**
   * projects.type
   */
  export type projects$typeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the types
     */
    select?: typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the types
     */
    omit?: typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: typesInclude<ExtArgs> | null
    where?: typesWhereInput
    orderBy?: typesOrderByWithRelationInput | typesOrderByWithRelationInput[]
    cursor?: typesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TypesScalarFieldEnum | TypesScalarFieldEnum[]
  }

  /**
   * projects.projectStacks
   */
  export type projects$projectStacksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectStack
     */
    select?: projectStackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectStack
     */
    omit?: projectStackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectStackInclude<ExtArgs> | null
    where?: projectStackWhereInput
    orderBy?: projectStackOrderByWithRelationInput | projectStackOrderByWithRelationInput[]
    cursor?: projectStackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectStackScalarFieldEnum | ProjectStackScalarFieldEnum[]
  }

  /**
   * projects without action
   */
  export type projectsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
  }


  /**
   * Model sources
   */

  export type AggregateSources = {
    _count: SourcesCountAggregateOutputType | null
    _min: SourcesMinAggregateOutputType | null
    _max: SourcesMaxAggregateOutputType | null
  }

  export type SourcesMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    imgUrl: string | null
    imgPath: string | null
    projectId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    usersId: string | null
  }

  export type SourcesMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    imgUrl: string | null
    imgPath: string | null
    projectId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    usersId: string | null
  }

  export type SourcesCountAggregateOutputType = {
    id: number
    title: number
    description: number
    imgUrl: number
    imgPath: number
    projectId: number
    createdAt: number
    updatedAt: number
    usersId: number
    _all: number
  }


  export type SourcesMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    imgUrl?: true
    imgPath?: true
    projectId?: true
    createdAt?: true
    updatedAt?: true
    usersId?: true
  }

  export type SourcesMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    imgUrl?: true
    imgPath?: true
    projectId?: true
    createdAt?: true
    updatedAt?: true
    usersId?: true
  }

  export type SourcesCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    imgUrl?: true
    imgPath?: true
    projectId?: true
    createdAt?: true
    updatedAt?: true
    usersId?: true
    _all?: true
  }

  export type SourcesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sources to aggregate.
     */
    where?: sourcesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sources to fetch.
     */
    orderBy?: sourcesOrderByWithRelationInput | sourcesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sourcesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sources
    **/
    _count?: true | SourcesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SourcesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SourcesMaxAggregateInputType
  }

  export type GetSourcesAggregateType<T extends SourcesAggregateArgs> = {
        [P in keyof T & keyof AggregateSources]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSources[P]>
      : GetScalarType<T[P], AggregateSources[P]>
  }




  export type sourcesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sourcesWhereInput
    orderBy?: sourcesOrderByWithAggregationInput | sourcesOrderByWithAggregationInput[]
    by: SourcesScalarFieldEnum[] | SourcesScalarFieldEnum
    having?: sourcesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SourcesCountAggregateInputType | true
    _min?: SourcesMinAggregateInputType
    _max?: SourcesMaxAggregateInputType
  }

  export type SourcesGroupByOutputType = {
    id: string
    title: string | null
    description: string | null
    imgUrl: string | null
    imgPath: string | null
    projectId: string
    createdAt: Date
    updatedAt: Date
    usersId: string | null
    _count: SourcesCountAggregateOutputType | null
    _min: SourcesMinAggregateOutputType | null
    _max: SourcesMaxAggregateOutputType | null
  }

  type GetSourcesGroupByPayload<T extends sourcesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SourcesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SourcesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SourcesGroupByOutputType[P]>
            : GetScalarType<T[P], SourcesGroupByOutputType[P]>
        }
      >
    >


  export type sourcesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    imgUrl?: boolean
    imgPath?: boolean
    projectId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usersId?: boolean
    project?: boolean | projectsDefaultArgs<ExtArgs>
    users?: boolean | sources$usersArgs<ExtArgs>
  }, ExtArgs["result"]["sources"]>

  export type sourcesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    imgUrl?: boolean
    imgPath?: boolean
    projectId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usersId?: boolean
    project?: boolean | projectsDefaultArgs<ExtArgs>
    users?: boolean | sources$usersArgs<ExtArgs>
  }, ExtArgs["result"]["sources"]>

  export type sourcesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    imgUrl?: boolean
    imgPath?: boolean
    projectId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usersId?: boolean
    project?: boolean | projectsDefaultArgs<ExtArgs>
    users?: boolean | sources$usersArgs<ExtArgs>
  }, ExtArgs["result"]["sources"]>

  export type sourcesSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    imgUrl?: boolean
    imgPath?: boolean
    projectId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usersId?: boolean
  }

  export type sourcesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "imgUrl" | "imgPath" | "projectId" | "createdAt" | "updatedAt" | "usersId", ExtArgs["result"]["sources"]>
  export type sourcesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | projectsDefaultArgs<ExtArgs>
    users?: boolean | sources$usersArgs<ExtArgs>
  }
  export type sourcesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | projectsDefaultArgs<ExtArgs>
    users?: boolean | sources$usersArgs<ExtArgs>
  }
  export type sourcesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | projectsDefaultArgs<ExtArgs>
    users?: boolean | sources$usersArgs<ExtArgs>
  }

  export type $sourcesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sources"
    objects: {
      project: Prisma.$projectsPayload<ExtArgs>
      users: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string | null
      description: string | null
      imgUrl: string | null
      imgPath: string | null
      projectId: string
      createdAt: Date
      updatedAt: Date
      usersId: string | null
    }, ExtArgs["result"]["sources"]>
    composites: {}
  }

  type sourcesGetPayload<S extends boolean | null | undefined | sourcesDefaultArgs> = $Result.GetResult<Prisma.$sourcesPayload, S>

  type sourcesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sourcesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SourcesCountAggregateInputType | true
    }

  export interface sourcesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sources'], meta: { name: 'sources' } }
    /**
     * Find zero or one Sources that matches the filter.
     * @param {sourcesFindUniqueArgs} args - Arguments to find a Sources
     * @example
     * // Get one Sources
     * const sources = await prisma.sources.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sourcesFindUniqueArgs>(args: SelectSubset<T, sourcesFindUniqueArgs<ExtArgs>>): Prisma__sourcesClient<$Result.GetResult<Prisma.$sourcesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sources that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sourcesFindUniqueOrThrowArgs} args - Arguments to find a Sources
     * @example
     * // Get one Sources
     * const sources = await prisma.sources.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sourcesFindUniqueOrThrowArgs>(args: SelectSubset<T, sourcesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sourcesClient<$Result.GetResult<Prisma.$sourcesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sources that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sourcesFindFirstArgs} args - Arguments to find a Sources
     * @example
     * // Get one Sources
     * const sources = await prisma.sources.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sourcesFindFirstArgs>(args?: SelectSubset<T, sourcesFindFirstArgs<ExtArgs>>): Prisma__sourcesClient<$Result.GetResult<Prisma.$sourcesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sources that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sourcesFindFirstOrThrowArgs} args - Arguments to find a Sources
     * @example
     * // Get one Sources
     * const sources = await prisma.sources.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sourcesFindFirstOrThrowArgs>(args?: SelectSubset<T, sourcesFindFirstOrThrowArgs<ExtArgs>>): Prisma__sourcesClient<$Result.GetResult<Prisma.$sourcesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sources that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sourcesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sources
     * const sources = await prisma.sources.findMany()
     * 
     * // Get first 10 Sources
     * const sources = await prisma.sources.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sourcesWithIdOnly = await prisma.sources.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends sourcesFindManyArgs>(args?: SelectSubset<T, sourcesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sourcesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sources.
     * @param {sourcesCreateArgs} args - Arguments to create a Sources.
     * @example
     * // Create one Sources
     * const Sources = await prisma.sources.create({
     *   data: {
     *     // ... data to create a Sources
     *   }
     * })
     * 
     */
    create<T extends sourcesCreateArgs>(args: SelectSubset<T, sourcesCreateArgs<ExtArgs>>): Prisma__sourcesClient<$Result.GetResult<Prisma.$sourcesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sources.
     * @param {sourcesCreateManyArgs} args - Arguments to create many Sources.
     * @example
     * // Create many Sources
     * const sources = await prisma.sources.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sourcesCreateManyArgs>(args?: SelectSubset<T, sourcesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sources and returns the data saved in the database.
     * @param {sourcesCreateManyAndReturnArgs} args - Arguments to create many Sources.
     * @example
     * // Create many Sources
     * const sources = await prisma.sources.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sources and only return the `id`
     * const sourcesWithIdOnly = await prisma.sources.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends sourcesCreateManyAndReturnArgs>(args?: SelectSubset<T, sourcesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sourcesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sources.
     * @param {sourcesDeleteArgs} args - Arguments to delete one Sources.
     * @example
     * // Delete one Sources
     * const Sources = await prisma.sources.delete({
     *   where: {
     *     // ... filter to delete one Sources
     *   }
     * })
     * 
     */
    delete<T extends sourcesDeleteArgs>(args: SelectSubset<T, sourcesDeleteArgs<ExtArgs>>): Prisma__sourcesClient<$Result.GetResult<Prisma.$sourcesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sources.
     * @param {sourcesUpdateArgs} args - Arguments to update one Sources.
     * @example
     * // Update one Sources
     * const sources = await prisma.sources.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sourcesUpdateArgs>(args: SelectSubset<T, sourcesUpdateArgs<ExtArgs>>): Prisma__sourcesClient<$Result.GetResult<Prisma.$sourcesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sources.
     * @param {sourcesDeleteManyArgs} args - Arguments to filter Sources to delete.
     * @example
     * // Delete a few Sources
     * const { count } = await prisma.sources.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sourcesDeleteManyArgs>(args?: SelectSubset<T, sourcesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sourcesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sources
     * const sources = await prisma.sources.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sourcesUpdateManyArgs>(args: SelectSubset<T, sourcesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sources and returns the data updated in the database.
     * @param {sourcesUpdateManyAndReturnArgs} args - Arguments to update many Sources.
     * @example
     * // Update many Sources
     * const sources = await prisma.sources.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sources and only return the `id`
     * const sourcesWithIdOnly = await prisma.sources.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends sourcesUpdateManyAndReturnArgs>(args: SelectSubset<T, sourcesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sourcesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sources.
     * @param {sourcesUpsertArgs} args - Arguments to update or create a Sources.
     * @example
     * // Update or create a Sources
     * const sources = await prisma.sources.upsert({
     *   create: {
     *     // ... data to create a Sources
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sources we want to update
     *   }
     * })
     */
    upsert<T extends sourcesUpsertArgs>(args: SelectSubset<T, sourcesUpsertArgs<ExtArgs>>): Prisma__sourcesClient<$Result.GetResult<Prisma.$sourcesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sourcesCountArgs} args - Arguments to filter Sources to count.
     * @example
     * // Count the number of Sources
     * const count = await prisma.sources.count({
     *   where: {
     *     // ... the filter for the Sources we want to count
     *   }
     * })
    **/
    count<T extends sourcesCountArgs>(
      args?: Subset<T, sourcesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SourcesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourcesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SourcesAggregateArgs>(args: Subset<T, SourcesAggregateArgs>): Prisma.PrismaPromise<GetSourcesAggregateType<T>>

    /**
     * Group by Sources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sourcesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends sourcesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sourcesGroupByArgs['orderBy'] }
        : { orderBy?: sourcesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, sourcesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSourcesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sources model
   */
  readonly fields: sourcesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sources.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sourcesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends projectsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, projectsDefaultArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends sources$usersArgs<ExtArgs> = {}>(args?: Subset<T, sources$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the sources model
   */
  interface sourcesFieldRefs {
    readonly id: FieldRef<"sources", 'String'>
    readonly title: FieldRef<"sources", 'String'>
    readonly description: FieldRef<"sources", 'String'>
    readonly imgUrl: FieldRef<"sources", 'String'>
    readonly imgPath: FieldRef<"sources", 'String'>
    readonly projectId: FieldRef<"sources", 'String'>
    readonly createdAt: FieldRef<"sources", 'DateTime'>
    readonly updatedAt: FieldRef<"sources", 'DateTime'>
    readonly usersId: FieldRef<"sources", 'String'>
  }
    

  // Custom InputTypes
  /**
   * sources findUnique
   */
  export type sourcesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sources
     */
    select?: sourcesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sources
     */
    omit?: sourcesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sourcesInclude<ExtArgs> | null
    /**
     * Filter, which sources to fetch.
     */
    where: sourcesWhereUniqueInput
  }

  /**
   * sources findUniqueOrThrow
   */
  export type sourcesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sources
     */
    select?: sourcesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sources
     */
    omit?: sourcesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sourcesInclude<ExtArgs> | null
    /**
     * Filter, which sources to fetch.
     */
    where: sourcesWhereUniqueInput
  }

  /**
   * sources findFirst
   */
  export type sourcesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sources
     */
    select?: sourcesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sources
     */
    omit?: sourcesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sourcesInclude<ExtArgs> | null
    /**
     * Filter, which sources to fetch.
     */
    where?: sourcesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sources to fetch.
     */
    orderBy?: sourcesOrderByWithRelationInput | sourcesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sources.
     */
    cursor?: sourcesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sources.
     */
    distinct?: SourcesScalarFieldEnum | SourcesScalarFieldEnum[]
  }

  /**
   * sources findFirstOrThrow
   */
  export type sourcesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sources
     */
    select?: sourcesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sources
     */
    omit?: sourcesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sourcesInclude<ExtArgs> | null
    /**
     * Filter, which sources to fetch.
     */
    where?: sourcesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sources to fetch.
     */
    orderBy?: sourcesOrderByWithRelationInput | sourcesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sources.
     */
    cursor?: sourcesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sources.
     */
    distinct?: SourcesScalarFieldEnum | SourcesScalarFieldEnum[]
  }

  /**
   * sources findMany
   */
  export type sourcesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sources
     */
    select?: sourcesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sources
     */
    omit?: sourcesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sourcesInclude<ExtArgs> | null
    /**
     * Filter, which sources to fetch.
     */
    where?: sourcesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sources to fetch.
     */
    orderBy?: sourcesOrderByWithRelationInput | sourcesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sources.
     */
    cursor?: sourcesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sources.
     */
    distinct?: SourcesScalarFieldEnum | SourcesScalarFieldEnum[]
  }

  /**
   * sources create
   */
  export type sourcesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sources
     */
    select?: sourcesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sources
     */
    omit?: sourcesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sourcesInclude<ExtArgs> | null
    /**
     * The data needed to create a sources.
     */
    data: XOR<sourcesCreateInput, sourcesUncheckedCreateInput>
  }

  /**
   * sources createMany
   */
  export type sourcesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sources.
     */
    data: sourcesCreateManyInput | sourcesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sources createManyAndReturn
   */
  export type sourcesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sources
     */
    select?: sourcesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sources
     */
    omit?: sourcesOmit<ExtArgs> | null
    /**
     * The data used to create many sources.
     */
    data: sourcesCreateManyInput | sourcesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sourcesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * sources update
   */
  export type sourcesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sources
     */
    select?: sourcesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sources
     */
    omit?: sourcesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sourcesInclude<ExtArgs> | null
    /**
     * The data needed to update a sources.
     */
    data: XOR<sourcesUpdateInput, sourcesUncheckedUpdateInput>
    /**
     * Choose, which sources to update.
     */
    where: sourcesWhereUniqueInput
  }

  /**
   * sources updateMany
   */
  export type sourcesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sources.
     */
    data: XOR<sourcesUpdateManyMutationInput, sourcesUncheckedUpdateManyInput>
    /**
     * Filter which sources to update
     */
    where?: sourcesWhereInput
    /**
     * Limit how many sources to update.
     */
    limit?: number
  }

  /**
   * sources updateManyAndReturn
   */
  export type sourcesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sources
     */
    select?: sourcesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sources
     */
    omit?: sourcesOmit<ExtArgs> | null
    /**
     * The data used to update sources.
     */
    data: XOR<sourcesUpdateManyMutationInput, sourcesUncheckedUpdateManyInput>
    /**
     * Filter which sources to update
     */
    where?: sourcesWhereInput
    /**
     * Limit how many sources to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sourcesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * sources upsert
   */
  export type sourcesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sources
     */
    select?: sourcesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sources
     */
    omit?: sourcesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sourcesInclude<ExtArgs> | null
    /**
     * The filter to search for the sources to update in case it exists.
     */
    where: sourcesWhereUniqueInput
    /**
     * In case the sources found by the `where` argument doesn't exist, create a new sources with this data.
     */
    create: XOR<sourcesCreateInput, sourcesUncheckedCreateInput>
    /**
     * In case the sources was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sourcesUpdateInput, sourcesUncheckedUpdateInput>
  }

  /**
   * sources delete
   */
  export type sourcesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sources
     */
    select?: sourcesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sources
     */
    omit?: sourcesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sourcesInclude<ExtArgs> | null
    /**
     * Filter which sources to delete.
     */
    where: sourcesWhereUniqueInput
  }

  /**
   * sources deleteMany
   */
  export type sourcesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sources to delete
     */
    where?: sourcesWhereInput
    /**
     * Limit how many sources to delete.
     */
    limit?: number
  }

  /**
   * sources.users
   */
  export type sources$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * sources without action
   */
  export type sourcesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sources
     */
    select?: sourcesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sources
     */
    omit?: sourcesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sourcesInclude<ExtArgs> | null
  }


  /**
   * Model projectStack
   */

  export type AggregateProjectStack = {
    _count: ProjectStackCountAggregateOutputType | null
    _min: ProjectStackMinAggregateOutputType | null
    _max: ProjectStackMaxAggregateOutputType | null
  }

  export type ProjectStackMinAggregateOutputType = {
    id: string | null
    name: string | null
    projectId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectStackMaxAggregateOutputType = {
    id: string | null
    name: string | null
    projectId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectStackCountAggregateOutputType = {
    id: number
    name: number
    projectId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectStackMinAggregateInputType = {
    id?: true
    name?: true
    projectId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectStackMaxAggregateInputType = {
    id?: true
    name?: true
    projectId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectStackCountAggregateInputType = {
    id?: true
    name?: true
    projectId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectStackAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which projectStack to aggregate.
     */
    where?: projectStackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projectStacks to fetch.
     */
    orderBy?: projectStackOrderByWithRelationInput | projectStackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: projectStackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projectStacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projectStacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned projectStacks
    **/
    _count?: true | ProjectStackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectStackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectStackMaxAggregateInputType
  }

  export type GetProjectStackAggregateType<T extends ProjectStackAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectStack]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectStack[P]>
      : GetScalarType<T[P], AggregateProjectStack[P]>
  }




  export type projectStackGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: projectStackWhereInput
    orderBy?: projectStackOrderByWithAggregationInput | projectStackOrderByWithAggregationInput[]
    by: ProjectStackScalarFieldEnum[] | ProjectStackScalarFieldEnum
    having?: projectStackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectStackCountAggregateInputType | true
    _min?: ProjectStackMinAggregateInputType
    _max?: ProjectStackMaxAggregateInputType
  }

  export type ProjectStackGroupByOutputType = {
    id: string
    name: string
    projectId: string
    createdAt: Date
    updatedAt: Date
    _count: ProjectStackCountAggregateOutputType | null
    _min: ProjectStackMinAggregateOutputType | null
    _max: ProjectStackMaxAggregateOutputType | null
  }

  type GetProjectStackGroupByPayload<T extends projectStackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectStackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectStackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectStackGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectStackGroupByOutputType[P]>
        }
      >
    >


  export type projectStackSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    projectId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | projectsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectStack"]>

  export type projectStackSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    projectId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | projectsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectStack"]>

  export type projectStackSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    projectId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | projectsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectStack"]>

  export type projectStackSelectScalar = {
    id?: boolean
    name?: boolean
    projectId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type projectStackOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "projectId" | "createdAt" | "updatedAt", ExtArgs["result"]["projectStack"]>
  export type projectStackInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | projectsDefaultArgs<ExtArgs>
  }
  export type projectStackIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | projectsDefaultArgs<ExtArgs>
  }
  export type projectStackIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | projectsDefaultArgs<ExtArgs>
  }

  export type $projectStackPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "projectStack"
    objects: {
      project: Prisma.$projectsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      projectId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["projectStack"]>
    composites: {}
  }

  type projectStackGetPayload<S extends boolean | null | undefined | projectStackDefaultArgs> = $Result.GetResult<Prisma.$projectStackPayload, S>

  type projectStackCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<projectStackFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectStackCountAggregateInputType | true
    }

  export interface projectStackDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['projectStack'], meta: { name: 'projectStack' } }
    /**
     * Find zero or one ProjectStack that matches the filter.
     * @param {projectStackFindUniqueArgs} args - Arguments to find a ProjectStack
     * @example
     * // Get one ProjectStack
     * const projectStack = await prisma.projectStack.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends projectStackFindUniqueArgs>(args: SelectSubset<T, projectStackFindUniqueArgs<ExtArgs>>): Prisma__projectStackClient<$Result.GetResult<Prisma.$projectStackPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectStack that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {projectStackFindUniqueOrThrowArgs} args - Arguments to find a ProjectStack
     * @example
     * // Get one ProjectStack
     * const projectStack = await prisma.projectStack.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends projectStackFindUniqueOrThrowArgs>(args: SelectSubset<T, projectStackFindUniqueOrThrowArgs<ExtArgs>>): Prisma__projectStackClient<$Result.GetResult<Prisma.$projectStackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectStack that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectStackFindFirstArgs} args - Arguments to find a ProjectStack
     * @example
     * // Get one ProjectStack
     * const projectStack = await prisma.projectStack.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends projectStackFindFirstArgs>(args?: SelectSubset<T, projectStackFindFirstArgs<ExtArgs>>): Prisma__projectStackClient<$Result.GetResult<Prisma.$projectStackPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectStack that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectStackFindFirstOrThrowArgs} args - Arguments to find a ProjectStack
     * @example
     * // Get one ProjectStack
     * const projectStack = await prisma.projectStack.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends projectStackFindFirstOrThrowArgs>(args?: SelectSubset<T, projectStackFindFirstOrThrowArgs<ExtArgs>>): Prisma__projectStackClient<$Result.GetResult<Prisma.$projectStackPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectStacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectStackFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectStacks
     * const projectStacks = await prisma.projectStack.findMany()
     * 
     * // Get first 10 ProjectStacks
     * const projectStacks = await prisma.projectStack.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectStackWithIdOnly = await prisma.projectStack.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends projectStackFindManyArgs>(args?: SelectSubset<T, projectStackFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectStackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectStack.
     * @param {projectStackCreateArgs} args - Arguments to create a ProjectStack.
     * @example
     * // Create one ProjectStack
     * const ProjectStack = await prisma.projectStack.create({
     *   data: {
     *     // ... data to create a ProjectStack
     *   }
     * })
     * 
     */
    create<T extends projectStackCreateArgs>(args: SelectSubset<T, projectStackCreateArgs<ExtArgs>>): Prisma__projectStackClient<$Result.GetResult<Prisma.$projectStackPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectStacks.
     * @param {projectStackCreateManyArgs} args - Arguments to create many ProjectStacks.
     * @example
     * // Create many ProjectStacks
     * const projectStack = await prisma.projectStack.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends projectStackCreateManyArgs>(args?: SelectSubset<T, projectStackCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectStacks and returns the data saved in the database.
     * @param {projectStackCreateManyAndReturnArgs} args - Arguments to create many ProjectStacks.
     * @example
     * // Create many ProjectStacks
     * const projectStack = await prisma.projectStack.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectStacks and only return the `id`
     * const projectStackWithIdOnly = await prisma.projectStack.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends projectStackCreateManyAndReturnArgs>(args?: SelectSubset<T, projectStackCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectStackPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProjectStack.
     * @param {projectStackDeleteArgs} args - Arguments to delete one ProjectStack.
     * @example
     * // Delete one ProjectStack
     * const ProjectStack = await prisma.projectStack.delete({
     *   where: {
     *     // ... filter to delete one ProjectStack
     *   }
     * })
     * 
     */
    delete<T extends projectStackDeleteArgs>(args: SelectSubset<T, projectStackDeleteArgs<ExtArgs>>): Prisma__projectStackClient<$Result.GetResult<Prisma.$projectStackPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectStack.
     * @param {projectStackUpdateArgs} args - Arguments to update one ProjectStack.
     * @example
     * // Update one ProjectStack
     * const projectStack = await prisma.projectStack.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends projectStackUpdateArgs>(args: SelectSubset<T, projectStackUpdateArgs<ExtArgs>>): Prisma__projectStackClient<$Result.GetResult<Prisma.$projectStackPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectStacks.
     * @param {projectStackDeleteManyArgs} args - Arguments to filter ProjectStacks to delete.
     * @example
     * // Delete a few ProjectStacks
     * const { count } = await prisma.projectStack.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends projectStackDeleteManyArgs>(args?: SelectSubset<T, projectStackDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectStacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectStackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectStacks
     * const projectStack = await prisma.projectStack.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends projectStackUpdateManyArgs>(args: SelectSubset<T, projectStackUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectStacks and returns the data updated in the database.
     * @param {projectStackUpdateManyAndReturnArgs} args - Arguments to update many ProjectStacks.
     * @example
     * // Update many ProjectStacks
     * const projectStack = await prisma.projectStack.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProjectStacks and only return the `id`
     * const projectStackWithIdOnly = await prisma.projectStack.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends projectStackUpdateManyAndReturnArgs>(args: SelectSubset<T, projectStackUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectStackPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProjectStack.
     * @param {projectStackUpsertArgs} args - Arguments to update or create a ProjectStack.
     * @example
     * // Update or create a ProjectStack
     * const projectStack = await prisma.projectStack.upsert({
     *   create: {
     *     // ... data to create a ProjectStack
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectStack we want to update
     *   }
     * })
     */
    upsert<T extends projectStackUpsertArgs>(args: SelectSubset<T, projectStackUpsertArgs<ExtArgs>>): Prisma__projectStackClient<$Result.GetResult<Prisma.$projectStackPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectStacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectStackCountArgs} args - Arguments to filter ProjectStacks to count.
     * @example
     * // Count the number of ProjectStacks
     * const count = await prisma.projectStack.count({
     *   where: {
     *     // ... the filter for the ProjectStacks we want to count
     *   }
     * })
    **/
    count<T extends projectStackCountArgs>(
      args?: Subset<T, projectStackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectStackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectStack.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectStackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectStackAggregateArgs>(args: Subset<T, ProjectStackAggregateArgs>): Prisma.PrismaPromise<GetProjectStackAggregateType<T>>

    /**
     * Group by ProjectStack.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectStackGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends projectStackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: projectStackGroupByArgs['orderBy'] }
        : { orderBy?: projectStackGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, projectStackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectStackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the projectStack model
   */
  readonly fields: projectStackFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for projectStack.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__projectStackClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends projectsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, projectsDefaultArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the projectStack model
   */
  interface projectStackFieldRefs {
    readonly id: FieldRef<"projectStack", 'String'>
    readonly name: FieldRef<"projectStack", 'String'>
    readonly projectId: FieldRef<"projectStack", 'String'>
    readonly createdAt: FieldRef<"projectStack", 'DateTime'>
    readonly updatedAt: FieldRef<"projectStack", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * projectStack findUnique
   */
  export type projectStackFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectStack
     */
    select?: projectStackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectStack
     */
    omit?: projectStackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectStackInclude<ExtArgs> | null
    /**
     * Filter, which projectStack to fetch.
     */
    where: projectStackWhereUniqueInput
  }

  /**
   * projectStack findUniqueOrThrow
   */
  export type projectStackFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectStack
     */
    select?: projectStackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectStack
     */
    omit?: projectStackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectStackInclude<ExtArgs> | null
    /**
     * Filter, which projectStack to fetch.
     */
    where: projectStackWhereUniqueInput
  }

  /**
   * projectStack findFirst
   */
  export type projectStackFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectStack
     */
    select?: projectStackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectStack
     */
    omit?: projectStackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectStackInclude<ExtArgs> | null
    /**
     * Filter, which projectStack to fetch.
     */
    where?: projectStackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projectStacks to fetch.
     */
    orderBy?: projectStackOrderByWithRelationInput | projectStackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for projectStacks.
     */
    cursor?: projectStackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projectStacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projectStacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projectStacks.
     */
    distinct?: ProjectStackScalarFieldEnum | ProjectStackScalarFieldEnum[]
  }

  /**
   * projectStack findFirstOrThrow
   */
  export type projectStackFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectStack
     */
    select?: projectStackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectStack
     */
    omit?: projectStackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectStackInclude<ExtArgs> | null
    /**
     * Filter, which projectStack to fetch.
     */
    where?: projectStackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projectStacks to fetch.
     */
    orderBy?: projectStackOrderByWithRelationInput | projectStackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for projectStacks.
     */
    cursor?: projectStackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projectStacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projectStacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projectStacks.
     */
    distinct?: ProjectStackScalarFieldEnum | ProjectStackScalarFieldEnum[]
  }

  /**
   * projectStack findMany
   */
  export type projectStackFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectStack
     */
    select?: projectStackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectStack
     */
    omit?: projectStackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectStackInclude<ExtArgs> | null
    /**
     * Filter, which projectStacks to fetch.
     */
    where?: projectStackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projectStacks to fetch.
     */
    orderBy?: projectStackOrderByWithRelationInput | projectStackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing projectStacks.
     */
    cursor?: projectStackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projectStacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projectStacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projectStacks.
     */
    distinct?: ProjectStackScalarFieldEnum | ProjectStackScalarFieldEnum[]
  }

  /**
   * projectStack create
   */
  export type projectStackCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectStack
     */
    select?: projectStackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectStack
     */
    omit?: projectStackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectStackInclude<ExtArgs> | null
    /**
     * The data needed to create a projectStack.
     */
    data: XOR<projectStackCreateInput, projectStackUncheckedCreateInput>
  }

  /**
   * projectStack createMany
   */
  export type projectStackCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many projectStacks.
     */
    data: projectStackCreateManyInput | projectStackCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * projectStack createManyAndReturn
   */
  export type projectStackCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectStack
     */
    select?: projectStackSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the projectStack
     */
    omit?: projectStackOmit<ExtArgs> | null
    /**
     * The data used to create many projectStacks.
     */
    data: projectStackCreateManyInput | projectStackCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectStackIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * projectStack update
   */
  export type projectStackUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectStack
     */
    select?: projectStackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectStack
     */
    omit?: projectStackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectStackInclude<ExtArgs> | null
    /**
     * The data needed to update a projectStack.
     */
    data: XOR<projectStackUpdateInput, projectStackUncheckedUpdateInput>
    /**
     * Choose, which projectStack to update.
     */
    where: projectStackWhereUniqueInput
  }

  /**
   * projectStack updateMany
   */
  export type projectStackUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update projectStacks.
     */
    data: XOR<projectStackUpdateManyMutationInput, projectStackUncheckedUpdateManyInput>
    /**
     * Filter which projectStacks to update
     */
    where?: projectStackWhereInput
    /**
     * Limit how many projectStacks to update.
     */
    limit?: number
  }

  /**
   * projectStack updateManyAndReturn
   */
  export type projectStackUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectStack
     */
    select?: projectStackSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the projectStack
     */
    omit?: projectStackOmit<ExtArgs> | null
    /**
     * The data used to update projectStacks.
     */
    data: XOR<projectStackUpdateManyMutationInput, projectStackUncheckedUpdateManyInput>
    /**
     * Filter which projectStacks to update
     */
    where?: projectStackWhereInput
    /**
     * Limit how many projectStacks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectStackIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * projectStack upsert
   */
  export type projectStackUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectStack
     */
    select?: projectStackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectStack
     */
    omit?: projectStackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectStackInclude<ExtArgs> | null
    /**
     * The filter to search for the projectStack to update in case it exists.
     */
    where: projectStackWhereUniqueInput
    /**
     * In case the projectStack found by the `where` argument doesn't exist, create a new projectStack with this data.
     */
    create: XOR<projectStackCreateInput, projectStackUncheckedCreateInput>
    /**
     * In case the projectStack was found with the provided `where` argument, update it with this data.
     */
    update: XOR<projectStackUpdateInput, projectStackUncheckedUpdateInput>
  }

  /**
   * projectStack delete
   */
  export type projectStackDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectStack
     */
    select?: projectStackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectStack
     */
    omit?: projectStackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectStackInclude<ExtArgs> | null
    /**
     * Filter which projectStack to delete.
     */
    where: projectStackWhereUniqueInput
  }

  /**
   * projectStack deleteMany
   */
  export type projectStackDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which projectStacks to delete
     */
    where?: projectStackWhereInput
    /**
     * Limit how many projectStacks to delete.
     */
    limit?: number
  }

  /**
   * projectStack without action
   */
  export type projectStackDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectStack
     */
    select?: projectStackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectStack
     */
    omit?: projectStackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectStackInclude<ExtArgs> | null
  }


  /**
   * Model types
   */

  export type AggregateTypes = {
    _count: TypesCountAggregateOutputType | null
    _min: TypesMinAggregateOutputType | null
    _max: TypesMaxAggregateOutputType | null
  }

  export type TypesMinAggregateOutputType = {
    id: string | null
    type: $Enums.Types | null
    projectId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    usersId: string | null
  }

  export type TypesMaxAggregateOutputType = {
    id: string | null
    type: $Enums.Types | null
    projectId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    usersId: string | null
  }

  export type TypesCountAggregateOutputType = {
    id: number
    type: number
    projectId: number
    createdAt: number
    updatedAt: number
    usersId: number
    _all: number
  }


  export type TypesMinAggregateInputType = {
    id?: true
    type?: true
    projectId?: true
    createdAt?: true
    updatedAt?: true
    usersId?: true
  }

  export type TypesMaxAggregateInputType = {
    id?: true
    type?: true
    projectId?: true
    createdAt?: true
    updatedAt?: true
    usersId?: true
  }

  export type TypesCountAggregateInputType = {
    id?: true
    type?: true
    projectId?: true
    createdAt?: true
    updatedAt?: true
    usersId?: true
    _all?: true
  }

  export type TypesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which types to aggregate.
     */
    where?: typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of types to fetch.
     */
    orderBy?: typesOrderByWithRelationInput | typesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned types
    **/
    _count?: true | TypesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TypesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TypesMaxAggregateInputType
  }

  export type GetTypesAggregateType<T extends TypesAggregateArgs> = {
        [P in keyof T & keyof AggregateTypes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTypes[P]>
      : GetScalarType<T[P], AggregateTypes[P]>
  }




  export type typesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: typesWhereInput
    orderBy?: typesOrderByWithAggregationInput | typesOrderByWithAggregationInput[]
    by: TypesScalarFieldEnum[] | TypesScalarFieldEnum
    having?: typesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TypesCountAggregateInputType | true
    _min?: TypesMinAggregateInputType
    _max?: TypesMaxAggregateInputType
  }

  export type TypesGroupByOutputType = {
    id: string
    type: $Enums.Types
    projectId: string
    createdAt: Date
    updatedAt: Date
    usersId: string | null
    _count: TypesCountAggregateOutputType | null
    _min: TypesMinAggregateOutputType | null
    _max: TypesMaxAggregateOutputType | null
  }

  type GetTypesGroupByPayload<T extends typesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TypesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TypesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TypesGroupByOutputType[P]>
            : GetScalarType<T[P], TypesGroupByOutputType[P]>
        }
      >
    >


  export type typesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    projectId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usersId?: boolean
    project?: boolean | projectsDefaultArgs<ExtArgs>
    users?: boolean | types$usersArgs<ExtArgs>
  }, ExtArgs["result"]["types"]>

  export type typesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    projectId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usersId?: boolean
    project?: boolean | projectsDefaultArgs<ExtArgs>
    users?: boolean | types$usersArgs<ExtArgs>
  }, ExtArgs["result"]["types"]>

  export type typesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    projectId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usersId?: boolean
    project?: boolean | projectsDefaultArgs<ExtArgs>
    users?: boolean | types$usersArgs<ExtArgs>
  }, ExtArgs["result"]["types"]>

  export type typesSelectScalar = {
    id?: boolean
    type?: boolean
    projectId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usersId?: boolean
  }

  export type typesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "projectId" | "createdAt" | "updatedAt" | "usersId", ExtArgs["result"]["types"]>
  export type typesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | projectsDefaultArgs<ExtArgs>
    users?: boolean | types$usersArgs<ExtArgs>
  }
  export type typesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | projectsDefaultArgs<ExtArgs>
    users?: boolean | types$usersArgs<ExtArgs>
  }
  export type typesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | projectsDefaultArgs<ExtArgs>
    users?: boolean | types$usersArgs<ExtArgs>
  }

  export type $typesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "types"
    objects: {
      project: Prisma.$projectsPayload<ExtArgs>
      users: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.Types
      projectId: string
      createdAt: Date
      updatedAt: Date
      usersId: string | null
    }, ExtArgs["result"]["types"]>
    composites: {}
  }

  type typesGetPayload<S extends boolean | null | undefined | typesDefaultArgs> = $Result.GetResult<Prisma.$typesPayload, S>

  type typesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<typesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TypesCountAggregateInputType | true
    }

  export interface typesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['types'], meta: { name: 'types' } }
    /**
     * Find zero or one Types that matches the filter.
     * @param {typesFindUniqueArgs} args - Arguments to find a Types
     * @example
     * // Get one Types
     * const types = await prisma.types.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends typesFindUniqueArgs>(args: SelectSubset<T, typesFindUniqueArgs<ExtArgs>>): Prisma__typesClient<$Result.GetResult<Prisma.$typesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Types that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {typesFindUniqueOrThrowArgs} args - Arguments to find a Types
     * @example
     * // Get one Types
     * const types = await prisma.types.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends typesFindUniqueOrThrowArgs>(args: SelectSubset<T, typesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__typesClient<$Result.GetResult<Prisma.$typesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {typesFindFirstArgs} args - Arguments to find a Types
     * @example
     * // Get one Types
     * const types = await prisma.types.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends typesFindFirstArgs>(args?: SelectSubset<T, typesFindFirstArgs<ExtArgs>>): Prisma__typesClient<$Result.GetResult<Prisma.$typesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Types that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {typesFindFirstOrThrowArgs} args - Arguments to find a Types
     * @example
     * // Get one Types
     * const types = await prisma.types.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends typesFindFirstOrThrowArgs>(args?: SelectSubset<T, typesFindFirstOrThrowArgs<ExtArgs>>): Prisma__typesClient<$Result.GetResult<Prisma.$typesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {typesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Types
     * const types = await prisma.types.findMany()
     * 
     * // Get first 10 Types
     * const types = await prisma.types.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const typesWithIdOnly = await prisma.types.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends typesFindManyArgs>(args?: SelectSubset<T, typesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$typesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Types.
     * @param {typesCreateArgs} args - Arguments to create a Types.
     * @example
     * // Create one Types
     * const Types = await prisma.types.create({
     *   data: {
     *     // ... data to create a Types
     *   }
     * })
     * 
     */
    create<T extends typesCreateArgs>(args: SelectSubset<T, typesCreateArgs<ExtArgs>>): Prisma__typesClient<$Result.GetResult<Prisma.$typesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Types.
     * @param {typesCreateManyArgs} args - Arguments to create many Types.
     * @example
     * // Create many Types
     * const types = await prisma.types.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends typesCreateManyArgs>(args?: SelectSubset<T, typesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Types and returns the data saved in the database.
     * @param {typesCreateManyAndReturnArgs} args - Arguments to create many Types.
     * @example
     * // Create many Types
     * const types = await prisma.types.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Types and only return the `id`
     * const typesWithIdOnly = await prisma.types.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends typesCreateManyAndReturnArgs>(args?: SelectSubset<T, typesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$typesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Types.
     * @param {typesDeleteArgs} args - Arguments to delete one Types.
     * @example
     * // Delete one Types
     * const Types = await prisma.types.delete({
     *   where: {
     *     // ... filter to delete one Types
     *   }
     * })
     * 
     */
    delete<T extends typesDeleteArgs>(args: SelectSubset<T, typesDeleteArgs<ExtArgs>>): Prisma__typesClient<$Result.GetResult<Prisma.$typesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Types.
     * @param {typesUpdateArgs} args - Arguments to update one Types.
     * @example
     * // Update one Types
     * const types = await prisma.types.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends typesUpdateArgs>(args: SelectSubset<T, typesUpdateArgs<ExtArgs>>): Prisma__typesClient<$Result.GetResult<Prisma.$typesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Types.
     * @param {typesDeleteManyArgs} args - Arguments to filter Types to delete.
     * @example
     * // Delete a few Types
     * const { count } = await prisma.types.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends typesDeleteManyArgs>(args?: SelectSubset<T, typesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {typesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Types
     * const types = await prisma.types.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends typesUpdateManyArgs>(args: SelectSubset<T, typesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Types and returns the data updated in the database.
     * @param {typesUpdateManyAndReturnArgs} args - Arguments to update many Types.
     * @example
     * // Update many Types
     * const types = await prisma.types.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Types and only return the `id`
     * const typesWithIdOnly = await prisma.types.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends typesUpdateManyAndReturnArgs>(args: SelectSubset<T, typesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$typesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Types.
     * @param {typesUpsertArgs} args - Arguments to update or create a Types.
     * @example
     * // Update or create a Types
     * const types = await prisma.types.upsert({
     *   create: {
     *     // ... data to create a Types
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Types we want to update
     *   }
     * })
     */
    upsert<T extends typesUpsertArgs>(args: SelectSubset<T, typesUpsertArgs<ExtArgs>>): Prisma__typesClient<$Result.GetResult<Prisma.$typesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {typesCountArgs} args - Arguments to filter Types to count.
     * @example
     * // Count the number of Types
     * const count = await prisma.types.count({
     *   where: {
     *     // ... the filter for the Types we want to count
     *   }
     * })
    **/
    count<T extends typesCountArgs>(
      args?: Subset<T, typesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TypesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TypesAggregateArgs>(args: Subset<T, TypesAggregateArgs>): Prisma.PrismaPromise<GetTypesAggregateType<T>>

    /**
     * Group by Types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {typesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends typesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: typesGroupByArgs['orderBy'] }
        : { orderBy?: typesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, typesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTypesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the types model
   */
  readonly fields: typesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for types.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__typesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends projectsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, projectsDefaultArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends types$usersArgs<ExtArgs> = {}>(args?: Subset<T, types$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the types model
   */
  interface typesFieldRefs {
    readonly id: FieldRef<"types", 'String'>
    readonly type: FieldRef<"types", 'Types'>
    readonly projectId: FieldRef<"types", 'String'>
    readonly createdAt: FieldRef<"types", 'DateTime'>
    readonly updatedAt: FieldRef<"types", 'DateTime'>
    readonly usersId: FieldRef<"types", 'String'>
  }
    

  // Custom InputTypes
  /**
   * types findUnique
   */
  export type typesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the types
     */
    select?: typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the types
     */
    omit?: typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: typesInclude<ExtArgs> | null
    /**
     * Filter, which types to fetch.
     */
    where: typesWhereUniqueInput
  }

  /**
   * types findUniqueOrThrow
   */
  export type typesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the types
     */
    select?: typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the types
     */
    omit?: typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: typesInclude<ExtArgs> | null
    /**
     * Filter, which types to fetch.
     */
    where: typesWhereUniqueInput
  }

  /**
   * types findFirst
   */
  export type typesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the types
     */
    select?: typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the types
     */
    omit?: typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: typesInclude<ExtArgs> | null
    /**
     * Filter, which types to fetch.
     */
    where?: typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of types to fetch.
     */
    orderBy?: typesOrderByWithRelationInput | typesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for types.
     */
    cursor?: typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of types.
     */
    distinct?: TypesScalarFieldEnum | TypesScalarFieldEnum[]
  }

  /**
   * types findFirstOrThrow
   */
  export type typesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the types
     */
    select?: typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the types
     */
    omit?: typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: typesInclude<ExtArgs> | null
    /**
     * Filter, which types to fetch.
     */
    where?: typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of types to fetch.
     */
    orderBy?: typesOrderByWithRelationInput | typesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for types.
     */
    cursor?: typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of types.
     */
    distinct?: TypesScalarFieldEnum | TypesScalarFieldEnum[]
  }

  /**
   * types findMany
   */
  export type typesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the types
     */
    select?: typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the types
     */
    omit?: typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: typesInclude<ExtArgs> | null
    /**
     * Filter, which types to fetch.
     */
    where?: typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of types to fetch.
     */
    orderBy?: typesOrderByWithRelationInput | typesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing types.
     */
    cursor?: typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of types.
     */
    distinct?: TypesScalarFieldEnum | TypesScalarFieldEnum[]
  }

  /**
   * types create
   */
  export type typesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the types
     */
    select?: typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the types
     */
    omit?: typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: typesInclude<ExtArgs> | null
    /**
     * The data needed to create a types.
     */
    data: XOR<typesCreateInput, typesUncheckedCreateInput>
  }

  /**
   * types createMany
   */
  export type typesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many types.
     */
    data: typesCreateManyInput | typesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * types createManyAndReturn
   */
  export type typesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the types
     */
    select?: typesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the types
     */
    omit?: typesOmit<ExtArgs> | null
    /**
     * The data used to create many types.
     */
    data: typesCreateManyInput | typesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: typesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * types update
   */
  export type typesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the types
     */
    select?: typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the types
     */
    omit?: typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: typesInclude<ExtArgs> | null
    /**
     * The data needed to update a types.
     */
    data: XOR<typesUpdateInput, typesUncheckedUpdateInput>
    /**
     * Choose, which types to update.
     */
    where: typesWhereUniqueInput
  }

  /**
   * types updateMany
   */
  export type typesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update types.
     */
    data: XOR<typesUpdateManyMutationInput, typesUncheckedUpdateManyInput>
    /**
     * Filter which types to update
     */
    where?: typesWhereInput
    /**
     * Limit how many types to update.
     */
    limit?: number
  }

  /**
   * types updateManyAndReturn
   */
  export type typesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the types
     */
    select?: typesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the types
     */
    omit?: typesOmit<ExtArgs> | null
    /**
     * The data used to update types.
     */
    data: XOR<typesUpdateManyMutationInput, typesUncheckedUpdateManyInput>
    /**
     * Filter which types to update
     */
    where?: typesWhereInput
    /**
     * Limit how many types to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: typesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * types upsert
   */
  export type typesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the types
     */
    select?: typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the types
     */
    omit?: typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: typesInclude<ExtArgs> | null
    /**
     * The filter to search for the types to update in case it exists.
     */
    where: typesWhereUniqueInput
    /**
     * In case the types found by the `where` argument doesn't exist, create a new types with this data.
     */
    create: XOR<typesCreateInput, typesUncheckedCreateInput>
    /**
     * In case the types was found with the provided `where` argument, update it with this data.
     */
    update: XOR<typesUpdateInput, typesUncheckedUpdateInput>
  }

  /**
   * types delete
   */
  export type typesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the types
     */
    select?: typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the types
     */
    omit?: typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: typesInclude<ExtArgs> | null
    /**
     * Filter which types to delete.
     */
    where: typesWhereUniqueInput
  }

  /**
   * types deleteMany
   */
  export type typesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which types to delete
     */
    where?: typesWhereInput
    /**
     * Limit how many types to delete.
     */
    limit?: number
  }

  /**
   * types.users
   */
  export type types$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * types without action
   */
  export type typesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the types
     */
    select?: typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the types
     */
    omit?: typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: typesInclude<ExtArgs> | null
  }


  /**
   * Model education
   */

  export type AggregateEducation = {
    _count: EducationCountAggregateOutputType | null
    _min: EducationMinAggregateOutputType | null
    _max: EducationMaxAggregateOutputType | null
  }

  export type EducationMinAggregateOutputType = {
    id: string | null
    program: string | null
    branch: string | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EducationMaxAggregateOutputType = {
    id: string | null
    program: string | null
    branch: string | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EducationCountAggregateOutputType = {
    id: number
    program: number
    branch: number
    startDate: number
    endDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EducationMinAggregateInputType = {
    id?: true
    program?: true
    branch?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EducationMaxAggregateInputType = {
    id?: true
    program?: true
    branch?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EducationCountAggregateInputType = {
    id?: true
    program?: true
    branch?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EducationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which education to aggregate.
     */
    where?: educationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of educations to fetch.
     */
    orderBy?: educationOrderByWithRelationInput | educationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: educationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` educations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned educations
    **/
    _count?: true | EducationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EducationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EducationMaxAggregateInputType
  }

  export type GetEducationAggregateType<T extends EducationAggregateArgs> = {
        [P in keyof T & keyof AggregateEducation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEducation[P]>
      : GetScalarType<T[P], AggregateEducation[P]>
  }




  export type educationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: educationWhereInput
    orderBy?: educationOrderByWithAggregationInput | educationOrderByWithAggregationInput[]
    by: EducationScalarFieldEnum[] | EducationScalarFieldEnum
    having?: educationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EducationCountAggregateInputType | true
    _min?: EducationMinAggregateInputType
    _max?: EducationMaxAggregateInputType
  }

  export type EducationGroupByOutputType = {
    id: string
    program: string
    branch: string
    startDate: Date
    endDate: Date
    createdAt: Date
    updatedAt: Date
    _count: EducationCountAggregateOutputType | null
    _min: EducationMinAggregateOutputType | null
    _max: EducationMaxAggregateOutputType | null
  }

  type GetEducationGroupByPayload<T extends educationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EducationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EducationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EducationGroupByOutputType[P]>
            : GetScalarType<T[P], EducationGroupByOutputType[P]>
        }
      >
    >


  export type educationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    program?: boolean
    branch?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    educationDescriptions?: boolean | education$educationDescriptionsArgs<ExtArgs>
    _count?: boolean | EducationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["education"]>

  export type educationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    program?: boolean
    branch?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["education"]>

  export type educationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    program?: boolean
    branch?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["education"]>

  export type educationSelectScalar = {
    id?: boolean
    program?: boolean
    branch?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type educationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "program" | "branch" | "startDate" | "endDate" | "createdAt" | "updatedAt", ExtArgs["result"]["education"]>
  export type educationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    educationDescriptions?: boolean | education$educationDescriptionsArgs<ExtArgs>
    _count?: boolean | EducationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type educationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type educationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $educationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "education"
    objects: {
      educationDescriptions: Prisma.$education_descriptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      program: string
      branch: string
      startDate: Date
      endDate: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["education"]>
    composites: {}
  }

  type educationGetPayload<S extends boolean | null | undefined | educationDefaultArgs> = $Result.GetResult<Prisma.$educationPayload, S>

  type educationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<educationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EducationCountAggregateInputType | true
    }

  export interface educationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['education'], meta: { name: 'education' } }
    /**
     * Find zero or one Education that matches the filter.
     * @param {educationFindUniqueArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends educationFindUniqueArgs>(args: SelectSubset<T, educationFindUniqueArgs<ExtArgs>>): Prisma__educationClient<$Result.GetResult<Prisma.$educationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Education that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {educationFindUniqueOrThrowArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends educationFindUniqueOrThrowArgs>(args: SelectSubset<T, educationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__educationClient<$Result.GetResult<Prisma.$educationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Education that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {educationFindFirstArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends educationFindFirstArgs>(args?: SelectSubset<T, educationFindFirstArgs<ExtArgs>>): Prisma__educationClient<$Result.GetResult<Prisma.$educationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Education that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {educationFindFirstOrThrowArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends educationFindFirstOrThrowArgs>(args?: SelectSubset<T, educationFindFirstOrThrowArgs<ExtArgs>>): Prisma__educationClient<$Result.GetResult<Prisma.$educationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Educations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {educationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Educations
     * const educations = await prisma.education.findMany()
     * 
     * // Get first 10 Educations
     * const educations = await prisma.education.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const educationWithIdOnly = await prisma.education.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends educationFindManyArgs>(args?: SelectSubset<T, educationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$educationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Education.
     * @param {educationCreateArgs} args - Arguments to create a Education.
     * @example
     * // Create one Education
     * const Education = await prisma.education.create({
     *   data: {
     *     // ... data to create a Education
     *   }
     * })
     * 
     */
    create<T extends educationCreateArgs>(args: SelectSubset<T, educationCreateArgs<ExtArgs>>): Prisma__educationClient<$Result.GetResult<Prisma.$educationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Educations.
     * @param {educationCreateManyArgs} args - Arguments to create many Educations.
     * @example
     * // Create many Educations
     * const education = await prisma.education.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends educationCreateManyArgs>(args?: SelectSubset<T, educationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Educations and returns the data saved in the database.
     * @param {educationCreateManyAndReturnArgs} args - Arguments to create many Educations.
     * @example
     * // Create many Educations
     * const education = await prisma.education.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Educations and only return the `id`
     * const educationWithIdOnly = await prisma.education.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends educationCreateManyAndReturnArgs>(args?: SelectSubset<T, educationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$educationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Education.
     * @param {educationDeleteArgs} args - Arguments to delete one Education.
     * @example
     * // Delete one Education
     * const Education = await prisma.education.delete({
     *   where: {
     *     // ... filter to delete one Education
     *   }
     * })
     * 
     */
    delete<T extends educationDeleteArgs>(args: SelectSubset<T, educationDeleteArgs<ExtArgs>>): Prisma__educationClient<$Result.GetResult<Prisma.$educationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Education.
     * @param {educationUpdateArgs} args - Arguments to update one Education.
     * @example
     * // Update one Education
     * const education = await prisma.education.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends educationUpdateArgs>(args: SelectSubset<T, educationUpdateArgs<ExtArgs>>): Prisma__educationClient<$Result.GetResult<Prisma.$educationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Educations.
     * @param {educationDeleteManyArgs} args - Arguments to filter Educations to delete.
     * @example
     * // Delete a few Educations
     * const { count } = await prisma.education.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends educationDeleteManyArgs>(args?: SelectSubset<T, educationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Educations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {educationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Educations
     * const education = await prisma.education.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends educationUpdateManyArgs>(args: SelectSubset<T, educationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Educations and returns the data updated in the database.
     * @param {educationUpdateManyAndReturnArgs} args - Arguments to update many Educations.
     * @example
     * // Update many Educations
     * const education = await prisma.education.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Educations and only return the `id`
     * const educationWithIdOnly = await prisma.education.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends educationUpdateManyAndReturnArgs>(args: SelectSubset<T, educationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$educationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Education.
     * @param {educationUpsertArgs} args - Arguments to update or create a Education.
     * @example
     * // Update or create a Education
     * const education = await prisma.education.upsert({
     *   create: {
     *     // ... data to create a Education
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Education we want to update
     *   }
     * })
     */
    upsert<T extends educationUpsertArgs>(args: SelectSubset<T, educationUpsertArgs<ExtArgs>>): Prisma__educationClient<$Result.GetResult<Prisma.$educationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Educations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {educationCountArgs} args - Arguments to filter Educations to count.
     * @example
     * // Count the number of Educations
     * const count = await prisma.education.count({
     *   where: {
     *     // ... the filter for the Educations we want to count
     *   }
     * })
    **/
    count<T extends educationCountArgs>(
      args?: Subset<T, educationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EducationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Education.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EducationAggregateArgs>(args: Subset<T, EducationAggregateArgs>): Prisma.PrismaPromise<GetEducationAggregateType<T>>

    /**
     * Group by Education.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {educationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends educationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: educationGroupByArgs['orderBy'] }
        : { orderBy?: educationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, educationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEducationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the education model
   */
  readonly fields: educationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for education.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__educationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    educationDescriptions<T extends education$educationDescriptionsArgs<ExtArgs> = {}>(args?: Subset<T, education$educationDescriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$education_descriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the education model
   */
  interface educationFieldRefs {
    readonly id: FieldRef<"education", 'String'>
    readonly program: FieldRef<"education", 'String'>
    readonly branch: FieldRef<"education", 'String'>
    readonly startDate: FieldRef<"education", 'DateTime'>
    readonly endDate: FieldRef<"education", 'DateTime'>
    readonly createdAt: FieldRef<"education", 'DateTime'>
    readonly updatedAt: FieldRef<"education", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * education findUnique
   */
  export type educationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the education
     */
    select?: educationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the education
     */
    omit?: educationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: educationInclude<ExtArgs> | null
    /**
     * Filter, which education to fetch.
     */
    where: educationWhereUniqueInput
  }

  /**
   * education findUniqueOrThrow
   */
  export type educationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the education
     */
    select?: educationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the education
     */
    omit?: educationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: educationInclude<ExtArgs> | null
    /**
     * Filter, which education to fetch.
     */
    where: educationWhereUniqueInput
  }

  /**
   * education findFirst
   */
  export type educationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the education
     */
    select?: educationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the education
     */
    omit?: educationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: educationInclude<ExtArgs> | null
    /**
     * Filter, which education to fetch.
     */
    where?: educationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of educations to fetch.
     */
    orderBy?: educationOrderByWithRelationInput | educationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for educations.
     */
    cursor?: educationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` educations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of educations.
     */
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[]
  }

  /**
   * education findFirstOrThrow
   */
  export type educationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the education
     */
    select?: educationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the education
     */
    omit?: educationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: educationInclude<ExtArgs> | null
    /**
     * Filter, which education to fetch.
     */
    where?: educationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of educations to fetch.
     */
    orderBy?: educationOrderByWithRelationInput | educationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for educations.
     */
    cursor?: educationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` educations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of educations.
     */
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[]
  }

  /**
   * education findMany
   */
  export type educationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the education
     */
    select?: educationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the education
     */
    omit?: educationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: educationInclude<ExtArgs> | null
    /**
     * Filter, which educations to fetch.
     */
    where?: educationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of educations to fetch.
     */
    orderBy?: educationOrderByWithRelationInput | educationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing educations.
     */
    cursor?: educationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` educations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of educations.
     */
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[]
  }

  /**
   * education create
   */
  export type educationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the education
     */
    select?: educationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the education
     */
    omit?: educationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: educationInclude<ExtArgs> | null
    /**
     * The data needed to create a education.
     */
    data: XOR<educationCreateInput, educationUncheckedCreateInput>
  }

  /**
   * education createMany
   */
  export type educationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many educations.
     */
    data: educationCreateManyInput | educationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * education createManyAndReturn
   */
  export type educationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the education
     */
    select?: educationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the education
     */
    omit?: educationOmit<ExtArgs> | null
    /**
     * The data used to create many educations.
     */
    data: educationCreateManyInput | educationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * education update
   */
  export type educationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the education
     */
    select?: educationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the education
     */
    omit?: educationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: educationInclude<ExtArgs> | null
    /**
     * The data needed to update a education.
     */
    data: XOR<educationUpdateInput, educationUncheckedUpdateInput>
    /**
     * Choose, which education to update.
     */
    where: educationWhereUniqueInput
  }

  /**
   * education updateMany
   */
  export type educationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update educations.
     */
    data: XOR<educationUpdateManyMutationInput, educationUncheckedUpdateManyInput>
    /**
     * Filter which educations to update
     */
    where?: educationWhereInput
    /**
     * Limit how many educations to update.
     */
    limit?: number
  }

  /**
   * education updateManyAndReturn
   */
  export type educationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the education
     */
    select?: educationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the education
     */
    omit?: educationOmit<ExtArgs> | null
    /**
     * The data used to update educations.
     */
    data: XOR<educationUpdateManyMutationInput, educationUncheckedUpdateManyInput>
    /**
     * Filter which educations to update
     */
    where?: educationWhereInput
    /**
     * Limit how many educations to update.
     */
    limit?: number
  }

  /**
   * education upsert
   */
  export type educationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the education
     */
    select?: educationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the education
     */
    omit?: educationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: educationInclude<ExtArgs> | null
    /**
     * The filter to search for the education to update in case it exists.
     */
    where: educationWhereUniqueInput
    /**
     * In case the education found by the `where` argument doesn't exist, create a new education with this data.
     */
    create: XOR<educationCreateInput, educationUncheckedCreateInput>
    /**
     * In case the education was found with the provided `where` argument, update it with this data.
     */
    update: XOR<educationUpdateInput, educationUncheckedUpdateInput>
  }

  /**
   * education delete
   */
  export type educationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the education
     */
    select?: educationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the education
     */
    omit?: educationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: educationInclude<ExtArgs> | null
    /**
     * Filter which education to delete.
     */
    where: educationWhereUniqueInput
  }

  /**
   * education deleteMany
   */
  export type educationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which educations to delete
     */
    where?: educationWhereInput
    /**
     * Limit how many educations to delete.
     */
    limit?: number
  }

  /**
   * education.educationDescriptions
   */
  export type education$educationDescriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the education_description
     */
    select?: education_descriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the education_description
     */
    omit?: education_descriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: education_descriptionInclude<ExtArgs> | null
    where?: education_descriptionWhereInput
    orderBy?: education_descriptionOrderByWithRelationInput | education_descriptionOrderByWithRelationInput[]
    cursor?: education_descriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Education_descriptionScalarFieldEnum | Education_descriptionScalarFieldEnum[]
  }

  /**
   * education without action
   */
  export type educationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the education
     */
    select?: educationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the education
     */
    omit?: educationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: educationInclude<ExtArgs> | null
  }


  /**
   * Model education_description
   */

  export type AggregateEducation_description = {
    _count: Education_descriptionCountAggregateOutputType | null
    _min: Education_descriptionMinAggregateOutputType | null
    _max: Education_descriptionMaxAggregateOutputType | null
  }

  export type Education_descriptionMinAggregateOutputType = {
    id: string | null
    description: string | null
    educationId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Education_descriptionMaxAggregateOutputType = {
    id: string | null
    description: string | null
    educationId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Education_descriptionCountAggregateOutputType = {
    id: number
    description: number
    educationId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Education_descriptionMinAggregateInputType = {
    id?: true
    description?: true
    educationId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Education_descriptionMaxAggregateInputType = {
    id?: true
    description?: true
    educationId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Education_descriptionCountAggregateInputType = {
    id?: true
    description?: true
    educationId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Education_descriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which education_description to aggregate.
     */
    where?: education_descriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of education_descriptions to fetch.
     */
    orderBy?: education_descriptionOrderByWithRelationInput | education_descriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: education_descriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` education_descriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` education_descriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned education_descriptions
    **/
    _count?: true | Education_descriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Education_descriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Education_descriptionMaxAggregateInputType
  }

  export type GetEducation_descriptionAggregateType<T extends Education_descriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateEducation_description]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEducation_description[P]>
      : GetScalarType<T[P], AggregateEducation_description[P]>
  }




  export type education_descriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: education_descriptionWhereInput
    orderBy?: education_descriptionOrderByWithAggregationInput | education_descriptionOrderByWithAggregationInput[]
    by: Education_descriptionScalarFieldEnum[] | Education_descriptionScalarFieldEnum
    having?: education_descriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Education_descriptionCountAggregateInputType | true
    _min?: Education_descriptionMinAggregateInputType
    _max?: Education_descriptionMaxAggregateInputType
  }

  export type Education_descriptionGroupByOutputType = {
    id: string
    description: string | null
    educationId: string
    createdAt: Date
    updatedAt: Date
    _count: Education_descriptionCountAggregateOutputType | null
    _min: Education_descriptionMinAggregateOutputType | null
    _max: Education_descriptionMaxAggregateOutputType | null
  }

  type GetEducation_descriptionGroupByPayload<T extends education_descriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Education_descriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Education_descriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Education_descriptionGroupByOutputType[P]>
            : GetScalarType<T[P], Education_descriptionGroupByOutputType[P]>
        }
      >
    >


  export type education_descriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    educationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    education?: boolean | educationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["education_description"]>

  export type education_descriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    educationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    education?: boolean | educationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["education_description"]>

  export type education_descriptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    educationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    education?: boolean | educationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["education_description"]>

  export type education_descriptionSelectScalar = {
    id?: boolean
    description?: boolean
    educationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type education_descriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "description" | "educationId" | "createdAt" | "updatedAt", ExtArgs["result"]["education_description"]>
  export type education_descriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    education?: boolean | educationDefaultArgs<ExtArgs>
  }
  export type education_descriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    education?: boolean | educationDefaultArgs<ExtArgs>
  }
  export type education_descriptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    education?: boolean | educationDefaultArgs<ExtArgs>
  }

  export type $education_descriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "education_description"
    objects: {
      education: Prisma.$educationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      description: string | null
      educationId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["education_description"]>
    composites: {}
  }

  type education_descriptionGetPayload<S extends boolean | null | undefined | education_descriptionDefaultArgs> = $Result.GetResult<Prisma.$education_descriptionPayload, S>

  type education_descriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<education_descriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Education_descriptionCountAggregateInputType | true
    }

  export interface education_descriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['education_description'], meta: { name: 'education_description' } }
    /**
     * Find zero or one Education_description that matches the filter.
     * @param {education_descriptionFindUniqueArgs} args - Arguments to find a Education_description
     * @example
     * // Get one Education_description
     * const education_description = await prisma.education_description.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends education_descriptionFindUniqueArgs>(args: SelectSubset<T, education_descriptionFindUniqueArgs<ExtArgs>>): Prisma__education_descriptionClient<$Result.GetResult<Prisma.$education_descriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Education_description that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {education_descriptionFindUniqueOrThrowArgs} args - Arguments to find a Education_description
     * @example
     * // Get one Education_description
     * const education_description = await prisma.education_description.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends education_descriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, education_descriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__education_descriptionClient<$Result.GetResult<Prisma.$education_descriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Education_description that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {education_descriptionFindFirstArgs} args - Arguments to find a Education_description
     * @example
     * // Get one Education_description
     * const education_description = await prisma.education_description.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends education_descriptionFindFirstArgs>(args?: SelectSubset<T, education_descriptionFindFirstArgs<ExtArgs>>): Prisma__education_descriptionClient<$Result.GetResult<Prisma.$education_descriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Education_description that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {education_descriptionFindFirstOrThrowArgs} args - Arguments to find a Education_description
     * @example
     * // Get one Education_description
     * const education_description = await prisma.education_description.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends education_descriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, education_descriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__education_descriptionClient<$Result.GetResult<Prisma.$education_descriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Education_descriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {education_descriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Education_descriptions
     * const education_descriptions = await prisma.education_description.findMany()
     * 
     * // Get first 10 Education_descriptions
     * const education_descriptions = await prisma.education_description.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const education_descriptionWithIdOnly = await prisma.education_description.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends education_descriptionFindManyArgs>(args?: SelectSubset<T, education_descriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$education_descriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Education_description.
     * @param {education_descriptionCreateArgs} args - Arguments to create a Education_description.
     * @example
     * // Create one Education_description
     * const Education_description = await prisma.education_description.create({
     *   data: {
     *     // ... data to create a Education_description
     *   }
     * })
     * 
     */
    create<T extends education_descriptionCreateArgs>(args: SelectSubset<T, education_descriptionCreateArgs<ExtArgs>>): Prisma__education_descriptionClient<$Result.GetResult<Prisma.$education_descriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Education_descriptions.
     * @param {education_descriptionCreateManyArgs} args - Arguments to create many Education_descriptions.
     * @example
     * // Create many Education_descriptions
     * const education_description = await prisma.education_description.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends education_descriptionCreateManyArgs>(args?: SelectSubset<T, education_descriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Education_descriptions and returns the data saved in the database.
     * @param {education_descriptionCreateManyAndReturnArgs} args - Arguments to create many Education_descriptions.
     * @example
     * // Create many Education_descriptions
     * const education_description = await prisma.education_description.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Education_descriptions and only return the `id`
     * const education_descriptionWithIdOnly = await prisma.education_description.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends education_descriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, education_descriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$education_descriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Education_description.
     * @param {education_descriptionDeleteArgs} args - Arguments to delete one Education_description.
     * @example
     * // Delete one Education_description
     * const Education_description = await prisma.education_description.delete({
     *   where: {
     *     // ... filter to delete one Education_description
     *   }
     * })
     * 
     */
    delete<T extends education_descriptionDeleteArgs>(args: SelectSubset<T, education_descriptionDeleteArgs<ExtArgs>>): Prisma__education_descriptionClient<$Result.GetResult<Prisma.$education_descriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Education_description.
     * @param {education_descriptionUpdateArgs} args - Arguments to update one Education_description.
     * @example
     * // Update one Education_description
     * const education_description = await prisma.education_description.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends education_descriptionUpdateArgs>(args: SelectSubset<T, education_descriptionUpdateArgs<ExtArgs>>): Prisma__education_descriptionClient<$Result.GetResult<Prisma.$education_descriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Education_descriptions.
     * @param {education_descriptionDeleteManyArgs} args - Arguments to filter Education_descriptions to delete.
     * @example
     * // Delete a few Education_descriptions
     * const { count } = await prisma.education_description.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends education_descriptionDeleteManyArgs>(args?: SelectSubset<T, education_descriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Education_descriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {education_descriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Education_descriptions
     * const education_description = await prisma.education_description.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends education_descriptionUpdateManyArgs>(args: SelectSubset<T, education_descriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Education_descriptions and returns the data updated in the database.
     * @param {education_descriptionUpdateManyAndReturnArgs} args - Arguments to update many Education_descriptions.
     * @example
     * // Update many Education_descriptions
     * const education_description = await prisma.education_description.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Education_descriptions and only return the `id`
     * const education_descriptionWithIdOnly = await prisma.education_description.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends education_descriptionUpdateManyAndReturnArgs>(args: SelectSubset<T, education_descriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$education_descriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Education_description.
     * @param {education_descriptionUpsertArgs} args - Arguments to update or create a Education_description.
     * @example
     * // Update or create a Education_description
     * const education_description = await prisma.education_description.upsert({
     *   create: {
     *     // ... data to create a Education_description
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Education_description we want to update
     *   }
     * })
     */
    upsert<T extends education_descriptionUpsertArgs>(args: SelectSubset<T, education_descriptionUpsertArgs<ExtArgs>>): Prisma__education_descriptionClient<$Result.GetResult<Prisma.$education_descriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Education_descriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {education_descriptionCountArgs} args - Arguments to filter Education_descriptions to count.
     * @example
     * // Count the number of Education_descriptions
     * const count = await prisma.education_description.count({
     *   where: {
     *     // ... the filter for the Education_descriptions we want to count
     *   }
     * })
    **/
    count<T extends education_descriptionCountArgs>(
      args?: Subset<T, education_descriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Education_descriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Education_description.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Education_descriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Education_descriptionAggregateArgs>(args: Subset<T, Education_descriptionAggregateArgs>): Prisma.PrismaPromise<GetEducation_descriptionAggregateType<T>>

    /**
     * Group by Education_description.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {education_descriptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends education_descriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: education_descriptionGroupByArgs['orderBy'] }
        : { orderBy?: education_descriptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, education_descriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEducation_descriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the education_description model
   */
  readonly fields: education_descriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for education_description.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__education_descriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    education<T extends educationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, educationDefaultArgs<ExtArgs>>): Prisma__educationClient<$Result.GetResult<Prisma.$educationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the education_description model
   */
  interface education_descriptionFieldRefs {
    readonly id: FieldRef<"education_description", 'String'>
    readonly description: FieldRef<"education_description", 'String'>
    readonly educationId: FieldRef<"education_description", 'String'>
    readonly createdAt: FieldRef<"education_description", 'DateTime'>
    readonly updatedAt: FieldRef<"education_description", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * education_description findUnique
   */
  export type education_descriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the education_description
     */
    select?: education_descriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the education_description
     */
    omit?: education_descriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: education_descriptionInclude<ExtArgs> | null
    /**
     * Filter, which education_description to fetch.
     */
    where: education_descriptionWhereUniqueInput
  }

  /**
   * education_description findUniqueOrThrow
   */
  export type education_descriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the education_description
     */
    select?: education_descriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the education_description
     */
    omit?: education_descriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: education_descriptionInclude<ExtArgs> | null
    /**
     * Filter, which education_description to fetch.
     */
    where: education_descriptionWhereUniqueInput
  }

  /**
   * education_description findFirst
   */
  export type education_descriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the education_description
     */
    select?: education_descriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the education_description
     */
    omit?: education_descriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: education_descriptionInclude<ExtArgs> | null
    /**
     * Filter, which education_description to fetch.
     */
    where?: education_descriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of education_descriptions to fetch.
     */
    orderBy?: education_descriptionOrderByWithRelationInput | education_descriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for education_descriptions.
     */
    cursor?: education_descriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` education_descriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` education_descriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of education_descriptions.
     */
    distinct?: Education_descriptionScalarFieldEnum | Education_descriptionScalarFieldEnum[]
  }

  /**
   * education_description findFirstOrThrow
   */
  export type education_descriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the education_description
     */
    select?: education_descriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the education_description
     */
    omit?: education_descriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: education_descriptionInclude<ExtArgs> | null
    /**
     * Filter, which education_description to fetch.
     */
    where?: education_descriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of education_descriptions to fetch.
     */
    orderBy?: education_descriptionOrderByWithRelationInput | education_descriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for education_descriptions.
     */
    cursor?: education_descriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` education_descriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` education_descriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of education_descriptions.
     */
    distinct?: Education_descriptionScalarFieldEnum | Education_descriptionScalarFieldEnum[]
  }

  /**
   * education_description findMany
   */
  export type education_descriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the education_description
     */
    select?: education_descriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the education_description
     */
    omit?: education_descriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: education_descriptionInclude<ExtArgs> | null
    /**
     * Filter, which education_descriptions to fetch.
     */
    where?: education_descriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of education_descriptions to fetch.
     */
    orderBy?: education_descriptionOrderByWithRelationInput | education_descriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing education_descriptions.
     */
    cursor?: education_descriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` education_descriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` education_descriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of education_descriptions.
     */
    distinct?: Education_descriptionScalarFieldEnum | Education_descriptionScalarFieldEnum[]
  }

  /**
   * education_description create
   */
  export type education_descriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the education_description
     */
    select?: education_descriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the education_description
     */
    omit?: education_descriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: education_descriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a education_description.
     */
    data: XOR<education_descriptionCreateInput, education_descriptionUncheckedCreateInput>
  }

  /**
   * education_description createMany
   */
  export type education_descriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many education_descriptions.
     */
    data: education_descriptionCreateManyInput | education_descriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * education_description createManyAndReturn
   */
  export type education_descriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the education_description
     */
    select?: education_descriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the education_description
     */
    omit?: education_descriptionOmit<ExtArgs> | null
    /**
     * The data used to create many education_descriptions.
     */
    data: education_descriptionCreateManyInput | education_descriptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: education_descriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * education_description update
   */
  export type education_descriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the education_description
     */
    select?: education_descriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the education_description
     */
    omit?: education_descriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: education_descriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a education_description.
     */
    data: XOR<education_descriptionUpdateInput, education_descriptionUncheckedUpdateInput>
    /**
     * Choose, which education_description to update.
     */
    where: education_descriptionWhereUniqueInput
  }

  /**
   * education_description updateMany
   */
  export type education_descriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update education_descriptions.
     */
    data: XOR<education_descriptionUpdateManyMutationInput, education_descriptionUncheckedUpdateManyInput>
    /**
     * Filter which education_descriptions to update
     */
    where?: education_descriptionWhereInput
    /**
     * Limit how many education_descriptions to update.
     */
    limit?: number
  }

  /**
   * education_description updateManyAndReturn
   */
  export type education_descriptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the education_description
     */
    select?: education_descriptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the education_description
     */
    omit?: education_descriptionOmit<ExtArgs> | null
    /**
     * The data used to update education_descriptions.
     */
    data: XOR<education_descriptionUpdateManyMutationInput, education_descriptionUncheckedUpdateManyInput>
    /**
     * Filter which education_descriptions to update
     */
    where?: education_descriptionWhereInput
    /**
     * Limit how many education_descriptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: education_descriptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * education_description upsert
   */
  export type education_descriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the education_description
     */
    select?: education_descriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the education_description
     */
    omit?: education_descriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: education_descriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the education_description to update in case it exists.
     */
    where: education_descriptionWhereUniqueInput
    /**
     * In case the education_description found by the `where` argument doesn't exist, create a new education_description with this data.
     */
    create: XOR<education_descriptionCreateInput, education_descriptionUncheckedCreateInput>
    /**
     * In case the education_description was found with the provided `where` argument, update it with this data.
     */
    update: XOR<education_descriptionUpdateInput, education_descriptionUncheckedUpdateInput>
  }

  /**
   * education_description delete
   */
  export type education_descriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the education_description
     */
    select?: education_descriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the education_description
     */
    omit?: education_descriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: education_descriptionInclude<ExtArgs> | null
    /**
     * Filter which education_description to delete.
     */
    where: education_descriptionWhereUniqueInput
  }

  /**
   * education_description deleteMany
   */
  export type education_descriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which education_descriptions to delete
     */
    where?: education_descriptionWhereInput
    /**
     * Limit how many education_descriptions to delete.
     */
    limit?: number
  }

  /**
   * education_description without action
   */
  export type education_descriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the education_description
     */
    select?: education_descriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the education_description
     */
    omit?: education_descriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: education_descriptionInclude<ExtArgs> | null
  }


  /**
   * Model experience
   */

  export type AggregateExperience = {
    _count: ExperienceCountAggregateOutputType | null
    _min: ExperienceMinAggregateOutputType | null
    _max: ExperienceMaxAggregateOutputType | null
  }

  export type ExperienceMinAggregateOutputType = {
    id: string | null
    company: string | null
    branch: string | null
    position: string | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExperienceMaxAggregateOutputType = {
    id: string | null
    company: string | null
    branch: string | null
    position: string | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExperienceCountAggregateOutputType = {
    id: number
    company: number
    branch: number
    position: number
    startDate: number
    endDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ExperienceMinAggregateInputType = {
    id?: true
    company?: true
    branch?: true
    position?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExperienceMaxAggregateInputType = {
    id?: true
    company?: true
    branch?: true
    position?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExperienceCountAggregateInputType = {
    id?: true
    company?: true
    branch?: true
    position?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ExperienceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which experience to aggregate.
     */
    where?: experienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of experiences to fetch.
     */
    orderBy?: experienceOrderByWithRelationInput | experienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: experienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` experiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned experiences
    **/
    _count?: true | ExperienceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExperienceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExperienceMaxAggregateInputType
  }

  export type GetExperienceAggregateType<T extends ExperienceAggregateArgs> = {
        [P in keyof T & keyof AggregateExperience]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExperience[P]>
      : GetScalarType<T[P], AggregateExperience[P]>
  }




  export type experienceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: experienceWhereInput
    orderBy?: experienceOrderByWithAggregationInput | experienceOrderByWithAggregationInput[]
    by: ExperienceScalarFieldEnum[] | ExperienceScalarFieldEnum
    having?: experienceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExperienceCountAggregateInputType | true
    _min?: ExperienceMinAggregateInputType
    _max?: ExperienceMaxAggregateInputType
  }

  export type ExperienceGroupByOutputType = {
    id: string
    company: string
    branch: string
    position: string
    startDate: Date
    endDate: Date
    createdAt: Date
    updatedAt: Date
    _count: ExperienceCountAggregateOutputType | null
    _min: ExperienceMinAggregateOutputType | null
    _max: ExperienceMaxAggregateOutputType | null
  }

  type GetExperienceGroupByPayload<T extends experienceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExperienceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExperienceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExperienceGroupByOutputType[P]>
            : GetScalarType<T[P], ExperienceGroupByOutputType[P]>
        }
      >
    >


  export type experienceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company?: boolean
    branch?: boolean
    position?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    experienceDescriptions?: boolean | experience$experienceDescriptionsArgs<ExtArgs>
    _count?: boolean | ExperienceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["experience"]>

  export type experienceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company?: boolean
    branch?: boolean
    position?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["experience"]>

  export type experienceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company?: boolean
    branch?: boolean
    position?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["experience"]>

  export type experienceSelectScalar = {
    id?: boolean
    company?: boolean
    branch?: boolean
    position?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type experienceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "company" | "branch" | "position" | "startDate" | "endDate" | "createdAt" | "updatedAt", ExtArgs["result"]["experience"]>
  export type experienceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    experienceDescriptions?: boolean | experience$experienceDescriptionsArgs<ExtArgs>
    _count?: boolean | ExperienceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type experienceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type experienceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $experiencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "experience"
    objects: {
      experienceDescriptions: Prisma.$experience_descriptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      company: string
      branch: string
      position: string
      startDate: Date
      endDate: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["experience"]>
    composites: {}
  }

  type experienceGetPayload<S extends boolean | null | undefined | experienceDefaultArgs> = $Result.GetResult<Prisma.$experiencePayload, S>

  type experienceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<experienceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExperienceCountAggregateInputType | true
    }

  export interface experienceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['experience'], meta: { name: 'experience' } }
    /**
     * Find zero or one Experience that matches the filter.
     * @param {experienceFindUniqueArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends experienceFindUniqueArgs>(args: SelectSubset<T, experienceFindUniqueArgs<ExtArgs>>): Prisma__experienceClient<$Result.GetResult<Prisma.$experiencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Experience that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {experienceFindUniqueOrThrowArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends experienceFindUniqueOrThrowArgs>(args: SelectSubset<T, experienceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__experienceClient<$Result.GetResult<Prisma.$experiencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Experience that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {experienceFindFirstArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends experienceFindFirstArgs>(args?: SelectSubset<T, experienceFindFirstArgs<ExtArgs>>): Prisma__experienceClient<$Result.GetResult<Prisma.$experiencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Experience that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {experienceFindFirstOrThrowArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends experienceFindFirstOrThrowArgs>(args?: SelectSubset<T, experienceFindFirstOrThrowArgs<ExtArgs>>): Prisma__experienceClient<$Result.GetResult<Prisma.$experiencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Experiences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {experienceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Experiences
     * const experiences = await prisma.experience.findMany()
     * 
     * // Get first 10 Experiences
     * const experiences = await prisma.experience.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const experienceWithIdOnly = await prisma.experience.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends experienceFindManyArgs>(args?: SelectSubset<T, experienceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$experiencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Experience.
     * @param {experienceCreateArgs} args - Arguments to create a Experience.
     * @example
     * // Create one Experience
     * const Experience = await prisma.experience.create({
     *   data: {
     *     // ... data to create a Experience
     *   }
     * })
     * 
     */
    create<T extends experienceCreateArgs>(args: SelectSubset<T, experienceCreateArgs<ExtArgs>>): Prisma__experienceClient<$Result.GetResult<Prisma.$experiencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Experiences.
     * @param {experienceCreateManyArgs} args - Arguments to create many Experiences.
     * @example
     * // Create many Experiences
     * const experience = await prisma.experience.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends experienceCreateManyArgs>(args?: SelectSubset<T, experienceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Experiences and returns the data saved in the database.
     * @param {experienceCreateManyAndReturnArgs} args - Arguments to create many Experiences.
     * @example
     * // Create many Experiences
     * const experience = await prisma.experience.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Experiences and only return the `id`
     * const experienceWithIdOnly = await prisma.experience.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends experienceCreateManyAndReturnArgs>(args?: SelectSubset<T, experienceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$experiencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Experience.
     * @param {experienceDeleteArgs} args - Arguments to delete one Experience.
     * @example
     * // Delete one Experience
     * const Experience = await prisma.experience.delete({
     *   where: {
     *     // ... filter to delete one Experience
     *   }
     * })
     * 
     */
    delete<T extends experienceDeleteArgs>(args: SelectSubset<T, experienceDeleteArgs<ExtArgs>>): Prisma__experienceClient<$Result.GetResult<Prisma.$experiencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Experience.
     * @param {experienceUpdateArgs} args - Arguments to update one Experience.
     * @example
     * // Update one Experience
     * const experience = await prisma.experience.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends experienceUpdateArgs>(args: SelectSubset<T, experienceUpdateArgs<ExtArgs>>): Prisma__experienceClient<$Result.GetResult<Prisma.$experiencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Experiences.
     * @param {experienceDeleteManyArgs} args - Arguments to filter Experiences to delete.
     * @example
     * // Delete a few Experiences
     * const { count } = await prisma.experience.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends experienceDeleteManyArgs>(args?: SelectSubset<T, experienceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Experiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {experienceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Experiences
     * const experience = await prisma.experience.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends experienceUpdateManyArgs>(args: SelectSubset<T, experienceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Experiences and returns the data updated in the database.
     * @param {experienceUpdateManyAndReturnArgs} args - Arguments to update many Experiences.
     * @example
     * // Update many Experiences
     * const experience = await prisma.experience.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Experiences and only return the `id`
     * const experienceWithIdOnly = await prisma.experience.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends experienceUpdateManyAndReturnArgs>(args: SelectSubset<T, experienceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$experiencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Experience.
     * @param {experienceUpsertArgs} args - Arguments to update or create a Experience.
     * @example
     * // Update or create a Experience
     * const experience = await prisma.experience.upsert({
     *   create: {
     *     // ... data to create a Experience
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Experience we want to update
     *   }
     * })
     */
    upsert<T extends experienceUpsertArgs>(args: SelectSubset<T, experienceUpsertArgs<ExtArgs>>): Prisma__experienceClient<$Result.GetResult<Prisma.$experiencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Experiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {experienceCountArgs} args - Arguments to filter Experiences to count.
     * @example
     * // Count the number of Experiences
     * const count = await prisma.experience.count({
     *   where: {
     *     // ... the filter for the Experiences we want to count
     *   }
     * })
    **/
    count<T extends experienceCountArgs>(
      args?: Subset<T, experienceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExperienceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Experience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExperienceAggregateArgs>(args: Subset<T, ExperienceAggregateArgs>): Prisma.PrismaPromise<GetExperienceAggregateType<T>>

    /**
     * Group by Experience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {experienceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends experienceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: experienceGroupByArgs['orderBy'] }
        : { orderBy?: experienceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, experienceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExperienceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the experience model
   */
  readonly fields: experienceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for experience.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__experienceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    experienceDescriptions<T extends experience$experienceDescriptionsArgs<ExtArgs> = {}>(args?: Subset<T, experience$experienceDescriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$experience_descriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the experience model
   */
  interface experienceFieldRefs {
    readonly id: FieldRef<"experience", 'String'>
    readonly company: FieldRef<"experience", 'String'>
    readonly branch: FieldRef<"experience", 'String'>
    readonly position: FieldRef<"experience", 'String'>
    readonly startDate: FieldRef<"experience", 'DateTime'>
    readonly endDate: FieldRef<"experience", 'DateTime'>
    readonly createdAt: FieldRef<"experience", 'DateTime'>
    readonly updatedAt: FieldRef<"experience", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * experience findUnique
   */
  export type experienceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the experience
     */
    select?: experienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the experience
     */
    omit?: experienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: experienceInclude<ExtArgs> | null
    /**
     * Filter, which experience to fetch.
     */
    where: experienceWhereUniqueInput
  }

  /**
   * experience findUniqueOrThrow
   */
  export type experienceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the experience
     */
    select?: experienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the experience
     */
    omit?: experienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: experienceInclude<ExtArgs> | null
    /**
     * Filter, which experience to fetch.
     */
    where: experienceWhereUniqueInput
  }

  /**
   * experience findFirst
   */
  export type experienceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the experience
     */
    select?: experienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the experience
     */
    omit?: experienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: experienceInclude<ExtArgs> | null
    /**
     * Filter, which experience to fetch.
     */
    where?: experienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of experiences to fetch.
     */
    orderBy?: experienceOrderByWithRelationInput | experienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for experiences.
     */
    cursor?: experienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` experiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of experiences.
     */
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[]
  }

  /**
   * experience findFirstOrThrow
   */
  export type experienceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the experience
     */
    select?: experienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the experience
     */
    omit?: experienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: experienceInclude<ExtArgs> | null
    /**
     * Filter, which experience to fetch.
     */
    where?: experienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of experiences to fetch.
     */
    orderBy?: experienceOrderByWithRelationInput | experienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for experiences.
     */
    cursor?: experienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` experiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of experiences.
     */
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[]
  }

  /**
   * experience findMany
   */
  export type experienceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the experience
     */
    select?: experienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the experience
     */
    omit?: experienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: experienceInclude<ExtArgs> | null
    /**
     * Filter, which experiences to fetch.
     */
    where?: experienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of experiences to fetch.
     */
    orderBy?: experienceOrderByWithRelationInput | experienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing experiences.
     */
    cursor?: experienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` experiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of experiences.
     */
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[]
  }

  /**
   * experience create
   */
  export type experienceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the experience
     */
    select?: experienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the experience
     */
    omit?: experienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: experienceInclude<ExtArgs> | null
    /**
     * The data needed to create a experience.
     */
    data: XOR<experienceCreateInput, experienceUncheckedCreateInput>
  }

  /**
   * experience createMany
   */
  export type experienceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many experiences.
     */
    data: experienceCreateManyInput | experienceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * experience createManyAndReturn
   */
  export type experienceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the experience
     */
    select?: experienceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the experience
     */
    omit?: experienceOmit<ExtArgs> | null
    /**
     * The data used to create many experiences.
     */
    data: experienceCreateManyInput | experienceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * experience update
   */
  export type experienceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the experience
     */
    select?: experienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the experience
     */
    omit?: experienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: experienceInclude<ExtArgs> | null
    /**
     * The data needed to update a experience.
     */
    data: XOR<experienceUpdateInput, experienceUncheckedUpdateInput>
    /**
     * Choose, which experience to update.
     */
    where: experienceWhereUniqueInput
  }

  /**
   * experience updateMany
   */
  export type experienceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update experiences.
     */
    data: XOR<experienceUpdateManyMutationInput, experienceUncheckedUpdateManyInput>
    /**
     * Filter which experiences to update
     */
    where?: experienceWhereInput
    /**
     * Limit how many experiences to update.
     */
    limit?: number
  }

  /**
   * experience updateManyAndReturn
   */
  export type experienceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the experience
     */
    select?: experienceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the experience
     */
    omit?: experienceOmit<ExtArgs> | null
    /**
     * The data used to update experiences.
     */
    data: XOR<experienceUpdateManyMutationInput, experienceUncheckedUpdateManyInput>
    /**
     * Filter which experiences to update
     */
    where?: experienceWhereInput
    /**
     * Limit how many experiences to update.
     */
    limit?: number
  }

  /**
   * experience upsert
   */
  export type experienceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the experience
     */
    select?: experienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the experience
     */
    omit?: experienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: experienceInclude<ExtArgs> | null
    /**
     * The filter to search for the experience to update in case it exists.
     */
    where: experienceWhereUniqueInput
    /**
     * In case the experience found by the `where` argument doesn't exist, create a new experience with this data.
     */
    create: XOR<experienceCreateInput, experienceUncheckedCreateInput>
    /**
     * In case the experience was found with the provided `where` argument, update it with this data.
     */
    update: XOR<experienceUpdateInput, experienceUncheckedUpdateInput>
  }

  /**
   * experience delete
   */
  export type experienceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the experience
     */
    select?: experienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the experience
     */
    omit?: experienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: experienceInclude<ExtArgs> | null
    /**
     * Filter which experience to delete.
     */
    where: experienceWhereUniqueInput
  }

  /**
   * experience deleteMany
   */
  export type experienceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which experiences to delete
     */
    where?: experienceWhereInput
    /**
     * Limit how many experiences to delete.
     */
    limit?: number
  }

  /**
   * experience.experienceDescriptions
   */
  export type experience$experienceDescriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the experience_description
     */
    select?: experience_descriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the experience_description
     */
    omit?: experience_descriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: experience_descriptionInclude<ExtArgs> | null
    where?: experience_descriptionWhereInput
    orderBy?: experience_descriptionOrderByWithRelationInput | experience_descriptionOrderByWithRelationInput[]
    cursor?: experience_descriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Experience_descriptionScalarFieldEnum | Experience_descriptionScalarFieldEnum[]
  }

  /**
   * experience without action
   */
  export type experienceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the experience
     */
    select?: experienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the experience
     */
    omit?: experienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: experienceInclude<ExtArgs> | null
  }


  /**
   * Model experience_description
   */

  export type AggregateExperience_description = {
    _count: Experience_descriptionCountAggregateOutputType | null
    _min: Experience_descriptionMinAggregateOutputType | null
    _max: Experience_descriptionMaxAggregateOutputType | null
  }

  export type Experience_descriptionMinAggregateOutputType = {
    id: string | null
    description: string | null
    experienceId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Experience_descriptionMaxAggregateOutputType = {
    id: string | null
    description: string | null
    experienceId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Experience_descriptionCountAggregateOutputType = {
    id: number
    description: number
    experienceId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Experience_descriptionMinAggregateInputType = {
    id?: true
    description?: true
    experienceId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Experience_descriptionMaxAggregateInputType = {
    id?: true
    description?: true
    experienceId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Experience_descriptionCountAggregateInputType = {
    id?: true
    description?: true
    experienceId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Experience_descriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which experience_description to aggregate.
     */
    where?: experience_descriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of experience_descriptions to fetch.
     */
    orderBy?: experience_descriptionOrderByWithRelationInput | experience_descriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: experience_descriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` experience_descriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` experience_descriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned experience_descriptions
    **/
    _count?: true | Experience_descriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Experience_descriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Experience_descriptionMaxAggregateInputType
  }

  export type GetExperience_descriptionAggregateType<T extends Experience_descriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateExperience_description]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExperience_description[P]>
      : GetScalarType<T[P], AggregateExperience_description[P]>
  }




  export type experience_descriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: experience_descriptionWhereInput
    orderBy?: experience_descriptionOrderByWithAggregationInput | experience_descriptionOrderByWithAggregationInput[]
    by: Experience_descriptionScalarFieldEnum[] | Experience_descriptionScalarFieldEnum
    having?: experience_descriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Experience_descriptionCountAggregateInputType | true
    _min?: Experience_descriptionMinAggregateInputType
    _max?: Experience_descriptionMaxAggregateInputType
  }

  export type Experience_descriptionGroupByOutputType = {
    id: string
    description: string | null
    experienceId: string
    createdAt: Date
    updatedAt: Date
    _count: Experience_descriptionCountAggregateOutputType | null
    _min: Experience_descriptionMinAggregateOutputType | null
    _max: Experience_descriptionMaxAggregateOutputType | null
  }

  type GetExperience_descriptionGroupByPayload<T extends experience_descriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Experience_descriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Experience_descriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Experience_descriptionGroupByOutputType[P]>
            : GetScalarType<T[P], Experience_descriptionGroupByOutputType[P]>
        }
      >
    >


  export type experience_descriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    experienceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    experience?: boolean | experienceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["experience_description"]>

  export type experience_descriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    experienceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    experience?: boolean | experienceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["experience_description"]>

  export type experience_descriptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    experienceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    experience?: boolean | experienceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["experience_description"]>

  export type experience_descriptionSelectScalar = {
    id?: boolean
    description?: boolean
    experienceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type experience_descriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "description" | "experienceId" | "createdAt" | "updatedAt", ExtArgs["result"]["experience_description"]>
  export type experience_descriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    experience?: boolean | experienceDefaultArgs<ExtArgs>
  }
  export type experience_descriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    experience?: boolean | experienceDefaultArgs<ExtArgs>
  }
  export type experience_descriptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    experience?: boolean | experienceDefaultArgs<ExtArgs>
  }

  export type $experience_descriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "experience_description"
    objects: {
      experience: Prisma.$experiencePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      description: string | null
      experienceId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["experience_description"]>
    composites: {}
  }

  type experience_descriptionGetPayload<S extends boolean | null | undefined | experience_descriptionDefaultArgs> = $Result.GetResult<Prisma.$experience_descriptionPayload, S>

  type experience_descriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<experience_descriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Experience_descriptionCountAggregateInputType | true
    }

  export interface experience_descriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['experience_description'], meta: { name: 'experience_description' } }
    /**
     * Find zero or one Experience_description that matches the filter.
     * @param {experience_descriptionFindUniqueArgs} args - Arguments to find a Experience_description
     * @example
     * // Get one Experience_description
     * const experience_description = await prisma.experience_description.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends experience_descriptionFindUniqueArgs>(args: SelectSubset<T, experience_descriptionFindUniqueArgs<ExtArgs>>): Prisma__experience_descriptionClient<$Result.GetResult<Prisma.$experience_descriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Experience_description that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {experience_descriptionFindUniqueOrThrowArgs} args - Arguments to find a Experience_description
     * @example
     * // Get one Experience_description
     * const experience_description = await prisma.experience_description.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends experience_descriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, experience_descriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__experience_descriptionClient<$Result.GetResult<Prisma.$experience_descriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Experience_description that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {experience_descriptionFindFirstArgs} args - Arguments to find a Experience_description
     * @example
     * // Get one Experience_description
     * const experience_description = await prisma.experience_description.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends experience_descriptionFindFirstArgs>(args?: SelectSubset<T, experience_descriptionFindFirstArgs<ExtArgs>>): Prisma__experience_descriptionClient<$Result.GetResult<Prisma.$experience_descriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Experience_description that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {experience_descriptionFindFirstOrThrowArgs} args - Arguments to find a Experience_description
     * @example
     * // Get one Experience_description
     * const experience_description = await prisma.experience_description.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends experience_descriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, experience_descriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__experience_descriptionClient<$Result.GetResult<Prisma.$experience_descriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Experience_descriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {experience_descriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Experience_descriptions
     * const experience_descriptions = await prisma.experience_description.findMany()
     * 
     * // Get first 10 Experience_descriptions
     * const experience_descriptions = await prisma.experience_description.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const experience_descriptionWithIdOnly = await prisma.experience_description.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends experience_descriptionFindManyArgs>(args?: SelectSubset<T, experience_descriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$experience_descriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Experience_description.
     * @param {experience_descriptionCreateArgs} args - Arguments to create a Experience_description.
     * @example
     * // Create one Experience_description
     * const Experience_description = await prisma.experience_description.create({
     *   data: {
     *     // ... data to create a Experience_description
     *   }
     * })
     * 
     */
    create<T extends experience_descriptionCreateArgs>(args: SelectSubset<T, experience_descriptionCreateArgs<ExtArgs>>): Prisma__experience_descriptionClient<$Result.GetResult<Prisma.$experience_descriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Experience_descriptions.
     * @param {experience_descriptionCreateManyArgs} args - Arguments to create many Experience_descriptions.
     * @example
     * // Create many Experience_descriptions
     * const experience_description = await prisma.experience_description.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends experience_descriptionCreateManyArgs>(args?: SelectSubset<T, experience_descriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Experience_descriptions and returns the data saved in the database.
     * @param {experience_descriptionCreateManyAndReturnArgs} args - Arguments to create many Experience_descriptions.
     * @example
     * // Create many Experience_descriptions
     * const experience_description = await prisma.experience_description.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Experience_descriptions and only return the `id`
     * const experience_descriptionWithIdOnly = await prisma.experience_description.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends experience_descriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, experience_descriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$experience_descriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Experience_description.
     * @param {experience_descriptionDeleteArgs} args - Arguments to delete one Experience_description.
     * @example
     * // Delete one Experience_description
     * const Experience_description = await prisma.experience_description.delete({
     *   where: {
     *     // ... filter to delete one Experience_description
     *   }
     * })
     * 
     */
    delete<T extends experience_descriptionDeleteArgs>(args: SelectSubset<T, experience_descriptionDeleteArgs<ExtArgs>>): Prisma__experience_descriptionClient<$Result.GetResult<Prisma.$experience_descriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Experience_description.
     * @param {experience_descriptionUpdateArgs} args - Arguments to update one Experience_description.
     * @example
     * // Update one Experience_description
     * const experience_description = await prisma.experience_description.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends experience_descriptionUpdateArgs>(args: SelectSubset<T, experience_descriptionUpdateArgs<ExtArgs>>): Prisma__experience_descriptionClient<$Result.GetResult<Prisma.$experience_descriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Experience_descriptions.
     * @param {experience_descriptionDeleteManyArgs} args - Arguments to filter Experience_descriptions to delete.
     * @example
     * // Delete a few Experience_descriptions
     * const { count } = await prisma.experience_description.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends experience_descriptionDeleteManyArgs>(args?: SelectSubset<T, experience_descriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Experience_descriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {experience_descriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Experience_descriptions
     * const experience_description = await prisma.experience_description.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends experience_descriptionUpdateManyArgs>(args: SelectSubset<T, experience_descriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Experience_descriptions and returns the data updated in the database.
     * @param {experience_descriptionUpdateManyAndReturnArgs} args - Arguments to update many Experience_descriptions.
     * @example
     * // Update many Experience_descriptions
     * const experience_description = await prisma.experience_description.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Experience_descriptions and only return the `id`
     * const experience_descriptionWithIdOnly = await prisma.experience_description.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends experience_descriptionUpdateManyAndReturnArgs>(args: SelectSubset<T, experience_descriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$experience_descriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Experience_description.
     * @param {experience_descriptionUpsertArgs} args - Arguments to update or create a Experience_description.
     * @example
     * // Update or create a Experience_description
     * const experience_description = await prisma.experience_description.upsert({
     *   create: {
     *     // ... data to create a Experience_description
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Experience_description we want to update
     *   }
     * })
     */
    upsert<T extends experience_descriptionUpsertArgs>(args: SelectSubset<T, experience_descriptionUpsertArgs<ExtArgs>>): Prisma__experience_descriptionClient<$Result.GetResult<Prisma.$experience_descriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Experience_descriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {experience_descriptionCountArgs} args - Arguments to filter Experience_descriptions to count.
     * @example
     * // Count the number of Experience_descriptions
     * const count = await prisma.experience_description.count({
     *   where: {
     *     // ... the filter for the Experience_descriptions we want to count
     *   }
     * })
    **/
    count<T extends experience_descriptionCountArgs>(
      args?: Subset<T, experience_descriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Experience_descriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Experience_description.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Experience_descriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Experience_descriptionAggregateArgs>(args: Subset<T, Experience_descriptionAggregateArgs>): Prisma.PrismaPromise<GetExperience_descriptionAggregateType<T>>

    /**
     * Group by Experience_description.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {experience_descriptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends experience_descriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: experience_descriptionGroupByArgs['orderBy'] }
        : { orderBy?: experience_descriptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, experience_descriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExperience_descriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the experience_description model
   */
  readonly fields: experience_descriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for experience_description.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__experience_descriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    experience<T extends experienceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, experienceDefaultArgs<ExtArgs>>): Prisma__experienceClient<$Result.GetResult<Prisma.$experiencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the experience_description model
   */
  interface experience_descriptionFieldRefs {
    readonly id: FieldRef<"experience_description", 'String'>
    readonly description: FieldRef<"experience_description", 'String'>
    readonly experienceId: FieldRef<"experience_description", 'String'>
    readonly createdAt: FieldRef<"experience_description", 'DateTime'>
    readonly updatedAt: FieldRef<"experience_description", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * experience_description findUnique
   */
  export type experience_descriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the experience_description
     */
    select?: experience_descriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the experience_description
     */
    omit?: experience_descriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: experience_descriptionInclude<ExtArgs> | null
    /**
     * Filter, which experience_description to fetch.
     */
    where: experience_descriptionWhereUniqueInput
  }

  /**
   * experience_description findUniqueOrThrow
   */
  export type experience_descriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the experience_description
     */
    select?: experience_descriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the experience_description
     */
    omit?: experience_descriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: experience_descriptionInclude<ExtArgs> | null
    /**
     * Filter, which experience_description to fetch.
     */
    where: experience_descriptionWhereUniqueInput
  }

  /**
   * experience_description findFirst
   */
  export type experience_descriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the experience_description
     */
    select?: experience_descriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the experience_description
     */
    omit?: experience_descriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: experience_descriptionInclude<ExtArgs> | null
    /**
     * Filter, which experience_description to fetch.
     */
    where?: experience_descriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of experience_descriptions to fetch.
     */
    orderBy?: experience_descriptionOrderByWithRelationInput | experience_descriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for experience_descriptions.
     */
    cursor?: experience_descriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` experience_descriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` experience_descriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of experience_descriptions.
     */
    distinct?: Experience_descriptionScalarFieldEnum | Experience_descriptionScalarFieldEnum[]
  }

  /**
   * experience_description findFirstOrThrow
   */
  export type experience_descriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the experience_description
     */
    select?: experience_descriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the experience_description
     */
    omit?: experience_descriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: experience_descriptionInclude<ExtArgs> | null
    /**
     * Filter, which experience_description to fetch.
     */
    where?: experience_descriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of experience_descriptions to fetch.
     */
    orderBy?: experience_descriptionOrderByWithRelationInput | experience_descriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for experience_descriptions.
     */
    cursor?: experience_descriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` experience_descriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` experience_descriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of experience_descriptions.
     */
    distinct?: Experience_descriptionScalarFieldEnum | Experience_descriptionScalarFieldEnum[]
  }

  /**
   * experience_description findMany
   */
  export type experience_descriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the experience_description
     */
    select?: experience_descriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the experience_description
     */
    omit?: experience_descriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: experience_descriptionInclude<ExtArgs> | null
    /**
     * Filter, which experience_descriptions to fetch.
     */
    where?: experience_descriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of experience_descriptions to fetch.
     */
    orderBy?: experience_descriptionOrderByWithRelationInput | experience_descriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing experience_descriptions.
     */
    cursor?: experience_descriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` experience_descriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` experience_descriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of experience_descriptions.
     */
    distinct?: Experience_descriptionScalarFieldEnum | Experience_descriptionScalarFieldEnum[]
  }

  /**
   * experience_description create
   */
  export type experience_descriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the experience_description
     */
    select?: experience_descriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the experience_description
     */
    omit?: experience_descriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: experience_descriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a experience_description.
     */
    data: XOR<experience_descriptionCreateInput, experience_descriptionUncheckedCreateInput>
  }

  /**
   * experience_description createMany
   */
  export type experience_descriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many experience_descriptions.
     */
    data: experience_descriptionCreateManyInput | experience_descriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * experience_description createManyAndReturn
   */
  export type experience_descriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the experience_description
     */
    select?: experience_descriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the experience_description
     */
    omit?: experience_descriptionOmit<ExtArgs> | null
    /**
     * The data used to create many experience_descriptions.
     */
    data: experience_descriptionCreateManyInput | experience_descriptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: experience_descriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * experience_description update
   */
  export type experience_descriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the experience_description
     */
    select?: experience_descriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the experience_description
     */
    omit?: experience_descriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: experience_descriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a experience_description.
     */
    data: XOR<experience_descriptionUpdateInput, experience_descriptionUncheckedUpdateInput>
    /**
     * Choose, which experience_description to update.
     */
    where: experience_descriptionWhereUniqueInput
  }

  /**
   * experience_description updateMany
   */
  export type experience_descriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update experience_descriptions.
     */
    data: XOR<experience_descriptionUpdateManyMutationInput, experience_descriptionUncheckedUpdateManyInput>
    /**
     * Filter which experience_descriptions to update
     */
    where?: experience_descriptionWhereInput
    /**
     * Limit how many experience_descriptions to update.
     */
    limit?: number
  }

  /**
   * experience_description updateManyAndReturn
   */
  export type experience_descriptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the experience_description
     */
    select?: experience_descriptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the experience_description
     */
    omit?: experience_descriptionOmit<ExtArgs> | null
    /**
     * The data used to update experience_descriptions.
     */
    data: XOR<experience_descriptionUpdateManyMutationInput, experience_descriptionUncheckedUpdateManyInput>
    /**
     * Filter which experience_descriptions to update
     */
    where?: experience_descriptionWhereInput
    /**
     * Limit how many experience_descriptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: experience_descriptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * experience_description upsert
   */
  export type experience_descriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the experience_description
     */
    select?: experience_descriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the experience_description
     */
    omit?: experience_descriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: experience_descriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the experience_description to update in case it exists.
     */
    where: experience_descriptionWhereUniqueInput
    /**
     * In case the experience_description found by the `where` argument doesn't exist, create a new experience_description with this data.
     */
    create: XOR<experience_descriptionCreateInput, experience_descriptionUncheckedCreateInput>
    /**
     * In case the experience_description was found with the provided `where` argument, update it with this data.
     */
    update: XOR<experience_descriptionUpdateInput, experience_descriptionUncheckedUpdateInput>
  }

  /**
   * experience_description delete
   */
  export type experience_descriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the experience_description
     */
    select?: experience_descriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the experience_description
     */
    omit?: experience_descriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: experience_descriptionInclude<ExtArgs> | null
    /**
     * Filter which experience_description to delete.
     */
    where: experience_descriptionWhereUniqueInput
  }

  /**
   * experience_description deleteMany
   */
  export type experience_descriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which experience_descriptions to delete
     */
    where?: experience_descriptionWhereInput
    /**
     * Limit how many experience_descriptions to delete.
     */
    limit?: number
  }

  /**
   * experience_description without action
   */
  export type experience_descriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the experience_description
     */
    select?: experience_descriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the experience_description
     */
    omit?: experience_descriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: experience_descriptionInclude<ExtArgs> | null
  }


  /**
   * Model achievements
   */

  export type AggregateAchievements = {
    _count: AchievementsCountAggregateOutputType | null
    _min: AchievementsMinAggregateOutputType | null
    _max: AchievementsMaxAggregateOutputType | null
  }

  export type AchievementsMinAggregateOutputType = {
    id: string | null
    title: string | null
    year: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AchievementsMaxAggregateOutputType = {
    id: string | null
    title: string | null
    year: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AchievementsCountAggregateOutputType = {
    id: number
    title: number
    year: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AchievementsMinAggregateInputType = {
    id?: true
    title?: true
    year?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AchievementsMaxAggregateInputType = {
    id?: true
    title?: true
    year?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AchievementsCountAggregateInputType = {
    id?: true
    title?: true
    year?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AchievementsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which achievements to aggregate.
     */
    where?: achievementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of achievements to fetch.
     */
    orderBy?: achievementsOrderByWithRelationInput | achievementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: achievementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` achievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` achievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned achievements
    **/
    _count?: true | AchievementsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AchievementsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AchievementsMaxAggregateInputType
  }

  export type GetAchievementsAggregateType<T extends AchievementsAggregateArgs> = {
        [P in keyof T & keyof AggregateAchievements]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAchievements[P]>
      : GetScalarType<T[P], AggregateAchievements[P]>
  }




  export type achievementsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: achievementsWhereInput
    orderBy?: achievementsOrderByWithAggregationInput | achievementsOrderByWithAggregationInput[]
    by: AchievementsScalarFieldEnum[] | AchievementsScalarFieldEnum
    having?: achievementsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AchievementsCountAggregateInputType | true
    _min?: AchievementsMinAggregateInputType
    _max?: AchievementsMaxAggregateInputType
  }

  export type AchievementsGroupByOutputType = {
    id: string
    title: string
    year: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: AchievementsCountAggregateOutputType | null
    _min: AchievementsMinAggregateOutputType | null
    _max: AchievementsMaxAggregateOutputType | null
  }

  type GetAchievementsGroupByPayload<T extends achievementsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AchievementsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AchievementsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AchievementsGroupByOutputType[P]>
            : GetScalarType<T[P], AchievementsGroupByOutputType[P]>
        }
      >
    >


  export type achievementsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    year?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["achievements"]>

  export type achievementsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    year?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["achievements"]>

  export type achievementsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    year?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["achievements"]>

  export type achievementsSelectScalar = {
    id?: boolean
    title?: boolean
    year?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type achievementsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "year" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["achievements"]>

  export type $achievementsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "achievements"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      year: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["achievements"]>
    composites: {}
  }

  type achievementsGetPayload<S extends boolean | null | undefined | achievementsDefaultArgs> = $Result.GetResult<Prisma.$achievementsPayload, S>

  type achievementsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<achievementsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AchievementsCountAggregateInputType | true
    }

  export interface achievementsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['achievements'], meta: { name: 'achievements' } }
    /**
     * Find zero or one Achievements that matches the filter.
     * @param {achievementsFindUniqueArgs} args - Arguments to find a Achievements
     * @example
     * // Get one Achievements
     * const achievements = await prisma.achievements.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends achievementsFindUniqueArgs>(args: SelectSubset<T, achievementsFindUniqueArgs<ExtArgs>>): Prisma__achievementsClient<$Result.GetResult<Prisma.$achievementsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Achievements that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {achievementsFindUniqueOrThrowArgs} args - Arguments to find a Achievements
     * @example
     * // Get one Achievements
     * const achievements = await prisma.achievements.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends achievementsFindUniqueOrThrowArgs>(args: SelectSubset<T, achievementsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__achievementsClient<$Result.GetResult<Prisma.$achievementsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Achievements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {achievementsFindFirstArgs} args - Arguments to find a Achievements
     * @example
     * // Get one Achievements
     * const achievements = await prisma.achievements.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends achievementsFindFirstArgs>(args?: SelectSubset<T, achievementsFindFirstArgs<ExtArgs>>): Prisma__achievementsClient<$Result.GetResult<Prisma.$achievementsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Achievements that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {achievementsFindFirstOrThrowArgs} args - Arguments to find a Achievements
     * @example
     * // Get one Achievements
     * const achievements = await prisma.achievements.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends achievementsFindFirstOrThrowArgs>(args?: SelectSubset<T, achievementsFindFirstOrThrowArgs<ExtArgs>>): Prisma__achievementsClient<$Result.GetResult<Prisma.$achievementsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Achievements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {achievementsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Achievements
     * const achievements = await prisma.achievements.findMany()
     * 
     * // Get first 10 Achievements
     * const achievements = await prisma.achievements.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const achievementsWithIdOnly = await prisma.achievements.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends achievementsFindManyArgs>(args?: SelectSubset<T, achievementsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$achievementsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Achievements.
     * @param {achievementsCreateArgs} args - Arguments to create a Achievements.
     * @example
     * // Create one Achievements
     * const Achievements = await prisma.achievements.create({
     *   data: {
     *     // ... data to create a Achievements
     *   }
     * })
     * 
     */
    create<T extends achievementsCreateArgs>(args: SelectSubset<T, achievementsCreateArgs<ExtArgs>>): Prisma__achievementsClient<$Result.GetResult<Prisma.$achievementsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Achievements.
     * @param {achievementsCreateManyArgs} args - Arguments to create many Achievements.
     * @example
     * // Create many Achievements
     * const achievements = await prisma.achievements.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends achievementsCreateManyArgs>(args?: SelectSubset<T, achievementsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Achievements and returns the data saved in the database.
     * @param {achievementsCreateManyAndReturnArgs} args - Arguments to create many Achievements.
     * @example
     * // Create many Achievements
     * const achievements = await prisma.achievements.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Achievements and only return the `id`
     * const achievementsWithIdOnly = await prisma.achievements.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends achievementsCreateManyAndReturnArgs>(args?: SelectSubset<T, achievementsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$achievementsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Achievements.
     * @param {achievementsDeleteArgs} args - Arguments to delete one Achievements.
     * @example
     * // Delete one Achievements
     * const Achievements = await prisma.achievements.delete({
     *   where: {
     *     // ... filter to delete one Achievements
     *   }
     * })
     * 
     */
    delete<T extends achievementsDeleteArgs>(args: SelectSubset<T, achievementsDeleteArgs<ExtArgs>>): Prisma__achievementsClient<$Result.GetResult<Prisma.$achievementsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Achievements.
     * @param {achievementsUpdateArgs} args - Arguments to update one Achievements.
     * @example
     * // Update one Achievements
     * const achievements = await prisma.achievements.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends achievementsUpdateArgs>(args: SelectSubset<T, achievementsUpdateArgs<ExtArgs>>): Prisma__achievementsClient<$Result.GetResult<Prisma.$achievementsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Achievements.
     * @param {achievementsDeleteManyArgs} args - Arguments to filter Achievements to delete.
     * @example
     * // Delete a few Achievements
     * const { count } = await prisma.achievements.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends achievementsDeleteManyArgs>(args?: SelectSubset<T, achievementsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Achievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {achievementsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Achievements
     * const achievements = await prisma.achievements.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends achievementsUpdateManyArgs>(args: SelectSubset<T, achievementsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Achievements and returns the data updated in the database.
     * @param {achievementsUpdateManyAndReturnArgs} args - Arguments to update many Achievements.
     * @example
     * // Update many Achievements
     * const achievements = await prisma.achievements.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Achievements and only return the `id`
     * const achievementsWithIdOnly = await prisma.achievements.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends achievementsUpdateManyAndReturnArgs>(args: SelectSubset<T, achievementsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$achievementsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Achievements.
     * @param {achievementsUpsertArgs} args - Arguments to update or create a Achievements.
     * @example
     * // Update or create a Achievements
     * const achievements = await prisma.achievements.upsert({
     *   create: {
     *     // ... data to create a Achievements
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Achievements we want to update
     *   }
     * })
     */
    upsert<T extends achievementsUpsertArgs>(args: SelectSubset<T, achievementsUpsertArgs<ExtArgs>>): Prisma__achievementsClient<$Result.GetResult<Prisma.$achievementsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Achievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {achievementsCountArgs} args - Arguments to filter Achievements to count.
     * @example
     * // Count the number of Achievements
     * const count = await prisma.achievements.count({
     *   where: {
     *     // ... the filter for the Achievements we want to count
     *   }
     * })
    **/
    count<T extends achievementsCountArgs>(
      args?: Subset<T, achievementsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AchievementsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Achievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AchievementsAggregateArgs>(args: Subset<T, AchievementsAggregateArgs>): Prisma.PrismaPromise<GetAchievementsAggregateType<T>>

    /**
     * Group by Achievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {achievementsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends achievementsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: achievementsGroupByArgs['orderBy'] }
        : { orderBy?: achievementsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, achievementsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAchievementsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the achievements model
   */
  readonly fields: achievementsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for achievements.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__achievementsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the achievements model
   */
  interface achievementsFieldRefs {
    readonly id: FieldRef<"achievements", 'String'>
    readonly title: FieldRef<"achievements", 'String'>
    readonly year: FieldRef<"achievements", 'String'>
    readonly description: FieldRef<"achievements", 'String'>
    readonly createdAt: FieldRef<"achievements", 'DateTime'>
    readonly updatedAt: FieldRef<"achievements", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * achievements findUnique
   */
  export type achievementsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the achievements
     */
    select?: achievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the achievements
     */
    omit?: achievementsOmit<ExtArgs> | null
    /**
     * Filter, which achievements to fetch.
     */
    where: achievementsWhereUniqueInput
  }

  /**
   * achievements findUniqueOrThrow
   */
  export type achievementsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the achievements
     */
    select?: achievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the achievements
     */
    omit?: achievementsOmit<ExtArgs> | null
    /**
     * Filter, which achievements to fetch.
     */
    where: achievementsWhereUniqueInput
  }

  /**
   * achievements findFirst
   */
  export type achievementsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the achievements
     */
    select?: achievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the achievements
     */
    omit?: achievementsOmit<ExtArgs> | null
    /**
     * Filter, which achievements to fetch.
     */
    where?: achievementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of achievements to fetch.
     */
    orderBy?: achievementsOrderByWithRelationInput | achievementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for achievements.
     */
    cursor?: achievementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` achievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` achievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of achievements.
     */
    distinct?: AchievementsScalarFieldEnum | AchievementsScalarFieldEnum[]
  }

  /**
   * achievements findFirstOrThrow
   */
  export type achievementsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the achievements
     */
    select?: achievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the achievements
     */
    omit?: achievementsOmit<ExtArgs> | null
    /**
     * Filter, which achievements to fetch.
     */
    where?: achievementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of achievements to fetch.
     */
    orderBy?: achievementsOrderByWithRelationInput | achievementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for achievements.
     */
    cursor?: achievementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` achievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` achievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of achievements.
     */
    distinct?: AchievementsScalarFieldEnum | AchievementsScalarFieldEnum[]
  }

  /**
   * achievements findMany
   */
  export type achievementsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the achievements
     */
    select?: achievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the achievements
     */
    omit?: achievementsOmit<ExtArgs> | null
    /**
     * Filter, which achievements to fetch.
     */
    where?: achievementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of achievements to fetch.
     */
    orderBy?: achievementsOrderByWithRelationInput | achievementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing achievements.
     */
    cursor?: achievementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` achievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` achievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of achievements.
     */
    distinct?: AchievementsScalarFieldEnum | AchievementsScalarFieldEnum[]
  }

  /**
   * achievements create
   */
  export type achievementsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the achievements
     */
    select?: achievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the achievements
     */
    omit?: achievementsOmit<ExtArgs> | null
    /**
     * The data needed to create a achievements.
     */
    data: XOR<achievementsCreateInput, achievementsUncheckedCreateInput>
  }

  /**
   * achievements createMany
   */
  export type achievementsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many achievements.
     */
    data: achievementsCreateManyInput | achievementsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * achievements createManyAndReturn
   */
  export type achievementsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the achievements
     */
    select?: achievementsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the achievements
     */
    omit?: achievementsOmit<ExtArgs> | null
    /**
     * The data used to create many achievements.
     */
    data: achievementsCreateManyInput | achievementsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * achievements update
   */
  export type achievementsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the achievements
     */
    select?: achievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the achievements
     */
    omit?: achievementsOmit<ExtArgs> | null
    /**
     * The data needed to update a achievements.
     */
    data: XOR<achievementsUpdateInput, achievementsUncheckedUpdateInput>
    /**
     * Choose, which achievements to update.
     */
    where: achievementsWhereUniqueInput
  }

  /**
   * achievements updateMany
   */
  export type achievementsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update achievements.
     */
    data: XOR<achievementsUpdateManyMutationInput, achievementsUncheckedUpdateManyInput>
    /**
     * Filter which achievements to update
     */
    where?: achievementsWhereInput
    /**
     * Limit how many achievements to update.
     */
    limit?: number
  }

  /**
   * achievements updateManyAndReturn
   */
  export type achievementsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the achievements
     */
    select?: achievementsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the achievements
     */
    omit?: achievementsOmit<ExtArgs> | null
    /**
     * The data used to update achievements.
     */
    data: XOR<achievementsUpdateManyMutationInput, achievementsUncheckedUpdateManyInput>
    /**
     * Filter which achievements to update
     */
    where?: achievementsWhereInput
    /**
     * Limit how many achievements to update.
     */
    limit?: number
  }

  /**
   * achievements upsert
   */
  export type achievementsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the achievements
     */
    select?: achievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the achievements
     */
    omit?: achievementsOmit<ExtArgs> | null
    /**
     * The filter to search for the achievements to update in case it exists.
     */
    where: achievementsWhereUniqueInput
    /**
     * In case the achievements found by the `where` argument doesn't exist, create a new achievements with this data.
     */
    create: XOR<achievementsCreateInput, achievementsUncheckedCreateInput>
    /**
     * In case the achievements was found with the provided `where` argument, update it with this data.
     */
    update: XOR<achievementsUpdateInput, achievementsUncheckedUpdateInput>
  }

  /**
   * achievements delete
   */
  export type achievementsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the achievements
     */
    select?: achievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the achievements
     */
    omit?: achievementsOmit<ExtArgs> | null
    /**
     * Filter which achievements to delete.
     */
    where: achievementsWhereUniqueInput
  }

  /**
   * achievements deleteMany
   */
  export type achievementsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which achievements to delete
     */
    where?: achievementsWhereInput
    /**
     * Limit how many achievements to delete.
     */
    limit?: number
  }

  /**
   * achievements without action
   */
  export type achievementsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the achievements
     */
    select?: achievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the achievements
     */
    omit?: achievementsOmit<ExtArgs> | null
  }


  /**
   * Model softSkills
   */

  export type AggregateSoftSkills = {
    _count: SoftSkillsCountAggregateOutputType | null
    _avg: SoftSkillsAvgAggregateOutputType | null
    _sum: SoftSkillsSumAggregateOutputType | null
    _min: SoftSkillsMinAggregateOutputType | null
    _max: SoftSkillsMaxAggregateOutputType | null
  }

  export type SoftSkillsAvgAggregateOutputType = {
    progress: number | null
  }

  export type SoftSkillsSumAggregateOutputType = {
    progress: number | null
  }

  export type SoftSkillsMinAggregateOutputType = {
    id: string | null
    skills: string | null
    progress: number | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SoftSkillsMaxAggregateOutputType = {
    id: string | null
    skills: string | null
    progress: number | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SoftSkillsCountAggregateOutputType = {
    id: number
    skills: number
    progress: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SoftSkillsAvgAggregateInputType = {
    progress?: true
  }

  export type SoftSkillsSumAggregateInputType = {
    progress?: true
  }

  export type SoftSkillsMinAggregateInputType = {
    id?: true
    skills?: true
    progress?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SoftSkillsMaxAggregateInputType = {
    id?: true
    skills?: true
    progress?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SoftSkillsCountAggregateInputType = {
    id?: true
    skills?: true
    progress?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SoftSkillsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which softSkills to aggregate.
     */
    where?: softSkillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of softSkills to fetch.
     */
    orderBy?: softSkillsOrderByWithRelationInput | softSkillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: softSkillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` softSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` softSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned softSkills
    **/
    _count?: true | SoftSkillsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SoftSkillsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SoftSkillsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SoftSkillsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SoftSkillsMaxAggregateInputType
  }

  export type GetSoftSkillsAggregateType<T extends SoftSkillsAggregateArgs> = {
        [P in keyof T & keyof AggregateSoftSkills]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSoftSkills[P]>
      : GetScalarType<T[P], AggregateSoftSkills[P]>
  }




  export type softSkillsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: softSkillsWhereInput
    orderBy?: softSkillsOrderByWithAggregationInput | softSkillsOrderByWithAggregationInput[]
    by: SoftSkillsScalarFieldEnum[] | SoftSkillsScalarFieldEnum
    having?: softSkillsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SoftSkillsCountAggregateInputType | true
    _avg?: SoftSkillsAvgAggregateInputType
    _sum?: SoftSkillsSumAggregateInputType
    _min?: SoftSkillsMinAggregateInputType
    _max?: SoftSkillsMaxAggregateInputType
  }

  export type SoftSkillsGroupByOutputType = {
    id: string
    skills: string
    progress: number
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: SoftSkillsCountAggregateOutputType | null
    _avg: SoftSkillsAvgAggregateOutputType | null
    _sum: SoftSkillsSumAggregateOutputType | null
    _min: SoftSkillsMinAggregateOutputType | null
    _max: SoftSkillsMaxAggregateOutputType | null
  }

  type GetSoftSkillsGroupByPayload<T extends softSkillsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SoftSkillsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SoftSkillsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SoftSkillsGroupByOutputType[P]>
            : GetScalarType<T[P], SoftSkillsGroupByOutputType[P]>
        }
      >
    >


  export type softSkillsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    skills?: boolean
    progress?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["softSkills"]>

  export type softSkillsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    skills?: boolean
    progress?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["softSkills"]>

  export type softSkillsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    skills?: boolean
    progress?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["softSkills"]>

  export type softSkillsSelectScalar = {
    id?: boolean
    skills?: boolean
    progress?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type softSkillsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "skills" | "progress" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["softSkills"]>

  export type $softSkillsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "softSkills"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      skills: string
      progress: number
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["softSkills"]>
    composites: {}
  }

  type softSkillsGetPayload<S extends boolean | null | undefined | softSkillsDefaultArgs> = $Result.GetResult<Prisma.$softSkillsPayload, S>

  type softSkillsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<softSkillsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SoftSkillsCountAggregateInputType | true
    }

  export interface softSkillsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['softSkills'], meta: { name: 'softSkills' } }
    /**
     * Find zero or one SoftSkills that matches the filter.
     * @param {softSkillsFindUniqueArgs} args - Arguments to find a SoftSkills
     * @example
     * // Get one SoftSkills
     * const softSkills = await prisma.softSkills.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends softSkillsFindUniqueArgs>(args: SelectSubset<T, softSkillsFindUniqueArgs<ExtArgs>>): Prisma__softSkillsClient<$Result.GetResult<Prisma.$softSkillsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SoftSkills that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {softSkillsFindUniqueOrThrowArgs} args - Arguments to find a SoftSkills
     * @example
     * // Get one SoftSkills
     * const softSkills = await prisma.softSkills.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends softSkillsFindUniqueOrThrowArgs>(args: SelectSubset<T, softSkillsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__softSkillsClient<$Result.GetResult<Prisma.$softSkillsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SoftSkills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {softSkillsFindFirstArgs} args - Arguments to find a SoftSkills
     * @example
     * // Get one SoftSkills
     * const softSkills = await prisma.softSkills.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends softSkillsFindFirstArgs>(args?: SelectSubset<T, softSkillsFindFirstArgs<ExtArgs>>): Prisma__softSkillsClient<$Result.GetResult<Prisma.$softSkillsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SoftSkills that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {softSkillsFindFirstOrThrowArgs} args - Arguments to find a SoftSkills
     * @example
     * // Get one SoftSkills
     * const softSkills = await prisma.softSkills.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends softSkillsFindFirstOrThrowArgs>(args?: SelectSubset<T, softSkillsFindFirstOrThrowArgs<ExtArgs>>): Prisma__softSkillsClient<$Result.GetResult<Prisma.$softSkillsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SoftSkills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {softSkillsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SoftSkills
     * const softSkills = await prisma.softSkills.findMany()
     * 
     * // Get first 10 SoftSkills
     * const softSkills = await prisma.softSkills.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const softSkillsWithIdOnly = await prisma.softSkills.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends softSkillsFindManyArgs>(args?: SelectSubset<T, softSkillsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$softSkillsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SoftSkills.
     * @param {softSkillsCreateArgs} args - Arguments to create a SoftSkills.
     * @example
     * // Create one SoftSkills
     * const SoftSkills = await prisma.softSkills.create({
     *   data: {
     *     // ... data to create a SoftSkills
     *   }
     * })
     * 
     */
    create<T extends softSkillsCreateArgs>(args: SelectSubset<T, softSkillsCreateArgs<ExtArgs>>): Prisma__softSkillsClient<$Result.GetResult<Prisma.$softSkillsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SoftSkills.
     * @param {softSkillsCreateManyArgs} args - Arguments to create many SoftSkills.
     * @example
     * // Create many SoftSkills
     * const softSkills = await prisma.softSkills.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends softSkillsCreateManyArgs>(args?: SelectSubset<T, softSkillsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SoftSkills and returns the data saved in the database.
     * @param {softSkillsCreateManyAndReturnArgs} args - Arguments to create many SoftSkills.
     * @example
     * // Create many SoftSkills
     * const softSkills = await prisma.softSkills.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SoftSkills and only return the `id`
     * const softSkillsWithIdOnly = await prisma.softSkills.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends softSkillsCreateManyAndReturnArgs>(args?: SelectSubset<T, softSkillsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$softSkillsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SoftSkills.
     * @param {softSkillsDeleteArgs} args - Arguments to delete one SoftSkills.
     * @example
     * // Delete one SoftSkills
     * const SoftSkills = await prisma.softSkills.delete({
     *   where: {
     *     // ... filter to delete one SoftSkills
     *   }
     * })
     * 
     */
    delete<T extends softSkillsDeleteArgs>(args: SelectSubset<T, softSkillsDeleteArgs<ExtArgs>>): Prisma__softSkillsClient<$Result.GetResult<Prisma.$softSkillsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SoftSkills.
     * @param {softSkillsUpdateArgs} args - Arguments to update one SoftSkills.
     * @example
     * // Update one SoftSkills
     * const softSkills = await prisma.softSkills.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends softSkillsUpdateArgs>(args: SelectSubset<T, softSkillsUpdateArgs<ExtArgs>>): Prisma__softSkillsClient<$Result.GetResult<Prisma.$softSkillsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SoftSkills.
     * @param {softSkillsDeleteManyArgs} args - Arguments to filter SoftSkills to delete.
     * @example
     * // Delete a few SoftSkills
     * const { count } = await prisma.softSkills.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends softSkillsDeleteManyArgs>(args?: SelectSubset<T, softSkillsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SoftSkills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {softSkillsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SoftSkills
     * const softSkills = await prisma.softSkills.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends softSkillsUpdateManyArgs>(args: SelectSubset<T, softSkillsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SoftSkills and returns the data updated in the database.
     * @param {softSkillsUpdateManyAndReturnArgs} args - Arguments to update many SoftSkills.
     * @example
     * // Update many SoftSkills
     * const softSkills = await prisma.softSkills.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SoftSkills and only return the `id`
     * const softSkillsWithIdOnly = await prisma.softSkills.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends softSkillsUpdateManyAndReturnArgs>(args: SelectSubset<T, softSkillsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$softSkillsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SoftSkills.
     * @param {softSkillsUpsertArgs} args - Arguments to update or create a SoftSkills.
     * @example
     * // Update or create a SoftSkills
     * const softSkills = await prisma.softSkills.upsert({
     *   create: {
     *     // ... data to create a SoftSkills
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SoftSkills we want to update
     *   }
     * })
     */
    upsert<T extends softSkillsUpsertArgs>(args: SelectSubset<T, softSkillsUpsertArgs<ExtArgs>>): Prisma__softSkillsClient<$Result.GetResult<Prisma.$softSkillsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SoftSkills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {softSkillsCountArgs} args - Arguments to filter SoftSkills to count.
     * @example
     * // Count the number of SoftSkills
     * const count = await prisma.softSkills.count({
     *   where: {
     *     // ... the filter for the SoftSkills we want to count
     *   }
     * })
    **/
    count<T extends softSkillsCountArgs>(
      args?: Subset<T, softSkillsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SoftSkillsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SoftSkills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoftSkillsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SoftSkillsAggregateArgs>(args: Subset<T, SoftSkillsAggregateArgs>): Prisma.PrismaPromise<GetSoftSkillsAggregateType<T>>

    /**
     * Group by SoftSkills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {softSkillsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends softSkillsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: softSkillsGroupByArgs['orderBy'] }
        : { orderBy?: softSkillsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, softSkillsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSoftSkillsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the softSkills model
   */
  readonly fields: softSkillsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for softSkills.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__softSkillsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the softSkills model
   */
  interface softSkillsFieldRefs {
    readonly id: FieldRef<"softSkills", 'String'>
    readonly skills: FieldRef<"softSkills", 'String'>
    readonly progress: FieldRef<"softSkills", 'Int'>
    readonly description: FieldRef<"softSkills", 'String'>
    readonly createdAt: FieldRef<"softSkills", 'DateTime'>
    readonly updatedAt: FieldRef<"softSkills", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * softSkills findUnique
   */
  export type softSkillsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the softSkills
     */
    select?: softSkillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the softSkills
     */
    omit?: softSkillsOmit<ExtArgs> | null
    /**
     * Filter, which softSkills to fetch.
     */
    where: softSkillsWhereUniqueInput
  }

  /**
   * softSkills findUniqueOrThrow
   */
  export type softSkillsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the softSkills
     */
    select?: softSkillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the softSkills
     */
    omit?: softSkillsOmit<ExtArgs> | null
    /**
     * Filter, which softSkills to fetch.
     */
    where: softSkillsWhereUniqueInput
  }

  /**
   * softSkills findFirst
   */
  export type softSkillsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the softSkills
     */
    select?: softSkillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the softSkills
     */
    omit?: softSkillsOmit<ExtArgs> | null
    /**
     * Filter, which softSkills to fetch.
     */
    where?: softSkillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of softSkills to fetch.
     */
    orderBy?: softSkillsOrderByWithRelationInput | softSkillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for softSkills.
     */
    cursor?: softSkillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` softSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` softSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of softSkills.
     */
    distinct?: SoftSkillsScalarFieldEnum | SoftSkillsScalarFieldEnum[]
  }

  /**
   * softSkills findFirstOrThrow
   */
  export type softSkillsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the softSkills
     */
    select?: softSkillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the softSkills
     */
    omit?: softSkillsOmit<ExtArgs> | null
    /**
     * Filter, which softSkills to fetch.
     */
    where?: softSkillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of softSkills to fetch.
     */
    orderBy?: softSkillsOrderByWithRelationInput | softSkillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for softSkills.
     */
    cursor?: softSkillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` softSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` softSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of softSkills.
     */
    distinct?: SoftSkillsScalarFieldEnum | SoftSkillsScalarFieldEnum[]
  }

  /**
   * softSkills findMany
   */
  export type softSkillsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the softSkills
     */
    select?: softSkillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the softSkills
     */
    omit?: softSkillsOmit<ExtArgs> | null
    /**
     * Filter, which softSkills to fetch.
     */
    where?: softSkillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of softSkills to fetch.
     */
    orderBy?: softSkillsOrderByWithRelationInput | softSkillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing softSkills.
     */
    cursor?: softSkillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` softSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` softSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of softSkills.
     */
    distinct?: SoftSkillsScalarFieldEnum | SoftSkillsScalarFieldEnum[]
  }

  /**
   * softSkills create
   */
  export type softSkillsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the softSkills
     */
    select?: softSkillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the softSkills
     */
    omit?: softSkillsOmit<ExtArgs> | null
    /**
     * The data needed to create a softSkills.
     */
    data: XOR<softSkillsCreateInput, softSkillsUncheckedCreateInput>
  }

  /**
   * softSkills createMany
   */
  export type softSkillsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many softSkills.
     */
    data: softSkillsCreateManyInput | softSkillsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * softSkills createManyAndReturn
   */
  export type softSkillsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the softSkills
     */
    select?: softSkillsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the softSkills
     */
    omit?: softSkillsOmit<ExtArgs> | null
    /**
     * The data used to create many softSkills.
     */
    data: softSkillsCreateManyInput | softSkillsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * softSkills update
   */
  export type softSkillsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the softSkills
     */
    select?: softSkillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the softSkills
     */
    omit?: softSkillsOmit<ExtArgs> | null
    /**
     * The data needed to update a softSkills.
     */
    data: XOR<softSkillsUpdateInput, softSkillsUncheckedUpdateInput>
    /**
     * Choose, which softSkills to update.
     */
    where: softSkillsWhereUniqueInput
  }

  /**
   * softSkills updateMany
   */
  export type softSkillsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update softSkills.
     */
    data: XOR<softSkillsUpdateManyMutationInput, softSkillsUncheckedUpdateManyInput>
    /**
     * Filter which softSkills to update
     */
    where?: softSkillsWhereInput
    /**
     * Limit how many softSkills to update.
     */
    limit?: number
  }

  /**
   * softSkills updateManyAndReturn
   */
  export type softSkillsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the softSkills
     */
    select?: softSkillsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the softSkills
     */
    omit?: softSkillsOmit<ExtArgs> | null
    /**
     * The data used to update softSkills.
     */
    data: XOR<softSkillsUpdateManyMutationInput, softSkillsUncheckedUpdateManyInput>
    /**
     * Filter which softSkills to update
     */
    where?: softSkillsWhereInput
    /**
     * Limit how many softSkills to update.
     */
    limit?: number
  }

  /**
   * softSkills upsert
   */
  export type softSkillsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the softSkills
     */
    select?: softSkillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the softSkills
     */
    omit?: softSkillsOmit<ExtArgs> | null
    /**
     * The filter to search for the softSkills to update in case it exists.
     */
    where: softSkillsWhereUniqueInput
    /**
     * In case the softSkills found by the `where` argument doesn't exist, create a new softSkills with this data.
     */
    create: XOR<softSkillsCreateInput, softSkillsUncheckedCreateInput>
    /**
     * In case the softSkills was found with the provided `where` argument, update it with this data.
     */
    update: XOR<softSkillsUpdateInput, softSkillsUncheckedUpdateInput>
  }

  /**
   * softSkills delete
   */
  export type softSkillsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the softSkills
     */
    select?: softSkillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the softSkills
     */
    omit?: softSkillsOmit<ExtArgs> | null
    /**
     * Filter which softSkills to delete.
     */
    where: softSkillsWhereUniqueInput
  }

  /**
   * softSkills deleteMany
   */
  export type softSkillsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which softSkills to delete
     */
    where?: softSkillsWhereInput
    /**
     * Limit how many softSkills to delete.
     */
    limit?: number
  }

  /**
   * softSkills without action
   */
  export type softSkillsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the softSkills
     */
    select?: softSkillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the softSkills
     */
    omit?: softSkillsOmit<ExtArgs> | null
  }


  /**
   * Model frontendSkills
   */

  export type AggregateFrontendSkills = {
    _count: FrontendSkillsCountAggregateOutputType | null
    _avg: FrontendSkillsAvgAggregateOutputType | null
    _sum: FrontendSkillsSumAggregateOutputType | null
    _min: FrontendSkillsMinAggregateOutputType | null
    _max: FrontendSkillsMaxAggregateOutputType | null
  }

  export type FrontendSkillsAvgAggregateOutputType = {
    progress: number | null
  }

  export type FrontendSkillsSumAggregateOutputType = {
    progress: number | null
  }

  export type FrontendSkillsMinAggregateOutputType = {
    id: string | null
    skills: string | null
    progress: number | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FrontendSkillsMaxAggregateOutputType = {
    id: string | null
    skills: string | null
    progress: number | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FrontendSkillsCountAggregateOutputType = {
    id: number
    skills: number
    progress: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FrontendSkillsAvgAggregateInputType = {
    progress?: true
  }

  export type FrontendSkillsSumAggregateInputType = {
    progress?: true
  }

  export type FrontendSkillsMinAggregateInputType = {
    id?: true
    skills?: true
    progress?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FrontendSkillsMaxAggregateInputType = {
    id?: true
    skills?: true
    progress?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FrontendSkillsCountAggregateInputType = {
    id?: true
    skills?: true
    progress?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FrontendSkillsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which frontendSkills to aggregate.
     */
    where?: frontendSkillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of frontendSkills to fetch.
     */
    orderBy?: frontendSkillsOrderByWithRelationInput | frontendSkillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: frontendSkillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` frontendSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` frontendSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned frontendSkills
    **/
    _count?: true | FrontendSkillsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FrontendSkillsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FrontendSkillsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FrontendSkillsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FrontendSkillsMaxAggregateInputType
  }

  export type GetFrontendSkillsAggregateType<T extends FrontendSkillsAggregateArgs> = {
        [P in keyof T & keyof AggregateFrontendSkills]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFrontendSkills[P]>
      : GetScalarType<T[P], AggregateFrontendSkills[P]>
  }




  export type frontendSkillsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: frontendSkillsWhereInput
    orderBy?: frontendSkillsOrderByWithAggregationInput | frontendSkillsOrderByWithAggregationInput[]
    by: FrontendSkillsScalarFieldEnum[] | FrontendSkillsScalarFieldEnum
    having?: frontendSkillsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FrontendSkillsCountAggregateInputType | true
    _avg?: FrontendSkillsAvgAggregateInputType
    _sum?: FrontendSkillsSumAggregateInputType
    _min?: FrontendSkillsMinAggregateInputType
    _max?: FrontendSkillsMaxAggregateInputType
  }

  export type FrontendSkillsGroupByOutputType = {
    id: string
    skills: string
    progress: number
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: FrontendSkillsCountAggregateOutputType | null
    _avg: FrontendSkillsAvgAggregateOutputType | null
    _sum: FrontendSkillsSumAggregateOutputType | null
    _min: FrontendSkillsMinAggregateOutputType | null
    _max: FrontendSkillsMaxAggregateOutputType | null
  }

  type GetFrontendSkillsGroupByPayload<T extends frontendSkillsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FrontendSkillsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FrontendSkillsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FrontendSkillsGroupByOutputType[P]>
            : GetScalarType<T[P], FrontendSkillsGroupByOutputType[P]>
        }
      >
    >


  export type frontendSkillsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    skills?: boolean
    progress?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["frontendSkills"]>

  export type frontendSkillsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    skills?: boolean
    progress?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["frontendSkills"]>

  export type frontendSkillsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    skills?: boolean
    progress?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["frontendSkills"]>

  export type frontendSkillsSelectScalar = {
    id?: boolean
    skills?: boolean
    progress?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type frontendSkillsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "skills" | "progress" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["frontendSkills"]>

  export type $frontendSkillsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "frontendSkills"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      skills: string
      progress: number
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["frontendSkills"]>
    composites: {}
  }

  type frontendSkillsGetPayload<S extends boolean | null | undefined | frontendSkillsDefaultArgs> = $Result.GetResult<Prisma.$frontendSkillsPayload, S>

  type frontendSkillsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<frontendSkillsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FrontendSkillsCountAggregateInputType | true
    }

  export interface frontendSkillsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['frontendSkills'], meta: { name: 'frontendSkills' } }
    /**
     * Find zero or one FrontendSkills that matches the filter.
     * @param {frontendSkillsFindUniqueArgs} args - Arguments to find a FrontendSkills
     * @example
     * // Get one FrontendSkills
     * const frontendSkills = await prisma.frontendSkills.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends frontendSkillsFindUniqueArgs>(args: SelectSubset<T, frontendSkillsFindUniqueArgs<ExtArgs>>): Prisma__frontendSkillsClient<$Result.GetResult<Prisma.$frontendSkillsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FrontendSkills that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {frontendSkillsFindUniqueOrThrowArgs} args - Arguments to find a FrontendSkills
     * @example
     * // Get one FrontendSkills
     * const frontendSkills = await prisma.frontendSkills.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends frontendSkillsFindUniqueOrThrowArgs>(args: SelectSubset<T, frontendSkillsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__frontendSkillsClient<$Result.GetResult<Prisma.$frontendSkillsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FrontendSkills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {frontendSkillsFindFirstArgs} args - Arguments to find a FrontendSkills
     * @example
     * // Get one FrontendSkills
     * const frontendSkills = await prisma.frontendSkills.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends frontendSkillsFindFirstArgs>(args?: SelectSubset<T, frontendSkillsFindFirstArgs<ExtArgs>>): Prisma__frontendSkillsClient<$Result.GetResult<Prisma.$frontendSkillsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FrontendSkills that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {frontendSkillsFindFirstOrThrowArgs} args - Arguments to find a FrontendSkills
     * @example
     * // Get one FrontendSkills
     * const frontendSkills = await prisma.frontendSkills.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends frontendSkillsFindFirstOrThrowArgs>(args?: SelectSubset<T, frontendSkillsFindFirstOrThrowArgs<ExtArgs>>): Prisma__frontendSkillsClient<$Result.GetResult<Prisma.$frontendSkillsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FrontendSkills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {frontendSkillsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FrontendSkills
     * const frontendSkills = await prisma.frontendSkills.findMany()
     * 
     * // Get first 10 FrontendSkills
     * const frontendSkills = await prisma.frontendSkills.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const frontendSkillsWithIdOnly = await prisma.frontendSkills.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends frontendSkillsFindManyArgs>(args?: SelectSubset<T, frontendSkillsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$frontendSkillsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FrontendSkills.
     * @param {frontendSkillsCreateArgs} args - Arguments to create a FrontendSkills.
     * @example
     * // Create one FrontendSkills
     * const FrontendSkills = await prisma.frontendSkills.create({
     *   data: {
     *     // ... data to create a FrontendSkills
     *   }
     * })
     * 
     */
    create<T extends frontendSkillsCreateArgs>(args: SelectSubset<T, frontendSkillsCreateArgs<ExtArgs>>): Prisma__frontendSkillsClient<$Result.GetResult<Prisma.$frontendSkillsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FrontendSkills.
     * @param {frontendSkillsCreateManyArgs} args - Arguments to create many FrontendSkills.
     * @example
     * // Create many FrontendSkills
     * const frontendSkills = await prisma.frontendSkills.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends frontendSkillsCreateManyArgs>(args?: SelectSubset<T, frontendSkillsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FrontendSkills and returns the data saved in the database.
     * @param {frontendSkillsCreateManyAndReturnArgs} args - Arguments to create many FrontendSkills.
     * @example
     * // Create many FrontendSkills
     * const frontendSkills = await prisma.frontendSkills.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FrontendSkills and only return the `id`
     * const frontendSkillsWithIdOnly = await prisma.frontendSkills.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends frontendSkillsCreateManyAndReturnArgs>(args?: SelectSubset<T, frontendSkillsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$frontendSkillsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FrontendSkills.
     * @param {frontendSkillsDeleteArgs} args - Arguments to delete one FrontendSkills.
     * @example
     * // Delete one FrontendSkills
     * const FrontendSkills = await prisma.frontendSkills.delete({
     *   where: {
     *     // ... filter to delete one FrontendSkills
     *   }
     * })
     * 
     */
    delete<T extends frontendSkillsDeleteArgs>(args: SelectSubset<T, frontendSkillsDeleteArgs<ExtArgs>>): Prisma__frontendSkillsClient<$Result.GetResult<Prisma.$frontendSkillsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FrontendSkills.
     * @param {frontendSkillsUpdateArgs} args - Arguments to update one FrontendSkills.
     * @example
     * // Update one FrontendSkills
     * const frontendSkills = await prisma.frontendSkills.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends frontendSkillsUpdateArgs>(args: SelectSubset<T, frontendSkillsUpdateArgs<ExtArgs>>): Prisma__frontendSkillsClient<$Result.GetResult<Prisma.$frontendSkillsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FrontendSkills.
     * @param {frontendSkillsDeleteManyArgs} args - Arguments to filter FrontendSkills to delete.
     * @example
     * // Delete a few FrontendSkills
     * const { count } = await prisma.frontendSkills.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends frontendSkillsDeleteManyArgs>(args?: SelectSubset<T, frontendSkillsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FrontendSkills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {frontendSkillsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FrontendSkills
     * const frontendSkills = await prisma.frontendSkills.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends frontendSkillsUpdateManyArgs>(args: SelectSubset<T, frontendSkillsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FrontendSkills and returns the data updated in the database.
     * @param {frontendSkillsUpdateManyAndReturnArgs} args - Arguments to update many FrontendSkills.
     * @example
     * // Update many FrontendSkills
     * const frontendSkills = await prisma.frontendSkills.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FrontendSkills and only return the `id`
     * const frontendSkillsWithIdOnly = await prisma.frontendSkills.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends frontendSkillsUpdateManyAndReturnArgs>(args: SelectSubset<T, frontendSkillsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$frontendSkillsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FrontendSkills.
     * @param {frontendSkillsUpsertArgs} args - Arguments to update or create a FrontendSkills.
     * @example
     * // Update or create a FrontendSkills
     * const frontendSkills = await prisma.frontendSkills.upsert({
     *   create: {
     *     // ... data to create a FrontendSkills
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FrontendSkills we want to update
     *   }
     * })
     */
    upsert<T extends frontendSkillsUpsertArgs>(args: SelectSubset<T, frontendSkillsUpsertArgs<ExtArgs>>): Prisma__frontendSkillsClient<$Result.GetResult<Prisma.$frontendSkillsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FrontendSkills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {frontendSkillsCountArgs} args - Arguments to filter FrontendSkills to count.
     * @example
     * // Count the number of FrontendSkills
     * const count = await prisma.frontendSkills.count({
     *   where: {
     *     // ... the filter for the FrontendSkills we want to count
     *   }
     * })
    **/
    count<T extends frontendSkillsCountArgs>(
      args?: Subset<T, frontendSkillsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FrontendSkillsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FrontendSkills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FrontendSkillsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FrontendSkillsAggregateArgs>(args: Subset<T, FrontendSkillsAggregateArgs>): Prisma.PrismaPromise<GetFrontendSkillsAggregateType<T>>

    /**
     * Group by FrontendSkills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {frontendSkillsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends frontendSkillsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: frontendSkillsGroupByArgs['orderBy'] }
        : { orderBy?: frontendSkillsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, frontendSkillsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFrontendSkillsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the frontendSkills model
   */
  readonly fields: frontendSkillsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for frontendSkills.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__frontendSkillsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the frontendSkills model
   */
  interface frontendSkillsFieldRefs {
    readonly id: FieldRef<"frontendSkills", 'String'>
    readonly skills: FieldRef<"frontendSkills", 'String'>
    readonly progress: FieldRef<"frontendSkills", 'Int'>
    readonly description: FieldRef<"frontendSkills", 'String'>
    readonly createdAt: FieldRef<"frontendSkills", 'DateTime'>
    readonly updatedAt: FieldRef<"frontendSkills", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * frontendSkills findUnique
   */
  export type frontendSkillsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the frontendSkills
     */
    select?: frontendSkillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the frontendSkills
     */
    omit?: frontendSkillsOmit<ExtArgs> | null
    /**
     * Filter, which frontendSkills to fetch.
     */
    where: frontendSkillsWhereUniqueInput
  }

  /**
   * frontendSkills findUniqueOrThrow
   */
  export type frontendSkillsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the frontendSkills
     */
    select?: frontendSkillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the frontendSkills
     */
    omit?: frontendSkillsOmit<ExtArgs> | null
    /**
     * Filter, which frontendSkills to fetch.
     */
    where: frontendSkillsWhereUniqueInput
  }

  /**
   * frontendSkills findFirst
   */
  export type frontendSkillsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the frontendSkills
     */
    select?: frontendSkillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the frontendSkills
     */
    omit?: frontendSkillsOmit<ExtArgs> | null
    /**
     * Filter, which frontendSkills to fetch.
     */
    where?: frontendSkillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of frontendSkills to fetch.
     */
    orderBy?: frontendSkillsOrderByWithRelationInput | frontendSkillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for frontendSkills.
     */
    cursor?: frontendSkillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` frontendSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` frontendSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of frontendSkills.
     */
    distinct?: FrontendSkillsScalarFieldEnum | FrontendSkillsScalarFieldEnum[]
  }

  /**
   * frontendSkills findFirstOrThrow
   */
  export type frontendSkillsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the frontendSkills
     */
    select?: frontendSkillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the frontendSkills
     */
    omit?: frontendSkillsOmit<ExtArgs> | null
    /**
     * Filter, which frontendSkills to fetch.
     */
    where?: frontendSkillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of frontendSkills to fetch.
     */
    orderBy?: frontendSkillsOrderByWithRelationInput | frontendSkillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for frontendSkills.
     */
    cursor?: frontendSkillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` frontendSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` frontendSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of frontendSkills.
     */
    distinct?: FrontendSkillsScalarFieldEnum | FrontendSkillsScalarFieldEnum[]
  }

  /**
   * frontendSkills findMany
   */
  export type frontendSkillsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the frontendSkills
     */
    select?: frontendSkillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the frontendSkills
     */
    omit?: frontendSkillsOmit<ExtArgs> | null
    /**
     * Filter, which frontendSkills to fetch.
     */
    where?: frontendSkillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of frontendSkills to fetch.
     */
    orderBy?: frontendSkillsOrderByWithRelationInput | frontendSkillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing frontendSkills.
     */
    cursor?: frontendSkillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` frontendSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` frontendSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of frontendSkills.
     */
    distinct?: FrontendSkillsScalarFieldEnum | FrontendSkillsScalarFieldEnum[]
  }

  /**
   * frontendSkills create
   */
  export type frontendSkillsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the frontendSkills
     */
    select?: frontendSkillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the frontendSkills
     */
    omit?: frontendSkillsOmit<ExtArgs> | null
    /**
     * The data needed to create a frontendSkills.
     */
    data: XOR<frontendSkillsCreateInput, frontendSkillsUncheckedCreateInput>
  }

  /**
   * frontendSkills createMany
   */
  export type frontendSkillsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many frontendSkills.
     */
    data: frontendSkillsCreateManyInput | frontendSkillsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * frontendSkills createManyAndReturn
   */
  export type frontendSkillsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the frontendSkills
     */
    select?: frontendSkillsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the frontendSkills
     */
    omit?: frontendSkillsOmit<ExtArgs> | null
    /**
     * The data used to create many frontendSkills.
     */
    data: frontendSkillsCreateManyInput | frontendSkillsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * frontendSkills update
   */
  export type frontendSkillsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the frontendSkills
     */
    select?: frontendSkillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the frontendSkills
     */
    omit?: frontendSkillsOmit<ExtArgs> | null
    /**
     * The data needed to update a frontendSkills.
     */
    data: XOR<frontendSkillsUpdateInput, frontendSkillsUncheckedUpdateInput>
    /**
     * Choose, which frontendSkills to update.
     */
    where: frontendSkillsWhereUniqueInput
  }

  /**
   * frontendSkills updateMany
   */
  export type frontendSkillsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update frontendSkills.
     */
    data: XOR<frontendSkillsUpdateManyMutationInput, frontendSkillsUncheckedUpdateManyInput>
    /**
     * Filter which frontendSkills to update
     */
    where?: frontendSkillsWhereInput
    /**
     * Limit how many frontendSkills to update.
     */
    limit?: number
  }

  /**
   * frontendSkills updateManyAndReturn
   */
  export type frontendSkillsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the frontendSkills
     */
    select?: frontendSkillsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the frontendSkills
     */
    omit?: frontendSkillsOmit<ExtArgs> | null
    /**
     * The data used to update frontendSkills.
     */
    data: XOR<frontendSkillsUpdateManyMutationInput, frontendSkillsUncheckedUpdateManyInput>
    /**
     * Filter which frontendSkills to update
     */
    where?: frontendSkillsWhereInput
    /**
     * Limit how many frontendSkills to update.
     */
    limit?: number
  }

  /**
   * frontendSkills upsert
   */
  export type frontendSkillsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the frontendSkills
     */
    select?: frontendSkillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the frontendSkills
     */
    omit?: frontendSkillsOmit<ExtArgs> | null
    /**
     * The filter to search for the frontendSkills to update in case it exists.
     */
    where: frontendSkillsWhereUniqueInput
    /**
     * In case the frontendSkills found by the `where` argument doesn't exist, create a new frontendSkills with this data.
     */
    create: XOR<frontendSkillsCreateInput, frontendSkillsUncheckedCreateInput>
    /**
     * In case the frontendSkills was found with the provided `where` argument, update it with this data.
     */
    update: XOR<frontendSkillsUpdateInput, frontendSkillsUncheckedUpdateInput>
  }

  /**
   * frontendSkills delete
   */
  export type frontendSkillsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the frontendSkills
     */
    select?: frontendSkillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the frontendSkills
     */
    omit?: frontendSkillsOmit<ExtArgs> | null
    /**
     * Filter which frontendSkills to delete.
     */
    where: frontendSkillsWhereUniqueInput
  }

  /**
   * frontendSkills deleteMany
   */
  export type frontendSkillsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which frontendSkills to delete
     */
    where?: frontendSkillsWhereInput
    /**
     * Limit how many frontendSkills to delete.
     */
    limit?: number
  }

  /**
   * frontendSkills without action
   */
  export type frontendSkillsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the frontendSkills
     */
    select?: frontendSkillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the frontendSkills
     */
    omit?: frontendSkillsOmit<ExtArgs> | null
  }


  /**
   * Model backendSkills
   */

  export type AggregateBackendSkills = {
    _count: BackendSkillsCountAggregateOutputType | null
    _avg: BackendSkillsAvgAggregateOutputType | null
    _sum: BackendSkillsSumAggregateOutputType | null
    _min: BackendSkillsMinAggregateOutputType | null
    _max: BackendSkillsMaxAggregateOutputType | null
  }

  export type BackendSkillsAvgAggregateOutputType = {
    progress: number | null
  }

  export type BackendSkillsSumAggregateOutputType = {
    progress: number | null
  }

  export type BackendSkillsMinAggregateOutputType = {
    id: string | null
    skills: string | null
    progress: number | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BackendSkillsMaxAggregateOutputType = {
    id: string | null
    skills: string | null
    progress: number | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BackendSkillsCountAggregateOutputType = {
    id: number
    skills: number
    progress: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BackendSkillsAvgAggregateInputType = {
    progress?: true
  }

  export type BackendSkillsSumAggregateInputType = {
    progress?: true
  }

  export type BackendSkillsMinAggregateInputType = {
    id?: true
    skills?: true
    progress?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BackendSkillsMaxAggregateInputType = {
    id?: true
    skills?: true
    progress?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BackendSkillsCountAggregateInputType = {
    id?: true
    skills?: true
    progress?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BackendSkillsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which backendSkills to aggregate.
     */
    where?: backendSkillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of backendSkills to fetch.
     */
    orderBy?: backendSkillsOrderByWithRelationInput | backendSkillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: backendSkillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` backendSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` backendSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned backendSkills
    **/
    _count?: true | BackendSkillsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BackendSkillsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BackendSkillsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BackendSkillsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BackendSkillsMaxAggregateInputType
  }

  export type GetBackendSkillsAggregateType<T extends BackendSkillsAggregateArgs> = {
        [P in keyof T & keyof AggregateBackendSkills]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBackendSkills[P]>
      : GetScalarType<T[P], AggregateBackendSkills[P]>
  }




  export type backendSkillsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: backendSkillsWhereInput
    orderBy?: backendSkillsOrderByWithAggregationInput | backendSkillsOrderByWithAggregationInput[]
    by: BackendSkillsScalarFieldEnum[] | BackendSkillsScalarFieldEnum
    having?: backendSkillsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BackendSkillsCountAggregateInputType | true
    _avg?: BackendSkillsAvgAggregateInputType
    _sum?: BackendSkillsSumAggregateInputType
    _min?: BackendSkillsMinAggregateInputType
    _max?: BackendSkillsMaxAggregateInputType
  }

  export type BackendSkillsGroupByOutputType = {
    id: string
    skills: string
    progress: number
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: BackendSkillsCountAggregateOutputType | null
    _avg: BackendSkillsAvgAggregateOutputType | null
    _sum: BackendSkillsSumAggregateOutputType | null
    _min: BackendSkillsMinAggregateOutputType | null
    _max: BackendSkillsMaxAggregateOutputType | null
  }

  type GetBackendSkillsGroupByPayload<T extends backendSkillsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BackendSkillsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BackendSkillsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BackendSkillsGroupByOutputType[P]>
            : GetScalarType<T[P], BackendSkillsGroupByOutputType[P]>
        }
      >
    >


  export type backendSkillsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    skills?: boolean
    progress?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["backendSkills"]>

  export type backendSkillsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    skills?: boolean
    progress?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["backendSkills"]>

  export type backendSkillsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    skills?: boolean
    progress?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["backendSkills"]>

  export type backendSkillsSelectScalar = {
    id?: boolean
    skills?: boolean
    progress?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type backendSkillsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "skills" | "progress" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["backendSkills"]>

  export type $backendSkillsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "backendSkills"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      skills: string
      progress: number
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["backendSkills"]>
    composites: {}
  }

  type backendSkillsGetPayload<S extends boolean | null | undefined | backendSkillsDefaultArgs> = $Result.GetResult<Prisma.$backendSkillsPayload, S>

  type backendSkillsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<backendSkillsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BackendSkillsCountAggregateInputType | true
    }

  export interface backendSkillsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['backendSkills'], meta: { name: 'backendSkills' } }
    /**
     * Find zero or one BackendSkills that matches the filter.
     * @param {backendSkillsFindUniqueArgs} args - Arguments to find a BackendSkills
     * @example
     * // Get one BackendSkills
     * const backendSkills = await prisma.backendSkills.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends backendSkillsFindUniqueArgs>(args: SelectSubset<T, backendSkillsFindUniqueArgs<ExtArgs>>): Prisma__backendSkillsClient<$Result.GetResult<Prisma.$backendSkillsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BackendSkills that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {backendSkillsFindUniqueOrThrowArgs} args - Arguments to find a BackendSkills
     * @example
     * // Get one BackendSkills
     * const backendSkills = await prisma.backendSkills.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends backendSkillsFindUniqueOrThrowArgs>(args: SelectSubset<T, backendSkillsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__backendSkillsClient<$Result.GetResult<Prisma.$backendSkillsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BackendSkills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {backendSkillsFindFirstArgs} args - Arguments to find a BackendSkills
     * @example
     * // Get one BackendSkills
     * const backendSkills = await prisma.backendSkills.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends backendSkillsFindFirstArgs>(args?: SelectSubset<T, backendSkillsFindFirstArgs<ExtArgs>>): Prisma__backendSkillsClient<$Result.GetResult<Prisma.$backendSkillsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BackendSkills that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {backendSkillsFindFirstOrThrowArgs} args - Arguments to find a BackendSkills
     * @example
     * // Get one BackendSkills
     * const backendSkills = await prisma.backendSkills.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends backendSkillsFindFirstOrThrowArgs>(args?: SelectSubset<T, backendSkillsFindFirstOrThrowArgs<ExtArgs>>): Prisma__backendSkillsClient<$Result.GetResult<Prisma.$backendSkillsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BackendSkills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {backendSkillsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BackendSkills
     * const backendSkills = await prisma.backendSkills.findMany()
     * 
     * // Get first 10 BackendSkills
     * const backendSkills = await prisma.backendSkills.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const backendSkillsWithIdOnly = await prisma.backendSkills.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends backendSkillsFindManyArgs>(args?: SelectSubset<T, backendSkillsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$backendSkillsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BackendSkills.
     * @param {backendSkillsCreateArgs} args - Arguments to create a BackendSkills.
     * @example
     * // Create one BackendSkills
     * const BackendSkills = await prisma.backendSkills.create({
     *   data: {
     *     // ... data to create a BackendSkills
     *   }
     * })
     * 
     */
    create<T extends backendSkillsCreateArgs>(args: SelectSubset<T, backendSkillsCreateArgs<ExtArgs>>): Prisma__backendSkillsClient<$Result.GetResult<Prisma.$backendSkillsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BackendSkills.
     * @param {backendSkillsCreateManyArgs} args - Arguments to create many BackendSkills.
     * @example
     * // Create many BackendSkills
     * const backendSkills = await prisma.backendSkills.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends backendSkillsCreateManyArgs>(args?: SelectSubset<T, backendSkillsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BackendSkills and returns the data saved in the database.
     * @param {backendSkillsCreateManyAndReturnArgs} args - Arguments to create many BackendSkills.
     * @example
     * // Create many BackendSkills
     * const backendSkills = await prisma.backendSkills.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BackendSkills and only return the `id`
     * const backendSkillsWithIdOnly = await prisma.backendSkills.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends backendSkillsCreateManyAndReturnArgs>(args?: SelectSubset<T, backendSkillsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$backendSkillsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BackendSkills.
     * @param {backendSkillsDeleteArgs} args - Arguments to delete one BackendSkills.
     * @example
     * // Delete one BackendSkills
     * const BackendSkills = await prisma.backendSkills.delete({
     *   where: {
     *     // ... filter to delete one BackendSkills
     *   }
     * })
     * 
     */
    delete<T extends backendSkillsDeleteArgs>(args: SelectSubset<T, backendSkillsDeleteArgs<ExtArgs>>): Prisma__backendSkillsClient<$Result.GetResult<Prisma.$backendSkillsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BackendSkills.
     * @param {backendSkillsUpdateArgs} args - Arguments to update one BackendSkills.
     * @example
     * // Update one BackendSkills
     * const backendSkills = await prisma.backendSkills.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends backendSkillsUpdateArgs>(args: SelectSubset<T, backendSkillsUpdateArgs<ExtArgs>>): Prisma__backendSkillsClient<$Result.GetResult<Prisma.$backendSkillsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BackendSkills.
     * @param {backendSkillsDeleteManyArgs} args - Arguments to filter BackendSkills to delete.
     * @example
     * // Delete a few BackendSkills
     * const { count } = await prisma.backendSkills.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends backendSkillsDeleteManyArgs>(args?: SelectSubset<T, backendSkillsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BackendSkills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {backendSkillsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BackendSkills
     * const backendSkills = await prisma.backendSkills.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends backendSkillsUpdateManyArgs>(args: SelectSubset<T, backendSkillsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BackendSkills and returns the data updated in the database.
     * @param {backendSkillsUpdateManyAndReturnArgs} args - Arguments to update many BackendSkills.
     * @example
     * // Update many BackendSkills
     * const backendSkills = await prisma.backendSkills.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BackendSkills and only return the `id`
     * const backendSkillsWithIdOnly = await prisma.backendSkills.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends backendSkillsUpdateManyAndReturnArgs>(args: SelectSubset<T, backendSkillsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$backendSkillsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BackendSkills.
     * @param {backendSkillsUpsertArgs} args - Arguments to update or create a BackendSkills.
     * @example
     * // Update or create a BackendSkills
     * const backendSkills = await prisma.backendSkills.upsert({
     *   create: {
     *     // ... data to create a BackendSkills
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BackendSkills we want to update
     *   }
     * })
     */
    upsert<T extends backendSkillsUpsertArgs>(args: SelectSubset<T, backendSkillsUpsertArgs<ExtArgs>>): Prisma__backendSkillsClient<$Result.GetResult<Prisma.$backendSkillsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BackendSkills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {backendSkillsCountArgs} args - Arguments to filter BackendSkills to count.
     * @example
     * // Count the number of BackendSkills
     * const count = await prisma.backendSkills.count({
     *   where: {
     *     // ... the filter for the BackendSkills we want to count
     *   }
     * })
    **/
    count<T extends backendSkillsCountArgs>(
      args?: Subset<T, backendSkillsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BackendSkillsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BackendSkills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BackendSkillsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BackendSkillsAggregateArgs>(args: Subset<T, BackendSkillsAggregateArgs>): Prisma.PrismaPromise<GetBackendSkillsAggregateType<T>>

    /**
     * Group by BackendSkills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {backendSkillsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends backendSkillsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: backendSkillsGroupByArgs['orderBy'] }
        : { orderBy?: backendSkillsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, backendSkillsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBackendSkillsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the backendSkills model
   */
  readonly fields: backendSkillsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for backendSkills.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__backendSkillsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the backendSkills model
   */
  interface backendSkillsFieldRefs {
    readonly id: FieldRef<"backendSkills", 'String'>
    readonly skills: FieldRef<"backendSkills", 'String'>
    readonly progress: FieldRef<"backendSkills", 'Int'>
    readonly description: FieldRef<"backendSkills", 'String'>
    readonly createdAt: FieldRef<"backendSkills", 'DateTime'>
    readonly updatedAt: FieldRef<"backendSkills", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * backendSkills findUnique
   */
  export type backendSkillsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the backendSkills
     */
    select?: backendSkillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the backendSkills
     */
    omit?: backendSkillsOmit<ExtArgs> | null
    /**
     * Filter, which backendSkills to fetch.
     */
    where: backendSkillsWhereUniqueInput
  }

  /**
   * backendSkills findUniqueOrThrow
   */
  export type backendSkillsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the backendSkills
     */
    select?: backendSkillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the backendSkills
     */
    omit?: backendSkillsOmit<ExtArgs> | null
    /**
     * Filter, which backendSkills to fetch.
     */
    where: backendSkillsWhereUniqueInput
  }

  /**
   * backendSkills findFirst
   */
  export type backendSkillsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the backendSkills
     */
    select?: backendSkillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the backendSkills
     */
    omit?: backendSkillsOmit<ExtArgs> | null
    /**
     * Filter, which backendSkills to fetch.
     */
    where?: backendSkillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of backendSkills to fetch.
     */
    orderBy?: backendSkillsOrderByWithRelationInput | backendSkillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for backendSkills.
     */
    cursor?: backendSkillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` backendSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` backendSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of backendSkills.
     */
    distinct?: BackendSkillsScalarFieldEnum | BackendSkillsScalarFieldEnum[]
  }

  /**
   * backendSkills findFirstOrThrow
   */
  export type backendSkillsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the backendSkills
     */
    select?: backendSkillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the backendSkills
     */
    omit?: backendSkillsOmit<ExtArgs> | null
    /**
     * Filter, which backendSkills to fetch.
     */
    where?: backendSkillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of backendSkills to fetch.
     */
    orderBy?: backendSkillsOrderByWithRelationInput | backendSkillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for backendSkills.
     */
    cursor?: backendSkillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` backendSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` backendSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of backendSkills.
     */
    distinct?: BackendSkillsScalarFieldEnum | BackendSkillsScalarFieldEnum[]
  }

  /**
   * backendSkills findMany
   */
  export type backendSkillsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the backendSkills
     */
    select?: backendSkillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the backendSkills
     */
    omit?: backendSkillsOmit<ExtArgs> | null
    /**
     * Filter, which backendSkills to fetch.
     */
    where?: backendSkillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of backendSkills to fetch.
     */
    orderBy?: backendSkillsOrderByWithRelationInput | backendSkillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing backendSkills.
     */
    cursor?: backendSkillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` backendSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` backendSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of backendSkills.
     */
    distinct?: BackendSkillsScalarFieldEnum | BackendSkillsScalarFieldEnum[]
  }

  /**
   * backendSkills create
   */
  export type backendSkillsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the backendSkills
     */
    select?: backendSkillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the backendSkills
     */
    omit?: backendSkillsOmit<ExtArgs> | null
    /**
     * The data needed to create a backendSkills.
     */
    data: XOR<backendSkillsCreateInput, backendSkillsUncheckedCreateInput>
  }

  /**
   * backendSkills createMany
   */
  export type backendSkillsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many backendSkills.
     */
    data: backendSkillsCreateManyInput | backendSkillsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * backendSkills createManyAndReturn
   */
  export type backendSkillsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the backendSkills
     */
    select?: backendSkillsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the backendSkills
     */
    omit?: backendSkillsOmit<ExtArgs> | null
    /**
     * The data used to create many backendSkills.
     */
    data: backendSkillsCreateManyInput | backendSkillsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * backendSkills update
   */
  export type backendSkillsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the backendSkills
     */
    select?: backendSkillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the backendSkills
     */
    omit?: backendSkillsOmit<ExtArgs> | null
    /**
     * The data needed to update a backendSkills.
     */
    data: XOR<backendSkillsUpdateInput, backendSkillsUncheckedUpdateInput>
    /**
     * Choose, which backendSkills to update.
     */
    where: backendSkillsWhereUniqueInput
  }

  /**
   * backendSkills updateMany
   */
  export type backendSkillsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update backendSkills.
     */
    data: XOR<backendSkillsUpdateManyMutationInput, backendSkillsUncheckedUpdateManyInput>
    /**
     * Filter which backendSkills to update
     */
    where?: backendSkillsWhereInput
    /**
     * Limit how many backendSkills to update.
     */
    limit?: number
  }

  /**
   * backendSkills updateManyAndReturn
   */
  export type backendSkillsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the backendSkills
     */
    select?: backendSkillsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the backendSkills
     */
    omit?: backendSkillsOmit<ExtArgs> | null
    /**
     * The data used to update backendSkills.
     */
    data: XOR<backendSkillsUpdateManyMutationInput, backendSkillsUncheckedUpdateManyInput>
    /**
     * Filter which backendSkills to update
     */
    where?: backendSkillsWhereInput
    /**
     * Limit how many backendSkills to update.
     */
    limit?: number
  }

  /**
   * backendSkills upsert
   */
  export type backendSkillsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the backendSkills
     */
    select?: backendSkillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the backendSkills
     */
    omit?: backendSkillsOmit<ExtArgs> | null
    /**
     * The filter to search for the backendSkills to update in case it exists.
     */
    where: backendSkillsWhereUniqueInput
    /**
     * In case the backendSkills found by the `where` argument doesn't exist, create a new backendSkills with this data.
     */
    create: XOR<backendSkillsCreateInput, backendSkillsUncheckedCreateInput>
    /**
     * In case the backendSkills was found with the provided `where` argument, update it with this data.
     */
    update: XOR<backendSkillsUpdateInput, backendSkillsUncheckedUpdateInput>
  }

  /**
   * backendSkills delete
   */
  export type backendSkillsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the backendSkills
     */
    select?: backendSkillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the backendSkills
     */
    omit?: backendSkillsOmit<ExtArgs> | null
    /**
     * Filter which backendSkills to delete.
     */
    where: backendSkillsWhereUniqueInput
  }

  /**
   * backendSkills deleteMany
   */
  export type backendSkillsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which backendSkills to delete
     */
    where?: backendSkillsWhereInput
    /**
     * Limit how many backendSkills to delete.
     */
    limit?: number
  }

  /**
   * backendSkills without action
   */
  export type backendSkillsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the backendSkills
     */
    select?: backendSkillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the backendSkills
     */
    omit?: backendSkillsOmit<ExtArgs> | null
  }


  /**
   * Model techStack
   */

  export type AggregateTechStack = {
    _count: TechStackCountAggregateOutputType | null
    _min: TechStackMinAggregateOutputType | null
    _max: TechStackMaxAggregateOutputType | null
  }

  export type TechStackMinAggregateOutputType = {
    id: string | null
    stack: string | null
    bgColor: string | null
    imgUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TechStackMaxAggregateOutputType = {
    id: string | null
    stack: string | null
    bgColor: string | null
    imgUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TechStackCountAggregateOutputType = {
    id: number
    stack: number
    bgColor: number
    imgUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TechStackMinAggregateInputType = {
    id?: true
    stack?: true
    bgColor?: true
    imgUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TechStackMaxAggregateInputType = {
    id?: true
    stack?: true
    bgColor?: true
    imgUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TechStackCountAggregateInputType = {
    id?: true
    stack?: true
    bgColor?: true
    imgUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TechStackAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which techStack to aggregate.
     */
    where?: techStackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of techStacks to fetch.
     */
    orderBy?: techStackOrderByWithRelationInput | techStackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: techStackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` techStacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` techStacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned techStacks
    **/
    _count?: true | TechStackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TechStackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TechStackMaxAggregateInputType
  }

  export type GetTechStackAggregateType<T extends TechStackAggregateArgs> = {
        [P in keyof T & keyof AggregateTechStack]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTechStack[P]>
      : GetScalarType<T[P], AggregateTechStack[P]>
  }




  export type techStackGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: techStackWhereInput
    orderBy?: techStackOrderByWithAggregationInput | techStackOrderByWithAggregationInput[]
    by: TechStackScalarFieldEnum[] | TechStackScalarFieldEnum
    having?: techStackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TechStackCountAggregateInputType | true
    _min?: TechStackMinAggregateInputType
    _max?: TechStackMaxAggregateInputType
  }

  export type TechStackGroupByOutputType = {
    id: string
    stack: string
    bgColor: string
    imgUrl: string
    createdAt: Date
    updatedAt: Date
    _count: TechStackCountAggregateOutputType | null
    _min: TechStackMinAggregateOutputType | null
    _max: TechStackMaxAggregateOutputType | null
  }

  type GetTechStackGroupByPayload<T extends techStackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TechStackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TechStackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TechStackGroupByOutputType[P]>
            : GetScalarType<T[P], TechStackGroupByOutputType[P]>
        }
      >
    >


  export type techStackSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stack?: boolean
    bgColor?: boolean
    imgUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    techstacktype?: boolean | techStack$techstacktypeArgs<ExtArgs>
    _count?: boolean | TechStackCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["techStack"]>

  export type techStackSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stack?: boolean
    bgColor?: boolean
    imgUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["techStack"]>

  export type techStackSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stack?: boolean
    bgColor?: boolean
    imgUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["techStack"]>

  export type techStackSelectScalar = {
    id?: boolean
    stack?: boolean
    bgColor?: boolean
    imgUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type techStackOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "stack" | "bgColor" | "imgUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["techStack"]>
  export type techStackInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    techstacktype?: boolean | techStack$techstacktypeArgs<ExtArgs>
    _count?: boolean | TechStackCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type techStackIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type techStackIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $techStackPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "techStack"
    objects: {
      techstacktype: Prisma.$techStackTypePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      stack: string
      bgColor: string
      imgUrl: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["techStack"]>
    composites: {}
  }

  type techStackGetPayload<S extends boolean | null | undefined | techStackDefaultArgs> = $Result.GetResult<Prisma.$techStackPayload, S>

  type techStackCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<techStackFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TechStackCountAggregateInputType | true
    }

  export interface techStackDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['techStack'], meta: { name: 'techStack' } }
    /**
     * Find zero or one TechStack that matches the filter.
     * @param {techStackFindUniqueArgs} args - Arguments to find a TechStack
     * @example
     * // Get one TechStack
     * const techStack = await prisma.techStack.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends techStackFindUniqueArgs>(args: SelectSubset<T, techStackFindUniqueArgs<ExtArgs>>): Prisma__techStackClient<$Result.GetResult<Prisma.$techStackPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TechStack that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {techStackFindUniqueOrThrowArgs} args - Arguments to find a TechStack
     * @example
     * // Get one TechStack
     * const techStack = await prisma.techStack.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends techStackFindUniqueOrThrowArgs>(args: SelectSubset<T, techStackFindUniqueOrThrowArgs<ExtArgs>>): Prisma__techStackClient<$Result.GetResult<Prisma.$techStackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TechStack that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {techStackFindFirstArgs} args - Arguments to find a TechStack
     * @example
     * // Get one TechStack
     * const techStack = await prisma.techStack.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends techStackFindFirstArgs>(args?: SelectSubset<T, techStackFindFirstArgs<ExtArgs>>): Prisma__techStackClient<$Result.GetResult<Prisma.$techStackPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TechStack that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {techStackFindFirstOrThrowArgs} args - Arguments to find a TechStack
     * @example
     * // Get one TechStack
     * const techStack = await prisma.techStack.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends techStackFindFirstOrThrowArgs>(args?: SelectSubset<T, techStackFindFirstOrThrowArgs<ExtArgs>>): Prisma__techStackClient<$Result.GetResult<Prisma.$techStackPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TechStacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {techStackFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TechStacks
     * const techStacks = await prisma.techStack.findMany()
     * 
     * // Get first 10 TechStacks
     * const techStacks = await prisma.techStack.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const techStackWithIdOnly = await prisma.techStack.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends techStackFindManyArgs>(args?: SelectSubset<T, techStackFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$techStackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TechStack.
     * @param {techStackCreateArgs} args - Arguments to create a TechStack.
     * @example
     * // Create one TechStack
     * const TechStack = await prisma.techStack.create({
     *   data: {
     *     // ... data to create a TechStack
     *   }
     * })
     * 
     */
    create<T extends techStackCreateArgs>(args: SelectSubset<T, techStackCreateArgs<ExtArgs>>): Prisma__techStackClient<$Result.GetResult<Prisma.$techStackPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TechStacks.
     * @param {techStackCreateManyArgs} args - Arguments to create many TechStacks.
     * @example
     * // Create many TechStacks
     * const techStack = await prisma.techStack.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends techStackCreateManyArgs>(args?: SelectSubset<T, techStackCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TechStacks and returns the data saved in the database.
     * @param {techStackCreateManyAndReturnArgs} args - Arguments to create many TechStacks.
     * @example
     * // Create many TechStacks
     * const techStack = await prisma.techStack.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TechStacks and only return the `id`
     * const techStackWithIdOnly = await prisma.techStack.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends techStackCreateManyAndReturnArgs>(args?: SelectSubset<T, techStackCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$techStackPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TechStack.
     * @param {techStackDeleteArgs} args - Arguments to delete one TechStack.
     * @example
     * // Delete one TechStack
     * const TechStack = await prisma.techStack.delete({
     *   where: {
     *     // ... filter to delete one TechStack
     *   }
     * })
     * 
     */
    delete<T extends techStackDeleteArgs>(args: SelectSubset<T, techStackDeleteArgs<ExtArgs>>): Prisma__techStackClient<$Result.GetResult<Prisma.$techStackPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TechStack.
     * @param {techStackUpdateArgs} args - Arguments to update one TechStack.
     * @example
     * // Update one TechStack
     * const techStack = await prisma.techStack.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends techStackUpdateArgs>(args: SelectSubset<T, techStackUpdateArgs<ExtArgs>>): Prisma__techStackClient<$Result.GetResult<Prisma.$techStackPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TechStacks.
     * @param {techStackDeleteManyArgs} args - Arguments to filter TechStacks to delete.
     * @example
     * // Delete a few TechStacks
     * const { count } = await prisma.techStack.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends techStackDeleteManyArgs>(args?: SelectSubset<T, techStackDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TechStacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {techStackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TechStacks
     * const techStack = await prisma.techStack.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends techStackUpdateManyArgs>(args: SelectSubset<T, techStackUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TechStacks and returns the data updated in the database.
     * @param {techStackUpdateManyAndReturnArgs} args - Arguments to update many TechStacks.
     * @example
     * // Update many TechStacks
     * const techStack = await prisma.techStack.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TechStacks and only return the `id`
     * const techStackWithIdOnly = await prisma.techStack.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends techStackUpdateManyAndReturnArgs>(args: SelectSubset<T, techStackUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$techStackPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TechStack.
     * @param {techStackUpsertArgs} args - Arguments to update or create a TechStack.
     * @example
     * // Update or create a TechStack
     * const techStack = await prisma.techStack.upsert({
     *   create: {
     *     // ... data to create a TechStack
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TechStack we want to update
     *   }
     * })
     */
    upsert<T extends techStackUpsertArgs>(args: SelectSubset<T, techStackUpsertArgs<ExtArgs>>): Prisma__techStackClient<$Result.GetResult<Prisma.$techStackPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TechStacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {techStackCountArgs} args - Arguments to filter TechStacks to count.
     * @example
     * // Count the number of TechStacks
     * const count = await prisma.techStack.count({
     *   where: {
     *     // ... the filter for the TechStacks we want to count
     *   }
     * })
    **/
    count<T extends techStackCountArgs>(
      args?: Subset<T, techStackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TechStackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TechStack.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechStackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TechStackAggregateArgs>(args: Subset<T, TechStackAggregateArgs>): Prisma.PrismaPromise<GetTechStackAggregateType<T>>

    /**
     * Group by TechStack.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {techStackGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends techStackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: techStackGroupByArgs['orderBy'] }
        : { orderBy?: techStackGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, techStackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTechStackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the techStack model
   */
  readonly fields: techStackFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for techStack.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__techStackClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    techstacktype<T extends techStack$techstacktypeArgs<ExtArgs> = {}>(args?: Subset<T, techStack$techstacktypeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$techStackTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the techStack model
   */
  interface techStackFieldRefs {
    readonly id: FieldRef<"techStack", 'String'>
    readonly stack: FieldRef<"techStack", 'String'>
    readonly bgColor: FieldRef<"techStack", 'String'>
    readonly imgUrl: FieldRef<"techStack", 'String'>
    readonly createdAt: FieldRef<"techStack", 'DateTime'>
    readonly updatedAt: FieldRef<"techStack", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * techStack findUnique
   */
  export type techStackFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the techStack
     */
    select?: techStackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the techStack
     */
    omit?: techStackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: techStackInclude<ExtArgs> | null
    /**
     * Filter, which techStack to fetch.
     */
    where: techStackWhereUniqueInput
  }

  /**
   * techStack findUniqueOrThrow
   */
  export type techStackFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the techStack
     */
    select?: techStackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the techStack
     */
    omit?: techStackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: techStackInclude<ExtArgs> | null
    /**
     * Filter, which techStack to fetch.
     */
    where: techStackWhereUniqueInput
  }

  /**
   * techStack findFirst
   */
  export type techStackFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the techStack
     */
    select?: techStackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the techStack
     */
    omit?: techStackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: techStackInclude<ExtArgs> | null
    /**
     * Filter, which techStack to fetch.
     */
    where?: techStackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of techStacks to fetch.
     */
    orderBy?: techStackOrderByWithRelationInput | techStackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for techStacks.
     */
    cursor?: techStackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` techStacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` techStacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of techStacks.
     */
    distinct?: TechStackScalarFieldEnum | TechStackScalarFieldEnum[]
  }

  /**
   * techStack findFirstOrThrow
   */
  export type techStackFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the techStack
     */
    select?: techStackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the techStack
     */
    omit?: techStackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: techStackInclude<ExtArgs> | null
    /**
     * Filter, which techStack to fetch.
     */
    where?: techStackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of techStacks to fetch.
     */
    orderBy?: techStackOrderByWithRelationInput | techStackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for techStacks.
     */
    cursor?: techStackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` techStacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` techStacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of techStacks.
     */
    distinct?: TechStackScalarFieldEnum | TechStackScalarFieldEnum[]
  }

  /**
   * techStack findMany
   */
  export type techStackFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the techStack
     */
    select?: techStackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the techStack
     */
    omit?: techStackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: techStackInclude<ExtArgs> | null
    /**
     * Filter, which techStacks to fetch.
     */
    where?: techStackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of techStacks to fetch.
     */
    orderBy?: techStackOrderByWithRelationInput | techStackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing techStacks.
     */
    cursor?: techStackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` techStacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` techStacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of techStacks.
     */
    distinct?: TechStackScalarFieldEnum | TechStackScalarFieldEnum[]
  }

  /**
   * techStack create
   */
  export type techStackCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the techStack
     */
    select?: techStackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the techStack
     */
    omit?: techStackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: techStackInclude<ExtArgs> | null
    /**
     * The data needed to create a techStack.
     */
    data: XOR<techStackCreateInput, techStackUncheckedCreateInput>
  }

  /**
   * techStack createMany
   */
  export type techStackCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many techStacks.
     */
    data: techStackCreateManyInput | techStackCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * techStack createManyAndReturn
   */
  export type techStackCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the techStack
     */
    select?: techStackSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the techStack
     */
    omit?: techStackOmit<ExtArgs> | null
    /**
     * The data used to create many techStacks.
     */
    data: techStackCreateManyInput | techStackCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * techStack update
   */
  export type techStackUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the techStack
     */
    select?: techStackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the techStack
     */
    omit?: techStackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: techStackInclude<ExtArgs> | null
    /**
     * The data needed to update a techStack.
     */
    data: XOR<techStackUpdateInput, techStackUncheckedUpdateInput>
    /**
     * Choose, which techStack to update.
     */
    where: techStackWhereUniqueInput
  }

  /**
   * techStack updateMany
   */
  export type techStackUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update techStacks.
     */
    data: XOR<techStackUpdateManyMutationInput, techStackUncheckedUpdateManyInput>
    /**
     * Filter which techStacks to update
     */
    where?: techStackWhereInput
    /**
     * Limit how many techStacks to update.
     */
    limit?: number
  }

  /**
   * techStack updateManyAndReturn
   */
  export type techStackUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the techStack
     */
    select?: techStackSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the techStack
     */
    omit?: techStackOmit<ExtArgs> | null
    /**
     * The data used to update techStacks.
     */
    data: XOR<techStackUpdateManyMutationInput, techStackUncheckedUpdateManyInput>
    /**
     * Filter which techStacks to update
     */
    where?: techStackWhereInput
    /**
     * Limit how many techStacks to update.
     */
    limit?: number
  }

  /**
   * techStack upsert
   */
  export type techStackUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the techStack
     */
    select?: techStackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the techStack
     */
    omit?: techStackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: techStackInclude<ExtArgs> | null
    /**
     * The filter to search for the techStack to update in case it exists.
     */
    where: techStackWhereUniqueInput
    /**
     * In case the techStack found by the `where` argument doesn't exist, create a new techStack with this data.
     */
    create: XOR<techStackCreateInput, techStackUncheckedCreateInput>
    /**
     * In case the techStack was found with the provided `where` argument, update it with this data.
     */
    update: XOR<techStackUpdateInput, techStackUncheckedUpdateInput>
  }

  /**
   * techStack delete
   */
  export type techStackDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the techStack
     */
    select?: techStackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the techStack
     */
    omit?: techStackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: techStackInclude<ExtArgs> | null
    /**
     * Filter which techStack to delete.
     */
    where: techStackWhereUniqueInput
  }

  /**
   * techStack deleteMany
   */
  export type techStackDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which techStacks to delete
     */
    where?: techStackWhereInput
    /**
     * Limit how many techStacks to delete.
     */
    limit?: number
  }

  /**
   * techStack.techstacktype
   */
  export type techStack$techstacktypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the techStackType
     */
    select?: techStackTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the techStackType
     */
    omit?: techStackTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: techStackTypeInclude<ExtArgs> | null
    where?: techStackTypeWhereInput
    orderBy?: techStackTypeOrderByWithRelationInput | techStackTypeOrderByWithRelationInput[]
    cursor?: techStackTypeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TechStackTypeScalarFieldEnum | TechStackTypeScalarFieldEnum[]
  }

  /**
   * techStack without action
   */
  export type techStackDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the techStack
     */
    select?: techStackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the techStack
     */
    omit?: techStackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: techStackInclude<ExtArgs> | null
  }


  /**
   * Model techStackType
   */

  export type AggregateTechStackType = {
    _count: TechStackTypeCountAggregateOutputType | null
    _min: TechStackTypeMinAggregateOutputType | null
    _max: TechStackTypeMaxAggregateOutputType | null
  }

  export type TechStackTypeMinAggregateOutputType = {
    id: string | null
    type: $Enums.devTypes | null
    createdAt: Date | null
    updatedAt: Date | null
    techStackId: string | null
  }

  export type TechStackTypeMaxAggregateOutputType = {
    id: string | null
    type: $Enums.devTypes | null
    createdAt: Date | null
    updatedAt: Date | null
    techStackId: string | null
  }

  export type TechStackTypeCountAggregateOutputType = {
    id: number
    type: number
    createdAt: number
    updatedAt: number
    techStackId: number
    _all: number
  }


  export type TechStackTypeMinAggregateInputType = {
    id?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    techStackId?: true
  }

  export type TechStackTypeMaxAggregateInputType = {
    id?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    techStackId?: true
  }

  export type TechStackTypeCountAggregateInputType = {
    id?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    techStackId?: true
    _all?: true
  }

  export type TechStackTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which techStackType to aggregate.
     */
    where?: techStackTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of techStackTypes to fetch.
     */
    orderBy?: techStackTypeOrderByWithRelationInput | techStackTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: techStackTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` techStackTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` techStackTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned techStackTypes
    **/
    _count?: true | TechStackTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TechStackTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TechStackTypeMaxAggregateInputType
  }

  export type GetTechStackTypeAggregateType<T extends TechStackTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateTechStackType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTechStackType[P]>
      : GetScalarType<T[P], AggregateTechStackType[P]>
  }




  export type techStackTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: techStackTypeWhereInput
    orderBy?: techStackTypeOrderByWithAggregationInput | techStackTypeOrderByWithAggregationInput[]
    by: TechStackTypeScalarFieldEnum[] | TechStackTypeScalarFieldEnum
    having?: techStackTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TechStackTypeCountAggregateInputType | true
    _min?: TechStackTypeMinAggregateInputType
    _max?: TechStackTypeMaxAggregateInputType
  }

  export type TechStackTypeGroupByOutputType = {
    id: string
    type: $Enums.devTypes | null
    createdAt: Date
    updatedAt: Date
    techStackId: string | null
    _count: TechStackTypeCountAggregateOutputType | null
    _min: TechStackTypeMinAggregateOutputType | null
    _max: TechStackTypeMaxAggregateOutputType | null
  }

  type GetTechStackTypeGroupByPayload<T extends techStackTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TechStackTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TechStackTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TechStackTypeGroupByOutputType[P]>
            : GetScalarType<T[P], TechStackTypeGroupByOutputType[P]>
        }
      >
    >


  export type techStackTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    techStackId?: boolean
    techStack?: boolean | techStackType$techStackArgs<ExtArgs>
  }, ExtArgs["result"]["techStackType"]>

  export type techStackTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    techStackId?: boolean
    techStack?: boolean | techStackType$techStackArgs<ExtArgs>
  }, ExtArgs["result"]["techStackType"]>

  export type techStackTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    techStackId?: boolean
    techStack?: boolean | techStackType$techStackArgs<ExtArgs>
  }, ExtArgs["result"]["techStackType"]>

  export type techStackTypeSelectScalar = {
    id?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    techStackId?: boolean
  }

  export type techStackTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "createdAt" | "updatedAt" | "techStackId", ExtArgs["result"]["techStackType"]>
  export type techStackTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    techStack?: boolean | techStackType$techStackArgs<ExtArgs>
  }
  export type techStackTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    techStack?: boolean | techStackType$techStackArgs<ExtArgs>
  }
  export type techStackTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    techStack?: boolean | techStackType$techStackArgs<ExtArgs>
  }

  export type $techStackTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "techStackType"
    objects: {
      techStack: Prisma.$techStackPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.devTypes | null
      createdAt: Date
      updatedAt: Date
      techStackId: string | null
    }, ExtArgs["result"]["techStackType"]>
    composites: {}
  }

  type techStackTypeGetPayload<S extends boolean | null | undefined | techStackTypeDefaultArgs> = $Result.GetResult<Prisma.$techStackTypePayload, S>

  type techStackTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<techStackTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TechStackTypeCountAggregateInputType | true
    }

  export interface techStackTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['techStackType'], meta: { name: 'techStackType' } }
    /**
     * Find zero or one TechStackType that matches the filter.
     * @param {techStackTypeFindUniqueArgs} args - Arguments to find a TechStackType
     * @example
     * // Get one TechStackType
     * const techStackType = await prisma.techStackType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends techStackTypeFindUniqueArgs>(args: SelectSubset<T, techStackTypeFindUniqueArgs<ExtArgs>>): Prisma__techStackTypeClient<$Result.GetResult<Prisma.$techStackTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TechStackType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {techStackTypeFindUniqueOrThrowArgs} args - Arguments to find a TechStackType
     * @example
     * // Get one TechStackType
     * const techStackType = await prisma.techStackType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends techStackTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, techStackTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__techStackTypeClient<$Result.GetResult<Prisma.$techStackTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TechStackType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {techStackTypeFindFirstArgs} args - Arguments to find a TechStackType
     * @example
     * // Get one TechStackType
     * const techStackType = await prisma.techStackType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends techStackTypeFindFirstArgs>(args?: SelectSubset<T, techStackTypeFindFirstArgs<ExtArgs>>): Prisma__techStackTypeClient<$Result.GetResult<Prisma.$techStackTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TechStackType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {techStackTypeFindFirstOrThrowArgs} args - Arguments to find a TechStackType
     * @example
     * // Get one TechStackType
     * const techStackType = await prisma.techStackType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends techStackTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, techStackTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__techStackTypeClient<$Result.GetResult<Prisma.$techStackTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TechStackTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {techStackTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TechStackTypes
     * const techStackTypes = await prisma.techStackType.findMany()
     * 
     * // Get first 10 TechStackTypes
     * const techStackTypes = await prisma.techStackType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const techStackTypeWithIdOnly = await prisma.techStackType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends techStackTypeFindManyArgs>(args?: SelectSubset<T, techStackTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$techStackTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TechStackType.
     * @param {techStackTypeCreateArgs} args - Arguments to create a TechStackType.
     * @example
     * // Create one TechStackType
     * const TechStackType = await prisma.techStackType.create({
     *   data: {
     *     // ... data to create a TechStackType
     *   }
     * })
     * 
     */
    create<T extends techStackTypeCreateArgs>(args: SelectSubset<T, techStackTypeCreateArgs<ExtArgs>>): Prisma__techStackTypeClient<$Result.GetResult<Prisma.$techStackTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TechStackTypes.
     * @param {techStackTypeCreateManyArgs} args - Arguments to create many TechStackTypes.
     * @example
     * // Create many TechStackTypes
     * const techStackType = await prisma.techStackType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends techStackTypeCreateManyArgs>(args?: SelectSubset<T, techStackTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TechStackTypes and returns the data saved in the database.
     * @param {techStackTypeCreateManyAndReturnArgs} args - Arguments to create many TechStackTypes.
     * @example
     * // Create many TechStackTypes
     * const techStackType = await prisma.techStackType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TechStackTypes and only return the `id`
     * const techStackTypeWithIdOnly = await prisma.techStackType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends techStackTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, techStackTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$techStackTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TechStackType.
     * @param {techStackTypeDeleteArgs} args - Arguments to delete one TechStackType.
     * @example
     * // Delete one TechStackType
     * const TechStackType = await prisma.techStackType.delete({
     *   where: {
     *     // ... filter to delete one TechStackType
     *   }
     * })
     * 
     */
    delete<T extends techStackTypeDeleteArgs>(args: SelectSubset<T, techStackTypeDeleteArgs<ExtArgs>>): Prisma__techStackTypeClient<$Result.GetResult<Prisma.$techStackTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TechStackType.
     * @param {techStackTypeUpdateArgs} args - Arguments to update one TechStackType.
     * @example
     * // Update one TechStackType
     * const techStackType = await prisma.techStackType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends techStackTypeUpdateArgs>(args: SelectSubset<T, techStackTypeUpdateArgs<ExtArgs>>): Prisma__techStackTypeClient<$Result.GetResult<Prisma.$techStackTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TechStackTypes.
     * @param {techStackTypeDeleteManyArgs} args - Arguments to filter TechStackTypes to delete.
     * @example
     * // Delete a few TechStackTypes
     * const { count } = await prisma.techStackType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends techStackTypeDeleteManyArgs>(args?: SelectSubset<T, techStackTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TechStackTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {techStackTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TechStackTypes
     * const techStackType = await prisma.techStackType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends techStackTypeUpdateManyArgs>(args: SelectSubset<T, techStackTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TechStackTypes and returns the data updated in the database.
     * @param {techStackTypeUpdateManyAndReturnArgs} args - Arguments to update many TechStackTypes.
     * @example
     * // Update many TechStackTypes
     * const techStackType = await prisma.techStackType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TechStackTypes and only return the `id`
     * const techStackTypeWithIdOnly = await prisma.techStackType.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends techStackTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, techStackTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$techStackTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TechStackType.
     * @param {techStackTypeUpsertArgs} args - Arguments to update or create a TechStackType.
     * @example
     * // Update or create a TechStackType
     * const techStackType = await prisma.techStackType.upsert({
     *   create: {
     *     // ... data to create a TechStackType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TechStackType we want to update
     *   }
     * })
     */
    upsert<T extends techStackTypeUpsertArgs>(args: SelectSubset<T, techStackTypeUpsertArgs<ExtArgs>>): Prisma__techStackTypeClient<$Result.GetResult<Prisma.$techStackTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TechStackTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {techStackTypeCountArgs} args - Arguments to filter TechStackTypes to count.
     * @example
     * // Count the number of TechStackTypes
     * const count = await prisma.techStackType.count({
     *   where: {
     *     // ... the filter for the TechStackTypes we want to count
     *   }
     * })
    **/
    count<T extends techStackTypeCountArgs>(
      args?: Subset<T, techStackTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TechStackTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TechStackType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechStackTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TechStackTypeAggregateArgs>(args: Subset<T, TechStackTypeAggregateArgs>): Prisma.PrismaPromise<GetTechStackTypeAggregateType<T>>

    /**
     * Group by TechStackType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {techStackTypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends techStackTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: techStackTypeGroupByArgs['orderBy'] }
        : { orderBy?: techStackTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, techStackTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTechStackTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the techStackType model
   */
  readonly fields: techStackTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for techStackType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__techStackTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    techStack<T extends techStackType$techStackArgs<ExtArgs> = {}>(args?: Subset<T, techStackType$techStackArgs<ExtArgs>>): Prisma__techStackClient<$Result.GetResult<Prisma.$techStackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the techStackType model
   */
  interface techStackTypeFieldRefs {
    readonly id: FieldRef<"techStackType", 'String'>
    readonly type: FieldRef<"techStackType", 'devTypes'>
    readonly createdAt: FieldRef<"techStackType", 'DateTime'>
    readonly updatedAt: FieldRef<"techStackType", 'DateTime'>
    readonly techStackId: FieldRef<"techStackType", 'String'>
  }
    

  // Custom InputTypes
  /**
   * techStackType findUnique
   */
  export type techStackTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the techStackType
     */
    select?: techStackTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the techStackType
     */
    omit?: techStackTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: techStackTypeInclude<ExtArgs> | null
    /**
     * Filter, which techStackType to fetch.
     */
    where: techStackTypeWhereUniqueInput
  }

  /**
   * techStackType findUniqueOrThrow
   */
  export type techStackTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the techStackType
     */
    select?: techStackTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the techStackType
     */
    omit?: techStackTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: techStackTypeInclude<ExtArgs> | null
    /**
     * Filter, which techStackType to fetch.
     */
    where: techStackTypeWhereUniqueInput
  }

  /**
   * techStackType findFirst
   */
  export type techStackTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the techStackType
     */
    select?: techStackTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the techStackType
     */
    omit?: techStackTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: techStackTypeInclude<ExtArgs> | null
    /**
     * Filter, which techStackType to fetch.
     */
    where?: techStackTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of techStackTypes to fetch.
     */
    orderBy?: techStackTypeOrderByWithRelationInput | techStackTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for techStackTypes.
     */
    cursor?: techStackTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` techStackTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` techStackTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of techStackTypes.
     */
    distinct?: TechStackTypeScalarFieldEnum | TechStackTypeScalarFieldEnum[]
  }

  /**
   * techStackType findFirstOrThrow
   */
  export type techStackTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the techStackType
     */
    select?: techStackTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the techStackType
     */
    omit?: techStackTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: techStackTypeInclude<ExtArgs> | null
    /**
     * Filter, which techStackType to fetch.
     */
    where?: techStackTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of techStackTypes to fetch.
     */
    orderBy?: techStackTypeOrderByWithRelationInput | techStackTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for techStackTypes.
     */
    cursor?: techStackTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` techStackTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` techStackTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of techStackTypes.
     */
    distinct?: TechStackTypeScalarFieldEnum | TechStackTypeScalarFieldEnum[]
  }

  /**
   * techStackType findMany
   */
  export type techStackTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the techStackType
     */
    select?: techStackTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the techStackType
     */
    omit?: techStackTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: techStackTypeInclude<ExtArgs> | null
    /**
     * Filter, which techStackTypes to fetch.
     */
    where?: techStackTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of techStackTypes to fetch.
     */
    orderBy?: techStackTypeOrderByWithRelationInput | techStackTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing techStackTypes.
     */
    cursor?: techStackTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` techStackTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` techStackTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of techStackTypes.
     */
    distinct?: TechStackTypeScalarFieldEnum | TechStackTypeScalarFieldEnum[]
  }

  /**
   * techStackType create
   */
  export type techStackTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the techStackType
     */
    select?: techStackTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the techStackType
     */
    omit?: techStackTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: techStackTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a techStackType.
     */
    data: XOR<techStackTypeCreateInput, techStackTypeUncheckedCreateInput>
  }

  /**
   * techStackType createMany
   */
  export type techStackTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many techStackTypes.
     */
    data: techStackTypeCreateManyInput | techStackTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * techStackType createManyAndReturn
   */
  export type techStackTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the techStackType
     */
    select?: techStackTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the techStackType
     */
    omit?: techStackTypeOmit<ExtArgs> | null
    /**
     * The data used to create many techStackTypes.
     */
    data: techStackTypeCreateManyInput | techStackTypeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: techStackTypeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * techStackType update
   */
  export type techStackTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the techStackType
     */
    select?: techStackTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the techStackType
     */
    omit?: techStackTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: techStackTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a techStackType.
     */
    data: XOR<techStackTypeUpdateInput, techStackTypeUncheckedUpdateInput>
    /**
     * Choose, which techStackType to update.
     */
    where: techStackTypeWhereUniqueInput
  }

  /**
   * techStackType updateMany
   */
  export type techStackTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update techStackTypes.
     */
    data: XOR<techStackTypeUpdateManyMutationInput, techStackTypeUncheckedUpdateManyInput>
    /**
     * Filter which techStackTypes to update
     */
    where?: techStackTypeWhereInput
    /**
     * Limit how many techStackTypes to update.
     */
    limit?: number
  }

  /**
   * techStackType updateManyAndReturn
   */
  export type techStackTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the techStackType
     */
    select?: techStackTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the techStackType
     */
    omit?: techStackTypeOmit<ExtArgs> | null
    /**
     * The data used to update techStackTypes.
     */
    data: XOR<techStackTypeUpdateManyMutationInput, techStackTypeUncheckedUpdateManyInput>
    /**
     * Filter which techStackTypes to update
     */
    where?: techStackTypeWhereInput
    /**
     * Limit how many techStackTypes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: techStackTypeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * techStackType upsert
   */
  export type techStackTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the techStackType
     */
    select?: techStackTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the techStackType
     */
    omit?: techStackTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: techStackTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the techStackType to update in case it exists.
     */
    where: techStackTypeWhereUniqueInput
    /**
     * In case the techStackType found by the `where` argument doesn't exist, create a new techStackType with this data.
     */
    create: XOR<techStackTypeCreateInput, techStackTypeUncheckedCreateInput>
    /**
     * In case the techStackType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<techStackTypeUpdateInput, techStackTypeUncheckedUpdateInput>
  }

  /**
   * techStackType delete
   */
  export type techStackTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the techStackType
     */
    select?: techStackTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the techStackType
     */
    omit?: techStackTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: techStackTypeInclude<ExtArgs> | null
    /**
     * Filter which techStackType to delete.
     */
    where: techStackTypeWhereUniqueInput
  }

  /**
   * techStackType deleteMany
   */
  export type techStackTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which techStackTypes to delete
     */
    where?: techStackTypeWhereInput
    /**
     * Limit how many techStackTypes to delete.
     */
    limit?: number
  }

  /**
   * techStackType.techStack
   */
  export type techStackType$techStackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the techStack
     */
    select?: techStackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the techStack
     */
    omit?: techStackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: techStackInclude<ExtArgs> | null
    where?: techStackWhereInput
  }

  /**
   * techStackType without action
   */
  export type techStackTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the techStackType
     */
    select?: techStackTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the techStackType
     */
    omit?: techStackTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: techStackTypeInclude<ExtArgs> | null
  }


  /**
   * Model personal
   */

  export type AggregatePersonal = {
    _count: PersonalCountAggregateOutputType | null
    _min: PersonalMinAggregateOutputType | null
    _max: PersonalMaxAggregateOutputType | null
  }

  export type PersonalMinAggregateOutputType = {
    id: string | null
    key: string | null
    value: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PersonalMaxAggregateOutputType = {
    id: string | null
    key: string | null
    value: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PersonalCountAggregateOutputType = {
    id: number
    key: number
    value: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PersonalMinAggregateInputType = {
    id?: true
    key?: true
    value?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PersonalMaxAggregateInputType = {
    id?: true
    key?: true
    value?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PersonalCountAggregateInputType = {
    id?: true
    key?: true
    value?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PersonalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which personal to aggregate.
     */
    where?: personalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of personals to fetch.
     */
    orderBy?: personalOrderByWithRelationInput | personalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: personalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` personals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` personals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned personals
    **/
    _count?: true | PersonalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PersonalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PersonalMaxAggregateInputType
  }

  export type GetPersonalAggregateType<T extends PersonalAggregateArgs> = {
        [P in keyof T & keyof AggregatePersonal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePersonal[P]>
      : GetScalarType<T[P], AggregatePersonal[P]>
  }




  export type personalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: personalWhereInput
    orderBy?: personalOrderByWithAggregationInput | personalOrderByWithAggregationInput[]
    by: PersonalScalarFieldEnum[] | PersonalScalarFieldEnum
    having?: personalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PersonalCountAggregateInputType | true
    _min?: PersonalMinAggregateInputType
    _max?: PersonalMaxAggregateInputType
  }

  export type PersonalGroupByOutputType = {
    id: string
    key: string
    value: string
    createdAt: Date
    updatedAt: Date
    _count: PersonalCountAggregateOutputType | null
    _min: PersonalMinAggregateOutputType | null
    _max: PersonalMaxAggregateOutputType | null
  }

  type GetPersonalGroupByPayload<T extends personalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PersonalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PersonalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PersonalGroupByOutputType[P]>
            : GetScalarType<T[P], PersonalGroupByOutputType[P]>
        }
      >
    >


  export type personalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["personal"]>

  export type personalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["personal"]>

  export type personalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["personal"]>

  export type personalSelectScalar = {
    id?: boolean
    key?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type personalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "key" | "value" | "createdAt" | "updatedAt", ExtArgs["result"]["personal"]>

  export type $personalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "personal"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      key: string
      value: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["personal"]>
    composites: {}
  }

  type personalGetPayload<S extends boolean | null | undefined | personalDefaultArgs> = $Result.GetResult<Prisma.$personalPayload, S>

  type personalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<personalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PersonalCountAggregateInputType | true
    }

  export interface personalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['personal'], meta: { name: 'personal' } }
    /**
     * Find zero or one Personal that matches the filter.
     * @param {personalFindUniqueArgs} args - Arguments to find a Personal
     * @example
     * // Get one Personal
     * const personal = await prisma.personal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends personalFindUniqueArgs>(args: SelectSubset<T, personalFindUniqueArgs<ExtArgs>>): Prisma__personalClient<$Result.GetResult<Prisma.$personalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Personal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {personalFindUniqueOrThrowArgs} args - Arguments to find a Personal
     * @example
     * // Get one Personal
     * const personal = await prisma.personal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends personalFindUniqueOrThrowArgs>(args: SelectSubset<T, personalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__personalClient<$Result.GetResult<Prisma.$personalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Personal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personalFindFirstArgs} args - Arguments to find a Personal
     * @example
     * // Get one Personal
     * const personal = await prisma.personal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends personalFindFirstArgs>(args?: SelectSubset<T, personalFindFirstArgs<ExtArgs>>): Prisma__personalClient<$Result.GetResult<Prisma.$personalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Personal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personalFindFirstOrThrowArgs} args - Arguments to find a Personal
     * @example
     * // Get one Personal
     * const personal = await prisma.personal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends personalFindFirstOrThrowArgs>(args?: SelectSubset<T, personalFindFirstOrThrowArgs<ExtArgs>>): Prisma__personalClient<$Result.GetResult<Prisma.$personalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Personals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Personals
     * const personals = await prisma.personal.findMany()
     * 
     * // Get first 10 Personals
     * const personals = await prisma.personal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const personalWithIdOnly = await prisma.personal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends personalFindManyArgs>(args?: SelectSubset<T, personalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$personalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Personal.
     * @param {personalCreateArgs} args - Arguments to create a Personal.
     * @example
     * // Create one Personal
     * const Personal = await prisma.personal.create({
     *   data: {
     *     // ... data to create a Personal
     *   }
     * })
     * 
     */
    create<T extends personalCreateArgs>(args: SelectSubset<T, personalCreateArgs<ExtArgs>>): Prisma__personalClient<$Result.GetResult<Prisma.$personalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Personals.
     * @param {personalCreateManyArgs} args - Arguments to create many Personals.
     * @example
     * // Create many Personals
     * const personal = await prisma.personal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends personalCreateManyArgs>(args?: SelectSubset<T, personalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Personals and returns the data saved in the database.
     * @param {personalCreateManyAndReturnArgs} args - Arguments to create many Personals.
     * @example
     * // Create many Personals
     * const personal = await prisma.personal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Personals and only return the `id`
     * const personalWithIdOnly = await prisma.personal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends personalCreateManyAndReturnArgs>(args?: SelectSubset<T, personalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$personalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Personal.
     * @param {personalDeleteArgs} args - Arguments to delete one Personal.
     * @example
     * // Delete one Personal
     * const Personal = await prisma.personal.delete({
     *   where: {
     *     // ... filter to delete one Personal
     *   }
     * })
     * 
     */
    delete<T extends personalDeleteArgs>(args: SelectSubset<T, personalDeleteArgs<ExtArgs>>): Prisma__personalClient<$Result.GetResult<Prisma.$personalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Personal.
     * @param {personalUpdateArgs} args - Arguments to update one Personal.
     * @example
     * // Update one Personal
     * const personal = await prisma.personal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends personalUpdateArgs>(args: SelectSubset<T, personalUpdateArgs<ExtArgs>>): Prisma__personalClient<$Result.GetResult<Prisma.$personalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Personals.
     * @param {personalDeleteManyArgs} args - Arguments to filter Personals to delete.
     * @example
     * // Delete a few Personals
     * const { count } = await prisma.personal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends personalDeleteManyArgs>(args?: SelectSubset<T, personalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Personals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Personals
     * const personal = await prisma.personal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends personalUpdateManyArgs>(args: SelectSubset<T, personalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Personals and returns the data updated in the database.
     * @param {personalUpdateManyAndReturnArgs} args - Arguments to update many Personals.
     * @example
     * // Update many Personals
     * const personal = await prisma.personal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Personals and only return the `id`
     * const personalWithIdOnly = await prisma.personal.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends personalUpdateManyAndReturnArgs>(args: SelectSubset<T, personalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$personalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Personal.
     * @param {personalUpsertArgs} args - Arguments to update or create a Personal.
     * @example
     * // Update or create a Personal
     * const personal = await prisma.personal.upsert({
     *   create: {
     *     // ... data to create a Personal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Personal we want to update
     *   }
     * })
     */
    upsert<T extends personalUpsertArgs>(args: SelectSubset<T, personalUpsertArgs<ExtArgs>>): Prisma__personalClient<$Result.GetResult<Prisma.$personalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Personals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personalCountArgs} args - Arguments to filter Personals to count.
     * @example
     * // Count the number of Personals
     * const count = await prisma.personal.count({
     *   where: {
     *     // ... the filter for the Personals we want to count
     *   }
     * })
    **/
    count<T extends personalCountArgs>(
      args?: Subset<T, personalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PersonalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Personal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PersonalAggregateArgs>(args: Subset<T, PersonalAggregateArgs>): Prisma.PrismaPromise<GetPersonalAggregateType<T>>

    /**
     * Group by Personal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends personalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: personalGroupByArgs['orderBy'] }
        : { orderBy?: personalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, personalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the personal model
   */
  readonly fields: personalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for personal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__personalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the personal model
   */
  interface personalFieldRefs {
    readonly id: FieldRef<"personal", 'String'>
    readonly key: FieldRef<"personal", 'String'>
    readonly value: FieldRef<"personal", 'String'>
    readonly createdAt: FieldRef<"personal", 'DateTime'>
    readonly updatedAt: FieldRef<"personal", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * personal findUnique
   */
  export type personalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personal
     */
    select?: personalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the personal
     */
    omit?: personalOmit<ExtArgs> | null
    /**
     * Filter, which personal to fetch.
     */
    where: personalWhereUniqueInput
  }

  /**
   * personal findUniqueOrThrow
   */
  export type personalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personal
     */
    select?: personalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the personal
     */
    omit?: personalOmit<ExtArgs> | null
    /**
     * Filter, which personal to fetch.
     */
    where: personalWhereUniqueInput
  }

  /**
   * personal findFirst
   */
  export type personalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personal
     */
    select?: personalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the personal
     */
    omit?: personalOmit<ExtArgs> | null
    /**
     * Filter, which personal to fetch.
     */
    where?: personalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of personals to fetch.
     */
    orderBy?: personalOrderByWithRelationInput | personalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for personals.
     */
    cursor?: personalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` personals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` personals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of personals.
     */
    distinct?: PersonalScalarFieldEnum | PersonalScalarFieldEnum[]
  }

  /**
   * personal findFirstOrThrow
   */
  export type personalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personal
     */
    select?: personalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the personal
     */
    omit?: personalOmit<ExtArgs> | null
    /**
     * Filter, which personal to fetch.
     */
    where?: personalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of personals to fetch.
     */
    orderBy?: personalOrderByWithRelationInput | personalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for personals.
     */
    cursor?: personalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` personals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` personals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of personals.
     */
    distinct?: PersonalScalarFieldEnum | PersonalScalarFieldEnum[]
  }

  /**
   * personal findMany
   */
  export type personalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personal
     */
    select?: personalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the personal
     */
    omit?: personalOmit<ExtArgs> | null
    /**
     * Filter, which personals to fetch.
     */
    where?: personalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of personals to fetch.
     */
    orderBy?: personalOrderByWithRelationInput | personalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing personals.
     */
    cursor?: personalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` personals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` personals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of personals.
     */
    distinct?: PersonalScalarFieldEnum | PersonalScalarFieldEnum[]
  }

  /**
   * personal create
   */
  export type personalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personal
     */
    select?: personalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the personal
     */
    omit?: personalOmit<ExtArgs> | null
    /**
     * The data needed to create a personal.
     */
    data: XOR<personalCreateInput, personalUncheckedCreateInput>
  }

  /**
   * personal createMany
   */
  export type personalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many personals.
     */
    data: personalCreateManyInput | personalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * personal createManyAndReturn
   */
  export type personalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personal
     */
    select?: personalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the personal
     */
    omit?: personalOmit<ExtArgs> | null
    /**
     * The data used to create many personals.
     */
    data: personalCreateManyInput | personalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * personal update
   */
  export type personalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personal
     */
    select?: personalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the personal
     */
    omit?: personalOmit<ExtArgs> | null
    /**
     * The data needed to update a personal.
     */
    data: XOR<personalUpdateInput, personalUncheckedUpdateInput>
    /**
     * Choose, which personal to update.
     */
    where: personalWhereUniqueInput
  }

  /**
   * personal updateMany
   */
  export type personalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update personals.
     */
    data: XOR<personalUpdateManyMutationInput, personalUncheckedUpdateManyInput>
    /**
     * Filter which personals to update
     */
    where?: personalWhereInput
    /**
     * Limit how many personals to update.
     */
    limit?: number
  }

  /**
   * personal updateManyAndReturn
   */
  export type personalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personal
     */
    select?: personalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the personal
     */
    omit?: personalOmit<ExtArgs> | null
    /**
     * The data used to update personals.
     */
    data: XOR<personalUpdateManyMutationInput, personalUncheckedUpdateManyInput>
    /**
     * Filter which personals to update
     */
    where?: personalWhereInput
    /**
     * Limit how many personals to update.
     */
    limit?: number
  }

  /**
   * personal upsert
   */
  export type personalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personal
     */
    select?: personalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the personal
     */
    omit?: personalOmit<ExtArgs> | null
    /**
     * The filter to search for the personal to update in case it exists.
     */
    where: personalWhereUniqueInput
    /**
     * In case the personal found by the `where` argument doesn't exist, create a new personal with this data.
     */
    create: XOR<personalCreateInput, personalUncheckedCreateInput>
    /**
     * In case the personal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<personalUpdateInput, personalUncheckedUpdateInput>
  }

  /**
   * personal delete
   */
  export type personalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personal
     */
    select?: personalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the personal
     */
    omit?: personalOmit<ExtArgs> | null
    /**
     * Filter which personal to delete.
     */
    where: personalWhereUniqueInput
  }

  /**
   * personal deleteMany
   */
  export type personalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which personals to delete
     */
    where?: personalWhereInput
    /**
     * Limit how many personals to delete.
     */
    limit?: number
  }

  /**
   * personal without action
   */
  export type personalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personal
     */
    select?: personalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the personal
     */
    omit?: personalOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const ProjectsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectsScalarFieldEnum = (typeof ProjectsScalarFieldEnum)[keyof typeof ProjectsScalarFieldEnum]


  export const SourcesScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    imgUrl: 'imgUrl',
    imgPath: 'imgPath',
    projectId: 'projectId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    usersId: 'usersId'
  };

  export type SourcesScalarFieldEnum = (typeof SourcesScalarFieldEnum)[keyof typeof SourcesScalarFieldEnum]


  export const ProjectStackScalarFieldEnum: {
    id: 'id',
    name: 'name',
    projectId: 'projectId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectStackScalarFieldEnum = (typeof ProjectStackScalarFieldEnum)[keyof typeof ProjectStackScalarFieldEnum]


  export const TypesScalarFieldEnum: {
    id: 'id',
    type: 'type',
    projectId: 'projectId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    usersId: 'usersId'
  };

  export type TypesScalarFieldEnum = (typeof TypesScalarFieldEnum)[keyof typeof TypesScalarFieldEnum]


  export const EducationScalarFieldEnum: {
    id: 'id',
    program: 'program',
    branch: 'branch',
    startDate: 'startDate',
    endDate: 'endDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EducationScalarFieldEnum = (typeof EducationScalarFieldEnum)[keyof typeof EducationScalarFieldEnum]


  export const Education_descriptionScalarFieldEnum: {
    id: 'id',
    description: 'description',
    educationId: 'educationId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Education_descriptionScalarFieldEnum = (typeof Education_descriptionScalarFieldEnum)[keyof typeof Education_descriptionScalarFieldEnum]


  export const ExperienceScalarFieldEnum: {
    id: 'id',
    company: 'company',
    branch: 'branch',
    position: 'position',
    startDate: 'startDate',
    endDate: 'endDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ExperienceScalarFieldEnum = (typeof ExperienceScalarFieldEnum)[keyof typeof ExperienceScalarFieldEnum]


  export const Experience_descriptionScalarFieldEnum: {
    id: 'id',
    description: 'description',
    experienceId: 'experienceId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Experience_descriptionScalarFieldEnum = (typeof Experience_descriptionScalarFieldEnum)[keyof typeof Experience_descriptionScalarFieldEnum]


  export const AchievementsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    year: 'year',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AchievementsScalarFieldEnum = (typeof AchievementsScalarFieldEnum)[keyof typeof AchievementsScalarFieldEnum]


  export const SoftSkillsScalarFieldEnum: {
    id: 'id',
    skills: 'skills',
    progress: 'progress',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SoftSkillsScalarFieldEnum = (typeof SoftSkillsScalarFieldEnum)[keyof typeof SoftSkillsScalarFieldEnum]


  export const FrontendSkillsScalarFieldEnum: {
    id: 'id',
    skills: 'skills',
    progress: 'progress',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FrontendSkillsScalarFieldEnum = (typeof FrontendSkillsScalarFieldEnum)[keyof typeof FrontendSkillsScalarFieldEnum]


  export const BackendSkillsScalarFieldEnum: {
    id: 'id',
    skills: 'skills',
    progress: 'progress',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BackendSkillsScalarFieldEnum = (typeof BackendSkillsScalarFieldEnum)[keyof typeof BackendSkillsScalarFieldEnum]


  export const TechStackScalarFieldEnum: {
    id: 'id',
    stack: 'stack',
    bgColor: 'bgColor',
    imgUrl: 'imgUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TechStackScalarFieldEnum = (typeof TechStackScalarFieldEnum)[keyof typeof TechStackScalarFieldEnum]


  export const TechStackTypeScalarFieldEnum: {
    id: 'id',
    type: 'type',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    techStackId: 'techStackId'
  };

  export type TechStackTypeScalarFieldEnum = (typeof TechStackTypeScalarFieldEnum)[keyof typeof TechStackTypeScalarFieldEnum]


  export const PersonalScalarFieldEnum: {
    id: 'id',
    key: 'key',
    value: 'value',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PersonalScalarFieldEnum = (typeof PersonalScalarFieldEnum)[keyof typeof PersonalScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Types'
   */
  export type EnumTypesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Types'>
    


  /**
   * Reference to a field of type 'Types[]'
   */
  export type ListEnumTypesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Types[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'devTypes'
   */
  export type EnumdevTypesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'devTypes'>
    


  /**
   * Reference to a field of type 'devTypes[]'
   */
  export type ListEnumdevTypesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'devTypes[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    createdAt?: DateTimeFilter<"users"> | Date | string
    updatedAt?: DateTimeFilter<"users"> | Date | string
    sources?: SourcesListRelationFilter
    types?: TypesListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sources?: sourcesOrderByRelationAggregateInput
    types?: typesOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    password?: StringFilter<"users"> | string
    createdAt?: DateTimeFilter<"users"> | Date | string
    updatedAt?: DateTimeFilter<"users"> | Date | string
    sources?: SourcesListRelationFilter
    types?: TypesListRelationFilter
  }, "id" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
    createdAt?: DateTimeWithAggregatesFilter<"users"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"users"> | Date | string
  }

  export type projectsWhereInput = {
    AND?: projectsWhereInput | projectsWhereInput[]
    OR?: projectsWhereInput[]
    NOT?: projectsWhereInput | projectsWhereInput[]
    id?: StringFilter<"projects"> | string
    title?: StringFilter<"projects"> | string
    description?: StringNullableFilter<"projects"> | string | null
    createdAt?: DateTimeFilter<"projects"> | Date | string
    updatedAt?: DateTimeFilter<"projects"> | Date | string
    source?: SourcesListRelationFilter
    type?: TypesListRelationFilter
    projectStacks?: ProjectStackListRelationFilter
  }

  export type projectsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    source?: sourcesOrderByRelationAggregateInput
    type?: typesOrderByRelationAggregateInput
    projectStacks?: projectStackOrderByRelationAggregateInput
  }

  export type projectsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: projectsWhereInput | projectsWhereInput[]
    OR?: projectsWhereInput[]
    NOT?: projectsWhereInput | projectsWhereInput[]
    title?: StringFilter<"projects"> | string
    description?: StringNullableFilter<"projects"> | string | null
    createdAt?: DateTimeFilter<"projects"> | Date | string
    updatedAt?: DateTimeFilter<"projects"> | Date | string
    source?: SourcesListRelationFilter
    type?: TypesListRelationFilter
    projectStacks?: ProjectStackListRelationFilter
  }, "id">

  export type projectsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: projectsCountOrderByAggregateInput
    _max?: projectsMaxOrderByAggregateInput
    _min?: projectsMinOrderByAggregateInput
  }

  export type projectsScalarWhereWithAggregatesInput = {
    AND?: projectsScalarWhereWithAggregatesInput | projectsScalarWhereWithAggregatesInput[]
    OR?: projectsScalarWhereWithAggregatesInput[]
    NOT?: projectsScalarWhereWithAggregatesInput | projectsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"projects"> | string
    title?: StringWithAggregatesFilter<"projects"> | string
    description?: StringNullableWithAggregatesFilter<"projects"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"projects"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"projects"> | Date | string
  }

  export type sourcesWhereInput = {
    AND?: sourcesWhereInput | sourcesWhereInput[]
    OR?: sourcesWhereInput[]
    NOT?: sourcesWhereInput | sourcesWhereInput[]
    id?: StringFilter<"sources"> | string
    title?: StringNullableFilter<"sources"> | string | null
    description?: StringNullableFilter<"sources"> | string | null
    imgUrl?: StringNullableFilter<"sources"> | string | null
    imgPath?: StringNullableFilter<"sources"> | string | null
    projectId?: StringFilter<"sources"> | string
    createdAt?: DateTimeFilter<"sources"> | Date | string
    updatedAt?: DateTimeFilter<"sources"> | Date | string
    usersId?: StringNullableFilter<"sources"> | string | null
    project?: XOR<ProjectsScalarRelationFilter, projectsWhereInput>
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export type sourcesOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    imgUrl?: SortOrderInput | SortOrder
    imgPath?: SortOrderInput | SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usersId?: SortOrderInput | SortOrder
    project?: projectsOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type sourcesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: sourcesWhereInput | sourcesWhereInput[]
    OR?: sourcesWhereInput[]
    NOT?: sourcesWhereInput | sourcesWhereInput[]
    title?: StringNullableFilter<"sources"> | string | null
    description?: StringNullableFilter<"sources"> | string | null
    imgUrl?: StringNullableFilter<"sources"> | string | null
    imgPath?: StringNullableFilter<"sources"> | string | null
    projectId?: StringFilter<"sources"> | string
    createdAt?: DateTimeFilter<"sources"> | Date | string
    updatedAt?: DateTimeFilter<"sources"> | Date | string
    usersId?: StringNullableFilter<"sources"> | string | null
    project?: XOR<ProjectsScalarRelationFilter, projectsWhereInput>
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, "id">

  export type sourcesOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    imgUrl?: SortOrderInput | SortOrder
    imgPath?: SortOrderInput | SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usersId?: SortOrderInput | SortOrder
    _count?: sourcesCountOrderByAggregateInput
    _max?: sourcesMaxOrderByAggregateInput
    _min?: sourcesMinOrderByAggregateInput
  }

  export type sourcesScalarWhereWithAggregatesInput = {
    AND?: sourcesScalarWhereWithAggregatesInput | sourcesScalarWhereWithAggregatesInput[]
    OR?: sourcesScalarWhereWithAggregatesInput[]
    NOT?: sourcesScalarWhereWithAggregatesInput | sourcesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"sources"> | string
    title?: StringNullableWithAggregatesFilter<"sources"> | string | null
    description?: StringNullableWithAggregatesFilter<"sources"> | string | null
    imgUrl?: StringNullableWithAggregatesFilter<"sources"> | string | null
    imgPath?: StringNullableWithAggregatesFilter<"sources"> | string | null
    projectId?: StringWithAggregatesFilter<"sources"> | string
    createdAt?: DateTimeWithAggregatesFilter<"sources"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"sources"> | Date | string
    usersId?: StringNullableWithAggregatesFilter<"sources"> | string | null
  }

  export type projectStackWhereInput = {
    AND?: projectStackWhereInput | projectStackWhereInput[]
    OR?: projectStackWhereInput[]
    NOT?: projectStackWhereInput | projectStackWhereInput[]
    id?: StringFilter<"projectStack"> | string
    name?: StringFilter<"projectStack"> | string
    projectId?: StringFilter<"projectStack"> | string
    createdAt?: DateTimeFilter<"projectStack"> | Date | string
    updatedAt?: DateTimeFilter<"projectStack"> | Date | string
    project?: XOR<ProjectsScalarRelationFilter, projectsWhereInput>
  }

  export type projectStackOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    project?: projectsOrderByWithRelationInput
  }

  export type projectStackWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: projectStackWhereInput | projectStackWhereInput[]
    OR?: projectStackWhereInput[]
    NOT?: projectStackWhereInput | projectStackWhereInput[]
    name?: StringFilter<"projectStack"> | string
    projectId?: StringFilter<"projectStack"> | string
    createdAt?: DateTimeFilter<"projectStack"> | Date | string
    updatedAt?: DateTimeFilter<"projectStack"> | Date | string
    project?: XOR<ProjectsScalarRelationFilter, projectsWhereInput>
  }, "id">

  export type projectStackOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: projectStackCountOrderByAggregateInput
    _max?: projectStackMaxOrderByAggregateInput
    _min?: projectStackMinOrderByAggregateInput
  }

  export type projectStackScalarWhereWithAggregatesInput = {
    AND?: projectStackScalarWhereWithAggregatesInput | projectStackScalarWhereWithAggregatesInput[]
    OR?: projectStackScalarWhereWithAggregatesInput[]
    NOT?: projectStackScalarWhereWithAggregatesInput | projectStackScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"projectStack"> | string
    name?: StringWithAggregatesFilter<"projectStack"> | string
    projectId?: StringWithAggregatesFilter<"projectStack"> | string
    createdAt?: DateTimeWithAggregatesFilter<"projectStack"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"projectStack"> | Date | string
  }

  export type typesWhereInput = {
    AND?: typesWhereInput | typesWhereInput[]
    OR?: typesWhereInput[]
    NOT?: typesWhereInput | typesWhereInput[]
    id?: StringFilter<"types"> | string
    type?: EnumTypesFilter<"types"> | $Enums.Types
    projectId?: StringFilter<"types"> | string
    createdAt?: DateTimeFilter<"types"> | Date | string
    updatedAt?: DateTimeFilter<"types"> | Date | string
    usersId?: StringNullableFilter<"types"> | string | null
    project?: XOR<ProjectsScalarRelationFilter, projectsWhereInput>
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export type typesOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usersId?: SortOrderInput | SortOrder
    project?: projectsOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type typesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: typesWhereInput | typesWhereInput[]
    OR?: typesWhereInput[]
    NOT?: typesWhereInput | typesWhereInput[]
    type?: EnumTypesFilter<"types"> | $Enums.Types
    projectId?: StringFilter<"types"> | string
    createdAt?: DateTimeFilter<"types"> | Date | string
    updatedAt?: DateTimeFilter<"types"> | Date | string
    usersId?: StringNullableFilter<"types"> | string | null
    project?: XOR<ProjectsScalarRelationFilter, projectsWhereInput>
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, "id">

  export type typesOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usersId?: SortOrderInput | SortOrder
    _count?: typesCountOrderByAggregateInput
    _max?: typesMaxOrderByAggregateInput
    _min?: typesMinOrderByAggregateInput
  }

  export type typesScalarWhereWithAggregatesInput = {
    AND?: typesScalarWhereWithAggregatesInput | typesScalarWhereWithAggregatesInput[]
    OR?: typesScalarWhereWithAggregatesInput[]
    NOT?: typesScalarWhereWithAggregatesInput | typesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"types"> | string
    type?: EnumTypesWithAggregatesFilter<"types"> | $Enums.Types
    projectId?: StringWithAggregatesFilter<"types"> | string
    createdAt?: DateTimeWithAggregatesFilter<"types"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"types"> | Date | string
    usersId?: StringNullableWithAggregatesFilter<"types"> | string | null
  }

  export type educationWhereInput = {
    AND?: educationWhereInput | educationWhereInput[]
    OR?: educationWhereInput[]
    NOT?: educationWhereInput | educationWhereInput[]
    id?: StringFilter<"education"> | string
    program?: StringFilter<"education"> | string
    branch?: StringFilter<"education"> | string
    startDate?: DateTimeFilter<"education"> | Date | string
    endDate?: DateTimeFilter<"education"> | Date | string
    createdAt?: DateTimeFilter<"education"> | Date | string
    updatedAt?: DateTimeFilter<"education"> | Date | string
    educationDescriptions?: Education_descriptionListRelationFilter
  }

  export type educationOrderByWithRelationInput = {
    id?: SortOrder
    program?: SortOrder
    branch?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    educationDescriptions?: education_descriptionOrderByRelationAggregateInput
  }

  export type educationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: educationWhereInput | educationWhereInput[]
    OR?: educationWhereInput[]
    NOT?: educationWhereInput | educationWhereInput[]
    program?: StringFilter<"education"> | string
    branch?: StringFilter<"education"> | string
    startDate?: DateTimeFilter<"education"> | Date | string
    endDate?: DateTimeFilter<"education"> | Date | string
    createdAt?: DateTimeFilter<"education"> | Date | string
    updatedAt?: DateTimeFilter<"education"> | Date | string
    educationDescriptions?: Education_descriptionListRelationFilter
  }, "id">

  export type educationOrderByWithAggregationInput = {
    id?: SortOrder
    program?: SortOrder
    branch?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: educationCountOrderByAggregateInput
    _max?: educationMaxOrderByAggregateInput
    _min?: educationMinOrderByAggregateInput
  }

  export type educationScalarWhereWithAggregatesInput = {
    AND?: educationScalarWhereWithAggregatesInput | educationScalarWhereWithAggregatesInput[]
    OR?: educationScalarWhereWithAggregatesInput[]
    NOT?: educationScalarWhereWithAggregatesInput | educationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"education"> | string
    program?: StringWithAggregatesFilter<"education"> | string
    branch?: StringWithAggregatesFilter<"education"> | string
    startDate?: DateTimeWithAggregatesFilter<"education"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"education"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"education"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"education"> | Date | string
  }

  export type education_descriptionWhereInput = {
    AND?: education_descriptionWhereInput | education_descriptionWhereInput[]
    OR?: education_descriptionWhereInput[]
    NOT?: education_descriptionWhereInput | education_descriptionWhereInput[]
    id?: StringFilter<"education_description"> | string
    description?: StringNullableFilter<"education_description"> | string | null
    educationId?: StringFilter<"education_description"> | string
    createdAt?: DateTimeFilter<"education_description"> | Date | string
    updatedAt?: DateTimeFilter<"education_description"> | Date | string
    education?: XOR<EducationScalarRelationFilter, educationWhereInput>
  }

  export type education_descriptionOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrderInput | SortOrder
    educationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    education?: educationOrderByWithRelationInput
  }

  export type education_descriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: education_descriptionWhereInput | education_descriptionWhereInput[]
    OR?: education_descriptionWhereInput[]
    NOT?: education_descriptionWhereInput | education_descriptionWhereInput[]
    description?: StringNullableFilter<"education_description"> | string | null
    educationId?: StringFilter<"education_description"> | string
    createdAt?: DateTimeFilter<"education_description"> | Date | string
    updatedAt?: DateTimeFilter<"education_description"> | Date | string
    education?: XOR<EducationScalarRelationFilter, educationWhereInput>
  }, "id">

  export type education_descriptionOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrderInput | SortOrder
    educationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: education_descriptionCountOrderByAggregateInput
    _max?: education_descriptionMaxOrderByAggregateInput
    _min?: education_descriptionMinOrderByAggregateInput
  }

  export type education_descriptionScalarWhereWithAggregatesInput = {
    AND?: education_descriptionScalarWhereWithAggregatesInput | education_descriptionScalarWhereWithAggregatesInput[]
    OR?: education_descriptionScalarWhereWithAggregatesInput[]
    NOT?: education_descriptionScalarWhereWithAggregatesInput | education_descriptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"education_description"> | string
    description?: StringNullableWithAggregatesFilter<"education_description"> | string | null
    educationId?: StringWithAggregatesFilter<"education_description"> | string
    createdAt?: DateTimeWithAggregatesFilter<"education_description"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"education_description"> | Date | string
  }

  export type experienceWhereInput = {
    AND?: experienceWhereInput | experienceWhereInput[]
    OR?: experienceWhereInput[]
    NOT?: experienceWhereInput | experienceWhereInput[]
    id?: StringFilter<"experience"> | string
    company?: StringFilter<"experience"> | string
    branch?: StringFilter<"experience"> | string
    position?: StringFilter<"experience"> | string
    startDate?: DateTimeFilter<"experience"> | Date | string
    endDate?: DateTimeFilter<"experience"> | Date | string
    createdAt?: DateTimeFilter<"experience"> | Date | string
    updatedAt?: DateTimeFilter<"experience"> | Date | string
    experienceDescriptions?: Experience_descriptionListRelationFilter
  }

  export type experienceOrderByWithRelationInput = {
    id?: SortOrder
    company?: SortOrder
    branch?: SortOrder
    position?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    experienceDescriptions?: experience_descriptionOrderByRelationAggregateInput
  }

  export type experienceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: experienceWhereInput | experienceWhereInput[]
    OR?: experienceWhereInput[]
    NOT?: experienceWhereInput | experienceWhereInput[]
    company?: StringFilter<"experience"> | string
    branch?: StringFilter<"experience"> | string
    position?: StringFilter<"experience"> | string
    startDate?: DateTimeFilter<"experience"> | Date | string
    endDate?: DateTimeFilter<"experience"> | Date | string
    createdAt?: DateTimeFilter<"experience"> | Date | string
    updatedAt?: DateTimeFilter<"experience"> | Date | string
    experienceDescriptions?: Experience_descriptionListRelationFilter
  }, "id">

  export type experienceOrderByWithAggregationInput = {
    id?: SortOrder
    company?: SortOrder
    branch?: SortOrder
    position?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: experienceCountOrderByAggregateInput
    _max?: experienceMaxOrderByAggregateInput
    _min?: experienceMinOrderByAggregateInput
  }

  export type experienceScalarWhereWithAggregatesInput = {
    AND?: experienceScalarWhereWithAggregatesInput | experienceScalarWhereWithAggregatesInput[]
    OR?: experienceScalarWhereWithAggregatesInput[]
    NOT?: experienceScalarWhereWithAggregatesInput | experienceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"experience"> | string
    company?: StringWithAggregatesFilter<"experience"> | string
    branch?: StringWithAggregatesFilter<"experience"> | string
    position?: StringWithAggregatesFilter<"experience"> | string
    startDate?: DateTimeWithAggregatesFilter<"experience"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"experience"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"experience"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"experience"> | Date | string
  }

  export type experience_descriptionWhereInput = {
    AND?: experience_descriptionWhereInput | experience_descriptionWhereInput[]
    OR?: experience_descriptionWhereInput[]
    NOT?: experience_descriptionWhereInput | experience_descriptionWhereInput[]
    id?: StringFilter<"experience_description"> | string
    description?: StringNullableFilter<"experience_description"> | string | null
    experienceId?: StringFilter<"experience_description"> | string
    createdAt?: DateTimeFilter<"experience_description"> | Date | string
    updatedAt?: DateTimeFilter<"experience_description"> | Date | string
    experience?: XOR<ExperienceScalarRelationFilter, experienceWhereInput>
  }

  export type experience_descriptionOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrderInput | SortOrder
    experienceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    experience?: experienceOrderByWithRelationInput
  }

  export type experience_descriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: experience_descriptionWhereInput | experience_descriptionWhereInput[]
    OR?: experience_descriptionWhereInput[]
    NOT?: experience_descriptionWhereInput | experience_descriptionWhereInput[]
    description?: StringNullableFilter<"experience_description"> | string | null
    experienceId?: StringFilter<"experience_description"> | string
    createdAt?: DateTimeFilter<"experience_description"> | Date | string
    updatedAt?: DateTimeFilter<"experience_description"> | Date | string
    experience?: XOR<ExperienceScalarRelationFilter, experienceWhereInput>
  }, "id">

  export type experience_descriptionOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrderInput | SortOrder
    experienceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: experience_descriptionCountOrderByAggregateInput
    _max?: experience_descriptionMaxOrderByAggregateInput
    _min?: experience_descriptionMinOrderByAggregateInput
  }

  export type experience_descriptionScalarWhereWithAggregatesInput = {
    AND?: experience_descriptionScalarWhereWithAggregatesInput | experience_descriptionScalarWhereWithAggregatesInput[]
    OR?: experience_descriptionScalarWhereWithAggregatesInput[]
    NOT?: experience_descriptionScalarWhereWithAggregatesInput | experience_descriptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"experience_description"> | string
    description?: StringNullableWithAggregatesFilter<"experience_description"> | string | null
    experienceId?: StringWithAggregatesFilter<"experience_description"> | string
    createdAt?: DateTimeWithAggregatesFilter<"experience_description"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"experience_description"> | Date | string
  }

  export type achievementsWhereInput = {
    AND?: achievementsWhereInput | achievementsWhereInput[]
    OR?: achievementsWhereInput[]
    NOT?: achievementsWhereInput | achievementsWhereInput[]
    id?: StringFilter<"achievements"> | string
    title?: StringFilter<"achievements"> | string
    year?: StringFilter<"achievements"> | string
    description?: StringNullableFilter<"achievements"> | string | null
    createdAt?: DateTimeFilter<"achievements"> | Date | string
    updatedAt?: DateTimeFilter<"achievements"> | Date | string
  }

  export type achievementsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    year?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type achievementsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: achievementsWhereInput | achievementsWhereInput[]
    OR?: achievementsWhereInput[]
    NOT?: achievementsWhereInput | achievementsWhereInput[]
    title?: StringFilter<"achievements"> | string
    year?: StringFilter<"achievements"> | string
    description?: StringNullableFilter<"achievements"> | string | null
    createdAt?: DateTimeFilter<"achievements"> | Date | string
    updatedAt?: DateTimeFilter<"achievements"> | Date | string
  }, "id">

  export type achievementsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    year?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: achievementsCountOrderByAggregateInput
    _max?: achievementsMaxOrderByAggregateInput
    _min?: achievementsMinOrderByAggregateInput
  }

  export type achievementsScalarWhereWithAggregatesInput = {
    AND?: achievementsScalarWhereWithAggregatesInput | achievementsScalarWhereWithAggregatesInput[]
    OR?: achievementsScalarWhereWithAggregatesInput[]
    NOT?: achievementsScalarWhereWithAggregatesInput | achievementsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"achievements"> | string
    title?: StringWithAggregatesFilter<"achievements"> | string
    year?: StringWithAggregatesFilter<"achievements"> | string
    description?: StringNullableWithAggregatesFilter<"achievements"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"achievements"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"achievements"> | Date | string
  }

  export type softSkillsWhereInput = {
    AND?: softSkillsWhereInput | softSkillsWhereInput[]
    OR?: softSkillsWhereInput[]
    NOT?: softSkillsWhereInput | softSkillsWhereInput[]
    id?: StringFilter<"softSkills"> | string
    skills?: StringFilter<"softSkills"> | string
    progress?: IntFilter<"softSkills"> | number
    description?: StringNullableFilter<"softSkills"> | string | null
    createdAt?: DateTimeFilter<"softSkills"> | Date | string
    updatedAt?: DateTimeFilter<"softSkills"> | Date | string
  }

  export type softSkillsOrderByWithRelationInput = {
    id?: SortOrder
    skills?: SortOrder
    progress?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type softSkillsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: softSkillsWhereInput | softSkillsWhereInput[]
    OR?: softSkillsWhereInput[]
    NOT?: softSkillsWhereInput | softSkillsWhereInput[]
    skills?: StringFilter<"softSkills"> | string
    progress?: IntFilter<"softSkills"> | number
    description?: StringNullableFilter<"softSkills"> | string | null
    createdAt?: DateTimeFilter<"softSkills"> | Date | string
    updatedAt?: DateTimeFilter<"softSkills"> | Date | string
  }, "id">

  export type softSkillsOrderByWithAggregationInput = {
    id?: SortOrder
    skills?: SortOrder
    progress?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: softSkillsCountOrderByAggregateInput
    _avg?: softSkillsAvgOrderByAggregateInput
    _max?: softSkillsMaxOrderByAggregateInput
    _min?: softSkillsMinOrderByAggregateInput
    _sum?: softSkillsSumOrderByAggregateInput
  }

  export type softSkillsScalarWhereWithAggregatesInput = {
    AND?: softSkillsScalarWhereWithAggregatesInput | softSkillsScalarWhereWithAggregatesInput[]
    OR?: softSkillsScalarWhereWithAggregatesInput[]
    NOT?: softSkillsScalarWhereWithAggregatesInput | softSkillsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"softSkills"> | string
    skills?: StringWithAggregatesFilter<"softSkills"> | string
    progress?: IntWithAggregatesFilter<"softSkills"> | number
    description?: StringNullableWithAggregatesFilter<"softSkills"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"softSkills"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"softSkills"> | Date | string
  }

  export type frontendSkillsWhereInput = {
    AND?: frontendSkillsWhereInput | frontendSkillsWhereInput[]
    OR?: frontendSkillsWhereInput[]
    NOT?: frontendSkillsWhereInput | frontendSkillsWhereInput[]
    id?: StringFilter<"frontendSkills"> | string
    skills?: StringFilter<"frontendSkills"> | string
    progress?: IntFilter<"frontendSkills"> | number
    description?: StringNullableFilter<"frontendSkills"> | string | null
    createdAt?: DateTimeFilter<"frontendSkills"> | Date | string
    updatedAt?: DateTimeFilter<"frontendSkills"> | Date | string
  }

  export type frontendSkillsOrderByWithRelationInput = {
    id?: SortOrder
    skills?: SortOrder
    progress?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type frontendSkillsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: frontendSkillsWhereInput | frontendSkillsWhereInput[]
    OR?: frontendSkillsWhereInput[]
    NOT?: frontendSkillsWhereInput | frontendSkillsWhereInput[]
    skills?: StringFilter<"frontendSkills"> | string
    progress?: IntFilter<"frontendSkills"> | number
    description?: StringNullableFilter<"frontendSkills"> | string | null
    createdAt?: DateTimeFilter<"frontendSkills"> | Date | string
    updatedAt?: DateTimeFilter<"frontendSkills"> | Date | string
  }, "id">

  export type frontendSkillsOrderByWithAggregationInput = {
    id?: SortOrder
    skills?: SortOrder
    progress?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: frontendSkillsCountOrderByAggregateInput
    _avg?: frontendSkillsAvgOrderByAggregateInput
    _max?: frontendSkillsMaxOrderByAggregateInput
    _min?: frontendSkillsMinOrderByAggregateInput
    _sum?: frontendSkillsSumOrderByAggregateInput
  }

  export type frontendSkillsScalarWhereWithAggregatesInput = {
    AND?: frontendSkillsScalarWhereWithAggregatesInput | frontendSkillsScalarWhereWithAggregatesInput[]
    OR?: frontendSkillsScalarWhereWithAggregatesInput[]
    NOT?: frontendSkillsScalarWhereWithAggregatesInput | frontendSkillsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"frontendSkills"> | string
    skills?: StringWithAggregatesFilter<"frontendSkills"> | string
    progress?: IntWithAggregatesFilter<"frontendSkills"> | number
    description?: StringNullableWithAggregatesFilter<"frontendSkills"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"frontendSkills"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"frontendSkills"> | Date | string
  }

  export type backendSkillsWhereInput = {
    AND?: backendSkillsWhereInput | backendSkillsWhereInput[]
    OR?: backendSkillsWhereInput[]
    NOT?: backendSkillsWhereInput | backendSkillsWhereInput[]
    id?: StringFilter<"backendSkills"> | string
    skills?: StringFilter<"backendSkills"> | string
    progress?: IntFilter<"backendSkills"> | number
    description?: StringNullableFilter<"backendSkills"> | string | null
    createdAt?: DateTimeFilter<"backendSkills"> | Date | string
    updatedAt?: DateTimeFilter<"backendSkills"> | Date | string
  }

  export type backendSkillsOrderByWithRelationInput = {
    id?: SortOrder
    skills?: SortOrder
    progress?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type backendSkillsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: backendSkillsWhereInput | backendSkillsWhereInput[]
    OR?: backendSkillsWhereInput[]
    NOT?: backendSkillsWhereInput | backendSkillsWhereInput[]
    skills?: StringFilter<"backendSkills"> | string
    progress?: IntFilter<"backendSkills"> | number
    description?: StringNullableFilter<"backendSkills"> | string | null
    createdAt?: DateTimeFilter<"backendSkills"> | Date | string
    updatedAt?: DateTimeFilter<"backendSkills"> | Date | string
  }, "id">

  export type backendSkillsOrderByWithAggregationInput = {
    id?: SortOrder
    skills?: SortOrder
    progress?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: backendSkillsCountOrderByAggregateInput
    _avg?: backendSkillsAvgOrderByAggregateInput
    _max?: backendSkillsMaxOrderByAggregateInput
    _min?: backendSkillsMinOrderByAggregateInput
    _sum?: backendSkillsSumOrderByAggregateInput
  }

  export type backendSkillsScalarWhereWithAggregatesInput = {
    AND?: backendSkillsScalarWhereWithAggregatesInput | backendSkillsScalarWhereWithAggregatesInput[]
    OR?: backendSkillsScalarWhereWithAggregatesInput[]
    NOT?: backendSkillsScalarWhereWithAggregatesInput | backendSkillsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"backendSkills"> | string
    skills?: StringWithAggregatesFilter<"backendSkills"> | string
    progress?: IntWithAggregatesFilter<"backendSkills"> | number
    description?: StringNullableWithAggregatesFilter<"backendSkills"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"backendSkills"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"backendSkills"> | Date | string
  }

  export type techStackWhereInput = {
    AND?: techStackWhereInput | techStackWhereInput[]
    OR?: techStackWhereInput[]
    NOT?: techStackWhereInput | techStackWhereInput[]
    id?: StringFilter<"techStack"> | string
    stack?: StringFilter<"techStack"> | string
    bgColor?: StringFilter<"techStack"> | string
    imgUrl?: StringFilter<"techStack"> | string
    createdAt?: DateTimeFilter<"techStack"> | Date | string
    updatedAt?: DateTimeFilter<"techStack"> | Date | string
    techstacktype?: TechStackTypeListRelationFilter
  }

  export type techStackOrderByWithRelationInput = {
    id?: SortOrder
    stack?: SortOrder
    bgColor?: SortOrder
    imgUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    techstacktype?: techStackTypeOrderByRelationAggregateInput
  }

  export type techStackWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: techStackWhereInput | techStackWhereInput[]
    OR?: techStackWhereInput[]
    NOT?: techStackWhereInput | techStackWhereInput[]
    stack?: StringFilter<"techStack"> | string
    bgColor?: StringFilter<"techStack"> | string
    imgUrl?: StringFilter<"techStack"> | string
    createdAt?: DateTimeFilter<"techStack"> | Date | string
    updatedAt?: DateTimeFilter<"techStack"> | Date | string
    techstacktype?: TechStackTypeListRelationFilter
  }, "id">

  export type techStackOrderByWithAggregationInput = {
    id?: SortOrder
    stack?: SortOrder
    bgColor?: SortOrder
    imgUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: techStackCountOrderByAggregateInput
    _max?: techStackMaxOrderByAggregateInput
    _min?: techStackMinOrderByAggregateInput
  }

  export type techStackScalarWhereWithAggregatesInput = {
    AND?: techStackScalarWhereWithAggregatesInput | techStackScalarWhereWithAggregatesInput[]
    OR?: techStackScalarWhereWithAggregatesInput[]
    NOT?: techStackScalarWhereWithAggregatesInput | techStackScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"techStack"> | string
    stack?: StringWithAggregatesFilter<"techStack"> | string
    bgColor?: StringWithAggregatesFilter<"techStack"> | string
    imgUrl?: StringWithAggregatesFilter<"techStack"> | string
    createdAt?: DateTimeWithAggregatesFilter<"techStack"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"techStack"> | Date | string
  }

  export type techStackTypeWhereInput = {
    AND?: techStackTypeWhereInput | techStackTypeWhereInput[]
    OR?: techStackTypeWhereInput[]
    NOT?: techStackTypeWhereInput | techStackTypeWhereInput[]
    id?: StringFilter<"techStackType"> | string
    type?: EnumdevTypesNullableFilter<"techStackType"> | $Enums.devTypes | null
    createdAt?: DateTimeFilter<"techStackType"> | Date | string
    updatedAt?: DateTimeFilter<"techStackType"> | Date | string
    techStackId?: StringNullableFilter<"techStackType"> | string | null
    techStack?: XOR<TechStackNullableScalarRelationFilter, techStackWhereInput> | null
  }

  export type techStackTypeOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    techStackId?: SortOrderInput | SortOrder
    techStack?: techStackOrderByWithRelationInput
  }

  export type techStackTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: techStackTypeWhereInput | techStackTypeWhereInput[]
    OR?: techStackTypeWhereInput[]
    NOT?: techStackTypeWhereInput | techStackTypeWhereInput[]
    type?: EnumdevTypesNullableFilter<"techStackType"> | $Enums.devTypes | null
    createdAt?: DateTimeFilter<"techStackType"> | Date | string
    updatedAt?: DateTimeFilter<"techStackType"> | Date | string
    techStackId?: StringNullableFilter<"techStackType"> | string | null
    techStack?: XOR<TechStackNullableScalarRelationFilter, techStackWhereInput> | null
  }, "id">

  export type techStackTypeOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    techStackId?: SortOrderInput | SortOrder
    _count?: techStackTypeCountOrderByAggregateInput
    _max?: techStackTypeMaxOrderByAggregateInput
    _min?: techStackTypeMinOrderByAggregateInput
  }

  export type techStackTypeScalarWhereWithAggregatesInput = {
    AND?: techStackTypeScalarWhereWithAggregatesInput | techStackTypeScalarWhereWithAggregatesInput[]
    OR?: techStackTypeScalarWhereWithAggregatesInput[]
    NOT?: techStackTypeScalarWhereWithAggregatesInput | techStackTypeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"techStackType"> | string
    type?: EnumdevTypesNullableWithAggregatesFilter<"techStackType"> | $Enums.devTypes | null
    createdAt?: DateTimeWithAggregatesFilter<"techStackType"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"techStackType"> | Date | string
    techStackId?: StringNullableWithAggregatesFilter<"techStackType"> | string | null
  }

  export type personalWhereInput = {
    AND?: personalWhereInput | personalWhereInput[]
    OR?: personalWhereInput[]
    NOT?: personalWhereInput | personalWhereInput[]
    id?: StringFilter<"personal"> | string
    key?: StringFilter<"personal"> | string
    value?: StringFilter<"personal"> | string
    createdAt?: DateTimeFilter<"personal"> | Date | string
    updatedAt?: DateTimeFilter<"personal"> | Date | string
  }

  export type personalOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type personalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key?: string
    AND?: personalWhereInput | personalWhereInput[]
    OR?: personalWhereInput[]
    NOT?: personalWhereInput | personalWhereInput[]
    value?: StringFilter<"personal"> | string
    createdAt?: DateTimeFilter<"personal"> | Date | string
    updatedAt?: DateTimeFilter<"personal"> | Date | string
  }, "id" | "key">

  export type personalOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: personalCountOrderByAggregateInput
    _max?: personalMaxOrderByAggregateInput
    _min?: personalMinOrderByAggregateInput
  }

  export type personalScalarWhereWithAggregatesInput = {
    AND?: personalScalarWhereWithAggregatesInput | personalScalarWhereWithAggregatesInput[]
    OR?: personalScalarWhereWithAggregatesInput[]
    NOT?: personalScalarWhereWithAggregatesInput | personalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"personal"> | string
    key?: StringWithAggregatesFilter<"personal"> | string
    value?: StringWithAggregatesFilter<"personal"> | string
    createdAt?: DateTimeWithAggregatesFilter<"personal"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"personal"> | Date | string
  }

  export type usersCreateInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sources?: sourcesCreateNestedManyWithoutUsersInput
    types?: typesCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sources?: sourcesUncheckedCreateNestedManyWithoutUsersInput
    types?: typesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sources?: sourcesUpdateManyWithoutUsersNestedInput
    types?: typesUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sources?: sourcesUncheckedUpdateManyWithoutUsersNestedInput
    types?: typesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type usersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type projectsCreateInput = {
    id?: string
    title: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    source?: sourcesCreateNestedManyWithoutProjectInput
    type?: typesCreateNestedManyWithoutProjectInput
    projectStacks?: projectStackCreateNestedManyWithoutProjectInput
  }

  export type projectsUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    source?: sourcesUncheckedCreateNestedManyWithoutProjectInput
    type?: typesUncheckedCreateNestedManyWithoutProjectInput
    projectStacks?: projectStackUncheckedCreateNestedManyWithoutProjectInput
  }

  export type projectsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: sourcesUpdateManyWithoutProjectNestedInput
    type?: typesUpdateManyWithoutProjectNestedInput
    projectStacks?: projectStackUpdateManyWithoutProjectNestedInput
  }

  export type projectsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: sourcesUncheckedUpdateManyWithoutProjectNestedInput
    type?: typesUncheckedUpdateManyWithoutProjectNestedInput
    projectStacks?: projectStackUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type projectsCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type projectsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type projectsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sourcesCreateInput = {
    id?: string
    title?: string | null
    description?: string | null
    imgUrl?: string | null
    imgPath?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    project: projectsCreateNestedOneWithoutSourceInput
    users?: usersCreateNestedOneWithoutSourcesInput
  }

  export type sourcesUncheckedCreateInput = {
    id?: string
    title?: string | null
    description?: string | null
    imgUrl?: string | null
    imgPath?: string | null
    projectId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    usersId?: string | null
  }

  export type sourcesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imgPath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: projectsUpdateOneRequiredWithoutSourceNestedInput
    users?: usersUpdateOneWithoutSourcesNestedInput
  }

  export type sourcesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imgPath?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usersId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type sourcesCreateManyInput = {
    id?: string
    title?: string | null
    description?: string | null
    imgUrl?: string | null
    imgPath?: string | null
    projectId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    usersId?: string | null
  }

  export type sourcesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imgPath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sourcesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imgPath?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usersId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type projectStackCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    project: projectsCreateNestedOneWithoutProjectStacksInput
  }

  export type projectStackUncheckedCreateInput = {
    id?: string
    name: string
    projectId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type projectStackUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: projectsUpdateOneRequiredWithoutProjectStacksNestedInput
  }

  export type projectStackUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type projectStackCreateManyInput = {
    id?: string
    name: string
    projectId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type projectStackUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type projectStackUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type typesCreateInput = {
    id?: string
    type?: $Enums.Types
    createdAt?: Date | string
    updatedAt?: Date | string
    project: projectsCreateNestedOneWithoutTypeInput
    users?: usersCreateNestedOneWithoutTypesInput
  }

  export type typesUncheckedCreateInput = {
    id?: string
    type?: $Enums.Types
    projectId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    usersId?: string | null
  }

  export type typesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTypesFieldUpdateOperationsInput | $Enums.Types
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: projectsUpdateOneRequiredWithoutTypeNestedInput
    users?: usersUpdateOneWithoutTypesNestedInput
  }

  export type typesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTypesFieldUpdateOperationsInput | $Enums.Types
    projectId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usersId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type typesCreateManyInput = {
    id?: string
    type?: $Enums.Types
    projectId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    usersId?: string | null
  }

  export type typesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTypesFieldUpdateOperationsInput | $Enums.Types
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type typesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTypesFieldUpdateOperationsInput | $Enums.Types
    projectId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usersId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type educationCreateInput = {
    id?: string
    program: string
    branch: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    educationDescriptions?: education_descriptionCreateNestedManyWithoutEducationInput
  }

  export type educationUncheckedCreateInput = {
    id?: string
    program: string
    branch: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    educationDescriptions?: education_descriptionUncheckedCreateNestedManyWithoutEducationInput
  }

  export type educationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    program?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    educationDescriptions?: education_descriptionUpdateManyWithoutEducationNestedInput
  }

  export type educationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    program?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    educationDescriptions?: education_descriptionUncheckedUpdateManyWithoutEducationNestedInput
  }

  export type educationCreateManyInput = {
    id?: string
    program: string
    branch: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type educationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    program?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type educationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    program?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type education_descriptionCreateInput = {
    id?: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    education: educationCreateNestedOneWithoutEducationDescriptionsInput
  }

  export type education_descriptionUncheckedCreateInput = {
    id?: string
    description?: string | null
    educationId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type education_descriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    education?: educationUpdateOneRequiredWithoutEducationDescriptionsNestedInput
  }

  export type education_descriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    educationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type education_descriptionCreateManyInput = {
    id?: string
    description?: string | null
    educationId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type education_descriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type education_descriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    educationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type experienceCreateInput = {
    id?: string
    company: string
    branch: string
    position: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    experienceDescriptions?: experience_descriptionCreateNestedManyWithoutExperienceInput
  }

  export type experienceUncheckedCreateInput = {
    id?: string
    company: string
    branch: string
    position: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    experienceDescriptions?: experience_descriptionUncheckedCreateNestedManyWithoutExperienceInput
  }

  export type experienceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    experienceDescriptions?: experience_descriptionUpdateManyWithoutExperienceNestedInput
  }

  export type experienceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    experienceDescriptions?: experience_descriptionUncheckedUpdateManyWithoutExperienceNestedInput
  }

  export type experienceCreateManyInput = {
    id?: string
    company: string
    branch: string
    position: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type experienceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type experienceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type experience_descriptionCreateInput = {
    id?: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    experience: experienceCreateNestedOneWithoutExperienceDescriptionsInput
  }

  export type experience_descriptionUncheckedCreateInput = {
    id?: string
    description?: string | null
    experienceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type experience_descriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    experience?: experienceUpdateOneRequiredWithoutExperienceDescriptionsNestedInput
  }

  export type experience_descriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    experienceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type experience_descriptionCreateManyInput = {
    id?: string
    description?: string | null
    experienceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type experience_descriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type experience_descriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    experienceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type achievementsCreateInput = {
    id?: string
    title: string
    year: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type achievementsUncheckedCreateInput = {
    id?: string
    title: string
    year: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type achievementsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type achievementsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type achievementsCreateManyInput = {
    id?: string
    title: string
    year: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type achievementsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type achievementsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type softSkillsCreateInput = {
    id?: string
    skills: string
    progress: number
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type softSkillsUncheckedCreateInput = {
    id?: string
    skills: string
    progress: number
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type softSkillsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    skills?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type softSkillsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    skills?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type softSkillsCreateManyInput = {
    id?: string
    skills: string
    progress: number
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type softSkillsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    skills?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type softSkillsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    skills?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type frontendSkillsCreateInput = {
    id?: string
    skills: string
    progress: number
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type frontendSkillsUncheckedCreateInput = {
    id?: string
    skills: string
    progress: number
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type frontendSkillsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    skills?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type frontendSkillsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    skills?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type frontendSkillsCreateManyInput = {
    id?: string
    skills: string
    progress: number
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type frontendSkillsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    skills?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type frontendSkillsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    skills?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type backendSkillsCreateInput = {
    id?: string
    skills: string
    progress: number
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type backendSkillsUncheckedCreateInput = {
    id?: string
    skills: string
    progress: number
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type backendSkillsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    skills?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type backendSkillsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    skills?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type backendSkillsCreateManyInput = {
    id?: string
    skills: string
    progress: number
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type backendSkillsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    skills?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type backendSkillsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    skills?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type techStackCreateInput = {
    id?: string
    stack: string
    bgColor: string
    imgUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    techstacktype?: techStackTypeCreateNestedManyWithoutTechStackInput
  }

  export type techStackUncheckedCreateInput = {
    id?: string
    stack: string
    bgColor: string
    imgUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    techstacktype?: techStackTypeUncheckedCreateNestedManyWithoutTechStackInput
  }

  export type techStackUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    stack?: StringFieldUpdateOperationsInput | string
    bgColor?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    techstacktype?: techStackTypeUpdateManyWithoutTechStackNestedInput
  }

  export type techStackUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    stack?: StringFieldUpdateOperationsInput | string
    bgColor?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    techstacktype?: techStackTypeUncheckedUpdateManyWithoutTechStackNestedInput
  }

  export type techStackCreateManyInput = {
    id?: string
    stack: string
    bgColor: string
    imgUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type techStackUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    stack?: StringFieldUpdateOperationsInput | string
    bgColor?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type techStackUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    stack?: StringFieldUpdateOperationsInput | string
    bgColor?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type techStackTypeCreateInput = {
    id?: string
    type?: $Enums.devTypes | null
    createdAt?: Date | string
    updatedAt?: Date | string
    techStack?: techStackCreateNestedOneWithoutTechstacktypeInput
  }

  export type techStackTypeUncheckedCreateInput = {
    id?: string
    type?: $Enums.devTypes | null
    createdAt?: Date | string
    updatedAt?: Date | string
    techStackId?: string | null
  }

  export type techStackTypeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: NullableEnumdevTypesFieldUpdateOperationsInput | $Enums.devTypes | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    techStack?: techStackUpdateOneWithoutTechstacktypeNestedInput
  }

  export type techStackTypeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: NullableEnumdevTypesFieldUpdateOperationsInput | $Enums.devTypes | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    techStackId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type techStackTypeCreateManyInput = {
    id?: string
    type?: $Enums.devTypes | null
    createdAt?: Date | string
    updatedAt?: Date | string
    techStackId?: string | null
  }

  export type techStackTypeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: NullableEnumdevTypesFieldUpdateOperationsInput | $Enums.devTypes | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type techStackTypeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: NullableEnumdevTypesFieldUpdateOperationsInput | $Enums.devTypes | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    techStackId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type personalCreateInput = {
    id?: string
    key: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type personalUncheckedCreateInput = {
    id?: string
    key: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type personalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type personalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type personalCreateManyInput = {
    id?: string
    key: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type personalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type personalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SourcesListRelationFilter = {
    every?: sourcesWhereInput
    some?: sourcesWhereInput
    none?: sourcesWhereInput
  }

  export type TypesListRelationFilter = {
    every?: typesWhereInput
    some?: typesWhereInput
    none?: typesWhereInput
  }

  export type sourcesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type typesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ProjectStackListRelationFilter = {
    every?: projectStackWhereInput
    some?: projectStackWhereInput
    none?: projectStackWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type projectStackOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type projectsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type projectsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type projectsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type ProjectsScalarRelationFilter = {
    is?: projectsWhereInput
    isNot?: projectsWhereInput
  }

  export type UsersNullableScalarRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type sourcesCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imgUrl?: SortOrder
    imgPath?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usersId?: SortOrder
  }

  export type sourcesMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imgUrl?: SortOrder
    imgPath?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usersId?: SortOrder
  }

  export type sourcesMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imgUrl?: SortOrder
    imgPath?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usersId?: SortOrder
  }

  export type projectStackCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type projectStackMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type projectStackMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumTypesFilter<$PrismaModel = never> = {
    equals?: $Enums.Types | EnumTypesFieldRefInput<$PrismaModel>
    in?: $Enums.Types[] | ListEnumTypesFieldRefInput<$PrismaModel>
    notIn?: $Enums.Types[] | ListEnumTypesFieldRefInput<$PrismaModel>
    not?: NestedEnumTypesFilter<$PrismaModel> | $Enums.Types
  }

  export type typesCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usersId?: SortOrder
  }

  export type typesMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usersId?: SortOrder
  }

  export type typesMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usersId?: SortOrder
  }

  export type EnumTypesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Types | EnumTypesFieldRefInput<$PrismaModel>
    in?: $Enums.Types[] | ListEnumTypesFieldRefInput<$PrismaModel>
    notIn?: $Enums.Types[] | ListEnumTypesFieldRefInput<$PrismaModel>
    not?: NestedEnumTypesWithAggregatesFilter<$PrismaModel> | $Enums.Types
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypesFilter<$PrismaModel>
    _max?: NestedEnumTypesFilter<$PrismaModel>
  }

  export type Education_descriptionListRelationFilter = {
    every?: education_descriptionWhereInput
    some?: education_descriptionWhereInput
    none?: education_descriptionWhereInput
  }

  export type education_descriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type educationCountOrderByAggregateInput = {
    id?: SortOrder
    program?: SortOrder
    branch?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type educationMaxOrderByAggregateInput = {
    id?: SortOrder
    program?: SortOrder
    branch?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type educationMinOrderByAggregateInput = {
    id?: SortOrder
    program?: SortOrder
    branch?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EducationScalarRelationFilter = {
    is?: educationWhereInput
    isNot?: educationWhereInput
  }

  export type education_descriptionCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    educationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type education_descriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    educationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type education_descriptionMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    educationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Experience_descriptionListRelationFilter = {
    every?: experience_descriptionWhereInput
    some?: experience_descriptionWhereInput
    none?: experience_descriptionWhereInput
  }

  export type experience_descriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type experienceCountOrderByAggregateInput = {
    id?: SortOrder
    company?: SortOrder
    branch?: SortOrder
    position?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type experienceMaxOrderByAggregateInput = {
    id?: SortOrder
    company?: SortOrder
    branch?: SortOrder
    position?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type experienceMinOrderByAggregateInput = {
    id?: SortOrder
    company?: SortOrder
    branch?: SortOrder
    position?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExperienceScalarRelationFilter = {
    is?: experienceWhereInput
    isNot?: experienceWhereInput
  }

  export type experience_descriptionCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    experienceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type experience_descriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    experienceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type experience_descriptionMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    experienceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type achievementsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    year?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type achievementsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    year?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type achievementsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    year?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type softSkillsCountOrderByAggregateInput = {
    id?: SortOrder
    skills?: SortOrder
    progress?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type softSkillsAvgOrderByAggregateInput = {
    progress?: SortOrder
  }

  export type softSkillsMaxOrderByAggregateInput = {
    id?: SortOrder
    skills?: SortOrder
    progress?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type softSkillsMinOrderByAggregateInput = {
    id?: SortOrder
    skills?: SortOrder
    progress?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type softSkillsSumOrderByAggregateInput = {
    progress?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type frontendSkillsCountOrderByAggregateInput = {
    id?: SortOrder
    skills?: SortOrder
    progress?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type frontendSkillsAvgOrderByAggregateInput = {
    progress?: SortOrder
  }

  export type frontendSkillsMaxOrderByAggregateInput = {
    id?: SortOrder
    skills?: SortOrder
    progress?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type frontendSkillsMinOrderByAggregateInput = {
    id?: SortOrder
    skills?: SortOrder
    progress?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type frontendSkillsSumOrderByAggregateInput = {
    progress?: SortOrder
  }

  export type backendSkillsCountOrderByAggregateInput = {
    id?: SortOrder
    skills?: SortOrder
    progress?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type backendSkillsAvgOrderByAggregateInput = {
    progress?: SortOrder
  }

  export type backendSkillsMaxOrderByAggregateInput = {
    id?: SortOrder
    skills?: SortOrder
    progress?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type backendSkillsMinOrderByAggregateInput = {
    id?: SortOrder
    skills?: SortOrder
    progress?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type backendSkillsSumOrderByAggregateInput = {
    progress?: SortOrder
  }

  export type TechStackTypeListRelationFilter = {
    every?: techStackTypeWhereInput
    some?: techStackTypeWhereInput
    none?: techStackTypeWhereInput
  }

  export type techStackTypeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type techStackCountOrderByAggregateInput = {
    id?: SortOrder
    stack?: SortOrder
    bgColor?: SortOrder
    imgUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type techStackMaxOrderByAggregateInput = {
    id?: SortOrder
    stack?: SortOrder
    bgColor?: SortOrder
    imgUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type techStackMinOrderByAggregateInput = {
    id?: SortOrder
    stack?: SortOrder
    bgColor?: SortOrder
    imgUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumdevTypesNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.devTypes | EnumdevTypesFieldRefInput<$PrismaModel> | null
    in?: $Enums.devTypes[] | ListEnumdevTypesFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.devTypes[] | ListEnumdevTypesFieldRefInput<$PrismaModel> | null
    not?: NestedEnumdevTypesNullableFilter<$PrismaModel> | $Enums.devTypes | null
  }

  export type TechStackNullableScalarRelationFilter = {
    is?: techStackWhereInput | null
    isNot?: techStackWhereInput | null
  }

  export type techStackTypeCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    techStackId?: SortOrder
  }

  export type techStackTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    techStackId?: SortOrder
  }

  export type techStackTypeMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    techStackId?: SortOrder
  }

  export type EnumdevTypesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.devTypes | EnumdevTypesFieldRefInput<$PrismaModel> | null
    in?: $Enums.devTypes[] | ListEnumdevTypesFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.devTypes[] | ListEnumdevTypesFieldRefInput<$PrismaModel> | null
    not?: NestedEnumdevTypesNullableWithAggregatesFilter<$PrismaModel> | $Enums.devTypes | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumdevTypesNullableFilter<$PrismaModel>
    _max?: NestedEnumdevTypesNullableFilter<$PrismaModel>
  }

  export type personalCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type personalMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type personalMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type sourcesCreateNestedManyWithoutUsersInput = {
    create?: XOR<sourcesCreateWithoutUsersInput, sourcesUncheckedCreateWithoutUsersInput> | sourcesCreateWithoutUsersInput[] | sourcesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: sourcesCreateOrConnectWithoutUsersInput | sourcesCreateOrConnectWithoutUsersInput[]
    createMany?: sourcesCreateManyUsersInputEnvelope
    connect?: sourcesWhereUniqueInput | sourcesWhereUniqueInput[]
  }

  export type typesCreateNestedManyWithoutUsersInput = {
    create?: XOR<typesCreateWithoutUsersInput, typesUncheckedCreateWithoutUsersInput> | typesCreateWithoutUsersInput[] | typesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: typesCreateOrConnectWithoutUsersInput | typesCreateOrConnectWithoutUsersInput[]
    createMany?: typesCreateManyUsersInputEnvelope
    connect?: typesWhereUniqueInput | typesWhereUniqueInput[]
  }

  export type sourcesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<sourcesCreateWithoutUsersInput, sourcesUncheckedCreateWithoutUsersInput> | sourcesCreateWithoutUsersInput[] | sourcesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: sourcesCreateOrConnectWithoutUsersInput | sourcesCreateOrConnectWithoutUsersInput[]
    createMany?: sourcesCreateManyUsersInputEnvelope
    connect?: sourcesWhereUniqueInput | sourcesWhereUniqueInput[]
  }

  export type typesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<typesCreateWithoutUsersInput, typesUncheckedCreateWithoutUsersInput> | typesCreateWithoutUsersInput[] | typesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: typesCreateOrConnectWithoutUsersInput | typesCreateOrConnectWithoutUsersInput[]
    createMany?: typesCreateManyUsersInputEnvelope
    connect?: typesWhereUniqueInput | typesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type sourcesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<sourcesCreateWithoutUsersInput, sourcesUncheckedCreateWithoutUsersInput> | sourcesCreateWithoutUsersInput[] | sourcesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: sourcesCreateOrConnectWithoutUsersInput | sourcesCreateOrConnectWithoutUsersInput[]
    upsert?: sourcesUpsertWithWhereUniqueWithoutUsersInput | sourcesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: sourcesCreateManyUsersInputEnvelope
    set?: sourcesWhereUniqueInput | sourcesWhereUniqueInput[]
    disconnect?: sourcesWhereUniqueInput | sourcesWhereUniqueInput[]
    delete?: sourcesWhereUniqueInput | sourcesWhereUniqueInput[]
    connect?: sourcesWhereUniqueInput | sourcesWhereUniqueInput[]
    update?: sourcesUpdateWithWhereUniqueWithoutUsersInput | sourcesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: sourcesUpdateManyWithWhereWithoutUsersInput | sourcesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: sourcesScalarWhereInput | sourcesScalarWhereInput[]
  }

  export type typesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<typesCreateWithoutUsersInput, typesUncheckedCreateWithoutUsersInput> | typesCreateWithoutUsersInput[] | typesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: typesCreateOrConnectWithoutUsersInput | typesCreateOrConnectWithoutUsersInput[]
    upsert?: typesUpsertWithWhereUniqueWithoutUsersInput | typesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: typesCreateManyUsersInputEnvelope
    set?: typesWhereUniqueInput | typesWhereUniqueInput[]
    disconnect?: typesWhereUniqueInput | typesWhereUniqueInput[]
    delete?: typesWhereUniqueInput | typesWhereUniqueInput[]
    connect?: typesWhereUniqueInput | typesWhereUniqueInput[]
    update?: typesUpdateWithWhereUniqueWithoutUsersInput | typesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: typesUpdateManyWithWhereWithoutUsersInput | typesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: typesScalarWhereInput | typesScalarWhereInput[]
  }

  export type sourcesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<sourcesCreateWithoutUsersInput, sourcesUncheckedCreateWithoutUsersInput> | sourcesCreateWithoutUsersInput[] | sourcesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: sourcesCreateOrConnectWithoutUsersInput | sourcesCreateOrConnectWithoutUsersInput[]
    upsert?: sourcesUpsertWithWhereUniqueWithoutUsersInput | sourcesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: sourcesCreateManyUsersInputEnvelope
    set?: sourcesWhereUniqueInput | sourcesWhereUniqueInput[]
    disconnect?: sourcesWhereUniqueInput | sourcesWhereUniqueInput[]
    delete?: sourcesWhereUniqueInput | sourcesWhereUniqueInput[]
    connect?: sourcesWhereUniqueInput | sourcesWhereUniqueInput[]
    update?: sourcesUpdateWithWhereUniqueWithoutUsersInput | sourcesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: sourcesUpdateManyWithWhereWithoutUsersInput | sourcesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: sourcesScalarWhereInput | sourcesScalarWhereInput[]
  }

  export type typesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<typesCreateWithoutUsersInput, typesUncheckedCreateWithoutUsersInput> | typesCreateWithoutUsersInput[] | typesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: typesCreateOrConnectWithoutUsersInput | typesCreateOrConnectWithoutUsersInput[]
    upsert?: typesUpsertWithWhereUniqueWithoutUsersInput | typesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: typesCreateManyUsersInputEnvelope
    set?: typesWhereUniqueInput | typesWhereUniqueInput[]
    disconnect?: typesWhereUniqueInput | typesWhereUniqueInput[]
    delete?: typesWhereUniqueInput | typesWhereUniqueInput[]
    connect?: typesWhereUniqueInput | typesWhereUniqueInput[]
    update?: typesUpdateWithWhereUniqueWithoutUsersInput | typesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: typesUpdateManyWithWhereWithoutUsersInput | typesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: typesScalarWhereInput | typesScalarWhereInput[]
  }

  export type sourcesCreateNestedManyWithoutProjectInput = {
    create?: XOR<sourcesCreateWithoutProjectInput, sourcesUncheckedCreateWithoutProjectInput> | sourcesCreateWithoutProjectInput[] | sourcesUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: sourcesCreateOrConnectWithoutProjectInput | sourcesCreateOrConnectWithoutProjectInput[]
    createMany?: sourcesCreateManyProjectInputEnvelope
    connect?: sourcesWhereUniqueInput | sourcesWhereUniqueInput[]
  }

  export type typesCreateNestedManyWithoutProjectInput = {
    create?: XOR<typesCreateWithoutProjectInput, typesUncheckedCreateWithoutProjectInput> | typesCreateWithoutProjectInput[] | typesUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: typesCreateOrConnectWithoutProjectInput | typesCreateOrConnectWithoutProjectInput[]
    createMany?: typesCreateManyProjectInputEnvelope
    connect?: typesWhereUniqueInput | typesWhereUniqueInput[]
  }

  export type projectStackCreateNestedManyWithoutProjectInput = {
    create?: XOR<projectStackCreateWithoutProjectInput, projectStackUncheckedCreateWithoutProjectInput> | projectStackCreateWithoutProjectInput[] | projectStackUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: projectStackCreateOrConnectWithoutProjectInput | projectStackCreateOrConnectWithoutProjectInput[]
    createMany?: projectStackCreateManyProjectInputEnvelope
    connect?: projectStackWhereUniqueInput | projectStackWhereUniqueInput[]
  }

  export type sourcesUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<sourcesCreateWithoutProjectInput, sourcesUncheckedCreateWithoutProjectInput> | sourcesCreateWithoutProjectInput[] | sourcesUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: sourcesCreateOrConnectWithoutProjectInput | sourcesCreateOrConnectWithoutProjectInput[]
    createMany?: sourcesCreateManyProjectInputEnvelope
    connect?: sourcesWhereUniqueInput | sourcesWhereUniqueInput[]
  }

  export type typesUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<typesCreateWithoutProjectInput, typesUncheckedCreateWithoutProjectInput> | typesCreateWithoutProjectInput[] | typesUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: typesCreateOrConnectWithoutProjectInput | typesCreateOrConnectWithoutProjectInput[]
    createMany?: typesCreateManyProjectInputEnvelope
    connect?: typesWhereUniqueInput | typesWhereUniqueInput[]
  }

  export type projectStackUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<projectStackCreateWithoutProjectInput, projectStackUncheckedCreateWithoutProjectInput> | projectStackCreateWithoutProjectInput[] | projectStackUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: projectStackCreateOrConnectWithoutProjectInput | projectStackCreateOrConnectWithoutProjectInput[]
    createMany?: projectStackCreateManyProjectInputEnvelope
    connect?: projectStackWhereUniqueInput | projectStackWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type sourcesUpdateManyWithoutProjectNestedInput = {
    create?: XOR<sourcesCreateWithoutProjectInput, sourcesUncheckedCreateWithoutProjectInput> | sourcesCreateWithoutProjectInput[] | sourcesUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: sourcesCreateOrConnectWithoutProjectInput | sourcesCreateOrConnectWithoutProjectInput[]
    upsert?: sourcesUpsertWithWhereUniqueWithoutProjectInput | sourcesUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: sourcesCreateManyProjectInputEnvelope
    set?: sourcesWhereUniqueInput | sourcesWhereUniqueInput[]
    disconnect?: sourcesWhereUniqueInput | sourcesWhereUniqueInput[]
    delete?: sourcesWhereUniqueInput | sourcesWhereUniqueInput[]
    connect?: sourcesWhereUniqueInput | sourcesWhereUniqueInput[]
    update?: sourcesUpdateWithWhereUniqueWithoutProjectInput | sourcesUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: sourcesUpdateManyWithWhereWithoutProjectInput | sourcesUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: sourcesScalarWhereInput | sourcesScalarWhereInput[]
  }

  export type typesUpdateManyWithoutProjectNestedInput = {
    create?: XOR<typesCreateWithoutProjectInput, typesUncheckedCreateWithoutProjectInput> | typesCreateWithoutProjectInput[] | typesUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: typesCreateOrConnectWithoutProjectInput | typesCreateOrConnectWithoutProjectInput[]
    upsert?: typesUpsertWithWhereUniqueWithoutProjectInput | typesUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: typesCreateManyProjectInputEnvelope
    set?: typesWhereUniqueInput | typesWhereUniqueInput[]
    disconnect?: typesWhereUniqueInput | typesWhereUniqueInput[]
    delete?: typesWhereUniqueInput | typesWhereUniqueInput[]
    connect?: typesWhereUniqueInput | typesWhereUniqueInput[]
    update?: typesUpdateWithWhereUniqueWithoutProjectInput | typesUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: typesUpdateManyWithWhereWithoutProjectInput | typesUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: typesScalarWhereInput | typesScalarWhereInput[]
  }

  export type projectStackUpdateManyWithoutProjectNestedInput = {
    create?: XOR<projectStackCreateWithoutProjectInput, projectStackUncheckedCreateWithoutProjectInput> | projectStackCreateWithoutProjectInput[] | projectStackUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: projectStackCreateOrConnectWithoutProjectInput | projectStackCreateOrConnectWithoutProjectInput[]
    upsert?: projectStackUpsertWithWhereUniqueWithoutProjectInput | projectStackUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: projectStackCreateManyProjectInputEnvelope
    set?: projectStackWhereUniqueInput | projectStackWhereUniqueInput[]
    disconnect?: projectStackWhereUniqueInput | projectStackWhereUniqueInput[]
    delete?: projectStackWhereUniqueInput | projectStackWhereUniqueInput[]
    connect?: projectStackWhereUniqueInput | projectStackWhereUniqueInput[]
    update?: projectStackUpdateWithWhereUniqueWithoutProjectInput | projectStackUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: projectStackUpdateManyWithWhereWithoutProjectInput | projectStackUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: projectStackScalarWhereInput | projectStackScalarWhereInput[]
  }

  export type sourcesUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<sourcesCreateWithoutProjectInput, sourcesUncheckedCreateWithoutProjectInput> | sourcesCreateWithoutProjectInput[] | sourcesUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: sourcesCreateOrConnectWithoutProjectInput | sourcesCreateOrConnectWithoutProjectInput[]
    upsert?: sourcesUpsertWithWhereUniqueWithoutProjectInput | sourcesUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: sourcesCreateManyProjectInputEnvelope
    set?: sourcesWhereUniqueInput | sourcesWhereUniqueInput[]
    disconnect?: sourcesWhereUniqueInput | sourcesWhereUniqueInput[]
    delete?: sourcesWhereUniqueInput | sourcesWhereUniqueInput[]
    connect?: sourcesWhereUniqueInput | sourcesWhereUniqueInput[]
    update?: sourcesUpdateWithWhereUniqueWithoutProjectInput | sourcesUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: sourcesUpdateManyWithWhereWithoutProjectInput | sourcesUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: sourcesScalarWhereInput | sourcesScalarWhereInput[]
  }

  export type typesUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<typesCreateWithoutProjectInput, typesUncheckedCreateWithoutProjectInput> | typesCreateWithoutProjectInput[] | typesUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: typesCreateOrConnectWithoutProjectInput | typesCreateOrConnectWithoutProjectInput[]
    upsert?: typesUpsertWithWhereUniqueWithoutProjectInput | typesUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: typesCreateManyProjectInputEnvelope
    set?: typesWhereUniqueInput | typesWhereUniqueInput[]
    disconnect?: typesWhereUniqueInput | typesWhereUniqueInput[]
    delete?: typesWhereUniqueInput | typesWhereUniqueInput[]
    connect?: typesWhereUniqueInput | typesWhereUniqueInput[]
    update?: typesUpdateWithWhereUniqueWithoutProjectInput | typesUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: typesUpdateManyWithWhereWithoutProjectInput | typesUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: typesScalarWhereInput | typesScalarWhereInput[]
  }

  export type projectStackUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<projectStackCreateWithoutProjectInput, projectStackUncheckedCreateWithoutProjectInput> | projectStackCreateWithoutProjectInput[] | projectStackUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: projectStackCreateOrConnectWithoutProjectInput | projectStackCreateOrConnectWithoutProjectInput[]
    upsert?: projectStackUpsertWithWhereUniqueWithoutProjectInput | projectStackUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: projectStackCreateManyProjectInputEnvelope
    set?: projectStackWhereUniqueInput | projectStackWhereUniqueInput[]
    disconnect?: projectStackWhereUniqueInput | projectStackWhereUniqueInput[]
    delete?: projectStackWhereUniqueInput | projectStackWhereUniqueInput[]
    connect?: projectStackWhereUniqueInput | projectStackWhereUniqueInput[]
    update?: projectStackUpdateWithWhereUniqueWithoutProjectInput | projectStackUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: projectStackUpdateManyWithWhereWithoutProjectInput | projectStackUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: projectStackScalarWhereInput | projectStackScalarWhereInput[]
  }

  export type projectsCreateNestedOneWithoutSourceInput = {
    create?: XOR<projectsCreateWithoutSourceInput, projectsUncheckedCreateWithoutSourceInput>
    connectOrCreate?: projectsCreateOrConnectWithoutSourceInput
    connect?: projectsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutSourcesInput = {
    create?: XOR<usersCreateWithoutSourcesInput, usersUncheckedCreateWithoutSourcesInput>
    connectOrCreate?: usersCreateOrConnectWithoutSourcesInput
    connect?: usersWhereUniqueInput
  }

  export type projectsUpdateOneRequiredWithoutSourceNestedInput = {
    create?: XOR<projectsCreateWithoutSourceInput, projectsUncheckedCreateWithoutSourceInput>
    connectOrCreate?: projectsCreateOrConnectWithoutSourceInput
    upsert?: projectsUpsertWithoutSourceInput
    connect?: projectsWhereUniqueInput
    update?: XOR<XOR<projectsUpdateToOneWithWhereWithoutSourceInput, projectsUpdateWithoutSourceInput>, projectsUncheckedUpdateWithoutSourceInput>
  }

  export type usersUpdateOneWithoutSourcesNestedInput = {
    create?: XOR<usersCreateWithoutSourcesInput, usersUncheckedCreateWithoutSourcesInput>
    connectOrCreate?: usersCreateOrConnectWithoutSourcesInput
    upsert?: usersUpsertWithoutSourcesInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutSourcesInput, usersUpdateWithoutSourcesInput>, usersUncheckedUpdateWithoutSourcesInput>
  }

  export type projectsCreateNestedOneWithoutProjectStacksInput = {
    create?: XOR<projectsCreateWithoutProjectStacksInput, projectsUncheckedCreateWithoutProjectStacksInput>
    connectOrCreate?: projectsCreateOrConnectWithoutProjectStacksInput
    connect?: projectsWhereUniqueInput
  }

  export type projectsUpdateOneRequiredWithoutProjectStacksNestedInput = {
    create?: XOR<projectsCreateWithoutProjectStacksInput, projectsUncheckedCreateWithoutProjectStacksInput>
    connectOrCreate?: projectsCreateOrConnectWithoutProjectStacksInput
    upsert?: projectsUpsertWithoutProjectStacksInput
    connect?: projectsWhereUniqueInput
    update?: XOR<XOR<projectsUpdateToOneWithWhereWithoutProjectStacksInput, projectsUpdateWithoutProjectStacksInput>, projectsUncheckedUpdateWithoutProjectStacksInput>
  }

  export type projectsCreateNestedOneWithoutTypeInput = {
    create?: XOR<projectsCreateWithoutTypeInput, projectsUncheckedCreateWithoutTypeInput>
    connectOrCreate?: projectsCreateOrConnectWithoutTypeInput
    connect?: projectsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutTypesInput = {
    create?: XOR<usersCreateWithoutTypesInput, usersUncheckedCreateWithoutTypesInput>
    connectOrCreate?: usersCreateOrConnectWithoutTypesInput
    connect?: usersWhereUniqueInput
  }

  export type EnumTypesFieldUpdateOperationsInput = {
    set?: $Enums.Types
  }

  export type projectsUpdateOneRequiredWithoutTypeNestedInput = {
    create?: XOR<projectsCreateWithoutTypeInput, projectsUncheckedCreateWithoutTypeInput>
    connectOrCreate?: projectsCreateOrConnectWithoutTypeInput
    upsert?: projectsUpsertWithoutTypeInput
    connect?: projectsWhereUniqueInput
    update?: XOR<XOR<projectsUpdateToOneWithWhereWithoutTypeInput, projectsUpdateWithoutTypeInput>, projectsUncheckedUpdateWithoutTypeInput>
  }

  export type usersUpdateOneWithoutTypesNestedInput = {
    create?: XOR<usersCreateWithoutTypesInput, usersUncheckedCreateWithoutTypesInput>
    connectOrCreate?: usersCreateOrConnectWithoutTypesInput
    upsert?: usersUpsertWithoutTypesInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutTypesInput, usersUpdateWithoutTypesInput>, usersUncheckedUpdateWithoutTypesInput>
  }

  export type education_descriptionCreateNestedManyWithoutEducationInput = {
    create?: XOR<education_descriptionCreateWithoutEducationInput, education_descriptionUncheckedCreateWithoutEducationInput> | education_descriptionCreateWithoutEducationInput[] | education_descriptionUncheckedCreateWithoutEducationInput[]
    connectOrCreate?: education_descriptionCreateOrConnectWithoutEducationInput | education_descriptionCreateOrConnectWithoutEducationInput[]
    createMany?: education_descriptionCreateManyEducationInputEnvelope
    connect?: education_descriptionWhereUniqueInput | education_descriptionWhereUniqueInput[]
  }

  export type education_descriptionUncheckedCreateNestedManyWithoutEducationInput = {
    create?: XOR<education_descriptionCreateWithoutEducationInput, education_descriptionUncheckedCreateWithoutEducationInput> | education_descriptionCreateWithoutEducationInput[] | education_descriptionUncheckedCreateWithoutEducationInput[]
    connectOrCreate?: education_descriptionCreateOrConnectWithoutEducationInput | education_descriptionCreateOrConnectWithoutEducationInput[]
    createMany?: education_descriptionCreateManyEducationInputEnvelope
    connect?: education_descriptionWhereUniqueInput | education_descriptionWhereUniqueInput[]
  }

  export type education_descriptionUpdateManyWithoutEducationNestedInput = {
    create?: XOR<education_descriptionCreateWithoutEducationInput, education_descriptionUncheckedCreateWithoutEducationInput> | education_descriptionCreateWithoutEducationInput[] | education_descriptionUncheckedCreateWithoutEducationInput[]
    connectOrCreate?: education_descriptionCreateOrConnectWithoutEducationInput | education_descriptionCreateOrConnectWithoutEducationInput[]
    upsert?: education_descriptionUpsertWithWhereUniqueWithoutEducationInput | education_descriptionUpsertWithWhereUniqueWithoutEducationInput[]
    createMany?: education_descriptionCreateManyEducationInputEnvelope
    set?: education_descriptionWhereUniqueInput | education_descriptionWhereUniqueInput[]
    disconnect?: education_descriptionWhereUniqueInput | education_descriptionWhereUniqueInput[]
    delete?: education_descriptionWhereUniqueInput | education_descriptionWhereUniqueInput[]
    connect?: education_descriptionWhereUniqueInput | education_descriptionWhereUniqueInput[]
    update?: education_descriptionUpdateWithWhereUniqueWithoutEducationInput | education_descriptionUpdateWithWhereUniqueWithoutEducationInput[]
    updateMany?: education_descriptionUpdateManyWithWhereWithoutEducationInput | education_descriptionUpdateManyWithWhereWithoutEducationInput[]
    deleteMany?: education_descriptionScalarWhereInput | education_descriptionScalarWhereInput[]
  }

  export type education_descriptionUncheckedUpdateManyWithoutEducationNestedInput = {
    create?: XOR<education_descriptionCreateWithoutEducationInput, education_descriptionUncheckedCreateWithoutEducationInput> | education_descriptionCreateWithoutEducationInput[] | education_descriptionUncheckedCreateWithoutEducationInput[]
    connectOrCreate?: education_descriptionCreateOrConnectWithoutEducationInput | education_descriptionCreateOrConnectWithoutEducationInput[]
    upsert?: education_descriptionUpsertWithWhereUniqueWithoutEducationInput | education_descriptionUpsertWithWhereUniqueWithoutEducationInput[]
    createMany?: education_descriptionCreateManyEducationInputEnvelope
    set?: education_descriptionWhereUniqueInput | education_descriptionWhereUniqueInput[]
    disconnect?: education_descriptionWhereUniqueInput | education_descriptionWhereUniqueInput[]
    delete?: education_descriptionWhereUniqueInput | education_descriptionWhereUniqueInput[]
    connect?: education_descriptionWhereUniqueInput | education_descriptionWhereUniqueInput[]
    update?: education_descriptionUpdateWithWhereUniqueWithoutEducationInput | education_descriptionUpdateWithWhereUniqueWithoutEducationInput[]
    updateMany?: education_descriptionUpdateManyWithWhereWithoutEducationInput | education_descriptionUpdateManyWithWhereWithoutEducationInput[]
    deleteMany?: education_descriptionScalarWhereInput | education_descriptionScalarWhereInput[]
  }

  export type educationCreateNestedOneWithoutEducationDescriptionsInput = {
    create?: XOR<educationCreateWithoutEducationDescriptionsInput, educationUncheckedCreateWithoutEducationDescriptionsInput>
    connectOrCreate?: educationCreateOrConnectWithoutEducationDescriptionsInput
    connect?: educationWhereUniqueInput
  }

  export type educationUpdateOneRequiredWithoutEducationDescriptionsNestedInput = {
    create?: XOR<educationCreateWithoutEducationDescriptionsInput, educationUncheckedCreateWithoutEducationDescriptionsInput>
    connectOrCreate?: educationCreateOrConnectWithoutEducationDescriptionsInput
    upsert?: educationUpsertWithoutEducationDescriptionsInput
    connect?: educationWhereUniqueInput
    update?: XOR<XOR<educationUpdateToOneWithWhereWithoutEducationDescriptionsInput, educationUpdateWithoutEducationDescriptionsInput>, educationUncheckedUpdateWithoutEducationDescriptionsInput>
  }

  export type experience_descriptionCreateNestedManyWithoutExperienceInput = {
    create?: XOR<experience_descriptionCreateWithoutExperienceInput, experience_descriptionUncheckedCreateWithoutExperienceInput> | experience_descriptionCreateWithoutExperienceInput[] | experience_descriptionUncheckedCreateWithoutExperienceInput[]
    connectOrCreate?: experience_descriptionCreateOrConnectWithoutExperienceInput | experience_descriptionCreateOrConnectWithoutExperienceInput[]
    createMany?: experience_descriptionCreateManyExperienceInputEnvelope
    connect?: experience_descriptionWhereUniqueInput | experience_descriptionWhereUniqueInput[]
  }

  export type experience_descriptionUncheckedCreateNestedManyWithoutExperienceInput = {
    create?: XOR<experience_descriptionCreateWithoutExperienceInput, experience_descriptionUncheckedCreateWithoutExperienceInput> | experience_descriptionCreateWithoutExperienceInput[] | experience_descriptionUncheckedCreateWithoutExperienceInput[]
    connectOrCreate?: experience_descriptionCreateOrConnectWithoutExperienceInput | experience_descriptionCreateOrConnectWithoutExperienceInput[]
    createMany?: experience_descriptionCreateManyExperienceInputEnvelope
    connect?: experience_descriptionWhereUniqueInput | experience_descriptionWhereUniqueInput[]
  }

  export type experience_descriptionUpdateManyWithoutExperienceNestedInput = {
    create?: XOR<experience_descriptionCreateWithoutExperienceInput, experience_descriptionUncheckedCreateWithoutExperienceInput> | experience_descriptionCreateWithoutExperienceInput[] | experience_descriptionUncheckedCreateWithoutExperienceInput[]
    connectOrCreate?: experience_descriptionCreateOrConnectWithoutExperienceInput | experience_descriptionCreateOrConnectWithoutExperienceInput[]
    upsert?: experience_descriptionUpsertWithWhereUniqueWithoutExperienceInput | experience_descriptionUpsertWithWhereUniqueWithoutExperienceInput[]
    createMany?: experience_descriptionCreateManyExperienceInputEnvelope
    set?: experience_descriptionWhereUniqueInput | experience_descriptionWhereUniqueInput[]
    disconnect?: experience_descriptionWhereUniqueInput | experience_descriptionWhereUniqueInput[]
    delete?: experience_descriptionWhereUniqueInput | experience_descriptionWhereUniqueInput[]
    connect?: experience_descriptionWhereUniqueInput | experience_descriptionWhereUniqueInput[]
    update?: experience_descriptionUpdateWithWhereUniqueWithoutExperienceInput | experience_descriptionUpdateWithWhereUniqueWithoutExperienceInput[]
    updateMany?: experience_descriptionUpdateManyWithWhereWithoutExperienceInput | experience_descriptionUpdateManyWithWhereWithoutExperienceInput[]
    deleteMany?: experience_descriptionScalarWhereInput | experience_descriptionScalarWhereInput[]
  }

  export type experience_descriptionUncheckedUpdateManyWithoutExperienceNestedInput = {
    create?: XOR<experience_descriptionCreateWithoutExperienceInput, experience_descriptionUncheckedCreateWithoutExperienceInput> | experience_descriptionCreateWithoutExperienceInput[] | experience_descriptionUncheckedCreateWithoutExperienceInput[]
    connectOrCreate?: experience_descriptionCreateOrConnectWithoutExperienceInput | experience_descriptionCreateOrConnectWithoutExperienceInput[]
    upsert?: experience_descriptionUpsertWithWhereUniqueWithoutExperienceInput | experience_descriptionUpsertWithWhereUniqueWithoutExperienceInput[]
    createMany?: experience_descriptionCreateManyExperienceInputEnvelope
    set?: experience_descriptionWhereUniqueInput | experience_descriptionWhereUniqueInput[]
    disconnect?: experience_descriptionWhereUniqueInput | experience_descriptionWhereUniqueInput[]
    delete?: experience_descriptionWhereUniqueInput | experience_descriptionWhereUniqueInput[]
    connect?: experience_descriptionWhereUniqueInput | experience_descriptionWhereUniqueInput[]
    update?: experience_descriptionUpdateWithWhereUniqueWithoutExperienceInput | experience_descriptionUpdateWithWhereUniqueWithoutExperienceInput[]
    updateMany?: experience_descriptionUpdateManyWithWhereWithoutExperienceInput | experience_descriptionUpdateManyWithWhereWithoutExperienceInput[]
    deleteMany?: experience_descriptionScalarWhereInput | experience_descriptionScalarWhereInput[]
  }

  export type experienceCreateNestedOneWithoutExperienceDescriptionsInput = {
    create?: XOR<experienceCreateWithoutExperienceDescriptionsInput, experienceUncheckedCreateWithoutExperienceDescriptionsInput>
    connectOrCreate?: experienceCreateOrConnectWithoutExperienceDescriptionsInput
    connect?: experienceWhereUniqueInput
  }

  export type experienceUpdateOneRequiredWithoutExperienceDescriptionsNestedInput = {
    create?: XOR<experienceCreateWithoutExperienceDescriptionsInput, experienceUncheckedCreateWithoutExperienceDescriptionsInput>
    connectOrCreate?: experienceCreateOrConnectWithoutExperienceDescriptionsInput
    upsert?: experienceUpsertWithoutExperienceDescriptionsInput
    connect?: experienceWhereUniqueInput
    update?: XOR<XOR<experienceUpdateToOneWithWhereWithoutExperienceDescriptionsInput, experienceUpdateWithoutExperienceDescriptionsInput>, experienceUncheckedUpdateWithoutExperienceDescriptionsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type techStackTypeCreateNestedManyWithoutTechStackInput = {
    create?: XOR<techStackTypeCreateWithoutTechStackInput, techStackTypeUncheckedCreateWithoutTechStackInput> | techStackTypeCreateWithoutTechStackInput[] | techStackTypeUncheckedCreateWithoutTechStackInput[]
    connectOrCreate?: techStackTypeCreateOrConnectWithoutTechStackInput | techStackTypeCreateOrConnectWithoutTechStackInput[]
    createMany?: techStackTypeCreateManyTechStackInputEnvelope
    connect?: techStackTypeWhereUniqueInput | techStackTypeWhereUniqueInput[]
  }

  export type techStackTypeUncheckedCreateNestedManyWithoutTechStackInput = {
    create?: XOR<techStackTypeCreateWithoutTechStackInput, techStackTypeUncheckedCreateWithoutTechStackInput> | techStackTypeCreateWithoutTechStackInput[] | techStackTypeUncheckedCreateWithoutTechStackInput[]
    connectOrCreate?: techStackTypeCreateOrConnectWithoutTechStackInput | techStackTypeCreateOrConnectWithoutTechStackInput[]
    createMany?: techStackTypeCreateManyTechStackInputEnvelope
    connect?: techStackTypeWhereUniqueInput | techStackTypeWhereUniqueInput[]
  }

  export type techStackTypeUpdateManyWithoutTechStackNestedInput = {
    create?: XOR<techStackTypeCreateWithoutTechStackInput, techStackTypeUncheckedCreateWithoutTechStackInput> | techStackTypeCreateWithoutTechStackInput[] | techStackTypeUncheckedCreateWithoutTechStackInput[]
    connectOrCreate?: techStackTypeCreateOrConnectWithoutTechStackInput | techStackTypeCreateOrConnectWithoutTechStackInput[]
    upsert?: techStackTypeUpsertWithWhereUniqueWithoutTechStackInput | techStackTypeUpsertWithWhereUniqueWithoutTechStackInput[]
    createMany?: techStackTypeCreateManyTechStackInputEnvelope
    set?: techStackTypeWhereUniqueInput | techStackTypeWhereUniqueInput[]
    disconnect?: techStackTypeWhereUniqueInput | techStackTypeWhereUniqueInput[]
    delete?: techStackTypeWhereUniqueInput | techStackTypeWhereUniqueInput[]
    connect?: techStackTypeWhereUniqueInput | techStackTypeWhereUniqueInput[]
    update?: techStackTypeUpdateWithWhereUniqueWithoutTechStackInput | techStackTypeUpdateWithWhereUniqueWithoutTechStackInput[]
    updateMany?: techStackTypeUpdateManyWithWhereWithoutTechStackInput | techStackTypeUpdateManyWithWhereWithoutTechStackInput[]
    deleteMany?: techStackTypeScalarWhereInput | techStackTypeScalarWhereInput[]
  }

  export type techStackTypeUncheckedUpdateManyWithoutTechStackNestedInput = {
    create?: XOR<techStackTypeCreateWithoutTechStackInput, techStackTypeUncheckedCreateWithoutTechStackInput> | techStackTypeCreateWithoutTechStackInput[] | techStackTypeUncheckedCreateWithoutTechStackInput[]
    connectOrCreate?: techStackTypeCreateOrConnectWithoutTechStackInput | techStackTypeCreateOrConnectWithoutTechStackInput[]
    upsert?: techStackTypeUpsertWithWhereUniqueWithoutTechStackInput | techStackTypeUpsertWithWhereUniqueWithoutTechStackInput[]
    createMany?: techStackTypeCreateManyTechStackInputEnvelope
    set?: techStackTypeWhereUniqueInput | techStackTypeWhereUniqueInput[]
    disconnect?: techStackTypeWhereUniqueInput | techStackTypeWhereUniqueInput[]
    delete?: techStackTypeWhereUniqueInput | techStackTypeWhereUniqueInput[]
    connect?: techStackTypeWhereUniqueInput | techStackTypeWhereUniqueInput[]
    update?: techStackTypeUpdateWithWhereUniqueWithoutTechStackInput | techStackTypeUpdateWithWhereUniqueWithoutTechStackInput[]
    updateMany?: techStackTypeUpdateManyWithWhereWithoutTechStackInput | techStackTypeUpdateManyWithWhereWithoutTechStackInput[]
    deleteMany?: techStackTypeScalarWhereInput | techStackTypeScalarWhereInput[]
  }

  export type techStackCreateNestedOneWithoutTechstacktypeInput = {
    create?: XOR<techStackCreateWithoutTechstacktypeInput, techStackUncheckedCreateWithoutTechstacktypeInput>
    connectOrCreate?: techStackCreateOrConnectWithoutTechstacktypeInput
    connect?: techStackWhereUniqueInput
  }

  export type NullableEnumdevTypesFieldUpdateOperationsInput = {
    set?: $Enums.devTypes | null
  }

  export type techStackUpdateOneWithoutTechstacktypeNestedInput = {
    create?: XOR<techStackCreateWithoutTechstacktypeInput, techStackUncheckedCreateWithoutTechstacktypeInput>
    connectOrCreate?: techStackCreateOrConnectWithoutTechstacktypeInput
    upsert?: techStackUpsertWithoutTechstacktypeInput
    disconnect?: techStackWhereInput | boolean
    delete?: techStackWhereInput | boolean
    connect?: techStackWhereUniqueInput
    update?: XOR<XOR<techStackUpdateToOneWithWhereWithoutTechstacktypeInput, techStackUpdateWithoutTechstacktypeInput>, techStackUncheckedUpdateWithoutTechstacktypeInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumTypesFilter<$PrismaModel = never> = {
    equals?: $Enums.Types | EnumTypesFieldRefInput<$PrismaModel>
    in?: $Enums.Types[] | ListEnumTypesFieldRefInput<$PrismaModel>
    notIn?: $Enums.Types[] | ListEnumTypesFieldRefInput<$PrismaModel>
    not?: NestedEnumTypesFilter<$PrismaModel> | $Enums.Types
  }

  export type NestedEnumTypesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Types | EnumTypesFieldRefInput<$PrismaModel>
    in?: $Enums.Types[] | ListEnumTypesFieldRefInput<$PrismaModel>
    notIn?: $Enums.Types[] | ListEnumTypesFieldRefInput<$PrismaModel>
    not?: NestedEnumTypesWithAggregatesFilter<$PrismaModel> | $Enums.Types
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypesFilter<$PrismaModel>
    _max?: NestedEnumTypesFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumdevTypesNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.devTypes | EnumdevTypesFieldRefInput<$PrismaModel> | null
    in?: $Enums.devTypes[] | ListEnumdevTypesFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.devTypes[] | ListEnumdevTypesFieldRefInput<$PrismaModel> | null
    not?: NestedEnumdevTypesNullableFilter<$PrismaModel> | $Enums.devTypes | null
  }

  export type NestedEnumdevTypesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.devTypes | EnumdevTypesFieldRefInput<$PrismaModel> | null
    in?: $Enums.devTypes[] | ListEnumdevTypesFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.devTypes[] | ListEnumdevTypesFieldRefInput<$PrismaModel> | null
    not?: NestedEnumdevTypesNullableWithAggregatesFilter<$PrismaModel> | $Enums.devTypes | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumdevTypesNullableFilter<$PrismaModel>
    _max?: NestedEnumdevTypesNullableFilter<$PrismaModel>
  }

  export type sourcesCreateWithoutUsersInput = {
    id?: string
    title?: string | null
    description?: string | null
    imgUrl?: string | null
    imgPath?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    project: projectsCreateNestedOneWithoutSourceInput
  }

  export type sourcesUncheckedCreateWithoutUsersInput = {
    id?: string
    title?: string | null
    description?: string | null
    imgUrl?: string | null
    imgPath?: string | null
    projectId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type sourcesCreateOrConnectWithoutUsersInput = {
    where: sourcesWhereUniqueInput
    create: XOR<sourcesCreateWithoutUsersInput, sourcesUncheckedCreateWithoutUsersInput>
  }

  export type sourcesCreateManyUsersInputEnvelope = {
    data: sourcesCreateManyUsersInput | sourcesCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type typesCreateWithoutUsersInput = {
    id?: string
    type?: $Enums.Types
    createdAt?: Date | string
    updatedAt?: Date | string
    project: projectsCreateNestedOneWithoutTypeInput
  }

  export type typesUncheckedCreateWithoutUsersInput = {
    id?: string
    type?: $Enums.Types
    projectId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type typesCreateOrConnectWithoutUsersInput = {
    where: typesWhereUniqueInput
    create: XOR<typesCreateWithoutUsersInput, typesUncheckedCreateWithoutUsersInput>
  }

  export type typesCreateManyUsersInputEnvelope = {
    data: typesCreateManyUsersInput | typesCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type sourcesUpsertWithWhereUniqueWithoutUsersInput = {
    where: sourcesWhereUniqueInput
    update: XOR<sourcesUpdateWithoutUsersInput, sourcesUncheckedUpdateWithoutUsersInput>
    create: XOR<sourcesCreateWithoutUsersInput, sourcesUncheckedCreateWithoutUsersInput>
  }

  export type sourcesUpdateWithWhereUniqueWithoutUsersInput = {
    where: sourcesWhereUniqueInput
    data: XOR<sourcesUpdateWithoutUsersInput, sourcesUncheckedUpdateWithoutUsersInput>
  }

  export type sourcesUpdateManyWithWhereWithoutUsersInput = {
    where: sourcesScalarWhereInput
    data: XOR<sourcesUpdateManyMutationInput, sourcesUncheckedUpdateManyWithoutUsersInput>
  }

  export type sourcesScalarWhereInput = {
    AND?: sourcesScalarWhereInput | sourcesScalarWhereInput[]
    OR?: sourcesScalarWhereInput[]
    NOT?: sourcesScalarWhereInput | sourcesScalarWhereInput[]
    id?: StringFilter<"sources"> | string
    title?: StringNullableFilter<"sources"> | string | null
    description?: StringNullableFilter<"sources"> | string | null
    imgUrl?: StringNullableFilter<"sources"> | string | null
    imgPath?: StringNullableFilter<"sources"> | string | null
    projectId?: StringFilter<"sources"> | string
    createdAt?: DateTimeFilter<"sources"> | Date | string
    updatedAt?: DateTimeFilter<"sources"> | Date | string
    usersId?: StringNullableFilter<"sources"> | string | null
  }

  export type typesUpsertWithWhereUniqueWithoutUsersInput = {
    where: typesWhereUniqueInput
    update: XOR<typesUpdateWithoutUsersInput, typesUncheckedUpdateWithoutUsersInput>
    create: XOR<typesCreateWithoutUsersInput, typesUncheckedCreateWithoutUsersInput>
  }

  export type typesUpdateWithWhereUniqueWithoutUsersInput = {
    where: typesWhereUniqueInput
    data: XOR<typesUpdateWithoutUsersInput, typesUncheckedUpdateWithoutUsersInput>
  }

  export type typesUpdateManyWithWhereWithoutUsersInput = {
    where: typesScalarWhereInput
    data: XOR<typesUpdateManyMutationInput, typesUncheckedUpdateManyWithoutUsersInput>
  }

  export type typesScalarWhereInput = {
    AND?: typesScalarWhereInput | typesScalarWhereInput[]
    OR?: typesScalarWhereInput[]
    NOT?: typesScalarWhereInput | typesScalarWhereInput[]
    id?: StringFilter<"types"> | string
    type?: EnumTypesFilter<"types"> | $Enums.Types
    projectId?: StringFilter<"types"> | string
    createdAt?: DateTimeFilter<"types"> | Date | string
    updatedAt?: DateTimeFilter<"types"> | Date | string
    usersId?: StringNullableFilter<"types"> | string | null
  }

  export type sourcesCreateWithoutProjectInput = {
    id?: string
    title?: string | null
    description?: string | null
    imgUrl?: string | null
    imgPath?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: usersCreateNestedOneWithoutSourcesInput
  }

  export type sourcesUncheckedCreateWithoutProjectInput = {
    id?: string
    title?: string | null
    description?: string | null
    imgUrl?: string | null
    imgPath?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    usersId?: string | null
  }

  export type sourcesCreateOrConnectWithoutProjectInput = {
    where: sourcesWhereUniqueInput
    create: XOR<sourcesCreateWithoutProjectInput, sourcesUncheckedCreateWithoutProjectInput>
  }

  export type sourcesCreateManyProjectInputEnvelope = {
    data: sourcesCreateManyProjectInput | sourcesCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type typesCreateWithoutProjectInput = {
    id?: string
    type?: $Enums.Types
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: usersCreateNestedOneWithoutTypesInput
  }

  export type typesUncheckedCreateWithoutProjectInput = {
    id?: string
    type?: $Enums.Types
    createdAt?: Date | string
    updatedAt?: Date | string
    usersId?: string | null
  }

  export type typesCreateOrConnectWithoutProjectInput = {
    where: typesWhereUniqueInput
    create: XOR<typesCreateWithoutProjectInput, typesUncheckedCreateWithoutProjectInput>
  }

  export type typesCreateManyProjectInputEnvelope = {
    data: typesCreateManyProjectInput | typesCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type projectStackCreateWithoutProjectInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type projectStackUncheckedCreateWithoutProjectInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type projectStackCreateOrConnectWithoutProjectInput = {
    where: projectStackWhereUniqueInput
    create: XOR<projectStackCreateWithoutProjectInput, projectStackUncheckedCreateWithoutProjectInput>
  }

  export type projectStackCreateManyProjectInputEnvelope = {
    data: projectStackCreateManyProjectInput | projectStackCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type sourcesUpsertWithWhereUniqueWithoutProjectInput = {
    where: sourcesWhereUniqueInput
    update: XOR<sourcesUpdateWithoutProjectInput, sourcesUncheckedUpdateWithoutProjectInput>
    create: XOR<sourcesCreateWithoutProjectInput, sourcesUncheckedCreateWithoutProjectInput>
  }

  export type sourcesUpdateWithWhereUniqueWithoutProjectInput = {
    where: sourcesWhereUniqueInput
    data: XOR<sourcesUpdateWithoutProjectInput, sourcesUncheckedUpdateWithoutProjectInput>
  }

  export type sourcesUpdateManyWithWhereWithoutProjectInput = {
    where: sourcesScalarWhereInput
    data: XOR<sourcesUpdateManyMutationInput, sourcesUncheckedUpdateManyWithoutProjectInput>
  }

  export type typesUpsertWithWhereUniqueWithoutProjectInput = {
    where: typesWhereUniqueInput
    update: XOR<typesUpdateWithoutProjectInput, typesUncheckedUpdateWithoutProjectInput>
    create: XOR<typesCreateWithoutProjectInput, typesUncheckedCreateWithoutProjectInput>
  }

  export type typesUpdateWithWhereUniqueWithoutProjectInput = {
    where: typesWhereUniqueInput
    data: XOR<typesUpdateWithoutProjectInput, typesUncheckedUpdateWithoutProjectInput>
  }

  export type typesUpdateManyWithWhereWithoutProjectInput = {
    where: typesScalarWhereInput
    data: XOR<typesUpdateManyMutationInput, typesUncheckedUpdateManyWithoutProjectInput>
  }

  export type projectStackUpsertWithWhereUniqueWithoutProjectInput = {
    where: projectStackWhereUniqueInput
    update: XOR<projectStackUpdateWithoutProjectInput, projectStackUncheckedUpdateWithoutProjectInput>
    create: XOR<projectStackCreateWithoutProjectInput, projectStackUncheckedCreateWithoutProjectInput>
  }

  export type projectStackUpdateWithWhereUniqueWithoutProjectInput = {
    where: projectStackWhereUniqueInput
    data: XOR<projectStackUpdateWithoutProjectInput, projectStackUncheckedUpdateWithoutProjectInput>
  }

  export type projectStackUpdateManyWithWhereWithoutProjectInput = {
    where: projectStackScalarWhereInput
    data: XOR<projectStackUpdateManyMutationInput, projectStackUncheckedUpdateManyWithoutProjectInput>
  }

  export type projectStackScalarWhereInput = {
    AND?: projectStackScalarWhereInput | projectStackScalarWhereInput[]
    OR?: projectStackScalarWhereInput[]
    NOT?: projectStackScalarWhereInput | projectStackScalarWhereInput[]
    id?: StringFilter<"projectStack"> | string
    name?: StringFilter<"projectStack"> | string
    projectId?: StringFilter<"projectStack"> | string
    createdAt?: DateTimeFilter<"projectStack"> | Date | string
    updatedAt?: DateTimeFilter<"projectStack"> | Date | string
  }

  export type projectsCreateWithoutSourceInput = {
    id?: string
    title: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    type?: typesCreateNestedManyWithoutProjectInput
    projectStacks?: projectStackCreateNestedManyWithoutProjectInput
  }

  export type projectsUncheckedCreateWithoutSourceInput = {
    id?: string
    title: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    type?: typesUncheckedCreateNestedManyWithoutProjectInput
    projectStacks?: projectStackUncheckedCreateNestedManyWithoutProjectInput
  }

  export type projectsCreateOrConnectWithoutSourceInput = {
    where: projectsWhereUniqueInput
    create: XOR<projectsCreateWithoutSourceInput, projectsUncheckedCreateWithoutSourceInput>
  }

  export type usersCreateWithoutSourcesInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    types?: typesCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutSourcesInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    types?: typesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutSourcesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutSourcesInput, usersUncheckedCreateWithoutSourcesInput>
  }

  export type projectsUpsertWithoutSourceInput = {
    update: XOR<projectsUpdateWithoutSourceInput, projectsUncheckedUpdateWithoutSourceInput>
    create: XOR<projectsCreateWithoutSourceInput, projectsUncheckedCreateWithoutSourceInput>
    where?: projectsWhereInput
  }

  export type projectsUpdateToOneWithWhereWithoutSourceInput = {
    where?: projectsWhereInput
    data: XOR<projectsUpdateWithoutSourceInput, projectsUncheckedUpdateWithoutSourceInput>
  }

  export type projectsUpdateWithoutSourceInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: typesUpdateManyWithoutProjectNestedInput
    projectStacks?: projectStackUpdateManyWithoutProjectNestedInput
  }

  export type projectsUncheckedUpdateWithoutSourceInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: typesUncheckedUpdateManyWithoutProjectNestedInput
    projectStacks?: projectStackUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type usersUpsertWithoutSourcesInput = {
    update: XOR<usersUpdateWithoutSourcesInput, usersUncheckedUpdateWithoutSourcesInput>
    create: XOR<usersCreateWithoutSourcesInput, usersUncheckedCreateWithoutSourcesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutSourcesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutSourcesInput, usersUncheckedUpdateWithoutSourcesInput>
  }

  export type usersUpdateWithoutSourcesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    types?: typesUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutSourcesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    types?: typesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type projectsCreateWithoutProjectStacksInput = {
    id?: string
    title: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    source?: sourcesCreateNestedManyWithoutProjectInput
    type?: typesCreateNestedManyWithoutProjectInput
  }

  export type projectsUncheckedCreateWithoutProjectStacksInput = {
    id?: string
    title: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    source?: sourcesUncheckedCreateNestedManyWithoutProjectInput
    type?: typesUncheckedCreateNestedManyWithoutProjectInput
  }

  export type projectsCreateOrConnectWithoutProjectStacksInput = {
    where: projectsWhereUniqueInput
    create: XOR<projectsCreateWithoutProjectStacksInput, projectsUncheckedCreateWithoutProjectStacksInput>
  }

  export type projectsUpsertWithoutProjectStacksInput = {
    update: XOR<projectsUpdateWithoutProjectStacksInput, projectsUncheckedUpdateWithoutProjectStacksInput>
    create: XOR<projectsCreateWithoutProjectStacksInput, projectsUncheckedCreateWithoutProjectStacksInput>
    where?: projectsWhereInput
  }

  export type projectsUpdateToOneWithWhereWithoutProjectStacksInput = {
    where?: projectsWhereInput
    data: XOR<projectsUpdateWithoutProjectStacksInput, projectsUncheckedUpdateWithoutProjectStacksInput>
  }

  export type projectsUpdateWithoutProjectStacksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: sourcesUpdateManyWithoutProjectNestedInput
    type?: typesUpdateManyWithoutProjectNestedInput
  }

  export type projectsUncheckedUpdateWithoutProjectStacksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: sourcesUncheckedUpdateManyWithoutProjectNestedInput
    type?: typesUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type projectsCreateWithoutTypeInput = {
    id?: string
    title: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    source?: sourcesCreateNestedManyWithoutProjectInput
    projectStacks?: projectStackCreateNestedManyWithoutProjectInput
  }

  export type projectsUncheckedCreateWithoutTypeInput = {
    id?: string
    title: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    source?: sourcesUncheckedCreateNestedManyWithoutProjectInput
    projectStacks?: projectStackUncheckedCreateNestedManyWithoutProjectInput
  }

  export type projectsCreateOrConnectWithoutTypeInput = {
    where: projectsWhereUniqueInput
    create: XOR<projectsCreateWithoutTypeInput, projectsUncheckedCreateWithoutTypeInput>
  }

  export type usersCreateWithoutTypesInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sources?: sourcesCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutTypesInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sources?: sourcesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutTypesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutTypesInput, usersUncheckedCreateWithoutTypesInput>
  }

  export type projectsUpsertWithoutTypeInput = {
    update: XOR<projectsUpdateWithoutTypeInput, projectsUncheckedUpdateWithoutTypeInput>
    create: XOR<projectsCreateWithoutTypeInput, projectsUncheckedCreateWithoutTypeInput>
    where?: projectsWhereInput
  }

  export type projectsUpdateToOneWithWhereWithoutTypeInput = {
    where?: projectsWhereInput
    data: XOR<projectsUpdateWithoutTypeInput, projectsUncheckedUpdateWithoutTypeInput>
  }

  export type projectsUpdateWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: sourcesUpdateManyWithoutProjectNestedInput
    projectStacks?: projectStackUpdateManyWithoutProjectNestedInput
  }

  export type projectsUncheckedUpdateWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: sourcesUncheckedUpdateManyWithoutProjectNestedInput
    projectStacks?: projectStackUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type usersUpsertWithoutTypesInput = {
    update: XOR<usersUpdateWithoutTypesInput, usersUncheckedUpdateWithoutTypesInput>
    create: XOR<usersCreateWithoutTypesInput, usersUncheckedCreateWithoutTypesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutTypesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutTypesInput, usersUncheckedUpdateWithoutTypesInput>
  }

  export type usersUpdateWithoutTypesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sources?: sourcesUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutTypesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sources?: sourcesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type education_descriptionCreateWithoutEducationInput = {
    id?: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type education_descriptionUncheckedCreateWithoutEducationInput = {
    id?: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type education_descriptionCreateOrConnectWithoutEducationInput = {
    where: education_descriptionWhereUniqueInput
    create: XOR<education_descriptionCreateWithoutEducationInput, education_descriptionUncheckedCreateWithoutEducationInput>
  }

  export type education_descriptionCreateManyEducationInputEnvelope = {
    data: education_descriptionCreateManyEducationInput | education_descriptionCreateManyEducationInput[]
    skipDuplicates?: boolean
  }

  export type education_descriptionUpsertWithWhereUniqueWithoutEducationInput = {
    where: education_descriptionWhereUniqueInput
    update: XOR<education_descriptionUpdateWithoutEducationInput, education_descriptionUncheckedUpdateWithoutEducationInput>
    create: XOR<education_descriptionCreateWithoutEducationInput, education_descriptionUncheckedCreateWithoutEducationInput>
  }

  export type education_descriptionUpdateWithWhereUniqueWithoutEducationInput = {
    where: education_descriptionWhereUniqueInput
    data: XOR<education_descriptionUpdateWithoutEducationInput, education_descriptionUncheckedUpdateWithoutEducationInput>
  }

  export type education_descriptionUpdateManyWithWhereWithoutEducationInput = {
    where: education_descriptionScalarWhereInput
    data: XOR<education_descriptionUpdateManyMutationInput, education_descriptionUncheckedUpdateManyWithoutEducationInput>
  }

  export type education_descriptionScalarWhereInput = {
    AND?: education_descriptionScalarWhereInput | education_descriptionScalarWhereInput[]
    OR?: education_descriptionScalarWhereInput[]
    NOT?: education_descriptionScalarWhereInput | education_descriptionScalarWhereInput[]
    id?: StringFilter<"education_description"> | string
    description?: StringNullableFilter<"education_description"> | string | null
    educationId?: StringFilter<"education_description"> | string
    createdAt?: DateTimeFilter<"education_description"> | Date | string
    updatedAt?: DateTimeFilter<"education_description"> | Date | string
  }

  export type educationCreateWithoutEducationDescriptionsInput = {
    id?: string
    program: string
    branch: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type educationUncheckedCreateWithoutEducationDescriptionsInput = {
    id?: string
    program: string
    branch: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type educationCreateOrConnectWithoutEducationDescriptionsInput = {
    where: educationWhereUniqueInput
    create: XOR<educationCreateWithoutEducationDescriptionsInput, educationUncheckedCreateWithoutEducationDescriptionsInput>
  }

  export type educationUpsertWithoutEducationDescriptionsInput = {
    update: XOR<educationUpdateWithoutEducationDescriptionsInput, educationUncheckedUpdateWithoutEducationDescriptionsInput>
    create: XOR<educationCreateWithoutEducationDescriptionsInput, educationUncheckedCreateWithoutEducationDescriptionsInput>
    where?: educationWhereInput
  }

  export type educationUpdateToOneWithWhereWithoutEducationDescriptionsInput = {
    where?: educationWhereInput
    data: XOR<educationUpdateWithoutEducationDescriptionsInput, educationUncheckedUpdateWithoutEducationDescriptionsInput>
  }

  export type educationUpdateWithoutEducationDescriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    program?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type educationUncheckedUpdateWithoutEducationDescriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    program?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type experience_descriptionCreateWithoutExperienceInput = {
    id?: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type experience_descriptionUncheckedCreateWithoutExperienceInput = {
    id?: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type experience_descriptionCreateOrConnectWithoutExperienceInput = {
    where: experience_descriptionWhereUniqueInput
    create: XOR<experience_descriptionCreateWithoutExperienceInput, experience_descriptionUncheckedCreateWithoutExperienceInput>
  }

  export type experience_descriptionCreateManyExperienceInputEnvelope = {
    data: experience_descriptionCreateManyExperienceInput | experience_descriptionCreateManyExperienceInput[]
    skipDuplicates?: boolean
  }

  export type experience_descriptionUpsertWithWhereUniqueWithoutExperienceInput = {
    where: experience_descriptionWhereUniqueInput
    update: XOR<experience_descriptionUpdateWithoutExperienceInput, experience_descriptionUncheckedUpdateWithoutExperienceInput>
    create: XOR<experience_descriptionCreateWithoutExperienceInput, experience_descriptionUncheckedCreateWithoutExperienceInput>
  }

  export type experience_descriptionUpdateWithWhereUniqueWithoutExperienceInput = {
    where: experience_descriptionWhereUniqueInput
    data: XOR<experience_descriptionUpdateWithoutExperienceInput, experience_descriptionUncheckedUpdateWithoutExperienceInput>
  }

  export type experience_descriptionUpdateManyWithWhereWithoutExperienceInput = {
    where: experience_descriptionScalarWhereInput
    data: XOR<experience_descriptionUpdateManyMutationInput, experience_descriptionUncheckedUpdateManyWithoutExperienceInput>
  }

  export type experience_descriptionScalarWhereInput = {
    AND?: experience_descriptionScalarWhereInput | experience_descriptionScalarWhereInput[]
    OR?: experience_descriptionScalarWhereInput[]
    NOT?: experience_descriptionScalarWhereInput | experience_descriptionScalarWhereInput[]
    id?: StringFilter<"experience_description"> | string
    description?: StringNullableFilter<"experience_description"> | string | null
    experienceId?: StringFilter<"experience_description"> | string
    createdAt?: DateTimeFilter<"experience_description"> | Date | string
    updatedAt?: DateTimeFilter<"experience_description"> | Date | string
  }

  export type experienceCreateWithoutExperienceDescriptionsInput = {
    id?: string
    company: string
    branch: string
    position: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type experienceUncheckedCreateWithoutExperienceDescriptionsInput = {
    id?: string
    company: string
    branch: string
    position: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type experienceCreateOrConnectWithoutExperienceDescriptionsInput = {
    where: experienceWhereUniqueInput
    create: XOR<experienceCreateWithoutExperienceDescriptionsInput, experienceUncheckedCreateWithoutExperienceDescriptionsInput>
  }

  export type experienceUpsertWithoutExperienceDescriptionsInput = {
    update: XOR<experienceUpdateWithoutExperienceDescriptionsInput, experienceUncheckedUpdateWithoutExperienceDescriptionsInput>
    create: XOR<experienceCreateWithoutExperienceDescriptionsInput, experienceUncheckedCreateWithoutExperienceDescriptionsInput>
    where?: experienceWhereInput
  }

  export type experienceUpdateToOneWithWhereWithoutExperienceDescriptionsInput = {
    where?: experienceWhereInput
    data: XOR<experienceUpdateWithoutExperienceDescriptionsInput, experienceUncheckedUpdateWithoutExperienceDescriptionsInput>
  }

  export type experienceUpdateWithoutExperienceDescriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type experienceUncheckedUpdateWithoutExperienceDescriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type techStackTypeCreateWithoutTechStackInput = {
    id?: string
    type?: $Enums.devTypes | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type techStackTypeUncheckedCreateWithoutTechStackInput = {
    id?: string
    type?: $Enums.devTypes | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type techStackTypeCreateOrConnectWithoutTechStackInput = {
    where: techStackTypeWhereUniqueInput
    create: XOR<techStackTypeCreateWithoutTechStackInput, techStackTypeUncheckedCreateWithoutTechStackInput>
  }

  export type techStackTypeCreateManyTechStackInputEnvelope = {
    data: techStackTypeCreateManyTechStackInput | techStackTypeCreateManyTechStackInput[]
    skipDuplicates?: boolean
  }

  export type techStackTypeUpsertWithWhereUniqueWithoutTechStackInput = {
    where: techStackTypeWhereUniqueInput
    update: XOR<techStackTypeUpdateWithoutTechStackInput, techStackTypeUncheckedUpdateWithoutTechStackInput>
    create: XOR<techStackTypeCreateWithoutTechStackInput, techStackTypeUncheckedCreateWithoutTechStackInput>
  }

  export type techStackTypeUpdateWithWhereUniqueWithoutTechStackInput = {
    where: techStackTypeWhereUniqueInput
    data: XOR<techStackTypeUpdateWithoutTechStackInput, techStackTypeUncheckedUpdateWithoutTechStackInput>
  }

  export type techStackTypeUpdateManyWithWhereWithoutTechStackInput = {
    where: techStackTypeScalarWhereInput
    data: XOR<techStackTypeUpdateManyMutationInput, techStackTypeUncheckedUpdateManyWithoutTechStackInput>
  }

  export type techStackTypeScalarWhereInput = {
    AND?: techStackTypeScalarWhereInput | techStackTypeScalarWhereInput[]
    OR?: techStackTypeScalarWhereInput[]
    NOT?: techStackTypeScalarWhereInput | techStackTypeScalarWhereInput[]
    id?: StringFilter<"techStackType"> | string
    type?: EnumdevTypesNullableFilter<"techStackType"> | $Enums.devTypes | null
    createdAt?: DateTimeFilter<"techStackType"> | Date | string
    updatedAt?: DateTimeFilter<"techStackType"> | Date | string
    techStackId?: StringNullableFilter<"techStackType"> | string | null
  }

  export type techStackCreateWithoutTechstacktypeInput = {
    id?: string
    stack: string
    bgColor: string
    imgUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type techStackUncheckedCreateWithoutTechstacktypeInput = {
    id?: string
    stack: string
    bgColor: string
    imgUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type techStackCreateOrConnectWithoutTechstacktypeInput = {
    where: techStackWhereUniqueInput
    create: XOR<techStackCreateWithoutTechstacktypeInput, techStackUncheckedCreateWithoutTechstacktypeInput>
  }

  export type techStackUpsertWithoutTechstacktypeInput = {
    update: XOR<techStackUpdateWithoutTechstacktypeInput, techStackUncheckedUpdateWithoutTechstacktypeInput>
    create: XOR<techStackCreateWithoutTechstacktypeInput, techStackUncheckedCreateWithoutTechstacktypeInput>
    where?: techStackWhereInput
  }

  export type techStackUpdateToOneWithWhereWithoutTechstacktypeInput = {
    where?: techStackWhereInput
    data: XOR<techStackUpdateWithoutTechstacktypeInput, techStackUncheckedUpdateWithoutTechstacktypeInput>
  }

  export type techStackUpdateWithoutTechstacktypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    stack?: StringFieldUpdateOperationsInput | string
    bgColor?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type techStackUncheckedUpdateWithoutTechstacktypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    stack?: StringFieldUpdateOperationsInput | string
    bgColor?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sourcesCreateManyUsersInput = {
    id?: string
    title?: string | null
    description?: string | null
    imgUrl?: string | null
    imgPath?: string | null
    projectId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type typesCreateManyUsersInput = {
    id?: string
    type?: $Enums.Types
    projectId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type sourcesUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imgPath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: projectsUpdateOneRequiredWithoutSourceNestedInput
  }

  export type sourcesUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imgPath?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sourcesUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imgPath?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type typesUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTypesFieldUpdateOperationsInput | $Enums.Types
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: projectsUpdateOneRequiredWithoutTypeNestedInput
  }

  export type typesUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTypesFieldUpdateOperationsInput | $Enums.Types
    projectId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type typesUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTypesFieldUpdateOperationsInput | $Enums.Types
    projectId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sourcesCreateManyProjectInput = {
    id?: string
    title?: string | null
    description?: string | null
    imgUrl?: string | null
    imgPath?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    usersId?: string | null
  }

  export type typesCreateManyProjectInput = {
    id?: string
    type?: $Enums.Types
    createdAt?: Date | string
    updatedAt?: Date | string
    usersId?: string | null
  }

  export type projectStackCreateManyProjectInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type sourcesUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imgPath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneWithoutSourcesNestedInput
  }

  export type sourcesUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imgPath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usersId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type sourcesUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imgPath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usersId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type typesUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTypesFieldUpdateOperationsInput | $Enums.Types
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneWithoutTypesNestedInput
  }

  export type typesUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTypesFieldUpdateOperationsInput | $Enums.Types
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usersId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type typesUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTypesFieldUpdateOperationsInput | $Enums.Types
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usersId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type projectStackUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type projectStackUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type projectStackUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type education_descriptionCreateManyEducationInput = {
    id?: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type education_descriptionUpdateWithoutEducationInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type education_descriptionUncheckedUpdateWithoutEducationInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type education_descriptionUncheckedUpdateManyWithoutEducationInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type experience_descriptionCreateManyExperienceInput = {
    id?: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type experience_descriptionUpdateWithoutExperienceInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type experience_descriptionUncheckedUpdateWithoutExperienceInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type experience_descriptionUncheckedUpdateManyWithoutExperienceInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type techStackTypeCreateManyTechStackInput = {
    id?: string
    type?: $Enums.devTypes | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type techStackTypeUpdateWithoutTechStackInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: NullableEnumdevTypesFieldUpdateOperationsInput | $Enums.devTypes | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type techStackTypeUncheckedUpdateWithoutTechStackInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: NullableEnumdevTypesFieldUpdateOperationsInput | $Enums.devTypes | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type techStackTypeUncheckedUpdateManyWithoutTechStackInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: NullableEnumdevTypesFieldUpdateOperationsInput | $Enums.devTypes | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}