import React, { Component } from 'react';

class FormHandling extends Component {

    state = {
        title: '',
        text: '',
        select: '',
        isTrue: true
    }

    onChangehandler = (e) => {
        if (e.target.name === 'input') {
            this.setState({ title: e.target.value });
        } else if (e.target.name === 'text') {
            this.setState({ text: e.target.value });
        } else if (e.target.name === 'select') {
            this.setState({ select: e.target.value });
        } else if (e.target.type  === 'checkbox') {
            this.setState({ isTrue: e.target.checked });
        } else {
            console.log('dsd');
        }

    }


    onSubmitHandler = (e) => {   
        const { title, text, select, isTrue } = this.state;
        e.preventDefault();
console.log(title, text, select, isTrue );
    }


    render() {
        const { title, text, select, isTrue } = this.state;
        
        return (
            <div>
                <form onSubmit={this.onSubmitHandler}>
                    <p> title is {title}</p>
                    <p> text is {text}</p>
                
                    <input name="input" type="text" placeholder="Enter your name" value={title} onChange={this.onChangehandler} />
                    <br/>
                    <br/>
                    <textarea name="text" placeholder="Enter your Text" rows="10" value={text} onChange={this.onChangehandler} />
                    <br/>
                    <br/>
                    <select name="select" value={select} onChange={this.onChangehandler}>
                        <option value="lancer">lancer</option>
                        <option value="Abir">Abir</option>
                        <option value="Anjan">Anjan</option>
                    </select>
                    <br/>
                    <br/>
                    <input type="checkbox" checked={isTrue} onChange={this.onChangehandler}/>
                    <br/>
                    <br/>
                    <input type="submit" value="Submit" />
                </form>

            </div>
        );
    }
}

export default FormHandling;