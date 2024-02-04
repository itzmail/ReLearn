import "package:flutter_riverpod/flutter_riverpod.dart";

class DataProvider extends StateNotifier<List<String>> {
  DataProvider() : super(["One", "Two", "Three", "Four", "Five"]);

  void addData(String data) {
    state = [...state, data];
  }

  void updateData(String oldData, String newData) {
    state = state.map((e) => e == oldData ? newData : e).toList();
  }

  void removeData(String data) {
    state = state.where((element) => element != data).toList();
  }
}

final dataProvider = StateNotifierProvider<DataProvider, List<String>>((ref) {
  return DataProvider();
});

// in this example, we are using a StateNotifierProvider to manage the state of the data.
