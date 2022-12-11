import { h } from 'snabbdom'
import Component from '../component/index.js'
import './counter.css'

class CounterItem extends Component {
    constructor(props) {
        super(props);
    }

    methods() {
        return {
            onTrigger: (name) => {
                const a = name.target.value
                this.props.onTrigger(a)
            }
        }
    }

    render () {
        return (
            <div>
                <input value={this.props.name} on-input={this.methods.onTrigger}>{this.props.name}</input>
                {this.slot}
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
        >
            counter is: { this.state.counter }
            {...this.state.items.map((item) => {
                return (
                    <CounterItem props={{name: this.state.name, onTrigger: (data)  => { this.methods.setName(data) }}}>
                        <div>
                            <strong>{item}</strong>
                            <p>{this.state.name}</p>
                        </div>
                    </CounterItem>
                )
            })}
        </div>
    }

}

// new CounterItem({props: {}})

// h('div', { ... }, [....])