import React, { SyntheticEvent } from "react";

export type TempScale = 'Celsius' | 'Fahrenheit';

export function isCelsius(scale: TempScale): boolean {
    return scale === 'Celsius';
}

export interface ITemperature {
    message: string
}

export class Temperature extends React.Component<{}, ITemperature> {

    boilsMsg = "The water would boil";
    notBoilsMsg = "The water would not boil";

    constructor(props: any) {
        super(props);
        this.state = {message: this.boilsMsg}
        this.refresh = this.refresh.bind(this);
        console.log("SATTE", this.state)
    }

    refresh(e): void {
        const scale: TempScale = e.target.name;
        const temperature: number = e.target.value;
        console.log("refreshhh", e.target.value, e.target.name)
        const convertedTemperature: number = this.convert(scale, temperature);
        console.log('conv', convertedTemperature);
        this.setState({message: this.isBoiling(scale, temperature) ? this.boilsMsg : this.notBoilsMsg});
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
                    <input type="text" id="Celsius" name="Celsius" onKeyUp={this.refresh}/>
                </div>
                <div style={{margin: "2em"}}>
                    <label htmlFor="Fahrenheit">T (°F)</label>
                    <input type="text" id="Fahrenheit" name="Fahrenheit"/>
                </div>
                <div>{this.state.message}</div>
            </>
    );
    }
}
