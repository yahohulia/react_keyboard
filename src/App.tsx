import React from 'react';

interface State {
  pressedKey: string;
}
class KeyPressed extends React.Component<State> {
  state: Readonly<State> = {
    pressedKey: '',
  };

  clickHandler = (event: KeyboardEvent): void => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.clickHandler);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.clickHandler);
  }

  render(): React.ReactNode {
    return (
      <p className="App__message">
        {this.state.pressedKey
          ? `The last pressed key is [${this.state.pressedKey}]`
          : 'Nothing was pressed yet'}
      </p>
    );
  }
}

export const App: React.FC = () => (
  <div className="App">
    <KeyPressed />
  </div>
);
