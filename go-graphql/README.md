## Project Setup

Create a directory for project and initialize go modules file:

```bash
    go mod init github.com/[username]/hackernews
```
after that use ‍‍gqlgen init command to setup a gqlgen project.

```bash
   go run github.com/99designs/gqlgen init 
```
Here is a description from gqlgen about the generated files:

* `gqlgen.yml` — The gqlgen config file, knobs for controlling the generated code.
* `graph/generated/generated.go` — The GraphQL execution runtime, the bulk of the generated code.
* `graph/model/models_gen.go` — Generated models required to build the graph. Often you will override these with your own models. Still very useful for input types.
* `graph/schema.graphqls` — This is the file where you will add GraphQL schemas.
* `graph/schema.resolvers.go` — This is where your application code lives. generated.go will call into this to get the data the user has requested.
* `server.go` — This is a minimal entry point that sets up an http.Handler to the generated GraphQL server. 
  
start the server with go run server.go and open your browser and you should see the graphql playground, So setup is right!