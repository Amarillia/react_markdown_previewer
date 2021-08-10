import React from 'react'

class Main extends React.Component {
    render() {
        return (
            <div id="main">
                <section className="editorSection">
                    <label>Editor</label>
                    <textarea id="editor" rows="20" cols="50">

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