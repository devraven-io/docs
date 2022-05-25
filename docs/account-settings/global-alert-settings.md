---
sidebar_position: 1
---

# Global Alert Channels

Global Alert Settings allow you to configure alert channels that can be commonly used across monitors in your Workspace for receiving alerts. For example: if Slack integration is enabled for your Workspace, all monitors will be able to send alerts to the integrated Slack channel.

### Email Address

Configure an **email address** for receiving alerts from all the monitors. Usually this email address is your team's distribution list or Office 365 group email address so all the team members receive the alerts.

### Slack integration

Enable **Slack** integration for receiving alerts from all the monitors to the configured Slack channel. Only one Slack channel can be setup to receive notifications per Workspace. We do not currently support sending Slack notifications to multiple channels or to monitor specific channels.

Refer [Slack itegration](/docs/integrations/enable-slack-integration) page for more details,

### Microsoft Teams incoming webhook URL

You can choose to receive notifications via **Microsoft Teams** by setting up an incoming webhook URL. We only support sending notifications to one Microsoft Teams incoming webhook URL per Workspace.

:::info

Every monitor by default has notifications enabled to **Global Alert Channels**. You can choose to disable notifications from individual monitors by changing confguration in **Notification Settings** section for the monitor.

:::