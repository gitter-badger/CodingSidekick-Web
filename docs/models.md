# Model Schemas -

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
- modified: *Date*
- isAnAdmin: *Boolean*
- resourcesFlaggedCount: *Number*
- !! favorites: *[Resource]*
- !! comments: *[Comment]*

### Category
- name: *String*

---

## Missing Models
- Resource
- Language
- Type
- Commnet
- ???