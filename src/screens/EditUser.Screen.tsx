import {StyleSheet, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {Button, Menu} from 'react-native-paper';
import {EditUserScreenProps} from '../types/types';
import {MMKV} from 'react-native-mmkv';

const storage = new MMKV();

export const EditUserScreen: React.FC<EditUserScreenProps> = ({
  route,
  navigation,
}) => {
  const {user, setUsers} = route.params;
  const [role, setRole] = useState(user.role);
  const [username, setUsername] = useState(user.username);
  const [status, setStatus] = useState(user.status);
  const [showMenu, setShowMenu] = useState(false);

  const handleSave = () => {
    setUsers(prevUsers => {
      const updatedUsers = prevUsers.map(u =>
        u.id === user.id ? {...u, username, role, status} : u,
      );
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
      <Button mode="contained" onPress={handleSave} style={styles.saveButton}>
        Save
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
    borderColor: 'blue',
  },
  saveButton: {
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
