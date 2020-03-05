/**
 *  dadJoke which renders individual dadJokeObj objects as HTML
 */
const DadJoke = (dadJokeObj) => {
    return `
    <section class="DadJokeCardContainer">
        <div class="card">
                <div>${dadJokeObj.id}</div>
                <div>${dadJokeObj.question}</div>
                <div>${dadJokeObj.answer}</div>
        </div>
    </section>
    `
}

export default DadJoke