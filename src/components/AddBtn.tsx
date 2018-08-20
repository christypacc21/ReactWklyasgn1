import * as React from 'react';

import { ITag } from '../models';


interface IAddBtnProps {
    onAddLink: (name:string, url:string, tags:ITag[]) => void;
}

interface IAddBtnStates { // 31.50
    name: string,
    url: string,
    tags: ITag[]; // self-defined in models.js

}


export default class AddBtn extends React.Component<IAddBtnProps,IAddBtnStates>{
    constructor(props:IAddBtnProps){
        super(props);
        this.state = {
            name:'',
            tags:[],
            url: '',

        }
    }

    public render() {
        return (
            <div>
                <button onClick={this.addLink}>Add link</button>
                <input type="text" onChange={this.onNameChange} value={this.state.name} />
                <input type="text" onChange={this.onUrlChange} value={this.state.url} />

                {this.state.tags.map((tag,i) => {
                    return <input 
                    key={i} 
                    type="text" 
                    onChange={this.onTagChange.bind(this,i)} 
                    value={tag.name} />
                })}
                <button onClick={this.addTag}>Add Tag</button>
            </div>
        );
    }

    private addLink = () => { // link to upper level 35.10
        this.props.onAddLink(this.state.name, this.state.url, this.state.tags);
    }

    private addTag = () => { // so complicated , tag
        this.setState({tags: this.state.tags.concat([{
            name:'' // why hai name
        }])
    })
    }

    private onNameChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        this.setState({name: e.currentTarget.value})
    }

    private onUrlChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        this.setState({url: e.currentTarget.value});
    }
    private onTagChange = (i:number, e:React.ChangeEvent<HTMLInputElement>) => { // 47.50
        const tags = this.state.tags.slice();
        tags[i] = {
            name: e.currentTarget.value
        }; 
        this.setState({
            tags
        })
    }
}