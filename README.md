# Components And Props
### components
- A component is a JS function that returns a JSX element
```
const Welcome = () => <h1 className="message">Hello, component</h1>;
```
- A component name should always start with Capital letter
- React treats the component starting with small letter as a html element
```
<script type = 'text/babel'>
const Greet = () => <h1 className = 'greet'>Good Morning</h1>
ReactDOM.render(<Greet/>,document.getElementById('root'))
</script>
```
### *Note* - we can call the function with self-closing-tag

# Properties(props)
### React allows us to pass information to component using props

## *Passing Props*
```
const Greet = () => <h1 className = 'heading'>Hello</h1>
ReactDOM.render(<Greet name = 'Reshma' greeting = 'Good Afternoon'/>,
document.getElementById('root'))
```
## *Accessing Props*
#### The component access props as a parameter and can be accessed directly
#### Example :
```
const Greet = (props) =>
const {name,greet} = props
return (
<h1 className='heading'>Hello {name},{greet}</h1>

ReactDOM.render(<Greet name = 'Reshma' greet = 'Good Morning'/>,document.getElementById('root'))
```

### _Components are **Reusable** and **composable**_

---
# Example : Simple Notification Page Built With React Components and Props
### Resources

<details>
<summary>Image URLs</summary>

- [https://assets.ccbp.in/frontend/react-js/primary-icon-img.png](https://assets.ccbp.in/frontend/react-js/primary-icon-img.png)
- [https://assets.ccbp.in/frontend/react-js/success-icon-img.png](https://assets.ccbp.in/frontend/react-js/success-icon-img.png)
- [https://assets.ccbp.in/frontend/react-js/warning-icon-img.png](https://assets.ccbp.in/frontend/react-js/warning-icon-img.png)
- [https://assets.ccbp.in/frontend/react-js/danger-icon-img.png](https://assets.ccbp.in/frontend/react-js/danger-icon-img.png)

</details>

<details>
<summary>Colors</summary>

<br/>

<div style="background-color: #0f172a; width: 150px; padding: 10px; color: white">Hex: #0f172a</div>
<div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<div style="background-color: #0b69ff; width: 150px; padding: 10px; color: white">Hex: #0b69ff</div>
<div style="background-color: #2dca73; width: 150px; padding: 10px; color: white">Hex: #2dca73</div>
<div style="background-color: #ffb800; width: 150px; padding: 10px; color: white">Hex: #ffb800</div>
<div style="background-color: #ff0b37; width: 150px; padding: 10px; color: white">Hex: #ff0b37</div>

</details>

<details>
<summary>Font-families</summary>

- Roboto

</details>
