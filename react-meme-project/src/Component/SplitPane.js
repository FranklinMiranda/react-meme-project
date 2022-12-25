// Custom conventions can be used to pass components into holes left in parent components
// SUch are props.left and props.right

const left = <h1>Left</h1>

const right = <h1>Right</h1>

function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">{props.left}</div>
      <div className="SplitPane-right">{props.right}</div>
    </div>
  );
}


function Pane() {
    return (
        <div className="Pane">
            <SplitPane left={left} right={right}/>
        </div>
    )
}

export default Pane