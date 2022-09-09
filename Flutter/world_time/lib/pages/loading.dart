import 'package:flutter/material.dart';
import 'package:http/http.dart';
import 'dart:convert';

class LoadingScreen extends StatefulWidget {
  const LoadingScreen({Key? key}) : super(key: key);

  @override
  State<LoadingScreen> createState() => _LoadingScreenState();
}

class _LoadingScreenState extends State<LoadingScreen> {

  void getTime() async {
    var client = Client();
    try {
      var uri = Uri.parse('http://worldtimeapi.org/api/timezone/Asia/Jakarta');
      Response response = await client.get(uri);
      Map data = await jsonDecode(response.body);

    //  get properties from data
      String dateTime = data['datetime'];
      String offset = data['utc_offset'].substring(1, 3);

    // create DateTime object
      DateTime now = DateTime.parse(dateTime);
      now = now.add(Duration(hours: int.parse(offset)));
      print(now);
    } catch (e) {
      print("error : $e");
    }
  }

  @override
  void initState() {
    super.initState();
    getTime();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Text("Loading Screen"),
    );
  }
}
