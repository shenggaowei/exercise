namespace readonly {
    interface Todo {
        title: string
    }

    const todo: Readonly<Todo> = {
        title: 'Delete inactive users',
    }

    todo.title = 'hello';
}