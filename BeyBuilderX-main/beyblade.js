/*==========================================================*
 * BeyBuilder v1.1 for Beyblade X                           *
 * Author: Fabel                                            *
 * Copyright 2023                                           *
 *==========================================================*/

var allBlades = blades;
var allRatchets = ratchets;
var allBits = bits;

class BeyBlade {

    blade = -1;
    ratchet = -1;
    bit = -1;
    id = "";
    name = "";
    weight = 0;
    height = 0;
    spin = "invalid";
    winsKO = 0;
    winsSO = 0;
    winsBst = 0;
    winsX = 0;
    loseKO = 0;
    loseSO = 0;
    loseBst = 0;
    loseX = 0;
    draws = 0;

    constructor(blade, ratchet, bit){

        this.blade = blade;
        this.ratchet = ratchet;
        this.bit = bit;
        this.weight = allBlades[this.blade].weight + allRatchets[this.ratchet].weight + allBits[this.bit].weight;
        this.id = allBlades[this.blade].id + " " + allRatchets[this.ratchet].id + " " + allBits[this.bit].id;
        
        this.findName();
        this.findSpin();

    }

    //are these necessary?
    getBlade(){
        return this.blade;
    }
    getRatchet(){
        return this.ratchet;
    }
    getBit(){
        return this.bit;
    }
    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getWeight(){
        return this.weight;
    }
    getSpin(){
        return this.spin;
    }
    getDBid(){
        return this.id;
    }

    findSpin(){
        this.spin = allBlades[this.blade].spin;
    }

    findName(){
        this.name = allBlades[this.blade].name + " " + allRatchets[this.ratchet].abbv + allBits[this.bit].abbv;
    }

}