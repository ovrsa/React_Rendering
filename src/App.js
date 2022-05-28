import "./styles.css";
import { useState, useCallback, useMemo } from "react";
import { ChildArea } from "./ChildArea";

export default function App() {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => {
    setText(e.target.value);
  };

  const onClickOpen = () => {
    setOpen(!open);
  };

  // useMemo:変数だけのmemo化
  const temp = useMemo(() => 1 + 3, []);
  console.log(temp);

  // useCallback:親要素の再レンダリングを防ぐ為、[]で値を見張る
  const onClickClose = useCallback(() => setOpen(false), []);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}
