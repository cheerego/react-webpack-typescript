import * as React from 'react';
import * as ReactDOM from "react-dom"
var style:any = require('./index.css');
interface IApp {
    name: string,
    age?: number
}
console.log(style)
export class App extends React.Component<IApp,undefined> {
    render() {
        return (
            <div className={style.text}>
                {this.props.age}
                {this.props.name}
            </div>
        )
    }
}
ReactDOM.render(<App name="hkn" age={18111}></App>, document.getElementById('app'))
