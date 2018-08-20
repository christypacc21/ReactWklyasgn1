import * as React from 'react';
import './App.css';

import AddBtn from './components/AddBtn';
import {ILink, ITag} from './models'

import LinkList from './components/LinkList';
import logo from './logo.svg';

import SearchBar from './components/SearchBar';



interface IAppStates{
  search: string;
  links:ILink[];
  linksFiltered: ILink[] | null;
}

class App extends React.Component<{}, IAppStates> {
  constructor(props:{}){
    super(props);
    this.state = {
      links:[
        {name:'Google', url:'http://www.google.com', tags:[]},
        {name:'DDDoogle', url:'http://www.DDDDoogle.com',tags:[]},
      ],
      linksFiltered : null,
      search:'',
    }
  }
 
  public render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="App-intro col-4">
            <img src={logo} className="App-logo" alt="logo" />
            <br />
            King of JS
            <AddBtn onAddLink={this.onAddButtonAddLink}/>
          </div>
          <div className="App-intro col-8">
            <SearchBar onSearchChange={this.onSearchBarChanged}/>
            Links for #React
          <LinkList links={this.state.linksFiltered != null ? this.state.linksFiltered : this.state.links}/>

          </div>
        </div>
      </div>
    );
  }

  private onAddButtonAddLink = (name:string, url:string, tags:ITag[]) =>{
    this.setState({
      links: this.state.links.concat([
        {name,url,tags}
      ])
    })
  }

  private onSearchBarChanged = (search:string) => {
    const lowerSearch = search.toLowerCase();
    this.setState({
      linksFiltered: this.state.links.filter(
        link => 
        link.name.toLowerCase().indexOf(lowerSearch) > -1 || // if the name hv that keyword
        link.url.toLowerCase().indexOf(lowerSearch) > -1 ) // if the url hv that keyword
    })
  }

}

export default App;
