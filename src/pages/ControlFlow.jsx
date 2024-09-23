import { For, Index, Match, Show, Switch, createSignal } from 'solid-js';
import Card from "../components/Card";

export default function ControlFlow() {
  return (
    <div class="max-w-md my-8 mx-auto">
      <Card>
        <SwitchExample />
      </Card>
      <Card rounded={true}>
        <ForExample />
      </Card>
      <Card rounded={true}>
        <IndexExample />
      </Card>
    </div>
  );
}



function ForExample() {
  const [items, setItems] = createSignal([1, 2, 3]);

  const updateItems = () => {
    // Update the second item only
    setItems([1, Math.random(), 3]);
  };

  return (
    <div>
      <h3>Using For</h3>
      <For each={items()}>
        {(item) => <div>{item}</div>}
      </For>
      <button class="btn" onClick={updateItems}>Update Items</button>
    </div>
  );
}


function IndexExample() {
  const [items, setItems] = createSignal([1, 2, 3]);

  const updateItems = () => {
    // Update the second item only
    setItems([1, Math.random(), 3]);
  };

  return (
    <div>
      <h3>Using Index</h3>
      <Index each={items()}>
        {(item, index) => <div>{item()}</div>}
      </Index>
      <button class="btn" onClick={updateItems}>Update Items</button>
      <CheckRender />
    </div>
  );
}


function SwitchExample() {
  const [x] = createSignal(7);

  return (
    <Switch fallback={<p>{x()} is between 5 and 10</p>}>
      <Match when={x() > 10} >
        <p>{x()} is greater than 10</p>
      </Match>
      <Match when={5 > x()}>
        <p>{x()} is less than 5</p>
      </Match>
    </Switch>
  );
}

function CheckRender() {
  console.log("check render")
  return null 
}