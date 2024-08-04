package web

type CategoryUpdateRequest struct {
	ID   int    `json:"id"`
	Name string `json:"name"`
}
