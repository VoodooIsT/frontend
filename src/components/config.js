import { createChatBotMessage } from "react-chatbot-kit";
import GotItBtn from "./wodgets/GotItBtn";
import Calendar from "./wodgets/Calendar";
import TimeSlot from "./wodgets/TimeSlot";
import StudentInfo from "./wodgets/StudentInfo";

const config = {
  initialMessages: [createChatBotMessage(`Hello, Welcome to student info system!`, {
    widget: 'GotItBtn'
  })],
  botName: "HappilyEver",
  

  widgets : [
    {
        widgetName: 'GotItBtn',
        widgetFunc: (props) => <GotItBtn {...props} />
    },
    {
        widgetName: 'calendar',
        widgetFunc: (props) => <Calendar {...props} />
    },
    {
      widgetName: 'timeslot',
      widgetFunc: (props) => <TimeSlot {...props} />
    },
    {
      widgetName: 'studentInfo',
      widgetFunc: (props) => <StudentInfo {...props} />
    }
  ]
}

export default config