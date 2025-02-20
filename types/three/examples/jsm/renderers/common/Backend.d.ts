import { CoordinateSystem } from '../../../../src/Three.js';
import Renderer from './Renderer.js';

export interface BackendParameters {
    canvas?: HTMLCanvasElement | undefined;
}

export default abstract class Backend {
    renderer: Renderer | null;
    domElement: HTMLCanvasElement | null;

    constructor(parameters?: BackendParameters);

    init(renderer: Renderer): Promise<void>;

    abstract get coordinateSystem(): CoordinateSystem;

    getDomElement(): HTMLCanvasElement;
}
