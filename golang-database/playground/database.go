package golangdatabase

import (
	"database/sql"
	"time"
)

func GetConnection() *sql.DB {
	dataSource := "root:@tcp(localhost:3306)/golang_db?parseTime=true"
	db, err := sql.Open("mysql", dataSource)
	if err != nil {
		panic(err)
	}

	// Wajib setting pool connection
	db.SetMaxIdleConns(10)
	db.SetMaxOpenConns(100)
	db.SetConnMaxIdleTime(5 * time.Minute)
	db.SetConnMaxLifetime(60 * time.Minute)

	return db
}
