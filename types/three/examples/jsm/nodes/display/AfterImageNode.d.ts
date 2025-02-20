import Node from '../core/Node.js';
import TempNode from '../core/TempNode.js';
import TextureNode from '../accessors/TextureNode.js';
import UniformNode from '../core/UniformNode.js';
import { ShaderNodeObject } from '../shadernode/ShaderNode.js';

export default class AfterImageNode extends TempNode {
    textureNode: TextureNode;
    textureNodeOld: Node;
    damp: UniformNode<number>;

    constructor(textureNode: Node, damp?: number);

    setSize(width: number, height: number): void;
}

export const afterImage: (node: Node, damp?: number) => ShaderNodeObject<AfterImageNode>;

declare module '../shadernode/ShaderNode.js' {
    interface NodeElements {
        afterImage: typeof afterImage;
    }
}
