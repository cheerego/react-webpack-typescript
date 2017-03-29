import * as React from 'react';
import * as ReactDOM from "react-dom"

interface IApp{
    name:string,
    age?:number
}
export class App extends React.Component<IApp,undefined>{
    render(){
        return (
            <div>
                {this.props.age}
                {this.props.name}
            </div>
        )
    }
}

ReactDOM.render(<App name="hkn" age={18111}></App>,document.getElementById('app'))
