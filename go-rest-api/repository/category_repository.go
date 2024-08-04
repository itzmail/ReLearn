package repository

import (
	"context"
	"database/sql"
	"go-rest-api/model/domain"
)

type CategoryRepository interface {
	/*
	* Penjelasan Parameter
	* ctx context.Context : Context adalah objek yang berisi data yang berhubungan dengan request yang sedang berjalan.
	* tx sql.Tx : Tx adalah objek yang berisi transaksi yang sedang berjalan.
	 */

	Save(ctx context.Context, tx *sql.Tx, category domain.Category) domain.Category
	Upadte(ctx context.Context, tx *sql.Tx, category domain.Category) domain.Category
	Delete(ctx context.Context, tx *sql.Tx, category domain.Category)
	FindById(ctx context.Context, tx *sql.Tx, categoryId int) (domain.Category, error)
	FindAll(ctx context.Context, tx *sql.Tx) []domain.Category
}
