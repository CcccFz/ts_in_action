// T extends U ? X : Y

type TypeName<T> =
    T extends string ? "string" :
    T extends number ? "number" :
    T extends boolean ? "boolean" :
    T extends undefined ? "undefined" :
    T extends Function ? "function" :
    "object"
type T1 = TypeName<string>
type T2 = TypeName<string[]>

// (A | B) extends U ? X : Y
// (A extends U ? X : Y) | (B extends U ? X : Y)
type T3 = TypeName<string | string[]>

type Diff<T, U> = T extends U ? never : T
type T4 = Diff<"a" | "b" | "c", "a" | "e">

type NotNull<T> = Diff<T, null | undefined>
type T5 = NotNull<string | number | undefined>

type T6 = Exclude<"a" | "b" | "c", "a" | "e">
type T7 = NonNullable<string | number | undefined>

type T8 = Extract<"a" | "b" | "c", "a" | "e">

type T9 = ReturnType<() => string>