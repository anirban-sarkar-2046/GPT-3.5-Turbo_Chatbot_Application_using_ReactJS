import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ChatHistory() {
  const messages = JSON.parse(sessionStorage.getItem('messages')) || [];

  const combinedMessages = [];
  let currentRow = { userInput: "", botResponse: "" };
  let skipFirstMessage = true;

  messages.forEach((message, index) => {
    if (message.isBot) {
      if (currentRow.userInput) {
        currentRow.botResponse = message.text;
        combinedMessages.push(currentRow);
        currentRow = { userInput: "", botResponse: "" };
        skipFirstMessage = false;
      } else if (skipFirstMessage && index === 0) {
        return;
      } else {
        skipFirstMessage = false;
        combinedMessages.push({ userInput: "", botResponse: message.text });
      }
    } else {
      currentRow.userInput = message.text;
    }
  });

  if (currentRow.userInput) {
    combinedMessages.push(currentRow);
  }

  return (
    <div className="container mt-4">
      <h2 style={{ color: 'wheat' }}>Chat History</h2>
      <table
        className="table table-hover table-dark table-bordered" style={{borderColor: '#1e1f21'}}>
        <thead>
          <tr>
            <th style={{ color: 'grey' }}>User Input</th>
            <th style={{ color: 'grey' }}>Bot Response</th>
          </tr>
        </thead>
        <tbody>
          {combinedMessages.map((row, index) => (
            <tr key={index}>
              <td style={{ width: '30%' }}>{row.userInput}</td>
              <td style={{ width: '70%' }}>{row.botResponse}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ChatHistory;
