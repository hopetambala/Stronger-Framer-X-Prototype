import * as React from "react"
import { ThemeProvider } from "styled-components"
import ChatBot from "react-simple-chatbot-for-framer-x"

const otherFontTheme = {
    background: "#f5f8fb",
    fontFamily: "Roboto Black",
    headerBgColor: "#8AD966",
    headerFontColor: "#fff",
    headerFontSize: "16px",
    botBubbleColor: "#8AD966",
    botFontColor: "#fff",
    userBubbleColor: "#BFF29B",
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
        message:
            "No problem. Let's get a workout started for you right away then",
        trigger: "5",
    },
    {
        id: "5",
        message:
            "Looking at your *calendar* and *where you'll be*, what do you think about this workout schedule",
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
