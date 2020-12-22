import React, {Component} from 'react';

class Movie extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filme: []
        };
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        let url = `https://sujeitoprogramador.com/r-api/?api=filmes/${id}`;
        fetch(url)
        .then((response) => response.json())
        .then((json) => {
            this.setState({filme: json});
            console.log(json);
        });
    }

    render() {
        return(
            <div>
                <h1>{this.state.filme.nome}</h1>
                <img src={this.state.filme.foto}></img>
                <h3>Sinopse</h3>
                {this.state.filme.sinopse}
            </div>
        );
    }
}

export default Movie;