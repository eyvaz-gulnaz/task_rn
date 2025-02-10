import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {IUser, usersData} from '../mockData/users';
import {Button, DataTable} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {MMKV} from 'react-native-mmkv';

const storage = new MMKV();

type RootStackParamList = {
  EditUserScreen: {
    user: IUser;
    setUsers: React.Dispatch<React.SetStateAction<IUser[]>>;
  };
  CreateUserScreen: {setUsers: React.Dispatch<React.SetStateAction<IUser[]>>};
};
type NavigationProps = StackNavigationProp<RootStackParamList>;

export const UserManagementScreen: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>(usersData);
  const [page, setPage] = useState<number>(0);
  const rowsPerPage = 10;
  const navigation = useNavigation<NavigationProps>();

  useEffect(() => {
    const loadUsers = () => {
      const storedUsers = storage.getString('users');
      if (storedUsers) {
        setUsers(JSON.parse(storedUsers));
      } else {
        setUsers([]);
      }
    };
    loadUsers();
  }, []);

  const handleDelete = (id: number) => {
    const updatedUsers = users.filter(user => user.id !== id);
    setUsers(updatedUsers);
    storage.set('users', JSON.stringify(updatedUsers));
  };

  const handleEdit = (user: IUser) => {
    navigation.navigate('EditUserScreen', {user, setUsers});
  };
  const handleCreateUser = () => {
    navigation.navigate('CreateUserScreen', {setUsers});
  };

  useEffect(() => {
    storage.set('users', JSON.stringify(users));
  }, [users]);

  return (
    <View style={styles.main}>
      <Button
        mode="contained"
        onPress={handleCreateUser}
        style={styles.createButton}>
        add user
      </Button>
      <ScrollView horizontal>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>ID</DataTable.Title>
            <DataTable.Title>User </DataTable.Title>
            <DataTable.Title>Date</DataTable.Title>
            <DataTable.Title>Status</DataTable.Title>
            <DataTable.Title>Actions</DataTable.Title>
          </DataTable.Header>

          {users
            .slice(page * rowsPerPage, (page + 1) * rowsPerPage)
            .map(user => (
              <DataTable.Row key={user.id}>
                <DataTable.Cell>{user.id}</DataTable.Cell>
                <DataTable.Cell style={{paddingHorizontal: 30}}>
                  {user.username}
                </DataTable.Cell>
                <DataTable.Cell>{user.date_created}</DataTable.Cell>
                <DataTable.Cell style={{paddingHorizontal: 20}}>
                  {user.status}
                </DataTable.Cell>
                <DataTable.Cell>
                  <View style={styles.buttons}>
                    <AntDesign
                      onPress={() => handleEdit(user)}
                      name="edit"
                      color="blue"
                      size={24}
                    />
                    <FontAwesome
                      name="remove"
                      color="red"
                      size={24}
                      onPress={() => handleDelete(user.id)}
                    />
                  </View>
                </DataTable.Cell>
              </DataTable.Row>
            ))}
          <DataTable.Pagination
            page={page}
            numberOfPages={Math.ceil(users.length / rowsPerPage)}
            onPageChange={newPage => setPage(newPage)}
            label={`${page * rowsPerPage + 1} - ${Math.min(
              (page + 1) * rowsPerPage,
              users.length,
            )} of ${users.length}`}
          />
        </DataTable>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  createButton: {
    alignSelf: 'flex-end',
    marginBottom: 16,
  },
  buttons: {
    flexDirection: 'row',
    gap: 16,
  },
});
