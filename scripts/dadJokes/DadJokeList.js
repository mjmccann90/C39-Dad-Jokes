import { useDadJoke } from "./DadJokeDataProvider.js"
import DadJoke from "./DadJoke.js"

const DadJokeList = () => {

    // 1. Get the data from the provider
    // 2. Iterate the array
    // 3. Convert each obj to HTML representation
    // 4. Put in the DOM

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector("#card-container")
    const jokes = useDadJoke()

    for (const dadJokeObject of jokes) {
        contentElement.innerHTML += DadJoke(dadJokeObject)
    }
}

export default DadJokeList