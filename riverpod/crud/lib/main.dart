import 'dart:math';

import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:crud/providers/data_provider.dart';

void main() {
  runApp(ProviderScope(child: MyApp()));
}

class MyApp extends ConsumerWidget {
  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final _data = ref.watch(dataProvider);
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        appBar: AppBar(
          title: const Text('Riverpod Example'),
        ),
        floatingActionButton: FloatingActionButton(
          onPressed: () {
            ref
                .read(dataProvider.notifier)
                .addData("New Data ${Random().nextInt(1000)}");
          },
          child: Icon(Icons.add),
        ),
        body: ListView.builder(
            itemBuilder: (BuildContext context, int index) {
              return ListTile(
                  title: Text(_data[index]),
                  trailing: Row(mainAxisSize: MainAxisSize.min, children: [
                    IconButton(
                      icon: Icon(Icons.edit),
                      onPressed: () {
                        ref.read(dataProvider.notifier).updateData(
                            _data[index], "Updated ${_data[index]}");
                      },
                    ),
                    IconButton(
                      icon: Icon(Icons.delete),
                      onPressed: () {
                        ref
                            .read(dataProvider.notifier)
                            .removeData(_data[index]);
                      },
                    ),
                  ]));
            },
            itemCount: _data.length),
      ),
    );
  }
}
