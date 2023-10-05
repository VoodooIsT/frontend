class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
  
    // new method
    greet() {
      const greetingMessage = this.createChatBotMessage("Hi, friend.");
      this.updateChatbotState(greetingMessage);
    }
  
    handleGotIt = () => {
      const message = this.createChatBotMessage(
        "Got It!",
        {
          widget: "calendar",
        },
      );
  
      this.updateChatbotState(message);
    };

    handleDateSelect = () => {
      const message = this.createChatBotMessage("2023-10-15",
      {
        widget: "timeslot"
      }
      );
      this.updateChatbotState(message);
    };

    handleTimeSlot = () => {
      const message = this.createChatBotMessage("Morning (9-12) AM",
      {
        widget:"studentInfo"
      });
      this.updateChatbotState(message);
    }
  
    updateChatbotState(message) {
      // NOTICE: This function is set in the constructor, and is passed in from the top level Chatbot component. The setState function here actually manipulates the top level state of the Chatbot, so it's important that we make sure that we preserve the previous state.
  
      this.setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, message],
      }));
    }
  }
  
  export default ActionProvider;
  