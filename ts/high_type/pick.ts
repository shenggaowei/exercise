/**
 * Pick<Type, Keys>
 * Construct a type by picking the set of properties Keys (string literal or union of )
 */

interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

// 类型必须包含 title 和 completed 两个属性
type TodoPreview = Pick<Todo, "title" | "completed">

const todo: TodoPreview = {
    title: "Clean room",
    completed: false
}