export class ChoiceModel {
    text: string;
    targetNodeId: string;

    constructor(text: string, targetNodeId: string) {
        this.text = text;
        this.targetNodeId = targetNodeId;
    }
}

