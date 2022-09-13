import 'package:flutter/material.dart';
import 'package:world_time/services/world_time.dart';

class LoadingScreen extends StatefulWidget {
  const LoadingScreen({Key? key}) : super(key: key);

  @override
  State<LoadingScreen> createState() => _LoadingScreenState();
}

class _LoadingScreenState extends State<LoadingScreen> {

  String time = "Loading";

  void setupWorldTime() async {
    WorldTime instance = WorldTime(location: "Jakarta", flag: "Indonesian", url: "Asia/Jakarta");
    await instance.getTime();
    Navigator.pushReplacementNamed(context, "/home", arguments: {
      'location': instance.location,
      'time': instance.time,
      'flag': instance.flag
    });
  }

  @override
  void initState() {
    super.initState();
    setupWorldTime();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Padding(
        padding: EdgeInsets.all(50.0),
        child: Text("Loading"),
      ),
    );
  }
}
