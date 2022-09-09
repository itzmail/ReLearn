import 'package:http/http.dart';
import 'dart:convert';

class WorldTime {

  late String location; // nama lokasi untuk UI
  late String time; // Waktu dari lokasi tersebut
  late String flag; // url to an asset flag icon
  late String url; // location url for api endpoint

  WorldTime({required this.location, required this.flag, required this.url});

  Future<void> getTime() async {
    var client = Client();
    try {
      var uri = Uri.parse('http://worldtimeapi.org/api/timezone/$url');
      Response response = await client.get(uri);
      Map data = await jsonDecode(response.body);

      //  get properties from data
      String dateTime = data['datetime'];
      String offset = data['utc_offset'].substring(1, 3);

      // create DateTime object
      DateTime now = DateTime.parse(dateTime);
      now = now.add(Duration(hours: int.parse(offset)));

      // Set the time property
      time = now.toString();

    } catch (e) {
      print("error : $e");
    }
  }

}