package repository

import (
	"context"
	"fmt"
	"golang-database/entity"
	golangdatabase "golang-database/playground"
	"testing"
)

func TestCommentInsert(t *testing.T) {
	commentRepository := NewCommentRepository(golangdatabase.GetConnection())

	ctx := context.Background()
	comment := entity.Comment{
		Email:   "repository@test.com",
		Comment: "Test Comment Repository",
	}

	result, err := commentRepository.Insert(ctx, comment)
	if err != nil {
		panic(err)
	}

	fmt.Println("result rows:", result)
}

func TestFindById(t *testing.T) {
	commentRepository := NewCommentRepository(golangdatabase.GetConnection())

	comment, err := commentRepository.FindByID(context.Background(), 2)
	if err != nil {
		panic(err)
	}

	fmt.Println(comment)
}

func TestFindAll(t *testing.T) {
	commentRepository := NewCommentRepository(golangdatabase.GetConnection())

	comments, err := commentRepository.FindAll(context.Background())
	if err != nil {
		panic(err)
	}

	for _, comment := range comments {
		fmt.Println(comment)
	}
}
