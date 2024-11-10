package links

import (
	"errors"
	"log"

	database "github.com/itzmail/hackernews/internal/pkg/db/mysql"
	"github.com/itzmail/hackernews/internal/users"
)

// definition of struct that represent a link.
type Link struct {
	ID      string
	Title   string
	Address string
	User    *users.User
}

// function that insert a Link object into database and returns it’s ID.
func (link Link) Save() int64 {
	// our sql query to insert link into Links table. you see we used prepare here before db.Exec, the prepared statements helps you with security and also performance improvement in some cases. you can read more about it here.
	stmt, err := database.Db.Prepare(("INSERT INTO Links(Title,Address,UserID) VALUES(?,?,?)"))
	if err != nil {
		log.Fatal(err)
	}

	// execution of our sql statement.
	res, err := stmt.Exec(link.Title, link.Address, link.User.ID)
	if err != nil {
		log.Fatal(err)
	}

	// retrieving Id of inserted Link.
	id, err := res.LastInsertId()
	if err != nil {
		log.Fatal(err)
	}

	log.Print("Link saved to database")
	return id
}

func GetAll() []Link {
	stmt, err := database.Db.Prepare("SELECT L.id, L.title, L.address, L.UserID, U.Username FROM Links L INNER JOIN Users U on L.UserID = U.ID")
	if err != nil {
		log.Fatal(err)
	}

	defer stmt.Close()

	rows, err := stmt.Query()
	if err != nil {
		log.Fatal(err)
	}

	defer rows.Close()
	var links []Link
	var username string
	var id string
	for rows.Next() {
		var link Link
		err := rows.Scan(&link.ID, &link.Title, &link.Address, &id, &username)
		if err != nil {
			log.Fatal(err)
		}
		link.User = &users.User{
			ID:       id,
			Username: username,
		}
		links = append(links, link)
	}

	if err = rows.Err(); err != nil {
		log.Fatal(err)
	}

	return links
}

func GetByID(id string) (Link, error) {
	stmt, err := database.Db.Prepare("SELECT L.id, L.title, L.address, L.UserID, U.Username FROM Links L INNER JOIN Users U on L.UserID = U.ID WHERE L.id = ?")
	if err != nil {
		log.Fatal(err)
		return Link{}, err
	}

	defer stmt.Close()

	row := stmt.QueryRow(id)
	var link Link
	var username string
	var userID string
	err = row.Scan(&link.ID, &link.Title, &link.Address, &userID, &username)
	if err != nil {
		log.Fatal(err)
	}

	link.User = &users.User{
		ID:       userID,
		Username: username,
	}

	return link, nil
}

func Update(link Link) (Link, error) {
	if link.ID == "" {
		return Link{}, errors.New("ID is required")
	}

	stmt, err := database.Db.Prepare("UPDATE Links SET Title = ?, Address = ? WHERE ID = ?")
	if err != nil {
		log.Fatal(err)
	}

	_, err = stmt.Exec(link.Title, link.Address, link.ID)
	if err != nil {
		log.Fatal(err)
	}

	log.Print("Link updated in database")
	return link, nil
}

func Delete(id string) (string, error) {
	if id == "" {
		return "", errors.New("ID is required")
	}

	_, err := GetByID(id)
	if err != nil {
		log.Fatal(err)
		return "", err
	}

	stmt, err := database.Db.Prepare("DELETE FROM Links WHERE ID = ?")
	if err != nil {
		log.Fatal(err)
		return "", err
	}

	_, err = stmt.Exec(id)
	if err != nil {
		log.Fatal(err)
		return "", err
	}

	return "Link deleted from database", nil
}
