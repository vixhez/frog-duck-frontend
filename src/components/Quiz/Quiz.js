import { Component } from 'react';

class Quiz extends Component {
    constructor(props) {
        super(props);


        this.state = {
            extroversion1: this.props.extroversion1,
            colourfulness1: this.props.colourfulness1,
            generosity1: this.props.generosity1,
            activeness1: this.props.activeness1,

            extroversion2: this.props.extroversion2,
            colourfulness2: this.props.colourfulness2,
            generosity2: this.props.generosity2,
            activeness2: this.props.activeness2
        }

        this.handleExtroversionChange1 = this.handleExtroversionChange1.bind(this);
        this.handleGenerosityChange1 = this.handleGenerosityChange1.bind(this);
        this.handleActivenessChange1 = this.handleActivenessChange1.bind(this);
        this.handleColourfulnessChange1 = this.handleColourfulnessChange1.bind(this);

        this.handleExtroversionChange2 = this.handleExtroversionChange2.bind(this);
        this.handleGenerosityChange2 = this.handleGenerosityChange2.bind(this);
        this.handleActivenessChange2 = this.handleActivenessChange2.bind(this);
        this.handleColourfulnessChange2 = this.handleColourfulnessChange2.bind(this);
    }

    handleExtroversionChange1(e) {
        this.setState({ extroversion1: e.currentTarget.value });
    };

    handleExtroversionChange2(e) {
        this.setState({ extroversion2: e.currentTarget.value });
    };

    handleGenerosityChange1(e) {
        this.setState({ generosity1: e.currentTarget.value });
    };

    handleGenerosityChange2(e) {
        this.setState({ generosity2: e.currentTarget.value });
    };

    handleActivenessChange1(e) {
        this.setState({ activeness1: e.currentTarget.value });
    };

    handleActivenessChange2(e) {
        this.setState({ activeness2: e.currentTarget.value });
    };

    handleColourfulnessChange1(e) {
        this.setState({ colourfulness1: e.currentTarget.value });
    };

    handleColourfulnessChange2(e) {
        this.setState({ colourfulness2: e.currentTarget.value });
    };

    handleSubmit(e) {
        e.preventDefault();
        this.props.submitQuiz({ ...this.state });
    };

