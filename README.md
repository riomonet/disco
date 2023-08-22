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

`const upByTwo = () => {
		setNum(num + 1); 
		setNum(num + 1); // this line happens before previous line is finished. so this
						 //routine ends up setting num to num + 1 not Num + 2
    }`


To guarantee that the first *STATE UPDATE* is finished before the second one run you
can pass a callback to the STATE-SETTER-FUNCTION in this example setNum;
 
The callback is only run when all previous state changes have completed
 
The  callback that is passed to state setter function
format: pass in the  current stat and return  the new state is returned

`	const upByTwoBetter = () => {
		setNum(n=>n+1); 
		setNum(n=>n+1);

   }`
   
