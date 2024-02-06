import 'package:oauth2_client/google_oauth2_client.dart';
import 'package:oauth2_client/oauth2_helper.dart';

class Oauth2ClientExample {
  Oauth2ClientExample();

  Future<void> fetchFiles() async {
    var hlp = OAuth2Helper(
      GoogleOAuth2Client(
          redirectUri: 'com.teranet.app:/oauth2redirect',
          customUriScheme: 'com.teranet.app'),
      grantType: OAuth2Helper.authorizationCode,
      clientId:
          '180050963726-m5poeq6e2i86qlhps0dkjing6e3o5i9j.apps.googleusercontent.com',
      scopes: ['https://www.googleapis.com/auth/contacts.readonly'],
    );

    var resp = await hlp.get('https://www.googleapis.com/drive/v3/files');

    print("Response : ${resp.body}");
  }
}
