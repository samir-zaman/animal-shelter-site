import { createServer, Model } from "miragejs"


createServer({
    models: {
        animals: Model,
    },

    seeds(server) {
        server.create("animal", { id: "1", name: "Milo", price: 60, description: "Animal 1 description", imageUrl: "https://github.com/samir-zaman/animal-shelter-site/blob/main/source/assets/images/about-hero.jpg?raw=true", type: "cuddly" })
        server.create("animal", { id: "2", name: "Luna", price: 80, description: "Animal 2 description", imageUrl: "https://github.com/samir-zaman/animal-shelter-site/blob/main/source/assets/images/about-hero.jpg?raw=true", type: "adventurous" })
        server.create("animal", { id: "3", name: "Atlas", price: 100, description: "Animal 3 description", imageUrl: "https://github.com/samir-zaman/animal-shelter-site/blob/main/source/assets/images/about-hero.jpg?raw=true", type: "hardworking" })
        server.create("animal", { id: "4", name: "Maple", price: 65, description: "Animal 4 description", imageUrl: "https://github.com/samir-zaman/animal-shelter-site/blob/main/source/assets/images/about-hero.jpg?raw=true", type: "cuddly" })
        server.create("animal", { id: "5", name: "Jasper", price: 120, description: "Animal 5 description", imageUrl: "https://github.com/samir-zaman/animal-shelter-site/blob/main/source/assets/images/about-hero.jpg?raw=true", type: "adventurous" })
        server.create("animal", { id: "6", name: "Nova", price: 70, description: "Animal 6 description", imageUrl: "https://github.com/samir-zaman/animal-shelter-site/blob/main/source/assets/images/about-hero.jpg?raw=true", type: "hardworking" })
    },

    routes() {
        this.namespace = "api" //all requests should start with api.

        //the following handles get requests to api/animals
        this.get("/animals", (schema, request) => {
            return schema.animals.all()
        })
        
        this.get("/animals/:id", (schema, request) => {
            const id = request.params.id
            return schema.animals.find(id)
        })
    }
})