import * as React from "react"
import { ThemeProvider } from "styled-components"
import ChatBot from "react-simple-chatbot-for-framer-x"

const otherFontTheme = {
    background: "#f5f8fb",
    fontFamily: "Helvetica Neue",
    headerBgColor: "#6e48aa",
    headerFontColor: "#fff",
    headerFontSize: "16px",
    botBubbleColor: "#6E48AA",
    botFontColor: "#fff",
    userBubbleColor: "#fff",
    userFontColor: "#4a4a4a",
}

// default start data
const startData = [
    {
        id: "1",
        message: "What number bo bumber am I thinking (Default steps example)?",
        trigger: "2",
    },
    {
        id: "2",
        options: [
            { value: 1, label: "Number 1", trigger: "4" },
            { value: 2, label: "Number 2", trigger: "3" },
            { value: 3, label: "Number 3", trigger: "3" },
        ],
    },
    {
        id: "3",
        message: "Wrong answer, try again.",
        trigger: "2",
    },
    {
        id: "4",
        message: "Awesome! You are a telepath!",
        end: true,
    },
]

// Define type of property
interface Props {
    attachedData: string
    onCallback: () => void
    steps: any
}

interface State {
    setData: any
}

export class ReactSimpleBot extends React.Component<Props> {
    state = {
        setData: this.props.steps,
    }

    // Set default properties
    static defaultProps = {
        attachedData: "",
        onCallback: ({ renderedSteps, steps, values }) => {
            console.log("renderedSteps => ", renderedSteps)
            console.log("steps => ", steps)
            console.log("values => ", values)
        },
        steps: startData,
    }

    render() {
        const { setData } = this.state

        let componentToReturn = null

        //console.log("setData => ", setData)

        if (setData.length > 0)
            componentToReturn = (
                <ThemeProvider theme={otherFontTheme}>
                    <ChatBot
                        steps={this.props.steps}
                        hideHeader={true}
                        handleEnd={this.props.onCallback}
                    />
                </ThemeProvider>
            )

        return componentToReturn
    }
}