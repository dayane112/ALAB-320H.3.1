function Score({ scores }) {
    return(
        <div>
            <h3>Date: {scores.date}</h3>
            <h3>Score: {scores.score}</h3>
        </div>
    );
}

export default Score