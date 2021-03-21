import React from 'react';


class Button extends React.Component {

    state = {};

    getColor = () => {
        const arr = [`red`, `yellow`, `gray`, `green`, `pink`, `white`, `gold`, `orange`, `violet`];
        return arr[Math.floor(Math.random() * arr.length)];
    }

    render() {
        return <div className={`button ${this.props.number}`} style={{background: this.props.color,}}
                    onClick={(target) => {
                        if (this.props.pressed === false) return
                        console.log(this.props);
                        const number = (target.target.classList.value.substr(13));
                        const name = `color` + number;
                        this.state[name] = this.getColor();
                        this.props.updateColor(this.state[name], number);
                    }}>{this.props.text}</div>;
    };
}

Button.defaultProps = {color: `blue`, pressed: true,};

class App extends React.Component {

    state = {}

    updateColor = (value, n) => {
        const buffer = {}
        buffer[`color` + n] = value;
        this.setState(buffer);
    }

    off() {
        const state = this.state.pressed === false;
        this.state.offnikColor = this.state.offnikColor === `red` ? `gray` : `red`;
        this.setState({pressed: state,});
        setTimeout(() => {
            console.log(this.state)
        }, 1000)
    }

    updateText(text){
        if(this.state.pressed === false ) return
        this.setState({text:text});

    }

    render() {
        return (
            <body>
            <div className={`buttonContainer`}>
                <Button number={`button1`} color={this.state.color1} updateColor={this.updateColor}
                        pressed={this.state.pressed} text={this.state.text}/>
                <Button number={`button2`} color={this.state.color2} updateColor={this.updateColor}
                        pressed={this.state.pressed} text={this.state.text}/>
                <Button number={`button3`} color={this.state.color3} updateColor={this.updateColor}
                        pressed={this.state.pressed} text={this.state.text}/>
                <Button number={`button4`} color={this.state.color4} updateColor={this.updateColor}
                        pressed={this.state.pressed} text={this.state.text}/>
                <Button number={`button5`} color={this.state.color5} updateColor={this.updateColor}
                        pressed={this.state.pressed} text={this.state.text}/>
            </div>
            <input type={`text`} onChange={(value) => {
               this.updateText(value.nativeEvent.target.value)
            }}/>
            <div className={`buttonOffnik`} style={{background: this.state.offnikColor}}
                 onClick={() => this.off()}>Выключи меня семапай!
            </div>
            </body>
        )
    }
}

export default App;