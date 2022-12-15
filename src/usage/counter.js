import { h } from 'snabbdom'
import Component from '../component/index.js'
import './counter.css'

class CounterItem extends Component {
    constructor(props) {
        super(props);
    }



    state() {
        return {
            localState: 'Local',
            arr: [1, 2, 3]
        }
    }

    methods() {
        return {
            updateLocalState: (e) => {
                this.state.localState = e.target.value
            },
            pushItem: () => {
                this.state.arr.push('1')
            }
        }
    }

    render () {
        return (
            <div>
                <p>
                    <input value={this.state.localState} on-input={this.methods.updateLocalState} type="text"/>
                    <strong>
                        {this.state.localState}
                    </strong>
                    {
                        ...this.state.arr.map((item) => {
                            return <div on-click={this.methods.pushItem}>{item}</div>
                        })
                    }
                </p>
            </div>
        )
    }
}

export class Counter extends Component {
    constructor(props) {
        super(props);
    }

    state() {
        return {
            counter: 0,
            items: [1],
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
            },
            setName: (name) => {
                this.state.name = name
            }
        }
    }

    render() {
        return <div
            class={{counter: this.state.name === 'Gholi'}}
            id='id'
            on-click={this.methods.addItem}
        >
            counter is: { this.state.counter }
            {...this.state.items.map((item) => {
                return (
                    <CounterItem>
                        <div>Hi Gholi</div>
                    </CounterItem>
                )
            })}
        </div>
    }

}

// new CounterItem({props: {}})

// h('div', { ... }, [....])