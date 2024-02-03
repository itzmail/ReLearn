import 'package:dio/dio.dart';
import 'package:newsapp/constants/constants.dart';

class NewsService {
  final Dio _dio = Dio(
    BaseOptions(
      baseUrl: ApiUrls.baseUrl,
      responseType: ResponseType.json,
    ),
  );

  fetchNews() async {
    var response = await _dio.get(
      'v2/top-headlines?country=id&apiKey=${ApiUrls.apiKey}',
    );
    return response.data;
  }

  fetchNewsBySearching(String title) async {
    var response = await _dio
        .get('v2/everything?q=' + title + '&apiKey=${ApiUrls.apiKey}');
    return response.data;
  }
}
