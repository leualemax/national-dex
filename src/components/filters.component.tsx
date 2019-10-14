import * as React from 'react';
import './filter.component.scss';

export interface IFiltersProps {
  list: Array<{name: string, url:string}>,
  type?: string,
  types?: Array<{name: string, url:string}>,
  onFilter: (value:string) => any,
  onFetch: (value:string) => any,
  onChangeType: (event:any) => any,
}


export default class Filters extends React.Component<IFiltersProps> {
  constructor(public props: IFiltersProps) {
    super(props);
  }

  public filter = (event:any) => {
    this.props.onFilter(event.target.value);
  }

  public number = (event:any) => {
    let query:string = event.target.value;
    query = query.replace(/\D/g, "");
    if(query.length > 0){
      this.props.onFetch(`https://pokeapi.co/api/v2/pokemon/${query}`);
    }
  }

  public render() {
    return (
      <div className="head">
        <label>
          Name:
          <input type="text" className="block" onChange={this.filter} />
        </label>
        <label>
          Number:
          <input type="number" className="block" onChange={this.number} />
        </label>
        <label>
          Types:
          <select onChange={this.props.onChangeType} className="block" value={this.props.type}> 
            <option value="select"> Select </option>
            { this.props.types &&
              this.props.types.map((item:any, key:number) => {
                return (
                  <option value={item.name} key={key}> {item.name} </option>
                )
              })
            }
          </select>
        </label>
      </div>
    );
  }
}