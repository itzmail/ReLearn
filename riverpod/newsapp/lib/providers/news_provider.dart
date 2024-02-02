import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:freezed_annotation/freezed_annotation.dart';
import 'package:newsapp/services/news_services.dart';

import 'package:newsapp/models/news_model.dart';

part 'news_provider.freezed.dart';

@freezed
class NewsState with _$NewsState {
  const factory NewsState({
    @Default(true) bool isLoading,
    required NewsModel news,
  }) = _NewsState;

  const NewsState._();
}

class NewsNotifier extends StateNotifier<NewsState> {
  NewsNotifier() : super(NewsState(news: NewsModel(articles: []))) {}

  loadNews() async {
    state = state.copyWith(isLoading: true);
    final newsResponse = await NewsService().fetchNews();
    final news = NewsModel.fromJson(newsResponse);
    state = state.copyWith(news: news, isLoading: false);
  }

  loadSearchedNews(String title) async {
    state = state.copyWith(isLoading: true);
    final newsResponse = await NewsService().fetchNewsBySearching(title);
    final news = NewsModel.fromJson(newsResponse);
    state = state.copyWith(news: news, isLoading: false);
  }
}

final newsProvider = StateNotifierProvider<NewsNotifier, NewsState>((ref) {
  return NewsNotifier();
});
