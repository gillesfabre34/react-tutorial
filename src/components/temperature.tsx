import React from "react";

export type TempScale = 'Celsius' | 'Fahrenheit';

export function isCelsius(scale: TempScale): boolean {
    return scale === 'Celsius';
}

export interface ITemperature {
    celsius: string,
    fahrenheit: string,
    message: string
}

export class Temperature extends React.Component<{}, ITemperature> {

    boilsMsg = "The water would boil";
    notBoilsMsg = "The water would not boil";

    constructor(props: any) {
        super(props);
        this.state = {message: this.boilsMsg, celsius: '', fahrenheit: ''}
        this.refresh = this.refresh.bind(this);
    }

    refresh(e: any): void {
        const scale: TempScale = e.target.name;
        const temperature: number = e.target.value;
        console.log("refreshhh", e.target.value, e.target.name)
        const celsius: number = isCelsius(scale) ? temperature : this.convert(scale, temperature);
        const fahrenheit: number = this.convert('Celsius', celsius);
        const message: string = this.isBoiling(scale, temperature) ? this.boilsMsg : this.notBoilsMsg;
        this.setState({message, fahrenheit: fahrenheit.toString(), celsius: celsius.toString()});
        console.log("NEW STATE", this.state)
    }

    isBoiling(scale: TempScale, value: number): boolean {
        const tempCelsius = isCelsius(scale) ? value : this.convert('Fahrenheit', value);
        return tempCelsius >= 100;
    }

    convert(from: TempScale, value: number): number {
        return from === 'Celsius' ? (+value * 9/5) + 32 : (+value - 32) * 5 / 9;
    }

    render() {
        return (
            <>
                <div style={{margin: "2em"}}>
                    <label htmlFor="Celsius">T (°C)</label>
                    <input type="text" id="Celsius" name="Celsius" defaultValue={this.state.celsius} onKeyUp={this.refresh}/>
                </div>
                <div style={{margin: "2em"}}>
                    <label htmlFor="Fahrenheit">T (°F)</label>
                    <input type="text" id="Fahrenheit" name="Fahrenheit" defaultValue={this.state.fahrenheit} onKeyUp={this.refresh}/>
                </div>
                <div>{this.state.message}</div>
            </>
    );
    }
}
