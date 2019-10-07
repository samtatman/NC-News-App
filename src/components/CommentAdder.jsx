import React from 'react'

class CommentAdder extends React.Component {
    state ={}

    render () {
        return (
            <form>
                <label > Tell us how we're wrong!!
                <input type='text'/>
                </label>
                <button>Submit</button>
                
            </form>
        )
    }
}

export default CommentAdder