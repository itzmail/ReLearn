package com.itsmail.mathformula

import android.content.Intent
import android.net.Uri
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.os.PersistableBundle
import android.view.View
import android.widget.*

class MainActivity : AppCompatActivity(), View.OnClickListener {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val btnMoveActivity: Button = findViewById(R.id.btn_move_activity);
        btnMoveActivity.setOnClickListener(this);

        val btnMoveWithDataActivity: Button = findViewById(R.id.btn_move_activity_data);
        btnMoveWithDataActivity.setOnClickListener(this);

        // Implicit Intent
        val btnDialPhone: Button = findViewById(R.id.btn_dial_number);
        btnDialPhone.setOnClickListener(this);
    }

    override fun onClick(v: View?) {
        when (v?.id) {
            R.id.btn_move_activity -> {
                val moveIntent = Intent(this@MainActivity, MoveActivity::class.java)
                startActivity(moveIntent)
            }

            R.id.btn_move_activity_data -> {
                val moveWithDataIntent = Intent(this@MainActivity, MoveWithDataActivity::class.java);
                moveWithDataIntent.putExtra(MoveWithDataActivity.EXTRA_NAME, "Ismail Nur Alam");
                moveWithDataIntent.putExtra(MoveWithDataActivity.EXTRA_AGE, 21);
                startActivity(moveWithDataIntent)
            }

            // Implicit Intent
            R.id.btn_dial_number -> {
                val phoneNumber = "08987654321";
                val dialPhoneIntent = Intent(Intent.ACTION_DIAL, Uri.parse("tel:$phoneNumber"));
                startActivity(dialPhoneIntent)
            }
        }
    }
}