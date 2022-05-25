---
sidebar_position: 2
---

# Microsoft Teams integration

You can choose to receive notifications via **Microsoft Teams** by setting up an incoming webhook URL. We only support sending notifications to one Microsoft Teams incoming webhook URL per Workspace.

We do not currently support sending Microsoft Teams notifications to multiple teams or to monitor specific teams.

### Enabling Microsoft Teams integration

1. Login to **Microsoft Teams** app.
2. Navigate to the team where you would to receive the notifications.
3. Click the **ellipsis button** on the top right corner for your team.
4. Click **Connectors** menu item in the displayed menu.

![Connectors](/img/teams-connectors.png)

5. A modal dialog will be displayed as shown in the picture below.
6. Click **Add** button next to **Incoming Webhook**
7. 

8. Copy the generated **Incoming Webhook URL**.
9. Navigate to [Global Alert Channels](https://app.devraven.io/app/settings/alert-channels) page in Workspace Settings.
10. Paste the copied **Incoming Webhook URL** to the textbox under **Microsoft Teams incoming webhook URL**
11. Click **Save changes**

### Disabling Microsoft Teams integration

1. Navigate to [Global Alert Channels](https://app.devraven.io/app/settings/alert-channels) page in Workspace Settings.
2. Clear the incoming webhook URL under **Microsoft Teams incoming webhook URL**
3. Click **Save changes**