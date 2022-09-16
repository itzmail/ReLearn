import 'package:analog_clock/analog_clock.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(MaterialApp(
    home: ClockPage(),
  ));
}

class ClockPage extends StatelessWidget {
  const ClockPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: AnalogClock(),
    );
  }
}
