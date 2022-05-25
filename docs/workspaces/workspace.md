---
sidebar_position: 1
---

# What are Workspaces?

Workspaces provide data separation for tenants using the product. User accounts require to be granted access so they can access data in that Workspace. Users can be part of multiple Workspaces and each Workspace can have multiple users.

# Data separation

Each Workspace acts as a separate tenant and any data created in a Workspace will honor the tenant boundary. Data created in a given Workspace cannot be shared in any other Workspaces.

All data entities, except User are **Workspace Aware** and any operation on such entities require Workspace context. No operations will be permitted on Workspace Aware entities without a Workspace context.