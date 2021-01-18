import { Component } from 'react';

class Quiz extends Component {
    constructor(props) {
        super(props);


        this.state = {
            extroversion: this.props.extroversion,
            colourfulness: this.props.colourfulness,
            generosity: this.props.generosity,
            activeness: this.props.activeness
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit (e) {
        e.preventDefault();
        this.props.submitQuiz({ ...this.state });
    }

    render() {
        return (
            <form
                onSubmit={this.handleSubmit}>
                <p>Extroversion question</p>

                <input type="radio" id="extroversion" name="extroversion" value="high" />
                <label for="extroversion">High extroversion answer</label>

                <input type="radio" id="extroversion" name="extroversion" value="low" />
                <label for="extroversion">Low extroversion answer</label>

                <input type="radio" id="extroversion" name="extroversion" value="medium" />
                <label for="extroversion">Medium extroversion answer</label>


                <p>Generosity question</p>

                <input type="radio" id="generosity" name="generosity" value="medium" />
                <label for="generosity">Medium generosity answer</label>

                <input type="radio" id="generosity" name="generosity" value="low" />
                <label for="generosity">Low generosity answer</label>

                <input type="radio" id="generosity" name="generosity" value="high" />
                <label for="generosity">High generosity answer</label>

                <p>Activeness question</p>

                <input type="radio" id="activeness" name="activeness" value="low" />
                <label for="activeness">Low activeness answer</label>

                <input type="radio" id="activeness" name="activeness" value="medium" />
                <label for="activeness">Medium activeness answer</label>

                <input type="radio" id="activeness" name="activeness" value="high" />
                <label for="activeness">High activeness answer</label>

                <p>Colourfulness question</p>

                <input type="radio" id="colourfulness" name="colourfulness" value="low" />
                <label for="colourfulness">Low colourfulness answer</label>

                <input type="radio" id="colourfulness" name="colourfulness" value="medium" />
                <label for="colourfulness">Medium colourfulness answer</label>

                <input type="radio" id="colourfulness" name="colourfulness" value="high" />
                <label for="colourfulness">High colourfulness answer</label>

                <p>Extroversion question</p>

                <input type="radio" id="extroversion" name="extroversion" value="medium" />
                <label for="extroversion">Medium extroversion answer</label>

                <input type="radio" id="extroversion" name="extroversion" value="low" />
                <label for="extroversion">Low extroversion answer</label>

                <input type="radio" id="extroversion" name="extroversion" value="high" />
                <label for="extroversion">High extroversion answer</label>

                <p>Generosity question</p>

                <input type="radio" id="generosity" name="generosity" value="high" />
                <label for="generosity">High generosity answer</label>

                <input type="radio" id="generosity" name="generosity" value="low" />
                <label for="generosity">Low generosity answer</label>

                <input type="radio" id="generosity" name="generosity" value="medium" />
                <label for="generosity">Medium generosity answer</label>

                <p>Activeness question</p>

                <input type="radio" id="activeness" name="activeness" value="medium" />
                <label for="activeness">Medium activeness answer</label>

                <input type="radio" id="activeness" name="activeness" value="low" />
                <label for="activeness">Low activeness answer</label>

                <input type="radio" id="activeness" name="activeness" value="high" />
                <label for="activeness">High activeness answer</label>

                <p>Colourfulness question</p>

                <input type="radio" id="colourfulness" name="colourfulness" value="high" />
                <label for="colourfulness">High colourfulness answer</label>

                <input type="radio" id="colourfulness" name="colourfulness" value="low" />
                <label for="colourfulness">Low colourfulness answer</label>

                <input type="radio" id="colourfulness" name="colourfulness" value="medium" />
                <label for="colourfulness">Medium colourfulness answer</label>

                <button>Ribbet quack...</button>

            </form>
        );
    }
}


export default Quiz;