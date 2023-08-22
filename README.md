The Disco Dance Floor Project

### Using this projecet to study state in react
- Pass event handlers down as props to child componenets
- Understand the **KEY** prop that React asks for when Mapping over data
- understanding how **useState** works
- updating and storing mutable items

---
### ordering and useState (React Hooks)
Every time a componenet is rendered, that components function runs. 
**useState** allows  values of variables to persist across function calls.
React has a mechanism that mantains a table of values. The table track variables
in the component function by the **ORDER** in which they are declared, not by name.
> YOU CAN'T CALL HOOOS INSIDE OF LOOPS, CONDITIONALS, or NESTED FUNCTIONS. MUST BE AT THE
> TOP LEVEL OF THE REACT COMPONENT.

### Updating states with callbacks


`const [num, setNum] = useState(0)`

A. 
a. `setNum(n + 1)`
b. `setNum(n + 1)`

B.
a. `setNum(n => n + 1)`
b. `setNum(n => n + 1)`

In  A there will be timing problems. b will happen before a is finsihed and the code 
in A will end up setting num to 1 when the  desired state is 2

In B b will wait till callback in a is executed and will handle the state correctly




