---
sidebar_position: 1
---

# Quick start guide

Let's discover **DevRaven in less than 5 minutes**.

## Sign up for an account

Get started by [signing up](https://app.devraven.io/register) for a new account. You can sign up for a new account using your email address for free.

Alternatively, you can simply login with an existing Google account.

## Create a Workspace

Up on first login to your account, you will land on **My Workspaces** page. 

1. Click **New Workspace** tile. 
2. Provide a name for the Workspace
3. Click **Create** button to create a new Workspace.
4. Click **Log in to Workspace** for the newly created Workspace.

## Configure Alert Channels

Configure **Global Alert Channels** to receive alerts to configured email address, Slack or Microsoft Teams.

1. Click [Settings](https://app.devraven.io/app/settings/alert-channels) in the left navigation menu.
2. Under **Global Alert Channels** tab:
    * Receive **email alerts** by providing an email address where you'd like to receive alerts. Typically this is the distribution list email address for your team.
    * **Activate Slack Integration** and follow the instructions to enable Slack integration for your Workspace.
    * **Enable Microsoft Teams** integration by providing an incoming webhook URL for your team.

## SSL Monitors
SSL Monitors allow you to receive failure alerts for your domain for certificate errors or receive advance warning notifications before the certificate expiry. 

To create a new SSL monitor:

1. Click **SSL Monitors** in the left navigation menu.
2. Click **New Monitor** button.
3. Enter the **Domain Name** to monitor. e.g. example.com
4. Select **Warning interval before certificate expiry**
5. Click **Submit** to create a new monitor.

## Web Page Monitors
Web Page Monitors allows you to check the quality of your web pages by running [Lighthouse](https://developers.google.com/web/tools/lighthouse) reports from selected monitoring locations.

To create a Web Page monitor:

1. Click **Web Page Monitors** in the left navigation menu.
2. Click **New Monitor** button.
3. Provide a **name** for the new monitor. e.g. Home page
4. Enter the **URL** to monitor. e.g. https://www.example.com
5. Select **Device** for the monitor.
6. Select applicable **categories** and **Assert Scores** for executing Lighthouse tool.
7. Click **Submit** to create a new monitor.

## Invite other users

You can add new users to your newly created Workspace. 

1. Click [Users](https://app.devraven.io/app/users) link in the left navigation menu.
2. Click **Invite Users** tile in the Users page.
3. Enter the email address of the user to invite and select appropriate role for the user.

:::info

We support **Standard User** and **Admin User** roles for users added to a Workspace. Admin users will be able to invite new users and access billing profile for your Workspace.

:::