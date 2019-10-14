import * as React from 'react';
import './list.component.scss';

interface IListProps {
  list: Array<{name: string, url:string}>,
  load: (value:string) => any,
}

export default class List extends React.Component<IListProps> {
  constructor(public props: IListProps) {
    super(props);
  }

  public select = (event:any) => {
    this.props.load(event.target.value);
  }

  public render() {
    return (
      <ul className="list block">
        {
          this.props.list.map((item:{name: string, url:string}, key:number) => {
            return (<li key={key}>
              <button onClick={this.select} value={item.url}> {item.name} </button>
            </li>)
          })
        }
      </ul>
    );
  }
}