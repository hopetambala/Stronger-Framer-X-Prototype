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
        message:
            "Hi! I'm Stronger Assistant and I'm here to make you feel stronger than you felt yesterday :D",
        trigger: "2",
    },
    {
        id: "2",
        message:
            "I see you haven't setup a workout regime. We can get nitty gritty or just start with something simple. Thoughts?",
        trigger: "3",
    },
    {
        id: "3",
        options: [
            { value: 1, label: "Simple, I want to workout now", trigger: "4" },
            { value: 2, label: "Let's get into it", trigger: "3" },
        ],
    },
    {
        id: "4",
        message: "Wrong answer, try again.",
        trigger: "2",
    },
    {
        id: "5",
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
