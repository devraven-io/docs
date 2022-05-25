---
sidebar_position: 1
---

# Create SSL Monitor

An SSL monitor allows you to receive warning notifications before expiry of an SSL certificate or receive failure alerts on SSL certificate expiry for the configured domain.

## Add a new SSL Monitor

Navigate to [SSL Monitors](https://app.devraven.io/app/sslMonitors) page.

1. Click **New Monitor** button.
2. Provide **Domain Name** you would like to monitor e.g: example.com.
3. Select appropriate warning interval for receiving Warning notifications before certificate expiry.
4. Leave the Status enabled to immediately enable the monitor on creation.
5. Optionally, select multiple monitoring locations for checking the SSL certificates for your domain from multiple geolocations.

:::info

If your service has geolocation specific end points which serve your geographically distributed customers, you may choose to monitor from multiple locations to ensure certificates deployed to all the end points are valid. But if you have one end point for serving all your customers, you may choose to monitor from one location.

:::

6. Click **Submit**
7. A new SSL monitor is created for your domain.
