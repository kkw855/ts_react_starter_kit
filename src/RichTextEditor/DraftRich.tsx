import React, { useEffect, useRef, useState } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
import 'draft-js/dist/Draft.css';
import styled from 'styled-components';

const styles = {
  root: {
    background: '#fff',
    border: '1px solid #ddd',
    fontFamily: "'Georgia', serif",
    fontSize: '14px',
    padding: '15px',
  },
  editor: {
    borderTop: '1px solid #ddd',
    cursor: 'text',
    fontSize: '16px',
    marginTop: '10px',
    minHeight: '100px',
  },
  controls: {
    fontFamily: "'Helvetica', sans-serif",
    fontSize: '14px',
    marginBottom: '5px',
    // userSelect: 'none',
  },
};

const Style = styled.span<{ active: boolean }>`
  color: ${(props) => (props.active ? '#5890ff' : '#999')};
  cursor: pointer;
  margin-right: 16px;
  padding: 2px 0;
  display: inline-block;
`;

const StyleButton: React.FC<{
  label: string;
  onToggle: (style: string) => void;
  style: string;
  active: boolean;
}> = ({ onToggle, style, active, label }) => {
  return (
    <Style
      onClick={(e) => {
        e.preventDefault();
        onToggle(style);
      }}
      active={active}
    >
      {label}
    </Style>
  );
};

const BLOCK_TYPES = [
  { label: 'H1', style: 'header-one' },
  { label: 'H2', style: 'header-two' },
  { label: 'H3', style: 'header-three' },
  { label: 'H4', style: 'header-four' },
  { label: 'H5', style: 'header-five' },
  { label: 'H6', style: 'header-six' },
  { label: 'Blockquote', style: 'blockquote' },
  { label: 'UL', style: 'unordered-list-item' },
  { label: 'OL', style: 'ordered-list-item' },
  { label: 'Code Block', style: 'code-block' },
];

const BlockStyleControls: React.FC<{
  editorState: EditorState;
  onToggle: (style: string) => void;
}> = (props) => {
  const { editorState, onToggle } = props;

  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();
  console.log(
    editorState
      .getCurrentContent()
      .getBlockForKey(selection.getStartKey())
      .getType(),
  );

  return (
    <div style={styles.controls}>
      {BLOCK_TYPES.map(({ label, style }) => (
        <StyleButton
          key={label}
          active={style === blockType}
          label={label}
          onToggle={onToggle}
          style={style}
        />
      ))}
    </div>
  );
};

const DraftRich: React.FC = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const editorRef = useRef<Editor>(null);
  const onChange = (editorState: EditorState) => {
    setEditorState(editorState);
  };

  const focus = () => {
    editorRef.current && editorRef.current.focus();
  };

  useEffect(() => {
    focus();
  }, []);

  const toggleBlockType = (blockType: string) => {
    onChange(RichUtils.toggleBlockType(editorState, blockType));
  };

  return (
    <div style={styles.root}>
      <BlockStyleControls
        editorState={editorState}
        onToggle={toggleBlockType}
      />
      <div style={styles.editor} onClick={focus}>
        <Editor
          editorState={editorState}
          onChange={onChange}
          placeholder="Enter some text..."
          ref={editorRef}
        />
      </div>
    </div>
  );
};

export default DraftRich;
