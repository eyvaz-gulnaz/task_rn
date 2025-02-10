import {Alert, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {CreateUserScreenProps} from '../types/types';
import {IUser} from '../mockData/users';
import {Button, Menu, TextInput} from 'react-native-paper';

const storage = new MMKV();

export const CreateUserScreen: React.FC<CreateUserScreenProps> = ({
  route,
  navigation,
}) => {
  const {setUsers} = route.params;

  const [role, setRole] = useState('');
  const [username, setUsername] = useState('');
  const [status, setStatus] = useState('Active');
  const [showMenu, setShowMenu] = useState(false);

  const handleCreateUser = () => {
    if (!username.trim() || !role.trim()) {
      Alert.alert('Error', 'Username and Role are required');
      return;
    }
    const newUser: IUser = {
      id: Date.now(),
      username,
      date_created: new Date().toISOString().split('T')[0],
      role,
      status,
    };

    setUsers(prevUsers => {
      const updatedUsers = [...prevUsers, newUser];
      storage.set('users', JSON.stringify(updatedUsers));
      return updatedUsers;
    });
    navigation.goBack();
  };

  return (
    <View style={styles.screenContainer}>
      <TextInput
        value={username}
        onChangeText={setUsername}
        style={styles.input}
        placeholder="Username"
      />
      <TextInput
        value={role}
        onChangeText={setRole}
        style={styles.input}
        placeholder="Role"
      />

      <Menu
        visible={showMenu}
        onDismiss={() => setShowMenu(false)}
        anchor={
          <Button
            mode="outlined"
            onPress={() => setShowMenu(true)}
            style={styles.menuButton}>
            {status}
          </Button>
        }>
        <Menu.Item onPress={() => setStatus('Active')} title="Active" />
        <Menu.Item onPress={() => setStatus('Inactive')} title="Inactive" />
        <Menu.Item onPress={() => setStatus('Banned')} title="Banned" />
      </Menu>
      <Button
        mode="contained"
        onPress={handleCreateUser}
        style={styles.createButton}>
        Create User
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 44,
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 10,
  },
  createButton: {
    marginTop: 20,
  },
  screenContainer: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
  },
  menuButton: {
    backgroundColor: '#f5f5f5',
    paddingVertical: 5,
  },
});
