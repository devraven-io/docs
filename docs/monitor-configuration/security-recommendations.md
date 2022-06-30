---
sidebar_position: 7
---

# Security recommendations

We recommend the following general security practices when setting up DevRaven for monitoring your services. These recommendations are not just specific to DevRaven, but can apply to any monitoring services you use.

1. Use credentials with least privilege required for validating the functionality.
2. Use seperate test accounts or demo accounts in your environments for setting up monitors. 
3. Never use any accounts with real customer data or any other important data that requires to be secured for monitoring purposes.
4. Setup monitoring schedules that works best for your needs. Do not DDOS your services by setting up too many monitors. For example if you have 10 tests setup to run every 5 minutes from 5 locations, there will be ~50 concurrent users executing your scenario every 5 minutes.