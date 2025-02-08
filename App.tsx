import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {UserManagementScreen} from './src/screens/UserManagement.Screen';
import {NavigationContainer} from '@react-navigation/native';
import {EditUserScreen} from './src/screens/EditUser.Screen';
import {CreateUserScreen} from './src/screens/CreateUser.Screen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="UserManagementScreen"
            component={UserManagementScreen}
          />
          <Stack.Screen name="EditUserScreen" component={EditUserScreen} />
          <Stack.Screen name="CreateUserScreen" component={CreateUserScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({});

export default App;
