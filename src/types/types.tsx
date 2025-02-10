import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {IUser} from '../mockData/users';

export interface EditUserScreenProps
  extends NativeStackScreenProps<any, 'EditUserScreen'> {
  route: {
    params: {
      user: IUser;
      setUsers: React.Dispatch<React.SetStateAction<IUser[]>>;
    };
  };
}
export interface CreateUserScreenProps
  extends NativeStackScreenProps<any, 'CreateUserScreen'> {
  route: {
    params: {
      setUsers: React.Dispatch<React.SetStateAction<IUser[]>>;
    };
  };
}
