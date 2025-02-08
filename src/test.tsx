// import React, {useState} from 'react';
// import {View, StyleSheet, FlatList, ScrollView, Dimensions} from 'react-native';
// import {DataTable, Button, Dialog, Portal, TextInput} from 'react-native-paper';

// const App = () => {
//   const [users, setUsers] = useState([
//     {
//       id: 1,
//       name: 'John',
//       surname: 'Doe',
//       school: 'Example School',
//       courses: ['Math', 'Science'],
//     },
//     // ... more mock users
//   ]);
//   const [isFormVisible, setIsFormVisible] = useState(false);
//   const [isEditing, setIsEditing] = useState(false);
//   const [editingUser, setEditingUser] = useState(null);

//   const handleCreateUser = () => {
//     setEditingUser(null); // Reset for create mode
//     setIsFormVisible(true);
//     setIsEditing(false);
//   };

//   const handleEditUser = user => {
//     setEditingUser(user);
//     setIsFormVisible(true);
//     setIsEditing(true);
//   };

//   const handleDeleteUser = id => {
//     setUsers(users.filter(user => user.id !== id));
//   };

//   const handleSubmitForm = user => {
//     if (isEditing) {
//       // Update existing user
//       setUsers(users.map(u => (u.id === user.id ? user : u)));
//     } else {
//       // Create new user
//       setUsers([...users, user]); // Generate a new ID
//     }
//     setIsFormVisible(false);
//   };

//   const windowWidth = Dimensions.get('window').width;

//   return (
//     <View style={styles.container}>
//       <Button
//         mode="contained"
//         onPress={handleCreateUser}
//         style={styles.createButton}>
//         Create
//       </Button>

//       <ScrollView horizontal={windowWidth < 600}>
//         {' '}
//         {/* Horizontal scroll for smaller screens */}
//         <DataTable>
//           <DataTable.Header>
//             <DataTable.Title>ID</DataTable.Title>
//             <DataTable.Title>Name</DataTable.Title>
//             <DataTable.Title>Surname</DataTable.Title>
//             <DataTable.Title>School</DataTable.Title>
//             <DataTable.Title>Courses</DataTable.Title>
//             <DataTable.Title>Actions</DataTable.Title>
//           </DataTable.Header>

//           <FlatList
//             data={users}
//             keyExtractor={item => item.id.toString()}
//             renderItem={({item}) => (
//               <DataTable.Row>
//                 <DataTable.Cell>{item.id}</DataTable.Cell>
//                 <DataTable.Cell>{item.name}</DataTable.Cell>
//                 <DataTable.Cell>{item.surname}</DataTable.Cell>
//                 <DataTable.Cell>{item.school}</DataTable.Cell>
//                 <DataTable.Cell>{item.courses.join(', ')}</DataTable.Cell>
//                 <DataTable.Cell>
//                   <Button onPress={() => handleEditUser(item)}>Edit</Button>
//                   <Button onPress={() => handleDeleteUser(item.id)}>
//                     Delete
//                   </Button>
//                 </DataTable.Cell>
//               </DataTable.Row>
//             )}
//           />
//         </DataTable>
//       </ScrollView>

//       <Portal>
//         <Dialog
//           visible={isFormVisible}
//           onDismiss={() => setIsFormVisible(false)}>
//           <Dialog.Title>{isEditing ? 'Edit User' : 'Create User'}</Dialog.Title>
//           <Dialog.Content>
//             <UserForm user={editingUser} onSubmit={handleSubmitForm} />
//           </Dialog.Content>
//           <Dialog.Actions>
//             <Button onPress={() => setIsFormVisible(false)}>Cancel</Button>
//           </Dialog.Actions>
//         </Dialog>
//       </Portal>
//     </View>
//   );
// };

// const UserForm = ({user, onSubmit}) => {
//   const [formData, setFormData] = useState(
//     user || {name: '', surname: '', school: '', courses: []},
//   );

//   const handleChange = (field, value) => {
//     setFormData({...formData, [field]: value});
//   };

//   return (
//     <View>
//       <TextInput
//         label="Name"
//         value={formData.name}
//         onChangeText={text => handleChange('name', text)}
//       />
//       {/* ... other input fields */}
//       <Button mode="contained" onPress={() => onSubmit(formData)}>
//         {user ? 'Update' : 'Create'}
//       </Button>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//   },
//   createButton: {
//     marginBottom: 16,
//   },
// });

// export default App;
