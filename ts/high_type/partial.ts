/**
 * Partial<Type>
 * Constructs a type with all properties of Type set to optional. This utility will return a type that represents all subsets of a given type.
 * 返回一个新类型，其中的 Type 类型值为新类型的可选属性
 */
namespace partialTest {
    interface Todo {
        title: string,
        description: string
    }

    // fieldsToUpdate 的类型是 Todo 类型的可选属性
    function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
        return { ...todo, ...fieldsToUpdate };
    }

    const todo1 = {
        title: 'organize desk',
        description: 'clear clutter'
    }

    const todo2 = updateTodo(todo1, {
        description: 'throw out trash',
    })
}