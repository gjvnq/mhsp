import { ReactElement } from "react";
import "./IndicatorLight.css";

export enum IndicatorLightStatus {
    Off = "off",
    Recovering = "recovering",
    Good = "good",
    Warning = "warning",
    Danger = "danger",
    Crisis = "crisis"
}

export interface IndicatorLightProps {
    status: IndicatorLightStatus
    label: string
}

const status_to_svg: Record<IndicatorLightStatus, ReactElement> = {
    off: <g transform="translate(-137.97 -120.46)"><ellipse cx="140.09" cy="122.58" rx="2.1167" ry="2.1167" fill="#d9d9d9" stroke-linecap="square" stroke-linejoin="round" stroke-width=".6823"/></g>,
    recovering: <g transform="translate(-137.97 -120.46)" stroke-linejoin="round"><ellipse cx="140.09" cy="122.58" rx="2.1167" ry="2.1167" fill="#7ad7ff" stroke-linecap="square" stroke-width=".6823"/><g fill="none" stroke="#fff" stroke-linecap="round" stroke-width=".26458"><path d="m138.72 122.94 1.3677-0.73542 1.3677 0.73542"/><path d="m138.72 123.44 1.3677-0.73542 1.3677 0.73542"/><path d="m138.72 122.44 1.3677-0.73542 1.3677 0.73542"/></g></g>,
    good: <g transform="translate(-137.97 -120.46)" stroke-linejoin="round"><g fill="none" stroke="#fff" stroke-linecap="round" stroke-width=".26458"><path d="m138.72 122.94 1.3677-0.73542 1.3677 0.73542"/><path d="m138.72 123.44 1.3677-0.73542 1.3677 0.73542"/><path d="m138.72 122.44 1.3677-0.73542 1.3677 0.73542"/></g><ellipse cx="140.09" cy="122.58" rx="2.1167" ry="2.1167" fill="#7fff7c" stroke-linecap="square" stroke-width=".6823"/><path d="m139.16 122.89 0.61736 0.61736 1.2347-1.8521" fill="none" stroke="#fff" stroke-linecap="round" stroke-width=".26458"/></g>,
    warning: <g transform="translate(-137.97 -120.46)"><g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width=".26458"><path d="m138.72 122.94 1.3677-0.73542 1.3677 0.73542"/><path d="m138.72 123.44 1.3677-0.73542 1.3677 0.73542"/><path d="m138.72 122.44 1.3677-0.73542 1.3677 0.73542"/><path d="m139.16 122.89 0.61736 0.61736 1.2347-1.8521"/></g><ellipse cx="140.09" cy="122.58" rx="2.1167" ry="2.1167" fill="#fff27e" stroke-linecap="square" stroke-linejoin="round" stroke-width=".6823"/><path d="m140.09 122.94v-1.318" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width=".26458"/><circle cx="140.09" cy="123.53" r=".13229" fill="#fff"/></g>,
    danger: <g transform="translate(-137.97 -120.46)"><ellipse cx="140.09" cy="122.58" rx="2.1167" ry="2.1167" fill="#ffc163" stroke-linecap="square" stroke-linejoin="round" stroke-width=".6823"/><path d="m140.35 122.94v-1.318" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width=".26458"/><circle cx="140.35" cy="123.53" r=".13229" fill="#fff"/><path d="m139.82 122.94v-1.318" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width=".26458"/><circle cx="139.82" cy="123.53" r=".13229" fill="#fff"/></g>,
    crisis: <g transform="translate(-137.97 -120.46)"><ellipse cx="140.09" cy="122.58" rx="2.1167" ry="2.1167" fill="#ff5a5a" stroke-linecap="square" stroke-linejoin="round" stroke-width=".6823"/><path d="m140.09 122.94v-1.318" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width=".26458"/><circle cx="140.09" cy="123.53" r=".13229" fill="#fff"/><path d="m140.62 122.94v-1.318" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width=".26458"/><circle cx="140.62" cy="123.53" r=".13229" fill="#fff"/><path d="m139.56 122.94v-1.318" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width=".26458"/><circle cx="139.56" cy="123.53" r=".13229" fill="#fff"/></g>
};

export default function IndicatorLight(props: IndicatorLightProps) {
    return <div className="indicator">
        <svg className="light" height="16" width="16" viewBox="0 0 4.2333 4.2333">{status_to_svg[props.status]}</svg>
        <span className="label">{props.label}</span>
    </div>;
}
