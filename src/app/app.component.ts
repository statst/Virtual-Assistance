import { Component } from '@angular/core';

import {
  Message,
  User,
  ExecuteActionEvent,
  SendMessageEvent,
} from "@progress/kendo-angular-conversational-ui";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public readonly user: User = {
    id: 1,
  };

  public readonly bot: User = {
    id: 0,
  };

  public messages: Message[] = [
    {
      author: this.bot,
      text: "A sample message",
      suggestedActions: [
        {
          value: "A sample reply",
          type: "reply",
        },
        {
          title: "A sample link",
          value: "#link",
          type: "openUrl",
        },
        {
          title: "Place a call",
          value: "555-123-456",
          type: "call",
        },
        {
          title: "A custom action",
          value: "Custom action clicked",
          type: "alert",
        },
      ],
    },
  ];

  public onAction(e: ExecuteActionEvent): void {
    if (e.action.type === "alert") {
      alert(e.action.value);
    }
  }

  public sendMessage(e: SendMessageEvent): void {
    this.messages = [...this.messages, e.message];
  }
}
