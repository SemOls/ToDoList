import { Component } from "react";
import backet from "./372.png";
import './App.css';

export class ToDoList extends Component {
    state = {
        userInput:'',
        toDoList: [],
        deleteList: [],
        text:true,
          }

    onChangeEvent (e){
    this.setState({userInput:e})
    }

    addItem (input) {
        if (input ===""){
            alert("Don't wait. The time will never be just right ")
        }
        else{ let listArray =this.state.toDoList;
            listArray.push(input);
            this.setState({toDoList:listArray, userInput:""})}
          }

    remove (input, index){
        let listArray =this.state.toDoList;
        let delArray=this.state.deleteList;
        listArray.splice(index,1)
        delArray.push(input)
        this.setState({toDoList:listArray})
        this.setState({deleteList:delArray})
    }

    crosseWord(event) {
        const li = event.target;
        li.classList.toggle("crossed");
       
       }
       delitAll (){
        let listArray =this.state.toDoList;
        listArray=[];
        this.setState({toDoList:listArray})
       }

    onFormSubmit(e){
        e.preventDefault()
    }

    render () {
        const  btnText= this.state.text ? "The more we do, the more we can do." : " Only I can change my life. No one can do it for me!";
        return (
            <div>
                <div className="container">
                   <p onClick={()=> {this.setState({text: !this.state.text})}}> <h1>{btnText}</h1></p>

                </div>
                <form onSubmit={this.onFormSubmit}>
                <div className="container">
                    <input className="field" value={this.state.userInput} placeholder="Enter your text..." type='text' 
                    onChange={(e)=> {this.onChangeEvent(e.target.value)}} >
                     </input>
                     <button onClick={()=> this.addItem(this.state.userInput)} > 🖆 add </button>
                </div>
                <div className="container">
              <ul>
                {this.state.toDoList.map ((item, index) => (
                    <li onClickCapture={this.crosseWord}  key={index} > 
                    <span><img src={backet} onClick={()=>this.remove(item,index)} className="image"  alt="backet" /></span>
                    <span> {item}    ✓    </span>
                    </li>
                    ))}
              </ul>
              
              </div>
                </form>
                <div className="container">
                    <button onClick={()=>{this.delitAll()}}> Delete All</button>
                    </div>
            </div>
        )
    }
}
