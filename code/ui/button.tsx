import * as React from "react";
import { PropertyControls, ControlType } from "framer";
import styled from 'styled-components';

const ButtonContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    background-color: ${(p: Partial<Props>) => p.backgroundColor};
    &:hover {
        background-color: ${(p: Partial<Props>) => p.hoverColor};
    }
`

// Define type of property
interface Props {
    text: string;
    backgroundColor: string;
    hoverColor: string;
    onClick: () => void;
}

export class Button extends React.Component<Props> {

    // Set default properties
    static defaultProps = {
        text: "Join Meeting!",
        backgroundColor: "red",
        hoverColor: "pink",
        onClick: () => {},
    }

    // Items shown in property panel
    static propertyControls: PropertyControls = {
        text: { type: ControlType.String, title: "Text" },
        backgroundColor: { type: ControlType.Color, title: "Background Color"},
        hoverColor: { type: ControlType.Color, title: "Hover Color"},
    }

    render() {
        return (
            <ButtonContainer
                onClick={this.props.onClick}
                backgroundColor={this.props.backgroundColor}
                hoverColor={this.props.hoverColor}
            >
                {this.props.text}
            </ButtonContainer>
        );
    }
}