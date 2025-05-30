function add(a: number, b: number) {
    return a + b;
}

type AddFn = typeof add;

type ReturnValueType<T> = T extends (...args: number[]) => infer R ? R : never;
type AddReturnType = ReturnValueType<AddFn>;