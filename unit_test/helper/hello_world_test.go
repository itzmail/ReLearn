package helper

import (
	"fmt"
	"runtime"
	"testing"

	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
)

func BenchmarkHelloWorld(b *testing.B) {
	for i := 0; i < b.N; i++ {
		HelloWorld("Ismail")
	}
}

func TestTableHelloWorld(t *testing.T) {
	tests := []struct {
		name     string
		request  string
		expected string
	}{
		{
			name:     "Ismail",
			request:  "Ismail",
			expected: "Hello Ismail",
		},
		{
			name:     "Nur",
			request:  "Nur",
			expected: "Hello Nur",
		},
		{
			name:     "Alam",
			request:  "Alam",
			expected: "Hello Alam",
		},
	}

	for _, test := range tests {
		t.Run(test.name, func(t *testing.T) {
			result := HelloWorld(test.request)
			require.Equal(t, test.expected, result)
		})
	}
}

func TestSubTest(t *testing.T) {
	t.Run("Ismail", func(t *testing.T) {
		result := HelloWorld("Ismail")
		require.Equal(t, "Hello Ismail", result, "Result must be 'Hello Ismail'")
	})

	t.Run("Alam", func(t *testing.T) {
		result := HelloWorld("Alam")
		require.Equal(t, "Hello Alam", result, "Result must be 'Hello Alam'")
	})
}

func TestMain(m *testing.M) {
	fmt.Println("BEFORE UNIT TEST")

	m.Run()

	fmt.Println("AFTER UNIT TEST")
}

func TestSkip(t *testing.T) {
	if runtime.GOOS == "darwin" {
		t.Skip("Can't run on Mac OS")
	}

	result := HelloWorld("Ismail")
	require.Equal(t, "Hello Ismail", result)
}

func TestHelloWorld(t *testing.T) {
	result := HelloWorld("Ismail")

	if result != "Hello Ismail" {
		t.Error("Result must be 'Hello Ismail'")
	}

	fmt.Println("Eksekusi TestHellowWorld done")
}

func TestHelloWorldMail(t *testing.T) {
	result := HelloWorld("Ismail")

	if result != "Hello Ismail" {
		t.Fatal("Result must be hello ismail")
	}

	fmt.Println("Eksekusi TestHellowWorldMail done")
}

func TestHelloWOrldAssertion(t *testing.T) {
	result := HelloWorld("Ismail")

	assert.Equal(t, "Hello Ismail", result, "Result must be 'Hello Ismail'")
	fmt.Println("Test HelloWorld with Assert Done!!")
}

func TestHelloWorldRequire(t *testing.T) {
	result := HelloWorld("Ismail")

	require.Equal(t, "Hello Ismail", result)
	fmt.Println("Test HelloWorld with Require Done!!")
}
