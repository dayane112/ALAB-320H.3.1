import Score from "./score";

function Learner({ learner }) {
    const eachScore = learnerData.learners.scores.map((score, i) => {
        return <Score key={i} scores={score} />
})
    
    return (
        <>
            <h2>Name: {learner.name}</h2>;
            <h3>Bio: {learner.bio}</h3>;
            <h3>{eachScore}</h3>
        </>
    );
}

export default Learner