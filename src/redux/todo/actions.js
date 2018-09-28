export const TODO_ADD = "todo/TODO_ADD";
export const TODO_ADD_SUCCESS = "todo/TODO_ADD_SUCCESS";
export const TODO_ADD_FAIL = "todo/TODO_ADD_SUCCESS";

export const TODO_EDIT = "todo/TODO_EDIT";
export const TODO_EDIT_SUCCESS = "todo/TODO_EDIT_SUCCESS";
export const TODO_EDIT_FAIL = "todo/TODO_EDIT_SUCCESS";

export const TODO_DELETE = "todo/TODO_DELETE";
export const TODO_DELETE_SUCCESS = "todo/TODO_DELETE_SUCCESS";
export const TODO_DELETE_FAIL = "todo/TODO_DELETE_SUCCESS";

export const TODO_GET = "todo/TODO_GET";
export const TODO_GET_SUCCESS = "todo/TODO_GET_SUCCESS";
export const TODO_GET_FAIL = "todo/TODO_GET_SUCCESS";

export function todoAdd({name, priority, date}) {
  return (dispath, getState, client) => {
    dispath({type: TODO_ADD});
    const AddTodo = client.gql`
      mutation Todo($name: String, $priority: String, $date: String) {
        addTodo(name: $name, priority: $priority, date: $date) {
          id
          name
          priority
          date
        }
      }`

    client.client.mutate({
      mutation: AddTodo,
      variables: {
        name, priority, date
      },
      update: (proxy, { data: { addTodo } }) => {
        console.log(addTodo, "this is add todo")
      }
    }).then((data) => dispath({type: TODO_ADD_SUCCESS, data}), err => dispath({type: TODO_ADD_FAIL, data: err}))
  }
}

export function todoEdit({id, name, priority, date}) {
  return (dispath, getState, client) => {
    dispath({type: TODO_EDIT});
    const EditTodo = client.gql`
      mutation Todo($id: String, $name: String, $priority: String, $date: String) {
        editTodo(id: $id, name: $name, priority: $priority, date: $date) {
          id
          name
          priority
          date
        }
      }`

    client.client.mutate({
      mutation: EditTodo,
      variables: {
        id, name, priority, date
      },
      update: (proxy, { data: { editTodo } }) => {
        console.log(editTodo, "this is edit todo")
      }
    }).then((data) => dispath({type: TODO_EDIT_SUCCESS, data}), err => dispath({type: TODO_EDIT_FAIL, data: err}))
  }
}

export function todoDelete(id) {
  return (dispath, getState, client) => {
    dispath({type: TODO_DELETE});
    const DeleteTodo = client.gql`
      mutation Todo($id: String) {
        deleteTodo(id: $id) {
          id
        }
      }`

    client.client.mutate({
      mutation: DeleteTodo,
      variables: {
        id
      },
      update: (proxy, { data: { deleteTodo } }) => {
        console.log(deleteTodo, "this is delete todo")
      }
    }).then((data) => dispath({type: TODO_DELETE_SUCCESS, data, id}), err => dispath({type: TODO_DELETE_FAIL, data: err}))
  }
}

export function getTodos(order) {
  return (dispath, getState, client) => {
    dispath({type: TODO_ADD});
    const getTodo = client.gql`
      {
        todos {
          id
          name
          priority
          date
        }
      }
    `
    client.client.query({
      query: getTodo,
      variables: {
      }
    }).then((data) => dispath({type: TODO_GET_SUCCESS, data}), err => dispath({type: TODO_GET_FAIL, data: err}))
  }
}
