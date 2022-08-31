# API

## Array

- `Entries` - Many collections have an `entries` method which returns an array of a given object's own enumerable string-keyed property [key, value] pairs. The `Entries` type will return the type of that collection's entries.

	[source](source/Entries.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gUQHYysFAZwF84AzKCEOAciVQFoyiYaBuAKA+FxSjICGAYzSYAHgPAAbNOg6EqKANIpEALjjYAriABGfTsS5CI2QvBADswMFqkCYRHHgKE4AXjgAKFBOlENZ3wiAB5xSTAZAD4ASg8ouF8ImUIAOkswHz9ItHcEgG0OAHoiuAARCCI4BRA0AShdYDx6xDgwShFCQh4AczhTBAALNABrVW8AdybBhGQ0HjJoSxhgAYEANwFge10ZGI4k-3yABgBdVJgIAFUwVCgAYQFCFC8YgBouEvLKtxq6hqaUBabQ6RG62D6AxgwzgmykWjQXim0NmqDgCyWDlW2DgGy2Oz2B2yMnyAEZzpcAGLAMQoAAmrw4pxinA4JjM8EOOUCxNyGD+KnUcFJxE47PMiVwwTcngA8roAFYoIQwVIoKWuLLJFBxJ5wIKuMK8qJi0wSiBaGC2eCeSzWWz2RyEA1EHwaogsz6leVKlWENlm+AQRXKmDhfweDACDQi00c-ohlUuwiBd2EEL0FAQMgJ31h42R-L5GgCGhvYWnU6sr4AQSgQMQ-vF8HqDfDOULJbLFbjEtbAkQydTLlCmezuPrA-b0ULJ3LXdO5bJ5fJVa9cAAsgIwE3A3AMtO+dgUBNN9uvEWuyvK57m-vt0P9WmM3NxxkEp5L6Xr2viqUAMooDAu7xs8+bapGx6noBMAXleFa3nuYGPsmL6oOOyEFp+xbfrQpaLnAy4VlWQA)

- `Entry` - Many collections have an `entries` method which returns an array of a given object's own enumerable string-keyed property [key, value] pairs. The `Entry` type will return the type of that collection's entry.

	[source](source/Entry.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gUQHYyogXzgDMoIQ4ByJVAWmJQGcZKBuAKHeFxSmIEMAxmkwAPfuAA2adO0bkUAaRSIAXHGwBXEACNeHAp0ERszOCH7ZgYTZP4wmOPIjgBeOAAoU4qSnVP8AB4xCTBpAD4ASjdwuABtdgB6RLgAEQgmOHkQNH4oHWA8PJcwMmFGRm4AczgTBAALNABrFU8Ad0L6hGQ0bmJoCxhgOv4AN35gOx1pSPZvUOk4gAYAXQA6GAgAVTBUKABhfkYUD0iAGk5ktIzGLIU4PIKi-DhSiHLK7Bq6mEa4cckmjQHg6v26qDgfQG9mG2Ae40m-GmKFm818cQAjOtNgAxYCiFAAE1OFxWHHYxlM8DRYT8cBCvjcGGyShU6gxBA4lLMKFwL3cAHkdAArFCCGBrXl4YBMLw+WmRZYrB63AKIYLyiJckxmCCaGA2eDuCxWGx2ByMNVePmISLkq5C0XixgUnXwCAisUwBm0pnofjszmuqm1T3itX+G2BGgoCDEUNO72alCxdxxSj8ShnOBY+0pACCUCg-EQLu58DyxcQPukTPTmezueDZkrJbVAGVpV9I85oz04w8i23k6n4ktsxnKGTmxWh9WbQA5bR6KA9oIxget6sjusYxvTpIpACy-DAZbd5lPNbQ7mwKDacBPYA8cXrWZzKxWdpnl7AEfpUYbvGFh-juaaTvueZwO2KAwOeIbHEmCw3ho97QbBL4QR+37llksEdl2VRruqQF4Uhvijm+E6ZtOuGIWqS66LwxF9qgA70WB8R7h+rBAA)

- `FixedLengthArray` - Create a type that represents an array of the given type and length. The array's length and the `Array` prototype methods that manipulate its length are excluded in the resulting type.

	[source](source/FixedLengthArray.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gMWADxQEwBkUA7AcxgAsBBKKAQ0QF84AzKCEOAciVQFpWKAM4xuAbgBQkvmkykAxsHIAVFPS4BeONjxFSFGnUYAeUVGVkANHADMAPimSFEEqLhkAriJjySS1XUQAC4dRUs1DThtAG1uACkIYUpuG24AWWAFSnoUABtUngAlCAAjFFhuAF0nFzd4Sk4UPwCySJCw-wig6Lg4gHEUaDIUQoSIShJqqQB6Gc17OAqOKDgVAGUAJltNzdCVZDRzSxiquGBhOBIIeHphYWAyEnpSvLQYCARDnhbujW5pF4fL9AhoAHRgTzJAAU3HW-wAlLN5otltA1ltbLYAJyhAAKHFQsEQPEhyW4cHwEBEVxuSxwF3gri+qB+4VBIG4QA)

- `Get` - Get a deeply-nested property from an object using a key path, like Lodash's `.get()` function.

	[source](source/Get.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gcRTAvnAMyghDgHIlUBaAlAZxjIG4AoUSWOAKjgEM64AGwgATfgAtCxUmWFi645ixYBjCADsGcAOY44AXjgAeAEL8UAFWQoANHAAKvGJJQAPGCnUiBDKMHXacAA+cFAovCIagohwvv7aANoAugB8ABQQAEYAVigqMABccGZ0ltZ2YE7iRY7OAJRF2DCm5laodrXiKQYpLHISAHS6MBk5eTAVVXWsbOoeUAS8KmgAgmDAAEr0kJpo6CziwDB0RfuHx0UrUFC8iEb7APrAIkVxASwPdBAArlDLpyx1LwQChLtdbvcWNpgAA3TyvGB+ALJFiLEDAaIIpHaFi4XqZYCwcQAEScoNiiPiuNxvVw1NUGi0wwAcsC0IY0rx1ls6DtSpdudtGSg6j0oThOYLecK7GRznQBvKEgAGJIDT4-P4oAZAkFkaYsAD0hv03SuNzu6GhcPUWPiySYhGBGMQdoCeOUxocVT4gi+sW+YA4xz4oXCkXU0T44JiEAIFOxdAZmngLLZAHUjuJOubbgY4JLNkLdgKi9LdqLTeKRlyy3zbHAEnKjnQyDZm8c2+RlV2yBrfste7qUGQknwBGoUwbjaa4LnLdb4Qn7UlHWiXW7tB6jYa4ABlSn5OAgUSglhNIxvRJJWUAZi76Di+SKiO+KDxcBn3SvwTg3y8KAEP4KAiOeOBGFsahQCIl6UgEdhXiksoEBAEAPk+hQIFAb4fl6s4-iE-4iIBwEiEAA)

- `Includes` - Returns a boolean for whether the given array includes the given item.

	[source](source/Includes.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gSQHYGMA2ArgCYoDOAvnAGZQQhwDkSqAtNeTIwNwBQvLNAAsAhmQBKKYgB4RUKCMRwUADxgpsxMnBHZEAbQC6APjgBeODgIlys+YoA0TKFMbHuQA)

- `Join` - Join an array of strings and/or numbers using the given string as a delimiter.

	[source](source/Join.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gKQsAdgXzgDMoIQ4ByJVAWiJQGcYKBuAKDYHpO4BZYAB4oAJnAAUTKHgDmDOADI4uAK4gARiigMAlHGAwUIBizhRGygDbxgDAFyUiECADoADM7UBDAF4U2AYwhcJjgwTxgAC3tsPAAeAG0KRwgKABo4V3SKL18AXSznCgA+OABeOETktIysnIpc5wArHFwxCkLtdi4eAHlcC0Q4SRk9AyMTMwZLazsHJw9PKAXfAKCQsMjoloSkp2rsxf26-MpCkvLKvdrD67ymlraOru44PoGlVQ0oUcNjU3MrHpZhQAIzOABMzgAzH5AsF4BsonAYrgEiD0uD0lCTu1imUKui4Ji4Nj7nhHhROkA)

- `LastArrayElement` - Extracts the type of the last element of an array.

	[source](source/LastArrayElement.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gGQIYGcYCCUU2iAogDYogoB2MAvnAGZQQhwDkSqAtMynycA3AChRAExQBjCtihpmAV1rSYwCLThz8AeWYAeAGpwUADxh0JuOAuwTNFRHGy1EAbQC6APgAU8kkQALjgjAEoQnHwiQMpqOhhjbzFRaU18F2JSOABeOHdOZggITgAaOAAmTxSeFAhmbTwYfX8sxDCxAHpOnO84WiUQACMUKCA)

- `MultidimensionalArray` - Creates a type that represents a multidimensional array of the given type and dimension.

	[source](source/MultidimensionalArray.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gWQK4BsbAAmoKAdgM7ASkCGuAglFDYgL5wBmUEIcA5ElQBaDinIw+AbgBQ0jtlIBjAtTgpwSTDRhRgADwA8AFTV6YZQuTilsIAEYooAPgAUxEGUrVyALjhGASj8cfCISCipaBiYWAwUAa1IIAHdSABp-JwxpRW94EG1dPT8EpNSAbQBdOABeOCqZaVwUeHJsOy0dfVq4Aq69GQ5oOBdm+HdPSJ6ARkk4CYjVA3nwrwo5gGoNhbWA7NyKCGaAOlwIAHMXAAMASVJgAjpgAC9gUnOVj0XSOABiABJ0DtIqwrgFGm0OoV9OUAAzVOoNaSQzpFHoo6F6OHVGhWUopUhI1iyKAtbBQH59NG4uAhAjA6h0RjMRBxUiJAkZIxOGTEnJ5XqYnrqMCaTEuADM4NkVJh8Ox2J6ABYAEySIA)

- `MultidimensionalReadonlyArray` - Creates a type that represents a multidimensional readonly array that of the given type and dimension.

	[source](source/MultidimensionalReadonlyArray.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gWQK4BsbAAmoKAdgM7ASkCGuASijYdbogIJRQ2IC+cAMygQQcAORJUAWgEpyMMQG4AUMoHZSAYwLU4KcEkw0YUYAA8APABU9ZmGULk4pbCABGKKAD4AFMRBklNTkAFxwVgCUYTj4RCQUVLQMTCykbJzciBYaANakEADupAA04V4YyprB8CDGpmZhuflFANoAunAAvHDtKsq4KPDk2G5GJuZdcLXjZioC0HA+A-D+gYmTAIyKcKsJuhY78UEU2wDUp7vHERVVFBADAHS4EADmPgAGAJKkwAR0wAAvYCkF6HAJ7UhwADEABJ0JdErx3hE+sNRnVzC0AAwdbq9ZTAASLBH7MFrYJwKRwDbXdDKNFjeqTBkYszYjo0JxNQqkfH8FC4choOksmbsyYAFgATCpeMo5cooINsFBIdMmZy4DECCSkoxmKwOFweNlSHkeaUrF5ZapbvIpqzJvowIZWT4AMwo23VOA0CgFTyTdWYnHs9nbAD0Ebg0qAA)

- `PartialDeep` - Create a type from another type with all keys and nested keys set to optional.

	[source](source/PartialDeep.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gBQIa2NgGwBEUUwBfOAMyghDgHIlUBaKlAZxgYG4AoPgGMIAOy5wOKGDGAiA5hwBccAMpSZ8jnAC8GPjBQAPGAFEAJsBjRl6PlVEwVwAF4plARgAs-eyJgBhCAJrRgBiAAZIqN47BwB1FGA5AAsYZU9I-nI+bABXK2FwAik3akJJfjyrDmwAN1KYKFyULP4hUXFsMDACRBU6lDM1aVkFHTgAChr6ofVRpTgcPEISMgAeYY0FAD4ASh1tvSgpXKgRDAA6K8kRzQAaOCuL6cHN+fIsgRutrV0unr6A1mtwUE3QBmM5ksIXQvhgCSSqWUAFZIuRyLt+AADHECABCiDgZhQVDyBBgDxgyWAWnKEDg2Co7EEMFpUCg2EJ2BEZgQuR6aGYnEUAhxWL4oEgsAQyDQWFwMhWpAo1Fo9CYsrYnG4bVkBigpMEaDemj0BG5cly2DkwokjVGAG0ALqfdpieBgBX4AgmhTKJaK4jKjZzTSHXS2c3yK02hYO3I8kmyQZOvgfPhigQASSoCGpWhpcATxI4wA5ACNig9EBBcnBBNy4J6OFosehjoJTpIs34IABBdmchakgiSchYhlaKloSTCHky1AMqCWkAoPwXIA)

