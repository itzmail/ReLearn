import 'package:flutter/material.dart';
import 'package:calender_app/services/oath_services.dart';

class OauthScreen extends StatefulWidget {
  const OauthScreen({super.key});

  @override
  State<OauthScreen> createState() => _OauthScreenState();
}

class _OauthScreenState extends State<OauthScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: const Text('OauthScreen'),
        ),
        body: Center(
          child: ElevatedButton(
            onPressed: () {
              Oauth2ClientExample().fetchFiles();
            },
            child: const Text('Fetch Files'),
          ),
        ));
  }
}
