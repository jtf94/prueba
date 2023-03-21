/* --- Levels data --- */

const levels = [
    // level 1
    {
        id: 1,
        // the blocks to show in the toolbox
        blocks: [
            'move'
        ],
        // game data
        game: {
            // pegman data
            pegman: {
                direction: 1,
                x: 0,
                y: 0
            },
            // marker data
            marker: {
                x: 3,
                y: 0
            },
            // game path
            path: [
                // [x, y]
                [0, 0],
                [1, 0],
                [2, 0],
                [3, 0]
            ]
        }
    },
    //level 2
    {
        id: 2,
        // maximum blocks allowed
        //maxBlocks: 10,
        //game data
        blocks: [
            'move'
            
        ],
        game: {
            // pegman data
            pegman: {
                direction: 2,
                x: 0,
                y: 0
            },
            // marker data
            marker: {
                x: 0,
                y: -4
            },
            // game path
            path: [
                // [x, y]
                [0, -1],
                [0, -2],
                [0, -3],
                [0, -4],
            ]
        }
    },
        // level 3
    {
        id: 3,
        // the blocks to show in the toolbox
        blocks: [
            'move'
            
        ],
        // game data
        game: {
            // pegman data
            pegman: {
                direction: 1,
                x: 0,
                y: 0
            },
            // marker data
            marker: {
                x: 6,
                y: 0
            },
            // game path
            path: [
             // [x, y]
                [1, 0],
                [2, 0],
                [3, 0],
                [4, 0],
                [5, 0],
                [6, 0],
            ]
        }
    },
    
 // level 4
    {
        id: 4,
        // the blocks to show in the toolbox
        blocks: [
            'move'
        ],
        // game data
        game: {
            // pegman data
            pegman: {
                direction: 2,
                x: 0,
                y: 0
            },
            // marker data
            marker: {
                x: 0,
                y: -7
            },
            // game path
            path: [
             // [x, y]
                [0, -1],
                [0, -2],
                [0, -3],
                [0, -4],
                [0, -5],
                [0, -6],
                [0, -7],
            ]
        }
    },
    
// level 5
    {
        id: 5,
        // the blocks to show in the toolbox
        blocks: [
            'move',   
            'turn'   
        ],
        // game data
        game: {
            // pegman data
            pegman: {
                direction: 1,
                x: 0,
                y: 0
            },
            // marker data
            marker: {
                x: 0,
                y: -4
            },
            // game path
            path: [
             // [x, y]
                [0, -1],
                [0, -2],
                [0, -3],
                [0, -4]
            ]
        }
    },
    
// level 6
    {
        id: 6,
        // the blocks to show in the toolbox
        blocks: [
            'move',
            'turn'
        ],
        // game data
        game: {
            // pegman data
            pegman: {
                direction: 3,
                x: 0,
                y: 0
            },
            // marker data
            marker: {
                x: 5,
                y: 0
            },
            // game path
            path: [
                // [x, y]
                [0, 0],
                [1, 0],
                [2, 0],
                [3, 0],
                [4, 0],
                [5, 0],

            ]
        }
    },

    //level 7
    {
        id: 7,
        // the blocks to show in the toolbox
        blocks: [
            'move',
            'turn'
        ],
        //game data
        game: {
            // pegman data
            pegman: {
                direction: 0,
                x: 0,
                y: 0
            },
            // marker data
            marker: {
                x: 2,
                y: -4
            },
            // game path
            path: [
                // [x, y]
                [0, 0],
                [1, 0],
                [2, 0],
                [2, -1],
                [2, -2],
                [2, -3],
                [2, -4],
                [2, -5],
            ]
        }
    },
    
     //level 8
    {
        id: 8,
        // the blocks to show in the toolbox
        blocks: [
            'move',
            'turn'
        ],
        //game data
        game: {
            // pegman data
            pegman: {
                direction: 3,
                x: 0,
                y: 0
            },
            // marker data
            marker: {
                x: 4,
                y: -4
            },
            // game path
            path: [
                // [x, y]
                [0, 0],
                [1, 0],
                [2, 0],
                [2, -1],
                [2, -2],
                [2, -3],
                [2, -4],
                [3, -4],
                [4, -4],
            ]
        }
    },
    
    //level 9
    {
        id: 9,
        // the blocks to show in the toolbox
        blocks: [
            'move',
            'turn'
        ],
        //game data
        game: {
            // pegman data
            pegman: {
                direction: 3,
                x: 0,
                y: 0
            },
            // marker data
            marker: {
                x: 5,
                y: -6
            },
            // game path
            path: [
                // [x, y]
                [0, 0],
                [1, 0],
                [2, 0],
                [2, -1],
                [2, -2],
                [2, -3],
                [2, -4],
                [3, -4],
                [4, -4],
                [5, -4],
                [5, -5],
                [5, -6],
                [5, -7],
            ]
        }
    },
    
    //level 10
    {
        id: 10,
        // the blocks to show in the toolbox
        blocks: [
            'move',
            'turn'
        ],
        //game data
        game: {
            // pegman data
            pegman: {
                direction: 1,
                x: 0,
                y: 0
            },
            // marker data
            marker: {
                x: 7,
                y: 6
            },
            // game path
            path: [
                // [x, y]
                [0, 0],
                [1, 0],
                [1, 1],
                [2, 1],
                [2, 2],
                [3, 2],
                [3, 3],
                [4, 3],
                [4, 4],
                [5, 4],
                [5, 5],
                [6, 5],
                [6, 6],
                [7, 6],
            ]
        }
    },
    
    // level 11
    {
        id: 11,
        // the blocks to show in the toolbox
        blocks: [
            'move',
            'repeat_until'
        ],
        // game data
        game: {
            // pegman data
            pegman: {
                direction: 1,
                x: 0,
                y: 0
            },
            // marker data
            marker: {
                x: 3,
                y: 0
            },
            // game path
            path: [
                // [x, y]
                [0, 0],
                [1, 0],
                [2, 0],
                [3, 0]
            ]
        }
    },
    
    //level 12
    {
        id: 12,
        // maximum blocks allowed
        //maxBlocks: 10,
        //game data
        blocks: [
            'move',
            'repeat_until'
            
        ],
        game: {
            // pegman data
            pegman: {
                direction: 2,
                x: 0,
                y: 0
            },
            // marker data
            marker: {
                x: 0,
                y: -4
            },
            // game path
            path: [
                // [x, y]
                [0, -1],
                [0, -2],
                [0, -3],
                [0, -4],
            ]
        }
    },
    
    // level 13
    {
        id: 13,
        // the blocks to show in the toolbox
        blocks: [
            'move',
            'repeat_until'
            
        ],
        // game data
        game: {
            // pegman data
            pegman: {
                direction: 1,
                x: 0,
                y: 0
            },
            // marker data
            marker: {
                x: 6,
                y: 0
            },
            // game path
            path: [
             // [x, y]
                [1, 0],
                [2, 0],
                [3, 0],
                [4, 0],
                [5, 0],
                [6, 0],
            ]
        }
    },
    
    // level 14
    {
        id: 14,
        // the blocks to show in the toolbox
        blocks: [
            'move',
            'repeat_until'
        ],
        // game data
        game: {
            // pegman data
            pegman: {
                direction: 2,
                x: 0,
                y: 0
            },
            // marker data
            marker: {
                x: 0,
                y: -7
            },
            // game path
            path: [
             // [x, y]
                [0, -1],
                [0, -2],
                [0, -3],
                [0, -4],
                [0, -5],
                [0, -6],
                [0, -7],
            ]
        }
    },
    
    // level 15
    {
        id: 15,
        // the blocks to show in the toolbox
        blocks: [
            'move',   
            'turn',
            'repeat_until'
        ],
        // game data
        game: {
            // pegman data
            pegman: {
                direction: 1,
                x: 0,
                y: 0
            },
            // marker data
            marker: {
                x: 0,
                y: -4
            },
            // game path
            path: [
             // [x, y]
                [0, -1],
                [0, -2],
                [0, -3],
                [0, -4]
            ]
        }
    },
    
    // level 16
    {
        id: 16,
        // the blocks to show in the toolbox
        blocks: [
            'move',
            'turn',
            'repeat_until'
        ],
        // game data
        game: {
            // pegman data
            pegman: {
                direction: 3,
                x: 0,
                y: 0
            },
            // marker data
            marker: {
                x: 5,
                y: 0
            },
            // game path
            path: [
                // [x, y]
                [0, 0],
                [1, 0],
                [2, 0],
                [3, 0],
                [4, 0],
                [5, 0],

            ]
        }
    },
    
 //level 7
    {
        id: 17,
        // the blocks to show in the toolbox
        blocks: [
            'move',
            'turn',
            'repeat_until'
        ],
        //game data
        game: {
            // pegman data
            pegman: {
                direction: 0,
                x: 0,
                y: 0
            },
            // marker data
            marker: {
                x: 2,
                y: -4
            },
            // game path
            path: [
                // [x, y]
                [0, 0],
                [1, 0],
                [2, 0],
                [2, -1],
                [2, -2],
                [2, -3],
                [2, -4],
                [2, -5],
            ]
        }
    },
    
    //level 18
    {
        id: 18,
        // the blocks to show in the toolbox
        blocks: [
            'move',
            'turn',
            'repeat_until'
        ],
        //game data
        game: {
            // pegman data
            pegman: {
                direction: 3,
                x: 0,
                y: 0
            },
            // marker data
            marker: {
                x: 4,
                y: -4
            },
            // game path
            path: [
                // [x, y]
                [0, 0],
                [1, 0],
                [2, 0],
                [2, -1],
                [2, -2],
                [2, -3],
                [2, -4],
                [3, -4],
                [4, -4],
            ]
        }
    },
    
    //level 19
    {
        id: 19,
        // the blocks to show in the toolbox
        blocks: [
            'move',
            'turn',
            'repeat_until'
        ],
        //game data
        game: {
            // pegman data
            pegman: {
                direction: 3,
                x: 0,
                y: 0
            },
            // marker data
            marker: {
                x: 5,
                y: -6
            },
            // game path
            path: [
                // [x, y]
                [0, 0],
                [1, 0],
                [2, 0],
                [2, -1],
                [2, -2],
                [2, -3],
                [2, -4],
                [3, -4],
                [4, -4],
                [5, -4],
                [5, -5],
                [5, -6],
                [5, -7],
            ]
        }
    },
    
    //level 20
    {
        id: 20,
        // the blocks to show in the toolbox
        blocks: [
            'move',
            'turn',
            'repeat_until'
        ],
        //game data
        game: {
            // pegman data
            pegman: {
                direction: 1,
                x: 0,
                y: 0
            },
            // marker data
            marker: {
                x: 7,
                y: 6
            },
            // game path
            path: [
                // [x, y]
                [0, 0],
                [1, 0],
                [1, 1],
                [2, 1],
                [2, 2],
                [3, 2],
                [3, 3],
                [4, 3],
                [4, 4],
                [5, 4],
                [5, 5],
                [6, 5],
                [6, 6],
                [7, 6],
            ]
        }
    },
]