- `ReadonlyDeep` - Convert `object`s, `Map`s, `Set`s, and `Array`s and all of their keys/elements into immutable structures recursively.

	[source](source/ReadonlyDeep.d.ts) | [example](https://www.typescriptlang.org/play?#code/PTAEBMEMBdIOgFYGcD2A7AUAbwwIgGYoq4BcoA2rgEaQBOuAuhgL4YYigC2kAlmnNCQYenAA4pa0UNACeogKagsAJXmRw6ADYyAIvPmjmofLRSdQAclkKAtPnlJoFgNzCxEqVFgApVGlAAvKC08gCOAK48IQAUFnDAXvDI6BYAlK4YAMbojhAwkGSq6lq6+qIAPNbyKPh5Pn4AfIF1kL7oGfIAHuKSEPL4kOGanvkZHNAO0AJCIj0jsMam5nHA3HwubIlwhChwouFIABaxNLRpriABTfK0prSgACoAygBMAMxvAJxkAAqmCpIZJZ9kcLBAUA5QGgUFIujxcuhpHJFBYQsU0NpQI5aHwAObkBgWIA)

- `TypedArray` - Matches any [typed array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray), like `Uint8Array` or `Float64Array`.

	[source](source/TypedArray.d.ts)

## Async

- `AsyncReturnType` - Unwrap the return type of a function that returns a `Promise`.

	[source](source/AsyncReturnType.d.ts) | [example](https://www.typescriptlang.org/play?#code/C4ZwUAlgtgDg9gJ2AAmATxgU2QbwIIhoB2AxgEqbACuCRAKhpgL7IBmCcUyA5OlgLStMIYNwDckWIhQ4AhoVIAxKqWAQ4RFu049ZMCOLBgA9MeR0AFhBCpGyBMLgAbAG7DUcVBewqA7gj0sABN7ShoiWyxkOFZkAAN5YhJlVXUiOIA6MD5sADVZJypsAF5kAiSKaloGLAAeHJjkRKUVEjUNAD4JMGaSNlb2iKC4AGVOSisiAHMAChcCooAuZHzCzABKXCYjXpS2tJn1jOBvIjmFko7kYbGoCYhp87X19bEgA)

- `Asyncify` - Create an async version of the given function type, by boxing the return type in `Promise` while keeping the same parameter types.

	[source](source/Asyncify.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gQQM6IHYDGwAZogL5zFQQhwDkSqAtMStjHQNwBQ3A9HzgBlfAQAW1PBACu2StMIxgEPADpuxBQSUq4AcxQwAYhAgjCACmw0UmKHoBcwmwBVkKAJROTEDP0GAZATcZLyMaDiiJMAoACY+AOKGMChQcAC8cBGEJIgAPGEQxPqGPuYEAHw8AmnlCO6ZuNnE0XGmiTDJqRlWNnaOziAobqge6bUACtQgwNgouT6VvALCAIaDcCtyAAYGxqZlW3AARtLwm6ISKjLY6gQq7MV7EFkETi9RsQlJKelwPYN9UY1PzLYYoIQEKDAMDwKQAdzgAGt4XIYGIVvAttYAfZDjM4FshK53IcVqcaBjgAQVgAbGmIdTLACSZxp1iRKIQ6PgaPxmkUyjwcBAsngUEM0igQq2kxoMzmCy2jMETKKiBkcHRADc0FsAAJhbCQ6EwJhsGnAPAwPhgKbylhaHR4JjnQiHC1Wn5QaQ0tAoPArI6+mIAGjgwHgcOAdLgKB1QvFkFgXIxcAAREZHYLUdy4OKYJKhba5bM5CKHkc0K6CKo0+p-HAgmQgA)

- `Promisable` - Create a type that represents either the value or the value wrapped in `PromiseLike`.

	[source](source/Promisable.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gBShEwDOAhgEYA2KAvnAGY4hwDkSqAtNSvjAwNwBQvhfIgB2AYxoBXMTGARhcUhADmSlFAAUqmABllAUWEwoiAFxx1ASjgBeAHxxsuAiXIAeTlGDClti2cd4+CiuAG4QwAAm9ui8onKccCiGxjZwhADuhMDwWrpKBkaIlnxxwvgQ5AB0ikrqSYUWfBT8Naoaljb2DNQQEAyNvK1q6h12DnQEKJVQHBUhKOoMxIRQ-Y1AA)

- `PromiseValue` - 

	[source](source/PromiseValue.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gBShEwDOKAagIYA2ArigL5wBmOIcA5EqgLR0r4zMDcAKAFs0AQXyIAdgGMAIiRgk4AXjjZcBFAB4eUYJIDmAPkFkU8EhJnzFALjjipchUtXq8hAHRRuEMgDcUAApmUQAhAGFmAEpBYWQ0G1c1Rk1SSm1HaxcTATN4ABMXeySVOBIAdxJgCytnRTiAeka4AAkUH2Z8csk4FAAPEnAzBAALBTh8UYgK7umKsYIEBLgfEmkYbpgIOEkISXZ3TWXUfE941DgAZSdSt1TCdKodGD1DXPzJ2+Lr78UygzmG7ZRRBWJCZptDooLo9PqDYZoGDjeBTGZzGaLLYrNYbLY7HzSChQfDAQIpDSEE7cc4iOAAJRQRJJZJQWXqySOhC0XO0un0xg+5lWTOJpMC7KS9l5T20jOZ4rZdSSRjKlWq8F53l8AWCWp8+D8gRC4Si0ViQA)

## Change case

- `CamelCase` - Convert a string literal to camel-case.

	[source](source/CamelCase.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gYQIYhQGxwGcUBfOAMyghDgHIlUBaClImOgbgChuB6PnADKoMPhS8AxhAB27OERooAatijBsAI3EAuODjyFsJADx0KECE01q6APjgBeehYgAhWz36CAggBMAN2wZSRQ-XkY0AwJiMIAFalRYYDYTABUHZ3RuAG0AaThgGTgAaxRECAo4NLhjfVwY4xQTPLsAXT00-LbuUi8imBQoCmxQuAAlbAB3AHkwGGBZIgxuOj8oRCYoAFcZOj1NS3FgnnNt-HwAfRGQYHxES5kG-YUYdRkAcx5XPRltkE0Qx4bh84z07HeX24AEUAKoALUucIAGr9-oCoKcZmkABIAUXGTAAYgBJPEAGQAIi9DhBjjIeKQpEt4H5NOM2OcYHpokYSH4EhAkgtUpNZvNFnJMit1ohxrs9G9tigADTcCjnfBE3B3RAAOQaejoNigADoAFZEOhqn5wACMACYAMxqk1G1zW7gAR22AC9odsAB56ABsaogMAAFkMiSl8H49CN8CRepwgA)

- `CamelCasedPropertiesDeep` - Convert object properties to camel case recursively.

	[source](source/CamelCasedPropertiesDeep.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gYQIYhQGxwGcUATABSglVmBSIBEUUwBfOAMypDgHIlUAWg70YvANwAoScAB2MFFA7YAxmgCqJKBkmbFASVIAuOLICuIAEaKpeqADlcKE0RhQ5AcymtpchUtUNLQB1YBgACwAxdxRZUiIdO31ZDggTO1staLo4onStAG0AXW9pFQhZVzgoejN8GBMcPEJsEgoqGhg6RmYwAB47UIjs2PiAPjgAXh0zLWTUk3RJWYNjOABGABplrUc8E14AFQgQXm3WbZWoEdyTAsklq8MTACZL3acDgClFKEQzyQXB47VYmADM70Ue2cfAAymBgABrFAAoFFc7iIA)

- `CamelCasedProperties` - Convert object properties to camel case but not recursively.

	[source](source/CamelCasedProperties.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gYQIYhQGxwGcUATABSglVmBSIF84AzKkOAciVQFpn6YHANwAoEcAB2MFFGbYAxmgCqJKBhEqZASVIAuOBICuIAEYzRmqADlcKfURhRJAc1EMx8iBIdwo9Q-gw+jh4hNgkFFQ0MHREADyWAHxwALzqhqo6+gCMADQiGTI2ePocACoQIBz5DEJAA)

- `DelimiterCase` - Convert a string literal to a custom string delimiter casing.

	[source](source/DelimiterCase.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gERQG1MGFKAYQEMBnFAXzgDMoIQ4ByJVAWlpXJmYG4AUAID0wuAGVQYHCiEBjCADseccoxQA1UlGCkARjIBccbHhAEiZSgB5mtCBABC25gBoWAYmYA+OAF4WewgPPRdBETEAQQATADdSRTkUaKE2NAB5aOicRCtkgAUGVFhgbmsAFV8A9AEAbQBpOGBFOABrFEQIWjhyuAoTXHxCEgoUa3r3Zi9vAF1jcoaZgSpw5uHaUiSJdXSwGGAlcgwBaKhEACUAV0VjPQcZBMFmuRxL6JQAMWAjVRgdRQA5oIgsZFJcQHoiIIqPJDvAoKQAO7EPC7faHYyZbK5UbRQoQYr7MriHZ7A7KKrHZinRAeKDXZjGP6XFCuATMZ6vd4eWjfFCMlihKAAOgAVuQ3AIQXAAIwAJgAzMs+EA)

- `DelimiterCasedPropertiesDeep` - Convert object properties to delimiter case recursively.

	[source](source/DelimiterCasedPropertiesDeep.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gERQG1MGFKAYQEMBnFAEwAUoJVZgVzsUwBfOAM3pDgDkSVAFpuLGAIDcAKBnAAdoSjdSAYzQBVSlAwyArjoCSVAFxwF+kACMisw0QBypECnPkYURQHNZHOYrKqhpw2kQA6gQAFgBiXigKVOR6DlBGCtwQ5mFQ9jpxzInk2ToA2gC6fnJqEAoecFAs+jgw5th4IAREZJS09IwwzKwo7AA8OZEwsfFFADSCIgIAfHAAvHoCqSKKmQLm6DKbOttUe3AAjLOHWwouKGcCACoQIAJXHFdHRGIzSWelMgOXygJzOACZPjc7g8AFJEKCIN4yD6A67HYCncwAZkhx1urgeAGUwMAANb3d5XcrvKRAA)

- `DelimiterCasedProperties` - Convert object properties to delimiter case but not recursively.

	[source](source/DelimiterCasedProperties.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gERQG1MGFKAYQEMBnFAEwAUoJVZgVyBfOAM3pDgHIlUAWg4sYvANwAoScAB2hKB1IBjNAFVKUDJICumgJJUAXHFk6QAIyJS9RAHKkQKE+RhQ5AcymtpyiLNc4KBYdHBgTbDwQAiIySlp6RhhmcgAeDSIAGj5BXgA+OABebV5bKEFgKl4TAEZMyVLNQVlHFGq+ABUIEF561nEgA)

- `KebabCase` - Convert a string literal to kebab-case.

	[source](source/KebabCase.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gaRQIwIY4DCeAzigL5wBmUEIcA5EqgLRUokwMDcAULwHoBcAMqgwAGxT8AxhAB2nOCTooAanijACUgFxxs+IqRQAeBlQgQAQpoYA+OAF5GliC3xQe-IXACCACYAbnjyMigB-MxohgTEZAEACrSosMAcpgAqji7ovADamHDA8nAA1iiIEFRwmXCkBrhxJqaY9gC6+pmF7bzkfLwlMChQVHjhcIQSwADyYDDACiQYvAFQiABKAK7y+jhWUqF8JTISWwEoAGLAesowWvIA5nxu+vJbIDgjfOSyS-BQPAAdyms3mi0U+lixgSyQgqQWGVBcwWSxyKwYa0QLCgOwY+nuWxQABpeAwTmcLmwbih8YxPAA6ABWJAYpNecAAjAAmADMfW4QA)

- `KebabCasedPropertiesDeep` - Convert object properties to kebab case recursively.

	[source](source/KebabCasedPropertiesDeep.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA2gaRQIwIY4DCeAzigCYAKUEqswKJAIiimALpwBmNIcA5ElQBaLoxj8A3AChpwAHYwUULngDGaAKpkocAN7SArjoCS5AFxx5hkDmUzjygHJ4QKSyRhQFAcxkBfWQUlFXUtHQB1YBgACwAxbxR5chJ9I1N5LghLbXt05QSGZJIcnXR2ANk1CHlPOChGQwAbGEtsfCJSCmpaZRgGZlYwAB5cqCjYwqSUgD44AF40-kcoYQUs-ksDZZ018k24AEYAGmkd5WF5VxQD-gAVCBB+U-9T89WeIpSD9Gltlb2BwATG8AVc3LcAFLKKCIZ7SV5-M4A4D7SwAZlBu3BN0s-AAymBgABrG4vU7sF6SIA)

- `KebabCasedProperties` - Convert object properties to kebab case but not recursively.

	[source](source/KebabCasedProperties.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gaRQIwIY4DCeAzigCYAKUEqswKJAvnAGY0hwDkSqAtK0YwuAbgBQY4ADsYKKKzwBjNAFUyUDGICu6gJLkAXHClaQOOeJ1yAcnhAojJGFGkBzcUwmKIUp3CiMWgA2MEbY+ESkFNS0cjAMJAA8anIAfHAAvJpcVlB8wORcRgCMADRiOep8UnYoRdwAKhAgXOVMIkA)

- `PascalCase` - Converts a string literal to pascal-case.

	[source](source/PascalCase.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gBQIYGcDG2ANgMJ4oC+cAZlBCHAORKoC01KuMjA3AFB8A9ILgBlUGCIoB+CADsucXPRQA1bFGDYARlIBccHAWJlcKADyNqECK20bGAPjgBeJgDEbAIQf8hIgEEAEwA3bDl8FCCBFjQjQlJyTDowXHMAFWc3dD4AbQBpOGA5OABrFEQIajh0uDxDPATTC3zHAF0DdIK2vgo-YpgUKGpsSLgAJWwAdwB5MBhgeVwMPkYgqERWKABXOUYDbRspcP4rbaIiAH0RkGAiREu5bBAUfaUYTTkAc35rCAM5NsQNohvwKDIlvAgtpxpxzjADGQXokzEFkhBULBgJxzABZCBBFBEdGpLIrAAiG3GuwMH22KAANHx3OciO5nndEAA5Z4oAyMexQAB0ACtcIwmZ5-nAAIwAJgAzL0eEA)

- `PascalCasedPropertiesDeep` - Convert object properties to pascal case recursively.

	[source](source/PascalCasedPropertiesDeep.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gBQIYGcDG2ANgMJ4oAmmUEqswKuAIiimAL5wBmNIcA5ElQBaLoxj8A3AChpwAHYwUULtnxoAqrmUZpAV21QAkhQBcceXpAAjZTIPKActhApzuGFAUBzGe1kKSipqmoYA6sAwABYAYl4o8hS4ug7G8lwQ5lp2+oZxDIm4WYYA2gC6frL4EPIecFCMekQw5jgExGTaVDR0MAzMrGAAPNlQEdH5CUkAfHAAvLqjRumZi4Ym5gCMADTSo86u5vwAKhAg-Lvsu6OTheYl0uh762ZwAEzXhgduAgBSylBEBdpFdHs9lBs4ABmT5OFw-fgAZTAwAA1ihgaCypdJEA)

- `PascalCasedProperties` - Convert object properties to pascal case but not recursively.

	[source](source/PascalCasedProperties.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gBQIYGcDG2ANgMJ4oAmmUEqswKuAvnAGY0hwDkSqAtK0YwuAbgBQY4ADsYKKK2z40AVVxyMYgK5qoASQoAuOFM0gARnPHa5AOWwgUR3DCjSA5uKYT8EKc7hQjJpEMEY4BMRkalQ0dDAMuAA8qnIAfHAAvBopeoZwAIwANGI5dg5GXAAqECBcxUwiQA)

- `ScreamingSnakeCase` - Convert a string literal to screaming-snake-case.

	[source](source/ScreamingSnakeCase.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gZQMZRQQxGADsBzTY-AaxQGF8BnFAXzgDMoIQ4ByJVALRsUDGDwDcAKEnYIxUXAZcUANXxRg+AEYAbFAC44OPIRLlKNekwA8PNhAgAhdTwB8cALy8AYgHlfAPqOAIIAShJAA)

- `SnakeCase` - Convert a string literal to snake-case.

	[source](source/SnakeCase.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gZQHYEMDWKAwrgM4oC+cAZlBCHAORKoC01KpMjA3AFB8A9ILiZQYADYoBAYwjYucUvRQA1XFGC4ARlIBcovIRLkAPI2oQIAIQ2MAfHAC8TSxAD62u-yEiAggAmAG642DIoAQIsaDgExGQRAAp0qLDAnKYAKo4u6HwA2gDScMDYcISIENRwmXBkhnEmKKaF9gC6BplFbXwUPqUwKFDUuOFwALIQASgSyRBgpBh8wKQAErhgYIgG2lZSofzUAK4SEgBiuCDAEogAcpcoBlya2ADmh1YG2Ecg2kP8FFk8kUAW0ACVOCcYAZYsYEgE5qkYOlSKZJtNZilSDklowVu4ABYbLaMAwwKBHFAAGj4FhOEncIyuN3ceBAKFJTBIUAkuFEVxgBMYNLcBgAjAAmADMvR4QA)

- `SnakeCasedPropertiesDeep` - Convert object properties to snake case recursively.

	[source](source/SnakeCasedPropertiesDeep.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gZQHYEMDWKAwrgM4oAmAClBKrMCqQCIopgC+cAZrSHAHIkqALTcmMAQG4AUDODYYKKN1wBjNAFVyUDDICuOgJIUAXHGz6QAI2WzDygHK4QKc6RhQFAc1kc5Ckoq6lo6AOrAMAAWAGJeKNgUpHoOUEbY3BDm2nYGOnGMiaTZOgDaALp+cmoQ2B5wUEz6ADYw5jgExGSUNHTKMIwsbGAAPDlQEdEFCUkAfHAAvCk6APoKmeboecprZnAAjAA021AreK7mAgAqECACxxzHqSu8hUnmpTJbz8B7AExPVbnNyCABSyigiHuMkeXxOu3MAGZATtgZdMGBgIRobDyg8pEA)

- `SnakeCasedProperties` - Convert object properties to snake case but not recursively.

	[source](source/SnakeCasedProperties.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gZQHYEMDWKAwrgM4oAmAClBKrMCqQL5wBmtIcA5EqgLRsmMbgG4AUOODYYKKG1wBjNAFVyUDOICu6gJIUAXHGxaQAIzkSdcgHK4QKI6RhRpAcwnNJiiNmdwoJi0AGxgjHAJiMkoaOjkYRlIAHjU5AD44AF5NaygAfWBDOABGABptdTy8ByNuABUIEG5y5lEgA)

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

	[source](source/SetReturnType.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gZRTASjgVygDsAVZFAXzgDMoIQ4ByJVAWhpQGcYmBuAFADWaALKIAYgWIBjGMAhkAFgEMYAYRXL6AdzgBeOAAoaECAC44mBinKoANHABGKqJekBrYhB3EAlAYAfFY2APIwSihQdiiCwhRw4gDqUCpgqAAmUrLyigZWOPgwRGQUADzi2XIKymqa2j6O1iAo4ZHRCQA+cNIZKDTAxCgZgYIA9GP6wSKJiClpmVW5xPkmZpbNthSOLm49xF4+-kEhLW1RMXDdvf2Dw3xAA)

## Iterable

- `IterableElement` - Get the element type of an `Iterable`/`AsyncIterable`. For example, an array or a generator.

	[source](source/IterableElement.d.ts) | [example1](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gSRiqBDAIwBsUBREkFAOxgF84AzKCEOAciVQFoGUBnGGwDcAKBEMArlQDGMYBCpwAVHGABBEAHFquPDGgAKAJQYRiYCiIATOAEZR5yzYBMo2mM5oAsigByEkAJcOABeOGxdYjIKahgAHgAlFBgJKCoAFWQUOM8IBlUNbSpdfSgAPjKRAAMasTUqGwALXDRgPjg8RRQADzxwEjgAd2AYRo7FPD5EGTgAcx18UoAuIA) | [example2](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gSRiqBDAIwBsUBREkFAOxgF84AzKCEOAciVQFoGUBnGGwDcAKBF4+iKgGNGAVxkxgEKnABUcYAEEQAcWq48MaFskyAFAEoMIxMBREAJuwAWwYbftOEUOSlG0YpxoALIoAMowUMBUAOYA8lAAQhAQJHiqALxw2IbEZBTUMAA8AEooMHJQVAAqyCjFwRAMmjr6VIbGUKZS0gB8fSIABiNiIRmICPV8mqoAUngAbnjh0tFgMAD0dair6-B4UGjAOPj5fAB0cDVuM8FwAO7QANYzKnB4RERTqHcuRppwIUaAgXBA+McaLgGHhpPwrgAxaBwFAADzwQJQABo4EMtFB8IghjihuEKsTceMwBShgIjhiLuU8I5CCQKRVpBcxFpVGiMWASI8Ti4PqpDoS4M04HSYrE+AAuIA) | [example3](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gSRiqBDAIwBsUBREkFAOxgF84AzKCEOAciVQFoGUBnGGwDcAKBGc0AWRQBlGFGBUA5nAC8cbLkIlyKSjQA8AhcoDaAXQB8QA)

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

	[source](source/Jsonify.d.ts) | [example1](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gKQM4QHbABmiAvnIVBCHAORKoC0hK2MNA3AFCfB4wpRCAQwDGaAOIoqKGFEQZO9FAC5aABQi82cAD7qIAG0QBzfB04iI0ACa8h-bKoDaeAK4gARgIA0cN54EAXS4Sbks8VjhILVVJaVl5AF4FJVUaDS0abwsrKFs8exZnAEZfYsDOEi4ciPgwSg8DFBAAMTw4ZIAKa3shVRx8ADUhA1cUAEoOgD4FAHpZuAARCBY4XBAZAAteYzgAd2AYTbgemCFK6vqIRua2zui+cfY4ebgAUShKKFUlODiNhJwYDYPwQeBCbDYYDGAo3BAQKJCKBCAECOAQQgIZBoAZ4YajNBeERCVzYNCHIEgoTtLQCYRiML4SKEYAADxQ1jaHTgAB4ACpTbq9fq4AjEflTSaJGboTivZardZbHb7Q7HU7nKrcFnszl4e6aR7PV7iKzWVQPeDAuAQqEwoQ3AB0cFxREQEoQyIihGgIBB-xkciBfARADcRmMbZDobCmvCXaL8WNODqOXc8Cg9ktCp1xk8XgsPl9VABBEEoVmoET8ay+RaFSmg8HR+1OhP4N0e4l4PBgz3U7A+qB+7P8YMwMMRtC2mMOuMT9t4qecAAGa+4ADl8AxMABlADyG7g4YJIOwrhExwhcBX9f4K6B4CaGz4N8dE73h9zK98uAQmxQeRuzgLx+29X0OXjIRjynKM7VjNAFxXXEkxQFdlCAA) | [example2](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gKQM4QHbABmiAvnIVBCHAORKoC0hK2MNA3AFCcDG+rCUGgC8GTjCEA1AIYAbAK4oAXHDwoA7nAAi0mCgAUASk4kunAPTm4AAxz4iiADz0UEQoJAoAfNbjBscCgAjvLAAG5yKHjwMBA26BKeMgrKcKxQwHgA5iTWvPwxQnZ4cKKYAMoA8gByAHRg0lDYBhU1temZWQ76iSiGhnDSAcUOzsiu7r1e7EA)

## Map

- `Entries` - Many collections have an `entries` method which returns an array of a given object's own enumerable string-keyed property [key, value] pairs. The `Entries` type will return the type of that collection's entries.

	[source](source/Entries.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gUQHYysFAZwF84AzKCEOAciVQFoyiYaBuAKA+FxSjICGAYzSYAHgPAAbNOg6EqKANIpEALjjYAriABGfTsS5CI2QvBADswMFqkCYRHHgKE4AXjgAKFBOlENZ3wiAB5xSTAZAD4ASg8ouF8ImUIAOkswHz9ItHcEgG0OAHoiuAARCCI4BRA0AShdYDx6xDgwShFCQh4AczhTBAALNABrVW8AdybBhGQ0HjJoSxhgAYEANwFge10ZGI4k-3yABgBdVJgIAFUwVCgAYQFCFC8YgBouEvLKtxq6hqaUBabQ6RG62D6AxgwzgmykWjQXim0NmqDgCyWDlW2DgGy2Oz2B2yMnyAEZzpcAGLAMQoAAmrw4pxinA4JjM8EOOUCxNyGD+KnUcFJxE47PMiVwwTcngA8roAFYoIQwVIoKWuLLJFBxJ5wIKuMK8qJi0wSiBaGC2eCeSzWWz2RyEA1EHwaogsz6leVKlWENlm+AQRXKmDhfweDACDQi00c-ohlUuwiBd2EEL0FAQMgJ31h42R-L5GgCGhvYWnU6sr4AQSgQMQ-vF8HqDfDOULJbLFbjEtbAkQydTLlCmezuPrA-b0ULJ3LXdO5bJ5fJVa9cAAsgIwE3A3AMtO+dgUBNN9uvEWuyvK57m-vt0P9WmM3NxxkEp5L6Xr2viqUAMooDAu7xs8+bapGx6noBMAXleFa3nuYGPsmL6oOOyEFp+xbfrQpaLnAy4VlWQA)

- `Entry` - Many collections have an `entries` method which returns an array of a given object's own enumerable string-keyed property [key, value] pairs. The `Entry` type will return the type of that collection's entry.

	[source](source/Entry.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gUQHYyogXzgDMoIQ4ByJVAWmJQGcZKBuAKHeFxSmIEMAxmkwAPfuAA2adO0bkUAaRSIAXHGwBXEACNeHAp0ERszOCH7ZgYTZP4wmOPIjgBeOAAoU4qSnVP8AB4xCTBpAD4ASjdwuABtdgB6RLgAEQgmOHkQNH4oHWA8PJcwMmFGRm4AczgTBAALNABrFU8Ad0L6hGQ0bmJoCxhgOv4AN35gOx1pSPZvUOk4gAYAXQA6GAgAVTBUKABhfkYUD0iAGk5ktIzGLIU4PIKi-DhSiHLK7Bq6mEa4cckmjQHg6v26qDgfQG9mG2Ae40m-GmKFm818cQAjOtNgAxYCiFAAE1OFxWHHYxlM8DRYT8cBCvjcGGyShU6gxBA4lLMKFwL3cAHkdAArFCCGBrXl4YBMLw+WmRZYrB63AKIYLyiJckxmCCaGA2eDuCxWGx2ByMNVePmISLkq5C0XixgUnXwCAisUwBm0pnofjszmuqm1T3itX+G2BGgoCDEUNO72alCxdxxSj8ShnOBY+0pACCUCg-EQLu58DyxcQPukTPTmezueDZkrJbVAGVpV9I85oz04w8i23k6n4ktsxnKGTmxWh9WbQA5bR6KA9oIxget6sjusYxvTpIpACy-DAZbd5lPNbQ7mwKDacBPYA8cXrWZzKxWdpnl7AEfpUYbvGFh-juaaTvueZwO2KAwOeIbHEmCw3ho97QbBL4QR+37llksEdl2VRruqQF4Uhvijm+E6ZtOuGIWqS66LwxF9qgA70WB8R7h+rBAA)

- `PartialDeep` - Create a type from another type with all keys and nested keys set to optional.

	[source](source/PartialDeep.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gBQIa2NgGwBEUUwBfOAMyghDgHIlUBaKlAZxgYG4AoPgGMIAOy5wOKGDGAiA5hwBccAMpSZ8jnAC8GPjBQAPGAFEAJsBjRl6PlVEwVwAF4plARgAs-eyJgBhCAJrRgBiAAZIqN47BwB1FGA5AAsYZU9I-nI+bABXK2FwAik3akJJfjyrDmwAN1KYKFyULP4hUXFsMDACRBU6lDM1aVkFHTgAChr6ofVRpTgcPEISMgAeYY0FAD4ASh1tvSgpXKgRDAA6K8kRzQAaOCuL6cHN+fIsgRutrV0unr6A1mtwUE3QBmM5ksIXQvhgCSSqWUAFZIuRyLt+AADHECABCiDgZhQVDyBBgDxgyWAWnKEDg2Co7EEMFpUCg2EJ2BEZgQuR6aGYnEUAhxWL4oEgsAQyDQWFwMhWpAo1Fo9CYsrYnG4bVkBigpMEaDemj0BG5cly2DkwokjVGAG0ALqfdpieBgBX4AgmhTKJaK4jKjZzTSHXS2c3yK02hYO3I8kmyQZOvgfPhigQASSoCGpWhpcATxI4wA5ACNig9EBBcnBBNy4J6OFosehjoJTpIs34IABBdmchakgiSchYhlaKloSTCHky1AMqCWkAoPwXIA)

- `ReadonlyDeep` - Convert `object`s, `Map`s, `Set`s, and `Array`s and all of their keys/elements into immutable structures recursively.

	[source](source/ReadonlyDeep.d.ts) | [example](https://www.typescriptlang.org/play?#code/PTAEBMEMBdIOgFYGcD2A7AUAbwwIgGYoq4BcoA2rgEaQBOuAuhgL4YYigC2kAlmnNCQYenAA4pa0UNACeogKagsAJXmRw6ADYyAIvPmjmofLRSdQAclkKAtPnlJoFgNzCxEqVFgApVGlAAvKC08gCOAK48IQAUFnDAXvDI6BYAlK4YAMbojhAwkGSq6lq6+qIAPNbyKPh5Pn4AfIF1kL7oGfIAHuKSEPL4kOGanvkZHNAO0AJCIj0jsMam5nHA3HwubIlwhChwouFIABaxNLRpriABTfK0prSgACoAygBMAMxvAJxkAAqmCpIZJZ9kcLBAUA5QGgUFIujxcuhpHJFBYQsU0NpQI5aHwAObkBgWIA)

## Numeric

- `PositiveInfinity` - Matches the hidden `Infinity` type.

	[source](source/PositiveInfinity.d.ts)

- `NegativeInfinity` - Matches the hidden `-Infinity` type.

	[source](source/NegativeInfinity.d.ts)

- `Finite` - A finite `number`.

	[source](source/Finite.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gMWAO2DFAXzgDMoIQ4ByJVAWhJQGcYqBuAKA4BMUBjADYBDKGhIBXHHxjAIOOExQwAyn2goAPABU4KAB4Ec3JnBziQAIxRQAfAAoBKHAHMYACwBccbHgLabAJReAG4QwNxsQA)

- `Integer` - A `number` that is an integer.

	[source](source/Integer.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gSQHYxQcxSgF84AzKCEOAciVQFoyUBnGGgbgCguATFAMYAbAIZQ0ZAK7YBMYBGxwWKGAE0UYgDwAVOCgAeebLxZxskkACMiAPgAUQlNnwwAFgC44OPISg6bAJSeAG4QwLwcQA)

- `Float` - A `number` that is not an integer.

	[source](source/Float.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gMQDYQIYwC+cAZlBCHAORKoC0JKAzjFQNwBQHAJigMbY8UNCQCuAOz4xgEcXCYoYABRRQ+KcTDwBzFAB4AKnBQAPGBu5M440SABGqgHwAKbBu0wAFgC44OfDCGjgCUvgBuEMDcbEA)

- `NegativeFloat` - A negative (`-∞ < x < 0`) `number` that is not an integer.

	[source](source/NegativeFloat.d.ts)

- `Negative` - A negative `number`/`bigint` (`-∞ < x < 0`)

	[source](source/Negative.d.ts)

- `NegativeInteger` - A negative (`-∞ < x < 0`) `number` that is an integer.

	[source](source/NegativeInteger.d.ts)

- `NonNegative` - A non-negative `number`/`bigint` (`0 <= x < ∞`).

	[source](source/NonNegative.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gOQgO0ygcwEMZgA3FAXzgDMoIQ4ByJVAWhpQGcYmBuAFACAJigDGAGyJQ0NAK44xpXHC4oYAGRQ4CMABYAeACpwUADxjbhXODjkgARiigA+ABQTtuvQC442PEISchRjFwBKPzIIYGE+IA)

- `NonNegativeInteger` - A non-negative (`0 <= x < ∞`) `number` that is an integer.

	[source](source/NonNegativeInteger.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gOQgO0ygcwEMZgA3FASRxkJSgF84AzKCEOAciVQFpmUAZxicA3AChxAExQBjADZEoaZgFccs0rjiCUMADIocBGAAsAPABU4KAB60cUwXByqQAI3oA+ABTyjJqYAXHDYeIQk5FQ0dFBWXgCUIWQQwFKiQA)

## Object

- `CamelCasedPropertiesDeep` - Convert object properties to camel case recursively.

	[source](source/CamelCasedPropertiesDeep.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gYQIYhQGxwGcUATABSglVmBSIBEUUwBfOAMypDgHIlUAWg70YvANwAoScAB2MFFA7YAxmgCqJKBkmbFASVIAuOLICuIAEaKpeqADlcKE0RhQ5AcymtpchUtUNLQB1YBgACwAxdxRZUiIdO31ZDggTO1staLo4onStAG0AXW9pFQhZVzgoejN8GBMcPEJsEgoqGhg6RmYwAB47UIjs2PiAPjgAXh0zLWTUk3RJWYNjOABGABplrUc8E14AFQgQXm3WbZWoEdyTAsklq8MTACZL3acDgClFKEQzyQXB47VYmADM70Ue2cfAAymBgABrFAAoFFc7iIA)

- `CamelCasedProperties` - Convert object properties to camel case but not recursively.

	[source](source/CamelCasedProperties.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gYQIYhQGxwGcUATABSglVmBSIF84AzKkOAciVQFpn6YHANwAoEcAB2MFFGbYAxmgCqJKBhEqZASVIAuOBICuIAEYzRmqADlcKfURhRJAc1EMx8iBIdwo9Q-gw+jh4hNgkFFQ0MHREADyWAHxwALzqhqo6+gCMADQiGTI2ePocACoQIBz5DEJAA)

- `ConditionalExcept` - Exclude keys from a shape that matches the given `Condition`.

	[source](source/ConditionalExcept.d.ts) | [example1](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gBSqYNgBuKANHAMIQB2AJnsFQIYA2AogB4DGKYMAvnADMoEEHADkSVAFoBKAM4wxAbgBQKjkwZy5cAIIB3eSLToVlBiBQAuOApyUA5qrkBXDl23yblFyABGKFCqAgzATC5QXnB+wA7AlDCqKlAulAAUAJQYvCo5KpJo7Fw82Lj4RHIAYsIgBkaWcAC85FS0+IysnNwwADx1csakpSB0RAB8qgD0k41jGCmUNplNcwQQwNS8QA) | [example2](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gYQgOwCbAzC4CGANgKIAeAximDAL5wBmUEIcA5EqgLQsUAZxhcA3ACgJwHDBRQWJOnGolwZNOgkkAXHBFQZAc0kAjPQeNwAPnBwBXEKfmSaegBQBKOAF4AfHAAbhDAeJJ4euiMkoxSvGgAcrgAyjCGOEYA0iiIQgDyOGSIvnDY+ITEOOTUdAwAPKrqKAA0+mnGfpIA9F3+GOZt6UY2do7OUGJwbnBevgHBoZMRGIyMQA)

- `ConditionalKeys` - Extract the keys from a type where the value type of the key extends the given `Condition`.

	[source](source/ConditionalKeys.d.ts) | [example1](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gYQgOwCbAzC4CGANgNIqIDOAvnAGZQQhwDkSqAtIyjTHYBuAFAjgOGCiiMSAYzQBRAB4lwZNOhEkAXHAFQJAc1EAjPQeNwAPnBwBXEKemi5AfgsxDOEyLx70OlE6MS40AGUvYypaAHkcMkQ4AF44bHxCYhxyGJoAHhU1MA0AGn0onwA+UQB6GuTKjhJ2EQADdrEAFQh9ezBIWDgwElhgcgRkfjKQEgBrNBp7KDRECCW4VvSCIlxWuGAaOBI4exwsuAhGE-wURgkUPDgACkZoOBRVdRQy1ssfG2ueFu9zwrQAlEdDkCQLgDCQpI9nGQIAB3AB0QA) | [example2](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gYQgOwCbAzC4CGANgNIqIDOAvnAGZQQhwDkSqAtIyjTHYBuAFAiuaAMowowHAHMqtAIL4AqvhSM5KPHAC8cbPkLEc5JTQA8AUQAeJcGRQAaOANkK4AHzgBXTW0cXQA+UQB6cP0QjhJ2Hw4AY3YgA)

- `ConditionalPick` - Pick keys from the shape that matches the given `Condition`.

	[source](source/ConditionalPick.d.ts) | [example1](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gBSqYNgBuKANHAMIQB2AJnsFQIYA2mwAxgNYC+cAZlBBBwA5ElQBaXigDOMYQG4AUIrZMG06XACCAdxmC06RZQYgUALjiyclAOZLpAVzZsZ0mZcqOQAIxRQlXgZgJkcoDzgfYFtgShglRShHSgAKAEoMLkUsxTE0Vk5sXHwiaQAxARBdfTM4AF5yKlp8RhZ2DgAeaukDUiKQOiIAPiUAelG6oYwTM0trWPsrZ1cNCK9ff3k+YNDw6UsomLiuIA) | [example2](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gYQgOwCbAzC4CGANgArADGA1gL5wBmUEIcA5EqgLRMoBnGBwDcAKDHAcMFFCYlqaAKIAPEuDJp0YkgC44QqFIDm4gEb7DJuAB84OAK4gzs8dX0AKAJRwAvAD44ADcIYDxxPH10enF6CW40AGUYIxxjAGkURAEAeRwyRD84bHxCYhxyKjoAHlV1ME0AGgMUk39xAHoOgIw9FtTjeiA)

- `DelimiterCasedPropertiesDeep` - Convert object properties to delimiter case recursively.

	[source](source/DelimiterCasedPropertiesDeep.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gERQG1MGFKAYQEMBnFAEwAUoJVZgVzsUwBfOAM3pDgDkSVAFpuLGAIDcAKBnAAdoSjdSAYzQBVSlAwyArjoCSVAFxwF+kACMisw0QBypECnPkYURQHNZHOYrKqhpw2kQA6gQAFgBiXigKVOR6DlBGCtwQ5mFQ9jpxzInk2ToA2gC6fnJqEAoecFAs+jgw5th4IAREZJS09IwwzKwo7AA8OZEwsfFFADSCIgIAfHAAvHoCqSKKmQLm6DKbOttUe3AAjLOHWwouKGcCACoQIAJXHFdHRGIzSWelMgOXygJzOACZPjc7g8AFJEKCIN4yD6A67HYCncwAZkhx1urgeAGUwMAANb3d5XcrvKRAA)

- `DelimiterCasedProperties` - Convert object properties to delimiter case but not recursively.

	[source](source/DelimiterCasedProperties.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gERQG1MGFKAYQEMBnFAEwAUoJVZgVyBfOAM3pDgHIlUAWg4sYvANwAoScAB2hKB1IBjNAFVKUDJICumgJJUAXHFk6QAIyJS9RAHKkQKE+RhQ5AcymtpyiLNc4KBYdHBgTbDwQAiIySlp6RhhmcgAeDSIAGj5BXgA+OABebV5bKEFgKl4TAEZMyVLNQVlHFGq+ABUIEF561nEgA)

- `Entries` - Many collections have an `entries` method which returns an array of a given object's own enumerable string-keyed property [key, value] pairs. The `Entries` type will return the type of that collection's entries.

	[source](source/Entries.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gUQHYysFAZwF84AzKCEOAciVQFoyiYaBuAKA+FxSjICGAYzSYAHgPAAbNOg6EqKANIpEALjjYAriABGfTsS5CI2QvBADswMFqkCYRHHgKE4AXjgAKFBOlENZ3wiAB5xSTAZAD4ASg8ouF8ImUIAOkswHz9ItHcEgG0OAHoiuAARCCI4BRA0AShdYDx6xDgwShFCQh4AczhTBAALNABrVW8AdybBhGQ0HjJoSxhgAYEANwFge10ZGI4k-3yABgBdVJgIAFUwVCgAYQFCFC8YgBouEvLKtxq6hqaUBabQ6RG62D6AxgwzgmykWjQXim0NmqDgCyWDlW2DgGy2Oz2B2yMnyAEZzpcAGLAMQoAAmrw4pxinA4JjM8EOOUCxNyGD+KnUcFJxE47PMiVwwTcngA8roAFYoIQwVIoKWuLLJFBxJ5wIKuMK8qJi0wSiBaGC2eCeSzWWz2RyEA1EHwaogsz6leVKlWENlm+AQRXKmDhfweDACDQi00c-ohlUuwiBd2EEL0FAQMgJ31h42R-L5GgCGhvYWnU6sr4AQSgQMQ-vF8HqDfDOULJbLFbjEtbAkQydTLlCmezuPrA-b0ULJ3LXdO5bJ5fJVa9cAAsgIwE3A3AMtO+dgUBNN9uvEWuyvK57m-vt0P9WmM3NxxkEp5L6Xr2viqUAMooDAu7xs8+bapGx6noBMAXleFa3nuYGPsmL6oOOyEFp+xbfrQpaLnAy4VlWQA)

- `Entry` - Many collections have an `entries` method which returns an array of a given object's own enumerable string-keyed property [key, value] pairs. The `Entry` type will return the type of that collection's entry.

	[source](source/Entry.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gUQHYyogXzgDMoIQ4ByJVAWmJQGcZKBuAKHeFxSmIEMAxmkwAPfuAA2adO0bkUAaRSIAXHGwBXEACNeHAp0ERszOCH7ZgYTZP4wmOPIjgBeOAAoU4qSnVP8AB4xCTBpAD4ASjdwuABtdgB6RLgAEQgmOHkQNH4oHWA8PJcwMmFGRm4AczgTBAALNABrFU8Ad0L6hGQ0bmJoCxhgOv4AN35gOx1pSPZvUOk4gAYAXQA6GAgAVTBUKABhfkYUD0iAGk5ktIzGLIU4PIKi-DhSiHLK7Bq6mEa4cckmjQHg6v26qDgfQG9mG2Ae40m-GmKFm818cQAjOtNgAxYCiFAAE1OFxWHHYxlM8DRYT8cBCvjcGGyShU6gxBA4lLMKFwL3cAHkdAArFCCGBrXl4YBMLw+WmRZYrB63AKIYLyiJckxmCCaGA2eDuCxWGx2ByMNVePmISLkq5C0XixgUnXwCAisUwBm0pnofjszmuqm1T3itX+G2BGgoCDEUNO72alCxdxxSj8ShnOBY+0pACCUCg-EQLu58DyxcQPukTPTmezueDZkrJbVAGVpV9I85oz04w8i23k6n4ktsxnKGTmxWh9WbQA5bR6KA9oIxget6sjusYxvTpIpACy-DAZbd5lPNbQ7mwKDacBPYA8cXrWZzKxWdpnl7AEfpUYbvGFh-juaaTvueZwO2KAwOeIbHEmCw3ho97QbBL4QR+37llksEdl2VRruqQF4Uhvijm+E6ZtOuGIWqS66LwxF9qgA70WB8R7h+rBAA)

- `Except` - Create a type from an object type without certain keys.

	[source](source/Except.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gUQB4GMVgwC+cAZlBCHAORKoC0pKAzjNQNwBQndaAYhAhwAvBk4BDAFxwAdgFcQAIxRQui6ayjAZAcy65piwQBsU4mVyJceyfoIDqwGAAsIcmAEERcHPkIAeAQgAGhpxajgAHxpcagA+LgB6ROE4jHU4TW0dKyA)

- `Get` - Get a deeply-nested property from an object using a key path, like Lodash's `.get()` function.

	[source](source/Get.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gcRTAvnAMyghDgHIlUBaAlAZxjIG4AoUSWOAKjgEM64AGwgATfgAtCxUmWFi645ixYBjCADsGcAOY44AXjgAeAEL8UAFWQoANHAAKvGJJQAPGCnUiBDKMHXacAA+cFAovCIagohwvv7aANoAugB8ABQQAEYAVigqMABccGZ0ltZ2YE7iRY7OAJRF2DCm5laodrXiKQYpLHISAHS6MBk5eTAVVXWsbOoeUAS8KmgAgmDAAEr0kJpo6CziwDB0RfuHx0UrUFC8iEb7APrAIkVxASwPdBAArlDLpyx1LwQChLtdbvcWNpgAA3TyvGB+ALJFiLEDAaIIpHaFi4XqZYCwcQAEScoNiiPiuNxvVw1NUGi0wwAcsC0IY0rx1ls6DtSpdudtGSg6j0oThOYLecK7GRznQBvKEgAGJIDT4-P4oAZAkFkaYsAD0hv03SuNzu6GhcPUWPiySYhGBGMQdoCeOUxocVT4gi+sW+YA4xz4oXCkXU0T44JiEAIFOxdAZmngLLZAHUjuJOubbgY4JLNkLdgKi9LdqLTeKRlyy3zbHAEnKjnQyDZm8c2+RlV2yBrfste7qUGQknwBGoUwbjaa4LnLdb4Qn7UlHWiXW7tB6jYa4ABlSn5OAgUSglhNIxvRJJWUAZi76Di+SKiO+KDxcBn3SvwTg3y8KAEP4KAiOeOBGFsahQCIl6UgEdhXiksoEBAEAPk+hQIFAb4fl6s4-iE-4iIBwEiEAA)

- `KebabCasedPropertiesDeep` - Convert object properties to kebab case recursively.

	[source](source/KebabCasedPropertiesDeep.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA2gaRQIwIY4DCeAzigCYAKUEqswKJAIiimALpwBmNIcA5ElQBaLoxj8A3AChpwAHYwUULngDGaAKpkocAN7SArjoCS5AFxx5hkDmUzjygHJ4QKSyRhQFAcxkBfWQUlFXUtHQB1YBgACwAxbxR5chJ9I1N5LghLbXt05QSGZJIcnXR2ANk1CHlPOChGQwAbGEtsfCJSCmpaZRgGZlYwAB5cqCjYwqSUgD44AF40-kcoYQUs-ksDZZ018k24AEYAGmkd5WF5VxQD-gAVCBB+U-9T89WeIpSD9Gltlb2BwATG8AVc3LcAFLKKCIZ7SV5-M4A4D7SwAZlBu3BN0s-AAymBgABrG4vU7sF6SIA)

- `KebabCasedProperties` - Convert object properties to kebab case but not recursively.

	[source](source/KebabCasedProperties.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gaRQIwIY4DCeAzigCYAKUEqswKJAvnAGY0hwDkSqAtK0YwuAbgBQY4ADsYKKKzwBjNAFUyUDGICu6gJLkAXHClaQOOeJ1yAcnhAojJGFGkBzcUwmKIUp3CiMWgA2MEbY+ESkFNS0cjAMJAA8anIAfHAAvJpcVlB8wORcRgCMADRiOep8UnYoRdwAKhAgXOVMIkA)

- `MergeExclusive` - Create a type that has mutually exclusive keys.

	[source](source/MergeExclusive.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gWRVA5igUQA8BjAGwFcBnYANxQF84AzKCEOAciVQFpmUVGJwDcAKDHAAdjBzMAhiTTFy1OigBq8qMHkxgEKQEYMYlKUo16RgFxwARhAhkU8qeIYTpsqAqVwVS3UtHT0DKQAmU3NVKxQIuyEdKVwPCR5lCzV6AHkwfUMqOABeOGw8Qiy4gB5A7M1tXQLjABoAquDGsMMIgD5xMRd4GKDc-PCqOzq4vOaqAZH62YmSjEW42wQoCkZxAHo94t64AHVoAGsqMw6xudX0dfUErgALYE4GfcPjs6hL69i6mWhXuj2sdhg2xQbTB8TsnDeHy+RwCUDYUCAA)

- `Merge` - Merge two types into a new type. Keys of the second type overrides keys of the first type.

	[source](source/Merge.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gWRVA5igXzgDMoIQ4ByJVAWmJQGcZKBuAKHZrQDEII4AXgzsAhgC44AOwCuIAEY4O8ycyjApuDgQ5dkaAEKioQkSulzFUbboDGEKczijz2PCgA8fCABo4RqAA+U3QJOABGP3MAJh0gA)

- `PartialDeep` - Create a type from another type with all keys and nested keys set to optional.

	[source](source/PartialDeep.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gBQIa2NgGwBEUUwBfOAMyghDgHIlUBaKlAZxgYG4AoPgGMIAOy5wOKGDGAiA5hwBccAMpSZ8jnAC8GPjBQAPGAFEAJsBjRl6PlVEwVwAF4plARgAs-eyJgBhCAJrRgBiAAZIqN47BwB1FGA5AAsYZU9I-nI+bABXK2FwAik3akJJfjyrDmwAN1KYKFyULP4hUXFsMDACRBU6lDM1aVkFHTgAChr6ofVRpTgcPEISMgAeYY0FAD4ASh1tvSgpXKgRDAA6K8kRzQAaOCuL6cHN+fIsgRutrV0unr6A1mtwUE3QBmM5ksIXQvhgCSSqWUAFZIuRyLt+AADHECABCiDgZhQVDyBBgDxgyWAWnKEDg2Co7EEMFpUCg2EJ2BEZgQuR6aGYnEUAhxWL4oEgsAQyDQWFwMhWpAo1Fo9CYsrYnG4bVkBigpMEaDemj0BG5cly2DkwokjVGAG0ALqfdpieBgBX4AgmhTKJaK4jKjZzTSHXS2c3yK02hYO3I8kmyQZOvgfPhigQASSoCGpWhpcATxI4wA5ACNig9EBBcnBBNy4J6OFosehjoJTpIs34IABBdmchakgiSchYhlaKloSTCHky1AMqCWkAoPwXIA)

- `PartialOnUndefinedDeep` - Create a deep version of another type where all keys accepting `undefined` type are set to optional.

	[source](source/PartialOnUndefinedDeep.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gBQIa2NgGwHkA7AVRIBMUAzYElSgERRTAF84aoIQ4ByJKgC0NFAGcY-ANwAoWfRgooNbAGM0AZRQwY9AObiMsiGD0QSAQQBccSVANzT5kgCFbJAK4gARsrgAPnCeVLT0jHLinj5EZsAWtuiyUTFxFjZwPhAQBCjYJJHRsS7umdm5+YHBoXQMlHLssuxysmoWkggSMNq6BuK2OHiEpBTUtYwsbAA8PXokhgB8cAC8xs7xVrb8NNn8ADSyAPSHcIC8G4CSO3DrFq5wwEYkEADuV2kkhHD5lHBqlX5XIGAukYySKb0SoNSLgyMCgnhQB2OZ0uKWKG1u9zgjxe13eBE+RieKAI+K+Pz+aF4QKUlCaB2aQA)

- `PascalCasedPropertiesDeep` - Convert object properties to pascal case recursively.

	[source](source/PascalCasedPropertiesDeep.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gBQIYGcDG2ANgMJ4oAmmUEqswKuAIiimAL5wBmNIcA5ElQBaLoxj8A3AChpwAHYwUULtnxoAqrmUZpAV21QAkhQBcceXpAAjZTIPKActhApzuGFAUBzGe1kKSipqmoYA6sAwABYAYl4o8hS4ug7G8lwQ5lp2+oZxDIm4WYYA2gC6frL4EPIecFCMekQw5jgExGTaVDR0MAzMrGAAPNlQEdH5CUkAfHAAvLqjRumZi4Ym5gCMADTSo86u5vwAKhAg-Lvsu6OTheYl0uh762ZwAEzXhgduAgBSylBEBdpFdHs9lBs4ABmT5OFw-fgAZTAwAA1ihgaCypdJEA)

- `PascalCasedProperties` - Convert object properties to pascal case but not recursively.

	[source](source/PascalCasedProperties.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gBQIYGcDG2ANgMJ4oAmmUEqswKuAvnAGY0hwDkSqAtK0YwuAbgBQY4ADsYKKK2z40AVVxyMYgK5qoASQoAuOFM0gARnPHa5AOWwgUR3DCjSA5uKYT8EKc7hQjJpEMEY4BMRkalQ0dDAMuAA8qnIAfHAAvBopeoZwAIwANGI5dg5GXAAqECBcxUwiQA)

- `ReadonlyDeep` - Convert `object`s, `Map`s, `Set`s, and `Array`s and all of their keys/elements into immutable structures recursively.

	[source](source/ReadonlyDeep.d.ts) | [example](https://www.typescriptlang.org/play?#code/PTAEBMEMBdIOgFYGcD2A7AUAbwwIgGYoq4BcoA2rgEaQBOuAuhgL4YYigC2kAlmnNCQYenAA4pa0UNACeogKagsAJXmRw6ADYyAIvPmjmofLRSdQAclkKAtPnlJoFgNzCxEqVFgApVGlAAvKC08gCOAK48IQAUFnDAXvDI6BYAlK4YAMbojhAwkGSq6lq6+qIAPNbyKPh5Pn4AfIF1kL7oGfIAHuKSEPL4kOGanvkZHNAO0AJCIj0jsMam5nHA3HwubIlwhChwouFIABaxNLRpriABTfK0prSgACoAygBMAMxvAJxkAAqmCpIZJZ9kcLBAUA5QGgUFIujxcuhpHJFBYQsU0NpQI5aHwAObkBgWIA)

- `RemoveIndexSignature` - Remove any index signatures from the given object type, so that only explicitly defined properties remain.

	[source](source/RemoveIndexSignature.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gJRSCA3FASQDsATFADwGVgBzYgQxgFcoUBfOAMyghDgDkSVAFouKAM4wBAbgBQc4MRgooXBgGM0AUQoNwAGzTo5AelNwAKgAtJaJeQpwJdRizYS4Ad2AGDcACM0NlwCUgA6OQBtCgAuZxgoJVoAXXiGYkRouLhiZhAgqDS4DKyY+IlEAogDYtLs+IADWwZSEQASdCkk4lp2RuLu5Ia4Rs6h3vYRGAZfAYrE4fLRlrbxxcnp2YN5hJ7aEbH0ALolGH7BjYPlxpwg0nI19DyC1QuF-YVzK1sJNEowAZgBpgDADIg4OQuEoUKQ4ABrFCITw+PxwEKzYiRLgQCDxAQBBhQWRyACOzAoAH58YSAF4k9gKYQ6PSGFAAdVB1ggzBgJEcNHoTFYkjgAF44NhQkQyJRBW4RQAeXT6QEoAB88m+YvVGG4uJpRNkcHJVMN9LgAB84MxZdDiLCZHB2EA)

- `RequireAllOrNone` - Create a type that requires all of the given keys or none of the given keys. The remaining keys are kept as is.

	[source](source/RequireAllOrNone.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gJRQRwK7BQoCCANqQPJQByEAdigL5wBmUEIcA5EqgLQsUAZxhcA3ACgJvNNiGQ6AExRQ4AXgzSUADxgB+AFxwAFAEp1APjgiowOgHNJAKyH1DJ82qs27jiUJQAYzwiIwAjCAhSFABDOklGSQlA+hE4Inl6ZSgARiNsfEIScipaBgAeOQVsgBpuGB1ROAAfbhd6LisNdH8gkJQjGCg8FAlEqRS6NIzqlQAmfNwCIjJKGnoUSuFZqDqeRq4Wttc6TvVNBt0jM0tudAAiEGEhGPsUe6N7gAtge8YuGoSdp0a6eKxcB5PIQvN4fOD3CAAaz+AN6wVCCGGo0SQA)

- `RequireAtLeastOne` - Create a type that requires at least one of the given keys. The remaining keys are kept as is.

	[source](source/RequireAtLeastOne.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gJRQRwK7BQoCCMAMigIYDOMA8gHYoC+cAZlBCHAORKoBaNilo8A3ACgJ-NNmqQGAExRQ4AXgzSUADxgB+AFxwAFAEp1APji0owBgHNJAK2oQGhk+bVWbdx1OoUAGM8Ig8AIwgIABsqBklmSQkgt1o4Ink3ZSgjbHxCEnIqWkYUAB45BWyAGl4YHRgeOAAfXhc3HisNdAl2hiMzS150ACIQEWpKexQRoxGIAGsR5h5qiUCQoiMYKDwUCUSgA)

- `RequireExactlyOne` - Create a type that requires exactly one of the given keys and disallows more. The remaining keys are kept as is.

	[source](source/RequireExactlyOne.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gJRQRwK7BQoCiAHgIYDGMANogPIB2KAvnAGZQQhwDkSqALTsUAZxi8A3AChpAtNlGRGAExRQ4AXgxyUpGAC44ACgCUWgHxxxUYIwDmMgFaiIjI2cvWYthzNEolHhERgBGEBA0KOSMMiwy0pRu4nBESm5qUEbY+IQkFNR0TCgAPIrKmQA0fDB6EnAAPnwubrxW2ujSAPRdcACCKip29nDkcAAGtfrjcADWKIhwABbqaADuEHg0KnCU5HgBo7vcYMBRcOpcUAB0si3uJuaaVrzoAEQgYqLk9ihvRm8ILM3ixeJVpAEgiEEFA8ChpPEgA)

- `Schema` - Create a deep version of another object type where property values are recursively replaced into a given value type.

	[source](source/Schema.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gZQMYAsUgCGAvnAGZQQhwDkSqAtGSgM4w0DcAUF8AHYwUUMoWxoAqiyEZeAEwBccNlH4Bzbn0IgUi9FzLAobTdsXK13ADaFjWnUpgq+6rsW7YoKQoIVwAIt4o3KIwwABu9gBGEBCWXnzcYDYsAO7QsgASNrhmjhauPPQSUlAAsjYA1nAAvHA4+EQAPJJCADS0RCwVNHAAPrS4wLIoPf00LLgQKTQAfNxc2BB8bHAAriXlXZgoMKHOLIotZZU1MkOK45PTrVwm9noGRjB3FxNTNDfWtqYdlR+uNzAkz4KAAcqsQJEhAdfl1-h4vD5Xld-iFwvZLu9Ack0lBMtkLoNhv9iEA)

- `SetNonNullable` - Create a type that makes the given keys non-nullable. The remaining keys are kept as is.

	[source](source/SetNonNullable.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gZRTAchAO1wFcAbUgQwCNSUBfOAMyghDgHIlUBaRlAZxjsA3AChRXNADEIEOAF4MoigC44BYiCoooYqmsFRgBAOZwAPnGIEAJikbGUNsQGMA-GqqzaFAhfVkpGJ04pJwmKwo+ESB1LQK4TjRJORxKAA8MhAANBxU7P7sLuwAfGIA9OUIyGgRIFGEKZQ0aIroopVwAJCqAVo6FVVd+nCGxibCcJ0Awr7qcqSEJjpw2la29o42AHQdQ+6e3ii+kzNzBAtLK2sa5LlUxPDA-KMwwORwEGBvhBSku506EA)

- `SetOptional` - Create a type that makes the given keys optional. The remaining keys are kept as is. The sister of the `SetRequired` type.

	[source](source/SetOptional.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gZRTA8mGYCAOwEMAbAXzgDMoIQ4ByJVAWhpQGcYmBuAFADWaAGIQIcALwYBpAFxxiAVxAAjFFEFqA-Ip5RgxAOaCAxorUTyKUsUGUhIuJgYp8hEhWkucHomTkADziEAA0zGpMcAA+zGZMAHyCAPQpCMhoriDuBAHeMugCaXAAkApKqhpaxemluvowhiZ8cCUA6qRccBRQtgAmiHAQeV7kPcT9cDzA5OPAXAB0tWVmenBWEDZ2rSUAkt3EEADuw6OByyWUQA)

- `SetRequired` - Create a type that makes the given keys required. The remaining keys are kept as is. The sister of the `SetOptional` type.

	[source](source/SetRequired.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gZRTASigRwFdgoUATAXzgDMoIQ4ByJVAWhpQGcYmBuAFADWaAGIQIcALwYBAQwD8ALjgA7IiABGKKIM0qeUYKoDmggMbK4miQBsUc1YMpCRcTAxT5ipCtPc43iRk5AA84hAANMyaTHAAPszmTAB8ggD06QjIaB4gXoTBfjLoAplwAJCKKupaOhlZFfpwhsZmcOUA6nJccHK2ZHLkiHBkPiF9quQtMMC2tnDAXAB0ZY3mKjYQ9o58HVkAkr2qEADuo4W+5KvllEA)

- `Simplify` - Useful to flatten the type output to improve type hints shown in editors. And also to transform an interface into a type to aide with assignability.

	[source](source/Simplify.d.ts) | [example1](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gZVGANsAM0QF84CoIQ4ByJVAWgJQGcZqBuAKE7rQAUIzYDGAQAdnwphmcALwYeEMAC44YgK4gARiihdcKAjFUbtursS49kabAC8UkpTPnpOAd2AATGAAsTmjp6nL4owADmvsZqgeacltwA9IlwAJJicIgQ6lBwKF7C0AA0cL4QAG66wGLhcBW6cAAGTtKNcJ64uHDMZe5wAIZkuP0wMChi+XVaAFYoAMbwnn4DnQihcGBSuiIsAHTWqHAtLnDY4PhEADwCQiLix3AAZKfADscAfFyN39yYlCgiEAsODCEEyLwsYBQSYwCAbfrMGSDcr9XDqNAIgZkdRiBaiDL9KDhTTjeB+EalTGDAoEJjQsRkmy7OAAQXgBChrBBYmYqDx4hB8BA-UQ3RQKCoCKE4TE-S0BhK-TEXjW40y2TgBWYc3quVBwBkYgg8B0c366mYaD8aEaKLRKEa1BkvE1hmqwnx7UxEI5ExVVIy1TGUAI-TmKGZ6VVZAgnQgnhqeQAHv1zigSo0CGI2tCAI7qKHApUDIkkhl1AgIGxNABK82gXkurCg1XCJRxAGsje4xO9GpHK9a4Hb0WDXb7JlS4Phg6iStbA-ADQNERFZfKI6zlSDB+tbaj0W1lz7qpPndWLa3o40znhCIg2uoRDPRUOR2hl1K13KDMy4AAhJ8d2vd8j3BN0-RXAZAwZXRQ3DEp9UNY0V2ldcDDgU1zUtaMgzgsMP2Q+BLVRSdtxQXBLXcUJoSxI0xHoZsr02JRtlFHV1FwFUdAGLwIRVWFcNgkMCP2ThUl3K1qxPMQPQFEALRNDEYODeC0AAClQKBfH6aRBS9cCJxVaosT8KEvHoMBCSQNQwCoKy5g7fpwhQABKedQgyId93tNozQyHiZLPJodR5eB31UW8LkQS4-iBdJVII945DgXY0v7OAABVPKaUD2mAVYeK-GUfytOFvKzNpCWJIEGT-AB5XJvLy-zMLQM0uUxG8cGi2L-gS-Dwz7YCsnUOB-NoOBoXoCE5mGWjmoPB1diAA) | [example2](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gZVGANsAM0QF84CoIQ4ByJVAWgJQGcZqBuAKE+ADsYUUAgEMAxmkyUUASX6CR4jJwIQIALji8AriABGgrruFQA-BtZQ+Ac0PCAXhu17BcAD5wtvACYoCfFF5cxNx0ElIAKshoALxKKuqaOvpQtqbmMJa8NpxGDonOUG4e3r7+gZzEXJyiELyscPgCUMK4cLHo8RoAjABMAMwANHBGUBrUABYouLgQ1EO5GgAsAKwAbJXVtfXMEVEakiAokahtDcBNLVw1dfA7h7JNCij7Ug-yYjFnF7hVBJ6iMGAtTIvAAFBBdAArFAAjQAJRh0C8AB4LNYhp4ANa8CAAd14AD4AJQaABuEGAXgwwWUYMaghaRPYcAA9Cy4ABxVReDT05qtCHQgEIKJwYDMODMFAtAK00F3I5RJms9lciA8kUncWS6W4WUEMEKt5CD7KtlwACiUAoozgsh8AA9JcArLxhDAtFA0CpCqEaGistQxRKQOLmNYxbxNWhqEa5CbxNQAHRwABCMOEWilcAABnxHh8c3BRMIo-o4F76BBULx9YbXvGnnBhBLsOB8ERkQcZI2PsTmea1RqMqXmD6qKXc-n3uIi-mIM3c6Ec0A)

- `SnakeCasedPropertiesDeep` - Convert object properties to snake case recursively.

	[source](source/SnakeCasedPropertiesDeep.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gZQHYEMDWKAwrgM4oAmAClBKrMCqQCIopgC+cAZrSHAHIkqALTcmMAQG4AUDODYYKKN1wBjNAFVyUDDICuOgJIUAXHGz6QAI2WzDygHK4QKc6RhQFAc1kc5Ckoq6lo6AOrAMAAWAGJeKNgUpHoOUEbY3BDm2nYGOnGMiaTZOgDaALp+cmoQ2B5wUEz6ADYw5jgExGSUNHTKMIwsbGAAPDlQEdEFCUkAfHAAvCk6APoKmeboecprZnAAjAA021AreK7mAgAqECACxxzHqSu8hUnmpTJbz8B7AExPVbnNyCABSyigiHuMkeXxOu3MAGZATtgZdMGBgIRobDyg8pEA)

- `SnakeCasedProperties` - Convert object properties to snake case but not recursively.

	[source](source/SnakeCasedProperties.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gZQHYEMDWKAwrgM4oAmAClBKrMCqQL5wBmtIcA5EqgLRsmMbgG4AUOODYYKKG1wBjNAFVyUDOICu6gJIUAXHGxaQAIzkSdcgHK4QKI6RhRpAcwnNJiiNmdwoJi0AGxgjHAJiMkoaOjkYRlIAHjU5AD44AF5NaygAfWBDOABGABptdTy8ByNuABUIEG5y5lEgA)

- `Spread` - Mimic the type inferred by TypeScript when merging two objects or two arrays/tuples using the spread syntax.

	[source](source/Spread.d.ts) | [example1](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gZTFFBDAEwF84AzKCEOAciVQFpSUBnGagbgChO60AxCBDgBeDJzwAuOADsAriABGKKFwUB+KayjBpAcy5EuPZGgBCeKCLHqpcxcq4BjKQsEAbfNINHHEaazJBK3RJOABGABo4BSlqACZqQ05ff3gFC2DnMjw3ZhQklIDSQXNLUXQAOiriiCiqivSoJONUOAEIUqtsXEIAHnao0oA+LgB6UYQTNpKM8s5xuABIULslFXmJxZs4LR1dOAAfGXk1w7hZaQIUUh0UAjHNrNcIDzwvDbgibkK0vAAvKwACgsunkKGkMCk7VKAEoREMxAsACJCZiUFAwAAWe04X046T+gJqsPYQA) | [example2](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gZTFFBDAEwF84AzKCEOAciVQFpSUBnGagbgChOBjCAO1ZkIEOAF44AbQCMAGjgAmeQGYAulz6D4AIzxRxU6gBZq86gFZTNAGzV13TUNIiAQnoOSAdN+cR53z10oezo0ADFXdwlsXEIAHlCIUmE-BGQUJLgggD4uAHo8uAiIN30JAApWKGB+AHM4AB84fgBXEG0UKABKSVUHASFdAC8Dcr1atpR+GAAuIsju8WyMTgK4ABFRZkoUGAALGtrOIi5OYfLfUq72IA)

- `StringKeyOf` - Get keys of the given type as strings.

	[source](source/StringKeyOf.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gZRlYA7AcwGkVEB5AMwF84KoIQ4ByJVAWgpQGcYmBuAFADWaAGIQIcALwYBARgBccPAFcQAIxRQANAJ65CJREv34CuqoOHI02A8VJdK4yTLtmjlADwuAfIIB6AKlfZjkmOAAfZlNDUiYgA)

- `Stringified` - Create a type with the keys of the given type changed to `string` type.

	[source](source/Stringified.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gZRlYA7Ac2ADNgUATAXzmKghDgHIlUBaYlAZxkYG4AofizQBhAIZQM-EBHIoANgC443XIQGdUFZXgCuIAEYooAyoIDGEPNzjmJAMWghl2NUVIUAPOKgA+OAC8UjJySkyOEIwANPyaKNpMAIwADImM-JS8QA)

- `ValueOf` - Create a union of the given object's values, and optionally specify which keys to get the values from.

	[source](source/ValueOf.d.ts) | [example](https://www.typescriptlang.org/play?#code/PTAEBMEMBdIOgFYGcD2A7AUAbwwcgGYoq4BcoAjADR4BGkATqaAEzW40CWAXkwMwYBfDBhCgAtpA5o40JBg5iADinrRQ0AJ6KApqCwA1SABsArtoDy+AaHz0UY0Lk06AtPm1JouANzylKtShYUABeUHptAEcTDgiAClw4YCD4ZHRcAEpfDG0AD2VVGxM0AGNoDnRQAHNtaAARGEg4tEgxbTJPeikqjLJDUwt8AB5nbRR8CEaAPj0MCOgTejRJ2ABtFraAXV8hHPyAotLyyvQjDQAhBmbW9tBO7t7QfrNLEa0xiZTKRzpGGZx5otlil1jdtoJhKJ8BwjNoZHIFAU1FgavVGt9ThcGNZbPZHEkJFIfMJUQ1YAlCMQsiJgCEZuRhJjLvQKURMr4QHTQAAVd4AUXodnooDgosZaDOzISv3ZNK5zCAA)

- `Writable` - Create a type that strips `readonly` from all or some of an object's keys. Inverse of `Readonly<T>`.

	[source](source/Writable.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gdSsGBDAIwBsUBfOAMyghDgHIlUBaClAZxjoG4AoHxtADEIEOAF4MPKCjwATCADsiiOHgBccBQFcQBFFF7S5i5XAIaj8pSo44FAcwDaAXS5wA9O7gAVUWwAWEADuCP548CYqMP5oIFr4BMBEuDb4MFpscBAUoWhg1KiwwOwANJoQ8NEowFBwAG54RFqlqtKqFKwAxjAosgB0UjJWpp0aBCIkeAq8pLw8nYoccEE4CSTCEBrYuIQkADwbAHziGOpwAIxl5nCOdABMdM5lowhQzbM8KzvEKBt9eCcAMy8L5rX4iPoERwABmcJzoChQIQaTRQ3A8XkwSSIcA42MoeCSqkyVXqjWaWRy+QghSQcAARAR6XBgJk8UQcQDLJEEMgUANQbtwRBISdbmwaChosAHI83J44FiOctoABrYm5BlMuDU2kqXBsFBEHKs8pwIiKez6ODc6wDfh8uAAZUl2zBJzdQoOIjKdAIdDgAB96J06IdeAqBM7XashSd0DwFQBIW2mM7aXT6CNeJPXVOpOxOVwYuAASU4mQUwWWsZ+fR8MV5qEpmt1+jp0hAhIUmS0CjwHRQ3V6A2TL3GEEm0xL5bolergrria8pCAA)

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

	[source](source/Entries.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gUQHYysFAZwF84AzKCEOAciVQFoyiYaBuAKA+FxSjICGAYzSYAHgPAAbNOg6EqKANIpEALjjYAriABGfTsS5CI2QvBADswMFqkCYRHHgKE4AXjgAKFBOlENZ3wiAB5xSTAZAD4ASg8ouF8ImUIAOkswHz9ItHcEgG0OAHoiuAARCCI4BRA0AShdYDx6xDgwShFCQh4AczhTBAALNABrVW8AdybBhGQ0HjJoSxhgAYEANwFge10ZGI4k-3yABgBdVJgIAFUwVCgAYQFCFC8YgBouEvLKtxq6hqaUBabQ6RG62D6AxgwzgmykWjQXim0NmqDgCyWDlW2DgGy2Oz2B2yMnyAEZzpcAGLAMQoAAmrw4pxinA4JjM8EOOUCxNyGD+KnUcFJxE47PMiVwwTcngA8roAFYoIQwVIoKWuLLJFBxJ5wIKuMK8qJi0wSiBaGC2eCeSzWWz2RyEA1EHwaogsz6leVKlWENlm+AQRXKmDhfweDACDQi00c-ohlUuwiBd2EEL0FAQMgJ31h42R-L5GgCGhvYWnU6sr4AQSgQMQ-vF8HqDfDOULJbLFbjEtbAkQydTLlCmezuPrA-b0ULJ3LXdO5bJ5fJVa9cAAsgIwE3A3AMtO+dgUBNN9uvEWuyvK57m-vt0P9WmM3NxxkEp5L6Xr2viqUAMooDAu7xs8+bapGx6noBMAXleFa3nuYGPsmL6oOOyEFp+xbfrQpaLnAy4VlWQA)

- `Entry` - Many collections have an `entries` method which returns an array of a given object's own enumerable string-keyed property [key, value] pairs. The `Entry` type will return the type of that collection's entry.

	[source](source/Entry.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gUQHYyogXzgDMoIQ4ByJVAWmJQGcZKBuAKHeFxSmIEMAxmkwAPfuAA2adO0bkUAaRSIAXHGwBXEACNeHAp0ERszOCH7ZgYTZP4wmOPIjgBeOAAoU4qSnVP8AB4xCTBpAD4ASjdwuABtdgB6RLgAEQgmOHkQNH4oHWA8PJcwMmFGRm4AczgTBAALNABrFU8Ad0L6hGQ0bmJoCxhgOv4AN35gOx1pSPZvUOk4gAYAXQA6GAgAVTBUKABhfkYUD0iAGk5ktIzGLIU4PIKi-DhSiHLK7Bq6mEa4cckmjQHg6v26qDgfQG9mG2Ae40m-GmKFm818cQAjOtNgAxYCiFAAE1OFxWHHYxlM8DRYT8cBCvjcGGyShU6gxBA4lLMKFwL3cAHkdAArFCCGBrXl4YBMLw+WmRZYrB63AKIYLyiJckxmCCaGA2eDuCxWGx2ByMNVePmISLkq5C0XixgUnXwCAisUwBm0pnofjszmuqm1T3itX+G2BGgoCDEUNO72alCxdxxSj8ShnOBY+0pACCUCg-EQLu58DyxcQPukTPTmezueDZkrJbVAGVpV9I85oz04w8i23k6n4ktsxnKGTmxWh9WbQA5bR6KA9oIxget6sjusYxvTpIpACy-DAZbd5lPNbQ7mwKDacBPYA8cXrWZzKxWdpnl7AEfpUYbvGFh-juaaTvueZwO2KAwOeIbHEmCw3ho97QbBL4QR+37llksEdl2VRruqQF4Uhvijm+E6ZtOuGIWqS66LwxF9qgA70WB8R7h+rBAA)

- `PartialDeep` - Create a type from another type with all keys and nested keys set to optional.

	[source](source/PartialDeep.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gBQIa2NgGwBEUUwBfOAMyghDgHIlUBaKlAZxgYG4AoPgGMIAOy5wOKGDGAiA5hwBccAMpSZ8jnAC8GPjBQAPGAFEAJsBjRl6PlVEwVwAF4plARgAs-eyJgBhCAJrRgBiAAZIqN47BwB1FGA5AAsYZU9I-nI+bABXK2FwAik3akJJfjyrDmwAN1KYKFyULP4hUXFsMDACRBU6lDM1aVkFHTgAChr6ofVRpTgcPEISMgAeYY0FAD4ASh1tvSgpXKgRDAA6K8kRzQAaOCuL6cHN+fIsgRutrV0unr6A1mtwUE3QBmM5ksIXQvhgCSSqWUAFZIuRyLt+AADHECABCiDgZhQVDyBBgDxgyWAWnKEDg2Co7EEMFpUCg2EJ2BEZgQuR6aGYnEUAhxWL4oEgsAQyDQWFwMhWpAo1Fo9CYsrYnG4bVkBigpMEaDemj0BG5cly2DkwokjVGAG0ALqfdpieBgBX4AgmhTKJaK4jKjZzTSHXS2c3yK02hYO3I8kmyQZOvgfPhigQASSoCGpWhpcATxI4wA5ACNig9EBBcnBBNy4J6OFosehjoJTpIs34IABBdmchakgiSchYhlaKloSTCHky1AMqCWkAoPwXIA)

- `ReadonlyDeep` - Convert `object`s, `Map`s, `Set`s, and `Array`s and all of their keys/elements into immutable structures recursively.

	[source](source/ReadonlyDeep.d.ts) | [example](https://www.typescriptlang.org/play?#code/PTAEBMEMBdIOgFYGcD2A7AUAbwwIgGYoq4BcoA2rgEaQBOuAuhgL4YYigC2kAlmnNCQYenAA4pa0UNACeogKagsAJXmRw6ADYyAIvPmjmofLRSdQAclkKAtPnlJoFgNzCxEqVFgApVGlAAvKC08gCOAK48IQAUFnDAXvDI6BYAlK4YAMbojhAwkGSq6lq6+qIAPNbyKPh5Pn4AfIF1kL7oGfIAHuKSEPL4kOGanvkZHNAO0AJCIj0jsMam5nHA3HwubIlwhChwouFIABaxNLRpriABTfK0prSgACoAygBMAMxvAJxkAAqmCpIZJZ9kcLBAUA5QGgUFIujxcuhpHJFBYQsU0NpQI5aHwAObkBgWIA)

## String

- `Replace` - Represents a string with some or all matches replaced by a replacement.

	[source](source/Replace.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBAbwEoFMwBsCGBjFBfOAMyghDgHIYBPMFAWkJQGcZyBuAKA4BMVssoKIgFcAdthjAIouIIw4UAHg4BJUWGHwUADxgpR3JnBZRgogOYAaDgGUUmKNgAWcHXoNGTZqx1TzcIPpauvqGxjCmFhwAfAAUHGYaMABccGpJ1kz2jk6pdg7O1nJYAUGpfiUogaIwHACU5WiViumalnD5Oe0VCtUw0Zw8fAJChGISUjLFCgCC6OjKrcHuYV4W1p3OriEe4ZE+PaU12yueEd4x8YmaqUuZ2c55D05FTb1lcIdVQfWN-kp3DrPbpvI4wdoITDzVIRYT4AZcAD0iLgABUnEJBDBhFAZNRaHBgEYYBjtjh4GtzHB0MA9FAoe1RBB4AArYQsOAAA0pnIAdFxprhYuQMfMIHAAPzkdrkKUywB8G4AQ3fIdU4yIAvNEKKL0OKleQBaCUMKdeKJXKKBbyIBlchVasRmu1KDFcGtUsN-zm6GFAEYAAzJAAsACZkn6-dKKMlI+Q6HaOBqteR-XQQ3RwwaOIKUF7hQB9PPslBQABymECBZjlZl8cTFCLpfLKEz2dz5AAslQ4ABhCAQdBo2noZsyig11UJh1Jzu9-uoofNoA)

- `Split` - Represents an array of strings split using a given character or character set.

	[source](source/Split.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gZTAG2DAXzgDMoIQ4ByJVAWmJQGcZKBuAKHYBMUBjHAIZQ0xAK4A7XjGARxcRrnwAeTHBQAPGCnFdG8mFGDiA5gBo4AETWbtu-YZMA+ABTMHxgFxxM5xijBCAjDQXhYAlF7YeDAq5haOHOw0aACSWhQAvFTEEBCUcAA+VABGQvlFlKUAXuVUAO4COFx5HLyyzHD4KCB6WZQ5EKalUEMCVaYNTS3sOCjwQlACiF5p3QDaALqJC0twWQrRzl095pSmlGGsQA)

- `Trim` - Remove leading and trailing spaces from a string.

	[source](source/Trim.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gFSqAvnAMyghDgHIlUBaAlAZxjIG4AoF7UAHjMIgnIB8LAPTCAvAPIE+ZIA)

## Template literal

- `CamelCase` - Convert a string literal to camel-case.

	[source](source/CamelCase.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gYQIYhQGxwGcUBfOAMyghDgHIlUBaClImOgbgChuB6PnADKoMPhS8AxhAB27OERooAatijBsAI3EAuODjyFsJADx0KECE01q6APjgBeehYgAhWz36CAggBMAN2wZSRQ-XkY0AwJiMIAFalRYYDYTABUHZ3RuAG0AaThgGTgAaxRECAo4NLhjfVwY4xQTPLsAXT00-LbuUi8imBQoCmxQuAAlbAB3AHkwGGBZIgxuOj8oRCYoAFcZOj1NS3FgnnNt-HwAfRGQYHxES5kG-YUYdRkAcx5XPRltkE0Qx4bh84z07HeX24AEUAKoALUucIAGr9-oCoKcZmkABIAUXGTAAYgBJPEAGQAIi9DhBjjIeKQpEt4H5NOM2OcYHpokYSH4EhAkgtUpNZvNFnJMit1ohxrs9G9tigADTcCjnfBE3B3RAAOQaejoNigADoAFZEOhqn5wACMACYAMxqk1G1zW7gAR22AC9odsAB56ABsaogMAAFkMiSl8H49CN8CRepwgA)

- `CamelCasedPropertiesDeep` - Convert object properties to camel case recursively.

	[source](source/CamelCasedPropertiesDeep.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gYQIYhQGxwGcUATABSglVmBSIBEUUwBfOAMypDgHIlUAWg70YvANwAoScAB2MFFA7YAxmgCqJKBkmbFASVIAuOLICuIAEaKpeqADlcKE0RhQ5AcymtpchUtUNLQB1YBgACwAxdxRZUiIdO31ZDggTO1staLo4onStAG0AXW9pFQhZVzgoejN8GBMcPEJsEgoqGhg6RmYwAB47UIjs2PiAPjgAXh0zLWTUk3RJWYNjOABGABplrUc8E14AFQgQXm3WbZWoEdyTAsklq8MTACZL3acDgClFKEQzyQXB47VYmADM70Ue2cfAAymBgABrFAAoFFc7iIA)

- `CamelCasedProperties` - Convert object properties to camel case but not recursively.

	[source](source/CamelCasedProperties.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gYQIYhQGxwGcUATABSglVmBSIF84AzKkOAciVQFpn6YHANwAoEcAB2MFFGbYAxmgCqJKBhEqZASVIAuOBICuIAEYzRmqADlcKfURhRJAc1EMx8iBIdwo9Q-gw+jh4hNgkFFQ0MHREADyWAHxwALzqhqo6+gCMADQiGTI2ePocACoQIBz5DEJAA)

- `DelimiterCase` - Convert a string literal to a custom string delimiter casing.

	[source](source/DelimiterCase.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gERQG1MGFKAYQEMBnFAXzgDMoIQ4ByJVAWlpXJmYG4AUAID0wuAGVQYHCiEBjCADseccoxQA1UlGCkARjIBccbHhAEiZSgB5mtCBABC25gBoWAYmYA+OAF4WewgPPRdBETEAQQATADdSRTkUaKE2NAB5aOicRCtkgAUGVFhgbmsAFV8A9AEAbQBpOGBFOABrFEQIWjhyuAoTXHxCEgoUa3r3Zi9vAF1jcoaZgSpw5uHaUiSJdXSwGGAlcgwBaKhEACUAV0VjPQcZBMFmuRxL6JQAMWAjVRgdRQA5oIgsZFJcQHoiIIqPJDvAoKQAO7EPC7faHYyZbK5UbRQoQYr7MriHZ7A7KKrHZinRAeKDXZjGP6XFCuATMZ6vd4eWjfFCMlihKAAOgAVuQ3AIQXAAIwAJgAzMs+EA)

- `DelimiterCasedPropertiesDeep` - Convert object properties to delimiter case recursively.

	[source](source/DelimiterCasedPropertiesDeep.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gERQG1MGFKAYQEMBnFAEwAUoJVZgVzsUwBfOAM3pDgDkSVAFpuLGAIDcAKBnAAdoSjdSAYzQBVSlAwyArjoCSVAFxwF+kACMisw0QBypECnPkYURQHNZHOYrKqhpw2kQA6gQAFgBiXigKVOR6DlBGCtwQ5mFQ9jpxzInk2ToA2gC6fnJqEAoecFAs+jgw5th4IAREZJS09IwwzKwo7AA8OZEwsfFFADSCIgIAfHAAvHoCqSKKmQLm6DKbOttUe3AAjLOHWwouKGcCACoQIAJXHFdHRGIzSWelMgOXygJzOACZPjc7g8AFJEKCIN4yD6A67HYCncwAZkhx1urgeAGUwMAANb3d5XcrvKRAA)

- `DelimiterCasedProperties` - Convert object properties to delimiter case but not recursively.

	[source](source/DelimiterCasedProperties.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gERQG1MGFKAYQEMBnFAEwAUoJVZgVyBfOAM3pDgHIlUAWg4sYvANwAoScAB2hKB1IBjNAFVKUDJICumgJJUAXHFk6QAIyJS9RAHKkQKE+RhQ5AcymtpyiLNc4KBYdHBgTbDwQAiIySlp6RhhmcgAeDSIAGj5BXgA+OABebV5bKEFgKl4TAEZMyVLNQVlHFGq+ABUIEF561nEgA)

- `Get` - Get a deeply-nested property from an object using a key path, like Lodash's `.get()` function.

	[source](source/Get.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gcRTAvnAMyghDgHIlUBaAlAZxjIG4AoUSWOAKjgEM64AGwgATfgAtCxUmWFi645ixYBjCADsGcAOY44AXjgAeAEL8UAFWQoANHAAKvGJJQAPGCnUiBDKMHXacAA+cFAovCIagohwvv7aANoAugB8ABQQAEYAVigqMABccGZ0ltZ2YE7iRY7OAJRF2DCm5laodrXiKQYpLHISAHS6MBk5eTAVVXWsbOoeUAS8KmgAgmDAAEr0kJpo6CziwDB0RfuHx0UrUFC8iEb7APrAIkVxASwPdBAArlDLpyx1LwQChLtdbvcWNpgAA3TyvGB+ALJFiLEDAaIIpHaFi4XqZYCwcQAEScoNiiPiuNxvVw1NUGi0wwAcsC0IY0rx1ls6DtSpdudtGSg6j0oThOYLecK7GRznQBvKEgAGJIDT4-P4oAZAkFkaYsAD0hv03SuNzu6GhcPUWPiySYhGBGMQdoCeOUxocVT4gi+sW+YA4xz4oXCkXU0T44JiEAIFOxdAZmngLLZAHUjuJOubbgY4JLNkLdgKi9LdqLTeKRlyy3zbHAEnKjnQyDZm8c2+RlV2yBrfste7qUGQknwBGoUwbjaa4LnLdb4Qn7UlHWiXW7tB6jYa4ABlSn5OAgUSglhNIxvRJJWUAZi76Di+SKiO+KDxcBn3SvwTg3y8KAEP4KAiOeOBGFsahQCIl6UgEdhXiksoEBAEAPk+hQIFAb4fl6s4-iE-4iIBwEiEAA)

- `Join` - Join an array of strings and/or numbers using the given string as a delimiter.

	[source](source/Join.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gKQsAdgXzgDMoIQ4ByJVAWiJQGcYKBuAKDYHpO4BZYAB4oAJnAAUTKHgDmDOADI4uAK4gARiigMAlHGAwUIBizhRGygDbxgDAFyUiECADoADM7UBDAF4U2AYwhcJjgwTxgAC3tsPAAeAG0KRwgKABo4V3SKL18AXSznCgA+OABeOETktIysnIpc5wArHFwxCkLtdi4eAHlcC0Q4SRk9AyMTMwZLazsHJw9PKAXfAKCQsMjoloSkp2rsxf26-MpCkvLKvdrD67ymlraOru44PoGlVQ0oUcNjU3MrHpZhQAIzOABMzgAzH5AsF4BsonAYrgEiD0uD0lCTu1imUKui4Ji4Nj7nhHhROkA)

- `KebabCase` - Convert a string literal to kebab-case.

	[source](source/KebabCase.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gaRQIwIY4DCeAzigL5wBmUEIcA5EqgLRUokwMDcAULwHoBcAMqgwAGxT8AxhAB2nOCTooAanijACUgFxxs+IqRQAeBlQgQAQpoYA+OAF5GliC3xQe-IXACCACYAbnjyMigB-MxohgTEZAEACrSosMAcpgAqji7ovADamHDA8nAA1iiIEFRwmXCkBrhxJqaY9gC6+pmF7bzkfLwlMChQVHjhcIQSwADyYDDACiQYvAFQiABKAK7y+jhWUqF8JTISWwEoAGLAesowWvIA5nxu+vJbIDgjfOSyS-BQPAAdyms3mi0U+lixgSyQgqQWGVBcwWSxyKwYa0QLCgOwY+nuWxQABpeAwTmcLmwbih8YxPAA6ABWJAYpNecAAjAAmADMfW4QA)

- `KebabCasedPropertiesDeep` - Convert object properties to kebab case recursively.

	[source](source/KebabCasedPropertiesDeep.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA2gaRQIwIY4DCeAzigCYAKUEqswKJAIiimALpwBmNIcA5ElQBaLoxj8A3AChpwAHYwUULngDGaAKpkocAN7SArjoCS5AFxx5hkDmUzjygHJ4QKSyRhQFAcxkBfWQUlFXUtHQB1YBgACwAxbxR5chJ9I1N5LghLbXt05QSGZJIcnXR2ANk1CHlPOChGQwAbGEtsfCJSCmpaZRgGZlYwAB5cqCjYwqSUgD44AF40-kcoYQUs-ksDZZ018k24AEYAGmkd5WF5VxQD-gAVCBB+U-9T89WeIpSD9Gltlb2BwATG8AVc3LcAFLKKCIZ7SV5-M4A4D7SwAZlBu3BN0s-AAymBgABrG4vU7sF6SIA)

- `KebabCasedProperties` - Convert object properties to kebab case but not recursively.

	[source](source/KebabCasedProperties.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gaRQIwIY4DCeAzigCYAKUEqswKJAvnAGY0hwDkSqAtK0YwuAbgBQY4ADsYKKKzwBjNAFUyUDGICu6gJLkAXHClaQOOeJ1yAcnhAojJGFGkBzcUwmKIUp3CiMWgA2MEbY+ESkFNS0cjAMJAA8anIAfHAAvJpcVlB8wORcRgCMADRiOep8UnYoRdwAKhAgXOVMIkA)

- `LastArrayElement` - Extracts the type of the last element of an array.

	[source](source/LastArrayElement.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gGQIYGcYCCUU2iAogDYogoB2MAvnAGZQQhwDkSqAtMynycA3AChRAExQBjCtihpmAV1rSYwCLThz8AeWYAeAGpwUADxh0JuOAuwTNFRHGy1EAbQC6APgAU8kkQALjgjAEoQnHwiQMpqOhhjbzFRaU18F2JSOABeOHdOZggITgAaOAAmTxSeFAhmbTwYfX8sxDCxAHpOnO84WiUQACMUKCA)

- `PascalCase` - Converts a string literal to pascal-case.

	[source](source/PascalCase.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gBQIYGcDG2ANgMJ4oC+cAZlBCHAORKoC01KuMjA3AFB8A9ILgBlUGCIoB+CADsucXPRQA1bFGDYARlIBccHAWJlcKADyNqECK20bGAPjgBeJgDEbAIQf8hIgEEAEwA3bDl8FCCBFjQjQlJyTDowXHMAFWc3dD4AbQBpOGA5OABrFEQIajh0uDxDPATTC3zHAF0DdIK2vgo-YpgUKGpsSLgAJWwAdwB5MBhgeVwMPkYgqERWKABXOUYDbRspcP4rbaIiAH0RkGAiREu5bBAUfaUYTTkAc35rCAM5NsQNohvwKDIlvAgtpxpxzjADGQXokzEFkhBULBgJxzABZCBBFBEdGpLIrAAiG3GuwMH22KAANHx3OciO5nndEAA5Z4oAyMexQAB0ACtcIwmZ5-nAAIwAJgAzL0eEA)

- `PascalCasedPropertiesDeep` - Convert object properties to pascal case recursively.

	[source](source/PascalCasedPropertiesDeep.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gBQIYGcDG2ANgMJ4oAmmUEqswKuAIiimAL5wBmNIcA5ElQBaLoxj8A3AChpwAHYwUULtnxoAqrmUZpAV21QAkhQBcceXpAAjZTIPKActhApzuGFAUBzGe1kKSipqmoYA6sAwABYAYl4o8hS4ug7G8lwQ5lp2+oZxDIm4WYYA2gC6frL4EPIecFCMekQw5jgExGTaVDR0MAzMrGAAPNlQEdH5CUkAfHAAvLqjRumZi4Ym5gCMADTSo86u5vwAKhAg-Lvsu6OTheYl0uh762ZwAEzXhgduAgBSylBEBdpFdHs9lBs4ABmT5OFw-fgAZTAwAA1ihgaCypdJEA)

- `PascalCasedProperties` - Convert object properties to pascal case but not recursively.

	[source](source/PascalCasedProperties.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gBQIYGcDG2ANgMJ4oAmmUEqswKuAvnAGY0hwDkSqAtK0YwuAbgBQY4ADsYKKK2z40AVVxyMYgK5qoASQoAuOFM0gARnPHa5AOWwgUR3DCjSA5uKYT8EKc7hQjJpEMEY4BMRkalQ0dDAMuAA8qnIAfHAAvBopeoZwAIwANGI5dg5GXAAqECBcxUwiQA)

- `Replace` - Represents a string with some or all matches replaced by a replacement.

	[source](source/Replace.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBAbwEoFMwBsCGBjFBfOAMyghDgHIYBPMFAWkJQGcZyBuAKA4BMVssoKIgFcAdthjAIouIIw4UAHg4BJUWGHwUADxgpR3JnBZRgogOYAaDgGUUmKNgAWcHXoNGTZqx1TzcIPpauvqGxjCmFhwAfAAUHGYaMABccGpJ1kz2jk6pdg7O1nJYAUGpfiUogaIwHACU5WiViumalnD5Oe0VCtUw0Zw8fAJChGISUjLFCgCC6OjKrcHuYV4W1p3OriEe4ZE+PaU12yueEd4x8YmaqUuZ2c55D05FTb1lcIdVQfWN-kp3DrPbpvI4wdoITDzVIRYT4AZcAD0iLgABUnEJBDBhFAZNRaHBgEYYBjtjh4GtzHB0MA9FAoe1RBB4AArYQsOAAA0pnIAdFxprhYuQMfMIHAAPzkdrkKUywB8G4AQ3fIdU4yIAvNEKKL0OKleQBaCUMKdeKJXKKBbyIBlchVasRmu1KDFcGtUsN-zm6GFAEYAAzJAAsACZkn6-dKKMlI+Q6HaOBqteR-XQQ3RwwaOIKUF7hQB9PPslBQABymECBZjlZl8cTFCLpfLKEz2dz5AAslQ4ABhCAQdBo2noZsyig11UJh1Jzu9-uoofNoA)

- `ScreamingSnakeCase` - Convert a string literal to screaming-snake-case.

	[source](source/ScreamingSnakeCase.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gZQMZRQQxGADsBzTY-AaxQGF8BnFAXzgDMoIQ4ByJVALRsUDGDwDcAKEnYIxUXAZcUANXxRg+AEYAbFAC44OPIRLlKNekwA8PNhAgAhdTwB8cALy8AYgHlfAPqOAIIAShJAA)

- `SnakeCase` - Convert a string literal to snake-case.

	[source](source/SnakeCase.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gZQHYEMDWKAwrgM4oC+cAZlBCHAORKoC01KpMjA3AFB8A9ILiZQYADYoBAYwjYucUvRQA1XFGC4ARlIBcovIRLkAPI2oQIAIQ2MAfHAC8TSxAD62u-yEiAggAmAG642DIoAQIsaDgExGQRAAp0qLDAnKYAKo4u6HwA2gDScMDYcISIENRwmXBkhnEmKKaF9gC6BplFbXwUPqUwKFDUuOFwALIQASgSyRBgpBh8wKQAErhgYIgG2lZSofzUAK4SEgBiuCDAEogAcpcoBlya2ADmh1YG2Ecg2kP8FFk8kUAW0ACVOCcYAZYsYEgE5qkYOlSKZJtNZilSDklowVu4ABYbLaMAwwKBHFAAGj4FhOEncIyuN3ceBAKFJTBIUAkuFEVxgBMYNLcBgAjAAmADMvR4QA)

- `SnakeCasedPropertiesDeep` - Convert object properties to snake case recursively.

	[source](source/SnakeCasedPropertiesDeep.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gZQHYEMDWKAwrgM4oAmAClBKrMCqQCIopgC+cAZrSHAHIkqALTcmMAQG4AUDODYYKKN1wBjNAFVyUDDICuOgJIUAXHGz6QAI2WzDygHK4QKc6RhQFAc1kc5Ckoq6lo6AOrAMAAWAGJeKNgUpHoOUEbY3BDm2nYGOnGMiaTZOgDaALp+cmoQ2B5wUEz6ADYw5jgExGSUNHTKMIwsbGAAPDlQEdEFCUkAfHAAvCk6APoKmeboecprZnAAjAA021AreK7mAgAqECACxxzHqSu8hUnmpTJbz8B7AExPVbnNyCABSyigiHuMkeXxOu3MAGZATtgZdMGBgIRobDyg8pEA)

- `SnakeCasedProperties` - Convert object properties to snake case but not recursively.

	[source](source/SnakeCasedProperties.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gZQHYEMDWKAwrgM4oAmAClBKrMCqQL5wBmtIcA5EqgLRsmMbgG4AUOODYYKKG1wBjNAFVyUDOICu6gJIUAXHGxaQAIzkSdcgHK4QKI6RhRpAcwnNJiiNmdwoJi0AGxgjHAJiMkoaOjkYRlIAHjU5AD44AF5NaygAfWBDOABGABptdTy8ByNuABUIEG5y5lEgA)

- `Split` - Represents an array of strings split using a given character or character set.

	[source](source/Split.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gZTAG2DAXzgDMoIQ4ByJVAWmJQGcZKBuAKHYBMUBjHAIZQ0xAK4A7XjGARxcRrnwAeTHBQAPGCnFdG8mFGDiA5gBo4AETWbtu-YZMA+ABTMHxgFxxM5xijBCAjDQXhYAlF7YeDAq5haOHOw0aACSWhQAvFTEEBCUcAA+VABGQvlFlKUAXuVUAO4COFx5HLyyzHD4KCB6WZQ5EKalUEMCVaYNTS3sOCjwQlACiF5p3QDaALqJC0twWQrRzl095pSmlGGsQA)

- `Trim` - Remove leading and trailing spaces from a string.

	[source](source/Trim.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gFSqAvnAMyghDgHIlUBaAlAZxjIG4AoF7UAHjMIgnIB8LAPTCAvAPIE+ZIA)

## Type

- `InvariantOf` - Create an [invariant type](https://basarat.gitbook.io/typescript/type-system/type-compatibility#footnote-invariance), which is a type that does not accept supertypes and subtypes.

	[source](source/InvariantOf.d.ts) | [example1](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gSQHYDcCGUw+2MA8gGYC+cFUEIcA5EqgLQUoDOMTA3ACgBAYwA2+LlzgBBbKHyiMIiNh5QArsJjQAFGHUAjUcGFxs+ECgBccNcGwBzAJToqAtyPGS4AYXzwUAA8YFGwAEylZeUV0AUsIAHcdJww3D1EUeBJo6SgofEQbKJAFAG0AXTgAXjhS7JLRcsEM+GF-XPzC338K6tq2mCaheoUOgr6BscQ+OAB6WbgyAGtx4Ao4YQgCIhIYARHRKYA6fS4ACx1sFASZOQadJhIIGDOUKDgDpicnGfm4AAV1OcUGEPtgwdE4PZtBt2nkCiI4Z0jhRoABRfDCC6mKoAPg2R3iSW+vwW0lEokSILgBnUMAANHA3vR3v44BpSKAUEIWlC8IRiKRiqN4V0cNtBeQKAAeYWiXG9Gp1O4KSoSODigW7SiylXyirNTJ8iW7PwwKY2TU7Ug6s0KypKgZqqRWyW2-z2wQCewmoV6qZ9H1a0hmqakuBovLQGwAFWQaCYru1MrtFSYUKk2GeH0kwAc5iMaBhrATSZtMrl9qYRyAA) | [example2](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gSQHYDcCGUw+2MA8gGYC+cFUEIcA5EqgLQUoDOMTA3ACgBAemFwccAMYQCREpLQAKACYoK+AK4AbGAEohwUiijqFcAGIQIAIUIYBFKwC442DSABGxwR8IueRNgA5gJUBkYm+GaWNoS2AF5wKAAeMCjYylwWVrZQ9r7xLh5WWigkoUKqklqEaNLYPLQ5ftmxUAJVNVB1EA3wjm0JLjG5CUIUGtiSMMC9cADWKIiUI4SKA7nDzVC69t0wGlDYcGQeAFYo0wB0i4hc69u7+FmKtxAUrbm6ANoAuhUCW4rbYPNq7UQAXgAfHBXkt3p9CD9-kCKKsoKDRvh4uDhNDYW8PujkXAPBoYAAaAnwonbBIk-DwKCTGYgFBCUTiY6GWTEKbsgQpSCwWiTaazbl4Qh88gUAA8ABVkCgoYoCFoNCgXErULoXDheSRZYrlTD0AJ9odjurNXBnlzDaRKCbUFDBGEHGKZnNUQbpUb0ZiWn65E75eiobtzZajidzpcYDclvcNki7S9CYidn8Ab6paGYIGef6w0Gdro+HBOXDEAjiTm847CyDiwXKGX6RWq2IAKJQehQFwAQSgQXc6XgCNYaCYIZlzvRCShTDgwCy2Ag8GeXGAQWw+A8pQQEDgYEI+DZaTyU+VzDnRoX22XVyAA)

- `LiteralToPrimitive` - Given a [literal type](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types) return the {@link Primitive primitive type} it belongs to, or `never` if it's not a primitive.

	[source](source/LiteralToPrimitive.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gGWDFUCGANgCoQAKUoOwAbigL5wBmUEIcA5EqgLRMoBnGBwDcAKDEB6SXAByEOBDpRCEfABMBcAHYoU6-QgUBzFPBgALNAGNoUFNfj2YAVyjaEyFGKYvtj4AgPMEIXAQAeYjgUAA9cbU0dFxAAIzw4AB84FOBjYG14LKFKbWMAPgAKGIAuOGIAGjhEWuIASlrsXAISckoQajpIsowxZzcPGLgAajgKxDh8LXxtRFbxegkQsIqOfA5GjhSONbhpOGL84zEtgQqARkaAJhOz7WS0qGvQ27vtJ+0XjIcnkCkA)

- `LiteralUnion` - Allows creating a union type by combining primitive types and literal types without sacrificing auto-completion in IDEs for the literal type part of the union.

	[source](source/LiteralUnion.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gGWDFUCGANgKoB2wEpAvnAGZQQhwDkSqAtLSgM4zMDcAKEEB6EXABCKWtBTC2aAAop4AXhYATCAHNmcAD4sAxvj4G4vKMFLahgo5V5xUMAFxxlalgNHiAyjD4sAjI1tpw1nCIEACuUHAAKsgofkZWYDDsKKT4AEaEKBpwAJIAIgCiAHS+cACasXAAVI0A7sCEhHCkEDDNcNoqcPgxMBDsDuAFMBSkdNBwAAZa2gtDpEULJjCrhDh4RNzVNQCCtLhQ8skeKgBMcOrY50RkMwA8zMt6hsxbzAA0FhgVhsAD47A5SE4XO5PHd1MwfGI6g1mm0On0BvBhqNxowwFMZnN4ksdKt8OtFlsdnsCIRDkA)

- `Opaque` - Create an opaque type, which hides its internal details from the public, and can only be created by being used explicitly.

	[source](source/Opaque.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3geTAQwI4CuKAvnAGZQQhwDkSqAtGSgM4w0DcAUF-WgIIBjQRAIA7GADkCIAEYoocALxxs+IgB4xM+VAA0tISPFSdCmgD5ufOEdESAQjgA2OMYLQq1hFFrP7DYXsYJ1d3FEtuLgB6aLgAFQALNAADeIgAaxQxFLhcKBwQFBgFOBdnCAB3FgRkuBFwYGdSmAg4ABNgMmYobJhgHBK4eRhKlGyEZFYDSuTenBqAInEMsSqxRbhKpuc4NZgAOjgAMWg4FAAPQrBmgxExFmB2lrqyCGcK7bEAczg2KAIghgBF6LAAXLwpglEsAfpgxJ5VLgfBp-rDvlZIahoej4pU2l5kZo0T9MTE4ulamgGmAmgoDDBkiw0HwajhemUPlUUO0EG15PUFvBWuccIJEnAIIzSgsqYg4IkcAA3Fl1FiFNDiZ5QZyIdGTVBHJIoeXstCyKUSlIk34AMgwcAA+o6IESUM6wXAVmtKmI4MQUgdyQk2sqIE9asAavJFUrgKIAohRFtRM5ebC2CgcLzcCwatK4It0lkNnl2RqSgFnMAsn8IEGbJIUJUkuj4YjvMSYFB0QYaK24QjIli0E2WzCfniCUj1L4bX2B98p8Pg5IqnKaByac0Srq-ih8oMWVMWAYWG0C28uV9ftsPuQcE0+fUqLTmkGyOIgfG-YJ5iUx0Xds4AACgASk9QCJ2+YD0GDfgaiTAhBT9ZkUDuIV9QoKgyj+bt9SjPCdk5T4eSOAAJbkVUTZMQBweV9kFNg4CgtsEWfVjJ3xAw3F5OMPDgaj1SDXpgSgP0aARSpIx+SUhzKGpOJghFuGIHhYhxGo712MhH12EUaTpHj82SU0OU-MR2g1CRynlTpugUPoDVYIN7mYxlcXxZR6n-FAlPbcCFJY5tFynKINPIxyaDZfY5nOK5wGaSUyElN0DXRD8v36CBf18uwTGkOQFHAz18okQrdAwLhRJBP0ACYgrK0wiqgVSeAs78crgb5igAWRyk1TigJqQLFYxyv8UqggK-wINsabHBcNwBLgmrxLgAAWRqFpCJbwja4NWy04jDKSlhAQ8PNPw+RAgx6mB+oRRAhpGv8sxKJqKuKsCwPCuIHAIYUYS0nK6AMeRBBwAhmTgYB4EVfN+TQS4bmAQQ4b3XNmV5WU3DgFJPv8XI+DuvqBue6ARrq371LiABNZNIb9aG0FdWdBJcIgamrWtpTM7I6FS9nWnrLg3PgMbgi+xQVDeo9CZa8C-s0rZiMY060HO4RWBYa7dVcnLmKkhXKpUSWZpauAAGo4Dq5WENwx5nj2KV0LgJCUNA3i-kSVN2jAr0Yd6QQQUeFVnJqN5FCQxQ2Z8CPnzo3nkmof4cp6xRvd91A9flLNHhaC8pgbKEAAUFHPP0VDgp5PU7XxtBagxy6gSvMTEDVPRtVSOCAA)

- `UnwrapOpaque` - Revert an opaque type back to its original type by removing the readonly `[tag]`.

	[source](source/UnwrapOpaque.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3geTAQwI4CuKANHAKoB2A7lDmNvkQL5wBmUEIcA5EqgLSsUAZxjcA3AChJfNAEEAxgogEKMACrI0AXjgNCKADzcAynIBqASQByAcRPc4AHx4BhABIBRVwGkbt7lJuRWVVDS1uAD4pSWUKUTgQCAoURAAhRBCVNU1UAC44ACUUZSgAE0NKGjp9IkMssNyUSNIKAhAAIxQoSLhddEkzKzsTAoBOMeJJD28-OwKABgA6AEZJJhiAek24AHVgGAALFXgq2npcA1IjtFYIABt7iCpgCgBzOBQADzAoEWFgMk4FQVPcyghDhwqHAcAgtJ8oBwoEtYskEkkUog+olkqkMg0clolkN-CZxHBtnB1CYEUiCgAFDioWBY0wWUmOMoQERwCgQeDfYCiaSUuQwGAocAwV4fGAQOC4YTCGEUXnJfi1NCyBDys41S5EYHAR5wWhCtCw7XdJEo7W7ZIwe1QADW2L1F0YRlEUBl0SAA)

- `Primitive` - Matches any [primitive value](https://developer.mozilla.org/en-US/docs/Glossary/Primitive).

	[source](source/Primitive.d.ts)

- `UnionToIntersection` - Convert a union type to an intersection type using [distributive conditional types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html#distributive-conditional-types).

	[source](source/UnionToIntersection.d.ts) | [example1](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gVQHbAtgFQgElsYUoBnFAYxj2wF84AzKCEOAciVQFoWKSjC4BuAFDjeaHAzgBeDDAAWKABQBKAFxwAbhGAATZgB8MAcygoAhjDXWo5ncKjBs57XoPG4Z9EJprVB0AIwgIABsbJgkpZDRScipaenwFOFl8IkSKajoGAB5M7AA+CQB6cvkSpVVNHX0jUThLGzsHJzgXNw8G72aAoJRQ8KjrGPEAA2nJAEE4EGg0ILAI4ECQqLgUAA9rcC2Ad2V15TgaCABXCMMF6wBrNGAYSjhD60Q4NxgIOEQrqBwNYhKAOT4XQxoFiRCIQQ6UAB0QA) | [example2](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gVQHbAtgFQgElsYUoBnFAYxj2wF84AzKCEOAciVQFoWKSjC4BuAFDiaAGwCGlSnADCHELOwATAPLY06KavUbKALgzjZARjMAKAJRwAvAD44AV00oWwXRoA04gBG1nD2Tq4eGl4+KP7ijPGSMvKKKiBqmgQA7hDmNIaapuayAEy2slAA5gCCZsJQPpUOLu6e3r4BgWWhFZUAQnUwDdhN4a1R7bEBCQkG2MKtDE5wANq6WcoF2rr2fnDrm+lG2RD2ALoAdGpgNj7C6jRoLXcwDygX+UeFdhK8aDhLRwIZAoCAsRb4CQAeihLXQVnsZgAbhBgBpRHBgoi4Ci0cwAD4YUo2Xq1OD1Rp2ZGo9GYkokqoDclDSnUvGSP5wUjkKi0ej4ZYA-BEbkUah0BgAHiF2Gc0NhrnhlmxuNpWKpOJpGOJpMGwyabLV9N6TIpIw1qsYQA)

## Utilities

- `Exact` - Create a type that does not allow extra properties, meaning it only allows properties that are explicitly declared.

	[source](source/Exact.d.ts) | [example1](https://www.typescriptlang.org/play?#code/C4TwDgpgBA8gdgGxAQQMaomYA5AhgW2gF4oBvOAiALigGdgAnASzgHMBfAbgChuAzAK5xUwJgHs4UCUjQYseQgApcDVrRrwZ6TDkoBKMu14B6Y1AAq4CAGVUzLFFRj8YBLha0ouAEZiBwKAgADwxaTzAGMUgGUQhPAHcACwhJXEkxbwArCBEoBCZgCAZcBCgmcMiANyYAEwgagDpuaRRteUpFckoaAHIKQh6AGjKamgBGdj0eUyIAPigAA1qFss9g0NoTM0tIW3sAmrE4qDgxAKcXNxYvX39AkLiKqKLYhOTJYGSoCLFqupqoJUSgJoOUvICVEwfAhoIpTgE0lIsjkAvlCsUEHomk44PQynAgfkagBJOBgO4kLqEXr9CBDEbjLjNRCtOS6JQsQm1Unk4BTKCmKDYMSBBiRBibBZS3gACVw1TYiwAokFcCIViUEGJ4p4djY7EwHMARQwINlcutHt9ItFXg0gA) | [example2](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBAbwKIA8CGBjGBfOAzKCEOAchgE8wBTAWjyoGcYSBuAKDYurgHkA7ADbkAghgxUwMAHJoQVOAF5EfWVQBccJlGB8A5tnZs8AVz5ZgEPnEtDR4yTLkBJcIQBuVACYAeACpwqFBgqPk8GOFRMGG9+WzEJaVUAGjhfAD40gAo0KF0GDV8ASkRsDgxLJjgdNzQBYE8nPjBjeCUEFTkNEg6qEhT6jQBGAzYbEXiHVRcwdy9M6tr6xuaYQpY4AHoNuABhIjBgATQYCysqKEIoNgADW44AbQAlKjRPOBBoKgBdTIALGBgYHyWyYmAA1hAPFA8AIIAB3AB05RAGwAjsZGCcKhsACwATgArAAOAAMAHYAEwEjbABg0YAwGiQBgMYAAIwEtBgEBoUEx2iwNC4jAw2kkNAgbIAVlRBdyaOU+DA0DoJYJyEzCNRYMBGDRPFQ8DovIUgA)

- `HasOptionalKeys` - Creates a type that represents `true` or `false` depending on whether the given type has any optional fields.

	[source](source/HasOptionalKeys.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gCQIYGcDyYMwEAdtgDYDSKiuANHIcWZTXfgGYC+cnUEEHADkSVAFpOKXDGEBuAFAKxaAKpgAJthgoAyiigA3YAGMUAHgCipYkjgoAHjtIbccCACMAVihMwAfHAAvBgKUCggEIYoAGLAKBQaAFxwOAREJOTUtLhWNsBIgY7OrghQAK4oCgD8cAAUnPGJKcyZbDlcebaI-gCUwYEACgIgwLgWhhDAGv4KKaQo0VAK3EA)

- `HasRequiredKeys` - Creates a type that represents `true` or `false` depending on whether the given type has any required fields.

	[source](source/HasRequiredKeys.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gCQIYGcBKKAjgK7BQoAmA0iorgL5wBmUEIcA5EqgLTMpcMTgG4AUGJ5oA4igB2KKNhjQA8mBjAIc3AB4AKinAAbZWhQAPGPMq44EAEYArFAGMYAPjgBeDGLBsYACMAFxwciQgDoriARBgAExhQlDAcgDm4kwAZHAAFDgExGQUNHR6hiZmXpbWcrYIUCQoYgD8GNZV1mGVYKbWDGJh6J19Zq09RmMDAJTiYmnWUMzYrmi9-ShBfvGa2tjGAMokDgAK2EogE3ApaZligwtySytrcBtmCX4UpORUx2cLtgQMkYKkMlkJFI4Oo9jptr5ZAolCooLCtDoDFNNkEPOJoejtLgvoj5IplGoNBiKtjPniJK4ifBdgBBMKE+E+PxxYJhAAMABp-IEklwABbATgPcSMnTMjQAIXZVKJCO5gVCcEFwvios4Es4QtGm2GgwYMqZ9g0AGFlXDcGr0DreVqhTy9QajbTujsVXIDgDzpcwpxdhiDnAAG4HZpSs3zWVCK0wAAidupJPV8U12vdIc9km9KGGYh+JX+JyDwJDZb+lCjMZQcelQA)

- `OptionalKeysOf` - Extract all optional keys from the given type.

	[source](source/OptionalKeysOf.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3geTDYEB2AhgDYDSKiAzpgGYA0cAogB4DGKOAvnDVBCHADkSVAFoaKSjEEBuAFBzg+GCig1C7OAFVKqjHKIgUALjhSoSgObzKAVyiGTZmBfzWFxW6wDWiAHK2IABGqgD8pviBIVDynAqsBFJwAEqMALKYAGqMAPoAYgCSjAAyACJwALxwAMqIwRDEABSCUCggEABuaDTAKMQAJmZ1QQ2CAJTyImhaYP2EKtiq83j4ADyMysBIcCjMKvj9lHAQQQBWKKwwAHyVTGwcMKsACoSwwCTrm0hXDNi4BCRyFRaJ9cN8bgAyfQAbSBcCUcD+K0BFGoNFBW0QVwAuuEmF9ELCKNi4AAfBDIFAQGgpdJZXKFEqlWLyOQJfBJWyzeYoACMphmcwWqCgywIqx0qhuVXQBkIRlMggAgsRgOxBHJOKz2ZzuSoAEwCvUoRai-5rSVQaX6RyKgBCJ0EdDknh8-iiqlMqQy2XyRTKmpkQA)

- `ReadonlyTuple` - Create a type that represents a read-only tuple of the given type and length.

	[source](source/ReadonlyTuple.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBAbwEoFMCGATCA7ANgTwBUBXMXFAXzgDMoIQ4ByGfMFAWmpQGcZGBuAFCCWbOADEU2AMbBsAc0LoGAXjipMOAiTIoAPLyhz5AGjgBmAHxDB0nLzjziPGJJnGlaEAC4JU2QqeqnAA2owAUhDcABaMZowAssDS0WgouHFMSBAARiiwjAC6NnbYDtH0KG4Bisq+1R7KcGphAOIo0PIomREQ0dhFQgD0QyqWcPl0UHCEAMoATObz876ErChwhsYhhXDA3HDYEPBo3NzA8thoOeRwMBB360wNgcqMwk4uL7VeAHRgxBiAApGLMvIwAJTDUbjSbQGYLczmACcvgACnQ2LB8EwATFGHAsDxDscJgAPfbwHCPMSMb5BRhAA)

- `RequiredKeysOf` - Extract all required keys from the given type.

	[source](source/RequiredKeysOf.d.ts) | [example](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBDAnmApnA3gJRQRwK7BQoAmA0iogM4DyAZgL5y1QQhwDkSqAtLSpTHYBuAFAjiKAMYAbAIZEmeAHaSYwCEriSismCgBqs6cGK71SgDwBRJWqRwUADz1LilOBABGAKykwANHDkiA7OKK7u2PiEJME0tNa2wEgAfHAAvHBRBERkFPGJdogpKQAUtMAo0sQAXEEUgQBuRia60HWlzdJ4KHU2RQDawQC6AJQZaZ4QENIoskqjdYbGpjDQAGJKoiLAtihQtLKSaACqlPsYIkqyIL1wAlC7AOailHhQ17d1D8-b3ZIAa0QADk8CBPPsAPx1JRgiFQUT0MSSDQCOBdVprKAARgyWh0emWmPMFjO+zK7E+KHYTSMPQm6LpKAAdLMlE8YAALOAWOAAJgArKNRCilGiMatoHy8do5oSWqsSWSoBS3h8btTad00Ok0l0eqzwhzubzBcKgA)

