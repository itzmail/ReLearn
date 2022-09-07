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
      body: Container(
        padding: EdgeInsets.symmetric(horizontal: 30.0, vertical: 10.0),
        margin: EdgeInsets.all(10.0),
        color: Colors.grey[400],
        child: Text('hello'),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {  },
        child: Text('click'),
        backgroundColor: Colors.red[600],
      ),
    );
  }
}
