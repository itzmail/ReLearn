import 'package:flutter/material.dart';

void main() => runApp(MaterialApp(
  home: MyApp(),
));

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Calculator Neumorphism',
      home: CalculatorNeuApp(),
    );
  }
}

const Color colorDark = Color(0xFF374352);
const Color colorLight = Color(0xFFe6eeff);

class CalculatorNeuApp extends StatefulWidget {
  const CalculatorNeuApp({Key? key}) : super(key: key);

  @override
  State<CalculatorNeuApp> createState() => _CalculatorNeuAppState();
}

class _CalculatorNeuAppState extends State<CalculatorNeuApp> {
  bool darkMode = false;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: darkMode ? colorDark : colorLight,
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.all(18.0),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Container(
                child: GestureDetector(onTap: () {
                  setState(() {
                    darkMode = !darkMode;
                  });
                },
                  child: _switchMode(darkMode: darkMode),),
              ),
              Container(
               child: Column(
                 children: [
                   Row(
                     mainAxisAlignment: MainAxisAlignment.spaceBetween,
                     children: [
                       _buttonRounded(title: 'sin', darkMode: darkMode, isOval: true),
                       _buttonRounded(title: 'cos', darkMode: darkMode, isOval: true),
                       _buttonRounded(title: 'tan', darkMode: darkMode, isOval: true),
                       _buttonRounded(title: '%', textColor: darkMode ? Colors.green : Colors.redAccent, darkMode: darkMode, isOval: true),
                     ],
                   ),Row(
                     mainAxisAlignment: MainAxisAlignment.spaceBetween,
                     children: [
                       _buttonRounded(title: 'C', darkMode: darkMode),
                       _buttonRounded(title: '(', darkMode: darkMode),
                       _buttonRounded(title: ')', darkMode: darkMode),
                       _buttonRounded(title: '/', textColor: darkMode ? Colors.green : Colors.redAccent, darkMode: darkMode),
                     ],
                   ),Row(
                     mainAxisAlignment: MainAxisAlignment.spaceBetween,
                     children: [
                       _buttonRounded(title: '7', darkMode: darkMode),
                       _buttonRounded(title: '8', darkMode: darkMode),
                       _buttonRounded(title: '9', darkMode: darkMode),
                       _buttonRounded(title: 'x', textColor: darkMode ? Colors.green : Colors.redAccent, darkMode: darkMode),
                     ],
                   ),Row(
                     mainAxisAlignment: MainAxisAlignment.spaceBetween,
                     children: [
                       _buttonRounded(title: '4', darkMode: darkMode),
                       _buttonRounded(title: '5', darkMode: darkMode),
                       _buttonRounded(title: '6', darkMode: darkMode),
                       _buttonRounded(title: '-', textColor: darkMode ? Colors.green : Colors.redAccent, darkMode: darkMode),
                     ],
                   ),Row(
                     mainAxisAlignment: MainAxisAlignment.spaceBetween,
                     children: [
                       _buttonRounded(title: '1', darkMode: darkMode),
                       _buttonRounded(title: '2', darkMode: darkMode),
                       _buttonRounded(title: '3', darkMode: darkMode),
                       _buttonRounded(title: '+', textColor: darkMode ? Colors.green : Colors.redAccent, darkMode: darkMode),
                     ],
                   ),
                   Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                     children: [
                       _buttonRounded(title: '0', darkMode: darkMode),
                       _buttonRounded(title: ',', darkMode: darkMode),
                       _buttonRounded(icon: Icons.backspace_outlined, iconColor: darkMode ? Colors.green : Colors.redAccent, darkMode: darkMode),
                       _buttonRounded(title: '=', textColor: darkMode ? Colors.green : Colors.redAccent, darkMode: darkMode),
                     ],
                   ),
                 ],
               ),
              )
            ],
          ),
        ),
      ),
    );
  }
}

Widget _switchMode({required bool darkMode, double padding = 15.0}) {
  return NeuContainer(
      darkMode: darkMode,
      padding: EdgeInsets.all(padding),
      borderRadius: BorderRadius.circular(20),
      child: Container(
        width: 70,
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Icon(Icons.wb_sunny, color: darkMode ? Colors.grey : Colors.redAccent),
            Icon(Icons.dark_mode, color: darkMode ? Colors.green : Colors.grey),
          ],
        ),
      ),
  );
}

Widget _buttonRounded({String? title, double padding = 17.0, required bool darkMode,IconData? icon, Color? iconColor, Color? textColor, bool isOval = false}) {
  return Padding(
    padding: const EdgeInsets.only(top: 10.0),
    child: NeuContainer(
        padding: EdgeInsets.all(padding),
        borderRadius: BorderRadius.circular(40),
        darkMode: darkMode,
        child: Container(
          width: padding * 2,
          height: isOval ? 14.0 : padding * 2,
          child: Center(
            child: title != null ? Text(
              '$title',
              style: TextStyle(
                color: textColor != null ? textColor : darkMode ? Colors.white : Colors.black,
                fontSize: isOval ? 15 : 30,
              ),
            ) : Icon(icon, color: iconColor),
          ),
        ),
    ),
  );
}

class NeuContainer extends StatefulWidget {
  late bool darkMode;
  late Widget child;
  late BorderRadius borderRadius;
  late EdgeInsetsGeometry padding;

  NeuContainer({required this.darkMode, required this.child, required this.padding, required this.borderRadius});

  @override
  State<NeuContainer> createState() => _NeuContainerState();
}

class _NeuContainerState extends State<NeuContainer> {
  bool _isPressed = false;

  void _onPointerUp(PointerUpEvent event) {
    setState(() {
      _isPressed = false;
    });
  }

  void _onPointerDown(PointerDownEvent event) {
    setState(() {
      _isPressed = true;
    });
  }

  @override
  Widget build(BuildContext context) {
    bool darkMode = widget.darkMode;
    return Listener(
      onPointerDown: _onPointerDown,
      onPointerUp: _onPointerUp,
      child: Container(
        padding: widget.padding,
        decoration: BoxDecoration(
            color: darkMode ? colorDark : colorLight,
            borderRadius: widget.borderRadius,
            boxShadow: _isPressed ? null : [
              BoxShadow(
                color: darkMode ? Colors.black54 : Colors.blueGrey.shade200,
                offset: Offset(4.0, 4.0),
                blurRadius: 15.0,
                spreadRadius: 1.0,
              ),
              BoxShadow(
                color: darkMode ? Colors.blueGrey.shade700 : Colors.white,
                offset: Offset(-4.0, -4.0),
                blurRadius: 15.0,
                spreadRadius: 1.0,
              )
            ]
        ),
        child: widget.child,
      ),
    );
  }
}
