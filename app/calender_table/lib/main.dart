import 'package:flutter/material.dart';
import 'package:table_calendar/table_calendar.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
        debugShowCheckedModeBanner: false, home: CalenderApp());
  }
}

class CalenderApp extends StatefulWidget {
  const CalenderApp({super.key});

  @override
  State<CalenderApp> createState() => _CalenderAppState();
}

class _CalenderAppState extends State<CalenderApp> {
  DateTime today = DateTime.now();

  void _onDaySelected(DateTime date, DateTime focusedDay) {
    print('Selected Date: $date');
    setState(() {
      today = date;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: const Text('Calender App'),
        ),
        body: content());
  }

  Widget content() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.center,
      children: [
        Padding(
          padding: const EdgeInsets.all(8.0),
          child: Text('Selected Date ${today.toString().split(" ")[0]}'),
        ),
        Container(
            child: TableCalendar(
          availableGestures: AvailableGestures.all,
          headerStyle: const HeaderStyle(
            formatButtonVisible: false,
            titleCentered: true,
          ),
          rowHeight: 43,
          selectedDayPredicate: (day) => isSameDay(day, today),
          firstDay: DateTime.utc(2010, 10, 16),
          lastDay: DateTime.utc(2030, 3, 14),
          focusedDay: today,
          onDaySelected: _onDaySelected,
        ))
      ],
    );
  }
}