    render() {
        return (
            <form
                onSubmit={this.handleSubmit}>
                <p>Extroversion question</p>

                <input
                    onChange={this.handleExtroversionChange1}
                    type="radio"
                    id="extroversion1"
                    name="extroversion1"
                    value="high" />
                <label for="extroversion1">High extroversion answer</label>

                <input
                    onChange={this.handleExtroversionChange1}
                    type="radio"
                    id="extroversion1"
                    name="extroversion1"
                    value="low" />
                <label for="extroversion1">Low extroversion answer</label>

                <input
                    onChange={this.handleExtroversionChange1}
                    type="radio"
                    id="extroversion1"
                    name="extroversion1"
                    value="medium" />
                <label for="extroversion1">Medium extroversion answer</label>


                <p>Generosity question</p>

                <input
                    onChange={this.handleGenerosityChange1}
                    type="radio"
                    id="generosity1"
                    name="generosity1"
                    value="medium" />
                <label for="generosity1">Medium generosity answer</label>

                <input
                    onChange={this.handleGenerosityChange1}
                    type="radio"
                    id="generosity1"
                    name="generosity1"
                    value="low" />
                <label for="generosity1">Low generosity answer</label>

                <input
                    onChange={this.handleGenerosityChange1}
                    type="radio"
                    id="generosity1"
                    name="generosity1"
                    value="high" />
                <label for="generosity1">High generosity answer</label>

                <p>Activeness question</p>

                <input
                    onChange={this.handleActivenessChange1}
                    type="radio"
                    id="activeness1"
                    name="activeness1"
                    value="low" />
                <label for="activeness1">Low activeness answer</label>

                <input
                    onChange={this.handleActivenessChange1}
                    type="radio"
                    id="activeness1"
                    name="activeness1"
                    value="medium" />
                <label for="activeness1">Medium activeness answer</label>

                <input
                    onChange={this.handleActivenessChange1}
                    type="radio"
                    id="activeness1"
                    name="activeness1"
                    value="high" />
                <label for="activeness1">High activeness answer</label>

                <p>Colourfulness question</p>

                <input
                    onChange={this.handleColourfulnessChange1}
                    type="radio"
                    id="colourfulness1"
                    name="colourfulness1"
                    value="low" />
                <label for="colourfulness1">Low colourfulness answer</label>

                <input
                    onChange={this.handleColourfulnessChange1}
                    type="radio"
                    id="colourfulness1"
                    name="colourfulness1"
                    value="medium" />
                <label for="colourfulness1">Medium colourfulness answer</label>

                <input
                    onChange={this.handleColourfulnessChange1}
                    type="radio"
                    id="colourfulness1"
                    name="colourfulness1"
                    value="high" />
                <label for="colourfulness1">High colourfulness answer</label>

                <p>Extroversion question</p>

                <input
                    onChange={this.handleExtroversionChange2}
                    type="radio"
                    id="extroversion2"
                    name="extroversion2"
                    value="medium" />
                <label for="extroversion2">Medium extroversion answer</label>

                <input
                    onChange={this.handleExtroversionChange2}
                    type="radio"
                    id="extroversion2"
                    name="extroversion2"
                    value="low" />
                <label for="extroversion2">Low extroversion answer</label>

                <input
                    onChange={this.handleExtroversionChange2}
                    type="radio"
                    id="extroversion2"
                    name="extroversion2"
                    value="high" />
                <label for="extroversion2">High extroversion answer</label>

                <p>Generosity question</p>

                <input
                    onChange={this.handleGenerosityChange2}
                    type="radio"
                    id="generosity2"
                    name="generosity2"
                    value="high" />
                <label for="generosity2">High generosity answer</label>

                <input
                    onChange={this.handleGenerosityChange2}
                    type="radio"
                    id="generosity2"
                    name="generosity2"
                    value="low" />
                <label for="generosity2">Low generosity answer</label>

                <input
                    onChange={this.handleGenerosityChange2}
                    type="radio"
                    id="generosity2"
                    name="generosity2"
                    value="medium" />
                <label for="generosity2">Medium generosity answer</label>

                <p>Activeness question</p>

                <input
                    onChange={this.handleActivenessChange2}
                    type="radio"
                    id="activeness2"
                    name="activeness2"
                    value="medium" />
                <label for="activeness2">Medium activeness answer</label>

                <input
                    onChange={this.handleActivenessChange2}
                    type="radio"
                    id="activeness2"
                    name="activeness2"
                    value="low" />
                <label for="activeness2">Low activeness answer</label>

                <input
                    onChange={this.handleActivenessChange2}
                    type="radio"
                    id="activeness2"
                    name="activeness2"
                    value="high" />
                <label for="activeness2">High activeness answer</label>

                <p>Colourfulness question</p>

                <input
                    onChange={this.handleColourfulnessChange2}
                    type="radio"
                    id="colourfulness2"
                    name="colourfulness2"
                    value="high" />
                <label for="colourfulness2">High colourfulness answer</label>

                <input
                    onChange={this.handleColourfulnessChange2}
                    type="radio"
                    id="colourfulness2"
                    name="colourfulness2"
                    value="low" />
                <label for="colourfulness2">Low colourfulness answer</label>

                <input
                    onChange={this.handleColourfulnessChange2}
                    type="radio"
                    id="colourfulness2"
                    name="colourfulness2"
                    value="medium" />
                <label for="colourfulness2">Medium colourfulness answer</label>

                <button>Ribbet quack...</button>

            </form>
        );
    }
}


export default Quiz;