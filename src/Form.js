import React,{Component} from 'react'
import axios from 'axios'
import './Form.css'

class Form extends Component{

    constructor(props){
        super(props)

        this.state = {
            title : ' ',
            author : ' ',
            content : ' '
        }
    }

    changeHandler = (e) =>{
        this.setState({[e.target.name]:e.target.value})
    }

    handleSubmit = (e) =>{
        alert("Posted successfully")
        console.log("Posted successfully")
        console.log(this.state)
        axios.post("https://rsbook.herokuapp.com/posts",this.state)
        .then((response)=>{
            console.log(response)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    render(){
        const {title,author,content} = this.state
    return (
        <div className='card'>

            <form onSubmit={this.handleSubmit}>
                <div className='form'>
                    <div className='formName'>
                        <div>
                            <input className='textField' placeholder="Enter the title" type='text' name='title' value={title} onChange={this.changeHandler} />
                        </div>
                        <div>
                            <input className='textField' placeholder="Enter name of the author" type='text' value={author} name='author' onChange={this.changeHandler} />
                        </div>
                        <div>
                            <input className='textField' placeholder="Content" type='text' value={content} name='content' onChange={this.changeHandler} />
                        </div>
                    </div>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
    }
    
}

export default Form
