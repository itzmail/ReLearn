package golangdatabase

import (
	"context"
	"database/sql"
	"fmt"
	"strconv"
	"testing"
	"time"
)

func TestExecSql(t *testing.T) {
	db := GetConnection()
	defer db.Close()

	ctx := context.Background()

	script := "INSERT INTO customer(name) VALUES('Eko')"
	_, err := db.ExecContext(ctx, script)

	if err != nil {
		panic(err)
	}

	fmt.Println("Success insert new customer")
}

func TestQuerySql(t *testing.T) {
	db := GetConnection()

	ctx := context.Background()
	script := "SELECT id, name FROM customer"
	rows, err := db.QueryContext(ctx, script)

	if err != nil {
		panic(err)
	}

	for rows.Next() {
		var id int32
		var name string

		err := rows.Scan(&id, &name)
		if err != nil {
			panic(err)
		}
		fmt.Println("Id:", id, "Name:", name)
	}

	defer rows.Close()
}

func TestQuerySqlComplex(t *testing.T) {
	db := GetConnection()

	ctx := context.Background()
	script := "SELECT id, name, email, balance, rating, birth_date, married, created_at FROM customer"
	rows, err := db.QueryContext(ctx, script)

	if err != nil {
		panic(err)
	}

	for rows.Next() {
		var id int32
		var name string
		var email sql.NullString
		var balance int32
		var rating float64
		var createdAt time.Time
		var birthDate sql.NullTime
		var married bool

		err := rows.Scan(&id, &name, &email, &balance, &rating, &birthDate, &married, &createdAt)
		if err != nil {
			panic(err)
		}

		fmt.Println("====================")
		fmt.Println("Id:", id)
		fmt.Println("Name:", name)
		if email.Valid {
			fmt.Print("Email:", email.String)
		}
		fmt.Println("Balance:", balance)
		fmt.Println("Rating:", rating)
		if birthDate.Valid {
			fmt.Println("Birth Date:", birthDate.Time)
		}
		fmt.Println("Married:", married)
		fmt.Println("Created At:", createdAt)
	}

	defer rows.Close()
}

func TestSqlInjection(t *testing.T) {
	db := GetConnection()

	ctx := context.Background()

	username := "admin"
	password := "admin"

	script := "SELECT username FROM user WHERE username = ? AND password = ? LIMIT 1"
	rows, err := db.QueryContext(ctx, script, username, password)

	if err != nil {
		panic(err)
	}

	if rows.Next() {
		var username string
		err := rows.Scan(&username)
		if err != nil {
			panic(err)
		}
		fmt.Println("Success Login", username)
	} else {
		fmt.Println("Failed Login")
	}

	defer rows.Close()
}

func TestSqlInjectionSafe(t *testing.T) {
	db := GetConnection()

	ctx := context.Background()

	username := "admin"
	password := "admin"

	script := "SELECT username FROM user WHERE user.username = ? AND user.password = ? LIMIT 1"
	rows, err := db.QueryContext(ctx, script, username, password)

	if err != nil {
		panic(err)
	}

	if rows.Next() {
		var username string
		err := rows.Scan(&username)
		if err != nil {
			panic(err)
		}
		fmt.Println("Success Login", username)
	} else {
		fmt.Println("Failed Login")
	}

	defer rows.Close()
}

func TestExecSqlSafe(t *testing.T) {
	db := GetConnection()
	defer db.Close()

	ctx := context.Background()

	username := "jos"
	password := "gandos"

	script := "INSERT INTO user(username, password) VALUES(?, ?)"
	_, err := db.ExecContext(ctx, script, username, password)

	if err != nil {
		panic(err)
	}

	fmt.Println("Success insert new user")
}

func TestAutoIncrement(t *testing.T) {
	db := GetConnection()
	defer db.Close()

	ctx := context.Background()

	email := "ismail@gmail.com"
	comment := "Mantap Bos kuh"

	script := "INSERT INTO comments(email, comment) VALUES(?, ?)"
	result, err := db.ExecContext(ctx, script, email, comment)

	if err != nil {
		panic(err)
	}

	insertId, err := result.LastInsertId()

	if err != nil {
		panic(err)
	}

	fmt.Println("Success insert new comment with id", insertId)
}

func TestPrepareStatement(t *testing.T) {
	db := GetConnection()
	defer db.Close()

	ctx := context.Background()
	script := "INSERT INTO comments (email, comment) VALUES(?, ?)"
	stmt, err := db.PrepareContext(ctx, script)
	if err != nil {
		panic(err)
	}

	defer stmt.Close()

	for i := 0; i < 10; i++ {
		email := "ismail" + strconv.Itoa(i) + "@gmail.com"
		comment := "Ini komen ke-" + strconv.Itoa(i)
		result, err := stmt.ExecContext(ctx, email, comment)

		if err != nil {
			panic(err)
		}

		lastInsertId, err := result.LastInsertId()

		if err != nil {
			panic(err)
		}

		fmt.Println("Coment Id:", lastInsertId)
	}
}

func TestTransaction(t *testing.T) {
	db := GetConnection()
	defer db.Close()

	ctx := context.Background()
	tx, err := db.Begin()

	if err != nil {
		panic(err)
	}

	script := "INSERT INTO comments(email, comment) VALUES(?, ?)"
	// do transaction
	for i := 0; i < 10; i++ {
		email := "ismail" + strconv.Itoa(i) + "@gmail.com"
		comment := "Ini komen ke-" + strconv.Itoa(i)
		result, err := tx.ExecContext(ctx, script, email, comment)

		if err != nil {
			panic(err)
		}

		lastInsertId, err := result.LastInsertId()

		if err != nil {
			panic(err)
		}

		fmt.Println("Coment Id:", lastInsertId)
	}

	err = tx.Commit()
	// untuk commit transaction

	err = tx.Rollback()
	// untuk rollback transaction
	if err != nil {
		panic(err)
	}
}
