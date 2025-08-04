import { createServer, Model } from "miragejs"


createServer({
    models: {
        animals: Model,
    },

    seeds(server) {
        server.create("animal", { id: "1", name: "Tater", age: "10 weeks", description: "Animal 1 description", imageUrl: "https://github.com/samir-zaman/animal-shelter-site/blob/main/source/assets/images/adoptee_images/tater.jpg?raw=true", type: "cuddly", fosterParentId: "02", bio: "Meet Tater and Tot! These little fuzz balls are almost too cute to believe, but don’t let them fool you. True to their herding breed, these siblings are bouncing off the walls and racing through the halls with unbridled energy. They are a bonded pair and must be adopted together. Twice the fun and cuddles! Tater and Tot have a lot of growing to do, but given proper training they would make fantastic livestock dogs.", weight: 17, vaccines: "pending", reproductive: "not neutered", behavior: "none", houseTrained: "pending", medical: "docked tail", gender: "male", breed: "australian shepherd" })

        server.create("animal", { id: "2", name: "Tot", age: "10 weeks", description: "Animal 2 description", imageUrl: "https://github.com/samir-zaman/animal-shelter-site/blob/main/source/assets/images/adoptee_images/tot.jpg?raw=true", type: "adventurous", fosterParentId: "01", bio: "Meet Tater and Tot! These little fuzz balls are almost too cute to believe, but don’t let them fool you. True to their herding breed, these siblings are bouncing off the walls and racing through the halls with unbridled energy. They are a bonded pair and must be adopted together. Twice the fun and cuddles! Tater and Tot have a lot of growing to do, but given proper training they would make fantastic livestock dogs.", vaccines: "pending", reproductive: "not spayed", behavior: "none", houseTrained: "pending", medical: "none", gender: "female", breed: "australian shepherd" })

        server.create("animal", { id: "3", name: "Princess", age: 4, description: "Animal 3 description", imageUrl: "https://github.com/samir-zaman/animal-shelter-site/blob/main/source/assets/images/adoptee_images/princess.jpg?raw=true", type: "cuddly", fosterParentId: "03", bio: "Meet Princess! This sweet girl is playful and affectionate, and will follow you around this house on the off chance she can get more ear scritches. Due to poor dental upkeep earlier in life, Princess is missing quite a few teeth and requires a soft food diet. Otherwise she is in good health, and is content to lounge for hours in a sunny window or on a warm lap.", weight: 10, reproductive: "spayed", behavior: "kids ok, no dogs", houseTrained: "completed", medical: "missing teeth", gender: "female", breed: "persian" })

        server.create("animal", { id: "4", name: "Shadow", age: 3, description: "Animal 4 description", imageUrl: "https://github.com/samir-zaman/animal-shelter-site/blob/main/source/assets/images/adoptee_images/shadow.jpg?raw=true", type: "hardworking", fosterParentId: "02", bio: "Meet Shadow! A retired search and rescue dog, Shadow is extremely well trained and driven. He needs a high level of physical and mental exercise to channel his energy in a non destructive way. Shadow is affectionate and fiercely protective once he bonds to a family, but he does not do well with strangers, children under 10, or other animals.", vaccines: "up to date", weight: 65, reproductive: "not neutered", behavior: "no kids, no other pets", houseTrained: "completed", medical: "none", gender: "male", breed: "belgian malinois" })

        server.create("animal", { id: "5", name: "Pudge", age: 120, description: "Animal 5 description", imageUrl: "https://github.com/samir-zaman/animal-shelter-site/blob/main/source/assets/images/adoptee_images/pudge.jpeg?raw=true", type: "adventurous", fosterParentId: "01", bio: "", vaccines: "Up to date!", reproductive: "completed", behavior: "Pending completion", houseTrained: "Completed", medical: "Blind, Allergies, Leg missing", gender: "", breed: "" })

        server.create("animal", { id: "6", name: "Larry", age: 70, description: "Animal 6 description", imageUrl: "https://github.com/samir-zaman/animal-shelter-site/blob/main/source/assets/images/adoptee_images/larry.jpeg?raw=true", type: "hardworking", fosterParentId: "03", bio: "", vaccines: "Up to date!", reproductive: "completed", behavior: "Pending completion", houseTrained: "Completed", medical: "Blind, Allergies, Missing a leg", gender: "", breed: "" })

        server.create("animal", { id: "7", name: "Honey", age: 11, description: "Animal 6 description", imageUrl: "https://github.com/samir-zaman/animal-shelter-site/blob/main/source/assets/images/adoptee_images/honey.jpg?raw=true", type: "cuddly", fosterParentId: "03", bio: "Meet Honey! This sweet senior lady is looking for a quiet home with lots of sun spots for lengthy naps. Given her age and weak joints, Honey is very low maintenance and is perfect for anyone looking for a calm and steady companion to pass the time indoors.", weight: 60, vaccines: "up to date", reproductive: "spayed", behavior: "no kids, other pets ok ", houseTrained: "completed", medical: "arthritis", gender: "female", breed: "golden retriever mix" })

        server.create("animal", { id: "8", name: "Hamish", age: 70, description: "Animal 6 description", imageUrl: "https://github.com/samir-zaman/animal-shelter-site/blob/main/source/assets/images/adoptee_images/hamish.jpeg?raw=true", type: "hardworking", fosterParentId: "03", bio: "", vaccines: "Up to date!", reproductive: "completed", behavior: "Pending completion", houseTrained: "Completed", medical: "Blind, Allergies, Missing a leg", gender: "", breed: "" })

        server.create("animal", { id: "9", name: "Gracey", age: 9, description: "Animal 6 description", imageUrl: "https://github.com/samir-zaman/animal-shelter-site/blob/main/source/assets/images/adoptee_images/gracey.jpg?raw=true", type: "adventurous", fosterParentId: "03", bio: "Meet Gracey! Full of energy despite her years, Gracey would still make a great hunting partner. Before reaching the shelter, she was a fully trained water fowl retriever and pointer, and boy does she still thrive outdoors. If hunting isn’t your thing, Gracey also loves long runs, fetch, and frisbee. She is in perfect health and will remain active in old age if given the proper care.", weight: 50, vaccines: "up to date", reproductive: "spayed", behavior: "no issues", houseTrained: "completed", medical: "none", gender: "female", breed: "viszla" })

        server.create("animal", { id: "10", name: "Gary", age: 70, description: "Animal 6 description", imageUrl: "https://github.com/samir-zaman/animal-shelter-site/blob/main/source/assets/images/adoptee_images/gary.jpeg?raw=true", type: "hardworking", fosterParentId: "03", bio: "", vaccines: "Up to date!", reproductive: "completed", behavior: "Pending completion", houseTrained: "Completed", medical: "Blind, Allergies, Missing a leg", gender: "", breed: "" })

        server.create("animal", { id: "11", name: "Cooper", age: 5, description: "Animal 6 description", imageUrl: "https://github.com/samir-zaman/animal-shelter-site/blob/main/source/assets/images/adoptee_images/cooper.jpg?raw=true", type: "hardworking", fosterParentId: "03", bio: "Meet Cooper! Cooper is missing both of his hind legs but he doesn’t miss a beat. He greats everyone with a smile and constantly wagging tail. Cooper is mobile (thanks to his wheels) and does enjoy walks, but he prefers to spend his days inside and would do best in a single story home.", weight: 25, vaccines: "up to date", reproductive: "neutered", behavior: "none", houseTrained: "completed", medical: "double amputee", gender: "male", breed: "terrier mix" })

        server.create("animal", { id: "12", name: "Cleo", age: "9 months", description: "Animal 6 description", imageUrl: "https://github.com/samir-zaman/animal-shelter-site/blob/main/source/assets/images/adoptee_images/cleo.jpg?raw=true", type: "hardworking", fosterParentId: "03", bio: "Meet Cleo! This sassy kitty loves to run, jump, and explore. She is very active and curious, and loves to play with toys and people. Cleo is not afraid to show her affection, and will head butt, rub, and cry until she receives attention. That said, Cleo is sensitive about attention being on her terms and can get prickly otherwise. For this reason she would transition most easily into a home that does not have children.", vaccines: "pending", reproductive: "not spayed", weight: 9, behavior: "no kids, other pets ok", houseTrained: "completed", medical: "none", gender: "female", breed: "domestic long hair" })
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