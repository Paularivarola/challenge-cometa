const TOKEN_KEY = "accessToken";

const customSessionStorage = {
  getAccessToken: (): string | null => {
    return sessionStorage.getItem(TOKEN_KEY);
  },
  setAccessToken: (token: string) => {
    sessionStorage.setItem(TOKEN_KEY, token);
  },
  clearAccessToken: () => {
    sessionStorage.removeItem(TOKEN_KEY);
  }
};

export default customSessionStorage;
