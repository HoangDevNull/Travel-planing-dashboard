import React, { Component } from 'react';
import 'draft-js/dist/Draft.css';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState, ContentState, convertToRaw } from 'draft-js';
import htmlToDraft from 'html-to-draftjs';
import { Editor } from 'react-draft-wysiwyg';

import draftToHtml from 'draftjs-to-html';
import { html } from './data';

class ConvertToRawDraftContent extends Component {
  constructor(props) {
    super(props);
    // const html = `<p></p`;
    const contentBlock = htmlToDraft(html);
    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(
        contentBlock.contentBlocks
      );
      const editorState = EditorState.createWithContent(contentState);
      this.state = {
        editorState
      };
    }
  }

  onEditorStateChange = (editorState) => {
    console.log(editorState);
    this.setState({
      editorState
    });
  };

  render() {
    const { editorState } = this.state;
    return (
      <>
        <div className="rdw-storybook-root" style={{
          width : '70%'
        }}>
          <Editor
            editorState={editorState}
            toolbarHidden
            onEditorStateChange={this.onEditorStateChange}
          />
        </div>
      </>
    );
  }
}

export default ConvertToRawDraftContent;
