const AuthEndpoints = {
    createUser: () => `/users/create`,
    loginUser: () => `/users/login`,
}

const TasksEndpoints = {
    createTask: () => `/tasks/create`,
    updateTask: (id: number) => `/tasks/update/${id}`,
    getTasks: () => `/tasks/`,
    getTaskById: (id: number) => `/tasks/${id}`,
    deleteTask: (id: number) => `/tasks/${id}`,
}

export { AuthEndpoints, TasksEndpoints }