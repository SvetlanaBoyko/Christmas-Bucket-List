import { Component } from "react";

export class BucketList extends Component {
    constructor() {
        super();
        this.state = {
            userInput: '',
            bucketList: ['Bake coockies', 'Buy presents', 'Decorate Christmas tree',] }
    }

onChangeEvent(e) {
    this.setState({userInput: e})
}

addItem(input) {
    if (input === '') {
        alert('Please enter an item!')
    }
    else {
    let listArray = this.state.bucketList;
    listArray.push(input);
    this.setState({bucketList: listArray, userInput: ''})
    }
}

deleteItem() {
    let listArray = this.state.bucketList;
    listArray = [];
    this.setState({bucketList: listArray})
}

crossedWord(event) {
    const li = event.target;
    li.classList.toggle('crossed');
}

onFormSubmit(e) {
    e.preventDefault();
}

render() {
    return(
        <form onSubmit={this.onFormSubmit}>
            <div className="container">
                <input
                type='text'
                onChange = {(e) => {this.onChangeEvent(e.target.value)}}
                placeholder = 'Things to be done before Christmas...'
                value = {this.state.userInput}/>
            </div>
            <div className="container">
                <button className="btn add" onClick={() => this.addItem(this.state.userInput)}>Add</button>
            </div>
            <ul>
                {this.state.bucketList.map((item, index) => (
                    <li onClick={this.crossedWord}  key={index}>❄️ {item}</li>
                ))}
            </ul>
            <div className="container">
                <button className="btn delete" onClick={() => this.deleteItem()}>Delete all</button>
            </div>
        </form>
    )
}
}