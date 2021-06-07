/**
 * Omit<Type, Keys>
 * Constructs a type by picking all properties from Type and then removing Keys(string literal or union of string literals)
 * 新类型将会移除 Type 中的 keys 属性值
 */
namespace TestOmit {
    interface Todo {
        title: string;
        description: string;
        completed: boolean;
        createdAt: number;
    }

    type TodoPreview = Omit<Todo, "description">;

    const todo: TodoPreview = {
        title: 'clean room',
        completed: false,
        createdAt: 11,
        test: 'hah'
    }
}