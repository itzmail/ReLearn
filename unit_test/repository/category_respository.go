package repository

import "unit_test/entity"

type CategoryRepository interface {
	FindById(id string) *entity.Category // return nya entity. kalau ngga ada maka akan nil
}
