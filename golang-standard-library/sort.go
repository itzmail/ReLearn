package main

import (
	"fmt"
	"sort"
)

type User struct {
	Name string
	Age  int
}

type ByName []User

func (s ByName) Len() int {
	return len(s)
}

func (s ByName) Less(i, j int) bool {
	return s[i].Name < s[j].Name
}

func (s ByName) Swap(i, j int) {
	s[i], s[j] = s[j], s[i]
}

type ByAge []User

func (s ByAge) Len() int {
	return len(s)
}

func (s ByAge) Less(i, j int) bool {
	return s[i].Age < s[j].Age
}

func (s ByAge) Swap(i, j int) {
	s[i], s[j] = s[j], s[i]
}

func main() {
	users := []User{
		{"Eko", 30},
		{"Budi", 35},
		{"Joko", 25},
		{"Adit", 20},
	}

	// Sort by name
	sort.Sort(ByName(users))
	fmt.Println("Sorted by name:", users)

	// Sort by age
	sort.Sort(ByAge(users))
	fmt.Println("Sorted by age:", users)
}
