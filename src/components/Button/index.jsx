import React from 'react';
import './styles.css';

export class Button extends React.Component {
    state = {
        pressed: false,
    }

    handleMouseDown = () => {
        this.setState({
            pressed: true,
        })
    }

    handleMouseUp = () => {
        this.setState({
            pressed: false,
        })
    }

    render() {
        const {
            disabled,
            color,
            onClick,
        } = this.props;

        const {
            pressed
        } = this.state;

        return (
            <button
                disabled={disabled}
                className={`button`}
                style={{
                    background: color,
                    transform: `scale(${pressed ? 0.90 : 1})`,
                }}
                onMouseDown={this.handleMouseDown}
                onMouseUp={this.handleMouseUp}
                onClick={onClick}
            >
                {this.props.text}
            </button>
        )
    };
}

Button.defaultProps = {
    text: '',
    color: `blue`,
    disabled: true,
    onClick: () => {
    },
};
