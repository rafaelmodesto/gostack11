interface TechObject {
  title: string;
  experience: number;
}

interface CreateUserData {
  // aqui usamos o ? para indicar que o atributo não é obrigatório.
  name?: string;
  email: string;
  password: string;
  // aqui usamos o | para indicar que o Array poderá receber os dois tipos, string ou TechObject.
  // quando o Array dor de apenas um tipo podemos defini-lo como 'string[]'.
  techs: Array<string | TechObject>;
}

export default function createUser({ name, email, password }: CreateUserData) {
  const user = {
    name,
    email,
    password,
  }

  return user;
}
