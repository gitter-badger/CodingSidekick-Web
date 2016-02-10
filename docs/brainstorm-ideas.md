# Brainstorming Ideas

### Allow registered users to submit a resource.
- Any submission by a user needs to be approved.

### UI for reading links
- Coming soon...
 
### Categories
- All the languages (Needs to be own entity)
- Tutorials
- Blogs
- Podcasts
- Hackathons
- News
- Discussion

### Misc.
- Bootcamp info
- Exercises / Interview puzzles
- Hackthons
- Known learning resources such as Codecademy, Pluralsight, ect.

### Tools
- Programming tools such as JsFiddle, Codepen, ect.
 
> *Fun stuff, culture, watercooler*

-------

# Entities
**NOTE:** *Every entity should contain proper id*

**Read Schema:** {property} <= {tablename from where data comes from}

### Resource
- Image
- URL
- Short title
- Long title
- Description
- Last updated
- Vote Count (including negative values)
- Flagged Count (It should deactive after # of flag)
- List of Category      <= Category
- List of Types         <= Type
- List of Comments      <= Comment

### Category
- Name
- ???

### Type
- Name
- ???
   
### Comment
- Author <= Profile
- Date Created
- Content

### Profile
- First Name
- Last Name
- Username
- Email
- Password
- Created At
- Modified At
- *More coming soon...*

-------

### Authors
- [Christian 'iamrelos' Soler](https://github.com/iamrelos)
- [Eric Carraway](https://github.com/ericcarraway)
- [Omar Quimbaya](https://github.com/WritingPanda)