export interface AuthInterface {
	id: number;
	name: string;
	email: string;
	phone: string;
}

export interface TaskInterface {
	id: number;
	title: string;
}

export interface LoginRequestInterface {
    email: string;
    password: string;
}