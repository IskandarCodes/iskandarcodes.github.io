/*==========================================================*
 * BeyBuilder v1.1 for Beyblade X                           *
 * Author: Fabel                                            *
 * Copyright 2023                                           *
 *==========================================================*/

//0 weight means no weight data yet, same for height

var blades = [

    {"name":"Cobalt Drake", "spin":"right", "weight":36.80, "height":0, "abbv":"CD", "wins":0, "losses":0, "draws":0, "id":0},
    {"name":"Dran Sword", "spin":"right", "weight":34.97, "height":0, "abbv":"DS", "wins":0, "losses":0, "draws":0, "id":1},
    {"name":"Hells Scythe", "spin":"right", "weight":32.94, "height":0, "abbv":"HS", "wins":0, "losses":0, "draws":0, "id":2},
    {"name":"Knight Shield", "spin":"right", "weight":32.70, "height":0, "abbv":"KS", "wins":0, "losses":0, "draws":0, "id":3},
    {"name":"Wizard Arrow", "spin":"right", "weight":31.86, "height":0, "abbv":"WA", "wins":0, "losses":0, "draws":0, "id":4},
    {"name":"Dranzer Sprial", "spin":"right", "weight":27.82, "height":0, "abbv":"DrS", "wins":0, "losses":0, "draws":0, "id":5},
    {"name":"Knight Lance", "spin":"right", "weight":33.25, "height":0, "abbv":"KL", "wins":0, "losses":0, "draws":0, "id":6},
    {"name":"Shark Edge", "spin":"right", "weight":34.60, "height":0, "abbv":"SE", "wins":0, "losses":0, "draws":0, "id":7},
    {"name":"Leon Claw", "spin":"right", "weight":31.40, "height":0, "abbv":"LC", "wins":0, "losses":0, "draws":0, "id":8},
    {"name":"Viper Tail", "spin":"right", "weight":34.55, "height":0, "abbv":"VT", "wins":0, "losses":0, "draws":0, "id":9},
    {"name":"Dran Dagger", "spin":"right", "weight":34.91, "height":0, "abbv":"DD", "wins":0, "losses":0, "draws":0, "id":10},
    {"name":"Hells Chain", "spin":"right", "weight":33.33, "height":0, "abbv":"HC", "wins":0, "losses":0, "draws":0, "id":11},
    {"name":"Rhino Horn", "spin":"right", "weight":32.82, "height":0, "abbv":"RH", "wins":0, "losses":0, "draws":0, "id":12},
    {"name":"Phoenix Feather", "spin":"right", "weight":33.33, "height":0, "abbv":"PF", "wins":0, "losses":0, "draws":0, "id":13},
    {"name":"Phoenix Wing", "spin":"right", "weight":38.00, "height":0, "abbv":"PW", "wins":0, "losses":0, "draws":0, "id":14},
    {"name":"Wyvern Gale", "spin":"right", "weight":0, "height":0, "abbv":"WG", "wins":0, "losses":0, "draws":0, "id":15}
    
    
];

var ratchets = [

    {"name":"3-60", "weight":6.32, "height":60, "abbv":"3-60", "wins":0, "losses":0, "draws":0, "id":0},
    {"name":"3-80", "weight":7.10, "height":80, "abbv":"3-80", "wins":0, "losses":0, "draws":0, "id":1},
    {"name":"4-60", "weight":6.30, "height":60, "abbv":"4-60", "wins":0, "losses":0, "draws":0, "id":2},
    {"name":"4-80", "weight":7.00, "height":80, "abbv":"4-80", "wins":0, "losses":0, "draws":0, "id":3},
    {"name":"5-60", "weight":6.60, "height":60, "abbv":"5-60", "wins":0, "losses":0, "draws":0, "id":4},
    {"name":"5-80", "weight":7.15, "height":80, "abbv":"5-80", "wins":0, "losses":0, "draws":0, "id":5},
    {"name":"9-60", "weight":6.19, "height":60, "abbv":"9-60", "wins":0, "losses":0, "draws":0, "id":6}

];

var bits = [

    {"name":"Ball", "weight":2.10, "height":0, "abbv":"B", "wins":0, "losses":0, "draws":0, "id":0},
    {"name":"Flat", "weight":2.28, "height":0, "abbv":"F", "wins":0, "losses":0, "draws":0, "id":1},
    {"name":"Needle", "weight":2.03, "height":0, "abbv":"N", "wins":0, "losses":0, "draws":0, "id":2},
    {"name":"Taper", "weight":2.19, "height":0, "abbv":"T", "wins":0, "losses":0, "draws":0, "id":3},
    {"name":"High Needle", "weight":2.17, "height":0, "abbv":"HN", "wins":0, "losses":0, "draws":0, "id":4},
    {"name":"Low Flat", "weight":2.15, "height":0, "abbv":"LF", "wins":0, "losses":0, "draws":0, "id":5},
    {"name":"Point", "weight":2.20, "height":0, "abbv":"P", "wins":0, "losses":0, "draws":0, "id":6},
    {"name":"Orb", "weight":2.02, "height":0, "abbv":"O", "wins":0, "losses":0, "draws":0, "id":7},
    {"name":"Rush", "weight":2.02, "height":0, "abbv":"R", "wins":0, "losses":0, "draws":0, "id":8},
    {"name":"High Taper", "weight":2.22, "height":0, "abbv":"HT", "wins":0, "losses":0, "draws":0, "id":9},
    {"name":"Spike", "weight":2.02, "height":0, "abbv":"S", "wins":0, "losses":0, "draws":0, "id":10},
    {"name":"Gear Flat", "weight":2.28, "height":0, "abbv":"GF", "wins":0, "losses":0, "draws":0, "id":11},
    {"name":"Gear Ball", "weight":0, "height":0, "abbv":"GB", "wins":0, "losses":0, "draws":0, "id":12}

];