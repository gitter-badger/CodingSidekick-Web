# Model Schemas

**Legend**
- !! = Not Implemented Yet

---

## Server-Side

### User
- username: *String*
- firstName: *String*
- lastName: *String*
- email: *String*
- password: *String*
- createdAt: *Date*
- updatedAt: *Date*
- isAnAdmin: *Boolean*
- resourcesFlaggedCount: *Number*
- !! favorites: *[Resource]*
- !! comments: *[Comment]*

### Category
- name: *String*
- createdAt: *Date*
- updatedAt: *Date*

---

## Missing Models
- Resource
- Language
- Tool
- Type
- Commnet
- ???