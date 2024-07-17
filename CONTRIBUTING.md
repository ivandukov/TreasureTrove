> *Any fool can write code that a computer can understand.  
> Good programmers write code that humans can understand.*   
> ~ Martin Fowler

# Git

### Submitting an Issue
Before you submit an issue, please search the issue tracker, maybe an issue for your problem already exists and the discussion might inform you of workarounds readily available. 
Please also try to keep issues small and concise. 
Too big issues make it hard to keep track of the progress. 

### Commit messages
Each commit message should consist of three parts:

- **header**: type, scope and short description of the change
- **body**: motivation for the change and how it contrasts with previous behavior
- **footer**: reference to an issue

```
<type>(<scope>): <description>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

### Branches
When opening a new branch, please use the following notation:
```
feat/<issue-number>
```

### Commit Example
```
refactor(backend): refactored main.go and documented code

The logic in GiveawayController was improved via the Command Design Pattern 

#1, #2, #3 
```

If you're using the command line, you can add additional ```"-m"``` options to create a space between header, body and footer:
```console
$ git commit -m "refactor(backend): refactored main.go and documented code" -m "The logic in GiveawayController was improved via the Command Design Pattern" -m "#1, #2, #3"
```

### Commit Types
- **build:** Changes that affect the build system or external dependencies
- **docs:** Documentation only changes
- **fix:** a bug fix in our codebase
- **feat:** introduction of a new feature to our codebase
- **refactor:** A code change that neither fixes a bug nor adds a feature
- **test:** Adding missing tests or correcting existing tests
- **perf:** A code change that improves performance

### Further information
For further information, you can check out the following links:
- [Conventional Commits Specification](https://www.conventionalcommits.org/en/v1.0.0/)
- [Angular guidelines](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines)

# Go

### Comments
Unfortunately, Golang does not have a standard documentation style similar to that of javadoc.
You can document your code this way:
```go
// [Functionname] does this and that... 
//  
// Parameter(s):
//   - p1: an integer variable
//   - p2: another integer variable
// 
// Returns: the sum of both parameters
func foo(p1 int, p2 int) {

    return p1 + p2
}
```

# TypeScript

### Avoid Nesting
Try to avoid nesting components within each other. 
Every time the parent component is rendered, it will also redefine the child component, which means it gets a new memory adress and that can lead to performance issues and unpredictable behaviour.  
Bad: 
```typescript
function Parent() {

   function Child() {
      return (
         <>
            <Button>Save</Button>
         </>
      );
   }

   return (
      <>
         <Child/>
      </>
   );
}
```

Good: 
```typescript
function Child() {
   return (
      <>
         <Button>Save</Button>
      </>
   );
}

function Parent() {
   
   return (
      <>
         <Child/>
      </>
   );
}
```

### Use Interfaces for Parameters
If you have too many parameters for a component, it can make the code look messy. 
Instead, try declaring an interface for it.

Bad:
```typescript
function MyComponent({firstName, lastName, id} : {firstName: string, lastName: string, id: int}) {
    
}
```

Good:
```typescript
interface MyComponentProperties {
   firstName: string;
   lastName: string;
   id: int;
}

function MyComponent({firstName, lastName, id} : MyComponentProperties) {

}
```

### Avoid Assignment in conditions

Please try to avoid declaring or assigning variables inside conditions. It makes the code hard to read.

Bad:
```typescript
let i: number;

if(i = 1) {
    // ...
}
```

Good:
```typescript
let i: number;

if(i != null) {
  i = 1;    
}
```

### Documentation
When documenting Typescript code, we use the javadoc style (See also the official [JSDoc Reference](https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html#type)): 
```typescript
/**
 * This is a description.
 * @param {string} p1 - a string containing something
 * @param {string} p2 - a string containing something
 * @returns {string} a string containing the result
 */
function foo(p1, p2) {

    return p1;
}
```

### Comments
- Write comments in English
- Do not add empty comments
- Begin single-line comments with a single space

Good:
```typescript
// single-line comment
```

Bad:
```typescript
//single-line comment
//  single-line comment
```

- Do not write embedded comments
- Do not write comments between declaration of statement and opening curly brackets
- Place comments above statements, or within statement body

Good:
```typescript
// This method does something..
public method() {
}
```

Bad:
```typescript
public method() { // This method does something..
}
```

```typescript
public method() {
// This method does something..
}
```

### Indentation
For single line ```if``` and ```while``` statements, we use brackets.

Bad:
```typescript
if(condition)
    // Do something
```

Good:
```typescript
if(condition) {
    // Do something
}
```

### Variables
Always use ```const``` or ```let``` to declare variables. 
Use ```const``` by default, unless a variable needs to be reassigned. 
Never use ```var```.
```const``` and ```let``` are block scoped, like variables in most other languages. 
```var``` in JavaScript is function scoped, which can cause difficult to understand bugs. 

### Comments
Though a pain to write, comments are absolutely vital to keeping our code readable. 
But remember: while comments are very important, the best code is self-documenting. 
Giving sensible names to types and variables is much better than using obscure names that you must then explain through 
comments. 
When writing your comments, write for your audience: the next contributor who will need to understand 
your code. 
Be generous — the next one may be you!

### Naming Conventions
We strongly recommend to use descriptive variable names. 
Self-describing code doesn't need a comment. 
Single letter variables for examples is not clear enough (except for cases such as ```i``` in ```for``` loops). 
Abbrivations are fine but we prefer to write everything out. 
