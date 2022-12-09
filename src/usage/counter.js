import { h } from 'snabbdom'
import Component from '../component/index.js'
import './counter.css'

class CounterItem extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return <div>{this.props.name}</div>
    }
}

export class counter extends Component {
    constructor(props) {
        super(props);
    }

    state() {
        return {
            counter: 0,
            items: [],
            name: 'Gholi'
        }
    }

    methods() {
        return {
            changeCounter: () => {
                this.state.counter++
                this.state.name = this.state.name === 'Ali' ? 'Gholi' : 'Ali'
            },
            addItem: () => {
                this.state.items.push(this.state.counter)
            }
        }
    }

    render() {
        return <div class={{counter: this.state.name === 'Gholi'}} on-click={() => {this.methods.addItem(); this.methods.changeCounter()}}>
            counter is: { this.state.counter }
            {...this.state.items.map((item) => {
                return new CounterItem({name: item}).render()
            })}
        </div>
    }

}

/*
 <div
    class="{{ counter: this.state.name === 'Gholi' }}"
    on-click="this.methods.addItem(); this.methods.changeCounter()"
    style="color: 'green'"
    >
      counter is: { this.state.counter }
     <CounterItem props="{{}}"></CounterItem>
 </div>

 */

/*

return h(
            'div',
            {
                style: {
                    color: 'green'
                },
                on: {
                    click: () => {
                        this.methods.addItem()
                        this.methods.changeCounter()
                    }
                },
                class: {
                    counter: this.state.name === 'Gholi'
                }
            },
            [
                `Counter is: ${this.state.counter}`,
                ...this.state.items.map((item, index) => {
                    return new counterItem({name: this.state.name}).render()
                })
            ]
        )

 */
