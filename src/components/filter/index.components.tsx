import * as React from "react";
import * as PokeApiTypes from "src/services/pokeapi.types";
import * as DexActions from 'src/store/dex/actions';

import { connect } from 'react-redux';

import styled from "styled-components";
import { bindActionCreators, Dispatch } from 'redux';
import { Panel, Scroll } from 'src/components/styles/panel.component.style';
import { List, Item } from 'src/components/styles/list.component.style';
import { AppStates } from 'src/store';

export const PokemonDiv = styled.div`
	display: flex;
	text-align: left;
	flex-direction: column;
`;


interface StateProps {
  list?: PokeApiTypes.List
}

interface DispatchProps {
  loadRequest(): void
}

type Props = StateProps & DispatchProps

class PokeFilters extends React.Component<Props> {

  componentDidMount() {
    this.props.loadRequest();
  }

  select = () => null

  render() {
    return this.props.list ? (
      <Panel>
        <Panel theme='screen'>
          <Scroll>
            <List>
              {this.props.list.results.map((item: PokeApiTypes.BaseObject, key: number) => (
                <Item key={key}>
                  <button onClick={this.select} value={item.url}>
                    {item.id} - {item.name}
                  </button>
                </Item>
              ))}
            </List>
          </Scroll>
        </Panel>
      </Panel>
    ) : <p>Loading...</p>;
  }
}

const mapStateToProps = (state: AppStates) => ({
  list: state.dex.data
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(DexActions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PokeFilters);