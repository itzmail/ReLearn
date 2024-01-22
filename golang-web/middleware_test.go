package golang_web

import (
	"fmt"
	"net/http"
	"testing"
)

type LogMiddleware struct {
	Handler http.Handler
}

type ErrorHandler struct {
	Handler http.Handler
}

// Kasih pointer agar tidak duplikat
func (middleWare *LogMiddleware) ServeHTTP(writter http.ResponseWriter, request *http.Request) {
	fmt.Println("Before Execute Handler")
	middleWare.Handler.ServeHTTP(writter, request)
	fmt.Println("After Execute Handler")
}

func (errorHandler *ErrorHandler) ServeHTTP(writter http.ResponseWriter, request *http.Request) {
	defer func() {
		err := recover()
		fmt.Println("Recover : ", err)
		if err != nil {
			writter.WriteHeader(http.StatusInternalServerError)
			fmt.Fprintf(writter, "Error %s", err)
		}
	}()

	errorHandler.Handler.ServeHTTP(writter, request)
}

func TestMiddleWare(t *testing.T) {
	mux := http.NewServeMux()
	mux.HandleFunc("/", func(writter http.ResponseWriter, request *http.Request) {
		fmt.Println("Middleware executed")
		_, err := fmt.Fprintf(writter, "Hello Middleware")
		if err != nil {
			return
		}
	})
	mux.HandleFunc("/foo", func(writter http.ResponseWriter, request *http.Request) {
		fmt.Println("Foo executed")
		_, err := fmt.Fprintf(writter, "Hello foo")
		if err != nil {
			return
		}
	})
	mux.HandleFunc("/panic", func(writter http.ResponseWriter, request *http.Request) {
		panic("Try this error")
	})

	//logMiddleware := new(LogMiddleware)
	//logMiddleware.Handler = mux
	logMiddleware := &LogMiddleware{
		Handler: mux,
	}

	errorHandler := &ErrorHandler{
		Handler: logMiddleware,
	}

	server := http.Server{
		Addr:    "localhost:8080",
		Handler: errorHandler,
	}

	err := server.ListenAndServe()
	if err != nil {
		return
	}
}
