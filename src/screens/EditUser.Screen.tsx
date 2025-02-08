import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {Button} from 'react-native-paper';
import {Dropdown} from 'react-native-paper-dropdown';

export const EditUserScreen = ({route, navigation}) => {
  const [user, setUser] = route.params;
  const [status, setStatus] = useState(user.status);
  const [showDropDown, setShowDropDown] = useState(false);

  const handleSave = () => {
    setUser(prevUser =>
      prevUser.map(u => (u.id === user.id ? {...u, status} : u)),
    );
    navigation.goBack();
  };
  return (
    <View style={styles.screenContainer}>
      <TextInput value={user.username} editable={false} style={styles.input} />
      <TextInput value={user.role} editable={false} style={styles.input} />
      <Dropdown
        label="Status"
        mode="outlined"
        showDropDown={() => setShowDropDown(true)}
        onDismiss={() => setShowDropDown(false)}
        value={status}
        setValue={setStatus}
        list={[
          {label: 'Active', value: 'Active'},
          {label: 'Inactive', value: 'Inactive'},
        ]}
      />
      <Button mode="contained" onPress={handleSave} style={styles.saveButton}>
        Save
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  saveButton: {
    marginTop: 20,
  },
  screenContainer: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
  },
});
