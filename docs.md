# API

## Array

- `Entries` - Many collections have an `entries` method which returns an array of a given object's own enumerable string-keyed property [key, value] pairs. The `Entries` type will return the type of that collection's entries.

	[source](source/Entries.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `Entry` - Many collections have an `entries` method which returns an array of a given object's own enumerable string-keyed property [key, value] pairs. The `Entry` type will return the type of that collection's entry.

	[source](source/Entry.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `FixedLengthArray` - Create a type that represents an array of the given type and length. The array's length and the `Array` prototype methods that manipulate its length are excluded in the resulting type.

	[source](source/FixedLengthArray.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `Get` - Get a deeply-nested property from an object using a key path, like Lodash's `.get()` function.

	[source](source/Get.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `Includes` - Returns a boolean for whether the given array includes the given item.

	[source](source/Includes.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `Join` - Join an array of strings and/or numbers using the given string as a delimiter.

	[source](source/Join.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `LastArrayElement` - Extracts the type of the last element of an array.

	[source](source/LastArrayElement.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `MultidimensionalArray` - Creates a type that represents a multidimensional array of the given type and dimension.

	[source](source/MultidimensionalArray.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `MultidimensionalReadonlyArray` - Creates a type that represents a multidimensional readonly array that of the given type and dimension.

	[source](source/MultidimensionalReadonlyArray.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `PartialDeep` - Create a type from another type with all keys and nested keys set to optional.

	[source](source/PartialDeep.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `ReadonlyDeep` - Convert `object`s, `Map`s, `Set`s, and `Array`s and all of their keys/elements into immutable structures recursively.

	[source](source/ReadonlyDeep.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `TypedArray` - Matches any [typed array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray), like `Uint8Array` or `Float64Array`.

	[source](source/TypedArray.d.ts)

## Async

- `AsyncReturnType` - Unwrap the return type of a function that returns a `Promise`.

	[source](source/AsyncReturnType.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `Asyncify` - Create an async version of the given function type, by boxing the return type in `Promise` while keeping the same parameter types.

	[source](source/Asyncify.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `Promisable` - Create a type that represents either the value or the value wrapped in `PromiseLike`.

	[source](source/Promisable.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `PromiseValue` - 

	[source](source/PromiseValue.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

## Change case

- `CamelCase` - Convert a string literal to camel-case.

	[source](source/CamelCase.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `CamelCasedPropertiesDeep` - Convert object properties to camel case recursively.

	[source](source/CamelCasedPropertiesDeep.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `CamelCasedProperties` - Convert object properties to camel case but not recursively.

	[source](source/CamelCasedProperties.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `DelimiterCase` - Convert a string literal to a custom string delimiter casing.

	[source](source/DelimiterCase.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `DelimiterCasedPropertiesDeep` - Convert object properties to delimiter case recursively.

	[source](source/DelimiterCasedPropertiesDeep.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `DelimiterCasedProperties` - Convert object properties to delimiter case but not recursively.

	[source](source/DelimiterCasedProperties.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `KebabCase` - Convert a string literal to kebab-case.

	[source](source/KebabCase.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `KebabCasedPropertiesDeep` - Convert object properties to kebab case recursively.

	[source](source/KebabCasedPropertiesDeep.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `KebabCasedProperties` - Convert object properties to kebab case but not recursively.

	[source](source/KebabCasedProperties.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `PascalCase` - Converts a string literal to pascal-case.

	[source](source/PascalCase.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `PascalCasedPropertiesDeep` - Convert object properties to pascal case recursively.

	[source](source/PascalCasedPropertiesDeep.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `PascalCasedProperties` - Convert object properties to pascal case but not recursively.

	[source](source/PascalCasedProperties.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `ScreamingSnakeCase` - Convert a string literal to screaming-snake-case.

	[source](source/ScreamingSnakeCase.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `SnakeCase` - Convert a string literal to snake-case.

	[source](source/SnakeCase.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `SnakeCasedPropertiesDeep` - Convert object properties to snake case recursively.

	[source](source/SnakeCasedPropertiesDeep.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `SnakeCasedProperties` - Convert object properties to snake case but not recursively.

	[source](source/SnakeCasedProperties.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

## Class

- `Class` - Matches a [`class`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes).

	[source](source/Class.d.ts)

- `Constructor` - Matches a [`class` constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes).

	[source](source/Constructor.d.ts)

## File

- `PackageJson` - Type for [npm's `package.json` file](https://docs.npmjs.com/creating-a-package-json-file). Also includes types for fields used by other popular projects, like TypeScript and Yarn.

	[source](source/PackageJson.d.ts)

- `TsConfigJson` - Type for [TypeScript's `tsconfig.json` file](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) (TypeScript 3.7).

	[source](source/TsConfigJson.d.ts)

## Function

- `SetReturnType` - Create a function type with a return type of your choice and the same parameters as the given function type.

	[source](source/SetReturnType.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

## Iterable

- `IterableElement` - Get the element type of an `Iterable`/`AsyncIterable`. For example, an array or a generator.

	[source](source/IterableElement.d.ts) | [example1](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==) | [example2](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==) | [example3](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

## JSON

- `JsonObject` - Matches a JSON object.

	[source](source/JsonObject.d.ts)

- `JsonArray` - Matches a JSON array.

	[source](source/JsonArray.d.ts)

- `JsonPrimitive` - Matches any valid JSON primitive value.

	[source](source/JsonPrimitive.d.ts)

- `JsonValue` - Matches any valid JSON value.

	[source](source/JsonValue.d.ts)

- `Jsonify` - Transform a type to one that is assignable to the `JsonValue` type.

	[source](source/Jsonify.d.ts) | [example1](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==) | [example2](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

## Map

- `Entries` - Many collections have an `entries` method which returns an array of a given object's own enumerable string-keyed property [key, value] pairs. The `Entries` type will return the type of that collection's entries.

	[source](source/Entries.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `Entry` - Many collections have an `entries` method which returns an array of a given object's own enumerable string-keyed property [key, value] pairs. The `Entry` type will return the type of that collection's entry.

	[source](source/Entry.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `PartialDeep` - Create a type from another type with all keys and nested keys set to optional.

	[source](source/PartialDeep.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `ReadonlyDeep` - Convert `object`s, `Map`s, `Set`s, and `Array`s and all of their keys/elements into immutable structures recursively.

	[source](source/ReadonlyDeep.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

## Numeric

- `PositiveInfinity` - Matches the hidden `Infinity` type.

	[source](source/PositiveInfinity.d.ts)

- `NegativeInfinity` - Matches the hidden `-Infinity` type.

	[source](source/NegativeInfinity.d.ts)

- `Finite` - A finite `number`.

	[source](source/Finite.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `Integer` - A `number` that is an integer.

	[source](source/Integer.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `Float` - A `number` that is not an integer.

	[source](source/Float.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `NegativeFloat` - A negative (`-∞ < x < 0`) `number` that is not an integer.

	[source](source/NegativeFloat.d.ts)

- `Negative` - A negative `number`/`bigint` (`-∞ < x < 0`)

	[source](source/Negative.d.ts)

- `NegativeInteger` - A negative (`-∞ < x < 0`) `number` that is an integer.

	[source](source/NegativeInteger.d.ts)

- `NonNegative` - A non-negative `number`/`bigint` (`0 <= x < ∞`).

	[source](source/NonNegative.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `NonNegativeInteger` - A non-negative (`0 <= x < ∞`) `number` that is an integer.

	[source](source/NonNegativeInteger.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

## Object

- `CamelCasedPropertiesDeep` - Convert object properties to camel case recursively.

	[source](source/CamelCasedPropertiesDeep.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `CamelCasedProperties` - Convert object properties to camel case but not recursively.

	[source](source/CamelCasedProperties.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `ConditionalExcept` - Exclude keys from a shape that matches the given `Condition`.

	[source](source/ConditionalExcept.d.ts) | [example1](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==) | [example2](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `ConditionalKeys` - Extract the keys from a type where the value type of the key extends the given `Condition`.

	[source](source/ConditionalKeys.d.ts) | [example1](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==) | [example2](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `ConditionalPick` - Pick keys from the shape that matches the given `Condition`.

	[source](source/ConditionalPick.d.ts) | [example1](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==) | [example2](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `DelimiterCasedPropertiesDeep` - Convert object properties to delimiter case recursively.

	[source](source/DelimiterCasedPropertiesDeep.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `DelimiterCasedProperties` - Convert object properties to delimiter case but not recursively.

	[source](source/DelimiterCasedProperties.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `Entries` - Many collections have an `entries` method which returns an array of a given object's own enumerable string-keyed property [key, value] pairs. The `Entries` type will return the type of that collection's entries.

	[source](source/Entries.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `Entry` - Many collections have an `entries` method which returns an array of a given object's own enumerable string-keyed property [key, value] pairs. The `Entry` type will return the type of that collection's entry.

	[source](source/Entry.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `Except` - Create a type from an object type without certain keys.

	[source](source/Except.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `Get` - Get a deeply-nested property from an object using a key path, like Lodash's `.get()` function.

	[source](source/Get.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `KebabCasedPropertiesDeep` - Convert object properties to kebab case recursively.

	[source](source/KebabCasedPropertiesDeep.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `KebabCasedProperties` - Convert object properties to kebab case but not recursively.

	[source](source/KebabCasedProperties.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `MergeExclusive` - Create a type that has mutually exclusive keys.

	[source](source/MergeExclusive.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `Merge` - Merge two types into a new type. Keys of the second type overrides keys of the first type.

	[source](source/Merge.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `PartialDeep` - Create a type from another type with all keys and nested keys set to optional.

	[source](source/PartialDeep.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `PartialOnUndefinedDeep` - Create a deep version of another type where all keys accepting `undefined` type are set to optional.

	[source](source/PartialOnUndefinedDeep.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `PascalCasedPropertiesDeep` - Convert object properties to pascal case recursively.

	[source](source/PascalCasedPropertiesDeep.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `PascalCasedProperties` - Convert object properties to pascal case but not recursively.

	[source](source/PascalCasedProperties.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `ReadonlyDeep` - Convert `object`s, `Map`s, `Set`s, and `Array`s and all of their keys/elements into immutable structures recursively.

	[source](source/ReadonlyDeep.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `RemoveIndexSignature` - Remove any index signatures from the given object type, so that only explicitly defined properties remain.

	[source](source/RemoveIndexSignature.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `RequireAllOrNone` - Create a type that requires all of the given keys or none of the given keys. The remaining keys are kept as is.

	[source](source/RequireAllOrNone.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `RequireAtLeastOne` - Create a type that requires at least one of the given keys. The remaining keys are kept as is.

	[source](source/RequireAtLeastOne.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `RequireExactlyOne` - Create a type that requires exactly one of the given keys and disallows more. The remaining keys are kept as is.

	[source](source/RequireExactlyOne.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `Schema` - Create a deep version of another object type where property values are recursively replaced into a given value type.

	[source](source/Schema.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `SetNonNullable` - Create a type that makes the given keys non-nullable. The remaining keys are kept as is.

	[source](source/SetNonNullable.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `SetOptional` - Create a type that makes the given keys optional. The remaining keys are kept as is. The sister of the `SetRequired` type.

	[source](source/SetOptional.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `SetRequired` - Create a type that makes the given keys required. The remaining keys are kept as is. The sister of the `SetOptional` type.

	[source](source/SetRequired.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `Simplify` - Useful to flatten the type output to improve type hints shown in editors. And also to transform an interface into a type to aide with assignability.

	[source](source/Simplify.d.ts) | [example1](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==) | [example2](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `SnakeCasedPropertiesDeep` - Convert object properties to snake case recursively.

	[source](source/SnakeCasedPropertiesDeep.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `SnakeCasedProperties` - Convert object properties to snake case but not recursively.

	[source](source/SnakeCasedProperties.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `Spread` - Mimic the type inferred by TypeScript when merging two objects or two arrays/tuples using the spread syntax.

	[source](source/Spread.d.ts) | [example1](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==) | [example2](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `StringKeyOf` - Get keys of the given type as strings.

	[source](source/StringKeyOf.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `Stringified` - Create a type with the keys of the given type changed to `string` type.

	[source](source/Stringified.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `ValueOf` - Create a union of the given object's values, and optionally specify which keys to get the values from.

	[source](source/ValueOf.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `Writable` - Create a type that strips `readonly` from all or some of an object's keys. Inverse of `Readonly<T>`.

	[source](source/Writable.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

## Observable

- `Unsubscribable` - 

	[source](source/Unsubscribable.d.ts)

- `OnNext` - 

	[source](source/OnNext.d.ts)

- `OnError` - 

	[source](source/OnError.d.ts)

- `OnComplete` - 

	[source](source/OnComplete.d.ts)

- `Observer` - 

	[source](source/Observer.d.ts)

- `ObservableLike` - Matches a value that is like an [Observable](https://github.com/tc39/proposal-observable).

	[source](source/ObservableLike.d.ts)

## Set

- `Entries` - Many collections have an `entries` method which returns an array of a given object's own enumerable string-keyed property [key, value] pairs. The `Entries` type will return the type of that collection's entries.

	[source](source/Entries.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `Entry` - Many collections have an `entries` method which returns an array of a given object's own enumerable string-keyed property [key, value] pairs. The `Entry` type will return the type of that collection's entry.

	[source](source/Entry.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `PartialDeep` - Create a type from another type with all keys and nested keys set to optional.

	[source](source/PartialDeep.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `ReadonlyDeep` - Convert `object`s, `Map`s, `Set`s, and `Array`s and all of their keys/elements into immutable structures recursively.

	[source](source/ReadonlyDeep.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

## String

- `Replace` - Represents a string with some or all matches replaced by a replacement.

	[source](source/Replace.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `Split` - Represents an array of strings split using a given character or character set.

	[source](source/Split.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `Trim` - Remove leading and trailing spaces from a string.

	[source](source/Trim.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

## Template literal

- `CamelCase` - Convert a string literal to camel-case.

	[source](source/CamelCase.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `CamelCasedPropertiesDeep` - Convert object properties to camel case recursively.

	[source](source/CamelCasedPropertiesDeep.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `CamelCasedProperties` - Convert object properties to camel case but not recursively.

	[source](source/CamelCasedProperties.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `DelimiterCase` - Convert a string literal to a custom string delimiter casing.

	[source](source/DelimiterCase.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `DelimiterCasedPropertiesDeep` - Convert object properties to delimiter case recursively.

	[source](source/DelimiterCasedPropertiesDeep.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `DelimiterCasedProperties` - Convert object properties to delimiter case but not recursively.

	[source](source/DelimiterCasedProperties.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `Get` - Get a deeply-nested property from an object using a key path, like Lodash's `.get()` function.

	[source](source/Get.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `Join` - Join an array of strings and/or numbers using the given string as a delimiter.

	[source](source/Join.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `KebabCase` - Convert a string literal to kebab-case.

	[source](source/KebabCase.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `KebabCasedPropertiesDeep` - Convert object properties to kebab case recursively.

	[source](source/KebabCasedPropertiesDeep.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `KebabCasedProperties` - Convert object properties to kebab case but not recursively.

	[source](source/KebabCasedProperties.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `LastArrayElement` - Extracts the type of the last element of an array.

	[source](source/LastArrayElement.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `PascalCase` - Converts a string literal to pascal-case.

	[source](source/PascalCase.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `PascalCasedPropertiesDeep` - Convert object properties to pascal case recursively.

	[source](source/PascalCasedPropertiesDeep.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `PascalCasedProperties` - Convert object properties to pascal case but not recursively.

	[source](source/PascalCasedProperties.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `Replace` - Represents a string with some or all matches replaced by a replacement.

	[source](source/Replace.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `ScreamingSnakeCase` - Convert a string literal to screaming-snake-case.

	[source](source/ScreamingSnakeCase.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `SnakeCase` - Convert a string literal to snake-case.

	[source](source/SnakeCase.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `SnakeCasedPropertiesDeep` - Convert object properties to snake case recursively.

	[source](source/SnakeCasedPropertiesDeep.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `SnakeCasedProperties` - Convert object properties to snake case but not recursively.

	[source](source/SnakeCasedProperties.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `Split` - Represents an array of strings split using a given character or character set.

	[source](source/Split.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `Trim` - Remove leading and trailing spaces from a string.

	[source](source/Trim.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

## Type

- `InvariantOf` - Create an [invariant type](https://basarat.gitbook.io/typescript/type-system/type-compatibility#footnote-invariance), which is a type that does not accept supertypes and subtypes.

	[source](source/InvariantOf.d.ts) | [example1](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==) | [example2](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `LiteralToPrimitive` - Given a [literal type](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types) return the {@link Primitive primitive type} it belongs to, or `never` if it's not a primitive.

	[source](source/LiteralToPrimitive.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `LiteralUnion` - Allows creating a union type by combining primitive types and literal types without sacrificing auto-completion in IDEs for the literal type part of the union.

	[source](source/LiteralUnion.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `Opaque` - Create an opaque type, which hides its internal details from the public, and can only be created by being used explicitly.

	[source](source/Opaque.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `UnwrapOpaque` - Revert an opaque type back to its original type by removing the readonly `[tag]`.

	[source](source/UnwrapOpaque.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `Primitive` - Matches any [primitive value](https://developer.mozilla.org/en-US/docs/Glossary/Primitive).

	[source](source/Primitive.d.ts)

- `UnionToIntersection` - Convert a union type to an intersection type using [distributive conditional types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html#distributive-conditional-types).

	[source](source/UnionToIntersection.d.ts) | [example1](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==) | [example2](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

## Utilities

- `Exact` - Create a type that does not allow extra properties, meaning it only allows properties that are explicitly declared.

	[source](source/Exact.d.ts) | [example1](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==) | [example2](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `HasOptionalKeys` - Creates a type that represents `true` or `false` depending on whether the given type has any optional fields.

	[source](source/HasOptionalKeys.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `HasRequiredKeys` - Creates a type that represents `true` or `false` depending on whether the given type has any required fields.

	[source](source/HasRequiredKeys.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `OptionalKeysOf` - Extract all optional keys from the given type.

	[source](source/OptionalKeysOf.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `ReadonlyTuple` - Create a type that represents a read-only tuple of the given type and length.

	[source](source/ReadonlyTuple.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

- `RequiredKeysOf` - Extract all required keys from the given type.

	[source](source/RequiredKeysOf.d.ts) | [example](https://www.typescriptlang.org/play?#code/ZXhwb3J0IHt9Ow==)

