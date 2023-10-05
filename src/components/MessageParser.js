// MessageParser starter code in MessageParser.js
class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase();
  
      if (lowerCaseMessage.includes("hello")) {
        this.actionProvider.greet();
      }
  
      if (lowerCaseMessage.includes("javascript")) {
        this.actionProvider.handleGotIt();
      }
      if(lowerCaseMessage.includes("15-10-2023")) {
        this.actionProvider.handleDateSelect();
      }

      if(lowerCaseMessage.includes("Morning (9-12) AM")) {
        this.actionProvider.handleTimeSlot()
      }
    }
  }
  
  export default MessageParser;
  