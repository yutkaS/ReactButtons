import React from 'react';
import {Button} from "../Button";
import './styles.css';

class App extends React.Component {
    static colors = [`red`, `yellow`, `gray`, `green`, `pink`, `white`, `gold`, `orange`, `violet`];

    static getRandomColor = () => {
        const colors = App.colors;
        const random = Math.round(Math.random() * (colors.length - 1));
        console.log(colors[random]);
        return colors[random];
    };

    state = {
        buttons: [
            {
                text: 'button text',
                color: App.getRandomColor(),
                disabled: false,
            }
        ]
    }

    handleClick = (i) => {
        const newButtons = this.state.buttons.slice();
        newButtons[i].color = App.getRandomColor();
        this.setState({
            buttons: newButtons,
        })
    }

    handleAddButton = () => {
        this.setState({
            buttons: [
                ...this.state.buttons,
                {
                    text: `button name:${Math.random()}`,
                    color: App.getRandomColor(),
                    disabled: false,
                }
            ]
        })
    }

    render() {
        return (
            <div>
                <div className={`buttonContainer`}>
                    {
                        this.state.buttons.map((button, i) => (
                            <Button
                                key={i}
                                text={button.text}
                                color={button.color}
                                disabled={button.disabled}
                                onClick={() => {
                                    this.handleClick(i)
                                }}
                            />
                        ))
                    }
                </div>
                <div>
                    <button onClick={this.handleAddButton}>Add Button</button>
                </div>
            </div>
        )
    }
}

export default App;
