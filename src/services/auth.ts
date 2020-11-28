interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

export function signIn(): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: '654sdf87sd6f214sd8ads5fgs65dasd98asd4d44d65asd',
        user: {
          name: 'Wallace',
          email: 'wallace@email.com.br',
        },
      });
    }, 2000);
  });
}
