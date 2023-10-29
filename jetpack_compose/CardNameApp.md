```kotlin
package com.example.juaraandroid

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.offset
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.juaraandroid.ui.theme.JuaraAndroidTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            JuaraAndroidTheme {
                // A surface container using the 'background' color from the theme
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = MaterialTheme.colorScheme.background
                ) {
                    CardNameApp()
                }
            }
        }
    }
}

@Composable
private fun CardNameApp() {
    Column(Modifier
            .padding(horizontal = 16.dp)
            .fillMaxSize(),
            verticalArrangement = Arrangement.Center,
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
        var logo = painterResource(R.drawable.ic_task_completed)
        Column(horizontalAlignment = Alignment.CenterHorizontally) {
            Image(painter = logo, contentDescription = null, modifier = Modifier.size(150.dp))
            Text(text = "Ismail Nur Alam", fontSize = 30.sp, fontWeight = FontWeight.SemiBold, color = Color(0xFF3ddc84))
            Text("CEO & Co-Founder", fontSize = 16.sp, fontWeight = FontWeight.Medium)
        }
        Column(Modifier.offset(y = 150.dp)) {
            InfoCard(value = "+62 1029340298")
            InfoCard(value = "josgandos@gandos.com")
            InfoCard(value = "josgandos.com")
        }
    }
}

@Composable
fun InfoCard(modifier: Modifier = Modifier, value: String = "") {
    var logo = painterResource(R.drawable.ic_task_completed)
    Row(
        modifier = modifier
            .padding(bottom = 6.dp),
        verticalAlignment = Alignment.CenterVertically
    ) {
        Box(modifier
            .padding(end = 10.dp)
            .size(30.dp)
            .clip(RoundedCornerShape(8.dp))
            .background(Color(0xFF3ddc84)))
        Text(text = value)

    }
}


@Preview(
    showBackground = true,
    name = "My Preview",
    showSystemUi = true,
)
@Composable
fun CardAppPreview() {
    JuaraAndroidTheme {
        CardNameApp()
    }
}

```