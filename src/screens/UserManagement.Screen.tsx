import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {usersData} from '../mockData/users';
import {Button, DataTable} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

export const UserManagementScreen = () => {
  const [users, setUsers] = useState(usersData);
  const [page, setPage] = useState(0);
  const rowsPerPage = 10;
  const navigation = useNavigation();

  const handleDelete = id => {
    console.log('User deleted', id);
    setUsers(users.filter(user => user.id !== id));
  };

  const handleEdit = user => {
    navigation.navigate('EditUserScreen', {user, setUsers});
  };
  const handleCreateUser = () => {
    navigation.navigate('CreateUserScreen', {setUsers});
    console.log('Create new user : ');
  };

  return (
    <View style={styles.main}>
      <Button
        mode="contained"
        onPress={handleCreateUser}
        style={styles.createButton}>
        Create new user
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
                <DataTable.Cell>{user.username}</DataTable.Cell>
                <DataTable.Cell>{user.date_created}</DataTable.Cell>
                <DataTable.Cell>{user.status}</DataTable.Cell>
                <DataTable.Cell>
                  <View style={styles.buttons}>
                    <AntDesign
                      onPress={() => handleEdit(user.id)}
                      name="edit"
                      color="blue"
                      size={32}
                    />
                    <FontAwesome
                      name="remove"
                      color="red"
                      size={32}
                      onPress={() => handleDelete(user.id)}
                    />
                  </View>
                </DataTable.Cell>
              </DataTable.Row>
            ))}
          {/* <DataTable.Pagination
            page={page}
            numberOfPages={Math.ceil(users.length / rowsPerPage)}
            onPageChange={newPage => setPage(newPage)}
            label={`${page * rowsPerPage + 1} - ${Math.min(
              (page + 1) * rowsPerPage,
              users.length,
            )} of ${users.length}`}
          /> */}
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
  },
});
