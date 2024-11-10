package restapi

type UserDummy struct {
	ID        int     `json:"id"`
	FirstName string  `json:"firstName"`
	LastName  string  `json:"lastName"`
	Email     string  `json:"email"`
	Address   Address `json:"address"`
	Company   Company `json:"company"`
}

type Address struct {
	Address    string `json:"address"`
	City       string `json:"city"`
	State      string `json:"state"`
	StateCode  string `json:"stateCode"`
	PostalCode string `json:"postalCode"`
	Country    string `json:"country"`
}

type Company struct {
	Name    string  `json:"name"`
	Title   string  `json:"title"`
	Address Address `json:"address"`
}

type UserResponse struct {
	Users []UserDummy `json:"users"`
}
