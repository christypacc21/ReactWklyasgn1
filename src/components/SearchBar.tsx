import * as React from 'react'; // 51.40

interface ISearchBarProps{
onSearchChange: (search: string) => void; // why void (return nth) here?
}

interface ISearchBarState{
    search: string;
}

export default class SearchBar extends React.Component<ISearchBarProps, ISearchBarState> {
    constructor(props:ISearchBarProps){
        super(props);
        this.state = {search: ''}
    }
    public render() {
        return (
            <div>
                <input type="text" value={this.state.search} 
                onChange={this.onSearchChange} />
            </div>
        )
    }

    private onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newSearch = e.currentTarget.value;

        this.setState({
            search: newSearch
        });
        
        this.props.onSearchChange(newSearch);
    }
}