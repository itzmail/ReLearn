import 'package:flutter/material.dart';
import 'package:crud/blocs/user_list/user_list_bloc.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:crud/models/user.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  TextEditingController name = TextEditingController();
  TextEditingController email = TextEditingController();

  _modUser(context, idUser, isUpdate) {
    return showModalBottomSheet(
        context: context,
        builder: (context) {
          return Padding(
            padding: EdgeInsets.only(
                left: 20,
                right: 20,
                top: 20,
                bottom: MediaQuery.of(context).viewInsets.bottom),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                TextField(
                  controller: name,
                  decoration: const InputDecoration(labelText: "Name"),
                ),
                TextField(
                  controller: email,
                  decoration: const InputDecoration(labelText: "Email"),
                ),
                ElevatedButton(
                  onPressed: () {
                    context.read<UserListBloc>().add(isUpdate
                        ? UpdateUser(User(
                            name: name.text, email: email.text, id: idUser))
                        : AddUser(User(
                            name: name.text, email: email.text, id: idUser)));
                    Navigator.pop(context);
                  },
                  child: Text(isUpdate ? "Update" : "Add"),
                )
              ],
            ),
          );
        });
  }

  @override
  Widget build(BuildContext context) {
    final _scaffoldKey = GlobalKey<ScaffoldState>();
    return Scaffold(
        appBar: AppBar(
          title: const Text("BLoC CRUD App"),
        ),
        floatingActionButton: FloatingActionButton(
          onPressed: () {
            // _scaffoldKey.currentState!
            // .showBottomSheet((context) => );
            _modUser(context, 0, false);
          },
          child: const Icon(Icons.add),
        ),
        body:
            BlocBuilder<UserListBloc, UserListState>(builder: (context, state) {
          if (state is UserListUpdated && state.users.isNotEmpty) {
            final users = state.users;
            final idUser = users.last.id + 1;
            return ListView.builder(
              itemCount: users.length,
              itemBuilder: (context, index) {
                final user = users[index];
                return ListTile(
                  title: Text(user.name),
                  subtitle: Text(user.email),
                  trailing: Row(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      IconButton(
                        icon: const Icon(Icons.edit),
                        onPressed: () {
                          name.text = user.name;
                          email.text = user.email;
                          _modUser(context, user.id, true);
                        },
                      ),
                      IconButton(
                        icon: const Icon(Icons.delete),
                        onPressed: () {
                          context.read<UserListBloc>().add(DeleteUser(user));
                        },
                      ),
                    ],
                  ),
                );
              },
            );
          } else {
            return Center(
                child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                const Text("No users found"),
                ElevatedButton(
                  onPressed: () {
                    _modUser(context, state.users.length + 1, false);
                  },
                  child: const Text("Add User"),
                )
              ],
            ));
          }
        }));
  }
}
