import { useDadJoke } from './dadJokes/DadJokeDataProvider.js'
import DadJokeList from './dadJokes/DadJokeList.js'


const arrayOfAllTheDadJokeObjects = useDadJoke()


for (const currentDadJokeObj of arrayOfAllTheDadJokeObjects) {
}



DadJokeList()