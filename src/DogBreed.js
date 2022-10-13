const DogBreed = props => {
    console.log(props)
    return (
        <div>
            {props.dogBreed}
            <button onClick={() => props.updateFavorite(props.dogBreed)}>Set as favorite</button>
            <button onClick={() => props.deleteBreed(props.index)}>Delete</button>
        </div>
    )
}

export default DogBreed