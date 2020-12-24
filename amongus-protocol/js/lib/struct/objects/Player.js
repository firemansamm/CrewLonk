import { GameObject } from "./GameObject.js";
import { CustomNetworkTransform } from "../components/CustomNetworkTransform.js";
import { PlayerControl } from "../components/PlayerControl.js";
import { PlayerPhysics } from "../components/PlayerPhysics.js";
import { SpawnID } from "../../constants/Enums.js";
export class Player extends GameObject {
    constructor(client, parent, components) {
        super(client, parent);
        this.spawnid = SpawnID.Player;
        this.id = null;
        this.components = [
            new PlayerControl(client, components[0].netid, components[0].datalen, components[0].data),
            new PlayerPhysics(client, components[1].netid, components[1].datalen, components[1].data),
            new CustomNetworkTransform(client, components[2].netid, components[2].datalen, components[2].data)
        ];
        if (parent instanceof GameObject) {
            parent.addChild(this);
        }
    }
    get PlayerControl() {
        return this.components[0];
    }
    get PlayerPhysics() {
        return this.components[1];
    }
    get CustomNetworkTransform() {
        return this.components[2];
    }
}
