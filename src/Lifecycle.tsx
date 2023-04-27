import React from "react";

interface ILifecycleProps {
  someProp: number;
}

interface ILifecycleState {
  stateField: number;
  isMounted: boolean;
  hasError: boolean;
}

export class Lifecycle extends React.Component<
  ILifecycleProps,
  ILifecycleState
> {
  constructor(props: ILifecycleProps) {
    super(props);

    this.state = { stateField: 0, isMounted: false, hasError: false };
    // this.handleClick = this.handleClick.bind(this);
  }

  static getDerivedStateFromProps(
    props: Readonly<ILifecycleProps>,
    state: Readonly<ILifecycleState>
  ) {
    return { stateField: props.someProp };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  public getSnapshotBeforeUpdate(
    prevProps: Readonly<ILifecycleProps>,
    prevState: Readonly<ILifecycleState>
  ): any {
    // return 1234;
    return null;
  }

  public componentDidUpdate(
    prevProps: Readonly<ILifecycleProps>,
    prevState: Readonly<ILifecycleState>,
    snapshot?: any
  ) {
    if (snapshot > 1000) {
      this.setState({});
    }
  }

  shouldComponentUpdate(
    nextProps: Readonly<ILifecycleProps>,
    nextState: Readonly<ILifecycleState>,
    nextContext: any
  ): boolean {
    // return this.state !== nextState || this.props != nextProps;
    // return false;
    return this.state !== nextState || this.props != nextProps;
  }

  public render() {
    if (this.state.hasError) {
      return <div>Error</div>;
    }

    return <div onClick={this.handleClick}>1</div>;
  }

  public componentDidMount() {
    // document.addEventListener("resize", () => {});
    // setTimeout(() => {}, 0);
    // this.setState({ isMounted: true });
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    //logError(errorInfo.componentStack);
  }

  public componentWillUnmount() {
    // document.removeEventListener("resize", () => {});
  }

  public UNSAFE_componentWillMount() {}

  private handleClick = () => {
    this.setState({ stateField: 1 });
  };
}