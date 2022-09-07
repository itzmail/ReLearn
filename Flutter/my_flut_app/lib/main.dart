import 'package:flutter/material.dart';

void main() => runApp(MaterialApp(
  home: Home()
));

class Home extends StatelessWidget {
  const Home({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('My First App'),
        centerTitle: true,
        backgroundColor: Colors.red[600],
      ),
      // body: Center(
      //     child: Image.asset('assets/ViewBeach.jpg'),
      //   ),
      body: Center(
        child: ElevatedButton.icon(
          onPressed: () {
            print("you clicked me");
          },
          icon: Icon(
            Icons.mail
          ),
          label: Text("mail me"),
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {  },
        child: Text('click'),
        backgroundColor: Colors.red[600],
      ),
    );
  }
}
