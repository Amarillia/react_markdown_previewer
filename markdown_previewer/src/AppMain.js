import React from 'react'
import marked from 'marked';

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
        const inputText = e.target.value;
        preview.innerHTML = marked(inputText);
    }

    render() {
        return (
            <div id="main">
                <section className="editorSection">
                    <label>Editor</label>
                    <textarea id="editor" rows="20" cols="50" onChange={this.textInput} />
                </section>
                <section className="previewSection">
                    <h2>Preview</h2>
                    <div id="preview" />
                </section>
            </div>
        );
    }
}

// Example usage: <ShoppingList name="Mark" />
export default Main