---
sidebar_position: 3
---

# PagerDuty Integration

PagerDuty integration allows notifying on-call responders about monitoring alerts and recovery events.

SSL, Web Page, Synthetic and API monitoring failures, warning and recovery events can be sent to associated PagerDuty services.

## How it works?

* Once PagerDuty integration is enabled for a Workspace, monitors can be associated with PagerDuty services.
* When a monitor reports a failure, DevRaven will `trigger` an alert for all associated PagerDuty services for the monitor.
* When the monitor recovers and passes again, a `resolve` event will be sent to the PagerDuty service to resolve the previously triggered alert.

## Support
If you need help with this integration, please contact support@devraven.io

## Integration Walkthrough

### In DevRaven

1. Login to your DevRaven Workspace.
2. Navigate to [Settings](https://app.devraven.io/app/settings) page and then click on **Integrations** tab.
3. The page lists a **PagerDuty** tile.
![PagerDuty Tile](/img/dr-pd1.jpg)
4. Click **Connect** button on **PagerDuty** tile.
5. A new popup window will be displayed prompting for your PagerDuty credentials.
![PagerDuty Login](/img/dr-pd2.jpg)
6. Sign In to your PagerDuty account.
7. **Select Services** to integrate with DevRaven.
![Select PagerDuty Services](/img/dr-pd3.jpg)
8. Click **Connect**. A confirmation message will be displayed.
9. Close the popup window.
![Confirmation Message](/img/dr-pd4.jpg)
10. The PagerDuty tile should now show **View details** and **Disconnect** button. DevRaven will now be able to send alerts to the selected PagerDuty services.

### Sending Monitoring alerts to PagerDuty

To send monitoring alerts from monitors:

1. Navigate to the monitor page.
2. Click **Edit Monitor** button.
3. Click **Integrations** tab.
![Integrations tab](/img/dr-pd5.jpg)
4. Under **PagerDuty Integration** section, select the PagerDuty Services to be alerted.
5. Click **Save** button.
6. The monitor is now configured to send alerts to associated PagerDuty Services.

## How to Uninstall

### In DevRaven

1. Login to your DevRaven Workspace.
2. Navigate to [Settings](https://app.devraven.io/app/settings) page and then click on **Integrations** tab.
3. The page lists a **PagerDuty** tile.
4. Click **Disconnect** button.

### In PagerDuty

1. Login to your PagerDuty account.
2. Click **Services** in the top navigation bar.
3. Click the service which is integrated with DevRaven.
4. Click **Integrations** tab.
5. Click the gear icon for **DevRaven** integration and then click **Delete Integration** button.
6. Repeat the steps for any other associated services.