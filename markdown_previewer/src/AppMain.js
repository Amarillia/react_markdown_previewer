import React from 'react'

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: "",
            output: ""
        };
        // Bind the event handlers
        this.textInput = this.textInput.bind(this);
    }


    textInput(e) {
        const preview = document.getElementById("preview");
        preview.innerHTML = e.target.value;
    }

    render() {
        return (
            <div id="main">
                <section className="editorSection">
                    <label>Editor</label>
                    <textarea id="editor" rows="20" cols="50" onChange={this.textInput}>

                    </textarea>
                </section>
                <section className="previewSection">
                    <h2>Preview</h2>
                    <div id="preview">

                    </div>
                </section>
            </div>
        );
    }
}

// Example usage: <ShoppingList name="Mark" />
export default Main