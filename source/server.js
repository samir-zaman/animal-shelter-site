import { createServer, Model } from "miragejs"


createServer({
    models: {
        animals: Model,
    },

    seeds(server) {
        server.create("animal", { id: "1", name: "Milo", age: 60, description: "Animal 1 description", imageUrl: "https://github.com/samir-zaman/animal-shelter-site/blob/main/source/assets/images/home-hero.jpg?raw=true", type: "cuddly", fosterParentId: "02", bio: "Joy is a 1.5-year-old Doberman Pinscher mix with a heart full of love waiting to shine. Once she is comfortable, Joy’s happy, tail-wagging spirit shines through, and she’ll eagerly seek out love and playtime. Joy is looking for a home that will help build her confidence with kindness, patience, and plenty of encouragement. If you’re ready to help Joy blossom into the loyal and loving companion she’s meant to be, come meet her today!", vaccines: "Up to date!", reproductive: "completed", behavior: "Pending completion", houseTrained: "Completed", other: "Blind, Allergies, Missing a leg" })

        server.create("animal", { id: "2", name: "Luna", age: 80, description: "Animal 2 description", imageUrl: "https://github.com/samir-zaman/animal-shelter-site/blob/main/source/assets/images/home-hero.jpg?raw=true", type: "adventurous", fosterParentId: "01", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in lacus sit amet elit porttitor fermentum volutpat nec est. Ut ante ligula, mattis sed maximus a, posuere sed odio. In ac arcu dictum, scelerisque nibh suscipit, tempor odio. Duis nec pharetra ex, in dictum ligula. Aliquam gravida vel mi vitae pulvinar. Praesent sed eleifend nisl. Ut leo odio, vehicula eu metus nec, pharetra vehicula sem. Pellentesque id sollicitudin libero. Morbi luctus tristique ante et hendrerit.", vaccines: "Up to date!", reproductive: "completed", behavior: "Pending completion", houseTrained: "Completed", other: "Blind, Allergies, Missing a leg" })

        server.create("animal", { id: "3", name: "Atlas", age: 100, description: "Animal 3 description", imageUrl: "https://github.com/samir-zaman/animal-shelter-site/blob/main/source/assets/images/home-hero.jpg?raw=true", type: "hardworking", fosterParentId: "03", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in lacus sit amet elit porttitor fermentum volutpat nec est. Ut ante ligula, mattis sed maximus a, posuere sed odio. In ac arcu dictum, scelerisque nibh suscipit, tempor odio. Duis nec pharetra ex, in dictum ligula. Aliquam gravida vel mi vitae pulvinar. Praesent sed eleifend nisl. Ut leo odio, vehicula eu metus nec, pharetra vehicula sem. Pellentesque id sollicitudin libero. Morbi luctus tristique ante et hendrerit.", vaccines: "Up to date!", reproductive: "completed", behavior: "Pending completion", houseTrained: "Completed", other: "Blind, Allergies, Missing a leg" })

        server.create("animal", { id: "4", name: "Maple", age: 65, description: "Animal 4 description", imageUrl: "https://github.com/samir-zaman/animal-shelter-site/blob/main/source/assets/images/home-hero.jpg?raw=true", type: "cuddly", fosterParentId: "02", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in lacus sit amet elit porttitor fermentum volutpat nec est. Ut ante ligula, mattis sed maximus a, posuere sed odio. In ac arcu dictum, scelerisque nibh suscipit, tempor odio. Duis nec pharetra ex, in dictum ligula. Aliquam gravida vel mi vitae pulvinar. Praesent sed eleifend nisl. Ut leo odio, vehicula eu metus nec, pharetra vehicula sem. Pellentesque id sollicitudin libero. Morbi luctus tristique ante et hendrerit.", vaccines: "Up to date!", reproductive: "completed", behavior: "Pending completion", houseTrained: "Completed", other: "Blind, Allergies, Missing a leg" })

        server.create("animal", { id: "5", name: "Jasper", age: 120, description: "Animal 5 description", imageUrl: "https://github.com/samir-zaman/animal-shelter-site/blob/main/source/assets/images/home-hero.jpg?raw=true", type: "adventurous", fosterParentId: "01", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in lacus sit amet elit porttitor fermentum volutpat nec est. Ut ante ligula, mattis sed maximus a, posuere sed odio. In ac arcu dictum, scelerisque nibh suscipit, tempor odio. Duis nec pharetra ex, in dictum ligula. Aliquam gravida vel mi vitae pulvinar. Praesent sed eleifend nisl. Ut leo odio, vehicula eu metus nec, pharetra vehicula sem. Pellentesque id sollicitudin libero. Morbi luctus tristique ante et hendrerit.", vaccines: "Up to date!", reproductive: "completed", behavior: "Pending completion", houseTrained: "Completed", other: "Blind, Allergies, Leg missing" })

        server.create("animal", { id: "6", name: "Nova", age: 70, description: "Animal 6 description", imageUrl: "https://github.com/samir-zaman/animal-shelter-site/blob/main/source/assets/images/home-hero.jpg?raw=true", type: "hardworking", fosterParentId: "03", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in lacus sit amet elit porttitor fermentum volutpat nec est. Ut ante ligula, mattis sed maximus a, posuere sed odio. In ac arcu dictum, scelerisque nibh suscipit, tempor odio. Duis nec pharetra ex, in dictum ligula. Aliquam gravida vel mi vitae pulvinar. Praesent sed eleifend nisl. Ut leo odio, vehicula eu metus nec, pharetra vehicula sem. Pellentesque id sollicitudin libero. Morbi luctus tristique ante et hendrerit.", vaccines: "Up to date!", reproductive: "completed", behavior: "Pending completion", houseTrained: "Completed", other: "Blind, Allergies, Missing a leg" })
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