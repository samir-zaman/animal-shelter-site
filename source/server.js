import { createServer, Model } from "miragejs"


createServer({
    models: {
        animals: Model,
    },

    seeds(server) {
        server.create("animal", { id: "1", name: "Milo", age: 60, description: "Animal 1 description", imageUrl: "https://github.com/samir-zaman/animal-shelter-site/blob/main/source/assets/images/home-hero.jpg?raw=true", type: "cuddly", fosterParentId: "02", bio: "create bio later", vaccines: "Up to date!", reproductive: "completed", behavior: "Pending completion", houseTrained: "Completed", other: "Blind, Allergies, Missing a leg" })

        server.create("animal", { id: "2", name: "Luna", age: 80, description: "Animal 2 description", imageUrl: "https://github.com/samir-zaman/animal-shelter-site/blob/main/source/assets/images/home-hero.jpg?raw=true", type: "adventurous", fosterParentId: "01", bio: "create bio later", vaccines: "Up to date!", reproductive: "completed", behavior: "Pending completion", houseTrained: "Completed", other: "Blind, Allergies, Missing a leg" })

        server.create("animal", { id: "3", name: "Atlas", age: 100, description: "Animal 3 description", imageUrl: "https://github.com/samir-zaman/animal-shelter-site/blob/main/source/assets/images/home-hero.jpg?raw=true", type: "hardworking", fosterParentId: "03", bio: "create bio later", vaccines: "Up to date!", reproductive: "completed", behavior: "Pending completion", houseTrained: "Completed", other: "Blind, Allergies, Missing a leg" })

        server.create("animal", { id: "4", name: "Maple", age: 65, description: "Animal 4 description", imageUrl: "https://github.com/samir-zaman/animal-shelter-site/blob/main/source/assets/images/home-hero.jpg?raw=true", type: "cuddly", fosterParentId: "02", bio: "create bio later", vaccines: "Up to date!", reproductive: "completed", behavior: "Pending completion", houseTrained: "Completed", other: "Blind, Allergies, Missing a leg" })

        server.create("animal", { id: "5", name: "Jasper", age: 120, description: "Animal 5 description", imageUrl: "https://github.com/samir-zaman/animal-shelter-site/blob/main/source/assets/images/home-hero.jpg?raw=true", type: "adventurous", fosterParentId: "01", bio: "create bio later", vaccines: "Up to date!", reproductive: "completed", behavior: "Pending completion", houseTrained: "Completed", other: "Blind, Allergies, Leg missing" })

        server.create("animal", { id: "6", name: "Nova", age: 70, description: "Animal 6 description", imageUrl: "https://github.com/samir-zaman/animal-shelter-site/blob/main/source/assets/images/home-hero.jpg?raw=true", type: "hardworking", fosterParentId: "03", bio: "create bio later", vaccines: "Up to date!", reproductive: "completed", behavior: "Pending completion", houseTrained: "Completed", other: "Blind, Allergies, Missing a leg" })
    },

    routes() {
        this.namespace = "api" //all requests to my MirageJS server should start with api.

        //the following handles get requests to api/animals
        this.get("/animals", (schema, request) => {
            return schema.animals.all()
        })
        
        this.get("/animals/:id", (schema, request) => {
            const id = request.params.id
            return schema.animals.find(id)
        })

        this.get("/foster-parent/adoptees", (schema, request) => {
            return schema.animals.where({fosterParentId: "01"})
        })

        this.get("/foster-parent/adoptees/:id", (schema, request) => {
            const id = request.params.id
            return schema.animals.findBy({id, fosterParentId:"01"})
        })
    }
}) 