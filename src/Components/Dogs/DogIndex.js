import React, {Component} from 'react';

export default class DogIndex extends Component {
    constructor(props){
        super(props)
        this.state = {
            img: ''
        }
    }

    componentDidMount = () => {
        console.log('Component Mounted');
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((res) => res.json())
        .catch(err => console.log(err))
        .then((data) => 
        this.setState({
            img: data.message,
        })
        );
    }

    render(){
        return(
            <div>
                <DogDisplay url={this.state.img} />
                <button onClick={this.componentDidMount}>Click for new dog</button>
            </div>
        )
    }
}

const DogDisplay = (props) => {
    return(
        <div>
            <img src={props.url} alt="doggie" />
        </div>
    )
}

