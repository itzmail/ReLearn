package jwt

import (
	"log"
	"time"

	"github.com/dgrijalva/jwt-go"
)

// scret key being used to sign tokens
var (
	SecretKey = []byte("secret")
)

/*
* GenerateToken generates a jwt token and assign a username to it's claims and return it
* GenerateToken function will be used whenever we want to generate a token for a user.
* We save username in the token claims and set the token expiration time to 24 Hours later.
 */
func GenerateToken(username string) (string, error) {
	token := jwt.New(jwt.SigningMethodHS256)

	// create a map to store our claims
	claims := token.Claims.(jwt.MapClaims)
	// set token claims
	claims["username"] = username
	claims["exp"] = time.Now().Add(time.Hour * 24).Unix()
	tokenString, err := token.SignedString(SecretKey)
	if err != nil {
		log.Fatal(err)
		return "", err
	}

	return tokenString, nil
}

func ParseToken(tokenStr string) (string, error) {
	token, err := jwt.Parse(tokenStr, func(token *jwt.Token) (interface{}, error) {
		return SecretKey, nil
	})

	if claims, ok := token.Claims.(jwt.MapClaims); ok && token.Valid {
		username := claims["username"].(string)
		return username, nil
	} else {
		return "", err
	}
}
