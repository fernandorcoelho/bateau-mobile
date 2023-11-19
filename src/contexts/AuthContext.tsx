import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState
} from 'react';

import { IUserRequestDTO, IUserResponseDTO } from '@dtos/user.dto';
import { api } from '@services/api';
import {
  getStorageUser,
  removeStorageUser,
  setStorageUser
} from '@storage/user';

interface IAuthContextData {
  user: IUserResponseDTO;
  loadingStorageUser: boolean;
  isAuthenticated: boolean;
  signIn: (payload: IUserRequestDTO) => Promise<void>;
  signOut: () => Promise<void>;
  getUser: () => Promise<void>;
}

interface IAuthContextProvider {
  children: ReactNode;
}

export const AuthContext = createContext<IAuthContextData>(
  {} as IAuthContextData
);

export function AuthContextProvider({ children }: IAuthContextProvider) {
  const [user, setUser] = useState<IUserResponseDTO>({} as IUserResponseDTO);
  const [loadingStorageUser, setLoadingStorageUser] = useState(true);
  const isAuthenticated = useMemo(() => !!user.accessToken, [user]);

  const signIn = useCallback(async (payload: IUserRequestDTO) => {
    try {
      const response: IUserResponseDTO = await api.post('auth/login', payload);

      if (response) {
        setUser(response);
        setStorageUser(response);
      }
    } catch (error) {
      throw error;
    }
  }, []);

  const signOut = useCallback(async () => {
    setLoadingStorageUser(true);

    try {
      setUser({} as IUserResponseDTO);
      await removeStorageUser();
    } catch (error) {
      throw error;
    } finally {
      setLoadingStorageUser(false);
    }
  }, []);

  const getUser = useCallback(async () => {
    try {
      const user = await getStorageUser();
      if (user) setUser(user);
    } catch (error) {
      throw error;
    }
  }, []);

  useEffect(() => {
    getUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loadingStorageUser,
        isAuthenticated,
        signIn,
        signOut,
        getUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
